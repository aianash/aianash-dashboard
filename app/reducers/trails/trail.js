import * as actions from 'actions'

const { TRAIL } = actions

//
function trail(state = {}, action) {
  switch (action.type) {
    case TRAIL.REQUEST:
      const {query} = action
      if(query.isfork) return state
      else
        return {
          ...state,
          isFetching: true
        }
    case TRAIL.SUCCESS:
      const {trail} = action
      if(!trail.isfork)
        return {
          isFetching: false,
          ...trail
        }
      else return state
    default:
      return state
  }
}

export default trail