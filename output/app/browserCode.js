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
define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // this rename/re-exports is neccesary since we are referencing this variables directly from js code eval in browser
    var ROUTEPARAMNAME_NOPREFIX_ = 'routeParamName';
    var ROUTEPARAMPREFIX_ = '__app__';
    var ROUTEPARAMNAME_ = ROUTEPARAMPREFIX_ + ROUTEPARAMNAME_NOPREFIX_;
    var SCRIPTLETURLPREFIX_ = '/app/site/hosting/scriptlet.nl';
    exports.ROUTEPARAMNAME_NOPREFIX = ROUTEPARAMNAME_NOPREFIX_;
    exports.ROUTEPARAMPREFIX = ROUTEPARAMPREFIX_;
    exports.ROUTEPARAMNAME = ROUTEPARAMNAME_;
    exports.SCRIPTLETURLPREFIX = SCRIPTLETURLPREFIX_;
    /** this function is meant to be evaluated in the browser and also in the server! */
    function buildUrl(config) {
        var clean = "" + SCRIPTLETURLPREFIX_ + config.currentUrlSearchFragment.substring(0, config.currentUrlSearchFragment.indexOf("&" + ROUTEPARAMNAME_ + "=")) + "&" + ROUTEPARAMNAME_ + "=" + config.routeName;
        var newParams = clean + "&" + Object.keys(config.params).map(function (p) { return p + "=" + config.params[p]; }).join('&');
        return newParams;
    }
    exports.buildUrl = buildUrl;
    /** this function is meant to be evaluated in the browser! */
    function fetchAndRenderHtmlFragment(config) {
        var url = buildRouteUrl(config);
        var parent = document.querySelector(config.selector);
        if (!parent) {
            return; // TODO: log?
        }
        parent.innerHTML = "<div>Loading new content...</div>";
        fetch(url)
            .then(function (response) {
            return response.text();
        })
            .then(function (html) {
            parent.innerHTML = html;
        });
    }
    function buildRouteUrl(config) {
        var params = {};
        Object.keys(config.params).map(function (p) { params["" + ROUTEPARAMPREFIX_ + p] = config.params[p]; });
        var url = buildUrl(__assign({}, config, { currentUrlSearchFragment: location.search, params: params }));
        return url;
    }
    function paramsToUrl(params, filter) {
        if (filter === void 0) { filter = function (s) { return true; }; }
        return Object.keys(params).filter(filter).map(function (p) { return p + "=" + params[p]; }).join('&');
    }
    exports.paramsToUrl = paramsToUrl;
    function renderBrowserCode() {
        // @ts-ignore
        var assign = __assign.toString();
        var s = ("\nvar ROUTEPARAMNAME_ = \"" + ROUTEPARAMNAME_ + "\";\nvar ROUTEPARAMPREFIX_ = \"" + ROUTEPARAMPREFIX_ + "\";\nvar SCRIPTLETURLPREFIX_ = \"" + SCRIPTLETURLPREFIX_ + "\";\nvar __assign = " + assign + "\n" + buildRouteUrl.toString() + "\n" + buildUrl.toString() + "\n" + fetchAndRenderHtmlFragment.toString() + "\nfunction fetchAndRenderHtml(config){\n  return fetchAndRenderHtmlFragment(config)\n}\nfunction buildLink(config){\n  return buildRouteUrl(config)\n}\n").trim();
        return s;
    }
    exports.renderBrowserCode = renderBrowserCode;
});
