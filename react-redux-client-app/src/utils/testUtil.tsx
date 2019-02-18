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
import { mount, ReactWrapper } from 'enzyme';
import { Provider } from 'react-redux';
import { Main } from '../main';
import { Store } from 'redux';
import { array, asArray } from './misc';

export function getInitialApplicationState(history: History): ApplicationState {
  return { layout: layoutInitialState, listRecordTypes: listRecordTypesInitialState, recordView: recordViewInitialState, router: { location: history.location, action: "REPLACE" }, search: searchInitialState };
}

export function initTest() { }

export function getApplicationWrapper(location?: string): Promise<{
  wrapper: ReactWrapper
  history: History
  initialState: ApplicationState
  store: Store
}> {
  return new Promise(resolve => {
    const history = createHashHistory();
    location && history.push(location);
    const initialState: ApplicationState = getInitialApplicationState(history);
    const store = configureStore(history, initialState);
    const wrapper = mount(<Provider store={store}><Main history={history} theme={'light'}></Main></Provider>);
    setTimeout(() => {
      const result = { wrapper, history, initialState, store }
      wrapper.update()
      resolve(result)
    });

  })
}

export function find(wrapper: ReactWrapper, selector?: string): Element[] {
  return Array.from(selector ? wrapper.getDOMNode().querySelectorAll(selector) : wrapper.map(w => w.getDOMNode())).filter(n => n)
}

export function text(wrapper: ReactWrapper, selector?: string, caseSensitive = false): string {
  const s =  find(wrapper, selector).map(e => e.textContent).join(' ')
  return caseSensitive ? s : s.toLowerCase()
}

export function expectToContainText(wrapper: ReactWrapper, selector: string, t: string | string[], ) {
  const s = text(wrapper, selector)
  asArray(t).forEach(t => {
    expect(s).toContain(t.toLowerCase())
  })
}

export function expectToExist(wrapper: ReactWrapper, selectors: string | string[]) {
  asArray(selectors).forEach(s => {
    expect(wrapper.find(s).length).toBeGreaterThan(0)
  })
}

export function findOne(wrapper: ReactWrapper, selector?: string): Element {
  const r = find(wrapper, selector)
  if (r.length) {
    return r[0]
  }
  else throw new Error('Cannot find ' + selector)
}

export async function click(wrapper: ReactWrapper, selector?: string) {
  wrapper.update()
  wrapper
    .filterWhere(w => !!w && !!w.getDOMNode())
    .forEach(w => {
      w.simulate('click', {
        currentTarget: w.getDOMNode(),
        defaultPrevented: false,
        preventDefault() { this.defaultPrevented = true },
        metaKey: null,
        altKey: null,
        ctrlKey: null,
        shiftKey: null,
        button: 0
      })
    })
  await waitFor(() => true)
  return wrapper.update()
}

type Predicate = (...args: any[]) => boolean

export function waitFor(p: Predicate, timeout = 1000, interval = 100): Promise<void> {
  return new Promise((resolve, reject) => {
    const i = setInterval(() => {
      if (p()) {
        clearTimeout(t)
        clearInterval(i)
        resolve()
      }
    }, interval)
    const t = setTimeout(() => {
      clearInterval(i)
      clearTimeout(t)
      reject('waitFor timeout')
    }, timeout);
  })
}
