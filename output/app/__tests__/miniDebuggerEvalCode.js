define(["require", "exports", "../../misc/misc", "../../jsx/reactLikeBrowserSource", "../../misc/arrayPrototypeFind", "../../introspection/objectExplorer", "../../search/results", "../../introspection/recordMetadata", "../../introspection/printThisScopeSource"], function (require, exports, misc_1, reactLikeBrowserSource_1, arrayPrototypeFind_1, objectExplorer, results, recordMetadata, printThisScopeSource_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function evalCode(code, extraCode) {
        if (extraCode === void 0) { extraCode = []; }
        var evaluatedCode = buildCodeToEval(code, extraCode);
        try {
            eval(evaluatedCode);
        }
        catch (error) {
            _errors.push(misc_1.printNativeError(error));
        }
        return { logs: _logs, errors: _errors, evaluatedCode: evaluatedCode };
    }
    exports.evalCode = evalCode;
    var _logs = [];
    var _errors = [];
    function printValueForLog(s) {
        return (typeof s === 'undefined') ? 'undefined' :
            ['number', 'boolean', 'string'].indexOf(typeof s) !== -1 ? s :
                Array.isArray(s) ? "[" + s.map(printValueForLog).join(', ') + "]" :
                    (Object.getPrototypeOf(s) === Object.prototype) ? "{" + Object.keys(s).map(function (k) { return k + ":" + printValueForLog(s[k]); }).join(', ') + "}" :
                        //@ts-ignore
                        (s.name || toString(s) || (s + ''));
    }
    function LOG() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        _logs.push(args.map(printValueForLog).join(', '));
    }
    function buildCodeToEval(code, extraCode) {
        if (extraCode === void 0) { extraCode = []; }
        var evaluatedCode = "\n\n" + printValueForLog.toString() + "\n\n" + LOG.toString() + "\n\n" + arrayPrototypeFind_1.installArrayPrototypeFind.toString() + "\n\n" + reactLikeBrowserSource_1.reactLikeBrowserSource() + "\n\n" + printThisScopeSource_1.printNamespace(objectExplorer, 'objectExplorer') + "\n\n" + printThisScopeSource_1.printNamespace(recordMetadata, 'recordMetadata') + "\n" + printThisScopeSource_1.printNamespace(results, 'results') + "\n\n" + extraCode.join(';\n\n') + "\n\n" + code + "\n\n";
        return evaluatedCode;
    }
    exports.buildCodeToEval = buildCodeToEval;
});
