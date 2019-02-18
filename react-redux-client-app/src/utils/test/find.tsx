import { ReactWrapper } from 'enzyme';
import { exists } from './expectations';

export function find(wrapper: ReactWrapper, selector?: string): Element[] {
  const els: Element[] = []
  wrapper.filterWhere(exists)
    .map(w => selector ? w.getDOMNode().querySelectorAll(selector) : [w.getDOMNode()])
    .forEach(a => { els.push(...Array.from(a)) })
  return els
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
