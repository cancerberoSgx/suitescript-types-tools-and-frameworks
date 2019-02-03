define(["require", "exports", "../../search/typedSearch/typedSearchOperations", "../app", "./appTestUI", "../../jsx/createElement", "N/record", "./recordView"], function (require, exports, typedSearchOperations_1, app_1, appTestUI_1, createElement_1, record_1, recordView_1) {
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
                return createElement_1.ReactLike.render(createElement_1.ReactLike.createElement(appTestUI_1.CategoryList, { cats: cats }));
            }
        });
        app.addRoute({
            name: 'recordView',
            handler: function (o) {
                var _a = o.params, id = _a.id, type = _a.type;
                if (!id || !type) {
                    return 'Cannot open record view without an id or type, given id, type: ' + (id + ", " + type);
                }
                var record = record_1.load({ id: id, type: type });
                if (!record) {
                    return 'Record id, type: ' + (id + ", " + type + " not be found");
                }
                return createElement_1.ReactLike.render(createElement_1.ReactLike.createElement(recordView_1.RecordView, { record: recordView_1.buildRecordViewModel(record) }));
            }
        });
        app.dispatch({ request: request, response: response });
    }
    exports.appTest = appTest;
});
