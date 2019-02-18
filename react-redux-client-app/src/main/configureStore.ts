import { Store, createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import { composeWithDevTools } from 'redux-devtools-extension'
import { History } from 'history'
import { ApplicationState, rootReducer, rootSaga } from '../store'

let store: Store<ApplicationState> | undefined

export default function configureStore(
  history: History,
  initialState: ApplicationState
): Store<ApplicationState> {
  const composeEnhancers = composeWithDevTools({})
  const sagaMiddleware = createSagaMiddleware()

  initialState_ = initialState
  store = createStore(
    rootReducer(history),
    initialState,
    composeEnhancers(
      applyMiddleware(routerMiddleware(history), sagaMiddleware)
    )
  ) as any
  sagaMiddleware.run(rootSaga)
  return store!
}

export function getApplicationStore(): Store<ApplicationState> {
  if (!store) { throw new Error('store not configured yet') }
  return store
}

let initialState_: ApplicationState | undefined

export function getInitialApplicationState(): ApplicationState {
  if (!initialState_) throw ('State not initialized yet')
  return initialState_
}
