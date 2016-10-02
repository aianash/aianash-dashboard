import * as actions from 'actions'

const { TRAIL, EVENTS } = actions

//
function query(state = { isFetching: false }, action) {
  switch (action.type) {
    case TRAIL.SEARCH:
      const {query} = action
      if(!query.fork) return query
      else return state
    case TRAIL.CANCEL_SEARCH:
      return {}
    default:
      return state
  }
}

export default query