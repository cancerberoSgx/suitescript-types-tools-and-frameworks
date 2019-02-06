var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
define(["require", "exports", "../../jsx/createElement", "../../search/typedSearch/typedSearchOperations", "./listRecordTypesView"], function (require, exports, createElement_1, typedSearchOperations_1, listRecordTypesView_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function listRecordTypesRoute(app) {
        return {
            name: 'listRecordTypes',
            handler: function (o) {
                var type = o.params.type;
                var pageSize = parseInt(o.params.pageSize || '20', 10);
                var dynamicResultsRender = !!o.params.dynamicResultsRender;
                if (!type) {
                    return createElement_1.ReactLike.render(createElement_1.ReactLike.createElement(listRecordTypesView_1.ListRecordTypes, __assign({ pageSize: pageSize }, o.params)));
                }
                var counter = 0;
                var results = typedSearchOperations_1.filter({
                    type: type,
                    columns: []
                }, function (r) { return (((counter++) > pageSize) || !r) ? false : true; });
                return createElement_1.ReactLike.render(createElement_1.ReactLike.createElement(listRecordTypesView_1.ListRecordTypes, __assign({ pageSize: pageSize }, o.params, { type: type, results: results, dynamicResultsRender: dynamicResultsRender })));
            }
        };
    }
    exports.listRecordTypesRoute = listRecordTypesRoute;
});
