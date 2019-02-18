import { ReactWrapper } from 'enzyme';
const wrapperFind = 1;
export function find(wrapper: ReactWrapper, selector?: string): Element[] {
  return Array.from(selector ? wrapper.getDOMNode().querySelectorAll(selector) : wrapper.map(w => w.getDOMNode())).filter(n => n);
}
export function findOne(wrapper: ReactWrapper, selector?: string): Element {
  const r = find(wrapper, selector);
  if (r.length) {
    return r[0];
  }
  else
    throw new Error('Cannot find ' + selector);
}
export function findAscendantOrSelf(e: Element, p: (e: Element) => boolean): Element | undefined {
  if (p(e)) {
    return e;
  }
  else if (e.parentElement && e.parentElement !== e) {
    return findAscendantOrSelf(e.parentElement, p);
  }
}
