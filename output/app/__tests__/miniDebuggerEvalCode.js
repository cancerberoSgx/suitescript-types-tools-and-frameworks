define(["require", "exports", "../../misc/misc", "../../jsx/createElement", "../../jsx/reactLikeBrowserSource"], function (require, exports, misc_1, ReactLike, reactLikeBrowserSource_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function evalCode(code) {
        var evaluatedCode = buildCodeToEval(code);
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
    function buildCodeToEval(code) {
        // var createElement_1 = { ReactLike: ReactLike };
        // ${printSource.toString()};
        // ${printRecordFields.toString()}
        var evaluatedCode = "\n" + printValueForLog.toString() + "\n" + LOG.toString() + "\n\n" + reactLikeBrowserSource_1.reactLikeBrowserSource() + "\n\n" + testFFF.toString() + "\n" + code + "\n  ";
        return evaluatedCode;
    }
    exports.buildCodeToEval = buildCodeToEval;
    // render
    // ReactLike.ReactLike.render()
    function testFFF() { return ReactLike.createElement("div", null, "helloaosd"); }
    exports.testFFF = testFFF;
});
