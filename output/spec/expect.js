var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
define(["require", "exports", "./runner"], function (require, exports, runner_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function expect(real) {
        return new ExpectImpl(real);
    }
    exports.expect = expect;
    var ExpectImpl = /** @class */ (function () {
        function ExpectImpl(real) {
            this.real = real;
        }
        /** to be identical (===) */
        ExpectImpl.prototype.toBe = function (value) {
            var i = runner_1.SpecRunner.getInstance()._currentIt;
            if (!i) {
                throw new Error('expect() must be called inside it() : value was: ' + this.real);
            }
            var message = "Expected \"" + this.real + "\" to be \"" + value + "\"";
            var result;
            if (this.real !== value) {
                result = {
                    message: message,
                    type: 'fail'
                };
            }
            else {
                result = {
                    message: message,
                    type: 'pass'
                };
            }
            i.results.push(result);
        };
        /** array or string to contain (.indexOf()) */
        ExpectImpl.prototype.toContain = function (value) {
            if (!Array.isArray(this.real) && typeof this.real !== 'string') {
                throw new Error('toContain must be called with a array or string value and it was ' + (typeof this.real) + ' - ' + this.real);
            }
            var message = "Expected " + (Array.isArray(this.real) ? "[" + this.real.join(', ') + "]" : "\"" + this.real + "\"") + " to contain \"" + value + "\"";
            var result;
            if (this.real.indexOf(value) === -1) {
                result = {
                    message: message,
                    type: 'fail'
                };
            }
            else {
                result = {
                    message: message,
                    type: 'pass'
                };
            }
            addToCurrentIt(result);
        };
        return ExpectImpl;
    }());
    function fail(label) {
        var e = new Error('fail ' + label);
        var error = __assign({}, e, { nativeException: e, isFail: true, failLabel: label });
        addToCurrentIt({
            message: 'fail() called - ' + label,
            type: 'fail',
            error: error
        });
        throw error;
    }
    exports.fail = fail;
    function skip(label) {
        var e = new Error('fail ' + label);
        var error = __assign({}, e, { nativeException: e, isSkip: true, skipLabel: label });
        addToCurrentIt({
            message: 'skip() called - ' + label,
            type: 'skip',
            error: error
        });
        throw error;
    }
    exports.skip = skip;
    function addToCurrentIt(result) {
        var i = runner_1.SpecRunner.getInstance()._currentIt;
        if (!i) {
            throw new Error('expect() must be called inside it() : label was: ' + result.message);
        }
        i.results.push(result);
    }
});
