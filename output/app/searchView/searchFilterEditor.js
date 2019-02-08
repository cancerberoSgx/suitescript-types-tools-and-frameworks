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
define(["require", "exports", "../../jsx/renderInHtml", "../../jsx/StatelessComponent", "../../jsx/util/Select", "../../misc/arrayPrototypeFind", "../../search/typedSearch/generated/TypedSearchFilterValues", "../../jsx/createElement", "../../search/typedSearch/generated/searchTypesOperatorsSupport", "../../jsx/util/Bind", "../../misc/misc"], function (require, exports, renderInHtml_1, StatelessComponent_1, Select_1, arrayPrototypeFind_1, TypedSearchFilterValues_1, createElement_1, searchTypesOperatorsSupport_1, Bind_1, misc_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    arrayPrototypeFind_1.installArrayPrototypeFind();
    var SearchFilterEditor = /** @class */ (function (_super) {
        __extends(SearchFilterEditor, _super);
        function SearchFilterEditor() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        SearchFilterEditor.prototype.render = function () {
            var filterValues = TypedSearchFilterValues_1.typedSearchFilterValues[this.props.type]
                .map(function (f) { return (__assign({}, f, { name: f.id + " - " + f.label + " " })); });
            var editorId = misc_1.unique('searchFilterEditor');
            return createElement_1.ReactLike.createElement("div", { "data-editor-id": editorId },
                createElement_1.ReactLike.createElement(Bind_1.Bind, { name: "SearchFilterEditorProps", data: __assign({}, this.props, { editorId: editorId }) }),
                createElement_1.ReactLike.createElement(Select_1.Select, { "select-attrs": { 'data-user-filter': '' }, options: filterValues, firstOption: "Select " + this.props.type + " filter", onChange: function (selectedFilter) {
                        if (!selectedFilter) {
                            return;
                        }
                        var props = getBindDataOrThrow('SearchFilterEditorProps');
                        var filter = TypedSearchFilterValues_1.typedSearchFilterValues[props.type].find(function (f) { return f.id === selectedFilter; });
                        var operators = searchTypesOperatorsSupport_1.SearchTypesOperatorSupportValues[filter.type];
                        var ss = createElement_1.ReactLike.createElement(Select_1.Select, { options: operators, firstOption: "Select " + filter.id + " operator", onChange: function (e) {
                                alert(e);
                            } });
                        renderInHtml_1.renderInDOM(ss, '#operatorsPlaceHolder');
                    } }),
                createElement_1.ReactLike.createElement("div", { id: "operatorsPlaceHolder" }),
                createElement_1.ReactLike.createElement("input", { id: "filterValueInput", value: "the value" }));
        };
        SearchFilterEditor.prototype.renderFileDependencies = function () {
            return [
                'jsx/createElement.js',
                'jsx/elementImpl.js',
                'jsx/util/Select.js',
                'jsx/StatelessComponent.js',
                'jsx/util/Bind.js',
                'misc/formatDate.js',
                'misc/misc.js',
                'misc/arrayPrototypeFind.js',
                'jsx/renderInHtml.js',
                'search/typedSearch/generated/TypedSearchFilterValues.js',
                'search/typedSearch/generated/searchTypesOperatorsSupport.js'
            ];
        };
        return SearchFilterEditor;
    }(StatelessComponent_1.StatelessComponent));
    exports.SearchFilterEditor = SearchFilterEditor;
});
