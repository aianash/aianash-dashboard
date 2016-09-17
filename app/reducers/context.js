import { combineReducers } from 'redux'
import * as actions from 'actions'
import moment from 'moment'
import _ from 'lodash'
import {instancesCacheKey} from 'utils'

const { FOR_DATE, INSTANCES, PAGE_STATS, PAGES } = actions

// [NOTE] only supporting one tokenId per account
function tokenId(state = '', action) {
  return state
}

//
function pageId(state = '', action) {
  switch (action.type) {
    case PAGES.SELECT:
      return action.pageId
    case PAGES.INVALIDATE:
      return ''
    default:
      return state
  }
}

//
function forDate(state = moment(), action) {
  switch (action.type) {
    case FOR_DATE.SELECT:
      return action.forDate
    case FOR_DATE.INVALIDATE:
      return undefined
    default:
      return _.isString(state) ? moment(state) : state
  }
}

// [NOTE] only supporting page context type
function contextType(state = 'page', action) {
  return state
}

//
function instanceId(state = '', action) {
  switch (action.type) {
    case INSTANCES.SELECT:
      return action.instanceId
    case INSTANCES.INVALIDATE:
      return ''
    default:
      return state
  }
}

// instance for a page id
function instances(
  state = {isFetching: false},
  action
) {
  switch (action.type) {
    case INSTANCES.REQUEST:
      return {
        ...state,
        isFetching: true
      }
    case INSTANCES.SUCCESS:
      const {activeFrom, activeTo} = action.config
      return {
        ...action.config,
        isFetching: false,
        activeFrom: moment(activeFrom),
        activeTo: (activeTo === 'ACTIVE' ? activeTo: moment(activeTo))
      }
    case INSTANCES.FAILURE:
      const {error} = action
      return {
        isFetching: false,
        error
      }
    case INSTANCES.ABORT:
      return {
        ...state,
        isFetching: false,
      }
    default:
      return state
  }
}

// pages for the current tokenId
// {
//  isFetching: true/false,
//  entities: [
//    {
//      pageId
//      url,
//      name
//    },
//    ...
//  ]
// }
function pages(
  state = {
    isFetching: false,
    entities: []
  },
  action
) {
  switch (action.type) {
    case PAGES.REQUEST:
      return {
        ...state,
        isFetching: true
      }
    case PAGES.SUCCESS:
      return {
        isFetching: false,
        entities: action.pages
      }
    case PAGES.FAILURE:
      const { error } = action
      return {
        isFetching: false,
        error
      }
    case PAGES.ABORT:
      return {
        ...state,
        isFetching: false,
      }
    default:
      return state
  }
}

//
function pageStat(
  state = {isFetching: false},
  action
) {
  switch (action.type) {
    case PAGE_STATS.REQUEST:
      return {
        ...state,
        isFetching: true
      }
    case PAGE_STATS.SUCCESS:
      const {stats} = action
      return {
        isFetching: false,
        stats
      }
    case PAGE_STATS.FAILURE:
      const {error} = action
      return {
        isFetching: false,
        error
      }
    case PAGE_STATS.ABORT:
      return {
        ...state,
        isFetching: false,
      }
    default:
      return state
  }
}

//
function pageStats(state = {}, action) {
  switch (action.type) {
    case PAGE_STATS.REQUEST:
    case PAGE_STATS.SUCCESS:
    case PAGE_STATS.FAILURE:
    case PAGE_STATS.ABORT:
      const {pageId, instanceId} = action
      const key = instancesCacheKey(pageId, instanceId)
      return {
        ...state,
        [key]: pageStat(state[action.key], action)
      }
    default:
      return state;
  }
}

// Holds context of the dashboard.
// Context tell what instance of page from
// a website is being used for analysis.
const contextReducer = combineReducers({
  contextType,  // website or page
  tokenId,      // tokenId for the current context
  forDate,      // date used for the current context
  pageId,       // pageId for the current context
  instanceId,   // selected instance from the current context
  pages,        // pages for the current tokenId
  instances,    // instance details by pageId.
  pageStats
})

export default contextReducer