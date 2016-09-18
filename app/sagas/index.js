import { take, put, call, fork, select, cancel, cancelled } from 'redux-saga/effects'
import moment from 'moment'
import { api, history } from 'services'
import * as actions from 'actions'
import {
  getTokenId,
  getPageId,
  getInstanceId,
  getForDate,
  getInstances,
  getCluster,
  getPageStats,
  getPages,
  // behavior entities
  getStory,
  getStat
} from 'reducers/selectors'

import {
  createInstanceId,
  isInstancesValid,
  behaviorEntityCacheKey,
  instancesCacheKey
} from 'utils'

const { PAGES, INSTANCES, PAGE_STATS, BEHAVIOR, CLUSTER } = actions
const { instances, pages, pageStats, cluster, story, stat, behavior } = actions

// common subroutine for aync fetch cycle
function* fetchEntity(entity, apiFn, tokenId, query) {
  try {
    yield put(entity.request(query))
    const {response, error} = yield call(apiFn, tokenId, query)
    if(response) yield put(entity.success(query, response))
    else yield put(entity.failure(query, error))
  } finally {
    if(yield cancelled()) yield put(entity.abort(query))
  }
}

//////////////////////////////////////////////////////////////////
// Watching and loading behavior entities for selected behavior //
//////////////////////////////////////////////////////////////////

//
function* loadBehaviorEntity(entity, selector, apiFn, tokenId, pageId, instanceId, behaviorId) {
  const key = behaviorEntityCacheKey(pageId, instanceId, behaviorId)
  const value = yield select(selector, key)
  if(!value)
    yield call(fetchEntity, entity, apiFn, tokenId, {pageId, instanceId, behaviorId, key})
}

//
const loadStory = loadBehaviorEntity.bind(null, story, getStory, api.fetchStory)
const loadStat  = loadBehaviorEntity.bind(null, stat, getStat, api.fetchStat)

// will load entities related to a behavior
function* watchLoadBehavior() {
  let storyTask, statTask
  let prevBehaviorId

  while(true) {
    const action = yield take([BEHAVIOR.LOAD, BEHAVIOR.CANCEL_LOAD])

    switch (action.type) {
      case BEHAVIOR.CANCEL_LOAD:
        if(storyTask) yield cancel(storyTask)
        if(statTask) yield cancel(statTask)

        prevBehaviorId = undefined
        break;

      case BEHAVIOR.LOAD:
        const {pageId, instanceId, behaviorId} = action
        if(prevBehaviorId !== behaviorId) {
          const tokenId = yield select(getTokenId)

          if(storyTask) yield cancel(storyTask)
          if(statTask) yield cancel(statTask)

          storyTask       = yield fork(loadStory, tokenId, pageId, instanceId, behaviorId)
          statTask        = yield fork(loadStat, tokenId, pageId, instanceId, behaviorId)
        }

        prevBehaviorId = behaviorId
        break;
    }
  }
}

////////////////////////////////////////////////////////
// Watching and loading cluster for seleted instance //
////////////////////////////////////////////////////////

const fetchCluster = fetchEntity.bind(null, cluster, api.fetchCluster)

//
function* loadCluster(tokenId, pageId, instanceId) {
  const cacheKey = instancesCacheKey(pageId, instanceId)
  const cluster = yield select(getCluster, cacheKey)
  if(!cluster) yield call(fetchCluster, tokenId, {pageId, instanceId})
}

// will load cluster
function* watchLoadCluster() {
  let task, prevPageId, prevInstanceId
  while(true) {
    const action = yield take([CLUSTER.LOAD, CLUSTER.CANCEL_LOAD])

    switch (action.type) {
      case CLUSTER.CANCEL_LOAD:
        if(task) yield cancel(task)
        prevPageId = undefined
        prevInstanceId = undefined
        break;

      case CLUSTER.LOAD:
        const {pageId, instanceId} = action
        if(prevPageId !== pageId || prevInstanceId !== instanceId) {
          const tokenId = yield select(getTokenId)
          if(task) yield cancel(task)
          task = yield fork(loadCluster, tokenId, pageId, instanceId)
        }
        prevPageId = pageId
        prevInstanceId = instanceId
        break;
    }
  }
}

////////////////////////////////////////////////////////
// Watching and Loading Instances for a page and date //
////////////////////////////////////////////////////////

const fetchInstances = fetchEntity.bind(null, instances, api.fetchInstances)

//
function* loadInstances(tokenId, forDate) {
  const instances = yield select(getInstances)
  if(!instances || !isInstancesValid(instances, forDate))
    yield call(fetchInstances, tokenId, {forDate})
}

