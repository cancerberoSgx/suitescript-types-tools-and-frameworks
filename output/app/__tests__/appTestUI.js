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
define(["require", "exports", "../../jsx/createElement"], function (require, exports, createElement_1) {
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
    // declare function buildLink(config: RenderLinkOptions): string
    exports.MainPage = function (props, children) {
        return createElement_1.ReactLike.createElement("article", null,
            createElement_1.ReactLike.createElement("h1", null,
                "Welcome ",
                props.userName),
            "Interesting links: ",
            createElement_1.ReactLike.createElement("ul", null,
                createElement_1.ReactLike.createElement("li", null,
                    createElement_1.ReactLike.createElement("a", { href: props.renderLink({ routeName: 'recordView', params: { id: '7', type: 'commercecategory' } }) }, "category 7 record view"))),
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
    exports.CategoryList = function (props) { return createElement_1.ReactLike.createElement("ul", null, props.cats.map(function (c) { return createElement_1.ReactLike.createElement("li", null,
        c.name,
        " ",
        c.url,
        " parent: ",
        c.parent,
        " id: ",
        c.id,
        createElement_1.ReactLike.createElement("a", { href: props.renderLink({ routeName: 'recordView', params: { id: c.id + '', type: 'commercecategory' } }) }, "link")); })); };
});
