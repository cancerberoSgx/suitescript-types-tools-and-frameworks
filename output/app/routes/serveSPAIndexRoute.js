define(["require", "exports", "../../misc/misc"], function (require, exports, misc_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function serveSPAIndexRoute(app) {
        return {
            name: 'serveSPAIndex',
            handler: function (o) {
                var jsFiles = misc_1.tryTo(function () { return JSON.parse(decodeURIComponent(o.params.jsFiles || '[]')); }) || [];
                var cssFiles = misc_1.tryTo(function () { return JSON.parse(decodeURIComponent(o.params.cssFiles || '[]')); }) || [];
                return ("\n<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\">\n  <meta name=\"theme-color\" content=\"#000000\">\n  <!--\n  <link rel=\"manifest\" href=\"/manifest.298fe654.js\">\n  <link rel=\"shortcut icon\" href=\"/favicon.26242483.ico\">  -->\n  <title>Served Dummy SPA</title>\n  " + cssFiles.map(function (f) { return "<link rel=\"stylesheet\" href=\"" + f + "\">"; }) + "\n</head>\n<body>\n  <noscript>\n    You need to enable JavaScript to run this app.\n  </noscript>\n  <div id=\"root\"></div>\n  " + jsFiles.map(function (f) { return "<script type=\"text/javascript\" src=\"" + f + "\"></script>"; }) + "\n</body>\n</html>\n      ").trim();
            }
        };
    }
    exports.serveSPAIndexRoute = serveSPAIndexRoute;
});
// export function addFile(config: {})
