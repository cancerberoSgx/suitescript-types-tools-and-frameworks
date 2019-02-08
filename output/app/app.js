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
define(["require", "exports", "../misc/arrayPrototypeFind", "../jsx/createElement", "N/redirect", "./browserCode"], function (require, exports, arrayPrototypeFind_1, createElement_1, redirect_1, browserCode_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var f = arrayPrototypeFind_1.find; // install array.prototype.find
    var App = /** @class */ (function () {
        function App() {
            this.routes = [];
        }
        App.prototype.addRoute = function (r) {
            this.routes.push(r);
        };
        App.prototype.dispatch = function (d) {
            this.currentDispatchOptions = d;
            var params = __assign({}, this.getParamsWithoutPrefix(d.request), { renderLink: this.renderLink.bind(this), currentUrl: this.getCurrentRealUrlSearchFragment() });
            params.currentParams = __assign({}, params, { currentParams: undefined });
            var routeName = params["" + browserCode_1.ROUTEPARAMNAME_NOPREFIX];
            var route;
            if (!routeName) {
                if (this.noRouteParamRoute) {
                    route = this.noRouteParamRoute;
                }
                else {
                    return this.notFound(d, "no route name given in url");
                }
            }
            route = route || this.routes.find(function (r) { return r.name === routeName; });
            if (!route) {
                if (this.noRouteFoundRoute) {
                    route = this.noRouteFoundRoute;
                }
                else {
                    return this.notFound(d, "no route found with name " + routeName);
                }
            }
            // TODO: if route params are mandatory , verify that they were provided in url or fail
            if (route.contentType === 'json') {
                d.response.setHeader({ name: 'Content-Type', value: 'application/json; charset=UTF-8' });
            }
            var result = route.handler(__assign({}, d, { params: params }));
            if (result && route.contentType === 'json') {
                d.response.write(JSON.stringify(result));
            }
            else if (result && typeof result === 'string' && !route.contentType || route.contentType === 'html') {
                d.response.write("<script>\n" + browserCode_1.renderBrowserCode() + "\n" + createElement_1.ReactLike.getClientCode().map(function (c) { return c.code; }).join('\n') + "\n</script>");
                d.response.write(result);
            }
        };
        /** set a default route in case url has no routeName param */
        App.prototype.setNoRouteParamRoute = function (r) {
            this.noRouteParamRoute = r;
        };
        /** set a default route in case no route is found with given routeName param */
        App.prototype.setNoRouteFoundRoute = function (r) {
            this.noRouteFoundRoute = r;
        };
        /** default route not found handler - when noRouteParamRoute or no RouteFoundRoute is installed and no route installed matches the url */
        App.prototype.notFound = function (d, msg) {
            if (msg === void 0) { msg = 'Page not found'; }
            console.log("App Error: " + msg);
        };
        /** default redirect implementation. Routes needing to redirect to other routes can call this method */
        App.prototype.redirect = function (config) {
            // const msgParam = `&${ROUTEPARAMPREFIX}messageFromRedirect=`
            // we remove messageFromRedirectParam that we assume is the last one if any
            // const url = (config.redirect.indexOf(msgParam) === -1 || !config.messageFromRedirect) ? config.redirect :
            // config.redirect.substring(config.redirect.indexOf(msgParam), config.redirect.length) + msgParam + config.messageFromRedirect
            // console.log(url+1)
            redirect_1.redirect({ url: config.redirect + "&" + browserCode_1.ROUTEPARAMPREFIX + "messageFromRedirect=" + config.messageFromRedirect });
        };
        /** return location.search url server side equivalent with parameters ordered, first NetSuite's SuiteLet parameters, then routeName and then route specific params.  */
        App.prototype.getCurrentRealUrlSearchFragment = function () {
            var params = this.currentDispatchOptions.request.parameters;
            var otherParamsUrl = browserCode_1.paramsToUrl(this.getOtherParams());
            var routeNameUrl = browserCode_1.paramsToUrl(params, function (p) { return p === browserCode_1.ROUTEPARAMNAME; });
            var routeParamsUrl = browserCode_1.paramsToUrl(params, function (p) { return p !== browserCode_1.ROUTEPARAMNAME && p.indexOf(browserCode_1.ROUTEPARAMPREFIX) === 0; });
            return browserCode_1.SCRIPTLETURLPREFIX + "?" + otherParamsUrl + "&" + routeNameUrl + "&" + routeParamsUrl;
        };
        /** will build a relative link to given route and params - useful to build links to other routes in pages UI / markup/ anchors. */
        App.prototype.renderLink = function (config) {
            var _a;
            var otherParamsUrl = browserCode_1.paramsToUrl(this.getOtherParams());
            var paramsUrl = this.getParamsUrl(config.params);
            var routeParamsUrl = this.getParamsUrl((_a = {}, _a[browserCode_1.ROUTEPARAMNAME_NOPREFIX] = config.routeName, _a));
            var currentRouteParamsToMaintain = config.forgetCurrentRouteParams ? {} : this.getCurrentRouteParams(config);
            return browserCode_1.buildUrl(__assign({}, config, { params: __assign({}, currentRouteParamsToMaintain, this.getParamsWithPrefix(config.params)), currentUrlSearchFragment: "?" + otherParamsUrl + "&" + routeParamsUrl + "&" + paramsUrl }));
        };
        /**
         * return current route params without route name (useful to remember current route params to keep in new route url) */
        App.prototype.getCurrentRouteParams = function (config, dontCleanEmptyParams) {
            var params = {};
            var currentParams = this.currentDispatchOptions.request.parameters;
            Object.keys(currentParams)
                .filter(function (p) { return p.indexOf(browserCode_1.ROUTEPARAMPREFIX) === 0 && p !== browserCode_1.ROUTEPARAMNAME && (dontCleanEmptyParams || currentParams[p] !== ''); })
                .forEach(function (p) {
                params[p] = currentParams[p];
            });
            return params;
        };
        App.prototype.getParamsWithoutPrefix = function (request) {
            var params = {};
            Object.keys(request.parameters)
                .filter(function (p) { return p.indexOf(browserCode_1.ROUTEPARAMPREFIX) === 0; })
                .forEach(function (p) {
                params[p.substring(browserCode_1.ROUTEPARAMPREFIX.length, p.length)] = request.parameters[p];
            });
            return params;
        };
        App.prototype.getOtherParams = function () {
            var _this = this;
            var otherParams = {};
            Object.keys(this.currentDispatchOptions.request.parameters)
                .filter(function (p) { return p.indexOf(browserCode_1.ROUTEPARAMPREFIX) !== 0; })
                .forEach(function (p) {
                otherParams[p] = _this.currentDispatchOptions.request.parameters[p];
            });
            return otherParams;
        };
        App.prototype.getParamsUrl = function (params, except) {
            if (except === void 0) { except = []; }
            return "" + Object.keys(params).filter(function (p) { return except.indexOf(p) === -1; }).map(function (p) { return "" + browserCode_1.ROUTEPARAMPREFIX + p + "=" + params[p]; }).join('&');
        };
        App.prototype.getParamsWithPrefix = function (params, except) {
            if (except === void 0) { except = []; }
            var params_ = {};
            Object.keys(params)
                .filter(function (p) { return except.indexOf(p) === -1; })
                .forEach(function (p) {
                params_[browserCode_1.ROUTEPARAMPREFIX + p] = params[p];
            });
            return params_;
        };
        return App;
    }());
    exports.App = App;
});
