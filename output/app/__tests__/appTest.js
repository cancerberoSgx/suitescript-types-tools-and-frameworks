define(["require", "exports", "../app", "../recordView/recordViewRoute", "../routes/setFieldValueRoute", "../searchView/findRecordRoute", "../searchView/listRecordTypesRoute", "./appTestMainPage", "../routes/setSublistFieldValueRoute"], function (require, exports, app_1, recordViewRoute_1, setFieldValueRoute_1, findRecordRoute_1, listRecordTypesRoute_1, appTestMainPage_1, setSublistFieldValueRoute_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // example application using ./app framework. It implements a simple MainPage route (see appTestMainPage and then uses built in routes like recordView and searchView)
    function appTest(request, response) {
        var app = new app_1.App();
        app.addRoute(appTestMainPage_1.mainPageRoute(app));
        app.addRoute(findRecordRoute_1.findRecordRoute(app));
        app.addRoute(recordViewRoute_1.recordViewRoute(app));
        app.addRoute(listRecordTypesRoute_1.listRecordTypesRoute(app));
        app.addRoute(setFieldValueRoute_1.setFieldValueRoute(app));
        app.addRoute(setSublistFieldValueRoute_1.setSublistFieldValueRoute(app));
        // also we set a default route that redirects to main page in case the url doesn't have any route or unknown one (alternatively we could show 404 page)  
        app.setNoRouteParamRoute(defaultRoute(app));
        app.setNoRouteFoundRoute(defaultRoute(app));
        // finally we call dispatch() so the framework calls the routes implementation that matches request's url
        app.dispatch({ request: request, response: response });
    }
    exports.appTest = appTest;
    function defaultRoute(app) {
        return {
            name: 'redirectToMainPage',
            handler: function (o) {
                app.redirect({ redirect: app.renderLink({ routeName: 'mainPage', params: {} }) });
            }
        };
    }
});
