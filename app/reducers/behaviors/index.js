import { combineReducers } from 'redux'
import * as actions from 'actions'

import clusters from 'reducers/behaviors/clusters';
import stories from 'reducers/behaviors/stories';
import stats from 'reducers/behaviors/stats';
import informations from 'reducers/behaviors/informations';
import pageSeqs from 'reducers/behaviors/pageSeqs';

//
const behaviorId = (
  state = '',
  action
) => {
  switch (action.type) {
    default:
      return state
  }
};

const behaviorsReducer = combineReducers({
  behaviorId,     // seleted behavior id
  clusters,       // clusters
  stories,        // contain stories for behavior
  stats,          // contain both global and behavior stats
  informations,   // information details for behavior
  pageSeqs        // page sequences for behaviors
})

export default behaviorsReducer