define(["require", "exports", "./createElement"], function (require, exports, createElement_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function renderInHTMLDocument(e) {
        return "\n  <!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\" />\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n  <title>title</title>\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n</head>\n<body>\n  " + createElement_1.ReactLike.render(e, { indent: true, indentLevel: 1, renderClientCode: true }) + "\n</body>\n</html>\n";
    }
    exports.renderInHTMLDocument = renderInHTMLDocument;
    /** sets innerHTML and calls children scripts if any */
    function setInnerHTML(elm, html) {
        elm.innerHTML = html;
        elm.querySelectorAll("script").forEach(function (el) {
            var newEl = document.createElement("script");
            el.getAttributeNames().forEach(function (attrName) {
                newEl.setAttribute(attrName, el.getAttribute(attrName));
            });
            newEl.appendChild(document.createTextNode(el.innerHTML));
            el.parentNode.replaceChild(newEl, el);
        });
    }
    exports.setInnerHTML = setInnerHTML;
    function renderInDOM(e, el, config) {
        if (typeof el === 'string') {
            var ell = document.querySelector(el);
            if (!ell) {
                throw 'Element not found ' + el;
            }
            setInnerHTML(ell, createElement_1.ReactLike.render(e, config));
        }
        else {
            setInnerHTML(el, createElement_1.ReactLike.render(e, config));
        }
    }
    exports.renderInDOM = renderInDOM;
});
