define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function toArray(results) {
        var a = [];
        results.each(function (r) { return !!a.push(r); });
        return a;
    }
    exports.toArray = toArray;
    function map(results, fn, thisArg) {
        if (thisArg === void 0) { thisArg = this; }
        return toArray(results).map(fn, thisArg);
    }
    exports.map = map;
    function run(s) {
        return toArray(s.run());
    }
    exports.run = run;
});
