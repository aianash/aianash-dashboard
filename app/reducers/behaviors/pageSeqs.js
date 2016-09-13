import * as actions from 'actions'

const { PAGESEQ } = actions

//
function pageSeq(state = {}, action) {
  switch (action.type) {
    case PAGESEQ.REQUEST:
      return {
        ...state,
        isFetching: true
      }
    case PAGESEQ.SUCCESS:
      const {pageSeq} = action
      return {
        isFetching: false,
        pageSeq
      }
    case PAGESEQ.FAILURE:
      const {error} = action
      return {
        isFetching: false,
        error
      }
    case PAGESEQ.ABORT:
      return {
        ...state,
        isFetching: false,
      }
    default:
      return state
  }
}

//
function pageSeqs(state = {}, action) {
  switch (action.type) {
    case PAGESEQ.REQUEST:
    case PAGESEQ.SUCCESS:
    case PAGESEQ.FAILURE:
    case PAGESEQ.ABORT:
      return {
        ...state,
        [action.key]: pageSeq(state[action.key], action)
      }
    default:
      return state;
  }
}

export default pageSeqs