// @ts-che ck

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

import $ from 'jquery'
window.jQuery = $
// import popper from "popper.js"
window.popper = {}
import bootstrap from '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
// import bootstrap from "bootstrap"
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import '../node_modules/react-bootstrap-table-next/dist/react-bootstrap-table2.css';
import '../node_modules/react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.css';
import '../node_modules/react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.css';
// import '../node_modules/react-bootstrap-table2-overlay/dist/react-bootstrap-table2-overlay.css';
console.log($, bootstrap, jQuery, popper)

import 'typeface-ibm-plex-sans'

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
