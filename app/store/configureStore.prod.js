import { createStore, applyMiddleware } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import createSagaMiddleware, {END} from 'redux-saga'
import rootReducer from 'reducers'

export default function configureStore(initialState, history) {
  const sagaMiddleware = createSagaMiddleware()
  const middleware = [routerMiddleware(history), sagaMiddleware]
  const  store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middleware)
  )

  store.runSaga = sagaMiddleware.run
  store.clone = () => store.dispatch(END)
  return store
}