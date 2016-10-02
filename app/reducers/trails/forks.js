import * as actions from 'actions'

const { TRAIL } = actions

//
function forks(state = {}, action) {
  switch (action.type) {
    case TRAIL.REQUEST: {
      const {query} = action
      if(query.isfork)
        return {
          ...state,
          [query._fid]: { isFetching: false }
        }
      else return state
    }
    case TRAIL.SUCCESS: {
      const {query, trail} = action
      if(trail.isfork)
        return {
          ...state,
          [query._fid]: { isFetching: false, ...trail }
        }
      else return state
    }
    default:
      return state
  }
}

export default forks