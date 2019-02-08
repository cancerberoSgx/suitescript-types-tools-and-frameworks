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
define(["require", "exports", "../../jsx/renderInHtml", "../../search/typedSearch/generated/TypedSearchColumnValues", "../../search/typedSearch/generated/TypedSearchFilterValues", "N/search", "../../misc/misc", "./searchView", "../../jsx/createElement"], function (require, exports, renderInHtml_1, TypedSearchColumnValues_1, TypedSearchFilterValues_1, search_1, misc_1, searchView_1, createElement_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function searchViewRoute(app) {
        return {
            name: 'searchView',
            handler: function (o) {
                var type = o.params.type;
                var pageSize = parseInt(o.params.pageSize || '10') || 0;
                var currentPage = parseInt(o.params.currentPage || '1') || 1;
                try {
                    var columns_1 = (type ? (TypedSearchColumnValues_1.typedSearchColumnValues[type] || []) : []).map(function (c) { return (__assign({}, c, { name: c.id + " - " + c.label })); }).sort(function (a, b) { return a.name.localeCompare(b.name); });
                    // SearchTypesOperatorSupportValues
                    var userColumns_1 = (o.params.userColumns || '').trim().split(',')
                        .map(function (f) { return (f === '__new__' && columns_1.length) ? columns_1[0].id : f; }).filter(function (f) { return !!f; }).map(function (name) { return ({ name: name }); });
                    var filters = (type ? (TypedSearchFilterValues_1.typedSearchFilterValues[type] || []) : []).map(function (c) { return (__assign({}, c, { name: c.id + " - " + c.label })); }).sort(function (a, b) { return a.name.localeCompare(b.name); });
                    var userFilters = (misc_1.tryTo(function () { return JSON.parse(o.params.userFilters || '[]'); }) || []);
                    // .map(f => (f.id === '__new__' && filters.length) ? {...filters[0], operator: } : f)
                    // .filter(f => !!f).map(name => {
                    // const filter = filters.find(f=>f.name===name)
                    // if(!filter){return}
                    // const operatorTypes = (SearchTypesOperatorSupportValues as any)[filter.id] as string[]
                    // if(!operatorTypes){
                    // return 
                    // }
                    // return 
                    // { id: name, name: name, operator: filter, value: '' }
                    // })
                    if (type) {
                        var resultSet = search_1.create({ type: type, columns: userColumns_1 }).runPaged({ pageSize: pageSize });
                        var resultSetData = resultSet.fetch({ index: currentPage }).data;
                        var results = resultSetData.map(function (r) { return ({
                            id: r.id + '',
                            columns: userColumns_1.map(function (c) { return r.getValue(c) + ''; })
                        }); });
                        return renderInHtml_1.renderInHTMLDocument(createElement_1.ReactLike.createElement(searchView_1.SearchView, __assign({}, o.params, { columns: columns_1, filters: filters, userFilters: userFilters, userColumns: userColumns_1.map(function (c) { return c.name; }), results: results, pageSize: pageSize, pageRanges: resultSet.pageRanges, currentPage: currentPage, pageCount: resultSet.pageRanges.length })));
                    }
                    else {
                        return renderInHtml_1.renderInHTMLDocument(createElement_1.ReactLike.createElement(searchView_1.SearchView, __assign({}, o.params, { columns: columns_1, filters: filters })));
                    }
                }
                catch (error) {
                    return "" + misc_1.printNativeError(error).replace(/\n/gmi, '<br/>');
                }
            }
        };
    }
    exports.searchViewRoute = searchViewRoute;
});
