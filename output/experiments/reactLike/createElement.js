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
define(["require", "exports", "../../misc/misc"], function (require, exports, misc_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function isReactLikeComponent(c) {
        return c.prototype && c.prototype.render;
    }
    function isNode(n) {
        return n && n.render;
    }
    function isElementNodeLIke(n) {
        return n && n.setAttribute;
    }
    function isTextNodeLIke(n) {
        return n && !n.setAttribute && n.content;
    }
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
    var defaultRenderConfig = { indentLevel: 0, indentTabSize: 2 };
    function indent(config) {
        if (config === void 0) { config = defaultRenderConfig; }
        return config.indent ? misc_1.indent(config.indentLevel || 0, config.indentTabSize || 2) : '';
    }
    var Module = {
        createElement: function (tag, attrs) {
            if (attrs === void 0) { attrs = {}; }
            var children = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                children[_i - 2] = arguments[_i];
            }
            var originalAttrs = attrs;
            var element;
            if (typeof tag === 'string') {
                element = new ElementNodeLikeImpl(tag);
            }
            else {
                if (isReactLikeComponent(tag)) {
                    element = new tag(__assign({}, attrs, { children: children })).render();
                }
                else {
                    element = tag(__assign({}, attrs, { children: children }));
                }
                attrs = {};
            }
            for (var name_1 in attrs) {
                if (name_1 && attrs.hasOwnProperty(name_1)) {
                    var value = attrs[name_1];
                    if (value === true) {
                        element.setAttribute(name_1, name_1);
                    }
                    else if (typeof value === 'function') {
                        throw 'Function attributes not supported';
                    }
                    else if (value !== false && value != null && typeof value !== 'object') {
                        if (name_1 === 'className') {
                            name_1 = 'class';
                        }
                        element.setAttribute(name_1, value.toString());
                    }
                    else {
                        console.log('ignoring attribute type ', typeof value, value);
                    }
                }
            }
            children.filter(function (c) { return c; }).forEach(function (child) {
                if (isNode(child)) {
                    element.appendChild(child);
                }
                else if (Array.isArray(child)) {
                    child.forEach(function (c) {
                        if (!isNode(c)) {
                            throw new Error('Child is not a node: ' + c + ', tag: ' + tag + ', originalAttrs: ' + originalAttrs);
                        }
                        element.appendChild(c);
                    });
                }
                else {
                    element.appendChild(new TextNodeLikeImpl(child));
                }
            });
            return element;
        },
        render: function (el, config) {
            return el.render(config);
        }
    };
    //@ts-ignore
    exports.ReactLike = Module;
    exports.ReactLike = Module;
});
