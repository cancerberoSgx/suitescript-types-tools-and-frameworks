import { ReactWrapper } from 'enzyme';
import { find } from './find';

export function isReactWrapper(e: any): e is ReactWrapper {
  return e && (e as any).getDOMNode && (e as any).find && !!(e as ReactWrapper).update;
}

export type ElementOrWrapper = Element | ReactWrapper | null | undefined;

export function asElement(e: ElementOrWrapper): Element | null | undefined {
  if (isReactWrapper(e)) {
    return e
      // .findWhere(e=>!!e.getDOMNode()).first()
      .getDOMNode();
  }
  else {
    return e;
  }
}

export function asElements(e: ElementOrWrapper): Element[] {
  if (isReactWrapper(e)) {
    return find(e)
  }
  else {
    return e ? [e] : [];
  }
}
