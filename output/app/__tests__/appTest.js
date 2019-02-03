define(["require", "exports", "../../jsx/createElement", "../app", "../recordView/recordViewRoute", "../routes/setFieldValueRoute", "./appTestUI", "../searchView/findRecordRoute", "../searchView/listRecordTypesView"], function (require, exports, createElement_1, app_1, recordViewRoute_1, setFieldValueRoute_1, appTestUI_1, findRecordRoute_1, listRecordTypesView_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function appTest(request, response) {
        // This app will have a home page at that renders a html app that will let user do ajax calls to another route 
        var app = new app_1.App();
        app.addRoute({
            name: 'mainPage',
            handler: function (o) {
                return createElement_1.ReactLike.render(createElement_1.ReactLike.createElement(appTestUI_1.MainPage, { userName: o.params.userName, categories: [], renderLink: app.renderLink.bind(app) }));
            }
        });
        app.addRoute(findRecordRoute_1.findRecordRoute(app));
        // app.addRoute(listCategoriesRoute(app))
        app.addRoute(recordViewRoute_1.recordViewRoute(app));
        app.addRoute(listRecordTypesView_1.listRecordTypesRoute(app));
        app.addRoute(setFieldValueRoute_1.setFieldValueRoute(app));
        app.dispatch({ request: request, response: response });
    }
    exports.appTest = appTest;
});
// function listCategoriesRoute(app: App): Route {
//   return {
//     name: 'listCategories',
//     handler(o) {
//       const cats = list({
//         type: 'commercecategory',
//         columns: ['name', 'primaryparent', 'fullurl'],
//       })
//         .map(c => ({
//           name: c.getValue('name'), id: c.id, parent: c.getValue('primaryparent'), url: c.getValue('fullurl')
//         }));
//       return ReactLike.render(<CategoryList cats={cats} renderLink={app.renderLink.bind(app)}></CategoryList>);
//     }
//   };
// }
