import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import behaviors from 'reducers/behaviors';
import context from 'reducers/context';
import * as AT from 'actions';

function errorMessage(state = null, action) {
  const {type, error} = action;
  if(type === AT.RESET_ERROR_MESSAGE) {
    return null
  } else if(error) {
    return action.error
  }

  return state;
}

const rootReducer = combineReducers({
  context,
  behaviors,
  errorMessage,
  router
});

export default rootReducer;