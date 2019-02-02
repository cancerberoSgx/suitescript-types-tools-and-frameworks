define(["require", "exports", "../results", "./typedSearch"], function (require, exports, results_1, typedSearch_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function find(options, predicate) {
        return results_1.find(typedSearch_1.create(options).run(), predicate);
    }
    exports.find = find;
    function filter(options, predicate) {
        return results_1.filter(typedSearch_1.create(options).run(), predicate);
    }
    exports.filter = filter;
    function list(options) {
        return results_1.toArray(typedSearch_1.create(options).run());
    }
    exports.list = list;
});
