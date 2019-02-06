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
define(["require", "exports", "../../jsx/createElement", "../../jsx/util/Bind", "../app", "N/runtime"], function (require, exports, createElement_1, Bind_1, app_1, runtime_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // example application using ./app framework. It implements a simple MainPage route (see appTestMainPage and then uses built in routes like recordView and searchView)
    function miniNetsuiteApp(request, response) {
        var app = new app_1.App();
        app.addRoute({
            name: 'mainPage',
            handler: function (o) {
                return createElement_1.ReactLike.render(createElement_1.ReactLike.createElement(exports.MainPage, __assign({}, o.params, { userName: runtime_1.getCurrentUser().name })));
            }
        });
        var redirectToMainPage = {
            name: 'redirectToMainPage',
            handler: function (o) {
                app.redirect({ redirect: app.renderLink({ routeName: 'mainPage', params: {} }) });
            }
        };
        // also we set a default route that redirects to main page in case the url doesn't have any route or unknown one (alternatively we could show 404 page)  
        app.setNoRouteParamRoute(redirectToMainPage);
        app.setNoRouteFoundRoute(redirectToMainPage);
        // finally we call dispatch() so the framework calls the routes implementation that matches request's url
        app.dispatch({ request: request, response: response });
    }
    exports.miniNetsuiteApp = miniNetsuiteApp;
    exports.MainPage = function (props, children) {
        return createElement_1.ReactLike.createElement("article", null,
            createElement_1.ReactLike.createElement(MainPageInit, null),
            createElement_1.ReactLike.createElement("h1", null,
                "Welcome ",
                props.userName),
            "This is an experiment of mine (Sebasti\u00E1n Gurin) using JSX & TypeScript technologies to render server side pages. Try to use the buttons and links below to see some pages:",
            createElement_1.ReactLike.createElement("ul", null,
                createElement_1.ReactLike.createElement("li", null,
                    createElement_1.ReactLike.createElement("a", { href: props.renderLink({
                            routeName: 'recordView',
                            params: { id: '7', type: 'commercecategory', showSublistLines: true, seeValues: true, showAllFields: false }
                        }) }, "record view link"),
                    "\u00A0 and \u00A0",
                    createElement_1.ReactLike.createElement("button", { onClick: function (e) { return fetchAndRenderHtml({
                            routeName: 'recordView',
                            params: { id: '7', type: 'commercecategory', showSublistLines: true, seeValues: true, showAllFields: false },
                            selector: '#mainView'
                        }); } }, "record view embedded")),
                createElement_1.ReactLike.createElement("li", null,
                    createElement_1.ReactLike.createElement("a", { href: props.renderLink({
                            routeName: 'listRecordTypes',
                            params: { type: 'item' },
                        }) }, "listRecordTypes view link"),
                    "\u00A0 and \u00A0",
                    createElement_1.ReactLike.createElement("button", { onClick: function (e) { return fetchAndRenderHtml({
                            routeName: 'listRecordTypes',
                            params: { dynamicResultsRender: true, type: 'item' },
                            selector: '#mainView'
                        }); } }, "listRecordTypes view embedded"))),
            createElement_1.ReactLike.createElement("div", { id: "mainView" }));
    };
    /** we call custom tags so they get initialized and their scripts are embedded in the main html - if not they won't be present when complex pages are rendered inside dynamically using fetchAndRenderHtml */
    var MainPageInit = function () { return createElement_1.ReactLike.createElement("span", null,
        createElement_1.ReactLike.createElement(Bind_1.Bind, null)); };
});
// export function mainPage(app: App): Route {
//   return {
//     name: 'mainPage',
//     handler(o) {
//       return ReactLike.render(<MainPage userName={o.params.userName}></MainPage>);
//     }
//   };
// }
// interface Class extends Partial<CSSStyleDeclaration> { }
// interface IClasses {
//   [k: string]: Class
//   button: Class,
//   primaryButton: Class
// }
// function getStyles() {
//   const button: Class = {
//     border: '2px solid pink',
//     padding: '5px'
//   };
//   // this class extends another:
//   const primaryButton: Class = {
//     ...button,
//     color: 'red',
//     fontWeight: 'bolder'
//   };
//   const styles: IClasses = {
//     button,
//     primaryButton
//   };
//   return styles;
// }
// interface Category {
//   name?: string, parent?: string, url?: string, id?: string
// }
// interface CategoryList {
//   renderLink(config: RenderLinkOptions): string
//   cats: Category[]
// }
// export const CategoryList = (props: CategoryList) => <ul>
//   {props.cats.map(c => <li>
//     {c.name} {c.url} parent: {c.parent} id: {c.id}
//     <a href={props.renderLink({ routeName: 'recordView', params: { id: c.id + '', type: 'commercecategory' } })}>link</a>
//   </li>)}
// </ul>
