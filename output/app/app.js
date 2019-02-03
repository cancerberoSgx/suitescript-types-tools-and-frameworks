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
define(["require", "exports", "../misc/misc", "../jsx/createElement"], function (require, exports, misc_1, createElement_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var f = misc_1.find; // install array.prototype.find
    var ROUTEPARAMNAME_NOPREFIX = 'routeParamName';
    var ROUTEPARAMPREFIX = '__app__';
    var ROUTEPARAMNAME = ROUTEPARAMPREFIX + ROUTEPARAMNAME_NOPREFIX;
    var SCRIPTLETURLPREFIX = '/app/site/hosting/scriptlet.nl';
    var App = /** @class */ (function () {
        function App() {
            this.routes = [];
            this.paramPrefix = ROUTEPARAMPREFIX;
            this.routeParamName = ROUTEPARAMNAME_NOPREFIX;
        }
        App.prototype.addRoute = function (r) {
            this.routes.push(r);
        };
        App.prototype.dispatch = function (d) {
            this.currentDispatchOptions = d;
            var params = this.getParamsWithoutPrefix(d.request);
            var routeName = params["" + this.routeParamName];
            if (!routeName) {
                return this.notFound(d, "no route name given in url");
            }
            var route = this.routes.find(function (r) { return r.name === routeName; });
            if (!route) {
                return this.notFound(d, "no route found with name " + routeName);
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
                d.response.write("<script>\n" + fetchAndRenderHtmlFragmentHandlerString() + "\n" + createElement_1.ReactLike.getClientCode().map(function (c) { return c.code; }).join('\n') + "\n</script>");
                d.response.write(result);
            }
            // else if not result we assume the route already write in the response.
        };
        App.prototype.notFound = function (d, msg) {
            if (msg === void 0) { msg = 'Page not found'; }
            console.log("App Error: " + msg);
        };
        App.prototype.getParamsWithoutPrefix = function (request) {
            var _this = this;
            var params = {};
            Object.keys(request.parameters).filter(function (p) { return p.indexOf(_this.paramPrefix) === 0; }).forEach(function (p) {
                params[p.substring(_this.paramPrefix.length, p.length)] = request.parameters[p];
            });
            return params;
        };
        App.prototype.getOtherParams = function () {
            var _this = this;
            var otherParams = {};
            Object.keys(this.currentDispatchOptions.request.parameters).filter(function (p) { return p.indexOf(_this.paramPrefix) !== 0; }).forEach(function (p) {
                otherParams[p] = _this.currentDispatchOptions.request.parameters[p];
            });
            return otherParams;
        };
        App.prototype.getParamsUrl = function (params, except) {
            var _this = this;
            if (except === void 0) { except = []; }
            return "" + Object.keys(params).filter(function (p) { return except.indexOf(p) === -1; }).map(function (p) { return "" + _this.paramPrefix + p + "=" + params[p]; }).join('&');
        };
        App.prototype.getParamsWithPrefix = function (params, except) {
            var _this = this;
            if (except === void 0) { except = []; }
            var params_ = {};
            Object.keys(params).filter(function (p) { return except.indexOf(p) === -1; }).forEach(function (p) {
                params_[_this.paramPrefix + p] = params[p];
            });
            return params_;
        };
        App.prototype.getCurrentRealUrlSearchFragment = function () {
            var params = this.currentDispatchOptions.request.parameters;
            var otherParams = this.getOtherParams();
            var otherParamsUrl = Object.keys(otherParams).map(function (p) { return p + "=" + otherParams[p]; }).join('&');
            var routeNameUrl = Object.keys(params).filter(function (p) { return p === ROUTEPARAMNAME; }).map(function (p) { return p + "=" + params[p]; }).join('&');
            var routeParamsUrl = Object.keys(params).filter(function (p) { return p !== ROUTEPARAMNAME && p.indexOf(ROUTEPARAMPREFIX) === 0; }).map(function (p) { return p + "=" + params[p]; }).join('&');
            return SCRIPTLETURLPREFIX + "?" + otherParamsUrl + "&" + routeNameUrl + "&" + routeParamsUrl;
        };
        App.prototype.renderLink = function (config) {
            var _a;
            var otherParams = this.getOtherParams();
            var otherParamsUrl = Object.keys(otherParams).map(function (p) { return p + "=" + otherParams[p]; }).join('&');
            var paramsUrl = this.getParamsUrl(config.params);
            var routeParamsUrl = this.getParamsUrl((_a = {}, _a[this.routeParamName] = config.routeName, _a));
            var currentUrlSearchFragment = "?" + otherParamsUrl + "&" + routeParamsUrl + "&" + paramsUrl;
            return buildUrl(__assign({}, config, { params: this.getParamsWithPrefix(config.params), 
                // routeParamName: `${this.paramPrefix}${this.routeParamName}`,
                currentUrlSearchFragment: currentUrlSearchFragment }));
        };
        return App;
    }());
    exports.App = App;
    /** this function is meant to be evaluated in the browser and also in the server! */
    function buildUrl(config) {
        var clean = "" + SCRIPTLETURLPREFIX + config.currentUrlSearchFragment.substring(0, config.currentUrlSearchFragment.indexOf("&" + ROUTEPARAMNAME + "=")) + "&" + ROUTEPARAMNAME + "=" + config.routeName;
        var newParams = clean + "&" + Object.keys(config.params).map(function (p) { return p + "=" + config.params[p]; }).join('&');
        return newParams;
    }
    /** this function is meant to be evaluated in the browser! */
    function fetchAndRenderHtmlFragment(config) {
        var url = buildRouteUrl(config);
        fetch(url)
            .then(function (response) {
            return response.text();
        })
            .then(function (html) {
            var parent = document.querySelector(config.selector);
            if (parent) {
                parent.innerHTML = html;
            }
        });
    }
    function buildRouteUrl(config) {
        var params = {};
        Object.keys(config.params).map(function (p) { params["" + ROUTEPARAMPREFIX + p] = config.params[p]; });
        var url = buildUrl(__assign({}, config, { currentUrlSearchFragment: location.search, params: params }));
        return url;
    }
    function fetchAndRenderHtmlFragmentHandlerString() {
        // @ts-ignore
        var assign = __assign.toString();
        var s = "\nvar ROUTEPARAMNAME = \"" + ROUTEPARAMNAME + "\";\nvar ROUTEPARAMPREFIX = \"" + ROUTEPARAMPREFIX + "\";\nvar SCRIPTLETURLPREFIX = \"" + SCRIPTLETURLPREFIX + "\"; \nvar __assign = " + assign + "\n" + buildRouteUrl.toString() + "\n" + buildUrl.toString() + "\n" + fetchAndRenderHtmlFragment.toString() + "\nfunction fetchAndRenderHtml(config){\n  return fetchAndRenderHtmlFragment(config)\n}\nfunction buildLink(config){\n  return buildRouteUrl(config)\n}\nvar a = 1\n  ";
        return s;
        // console.log(`<textarea>${s}</textarea>`);
        // return ()=>{}
        // return eval(`(${s})`)
    }
});
