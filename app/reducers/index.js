import { combineReducers } from 'redux';
import message from 'reducers/message';
import { routerReducer as routing } from 'react-router-redux';

const rootReducer = combineReducers({
  message,
  routing
});

export default rootReducer;