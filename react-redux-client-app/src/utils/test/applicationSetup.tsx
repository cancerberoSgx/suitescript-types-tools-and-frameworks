import { mount, ReactWrapper } from 'enzyme';
import { createHashHistory, History } from 'history';
import { Provider } from 'react-redux';
import { Store } from 'redux';
import configureStore from '../../main/configureStore';
import { Main } from '../../main/main';
import { ApplicationState } from '../../store';
import { layoutInitialState } from '../../store/layout';
import { listRecordTypesInitialState } from '../../store/listRecordTypes';
import { recordViewInitialState } from '../../store/recordView';
import { searchInitialState } from '../../store/search';
import { wait } from "./waitUtil";
import * as React from 'react';
// import jQuery from 'jquery'
// (window as any).jQuery = jQuery
// //@ts-ignore
// import bootstrap from '../../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
// false && console.log(jQuery, bootstrap, jQuery)
import 'whatwg-fetch';
import { asArray } from '../misc';

//@ts-ignore
window.React = React


export function getInitialApplicationState(history: History): ApplicationState {
  return { layout: layoutInitialState, listRecordTypes: listRecordTypesInitialState, recordView: recordViewInitialState, router: { location: history.location, action: "REPLACE" }, search: searchInitialState };
}

export function initTest() { }

// let wrapper: ReactWrapper
export async function setupApplicationWrapper(path?: string): Promise<{
  wrapper: ReactWrapper;
  history: History;
  initialState: ApplicationState;
  store: Store;
}> {
  let history: History = createHashHistory();
  // console.log('histroy', 'hash: ' + history.location.hash, 'path: ' + path, 'pred: ' + (path && history.location.hash !== path));
  path &&
  history.location.hash !== path &&
  history.push(path||'/');
  const initialState: ApplicationState = getInitialApplicationState(history);
  const store = configureStore(history, initialState);
  const app = <Provider store={store}><Main history={history} theme={'light'}></Main></Provider>;
  // if (wrapper) {
  //   wrapper.detach()
  // }
  const oldEl = document.getElementById('root-test');
  oldEl && oldEl.remove();
  const rootEl = document.createElement('div');
  document.body.innerHTML=''
  rootEl.setAttribute('id', 'root-test');
  document.body.appendChild(rootEl);
  const wrapper = mount(app, { attachTo: rootEl });
  return { wrapper, history, initialState, store };
}

export async function getApplicationWrapper(path?: string): Promise<ReactWrapper> {
  const r = await setupApplicationWrapper(path);
  await wait(10);
  r.wrapper.update();
  return r.wrapper;
}



// export function defaultSpecSetup(p: { w: ReactWrapper }, config?: { location?: string }) {
//   beforeEach(async (done) => {
//     const location = config && config.location || ''
//     p.w = (await getApplicationWrapper(location)).wrapper;
//     done();
//   })
//   afterEach(() => {
//     // p.w.unmount();
//     // p.w.detach()
//   })
// }

