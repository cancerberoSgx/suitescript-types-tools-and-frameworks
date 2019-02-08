// heads up - we want this file to be independent, that's why we didn't use misc utilities!
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // import * as RL from './createElement'
    function isReactLikeComponent(c) {
        return c.prototype && c.prototype.render;
    }
    exports.isReactLikeComponent = isReactLikeComponent;
    function isNode(n) {
        return isTextNodeLike(n) || isElementLike(n);
    }
    exports.isNode = isNode;
    function isElementLike(n) {
        return n && n.setAttribute;
    }
    exports.isElementLike = isElementLike;
    function isTextNodeLike(n) {
        return n && n.content && !isElementLike(n);
    }
    exports.isTextNodeLike = isTextNodeLike;
    var TextNodeLikeImpl = /** @class */ (function () {
        function TextNodeLikeImpl(content) {
            this.content = content;
        }
        TextNodeLikeImpl.prototype.render = function (config) {
            if (config === void 0) { config = defaultRenderConfig; }
            return "" + this.content;
        };
        return TextNodeLikeImpl;
    }());
    exports.TextNodeLikeImpl = TextNodeLikeImpl;
    // declare var ReactLike: ReactLike&{indent: any}
    var ElementLikeImpl = /** @class */ (function () {
        function ElementLikeImpl(tag) {
            this.tag = tag;
            this.attrs = {};
            this.children = [];
        }
        ElementLikeImpl.prototype.render = function (config) {
            var _this = this;
            if (config === void 0) { config = defaultRenderConfig; }
            var newLine = config.indent ? "\n" : "";
            var content = this.innerHtml ||
                "" + newLine + this.indent(__assign({}, config, { indentLevel: (config.indentLevel || 0) + 1 })) + this.children
                    .map(function (c) { return "" + c.render(__assign({}, config, { indentLevel: (config.indentLevel || 0) + 1 })); })
                    .join('') + newLine + this.indent(config);
            return "<" + this.tag + Object.keys(this.attrs).map(function (a) { return " " + a + "=\"" + _this.attrs[a] + "\""; }).join('') + ">" + content + "</" + this.tag + ">";
        };
        ElementLikeImpl.prototype.indent = function (config) {
            // return config.indent ? _indent(config.indentLevel || 0, config.indentTabSize || 2) : ''
            // const tabSize = config.indentTabSize || 2
            var L = (config.indentLevel || 0) * (config.indentTabSize || 2);
            var a = [];
            for (var i = 0; i < L; i++) {
                a.push(' ');
            }
            return a.join('');
        };
        ElementLikeImpl.prototype.setAttribute = function (name, value) {
            this.attrs[name] = value;
        };
        ElementLikeImpl.prototype.appendChild = function (c) {
            this.children.push(c);
            if (isElementLike(c)) {
                c.parentElement = this;
                // this.children.push(c)
            }
        };
        ElementLikeImpl.prototype.dangerouslySetInnerHTML = function (s) {
            this.innerHtml = s;
        };
        ElementLikeImpl.prototype.findDescendant = function (p) {
            var found;
            this.children.some(function (c) {
                if (isElementLike(c)) {
                    if (p(c)) {
                        found = c;
                    }
                    else {
                        found = c.findDescendant(p);
                    }
                }
                return !!found;
            });
            return found;
        };
        ElementLikeImpl.prototype.findAscendant = function (p) {
            if (this.parentElement) {
                if (p(this.parentElement)) {
                    return this.parentElement;
                }
                return this.parentElement.findAscendant(p);
            }
        };
        ElementLikeImpl.prototype.getAscendants = function () {
            return this.parentElement ? this.parentElement.getAscendants().concat([this.parentElement]) : [];
        };
        ElementLikeImpl.prototype.getRootAscendant = function () {
            var r = this.parentElement ? this.findAscendant(function (n) { return !n.parentElement; }) : this;
            return checkThrow(r, 'No root ascendant found in element like tree!');
        };
        ElementLikeImpl.prototype.getSiblings = function () {
            var _this = this;
            if (this.parentElement) {
                return this.parentElement.children.filter(function (c) { return c !== _this; });
            }
            return [];
        };
        ElementLikeImpl.prototype.findSibling = function (p) {
            return this.getSiblings().find(p);
        };
        ElementLikeImpl.prototype.find = function (p) {
            // TODO: this should start searching in the near children, sibling and parents, and only after that look on far nodes
            return this.getRootAscendant().findDescendant(p);
        };
        return ElementLikeImpl;
    }());
    exports.ElementLikeImpl = ElementLikeImpl;
    var defaultRenderConfig = { indentLevel: 0, indentTabSize: 2 };
    // heads up - we want this file to be independent, that's why we did't use misc utilities!
    // heads up - we want this file to be independent, that's why we did't use misc utilities!
    function checkThrow(r, msg) {
        if (msg === void 0) { msg = 'Throwing on undefined value'; }
        if (!r) {
            throw new Error(msg);
        }
        return r;
    }
});
// function _indent(i: number = 1, tabSize = 2): string {
//   const a=[]
//   for (let i = 0; i < i*tabSize; i++) {
//     a.push(' ')
//   }
//   return a.join('')
// }
