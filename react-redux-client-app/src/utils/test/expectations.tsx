import { ReactWrapper } from 'enzyme';
import { asArray } from '../misc';
import { ElementOrWrapper, asElement } from "./elementOrWrapper";
import { text, print } from "./text";
import { Predicate } from './waitUtil';

export function expectToContainText(wrapper: ReactWrapper, selector: string, t: string | string[]) {
  const s = text(wrapper, selector);
  asArray(t).forEach(t => {
    expect(s).toContain(t.toLowerCase());
  });
}

export function expectToExist(wrapper: ReactWrapper, selectors: string | string[]) {
  asArray(selectors).forEach(s => {
    expect(wrapper.find(s).length).toBeGreaterThan(0);
  });
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

export function expectAttributeToBe(w: ElementOrWrapper, name: string, value: string|null|boolean|Predicate, msg = '', useAccessor=false) {
  let fn: ((v:any)=>boolean) = (typeof value !== 'function') ? v=>v===value : value
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
  // const v = value=>checked ? value : (value===null||value==='')
  const v: Predicate = checked ? (value=>value!==null&&value!==undefined) : (value=>value==='' || value)

  return expectAttributeToBe(w, 'checked', v, msg||`expected element ${print(w)} ${checked?'':'not'} to be checked. ${msg}`)
}
// export function isChecked(w: ElementOrWrapper)

