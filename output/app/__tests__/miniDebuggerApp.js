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
define(["require", "exports", "../../jsx/createElement", "../../jsx/util/Bind", "../app", "N/runtime", "../../jsx/Style", "../../misc/misc", "./miniDebuggerSampleCode"], function (require, exports, createElement_1, Bind_1, app_1, runtime_1, Style_1, misc_1, miniDebuggerSampleCode_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function miniNetSuiteApp(request, response) {
        var app = new app_1.App();
        app.addRoute(debuggerRoute(app));
        var redirectToDebugger = {
            name: 'redirectToDebugger',
            handler: function (o) {
                app.redirect({ redirect: app.renderLink({ routeName: 'debugger', params: {} }) });
            }
        };
        app.setNoRouteParamRoute(redirectToDebugger);
        app.setNoRouteFoundRoute(redirectToDebugger);
        app.dispatch({ request: request, response: response });
    }
    exports.miniNetSuiteApp = miniNetSuiteApp;
    var editor = {
        border: '1px solid #aaaaaa',
        width: '100%',
        height: '500px'
    };
    var _a = Style_1.Styles({ editor: editor }), styles = _a.styles, classes = _a.classes;
    exports.Debugger = function (props, children) {
        return createElement_1.ReactLike.createElement("article", null,
            createElement_1.ReactLike.createElement(Style_1.Style, { classes: styles }),
            createElement_1.ReactLike.createElement("h1", null, "Poor man's SuiteScript debugger "),
            createElement_1.ReactLike.createElement("p", null,
                "Hello dear ",
                props.userName,
                "! Welcome to my poor man's SuiteScript debugger."),
            createElement_1.ReactLike.createElement("p", null, "This is an experiment of mine (Sebasti\u00E1n Gurin) using JSX & TypeScript and a sall server side pages application framework."),
            createElement_1.ReactLike.createElement(Bind_1.Bind, { name: "debugger-editor" },
                createElement_1.ReactLike.createElement("textarea", { className: classes.editor }, props.code)),
            createElement_1.ReactLike.createElement(Bind_1.Bind, { name: "debugger-editor", data: { currentParams: props.currentParams } },
                createElement_1.ReactLike.createElement("button", { id: "dataKnower", onClick: function (e) {
                        var code = getBindInputValue(e.currentTarget) || '';
                        var currentParams = getBindDataOrThrow(e.currentTarget);
                        var params = __assign({}, currentParams, { code: encodeURIComponent(code) });
                        if (params.refreshOnExecute) {
                            location.href = buildRouteUrl({
                                routeName: 'debugger',
                                params: __assign({}, params, { refreshOnExecute: true })
                            });
                        }
                        else {
                            fetchAndRenderHtml({
                                routeName: 'debugger',
                                params: __assign({}, params, { refreshOnExecute: false }),
                                selector: '#debuggerExecutionResults'
                            });
                        }
                    } }, "Execute")),
            createElement_1.ReactLike.createElement("button", null, "Reset code"),
            createElement_1.ReactLike.createElement("input", { type: "checkbox", checked: !props.refreshOnExecute, onChange: function (e) {
                    var currentParams = getBindDataOrThrow(document.querySelector('#dataKnower'));
                    location.href = buildRouteUrl({
                        routeName: 'debugger',
                        params: __assign({}, currentParams, { refreshOnExecute: e.currentTarget.checked })
                    });
                } }, "Refresh page on execute?"),
            createElement_1.ReactLike.createElement(DebuggerExecutionResults, __assign({}, props)));
    };
    var DebuggerExecutionResults = function (props) { return createElement_1.ReactLike.createElement("div", { id: "debuggerExecutionResults" },
        createElement_1.ReactLike.createElement("table", null,
            createElement_1.ReactLike.createElement("tr", null,
                createElement_1.ReactLike.createElement("td", null,
                    "Logs: ",
                    createElement_1.ReactLike.createElement("ul", null, props.logs && props.logs.map(function (l) { return createElement_1.ReactLike.createElement("li", null, l); }))),
                createElement_1.ReactLike.createElement("td", null,
                    "Errors: ",
                    createElement_1.ReactLike.createElement("ul", null, props.errors && props.errors.map(function (l) { return createElement_1.ReactLike.createElement("li", null, l); })))))); };
    var _logs = [];
    var _errors = [];
    function _print(s) {
        return (typeof s === 'undefined') ? 'undefined' :
            ['number', 'boolean', 'string'].indexOf(typeof s) !== -1 ? s :
                Array.isArray(s) ? "[" + s.map(_print).join(', ') + "]" :
                    (Object.getPrototypeOf(s) === Object.prototype) ? "{" + Object.keys(s).map(function (k) { return k + ":" + _print(s[k]); }).join(', ') + "}" :
                        //@ts-ignore
                        (s.name || toString(s) || (s + ''));
    }
    function LOG() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        _logs.push(args.map(_print).join(', '));
    }
    function LOG_getLogs() {
        return _logs;
    }
    function debuggerRoute(app) {
        return {
            name: 'debugger',
            handler: function (o) {
                var code = o.params.code ? decodeURIComponent(o.params.code) : miniDebuggerSampleCode_1.sampleCode.trim();
                var refreshOnExecute = typeof o.params.refreshOnExecute === 'undefined' ? true : false;
                try {
                    eval(code);
                }
                catch (error) {
                    _errors.push(misc_1.printNativeError(error));
                }
                var commonProps = __assign({}, o.params, { logs: LOG_getLogs(), errors: _errors, code: code, username: o.params.userName || (runtime_1.getCurrentUser().name + ' (' + runtime_1.getCurrentUser().email + ')') });
                if (refreshOnExecute) {
                    return createElement_1.ReactLike.render(createElement_1.ReactLike.createElement(exports.Debugger, __assign({}, commonProps)));
                }
                else {
                    return createElement_1.ReactLike.render(createElement_1.ReactLike.createElement(DebuggerExecutionResults, __assign({}, commonProps)));
                }
            }
        };
    }
    exports.debuggerRoute = debuggerRoute;
});
