import { take, put, call, fork, select, cancel } from 'redux-saga/effects'
import { api, history } from 'services'
import * as actions from 'actions'
import {
  getTokenId,
  getInstanceConfigs,

  // behavior entities
  getStory,
  getStat,
  getInformation,
  getPageSeq
} from 'reducers/selector'

const { BEHAVIOR, INSTANCES, CLUSTERS } = actions
const { instances, pages, clusters, story, stat, information, pageSeq, behavior } = actions

// common subroutine for aync fetch cycle
function* fetchEntity(entity, apiFn, tokenId, query) {
  try {
    yield put(entity.request(query))
    const {response, error} = yield call(apiFn, tokenId, query)
    if(response) yield put(entity.success(query))
    else yield put(entity.failure(query))
  } finally {
    if(yield cancelled()) yield put(entity.abort(query))
  }
}

//////////////////////////////////////////////////////////////////
// Watching and loading behavior entities for selected behavior //
//////////////////////////////////////////////////////////////////

//
function cacheKey(pageId, instanceId, behaviorId) {
  return `${pageId}:${instanceId}:${behaviorId}`
}

//
function* loadBehaviorEntity(entity, selector, apiFn, tokenId, pageId, instanceId, behaviorId) {
  const key = cacheKey(pageId, instanceId, behaviorId)
  const entity = yield select(selector, key)
  if(!entity)
    yield call(fetchEntity, entity, apiFn, tokenId, {pageId, instanceId, behaviorId})
}

//
const loadStory       = loadBehaviorEntity.bind(null, story, getStory, api.fetchStory)
const loadStat        = loadBehaviorEntity.bind(null, stat, getStat, api.fetchStat)
const loadInformation = loadBehaviorEntity.bind(null, information, getInformation, api.fetchInformation)
const loadPageSeq     = loadBehaviorEntity.bind(null, pageSeq, getPageSeq, api.fetchPageSeq)

// will load entities related to a behavior
function* watchLoadBehavior() {
  let storyTask, statTask, informationTask, pageSeqTask
  let prevBehaviorId

  while(true) {
    const action = yield take([BEHAVIOR.LOAD, BEHAVIOR.CANCEL_LOAD])

    switch (action.type) {
      case BEHAVIOR.CANCEL_LOAD:
        if(storyTask) yield cancel(storyTask)
        if(statTask) yield cancel(statTask)
        if(informationTask) yield cancel(informationTask)
        if(pageSeqTask) yield cancel(pageSeqTask)

        prevBehaviorId = undefined
        break;

      case BEHAVIOR.LOAD:
        const {pageId, instanceId, behaviorId} = action
        if(prevBehaviorId !== behaviorId) {
          const tokenId = yield select(getTokenId)

          if(storyTask) yield cancel(storyTask)
          if(statTask) yield cancel(statTask)
          if(informationTask) yield cancel(informationTask)
          if(pageSeqTask) yield cancel(pageSeqTask)

          storyTask       = yield fork(loadStory, tokenId, pageId, instanceId, behaviorId)
          statTask        = yield fork(loadStat, tokenId, pageId, instanceId, behaviorId)
          informationTask = yield fork(loadInformation, tokenId, pageId, instanceId, behaviorId)
          pageSeqTask     = yield fork(loadPageSeq, tokenId, pageId, instanceId, behaviorId)
        }

        prevBehaviorId = behaviorId
        break;
    }
  }
}

////////////////////////////////////////////////////////
// Watching and loading clusters for seleted instance //
////////////////////////////////////////////////////////

const fetchClusters = fetchEntity.bind(null, clusters, api.fetchClusters)

//
function* loadClusters(tokenId, pageId, instanceId) {
  const cluster = yield select(getCluster, pageId, instanceId)
  if(!cluster) yield call(fetchClusters, tokenId, {pageId, instanceId})
}

// will load clusters
function* watchLoadClusters() {
  let task, prevInstanceId
  while(true) {
    const action = yield take([CLUSTERS.LOAD, CLUSTERS.CANCEL_LOAD])

    switch (action.type) {
      case CLUSTERS.CANCEL_LOAD:
        if(task) yield cancel(task)
        prevInstanceId = undefined
        break;

      case CLUSTERS.LOAD:
        const {pageId, instanceId} = action
        if(prevInstanceId !== instanceId) {
          const tokenId = yield select(getTokenId)

          if(task) yield cancel(task)
          task = yield fork(loadClusters, tokenId, pageId, instanceId)
        }

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
function hasInstanceForDate(configs, forDate) {
  configs.forEach(conf => {
    if(forDate.isBetween(conf.activeFrom, conf.activeTo, 'day', '[]'))
      return true
  })
  return false
}

//
function* loadInstances(tokenId, pageId, forDate) {
  const configs = yield select(getInstanceConfigs, pageId)
  if(!configs || !hasInstanceForDate(configs, forDate))
    yield call(fetchInstances, tokenId, {pageId, forDate})
}

// will load instances
function* watchLoadInstances() {
  let task, prevPageId, prevForDate;

  while(true) {
    const action = yield take([INSTANCES.LOAD, INSTANCES.CANCEL_LOAD])

    switch (action.type) {
      case INSTANCES.CANCEL_LOAD:
        if(task) yield cancel(task)

        prevPageId = undefined
        prevForDate = undefined
        break;

      case INSTANCES.LOAD:
        const {pageId, forDate} = action
        if(prevPageId !== pageId && prevForDate !== forDate) {
          const tokenId = yield select(getTokenId)
          if(task) yield cancel(task)
          task = yield fork(loadInstances, tokenId, pageId, forDate)
        }

        prevPageId = pageId
        prevForDate = forDate
        break;
    }
  }
}

///////////////
// Root Saga //
///////////////

export default function* root() {
  yield [
    fork(watchLoadInstances),
    fork(watchLoadClusters),
    fork(watchLoadBehavior)
  ]
}