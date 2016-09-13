import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import createSagaMiddleware, {END} from 'redux-saga'
import createLogger from 'redux-logger'
import rootReducer from 'reducers'
import DevTools from 'containers/DevTools'

export default function configureStore(initialState, history) {
  const sagaMiddleware = createSagaMiddleware()
  const middleware = [routerMiddleware(history), sagaMiddleware, createLogger()]
  const  store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(...middleware),
      DevTools.instrument()
    )
  )

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('reducers', () => {
      const nextReducer = require('reducers')
      store.replaceReducer(nextReducer)
    })
  }

  store.runSaga = sagaMiddleware.run
  store.clone = () => store.dispatch(END)
  return store
}