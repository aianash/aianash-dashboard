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
  getInformation,
  getPageStats,
  getPages,
  // behavior entities
  getStory,
  getStat,
  //
  getEvent
} from 'reducers/selectors'

import {
  createInstanceId,
  isInstancesValid,
  behaviorEntityCacheKey,
  instancesCacheKey
} from 'utils'

const { PAGES, EVENTS, TRAIL, INSTANCES, PAGE_STATS, BEHAVIOR, CLUSTER, INFORMATION } = actions
const { instances, events, trail, pages, pageStats, cluster, story, stat, behavior, information } = actions

// common subroutine for aync fetch cycle
function* fetchEntity(entity, apiFn, tokenId, query) {
  try {
    yield put(entity.request(query))
    const _query = _.omitBy(query, (v, k) => k[0] === '_')
    const {response, error} = yield call(apiFn, tokenId, _query)
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
  let prevBehaviorId, prevPageId, prevInstanceId

  while(true) {
    const action = yield take([BEHAVIOR.LOAD, BEHAVIOR.CANCEL_LOAD])

    switch (action.type) {
      case BEHAVIOR.CANCEL_LOAD:
        if(storyTask) yield cancel(storyTask)
        if(statTask) yield cancel(statTask)

        prevBehaviorId = undefined
        prevPageId = undefined
        prevInstanceId = undefined
        break;

      case BEHAVIOR.LOAD:
        const {pageId, instanceId, behaviorId} = action
        if(prevBehaviorId !== behaviorId || prevPageId !== pageId || prevInstanceId !== instanceId) {
          const tokenId = yield select(getTokenId)

          if(storyTask) yield cancel(storyTask)
          if(statTask) yield cancel(statTask)

          storyTask       = yield fork(loadStory, tokenId, pageId, instanceId, behaviorId)
          statTask        = yield fork(loadStat, tokenId, pageId, instanceId, behaviorId)
        }

        prevBehaviorId = behaviorId
        prevPageId = pageId
        prevInstanceId = instanceId
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

////////////////////////////
// Watch Load Information //
////////////////////////////

const fetchInformation = fetchEntity.bind(null, information, api.fetchInformation)

//
function* loadInformation(tokenId, pageId, instanceId) {
  const cacheKey = instancesCacheKey(pageId, instanceId)
  const information = yield select(getInformation, cacheKey)
  if(!information) yield call(fetchInformation, tokenId, {pageId, instanceId})
}

//
function* watchLoadInformation() {
  let task, prevPageId, prevInstanceId
  while(true) {
    const action = yield take([INFORMATION.LOAD, INFORMATION.CANCEL_LOAD])

    switch (action.type) {
      case INFORMATION.CANCEL_LOAD:
        if(task) yield cancel(task)
        prevPageId = undefined
        prevInstanceId = undefined
        break;

      case INFORMATION.LOAD:
        const {pageId, instanceId} = action
        if(prevPageId !== pageId || prevInstanceId !== instanceId) {
          const tokenId = yield select(getTokenId)
          if(task) yield cancel(task)
          task = yield fork(loadInformation, tokenId, pageId, instanceId)
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

///////////////////////////
// Watch Load Page Stats //
///////////////////////////

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


//////////////////////////////////////
// Watch Load Events and Properties //
//////////////////////////////////////


const fetchEvents = fetchEntity.bind(null, events, api.fetchEvents)
const fetchEventProperties = fetchEntity.bind(null, events, api.fetchEventProperties)

function* loadEventProperties(tokenId, name) {
  const event = yield select(getEvent, name)
  if(!event.props)
    yield call(fetchEventProperties, tokenId, {name})
}

function* watchLoadEvents() {
  let task

  while(true) {
    const action = yield take([EVENTS.LOAD, EVENTS.CANCEL_LOAD])

    switch (action.type) {
      case EVENTS.CANCEL_LOAD:
        if(task) yield cancel(task)
        break

      case EVENTS.LOAD:
        const {name} = action
        const tokenId = yield select(getTokenId)
        if(name) task = yield fork(loadEventProperties, tokenId, name)
        else task = yield fork(fetchEvents, tokenId)
    }
  }
}

////////////////////////
// Watch Search Trail //
////////////////////////

const searchTrail = fetchEntity.bind(null, trail, api.searchTrail)
const forkTrail = fetchEntity.bind(null, trail, api.forkTrail)

function* watchSearchTrail() {
  let trailTask, forkTasks = {}

  while(true) {
    const action = yield take([TRAIL.SEARCH, TRAIL.CANCEL_SEARCH])
    const {query} = action

    if(!query.isfork) {
      if(trailTask) yield cancel(trailTask)
      for(tid in _.keys(forkTasks)) {
        yield cancel(forkTasks[tid])
      }

      if(action.type === TRAIL.SEARCH) {
        const tokenId = yield select(getTokenId)
        trailTask = yield fork(searchTrail, tokenId, {query})
      }
    } else {
      let forkTask = forkTasks[query._fid]
      if(forkTask) yield cancel(forkTask)

      if(action.type === TRAIL.SEARCH) {
        const tokenId = yield select(getTokenId)
        forkTask = yield fork(forkTrail, tokenId, {query})
      } else forkTask = undefined

      forkTasks[query._fid] = forkTask
    }
  }
}


/////////////////////
// Watch Selectors //
/////////////////////

function* watchSelect() {
  while(true) {
    yield take([INSTANCES.SELECT, PAGES.SELECT])
    yield put(cluster.cancelLoad())
    yield put(pageStats.cancelLoad())
    yield put(information.cancelLoad())

    const pageId = yield select(getPageId)
    const instanceId = yield select(getInstanceId)
    if(!_.isEmpty(pageId) && !_.isEmpty(instanceId)) {
      yield put(cluster.load({pageId, instanceId}))
      yield put(information.load({pageId, instanceId}))
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
    fork(watchLoadInformation),
    fork(watchLoadBehavior),
    fork(watchLoadEvents),
    fork(watchSearchTrail)
  ]

  yield fork(fetchInitialState)
}