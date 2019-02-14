// @ts-che ck

// Why does this file use the `.js` extension instead of `.tsx`? It's because Parcel only accepts an
// `index.js` file as an entry point. However, we can enable TS typechecking by adding the
// `@ts-check` comment at the beginning of our file.

import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { createHashHistory } from 'history'

import { connect, Provider } from 'react-redux';

import Main from './main'
import * as serviceWorker from './serviceWorker'
import configureStore from './configureStore'
import { ConnectedRouter } from 'connected-react-router';
import { ApplicationState } from './store'


import $ from 'jquery'
window.jQuery = $
// import popper from "popper.js"
window.popper = {}
import bootstrap from '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
// import bootstrap from "bootstrap"
require("../node_modules/bootstrap/dist/css/bootstrap.css")
console.log($, bootstrap, jQuery, popper)

import 'typeface-ibm-plex-sans'
// import './styles'

// We use hash history because is hosted in a suitelet url with fixed parameters
const history = createHashHistory()

const initialState = window.initialReduxState
const store = configureStore(history, initialState)

// class C_ extends React.Component {
//   render() {
//     return <Provider store={store}>
//       <Main history={history} />
//     </Provider>
//   }
// }
// const mapStateToProps = s => ({})
// const C = connect(mapStateToProps)(C_)

const C = <Provider store={store}>
  <Main history={history} />
</Provider>
ReactDOM.render(C, document.getElementById('root'))

// ReactDOM.render(<Main store={store} history={history} />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
