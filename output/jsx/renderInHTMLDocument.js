define(["require", "exports", "./createElement"], function (require, exports, createElement_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function renderInHTMLDocument(e) {
        return "\n  <!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\" />\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n  <title>title</title>\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n</head>\n<body>\n  " + createElement_1.ReactLike.render(e, { indent: true, indentLevel: 1, renderClientCode: true }) + "\n</body>\n</html>\n";
    }
    exports.renderInHTMLDocument = renderInHTMLDocument;
});
