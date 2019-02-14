define(["require", "exports", "./arrayPrototypeFind"], function (require, exports, arrayPrototypeFind_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    arrayPrototypeFind_1.installArrayPrototypeFind();
    // collections
    function array(n, sample) {
        var a = [];
        for (var i = 0; i < n; i++) {
            a.push(typeof sample === 'undefined' ? i : sample);
        }
        return a;
    }
    exports.array = array;
    function repeat(n, s) {
        return array(n, s).join('');
    }
    exports.repeat = repeat;
    function indent(i, tabSize) {
        if (i === void 0) { i = 1; }
        if (tabSize === void 0) { tabSize = 2; }
        return repeat(i * tabSize, ' ');
    }
    exports.indent = indent;
    function dedup(a, p) {
        return a.reduce(function (x, y) { return x.find(function (i) { return p(i, y); }) ? x : x.concat([y]); }, []);
    }
    exports.dedup = dedup;
    function objectKeys(o) {
        return Object.keys(o);
    }
    exports.objectKeys = objectKeys;
    var uniqueCounter = 0;
    function unique(s) {
        if (s === void 0) { s = 'unique'; }
        return s + uniqueCounter++;
    }
    exports.unique = unique;
    function checkThrow(r, msg) {
        if (msg === void 0) { msg = 'Throwing on undefined value'; }
        if (!r) {
            throw new Error(msg);
        }
        return r;
    }
    exports.checkThrow = checkThrow;
    function tryTo(f) {
        try {
            return f();
        }
        catch (error) {
        }
    }
    exports.tryTo = tryTo;
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
        return "" + ((error.stack && Array.isArray(error.stack)) ? error.stack.map(function (s) { return repeat(2, ' ') + s; }).join('\n') : error.stack);
    }
    exports.printNativeErrorStack = printNativeErrorStack;
    // strings
    function escapeHtmlAttribute(code) {
        return code.replace(/\"/gmi, '&quot;');
    }
    exports.escapeHtmlAttribute = escapeHtmlAttribute;
    function unEscapeHtmlAttribute(code) {
        return code.replace(/\&quot\;/gmi, '"');
    }
    exports.unEscapeHtmlAttribute = unEscapeHtmlAttribute;
});
