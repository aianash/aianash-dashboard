import * as actions from 'actions'
import { instancesCacheKey } from 'utils'

const { INFORMATION } = actions

//
function information(state = {isFetching: false}, action) {
  switch (action.type) {
    case INFORMATION.REQUEST:
      return {
        ...state,
        isFetching: true
      }
    case INFORMATION.SUCCESS:
      const {information} = action
      return {
        isFetching: false,
        information
      }
    case INFORMATION.FAILURE:
      const {error} = action
      return {
        isFetching: false,
        error
      }
    case INFORMATION.ABORT:
      return {
        ...state,
        isFetching: false
      }
    default:
      return state
  }
}

//
function informations(state = {}, action) {
  switch (action.type) {
    case INFORMATION.REQUEST:
    case INFORMATION.SUCCESS:
    case INFORMATION.FAILURE:
    case INFORMATION.ABORT:
      const {pageId, instanceId} = action
      const key = instancesCacheKey(pageId, instanceId)
      return {
        ...state,
        [key]: information(state[key], action)
      }
    default:
      return state
  }
}

export default informations