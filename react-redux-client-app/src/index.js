// @ts-check

// Why does this file use the `.js` extension instead of `.tsx`? It's because Parcel only accepts an
// `index.js` file as an entry point. However, we can enable TS typechecking by adding the
// `@ts-check` comment at the beginning of our file.

import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { createHashHistory } from 'history'

import { Provider } from 'react-redux';

import Main from './main'
import * as serviceWorker from './serviceWorker'
import configureStore from './configureStore'

import './indexLoadLibraries'

// We use hash history because is hosted in a suitelet url with fixed parameters
const history = createHashHistory()

const initialState = window.initialReduxState
const store = configureStore(history, initialState)

ReactDOM.render(<Provider store={store}>
  <Main history={history} />
</Provider>, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
