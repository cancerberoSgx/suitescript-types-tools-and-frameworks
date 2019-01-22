define(["require", "exports"], function (require, exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    function toArray(results) {
        var a = [];
        results.each(function (r) { return !!a.push(r); });
        return a;
    }
    exports.toArray = toArray;
    function map(results, fn) {
        return toArray(results).map(fn);
    }
    exports.map = map;
    function run(s) {
        return toArray(s.run());
    }
    exports.run = run;
});
