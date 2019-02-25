define(["require", "exports", "./createElement", "misc-utils-of-mine-dom"], function (require, exports, createElement_1, misc_utils_of_mine_dom_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function renderInHTMLDocument(e) {
        return misc_utils_of_mine_dom_1.wrapInHtml(createElement_1.ReactLike.render(e, { indent: true, indentLevel: 1, renderClientCode: true }));
    }
    exports.renderInHTMLDocument = renderInHTMLDocument;
    exports.wrapInHtml = misc_utils_of_mine_dom_1.wrapInHtml;
    exports.setInnerHTML = misc_utils_of_mine_dom_1.setInnerHTML;
    // export function wrapInHtml(s: string): string {
    //   return `
    //   <!DOCTYPE html>
    // <html>
    // <head>
    //   <meta charset="utf-8" />
    //   <meta http-equiv="X-UA-Compatible" content="IE=edge">
    //   <title>title</title>
    //   <meta name="viewport" content="width=device-width, initial-scale=1">
    // </head>
    // <body>
    // ${s}
    // </body>
    // </html>
    // `;
    // }
    // /** sets innerHTML and calls children scripts if any */
    // export function setInnerHTML(elm: HTMLElement, html: string) {
    //   elm.innerHTML = html;
    //   elm.querySelectorAll("script").forEach(function (el) {
    //     let newEl = document.createElement("script");
    //     el.getAttributeNames().forEach(function (attrName) {
    //       newEl.setAttribute(attrName, el.getAttribute(attrName)!)
    //     });
    //     newEl.appendChild(document.createTextNode(el.innerHTML));
    //     el.parentNode!.replaceChild(newEl, el);
    //   })
    // }
    function renderInDOM(e, el, config) {
        if (typeof el === 'string') {
            var ell = document.querySelector(el);
            if (!ell) {
                throw 'Element not found ' + el;
            }
            misc_utils_of_mine_dom_1.setInnerHTML(ell, createElement_1.ReactLike.render(e, config));
        }
        else {
            misc_utils_of_mine_dom_1.setInnerHTML(el, createElement_1.ReactLike.render(e, config));
        }
    }
    exports.renderInDOM = renderInDOM;
});
