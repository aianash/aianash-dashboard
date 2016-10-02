import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import context from 'reducers/context'
import trails from 'reducers/trails'
import behaviors from 'reducers/behaviors'
import * as AT from 'actions'

function errorMessage(state = null, action) {
  const {type, error} = action
  if(type === AT.RESET_ERROR_MESSAGE) {
    return null
  } else if(error) {
    return action.error
  }

  return state
}

const rootReducer = combineReducers({
  context,
  trails,
  behaviors,
  errorMessage,
  routing
})

export default rootReducer