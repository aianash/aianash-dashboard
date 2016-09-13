import * as actions from 'actions'

const { STAT } = actions

//
function stat(state = {}, action) {
  switch (action.type) {
    case STAT.REQUEST:
      return {
        ...state,
        isFetching: true
      }
    case STAT.SUCCESS:
      const {stat} = action
      return {
        isFetching: false,
        stat
      }
    case STAT.FAILURE:
      const {error} = action
      return {
        isFetching: false,
        error
      }
    case STAT.ABORT:
      return {
        isFetching: false,
        stat: {}
      }
    default:
      return state
  }
}

//
function stats(state = {}, action) {
  switch (action.type) {
    case STAT.REQUEST:
    case STAT.SUCCESS:
    case STAT.FAILURE:
    case STAT.ABORT:
      return {
        ...state,
        [action.key]: stat(state[action.key], action)
      }
    default:
      return state;
  }
}

export default stats