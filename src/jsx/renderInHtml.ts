import { ReactLike } from "./createElement";
import { RenderConfig } from './jsx';

export function renderInHTMLDocument(e: JSX.Element): string {
  return wrapInHtml(ReactLike.render(e, { indent: true, indentLevel: 1, renderClientCode: true }))
}

import {wrapInHtml, setInnerHTML} from 'misc-utils-of-mine-dom'
export {wrapInHtml, setInnerHTML}

export function renderInDOM(e: JSX.Element, el: HTMLElement | string, config?: RenderConfig) {
  if (typeof el === 'string') {
    const ell = document.querySelector(el)
    if (!ell) {
      throw 'Element not found ' + el
    }
    setInnerHTML(ell as HTMLElement, ReactLike.render(e, config))
  }
  else {
    setInnerHTML(el, ReactLike.render(e, config))
  }
}
