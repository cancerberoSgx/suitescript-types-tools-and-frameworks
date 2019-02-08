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
define(["require", "exports", "../../jsx/renderInHTMLDocument", "../../search/typedSearch/generated/TypedSearchColumnValues", "../../search/typedSearch/generated/TypedSearchFilterValues", "N/search", "../../misc/misc", "./searchView", "../../jsx/createElement"], function (require, exports, renderInHTMLDocument_1, TypedSearchColumnValues_1, TypedSearchFilterValues_1, search_1, misc_1, searchView_1, createElement_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function searchViewRoute(app) {
        return {
            name: 'searchView',
            handler: function (o) {
                var type = o.params.type;
                var pageSize = parseInt(o.params.pageSize || '10');
                var currentPage = parseInt(o.params.currentPage || '1');
                var columns = (type ? (TypedSearchColumnValues_1.typedSearchColumnValues[type] || []) : []).map(function (c) { return (__assign({}, c, { name: c.id + " - " + c.label })); }).sort(function (a, b) { return a.name.localeCompare(b.name); });
                var filters = (type ? (TypedSearchFilterValues_1.typedSearchFilterValues[type] || []) : []).map(function (c) { return (__assign({}, c, { name: c.id + " - " + c.label })); }).sort(function (a, b) { return a.name.localeCompare(b.name); });
                var userColumns = (o.params.userColumns || '').trim().split(',').filter(function (f) { return !!f; });
                var finalColumns = userColumns.map(function (name) { return ({ name: name }); });
                if (type && finalColumns.length) {
                    try {
                        var resultSet = search_1.create({ type: type, columns: finalColumns }).runPaged({ pageSize: pageSize });
                        var resultSetData = resultSet.fetch({ index: currentPage }).data;
                        var results = resultSetData.map(function (r) { return ({
                            id: r.id + '',
                            columns: finalColumns.map(function (c) { return r.getValue(c) + ''; })
                        }); });
                        return renderInHTMLDocument_1.renderInHTMLDocument(createElement_1.ReactLike.createElement(searchView_1.SearchView, __assign({}, o.params, { columns: columns, filters: filters, userColumns: userColumns, results: results, pageSize: pageSize, pageRanges: resultSet.pageRanges, currentPage: currentPage, pageCount: resultSet.pageRanges.length })));
                    }
                    catch (error) {
                        return "" + misc_1.printNativeError(error).replace(/\n/gmi, '<br/>');
                    }
                }
            }
        };
    }
    exports.searchViewRoute = searchViewRoute;
});
