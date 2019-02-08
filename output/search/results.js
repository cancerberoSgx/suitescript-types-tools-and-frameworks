define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /** convert a result set to an arrays. Warning, it will convert all the result set to an array which can not optimal on large result sets  */
    function toArray(results) {
        var a = [];
        results.each(function (r) { return !!a.push(r); });
        return a;
    }
    exports.toArray = toArray;
    /** array.map() like function for a resault set. Warning, it will convert all the result set to an array which can not optimal on large result sets  */
    function map(results, fn, thisArg) {
        if (thisArg === void 0) { thisArg = this; }
        return toArray(results).map(fn, thisArg);
    }
    exports.map = map;
    /** runs the search and convert the results into an array. Warning, it will convert all the result set to an array which can not optimal on large result sets  */
    function run(s) {
        return toArray(s.run());
    }
    exports.run = run;
    /** array.find() like function. it won't convert the whole results into an array but iterate through the result set to be fast */
    function find(results, predicate) {
        var found;
        var index = 0;
        results.each(function (r) {
            if (predicate(r, index)) {
                found = r;
                return false;
            }
            index++;
            return true;
        });
        return found;
    }
    exports.find = find;
    /** array.filter() like function. it won't convert the whole results into an array but iterate through the result set to be more performant */
    function filter(results, predicate) {
        var found = [];
        var index = 0;
        results.each(function (r) {
            if (predicate(r, index)) {
                found.push(r);
            }
            index++;
            return true;
        });
        return found;
    }
    exports.filter = filter;
});
