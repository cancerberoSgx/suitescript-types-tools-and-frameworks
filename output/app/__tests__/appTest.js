define(["require", "exports", "../../jsx/createElement", "../../search/typedSearch/typedSearchOperations", "../app", "../recordView/recordViewRoute", "../routes/setFieldValueRoute", "./appTestUI", "../searchView/findRecordRoute"], function (require, exports, createElement_1, typedSearchOperations_1, app_1, recordViewRoute_1, setFieldValueRoute_1, appTestUI_1, findRecordRoute_1) {
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
        app.addRoute({
            name: 'listCategories',
            handler: function (o) {
                var cats = typedSearchOperations_1.list({
                    type: 'commercecategory',
                    columns: ['name', 'primaryparent', 'fullurl'],
                })
                    .map(function (c) { return ({
                    name: c.getValue('name'), id: c.id, parent: c.getValue('primaryparent'), url: c.getValue('fullurl')
                }); });
                return createElement_1.ReactLike.render(createElement_1.ReactLike.createElement(appTestUI_1.CategoryList, { cats: cats, renderLink: app.renderLink.bind(app) }));
            }
        });
        app.addRoute(recordViewRoute_1.recordViewRoute(app));
        // a service that will call setValue on a record and redirect the user according to redirect param
        app.addRoute(setFieldValueRoute_1.setFieldValueRoute(app));
        app.dispatch({ request: request, response: response });
    }
    exports.appTest = appTest;
});
