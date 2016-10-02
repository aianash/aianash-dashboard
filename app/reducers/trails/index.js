import { combineReducers } from 'redux'
import * as actions from 'actions'
import events from 'reducers/trails/events'
import query from 'reducers/trails/query'
import trail from 'reducers/trails/trail'
import forks from 'reducers/trails/forks'

const trailsReducer = combineReducers({
  events,
  query,
  trail,
  forks
})

export default trailsReducer