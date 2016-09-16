import { combineReducers } from 'redux'
import * as actions from 'actions'

import clusters from 'reducers/behaviors/clusters';
import stories from 'reducers/behaviors/stories';
import stats from 'reducers/behaviors/stats';

const { BEHAVIOR } = actions

//
const behaviorId = (
  state = '',
  action
) => {
  switch (action.type) {
    case BEHAVIOR.SELECT:
      return action.behaviorId
    case BEHAVIOR.INVALIDATE:
      return ''
    default:
      return state
  }
};

//
const behaviorsReducer = combineReducers({
  behaviorId,     // seleted behavior id
  clusters,       // clusters
  stories,        // contain stories for behavior
  stats,          // contain both global and behavior stats
})

export default behaviorsReducer