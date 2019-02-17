import * as React from 'react';

//@ts-ignore
window.React = React

// import jQuery from 'jquery'
// (window as any).jQuery = jQuery
// //@ts-ignore
// import bootstrap from '../../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
// false && console.log(jQuery, bootstrap, jQuery)
import 'whatwg-fetch'

import { layoutInitialState } from '../store/layout';
import { listRecordTypesInitialState } from '../store/listRecordTypes';
import { recordViewInitialState } from '../store/recordView';
import { searchInitialState } from '../store/search';
import { ApplicationState } from '../store';
import { History, createHashHistory } from 'history';
import configureStore from '../configureStore';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { Main } from '../main';

export function getInitialApplicationState(history: History): ApplicationState {
  return { layout: layoutInitialState, listRecordTypes: listRecordTypesInitialState, recordView: recordViewInitialState, router: { location: history.location, action: "REPLACE" }, search: searchInitialState };
}
export function initTest(){}
export function getApplicationWrapper(location?: string) {
  const history = createHashHistory();
  location && history.push(location);
  const initialState: ApplicationState = getInitialApplicationState(history);
  const store = configureStore(history, initialState);
  const wrapper = mount(<Provider store={store}><Main history={history} theme={'light'}></Main></Provider>);
  return {wrapper, history, initialState, store};
}

