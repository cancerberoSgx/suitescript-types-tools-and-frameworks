define(["require", "exports", "../../jsx/createElement", "../../search/typedSearch/typedSearchOperations", "../app", "../recordView/recordViewRoute", "../routes/setFieldValueRoute", "./appTestUI"], function (require, exports, createElement_1, typedSearchOperations_1, app_1, recordViewRoute_1, setFieldValueRoute_1, appTestUI_1) {
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
        app.addRoute({
            name: 'findCategory',
            contentType: 'json',
            handler: function (o) {
                var categoryName = o.params.categoryName;
                if (!categoryName) {
                    return app.notFound(o, 'Category name not provided');
                }
                var cat = typedSearchOperations_1.find({
                    type: 'commercecategory',
                    columns: ['name'],
                    filters: [{ name: 'name', values: categoryName, operator: 'contains' }]
                }, function (r) { return true; });
                if (!cat) {
                    return app.notFound(o, 'Category not found: ' + categoryName);
                }
                return { name: categoryName, id: cat.id };
            }
        });
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
