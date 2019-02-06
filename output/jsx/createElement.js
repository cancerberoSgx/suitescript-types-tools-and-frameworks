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
define(["require", "exports", "./elementImpl"], function (require, exports, elementImpl_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
                element = new elementImpl_1.ElementLikeImpl(tag);
            }
            else {
                if (elementImpl_1.isReactLikeComponent(tag)) {
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
                        var code = "(" + value.toString() + ").apply(this, arguments)";
                        var escaped = escapeHtmlAttribute(code);
                        element.setAttribute(name_1, escaped);
                    }
                    else if (value !== false && value != null && typeof value !== 'object') {
                        if (name_1 === 'className') {
                            name_1 = 'class';
                        }
                        element.setAttribute(name_1, value.toString());
                    }
                    else if (typeof value === 'object') {
                        if (name_1 === 'style') {
                            element.setAttribute('style', "" + Object.keys(value).map(function (p) { return p + ": " + value[p]; }).join('; '));
                        }
                        else if (name_1 === 'dangerouslySetInnerHTML' && value && typeof value.__html === 'string') {
                            element.dangerouslySetInnerHTML(value.__html);
                        }
                        else {
                            throw "unrecognized object attribute \"" + name_1 + "\" - the only object attribute supported is \"style\"";
                        }
                    }
                    else if (typeof value === 'boolean') {
                        if (value) {
                            element.setAttribute(name_1, name_1);
                        }
                    }
                    else {
                        throw "unrecognized attribute \"" + name_1 + "\" with type " + typeof value;
                    }
                }
            }
            children.filter(function (c) { return c; }).forEach(function (child) {
                if (elementImpl_1.isNode(child)) {
                    element.appendChild(child);
                }
                else if (Array.isArray(child)) {
                    child.forEach(function (c) {
                        if (!elementImpl_1.isNode(c)) {
                            // throw new Error('Child is not a node: ' + c + ', tag: ' + tag + ', originalAttrs: ' + originalAttrs);
                        }
                        else {
                            element.appendChild(c);
                        }
                    });
                }
                else {
                    element.appendChild(new elementImpl_1.TextNodeLikeImpl(child));
                }
            });
            return element;
        },
        render: function (el, config) {
            return el.render(config);
        },
        registerClientCode: function (f) {
            clientCode.push(f);
        },
        getClientCode: function () {
            return clientCode;
        }
    };
    var clientCode = [];
    exports.ReactLike = Module;
    //@ts-ignore
    exports.ReactLike = Module; // creates a global variable needed so emitted .js calls work. See tsconfig.json `"jsxFactory": "ReactLike.createElement",`
    function escapeHtmlAttribute(code) {
        return code.replace(/\"/gmi, '&quot;');
    }
    exports.escapeHtmlAttribute = escapeHtmlAttribute;
    function unEscapeHtmlAttribute(code) {
        return code.replace(/\&quot\;/gmi, '"');
    }
    exports.unEscapeHtmlAttribute = unEscapeHtmlAttribute;
});
