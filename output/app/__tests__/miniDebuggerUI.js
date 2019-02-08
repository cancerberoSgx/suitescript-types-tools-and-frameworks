var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
define(["require", "exports", "../../jsx/util/Bind", "../../jsx/Style", "../../jsx/createElement", "../../jsx/StatefulComponent", "./miniDebuggerAvailableObjects", "./miniDebuggerSampleCode"], function (require, exports, Bind_1, Style_1, createElement_1, StatefulComponent_1, miniDebuggerAvailableObjects_1, miniDebuggerSampleCode_1) {
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
        height: '300px',
        overflow: 'scroll',
        display: 'block'
    };
    var _a = Style_1.Styles({ editor: editor, evaluatedCode: evaluatedCode, executionResults: executionResults }), styles = _a.styles, classes = _a.classes;
    exports.Debugger = function (props, children) {
        return createElement_1.ReactLike.createElement("article", null,
            createElement_1.ReactLike.createElement(Style_1.Style, { classes: styles }),
            createElement_1.ReactLike.createElement("h1", null, "Poor man's SuiteScript debugger "),
            createElement_1.ReactLike.createElement("p", null,
                "Hello dear ",
                props.userName,
                "! Welcome to my poor man's SuiteScript debugger. (",
                createElement_1.ReactLike.createElement("small", null, "This is an experiment of mine (Sebasti\u00E1n Gurin) using JSX & TypeScript and a small server side pages application framework of mine."),
                ")"),
            createElement_1.ReactLike.createElement(DebuggerAvailableObjectsSelect, { availableObjects: miniDebuggerAvailableObjects_1.availableObjects }),
            createElement_1.ReactLike.createElement(DebuggerSampleCode, { examples: miniDebuggerSampleCode_1.examples }),
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
                createElement_1.ReactLike.createElement("textarea", { className: classes.evaluatedCode }, props.evaluatedCode.trim())) : ''); };
    var DebuggerAvailableObjectsSelect = /** @class */ (function (_super) {
        __extends(DebuggerAvailableObjectsSelect, _super);
        function DebuggerAvailableObjectsSelect() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DebuggerAvailableObjectsSelect.prototype.render = function () {
            return createElement_1.ReactLike.createElement("div", null,
                "Extra functions and Objects:",
                createElement_1.ReactLike.createElement("select", { onChange: function (e) {
                        var objectName = e.currentTarget.selectedOptions[0].value;
                        if (objectName) {
                            fetchAndRenderHtml({
                                routeName: 'debuggerAvailableObject',
                                params: { objectName: objectName },
                                selector: '#DebuggerAvailableObjectsResult'
                            });
                        }
                        else {
                            document.getElementById('#DebuggerAvailableObjectsResult').innerHTML = '';
                        }
                    } },
                    createElement_1.ReactLike.createElement("option", { selected: true }, "Select one"),
                    this.props.availableObjects.map(function (o) {
                        return createElement_1.ReactLike.createElement("option", { value: o.name }, o.name);
                    })),
                createElement_1.ReactLike.createElement("div", { id: "DebuggerAvailableObjectsResult" }));
        };
        return DebuggerAvailableObjectsSelect;
    }(StatefulComponent_1.StatefulComponent));
    exports.DebuggerAvailableObjectsSelect = DebuggerAvailableObjectsSelect;
    var DebuggerAvailableObject = /** @class */ (function (_super) {
        __extends(DebuggerAvailableObject, _super);
        function DebuggerAvailableObject() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DebuggerAvailableObject.prototype.render = function () {
            var o = this.props.object;
            return createElement_1.ReactLike.createElement("div", null,
                createElement_1.ReactLike.createElement("p", null,
                    "Name: ",
                    createElement_1.ReactLike.createElement("strong", null, o.name)),
                o.doc ? createElement_1.ReactLike.createElement("p", null,
                    "Description: ",
                    o.doc) : '',
                o.type ? createElement_1.ReactLike.createElement("p", null,
                    "Type:",
                    createElement_1.ReactLike.createElement("pre", null, o.type.trim().replace(/\n/gmi, '<br/>'))) : '');
        };
        return DebuggerAvailableObject;
    }(StatefulComponent_1.StatefulComponent));
    exports.DebuggerAvailableObject = DebuggerAvailableObject;
    var DebuggerSampleCode = /** @class */ (function (_super) {
        __extends(DebuggerSampleCode, _super);
        function DebuggerSampleCode() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DebuggerSampleCode.prototype.render = function () {
            var _this = this;
            return createElement_1.ReactLike.createElement("div", null,
                "Examples:",
                createElement_1.ReactLike.createElement("select", { onChange: function (e) {
                        var selectedExample = e.currentTarget.selectedOptions[0].value;
                        var currentParams = getBindDataOrThrow('debugger-editor');
                        var params = __assign({}, currentParams, { code: '', selectedExample: selectedExample });
                        if (selectedExample) {
                            location.href = buildRouteUrl({
                                routeName: 'debugger',
                                params: params
                            });
                        }
                        else {
                            document.getElementById('#DebuggerExampleInfo').innerHTML = '';
                        }
                    } },
                    createElement_1.ReactLike.createElement("option", { selected: !this.props.selectedExample }, "Select one"),
                    this.props.examples.map(function (o) {
                        return createElement_1.ReactLike.createElement("option", { value: o.name, selected: _this.props.selectedExample === o.name }, o.name);
                    })),
                createElement_1.ReactLike.createElement("div", { id: "DebuggerExampleInfo" }));
        };
        return DebuggerSampleCode;
    }(StatefulComponent_1.StatefulComponent));
    exports.DebuggerSampleCode = DebuggerSampleCode;
});
