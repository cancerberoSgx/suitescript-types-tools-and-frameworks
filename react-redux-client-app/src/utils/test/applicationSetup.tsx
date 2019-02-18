import { mount, ReactWrapper } from 'enzyme';
import { createHashHistory, History } from 'history';
import * as React from 'react';
import { Provider } from 'react-redux';
import { Store } from 'redux';
import 'whatwg-fetch';
import configureStore from '../../main/configureStore';
import { Main } from '../../main/main';
import { ApplicationState } from '../../store';
import { layoutInitialState } from '../../store/layout';
import { listRecordTypesInitialState } from '../../store/listRecordTypes';
import { recordViewInitialState } from '../../store/recordView';
import { searchInitialState } from '../../store/search';
import { wait } from "./waitUtil";

(window as any).React = React

const REUSE_SAME_WRAPPER = false

export async function getApplicationWrapper(path?: string, forceNewWrapperCreation = false): Promise<ReactWrapper> {
  const reuse = REUSE_SAME_WRAPPER && currentWrapper && currentHistory && !forceNewWrapperCreation
  if(!reuse && currentWrapper){
      // console.log('detach');
      currentWrapper.detach()
  }
  const r = reuse ?
    { wrapper: currentWrapper, history: currentHistory } :
    (await setupApplicationWrapper())
  currentWrapper = r.wrapper
  currentHistory = r.history
  // if (reuse) {
  //   currentWrapper!.setState(getInitialApplicationState(currentHistory!))
  // }
  path &&
    currentHistory!.location.hash !== path &&
    currentHistory!.push(path || '/');
  await wait(10);
  currentWrapper!.update();
  return currentWrapper!;
}
export let currentHistory: History | undefined
let currentWrapper: ReactWrapper | undefined

export function getInitialApplicationState(history: History): ApplicationState {
  return {
    layout: layoutInitialState,
    listRecordTypes: listRecordTypesInitialState,
    recordView: recordViewInitialState,
    router: {
      location: history.location,
      action: "REPLACE"
    },
    search: searchInitialState
  };
}

export function initTest() { }

async function setupApplicationWrapper(): Promise<{
  wrapper: ReactWrapper;
  history: History;
  initialState: ApplicationState;
  store: Store;
}> {
  // console.log('setupApplicationWrapper');
  const history: History = createHashHistory();
  const initialState: ApplicationState = getInitialApplicationState(history);
  const store = configureStore(history, initialState);
  const app = <Provider store={store}><Main history={history} theme={'light'}></Main></Provider>;
  const oldEl = document.getElementById('root-test');
  oldEl && oldEl.remove();
  document.body.innerHTML = ''
  const rootEl = document.createElement('div');
  rootEl.setAttribute('id', 'root-test');
  document.body.appendChild(rootEl);
  const wrapper = mount(app, { attachTo: rootEl });
  return { wrapper, history, initialState, store };
}

