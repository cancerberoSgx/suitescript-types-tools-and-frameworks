import { findAscendantOrSelf } from "./find";
import { ElementOrWrapper, asElement } from "./elementOrWrapper";
import { print } from "./text";
export function expectToBeHidden(e: ElementOrWrapper) {
  const v = isVisible(e);
  if (v) {
    fail(`Expected ${print(e)} to be hidden`);
  }
  else {
    expect(`${print(e)} is hidden`).toBe(`${print(e)} is hidden`);
  }
}
export function expectToBeVisible(e: ElementOrWrapper) {
  const v = isVisible(e);
  if (!v) {
    fail(`Expected ${print(e)} to be visible`);
  }
  else {
    expect(`${print(e)} is visible`).toBe(`${print(e)} is visible`);
  }
}
function isVisibleEl(r: ElementOrWrapper): boolean {
  const e = asElement(r);
  if (!e) {
    return false;
  }
  var style = window.getComputedStyle(e);
  return style.width !== "0" &&
    style.height !== "0" &&
    style.opacity !== "0" &&
    style.display !== 'none' &&
    style.visibility !== 'hidden';
}
export function isVisible(r: ElementOrWrapper): boolean {
  const e = asElement(r);
  if (!e)
    return false;
  return !findAscendantOrSelf(e, a => !isVisibleEl(a));
}


// export function isVisible(e: ElementOrWrapper): boolean {
//   if (!e) {
//     return false
//   }
//   else if (isReactWrapper(e)) {
//     e.update()
//     return !!e.length && !e.findWhere(n => !isVisible(e.getDOMNode()))
//   }
//   else {
//     return e && !!(e as HTMLElement).offsetParent
//   }
// }
