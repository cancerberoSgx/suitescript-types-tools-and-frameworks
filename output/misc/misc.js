var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
define(["require", "exports", "N/util"], function (require, exports, util_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
    function find(a, predicate) {
        for (var i = 0; i < a.length; i++) {
            var v = a[i];
            if (predicate(v, i, a)) {
                return v;
            }
        }
    }
    exports.find = find;
    function objectKeys(o) {
        return Object.keys(o);
    }
    exports.objectKeys = objectKeys;
    function checkThrow(r, msg) {
        if (msg === void 0) { msg = 'Throwing on undefined value'; }
        if (!r) {
            throw new Error(msg);
        }
        return r;
    }
    exports.checkThrow = checkThrow;
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
    // /**
    //  * Creates a union from the types of an Array or tuple
    //  */
    // type UnionOf<T extends any[]> = T[number];
    // /**
    //  * Returns the length of an array or tuple
    //  */
    // type LengthOf<T extends any[]> = T["length"];
    // /**
    //  * Returns all but the first item's type in a tuple/array
    //  */
    // export type Tail<T extends any[]> =
    // 	((...args: T) => any) extends ((head: any, ...tail: infer R) => any) ? R : never;
    // /**
    //  * Returns the given tuple/array with the item type prepended to it
    //  */
    // type Unshift<List extends any[], Item> =
    // 	((first: Item, ...rest: List) => any) extends ((...list: infer R) => any) ? R : never;
    // /**
    //  * Tests if two types are equal
    //  */
    // type Equals<T, S> =
    // 	[T] extends [S] ? (
    // 		[S] extends [T] ? true : false
    // 	) : false;
    // type Range<N, T extends number[] = []> = {
    // 	0: T,
    // 	1: Range<N, Unshift<T, LengthOf<T>>>,
    // }[Equals<LengthOf<Tail<T>>, N> extends true ? 0 : 1];
    // /** Tests if N > M */
    // type IsGreaterThan<N, M> = N extends Exclude<Range<N>, Range<M>> ? true : false;
    // /** Tests if N <= M */
    // // type IsLessThanOrEqual<N, M> = Not<IsGreaterThan<N, M>>;
    // /** Tests if N < M */
    // type IsLessThan<N, M> = M extends Exclude<Range<M>, Range<N>> ? true : false;
    // /** Tests if N >= M */
    // // type IsGreaterThanOrEqual<N, M> = Not<IsLessThan<N, M>>;
    function printNativeError(error) {
        return (error && error.type) + ", " + (error && error.name) + "\nCause: " + (error && error.message) + "\nStack Trace: \n" + ((error.stack && Array.isArray(error.stack)) ? error.stack.map(function (s) { return repeat(2, ' ') + s; }).join('\n') : error.stack);
    }
    exports.printNativeError = printNativeError;
    function printMs(ms, config) {
        if (config === void 0) { config = { minutes: false, seconds: true, ms: true }; }
        config = __assign({ minutes: false, seconds: true, ms: true }, config);
        var seconds = config.seconds && Math.floor(ms / 1000);
        var minutes = config.minutes && seconds && Math.floor(seconds / 60);
        var milliseconds = config.ms && Math.floor(ms % 1000 || ms);
        return "" + (minutes ? minutes + " minutes " : '') + (seconds ? seconds + " seconds " : '') + (milliseconds ? milliseconds + " milliseconds " : '');
    }
    exports.printMs = printMs;
    function now(unit) {
        if (unit === void 0) { unit = 'milliseconds'; }
        return unit === 'milliseconds' ? nanosecondsToMilliseconds(util_1.nanoTime()) : util_1.nanoTime();
    }
    exports.now = now;
    function nanosecondsToMilliseconds(n) {
        return n / 1e+6;
    }
    exports.nanosecondsToMilliseconds = nanosecondsToMilliseconds;
});
