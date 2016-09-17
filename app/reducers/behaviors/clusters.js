import * as actions from 'actions'
import {instancesCacheKey} from 'utils'

const { CLUSTER } = actions

//
function cluster(state = {}, action) {
  switch (action.type) {
    case CLUSTER.REQUEST:
      return {
        ...state,
        isFetching: true
      }
    case CLUSTER.SUCCESS:
      const {cluster} = action
      return {
        isFetching: false,
        cluster
      }
    case CLUSTER.FAILURE:
      const {error} = action
      return {
        isFetching: false,
        error
      }
    case CLUSTER.ABORT:
      return {
        ...state,
        isFetching: false,
      }
    default:
      return state
  }
}

//
function clusters(state = {}, action) {
  switch (action.type) {
    case CLUSTER.REQUEST:
    case CLUSTER.SUCCESS:
    case CLUSTER.FAILURE:
    case CLUSTER.ABORT:
      const {pageId, instanceId} = action
      const key = instancesCacheKey(pageId, instanceId)
      return {
        ...state,
        [key]: cluster(state[action.key], action)
      }
    default:
      return state;
  }
}

export default clusters