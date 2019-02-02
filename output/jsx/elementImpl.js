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
define(["require", "exports", "../misc/misc"], function (require, exports, misc_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function isReactLikeComponent(c) {
        return c.prototype && c.prototype.render;
    }
    exports.isReactLikeComponent = isReactLikeComponent;
    function isNode(n) {
        return n && n.render;
    }
    exports.isNode = isNode;
    function isElementNodeLIke(n) {
        return n && n.setAttribute;
    }
    exports.isElementNodeLIke = isElementNodeLIke;
    function isTextNodeLIke(n) {
        return n && !n.setAttribute && n.content;
    }
    exports.isTextNodeLIke = isTextNodeLIke;
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
    var ElementNodeLikeImpl = /** @class */ (function () {
        function ElementNodeLikeImpl(tag) {
            this.tag = tag;
            this.attrs = {};
            this.children = [];
        }
        ElementNodeLikeImpl.prototype.setAttribute = function (name, value) {
            this.attrs[name] = value;
        };
        ElementNodeLikeImpl.prototype.appendChild = function (c) {
            this.children.push(c);
        };
        ElementNodeLikeImpl.prototype.render = function (config) {
            var _this = this;
            if (config === void 0) { config = defaultRenderConfig; }
            var newLine = config.indent ? "\n" : "";
            return "<" + this.tag + Object.keys(this.attrs).map(function (a) { return " " + a + "=\"" + _this.attrs[a] + "\""; }).join('') + ">" + newLine + indent(__assign({}, config, { indentLevel: (config.indentLevel || 0) + 1 })) + this.children.map(function (c) { return "" + c.render(__assign({}, config, { indentLevel: (config.indentLevel || 0) + 1 })); }).join('') + newLine + indent(config) + "</" + this.tag + ">";
        };
        return ElementNodeLikeImpl;
    }());
    exports.ElementNodeLikeImpl = ElementNodeLikeImpl;
    var defaultRenderConfig = { indentLevel: 0, indentTabSize: 2 };
    function indent(config) {
        if (config === void 0) { config = defaultRenderConfig; }
        return config.indent ? misc_1.indent(config.indentLevel || 0, config.indentTabSize || 2) : '';
    }
});
