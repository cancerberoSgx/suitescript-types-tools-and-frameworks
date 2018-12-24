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
        addToCurrentIt({
            message: 'fail() called - ' + label,
            type: 'fail'
        });
    }
    exports.fail = fail;
    function skip(label) {
        addToCurrentIt({
            message: 'skip() called - ' + label,
            type: 'skip'
        });
    }
    exports.skip = skip;
    function addToCurrentIt(result) {
        var i = runner_1.SpecRunner.getInstance()._currentIt;
        if (!i) {
            throw new Error('expect() must be called inside it() : label was: ' + result.message);
        }
        console.log(result);
        i.results.push(result);
    }
});
