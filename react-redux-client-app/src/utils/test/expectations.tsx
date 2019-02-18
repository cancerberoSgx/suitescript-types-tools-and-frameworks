import { ReactWrapper } from 'enzyme';
import { asArray, flat } from '../misc';
import { ElementOrWrapper, asElement, asElements } from "./elementOrWrapper";
import { text, print } from "./text";
import { Predicate } from './waitUtil';
import { find } from './find';

export function expectToContainText(wrapper: ReactWrapper, selector: string, t: string | string[]) {
  const s = text(wrapper, selector);
  asArray(t).forEach(t => {
    expect(s).toContain(t.toLowerCase());
  });
}

export function expectToExist(wrapper: ReactWrapper, selectors?: string | string[]) {
  // asArray(selectors).forEach(s => {
  //   if (wrapper.find(s).filterWhere(exists).length) {
  //     expect(true).toBe(true)
  //   }
  //   else {
  //     fail(`Expected ${selectors} to exists in wrapper`)
  //   }
  // });
  expectExistance(wrapper, selectors || [])
}

export function expectToNotExist(wrapper: ReactWrapper, selectors?: string | string[]) {
  expectExistance(wrapper, selectors || [], true)
}

function expectExistance(wrapper: ReactWrapper, selectors: string | string[], dontExist=false) {
  const wps: ReactWrapper[] = selectors ? asArray(selectors).map(s => wrapper.find(s!)) : [wrapper]
  const els = flat(wps.map(w => asElements(w)))
  if (dontExist && !els.length || !dontExist && els.length) {
    expect(true).toBe(true)
  }
  else {
    fail(`Expected wrapper ${print(wrapper)} ${selectors ? `, selectors: [${asArray(selectors).join(',')}] ` : ''} ${dontExist ? 'not':''} to exist`)
  }
}



export function exists(w: ReactWrapper) {
  return !!w.getDOMNode() && !!w.getDOMNode().parentElement
}

export function expectToHaveLength(l: {
  length: number;
}, c: number, msg: string = '') {
  if (l.length !== c) {
    fail(`expected ${l.length} to be length ${c}: ${msg}`);
  }
  else {
    expect(l.length).toBe(c);
  }
}

export function expectAttributeToBe(w: ElementOrWrapper, name: string, value: string | null | boolean | Predicate, msg = '', useAccessor = false) {
  let fn: ((v: any) => boolean) = (typeof value !== 'function') ? v => v === value : value
  const e = asElement(w);
  if (e) {
    const a = useAccessor ? e[name] : e.getAttribute(name)
    const actualValue = fn(a)
    if (!actualValue) {
      fail(msg || `Expected attribute '${name}' to ${typeof value === 'function' ? 'comply with predicate' : `to be '${value}'`} but actual value '${a}' does not, in element ${print(e)}`);
    }
    else {
      expect(actualValue).toBe(actualValue);
    }
  }
  else {
    fail(`Expected attribute '${name}' to be '${value}' but element is undefined, ${msg}`);
  }
}


export function expectCheckedToBe(w: ElementOrWrapper, checked: boolean, msg = '') {
  function nullAttr(value: any) {
    return value === null || value === undefined
  }
  // const v = value=>checked ? value : (value===null||value==='')
  // const v: Predicate = checked ? (value=>(typeof value === 'string' && !!value)) : (value=> !value);
  const v: Predicate = checked ? (value => !nullAttr(value)) : (value => nullAttr(value));

  return expectAttributeToBe(w, 'checked', v, msg || `expected element ${print(w)} ${checked ? '' : 'not'} to be checked. ${msg}`)
}

// export function isChecked(w:)

