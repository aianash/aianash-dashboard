import * as actions from 'actions'

const { INFORMATION } = actions

//
function information(state = {}, action) {
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
        isFetching: false,
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
      return {
        ...state,
        [action.key]: information(state[action.key], action)
      }
    default:
      return state;
  }
}

export default informations