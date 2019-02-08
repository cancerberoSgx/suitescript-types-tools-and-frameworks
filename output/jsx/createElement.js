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
    var throwOnUnrecognized = false;
    function debug(err) {
        if (throwOnUnrecognized) {
            throw err;
        }
        else {
            console.error(err);
        }
    }
    var Module = {
        // _domIds: {} as { [k: string]: ElementLike },
        createElement: function (tag, attrs) {
            if (attrs === void 0) { attrs = {}; }
            var children = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                children[_i - 2] = arguments[_i];
            }
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
                    if (typeof value === 'boolean') {
                        if (value === true) {
                            element.setAttribute(name_1, name_1);
                        }
                    }
                    else if (typeof value === 'function') {
                        // let tlkKeyExtraCode = ''
                        // if (!(Module._renderConfig&&Module._renderConfig.disableDomIdsAssociation)) { // TODO: users could add other properties to this besides this.props, for ex, this.state, or even methods.
                        // const rlkey = element.attrs && element.attrs['data-rlk'] || `${Module._counter++}`
                        // element.setAttribute('data-rlk', rlkey)
                        // element.setAttribute('data-data', )
                        // Module._domIds[rlkey] = element
                        // tlkKeyExtraCode = `__ReactLike_Root_Ids['${rlkey}'] = {}`
                        // }
                        var code = "(" + value.toString() + ").apply(this, arguments)";
                        var escaped = code.replace(/\"/gmi, '&quot;');
                        element.setAttribute(name_1, escaped);
                    }
                    else if (value !== false && value != null) {
                        if (name_1 === 'className') {
                            if (typeof value === 'string') {
                                element.setAttribute('class', value);
                            }
                            else if (Array.isArray(value) && value.length && typeof value[0] === 'string') {
                                element.setAttribute('class', value.join(' '));
                            }
                            else {
                                debug("unrecognized className value " + typeof value + " " + value);
                            }
                        }
                        else {
                            element.setAttribute(name_1, value.toString());
                        }
                    }
                    else if (typeof value === 'object') {
                        if (name_1 === 'style') {
                            element.setAttribute('style', "" + Object.keys(value).map(function (p) { return p + ": " + value[p]; }).join('; '));
                        }
                        else if (name_1 === 'dangerouslySetInnerHTML' && value && typeof value.__html === 'string') {
                            element.dangerouslySetInnerHTML(value.__html);
                        }
                        else {
                            debug("unrecognized object attribute \"" + name_1 + "\" - the only object attribute supported is \"style\"");
                        }
                    }
                    else {
                        debug("unrecognized attribute \"" + name_1 + "\" with type " + typeof value);
                    }
                }
            }
            children.filter(function (c) { return c; }).forEach(function (child) {
                if (elementImpl_1.isNode(child)) {
                    element.appendChild(child);
                }
                else if (Array.isArray(child)) {
                    child.forEach(function (c) {
                        if (typeof c === 'string') {
                            element.appendChild(new elementImpl_1.TextNodeLikeImpl(c));
                        }
                        else if (elementImpl_1.isNode(c)) {
                            element.appendChild(c);
                        }
                        else {
                            debug("Child is not a node or string: " + c + " , tag: " + tag);
                        }
                    });
                }
                else {
                    element.appendChild(new elementImpl_1.TextNodeLikeImpl(child));
                }
            });
            return element;
        },
        _renderConfig: undefined,
        render: function (el, config) {
            if (config === void 0) { config = {}; }
            // if (!Module._renderConfig) {
            //   ReactLike.registerClientCode({
            //     name: 'ReactLike rendered element root ids',
            //     code: `__ReactLike_Root_Ids={};`
            //   })
            // }
            // Module._renderConfig = config || {}
            // const renderedNode = `${(el as any as NodeLike).render(config)}`
            return ("\n" + (config.renderClientCode ? "<script>" + Module.getClientCode().map(function (c) { return c.code; }).join('\n') + "</script>" : "") + "\n" + el.render(config) + "\n").trim();
        },
        registerClientCode: function (f) {
            clientCode.push(f);
        },
        getClientCode: function () {
            return clientCode;
        },
        // _counter: 0
        indent: function (config) {
            // return config.indent ? _indent(config.indentLevel || 0, config.indentTabSize || 2) : ''
            // const tabSize = config.indentTabSize || 2
            var L = (config.indentLevel || 0) * (config.indentTabSize || 2);
            var a = [];
            for (var i = 0; i < L; i++) {
                a.push(' ');
            }
            return a.join('');
        },
    };
    var clientCode = [];
    exports.ReactLike = Module;
    //@ts-ignore
    exports.ReactLike = Module; // creates a global variable needed so emitted .js calls work. See tsconfig.json `"jsxFactory": "ReactLike.createElement",`
});
