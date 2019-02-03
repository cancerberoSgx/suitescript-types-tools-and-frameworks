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
define(["require", "exports", "../../jsx/createElement", "../app"], function (require, exports, createElement_1, app_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function getStyles() {
        var button = {
            border: '2px solid pink',
            padding: '5px'
        };
        // this class extends another:
        var primaryButton = __assign({}, button, { color: 'red', fontWeight: 'bolder' });
        var styles = {
            button: button,
            primaryButton: primaryButton
        };
        return styles;
    }
    var MainPage = function (props, children) {
        // const h = props.fetchAndRenderHtmlFragment;
        return createElement_1.ReactLike.createElement("article", null,
            createElement_1.ReactLike.createElement("script", null, app_1.fetchAndRenderHtmlFragmentHandlerString()),
            createElement_1.ReactLike.createElement("h1", null,
                "Welcome ",
                props.userName),
            createElement_1.ReactLike.createElement("p", null,
                "Search for categories by name:",
                createElement_1.ReactLike.createElement("input", { id: "categoryName", placeholder: "parent", value: "parent" }),
                createElement_1.ReactLike.createElement("button", { onClick: function (e) { return fetchAndRenderHtml({
                        routeName: 'findCategory',
                        params: { categoryName: document.querySelector('#categoryName').value },
                        selector: '#results'
                    }); } }, "search")),
            createElement_1.ReactLike.createElement("button", { onClick: function (e) { return fetchAndRenderHtml({
                    routeName: 'listCategories',
                    params: {},
                    selector: '#resultsList'
                }); } }, "list all categories"),
            createElement_1.ReactLike.createElement("p", null, "Result by name: "),
            createElement_1.ReactLike.createElement("div", { id: "results" }),
            createElement_1.ReactLike.createElement("p", null, "Result list all "),
            createElement_1.ReactLike.createElement("div", { id: "resultsList" }));
    };
    function renderMainPage(props) {
        return createElement_1.ReactLike.render(createElement_1.ReactLike.createElement(MainPage, { userName: props.userName, categories: props.categories }));
    }
    exports.renderMainPage = renderMainPage;
    var ListCategories = function (props) { return createElement_1.ReactLike.createElement("ul", null, props.cats.map(function (c) { return createElement_1.ReactLike.createElement("li", null,
        c.name,
        " ",
        c.url,
        " parent: ",
        c.parent,
        " id: ",
        c.id); })); };
    function renderListCategories(props) {
        return createElement_1.ReactLike.render(createElement_1.ReactLike.createElement(ListCategories, { cats: props.cats }));
    }
    exports.renderListCategories = renderListCategories;
});
// {name: ''/* document.querySelector('#categoryName').value as string */}
