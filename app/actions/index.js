//////////////////
// Action Types //
//////////////////

const REQUEST = 'REQUEST'
const SUCCESS = 'SUCCESS'
const FAILURE = 'FAILURE'
const ABORT   = 'ABORT'

const LOAD = 'LOAD'
const CANCEL_LOAD = 'CANCEL_LOAD'

const SELECT = 'SELECT'
const INVALIDATE = 'INVALIDATE'

function createActionTypes(base, types) {
  return types.reduce((acc, type) => {
    acc[type] = `${base}_${type}`
    return acc
  }, {})
}

const RequestTypes = [REQUEST, SUCCESS, FAILURE, ABORT]
const LoadTypes    = [LOAD, CANCEL_LOAD]
const SelectTypes  = [SELECT, INVALIDATE]

export const INSTANCES   = createActionTypes('INSTANCES', [...RequestTypes, ...LoadTypes, ...SelectTypes])
export const PAGES       = createActionTypes('PAGES', [...RequestTypes, ...LoadTypes, ...SelectTypes])
export const CLUSTER    = createActionTypes('CLUSTER', [...RequestTypes, ...LoadTypes])
export const STORY       = createActionTypes('STORY', [...RequestTypes])
export const STAT        = createActionTypes('STAT', [...RequestTypes])
export const INFORMATION = createActionTypes('INFORMATION', [...RequestTypes])
export const PAGESEQ     = createActionTypes('PAGESEQ', [...RequestTypes])
export const BEHAVIOR    = createActionTypes('BEHAVIOR', [...LoadTypes])

export const RESET_ERROR_MESSAGE = 'RESET_ERROR_MESSAGE'

//////////////////////
// Actions creators //
//////////////////////

function action(type, payload = {}) {
  return {type, ...payload}
}

function createActionCreators(ACTION, respName) {
  let requestCreators = {}
  let loadCreators = {}
  let selectCreators = {}

  if(ACTION.REQUEST)
    requestCreators = {
      request: query => action(ACTION.REQUEST, query),
      success: (query, response) => action(ACTION.SUCCESS, {...query, respName: response}),
      failure: (query, error) => action(ACTION.FAILURE, {...query, error}),
      abort  : query => action(ACTION.ABORT, query)
    }

  if(ACTION.LOAD)
    loadCreators = {
      load: query => action(ACTION.LOAD, query),
      cancelLoad: () => action(ACTION.CANCEL_LOAD)
    }

  if(ACTION.SELECT)
    selectCreators = {
      select: query => action(ACTION.SELECT, query),
      invalidate: query => action(ACTION.INVALIDATE, query)
    }

  return {
    ...requestCreators,
    ...loadCreators,
    ...selectCreators
  }
}

export const pages       = createActionCreators(PAGES, 'pages')
export const instances   = createActionCreators(INSTANCES, 'configs')
export const cluster     = createActionCreators(CLUSTER, 'cluster')
export const story       = createActionCreators(STORY, 'story')
export const stat        = createActionCreators(STAT, 'stat')
export const information = createActionCreators(INFORMATION, 'information')
export const pageSeq     = createActionCreators(PAGESEQ, 'pageSeq')
export const behavior    = createActionCreators(BEHAVIOR)

export const resetErrorMessage = () => action(RESET_ERROR_MESSAGE);