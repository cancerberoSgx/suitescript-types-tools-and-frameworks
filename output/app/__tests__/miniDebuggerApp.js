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
define(["require", "exports", "../../jsx/createElement", "../app", "N/runtime", "./miniDebuggerSampleCode", "./miniDebuggerUI", "./miniDebuggerEvalCode", "./miniDebuggerAvailableObjects", "../../jsx/renderInHTMLDocument"], function (require, exports, createElement_1, app_1, runtime_1, miniDebuggerSampleCode_1, miniDebuggerUI_1, miniDebuggerEvalCode_1, miniDebuggerAvailableObjects_1, renderInHTMLDocument_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function miniNetSuiteApp(request, response) {
        var app = new app_1.App();
        addMiniDebuggerRoutes(app);
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
    function addMiniDebuggerRoutes(app) {
        app.addRoute(debuggerRoute(app));
        app.addRoute(debuggerAvailableObjectRoute(app));
    }
    exports.addMiniDebuggerRoutes = addMiniDebuggerRoutes;
    function debuggerRoute(app) {
        return {
            name: 'debugger',
            handler: function (o) {
                var example = miniDebuggerSampleCode_1.examples.find(function (e) { return e.name === o.params.selectedExample; });
                var code = example ? example.code : o.params.code ? decodeURIComponent(o.params.code) : miniDebuggerSampleCode_1.sampleCode.trim();
                var refreshOnExecute = typeof o.params.refreshOnExecute === 'undefined' ? true : false;
                var _a = miniDebuggerEvalCode_1.evalCode(code), logs = _a.logs, errors = _a.errors, evaluatedCode = _a.evaluatedCode;
                var commonProps = __assign({}, o.params, { logs: logs, errors: errors, code: code, evaluatedCode: evaluatedCode, username: o.params.userName || (runtime_1.getCurrentUser().name + ' (' + runtime_1.getCurrentUser().email + ')'), exampleName: example ? example.name : undefined, exampleDescription: example ? example.description : undefined });
                if (refreshOnExecute) {
                    return renderInHTMLDocument_1.renderInHTMLDocument(createElement_1.ReactLike.createElement(miniDebuggerUI_1.Debugger, __assign({}, commonProps)));
                }
                else {
                    return createElement_1.ReactLike.render(createElement_1.ReactLike.createElement(miniDebuggerUI_1.DebuggerExecutionResults, __assign({}, commonProps)));
                }
            }
        };
    }
    exports.debuggerRoute = debuggerRoute;
    function debuggerAvailableObjectRoute(app) {
        return {
            name: 'debuggerAvailableObject',
            handler: function (o) {
                var objectName = o.params.objectName;
                var object = miniDebuggerAvailableObjects_1.availableObjects.find(function (obj) { return obj.name == objectName; });
                if (!object) {
                    return createElement_1.ReactLike.render(createElement_1.ReactLike.createElement("div", null,
                        "Object not found with name \"",
                        objectName,
                        "\""));
                }
                else {
                    return createElement_1.ReactLike.render(createElement_1.ReactLike.createElement(miniDebuggerUI_1.DebuggerAvailableObject, { object: object }));
                }
            }
        };
    }
});
