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
define(["require", "exports", "../../jsx/renderInHtml", "../../jsx/StatelessComponent", "../../misc/arrayPrototypeFind", "../../jsx/createElement", "../../jsx/util/Bind", "./searchFilterEditor"], function (require, exports, renderInHtml_1, StatelessComponent_1, arrayPrototypeFind_1, createElement_1, Bind_1, searchFilterEditor_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    arrayPrototypeFind_1.installArrayPrototypeFind();
    var SearchFilterEditors = /** @class */ (function (_super) {
        __extends(SearchFilterEditors, _super);
        function SearchFilterEditors() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        SearchFilterEditors.prototype.render = function () {
            var _this = this;
            return createElement_1.ReactLike.createElement("div", null,
                createElement_1.ReactLike.createElement(Bind_1.Bind, { name: "SearchFilterEditorsProps", data: __assign({}, this.props) }),
                createElement_1.ReactLike.createElement("div", { id: 'SearchFilterEditors' }),
                createElement_1.ReactLike.createElement("button", { onClick: function (e) {
                        // debugger
                        var props = getBindDataOrThrow('SearchFilterEditorsProps', _this);
                        // if (document.querySelectorAll('#SearchFilterEditors div').length === 0) {
                        var el = document.createElement('div');
                        document.getElementById('SearchFilterEditors').appendChild(el);
                        renderInHtml_1.renderInDOM(createElement_1.ReactLike.createElement(searchFilterEditor_1.SearchFilterEditor, { type: props.type }), el);
                        // }
                        // else {
                        // }
                    } }, "Add filter"));
        };
        SearchFilterEditors.prototype.renderFileDependencies = function () {
            return searchFilterEditor_1.SearchFilterEditor._renderFileDependencies().concat(['app/searchView/searchFilterEditor.js']); //.concat(['app/searchView/searchFilterEditor.js'])
        };
        return SearchFilterEditors;
    }(StatelessComponent_1.StatelessComponent));
    exports.SearchFilterEditors = SearchFilterEditors;
});
