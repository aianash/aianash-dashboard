import { combineReducers } from 'redux'
import * as actions from 'actions'
import { clusters, stories, stats, informations, pageSeqs } from 'reducers/behaviors'

const { BEHAVIOR } = actions

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