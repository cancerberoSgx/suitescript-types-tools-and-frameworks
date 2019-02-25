define(["require", "exports", "./arrayPrototypeFind", "misc-utils-of-mine-generic", "misc-utils-of-mine-generic"], function (require, exports, arrayPrototypeFind_1, misc_utils_of_mine_generic_1, misc_utils_of_mine_generic_2) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    arrayPrototypeFind_1.installArrayPrototypeFind();
    __export(misc_utils_of_mine_generic_2);
    var TypedMapImpl = /** @class */ (function () {
        function TypedMapImpl(props) {
            this.props = props;
        }
        TypedMapImpl.prototype.get = function (name) {
            return this.props[name];
        };
        TypedMapImpl.prototype.set = function (name, value) {
            this.props[name] = value;
        };
        return TypedMapImpl;
    }());
    exports.TypedMapImpl = TypedMapImpl;
    function printNativeError(error) {
        return (error && error.type) + ", " + (error && error.name) + "\nCause: " + (error && error.message) + "\nStack Trace:\n" + printNativeErrorStack(error) + "\n";
    }
    exports.printNativeError = printNativeError;
    function printNativeErrorStack(error) {
        return "" + ((error.stack && Array.isArray(error.stack)) ? error.stack.map(function (s) { return misc_utils_of_mine_generic_1.repeat(2, ' ') + s; }).join('\n') : error.stack);
    }
    exports.printNativeErrorStack = printNativeErrorStack;
});
