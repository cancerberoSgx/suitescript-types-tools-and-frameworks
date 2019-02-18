import { find } from "./find";
import { ElementOrWrapper, isReactWrapper, asElement, asElements } from "./elementOrWrapper";

export function text(wrapper: ElementOrWrapper, selector?: string, caseSensitive = false): string {
  let s: string = '';
  if (!wrapper) {
    return '';
  }
  if (isReactWrapper(wrapper)) {
    s = find(wrapper, selector).map(e => e.textContent).join(' ');
  }
  else {
    s = wrapper.textContent || '';
  }
  return caseSensitive ? s : s.toLowerCase();
}
export function tag(e: ElementOrWrapper) {
  const r = asElement(e);
  if (r) {
    return r.tagName;
  }
}
export function print(e: ElementOrWrapper) {
  return asElements(e).map(r=>r.outerHTML.replace(r.innerHTML, '')).join('\n') || 'undefined'
  // if (r) {
  //   return r.outerHTML.replace(r.innerHTML, '');
  // }
  // else {
  //   return 'undefined';
  // }
}

export function html(e: ElementOrWrapper) {
  return asElements(e).map(e=>e.outerHTML).join('\n') || 'undefined'
  // const r = asElements(e);
  // if (r) {
  //   return r.outerHTML
  // }
  // else {
  //   return 'undefined';
  // }
}
