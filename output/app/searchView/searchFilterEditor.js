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
define(["require", "exports", "../../jsx/StatelessComponent", "../../jsx/util/Select", "../../search/typedSearch/generated", "../../jsx/createElement", "../../misc/arrayPrototypeFind", "../../introspection/printThisScopeSource", "../../jsx/reactLikeBrowserSource", "../../jsx/util/Select"], function (require, exports, StatelessComponent_1, Select_1, generated_1, createElement_1, arrayPrototypeFind_1, printThisScopeSource_1, reactLikeBrowserSource_1, select) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    arrayPrototypeFind_1.installArrayPrototypeFind();
    var SearchFilterEditor = /** @class */ (function (_super) {
        __extends(SearchFilterEditor, _super);
        function SearchFilterEditor() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        SearchFilterEditor.prototype.render = function () {
            var script = "\nvar generated_1 = {SearchTypesOperatorSupportValues: " + JSON.stringify(generated_1.SearchTypesOperatorSupportValues) + ", \n    typedSearchFilterValues : " + JSON.stringify(generated_1.typedSearchFilterValues) + "\n  };\n  var Select_1  = {Select: " + Select_1.Select.toString() + "}\n  " + (' ' || printThisScopeSource_1.printNamespace(select, 'select_1')) + "\n    " + (' ' || reactLikeBrowserSource_1.reactLikeBrowserSource()) + ";\n    " + Test.toString() + ";\n    ";
            var filterValues = generated_1.typedSearchFilterValues[this.props.type]
                .map(function (f) { return (__assign({}, f, { name: f.id + " - " + f.label })); });
            // const operators = (SearchTypesOperatorSupportValues as any as {[k:string]:string[]})[filterValues.type]
            // const f = this.props.filter
            return createElement_1.ReactLike.createElement("div", null,
                createElement_1.ReactLike.createElement("script", null, script),
                createElement_1.ReactLike.createElement(Select_1.Select, { "select-attrs": { 'data-user-filter': '' }, options: filterValues, firstOption: "Select " + this.props.type + " filter", onChange: function (selected) {
                        if (!selected) {
                            return;
                        }
                        var operators = generated_1.SearchTypesOperatorSupportValues[selected];
                        var d = document.createElement('div');
                        d.innerHTML = createElement_1.ReactLike.render(createElement_1.ReactLike.createElement(Select_1.Select, { "select-attrs": { 'data-user-filter-operator': '' }, options: operators, firstOption: "Select " + selected + " filter operator", onChange: function (operator) {
                                debugger;
                            } }));
                        document.body.appendChild(d);
                    } }));
        };
        return SearchFilterEditor;
    }(StatelessComponent_1.StatelessComponent));
    exports.SearchFilterEditor = SearchFilterEditor;
    function Test(props) {
        return createElement_1.ReactLike.createElement("div", null, "ehhhh");
    }
});
// writeFileSync('src/jsx/__tests__/test.html',renderInHTMLDocument(<SearchFilterEditor type="commercecategory"></SearchFilterEditor>))
