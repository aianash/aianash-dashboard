import * as actions from 'actions'

const { EVENTS } = actions

function eventR(state = { isFetching: false }, action) {
  switch (action.type) {
    case EVENTS.REQUEST:
      return {
        ...state,
        isFetching: true
      }
    case EVENTS.SUCCESS:
      const {event} = action
      return {
        isFetching: false,
        ...event
      }
    case EVENTS.FAILURE:
      const {error} = action
      return {
        isFetching: false,
        error
      }
    case EVENTS.ABORT:
      return {
        ...state,
        isFetching: false
      }
    default:
      return state
  }
}

// Events reducer
// {
//  isFetching: boolean,
//  entities: {
//    name: {
//      isFetching: true,
//      props: {
//        name: {
//          type: <Boolean/String/Number/Date>,
//          values: []
//        },
//        ...
//      }
//    },
//    ...
//  }
// }
function events(state = { isFetching: false, entities: {} }, action) {
  switch (action.type) {
    case EVENTS.REQUEST: {
      const {name} = action
      if(name)
        return {
          ...state,
          entities: {
            ...state.entities,
            [name]: eventR(state.entities[name], action)
          }
        }
      else
        return {
          isFetching: true,
          entities: {}
        }
    }
    case EVENTS.SUCCESS:
      const {event, events} = action
      if(events) {
        const entities = _.reduce(events, (entities, ev) => {
          entities[ev] = { isFetching: false }
          return entities
        }, {})
        return {
          isFetching: false,
          entities
        }
      } else {
        return {
          isFetching: false,
          entities: {
            ...state.entities,
            [event.name]: eventR(state.entities[event.name], action)
          }
        }
      }
    case EVENTS.FAILURE: {
      const {name, error} = action
      if(name)
        return {
          ...state,
          entities: {
            ...state.entities,
            [name]: eventR(state.entities[name], action)
          }
        }
      else
        return {
          isFetching: false,
          error
        }
    }
    case EVENTS.ABORT: {
      const {name} = action
      if(name) {
        return {
          ...state,
          entities: {
            ...state.entities,
            [name]: eventR(state.entities[name], action)
          }
        }
      } else {
        return {
          ...state,
          isFetching: false,
        }
      }
    }
    default:
      return state
  }
}

export default events