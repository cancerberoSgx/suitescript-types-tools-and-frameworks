define(["require", "exports", "./app", "../search/typedSearch/typedSearchOperations"], function (require, exports, app_1, typedSearchOperations_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function appTest(request, response) {
        // This app will have a home page at that renders a html app that will let user do ajax calls to another route 
        var app = new app_1.App();
        // &routeParamName=mainPage&name=seba
        app.addRoute({
            name: 'mainPage',
            handler: function (o) {
                o.response.write("<h1>Hello " + o.params.name + "</h1>");
            }
        });
        // &routeParamName=findCategory&cateogoryName=??
        app.addRoute({
            name: 'findCategory',
            contentType: 'json',
            handler: function (o) {
                var cateogoryName = o.request.parameters.cateogoryName;
                if (!cateogoryName) {
                    return app.notFound(o, 'Category name not provided');
                }
                var cat = typedSearchOperations_1.find({ type: 'commercecategory', columns: ['name'], filters: [{ name: 'name', values: cateogoryName, operator: 'contains' }] }, function (r) { return true; });
                if (!cat) {
                    return app.notFound(o, 'Category not found: ' + cateogoryName);
                }
                o.response.write(JSON.stringify({ name: cateogoryName, id: cat.id }));
            }
        });
        app.dispatch({ request: request, response: response });
    }
    exports.appTest = appTest;
});