// will load instances
function* watchLoadInstances() {
  let task, prevForDate;

  while(true) {
    const action = yield take([INSTANCES.LOAD, INSTANCES.CANCEL_LOAD])

    switch (action.type) {
      case INSTANCES.CANCEL_LOAD:
        if(task) yield cancel(task)
        prevForDate = undefined
        break;

      case INSTANCES.LOAD:
        const {forDate} = action
        if(!forDate.isSame(prevForDate)) {
          const tokenId = yield select(getTokenId)
          if(task) yield cancel(task)
          task = yield fork(loadInstances, tokenId, forDate)
        }

        prevForDate = forDate
        break;
    }
  }
}

//////////////////////
// Watch Load Pages //
//////////////////////

function* fetchPages(tokenId) {
  const query = {tokenId}
  try {
    yield put(pages.request(query))
    const {response, error} = yield call(api.fetchPages, tokenId)
    if(response) yield put(pages.success(query, response))
    else yield put(pages.failure(query, error))
  } finally {
    if(yield cancelled()) yield put(pages.abort(query))
  }
}


function* watchLoadPages() {
  let task
  while(true) {
    yield take(PAGES.LOAD)
    const tokenId = yield select(getTokenId)
    if(task) yield cancel(task)
    task = yield fork(fetchPages, tokenId)
  }
}

//////////////////////
// Watch Load Pages //
//////////////////////

const fetchPageStats = fetchEntity.bind(null, pageStats, api.fetchPageStats)

function* loadPageStats(tokenId, instanceId, pageId) {
  const cacheKey = instancesCacheKey(pageId, instanceId)
  const pageStats = yield select(getPageStats, cacheKey)
  if(!pageStats) yield call(fetchPageStats, tokenId, {pageId, instanceId})
}

function* watchLoadPageStats() {
  let task, prevInstanceId, prevPageId

  while(true) {
    const action = yield take([PAGE_STATS.LOAD, PAGE_STATS.CANCEL_LOAD])

    switch (action.type) {
      case PAGE_STATS.CANCEL_LOAD:
        if(task) yield cancel(task)
        prevInstanceId = undefined
        prevPageId = undefined
        break

      case PAGE_STATS.LOAD:
        const {instanceId, pageId} = action
        if(prevInstanceId !== instanceId || prevPageId !== pageId) {
          const tokenId = yield select(getTokenId)
          if(task) yield cancel(task)
          task = yield fork(loadPageStats, tokenId, instanceId, pageId)
        }
        prevInstanceId = instanceId
        prevPageId = prevPageId
    }
  }
}

/////////////////////
// Watch Selectors //
/////////////////////

function* watchSelect() {
  while(true) {
    yield take([INSTANCES.SELECT, PAGES.SELECT])
    const pageId = yield select(getPageId)
    const instanceId = yield select(getInstanceId)
    if(!_.isEmpty(pageId) && !_.isEmpty(instanceId)) {
      yield put(cluster.load({pageId, instanceId}))
      yield put(pageStats.load({pageId, instanceId}))
      yield put(behavior.invalidate())
    }
  }
}


/////////////////////////
// Fetch Initial State //
/////////////////////////

function* fetchInitialState() {
  const tokenId = yield select(getTokenId)
  const forDate = yield select(getForDate)
  yield put(instances.load({forDate}))
  yield put(pages.load({tokenId}))

  let instanceId, pageId
  while(!instanceId || !pageId) {
    const action = yield take([INSTANCES.SUCCESS, PAGES.SUCCESS])
    switch (action.type) {
      case INSTANCES.SUCCESS:
        const {spans} = action.config
        const span = spans[0]
        instanceId = createInstanceId(forDate, span)
        break;

      case PAGES.SUCCESS:
        pageId = action.pages[0].pageId
    }
  }
  yield put(instances.select({instanceId}))
  yield put(pages.select({pageId}))

  const action = yield take(CLUSTER.SUCCESS)
  const behaviorId = action.cluster[0].behaviorId
  yield put(behavior.select({behaviorId}))
  yield put(behavior.load({pageId, instanceId, behaviorId}))
}

///////////////
// Root Saga //
///////////////

export default function* root() {
  yield [
    fork(watchSelect),
    fork(watchLoadPages),
    fork(watchLoadPageStats),
    fork(watchLoadInstances),
    fork(watchLoadCluster),
    fork(watchLoadBehavior)
  ]

  yield fork(fetchInitialState)
}