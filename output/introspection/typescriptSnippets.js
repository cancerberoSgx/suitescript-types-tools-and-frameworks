define(["require", "exports", "../jsx/createElement"], function (require, exports, ReactLike) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function printRecordFields(r) {
        return ReactLike.createElement("ul", null, r.getFields().map(function (fieldId) { return r.getField({ fieldId: fieldId }); }).filter(function (f) { return f && f.label; }).map(function (f) { return ReactLike.createElement("li", null,
            ReactLike.createElement("strong", null, f.label),
            " ",
            ReactLike.createElement("em", null, f.id),
            " (",
            f.type,
            "), value: ",
            r.getText({ fieldId: f.id })); }));
    }
    exports.printRecordFields = printRecordFields;
});
