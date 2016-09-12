/** Action Types */

const REQUEST = 'REQUEST'
const SUCCESS = 'SUCCESS'
const FAILURE = 'FAILURE'
const ABORT   = 'ABORT'

function createRequestTypes(base) {
  return [REQUEST, SUCCESS, FAILURE, ABORT].reduce((acc, type) => {
    acc[type] = `${base}_${type}`
    return acc
  }, {})
}

const LOAD = 'LOAD'
const CANCEL_LOAD = 'CANCEL_LOAD'

function createLoadTypes(base) {
  return [LOAD, CANCEL_LOAD].reduce((acc, type) => {
    acc[type] = `${base}_${type}`
    return acc
  }, {})
}

export const INSTANCES   = {...createRequestTypes('INSTANCES'), ...createLoadTypes('INSTANCES')}
export const PAGES       = {...createRequestTypes('PAGES'), ...createLoadTypes('PAGES')}
export const CLUSTERS    = createRequestTypes('CLUSTERS')
export const STORY       = createRequestTypes('STORY')
export const STAT        = createRequestTypes('STAT')
export const INFORMATION = createRequestTypes('INFORMATION')
export const PAGESEQ     = createRequestTypes('PAGESEQ')

export const BEHAVIOR    = createLoadTypes('BEHAVIOR')

export const SELECT_CONTEXT_TYPE = 'SELECT_CONTEXT_TYPE'
export const SELECT_PAGE = 'SELECT_PAGE'
export const SELECT_INSTANCE = 'SELECT_INSTANCE'

export const RESET_ERROR_MESSAGE = 'RESET_ERROR_MESSAGE'


/** Actions creators */

function action(type, payload = {}) {
  return {type, ...payload}
}

function createActionCreators(ACTION, respName) {
  let creators = {}

  if(ACTION.REQUEST)
    creators = {
      request: query => action(ACTION.REQUEST, query),
      success: (query, response) => action(ACTION.SUCCESS, {...query, respName: response}),
      failure: (query, error) => action(ACTION.FAILURE, {...query, error}),
      abort  : (query) => action(ACTION.ABORT, query)
    }

  if(ACTION.LOAD)
    creators = {...creators,
      load: query => action(ACTION.LOAD, query),
      cancelLoad: () => action(ACTION.CANCEL_LOAD)
    }

  return creators
}

export const pages       = createActionCreators(PAGES, 'pages')
export const instances   = createActionCreators(INSTANCES, 'configs')
export const clusters    = createActionCreators(CLUSTERS, 'clusters')
export const story       = createActionCreators(STORY, 'story')
export const stat        = createActionCreators(STAT, 'stat')
export const information = createActionCreators(INFORMATION, 'information')
export const pageSeq     = createActionCreators(PAGESEQ, 'pageSeq')
export const behavior    = createActionCreators(BEHAVIOR)


export const selectContextType = contextType => action(SELECT_CONTEXT_TYPE, {contextType});
export const selectPage = pageId => action(SELECT_PAGE, {pageId});

export const resetErrorMessage = () => action(RESET_ERROR_MESSAGE);