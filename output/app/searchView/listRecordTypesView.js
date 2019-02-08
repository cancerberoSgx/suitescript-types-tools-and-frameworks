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
define(["require", "exports", "../../search/getSearchRecordTypes", "../../jsx/createElement", "../../jsx/StatelessComponent"], function (require, exports, getSearchRecordTypes_1, createElement_1, StatelessComponent_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ListRecordTypes = function (props) {
        return createElement_1.ReactLike.createElement("div", null,
            createElement_1.ReactLike.createElement("p", null,
                createElement_1.ReactLike.createElement("a", { href: props.renderLink({ routeName: 'mainPage', params: __assign({}, props.currentParams) }) }, "Go back to Main Page")),
            "Record type: ",
            props.type,
            " ",
            props.results && props.results.length,
            createElement_1.ReactLike.createElement("select", { id: "ListRecordTypesSelect", onChange: function (e) {
                    var type = e.currentTarget.value;
                    fetchAndRenderHtml({
                        routeName: 'listRecordTypesResult',
                        params: { type: type },
                        selector: '#listRecordTypesDynamicResults'
                    });
                } }, getSearchRecordTypes_1.getSearchRecordTypes().map(function (r) {
                return createElement_1.ReactLike.createElement("option", { selected: props.type == r, value: r }, r);
            })),
            createElement_1.ReactLike.createElement("span", { id: "listRecordTypesDynamicResults" },
                createElement_1.ReactLike.createElement(ListRecordTypesResult, __assign({}, props))));
    };
    var ListRecordTypesResult = /** @class */ (function (_super) {
        __extends(ListRecordTypesResult, _super);
        function ListRecordTypesResult() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ListRecordTypesResult.prototype.render = function () {
            var _this = this;
            if (!this.props.results) {
                return createElement_1.ReactLike.createElement("span", null);
            }
            return createElement_1.ReactLike.createElement("div", null,
                "Results:",
                createElement_1.ReactLike.createElement("ul", null, this.props.results.map(function (r) {
                    return createElement_1.ReactLike.createElement("li", null,
                        createElement_1.ReactLike.createElement("a", { href: _this.props.renderLink({ routeName: 'recordView', params: { id: r.id, type: r.recordType } }) },
                            r.recordType,
                            "  ",
                            r.id));
                })));
        };
        return ListRecordTypesResult;
    }(StatelessComponent_1.StatelessComponent));
    exports.ListRecordTypesResult = ListRecordTypesResult;
});
