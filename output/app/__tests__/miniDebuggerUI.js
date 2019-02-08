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
define(["require", "exports", "../../jsx/util/Bind", "../../jsx/Style", "../../jsx/createElement"], function (require, exports, Bind_1, Style_1, createElement_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var editor = {
        border: '1px solid #aaaaaa',
        width: '100%',
        height: '300px'
    };
    var evaluatedCode = {
        border: '1px solid green',
        width: '100%',
        height: '200px'
    };
    var executionResults = {
        border: '1px solid blue',
        width: '100%',
        height: '200px',
        overflow: 'scroll'
    };
    var _a = Style_1.Styles({ editor: editor, evaluatedCode: evaluatedCode, executionResults: executionResults }), styles = _a.styles, classes = _a.classes;
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
                        var code = getBindInputValue('debugger-editor') || '';
                        var currentParams = getBindDataOrThrow('debugger-editor');
                        var params = __assign({}, currentParams, { code: encodeURIComponent(code) });
                        // if (params.refreshOnExecute) {
                        //   location.href = buildRouteUrl({
                        //     routeName: 'debugger',
                        //     params: { ...params, refreshOnExecute: true }
                        //   })
                        // }
                        // else {
                        fetchAndRenderHtml({
                            routeName: 'debugger',
                            params: __assign({}, params, { refreshOnExecute: false }),
                            selector: '#debuggerExecutionResults'
                        });
                        // }
                    } }, "Execute")),
            createElement_1.ReactLike.createElement(exports.DebuggerExecutionResults, __assign({}, props)));
    };
    exports.DebuggerExecutionResults = function (props) { return createElement_1.ReactLike.createElement("div", { id: "debuggerExecutionResults" },
        createElement_1.ReactLike.createElement("table", { className: classes.executionResults },
            createElement_1.ReactLike.createElement("tr", null,
                createElement_1.ReactLike.createElement("td", null,
                    "Logs: ",
                    createElement_1.ReactLike.createElement("ul", null, props.logs && props.logs.map(function (l) { return createElement_1.ReactLike.createElement("li", null, l); }))),
                createElement_1.ReactLike.createElement("td", null,
                    "Errors: ",
                    createElement_1.ReactLike.createElement("ul", null, props.errors && props.errors.map(function (l) { return createElement_1.ReactLike.createElement("li", null, l); }))))),
        props.evaluatedCode ?
            createElement_1.ReactLike.createElement("div", null,
                "Evaluated Code: ",
                createElement_1.ReactLike.createElement("textarea", { className: classes.evaluatedCode }, props.evaluatedCode)) : ''); };
});
