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
define(["require", "exports", "../../jsx/createElement", "../../jsx/StatelessComponent", "../../search/getSearchRecordTypes", "../../jsx/util/Select", "../../jsx/util/Bind", "../../misc/misc", "../../jsx/Style"], function (require, exports, createElement_1, StatelessComponent_1, getSearchRecordTypes_1, Select_1, Bind_1, misc_1, Style_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var results = {
        textAlign: 'left'
    };
    var resultColumns = {
        selectorPostfix: ' td',
        borderRightStyle: 'solid',
        borderRightColor: '#ededed'
    };
    var pagination = {};
    var _a = Style_1.Styles({ results: results, resultColumns: resultColumns, pagination: pagination }), styles = _a.styles, classes = _a.classes;
    var SearchView = /** @class */ (function (_super) {
        __extends(SearchView, _super);
        function SearchView() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        SearchView.prototype.render = function () {
            var _this = this;
            return createElement_1.ReactLike.createElement("div", null,
                createElement_1.ReactLike.createElement(Style_1.Style, { classes: styles }),
                createElement_1.ReactLike.createElement("script", null,
                    getUserColumns.toString(),
                    ";",
                    search.toString()),
                createElement_1.ReactLike.createElement(Bind_1.Bind, { name: "SearchView", data: __assign({}, this.props, { columns: [], filters: [], results: [] }) }),
                createElement_1.ReactLike.createElement("div", null,
                    "Search Type: ",
                    createElement_1.ReactLike.createElement(Select_1.Select, { selected: this.props.type, options: getSearchRecordTypes_1.getSearchRecordTypes(), firstOption: "Select Record Type", onChange: function (type) {
                            if (!type) {
                                return;
                            }
                            var props = getBindDataOrThrow('SearchView');
                            window.location.href = buildRouteUrl({ routeName: 'searchView', params: __assign({}, props.currentParams, { type: type }) });
                        } })),
                "Columns:",
                createElement_1.ReactLike.createElement("ul", null, (this.props.userColumns || []).map(function (c, i) {
                    return createElement_1.ReactLike.createElement("li", null,
                        createElement_1.ReactLike.createElement(Select_1.Select, { "select-attrs": { 'data-user-column': i + '' }, selected: c, options: _this.props.columns, firstOption: "Select " + _this.props.type + " Column" }));
                })),
                createElement_1.ReactLike.createElement("button", { onClick: function (e) {
                        var selects = document.querySelectorAll('[data-user-column]');
                        if (selects.length === 0) {
                            return;
                        }
                        var select = selects.item(selects.length - 1);
                        var li = select.parentElement;
                        li.parentElement.appendChild(li.cloneNode(true));
                    } }, "Add Column"),
                "Filters:",
                createElement_1.ReactLike.createElement("ul", null, (this.props.userFilters || []).map(function (c, i) {
                    return createElement_1.ReactLike.createElement("li", null,
                        createElement_1.ReactLike.createElement(Select_1.Select, { "select-attrs": { 'data-user-filter': i + '' }, selected: c, options: _this.props.filters, firstOption: "Select " + _this.props.type + " filter" }));
                })),
                createElement_1.ReactLike.createElement("button", { onClick: function (e) {
                        var selects = document.querySelectorAll('[data-user-filter]');
                        if (selects.length === 0) {
                            return;
                        }
                        var select = selects.item(selects.length - 1);
                        var li = select.parentElement;
                        li.parentElement.appendChild(li.cloneNode(true));
                    } }, "Add Filter"),
                createElement_1.ReactLike.createElement("div", null,
                    createElement_1.ReactLike.createElement("button", { onClick: search }, "Search")),
                createElement_1.ReactLike.createElement("div", { className: classes.pagination },
                    createElement_1.ReactLike.createElement("label", null,
                        "Page Size: ",
                        createElement_1.ReactLike.createElement("input", { type: "number", id: "searchViewPageSize", value: this.props.pageSize || 10 })),
                    createElement_1.ReactLike.createElement(Select_1.Select, { "select-attrs": { 'data-current-page': "" }, selected: this.props.currentPage + '', options: misc_1.array(this.props.pageCount || 0).map(function (i) { return ({ id: i + '', name: "Page " + i + " of " + (_this.props.pageCount || 0) }); }), onChange: search, firstOption: "Current Page" })),
                this.props.results ? createElement_1.ReactLike.createElement("div", null,
                    "Results",
                    createElement_1.ReactLike.createElement("table", { className: classes.results + " " + classes.resultColumns },
                        createElement_1.ReactLike.createElement("thead", null,
                            createElement_1.ReactLike.createElement("tr", null,
                                createElement_1.ReactLike.createElement("th", null, "id"),
                                this.props.userColumns.map(function (c) { return createElement_1.ReactLike.createElement("th", null, c); }))),
                        createElement_1.ReactLike.createElement("tbody", null, this.props.results.map(function (r) { return createElement_1.ReactLike.createElement("tr", null,
                            createElement_1.ReactLike.createElement("td", null, r.id),
                            r.columns.map(function (c) { return createElement_1.ReactLike.createElement("td", null, c); })); }))))
                    : '');
        };
        return SearchView;
    }(StatelessComponent_1.StatelessComponent));
    exports.SearchView = SearchView;
    function search() {
        var userColumns = getUserColumns();
        var pageSize = document.querySelector("#searchViewPageSize").value;
        var currentPageS = document.querySelector('[data-current-page]');
        var currentPage = currentPageS.selectedOptions.length ? currentPageS.selectedOptions[0].value : '0';
        document.querySelectorAll('[data-user-column]');
        window.location.href = buildRouteUrl({
            routeName: 'searchView', params: __assign({}, getBindDataOrThrow('SearchView').currentParams, { userColumns: userColumns,
                pageSize: pageSize,
                currentPage: currentPage })
        });
    }
    function getUserColumns() {
        var userColumns = [];
        document.querySelectorAll('[data-user-column]').forEach(function (e) {
            if (e.selectedOptions && e.selectedOptions.length) {
                userColumns.push(e.selectedOptions[0].value);
            }
        });
        return userColumns;
    }
});
