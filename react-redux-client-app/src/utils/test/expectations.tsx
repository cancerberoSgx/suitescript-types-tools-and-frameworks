import { ReactWrapper } from 'enzyme';
import { asArray } from '../misc';
import { ElementOrWrapper, asElement } from "./elementOrWrapper";
import { text, print } from "./text";
const expectations = 1;
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
export function expectAttributeToBe(w: ElementOrWrapper, name: string, value: any, msg = '') {
  const e = asElement(w);
  if (e) {
    const actualValue = e.getAttribute(name);
    if (actualValue !== value) {
      fail(`Expected attribute '${name}' to be '${value}' but is '${actualValue}' in element ${print(e)}, ${msg}`);
    }
    else {
      expect(actualValue).toBe(value);
    }
  }
  else {
    fail(`Expected attribute '${name}' to be '${value}' but element is undefined, ${msg}`);
  }
}
