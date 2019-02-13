import { Store, createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
// `react-router-redux` is deprecated, so we use `connected-react-router`.
// This provides a Redux middleware which connects to our `react-router` instance.
import { connectRouter, routerMiddleware } from 'connected-react-router'
// We'll be using Redux Devtools. We can use the `composeWithDevTools()`
// directive so we can pass our middleware along with it
import { composeWithDevTools } from 'redux-devtools-extension'
// If you use react-router, don't forget to pass in your history type.
import { History } from 'history'

// Import the state interface and our combined reducers/sagas.
import { ApplicationState, rootReducer, rootSaga } from './store'

let store: Store<ApplicationState> | undefined

export default function configureStore(
  history: History,
  initialState: ApplicationState
): Store<ApplicationState> {
  // create the composing function for our middlewares
  const composeEnhancers = composeWithDevTools({})
  // create the redux-saga middleware
  const sagaMiddleware = createSagaMiddleware()

  initialState_ = initialState
  // We'll create our store with the combined reducers/sagas, and the initial Redux state that
  // we'll be passing from our entry point.

  store = createStore(
    connectRouter(history)(rootReducer),
    initialState,
    composeEnhancers(applyMiddleware(routerMiddleware(history), sagaMiddleware))
  ) as any

  // Don't forget to run the root saga, and return the store object.
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
