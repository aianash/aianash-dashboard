import { combineReducers } from 'redux'
import * as actions from 'actions'

const { INSTANCES, PAGES } = actions

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
function instance(
  state = {
    isFetching: false,
    configs: [],
  },
  action
) {
  switch (action.type) {
    case INSTANCES.REQUEST:
      return {
        ...state,
        isFetching: true
      }
    case INSTANCES.SUCCESS:
      const configs = action.res.map(conf => {
        return {
          ...conf,
          activeFrom: moment(conf.activeFrom),
          activeTo: moment(conf.activeTo)
        }
      })
      return {
        isFetching: false,
        configs
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

// instances by pageId
// {
//  pageId: {
//    isFetching: true/false,
//    configs: [
//      {
//        activeFrom: <Date>,
//        activeTo: <Date>,
//        spans: [
//          [fromHr, toHr, name, statsOnly],
//          ...
//        ]
//      },
//      ...
//    ]
//  }
// }
function instances(state = {}, action) {
  switch (action.type) {
    case INSTANCES.REQUEST:
    case INSTANCES.SUCCESS:
    case INSTANCES.FAILURE:
    case INSTANCES.ABORT:
      return {
        ...state,
        [action.pageId]: instance(state[action.pageId], action)
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
//      pageId,
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

// Holds context of the dashboard.
// Context tell what instance of page from
// a website is being used for analysis.
const contextReducer = combineReducers({
  contextType,  // website or page
  tokenId,      // tokenId for the current context
  pageId,       // pageId for the current context
  instanceId,   // selected instance from the current context
  pages,        // pages for the current tokenId
  instances     // instance details by pageId.
})

export default contextReducer