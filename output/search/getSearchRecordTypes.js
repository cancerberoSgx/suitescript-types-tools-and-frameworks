define(["require", "exports", "N/search"], function (require, exports, search_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function getSearchRecordTypes() {
        var a = [];
        for (var key in search_1.Type) {
            a.push(search_1.Type[key]);
        }
        return a;
    }
    exports.getSearchRecordTypes = getSearchRecordTypes;
});
