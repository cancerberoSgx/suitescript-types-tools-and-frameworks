var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
define(["require", "exports", "../../jsx/createElement", "../../jsx/StatelessComponent", "../../search/getSearchRecordTypes", "../../jsx/util/Select", "../../jsx/util/Bind", "../../jsx/renderInHTMLDocument", "../../search/typedSearch/generated/TypedSearchColumnValues", "../../search/typedSearch/generated/TypedSearchFilterValues", "N/search", "../../search/results", "../../misc/misc"], function (require, exports, createElement_1, StatelessComponent_1, getSearchRecordTypes_1, Select_1, Bind_1, renderInHTMLDocument_1, TypedSearchColumnValues_1, TypedSearchFilterValues_1, search_1, results_1, misc_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SearchView = /** @class */ (function (_super) {
        __extends(SearchView, _super);
        function SearchView() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        SearchView.prototype.render = function () {
            var _this = this;
            return createElement_1.ReactLike.createElement("div", null,
                createElement_1.ReactLike.createElement("script", null, getUserColumns.toString()),
                createElement_1.ReactLike.createElement(Bind_1.Bind, { name: "SearchView", data: __assign({}, this.props, { columns: [], filters: [], results: [] }) }),
                createElement_1.ReactLike.createElement("div", null,
                    "Search Type2: ",
                    createElement_1.ReactLike.createElement(Select_1.Select, { selected: this.props.type, options: getSearchRecordTypes_1.getSearchRecordTypes(), firstOption: "Select Record Type", onChange: function (type) {
                            if (!type) {
                                return;
                            }
                            var props = getBindDataOrThrow('SearchView');
                            window.location.href = buildRouteUrl({ routeName: 'searchView', params: __assign({}, props.currentParams, { type: type }) });
                        } })),
                createElement_1.ReactLike.createElement("div", null,
                    "Columns: ",
                    createElement_1.ReactLike.createElement(Select_1.Select, { selected: this.props.column, options: this.props.columns, firstOption: "Select " + this.props.type + " Column", onChange: function (column) {
                            if (!column) {
                                return;
                            }
                            window.location.href = buildRouteUrl({ routeName: 'searchView', params: __assign({}, getBindDataOrThrow('SearchView').currentParams, { column: column }) });
                        } })),
                createElement_1.ReactLike.createElement("div", null,
                    "Filters: ",
                    createElement_1.ReactLike.createElement(Select_1.Select, { selected: this.props.filter, options: this.props.filters, firstOption: "Select " + this.props.type + " Filter", onChange: function (filter) {
                            if (!filter) {
                                return;
                            }
                            window.location.href = buildRouteUrl({ routeName: 'searchView', params: __assign({}, getBindDataOrThrow('SearchView').currentParams, { filter: filter }) });
                        } })),
                "This search columns:",
                createElement_1.ReactLike.createElement("ul", null,
                    (this.props.userColumns || []).map(function (c, i) {
                        return createElement_1.ReactLike.createElement("li", null,
                            createElement_1.ReactLike.createElement(Select_1.Select, { "select-attrs": { 'data-user-column': i + '' }, selected: c, options: _this.props.columns, firstOption: "Select " + _this.props.type + " Column", onChange: function (column) {
                                } }));
                    }),
                    createElement_1.ReactLike.createElement("button", { onClick: function (e) {
                            var select = document.querySelectorAll('[data-user-column]').item(0);
                            select.parentElement.appendChild(select.cloneNode(true));
                            // const userColumns: string[] = getUserColumns();
                            //   window.location.href = buildRouteUrl({ routeName: 'searchView', params: { ...getBindDataOrThrow<Props>('SearchView').currentParams, userColumns: [...(userColumns || []), '__new__'] } });
                        } }, "Add Column")),
                createElement_1.ReactLike.createElement("button", { onClick: function (e) {
                        var userColumns = getUserColumns();
                        window.location.href = buildRouteUrl({ routeName: 'searchView', params: __assign({}, getBindDataOrThrow('SearchView').currentParams, { userColumns: userColumns }) });
                    } }, "Search"),
                "Results: ",
                createElement_1.ReactLike.createElement("ul", null, (this.props.results || []).map(function (r) { return createElement_1.ReactLike.createElement("li", null,
                    r.id,
                    ", columns: [",
                    r.columns.join(', '),
                    "]"); })));
        };
        return SearchView;
    }(StatelessComponent_1.StatelessComponent));
    exports.SearchView = SearchView;
    function getUserColumns() {
        var userColumns = [];
        document.querySelectorAll('[data-user-column]').forEach(function (e) {
            if (e.selectedOptions && e.selectedOptions.length) {
                userColumns.push(e.selectedOptions[0].value);
            }
        });
        return userColumns;
    }
    function searchViewRoute(app) {
        return {
            name: 'searchView',
            handler: function (o) {
                var type = o.params.type;
                var columns = (type ? (TypedSearchColumnValues_1.typedSearchColumnValues[type] || []) : []).map(function (c) { return (__assign({}, c, { name: c.id + " - " + c.label })); }).sort(function (a, b) { return a.name.localeCompare(b.name); });
                var filters = (type ? (TypedSearchFilterValues_1.typedSearchFilterValues[type] || []) : []).map(function (c) { return (__assign({}, c, { name: c.id + " - " + c.label })); }).sort(function (a, b) { return a.name.localeCompare(b.name); });
                var userColumns = (o.params.userColumns || '').trim().split(',').filter(function (f) { return !!f; });
                // console.log('userColumns'+JSON.stringify(userColumns)+'<br/><br/>');
                var finalColumns = userColumns.filter(function (n) { return n !== '__new__'; }).map(function (name) { return ({ name: name }); });
                var results = [];
                if (type && finalColumns.length) {
                    // console.log('finalColumns'+JSON.stringify(finalColumns)+'<br/><br/>');
                    // finalColumns = []
                    try {
                        results = results_1.toArray(search_1.create({ type: type, columns: finalColumns }).run(), 10)
                            .map(function (r) { return ({ id: r.id + '', columns: finalColumns.map(function (c) { return r.getValue(c) + ''; }) }); });
                        // console.log('results: ' +JSON.stringify(results)+'<br/><br/>');
                    }
                    catch (error) {
                        return "" + misc_1.printNativeError(error).replace(/\n/gmi, '<br/>');
                    }
                }
                return renderInHTMLDocument_1.renderInHTMLDocument(createElement_1.ReactLike.createElement(SearchView, __assign({}, o.params, { columns: columns, filters: filters, userColumns: userColumns, results: results })));
            }
        };
    }
    exports.searchViewRoute = searchViewRoute;
    ;
});
