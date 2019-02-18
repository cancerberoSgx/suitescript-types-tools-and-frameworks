import { findAscendantOrSelf } from "./find";
import { ElementOrWrapper, asElement, asElements } from "./elementOrWrapper";
import { print } from "./text";

export function expectToBeHidden(e: ElementOrWrapper, one = false) {
  const v = isHidden(e, one);
  if (v) {
    fail(`Expected ${print(e)} to be hidden`);
  }
  else {
    expect(`${print(e)} is hidden`).toBe(`${print(e)} is hidden`);
  }
}

export function expectToBeVisible(e: ElementOrWrapper, one = true) {
  const v = isVisible(e, one);
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

/**
 * @param one if true, will return true if just one el is visible. Otherwhise return true if all els are visible
 */
export function isVisible(r: ElementOrWrapper, one = false): boolean {
  // console.log(asElements(r).length);
  if (one) {
    return !!asElements(r).find(e => !!findAscendantOrSelf(e, a => isVisibleEl(a)))
  }
  else {
    return !asElements(r).find(e => !findAscendantOrSelf(e, a => !isVisibleEl(a)))
  }

  // const e = asElements(r);
  // if (!e)
  //   return false;
  // return !findAscendantOrSelf(e, a => !isVisibleEl(a));
}

/**
 * @param one if true, will return true if just one el is hidden. Otherwhise return true if all els are hidden
 */
export function isHidden(r: ElementOrWrapper, one = false): boolean {
  // console.log(asElements(r).length);
  if (one) {
    return !!asElements(r).find(e => !!findAscendantOrSelf(e, a => !isVisibleEl(a)))
  }
  else {
    return !asElements(r).find(e => !!findAscendantOrSelf(e, a => !!isVisibleEl(a)))
  }

  // const e = asElements(r);
  // if (!e)
  //   return false;
  // return !findAscendantOrSelf(e, a => !isVisibleEl(a));
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
