import * as actions from 'actions'

const { STORY } = actions

//
function story(state = {}, action) {
  switch (action.type) {
    case STORY.REQUEST:
      return {
        ...state,
        isFetching: true
      }
    case STORY.SUCCESS:
      const {story} = action
      return {
        isFetching: false,
        story
      }
    case STORY.FAILURE:
      const {error} = action
      return {
        isFetching: false,
        error
      }
    case STORY.ABORT:
      return {
        ...state,
        isFetching: false,
      }
    default:
      return state
  }
}

//
function stories(state = {}, action) {
  switch (action.type) {
    case STORY.REQUEST:
    case STORY.SUCCESS:
    case STORY.FAILURE:
    case STORY.ABORT:
      return {
        ...state,
        [action.key]: story(state[action.key], action)
      }
    default:
      return state;
  }
}

export default stories