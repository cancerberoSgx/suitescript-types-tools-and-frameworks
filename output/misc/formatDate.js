define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function formatDate(date, format) {
        if (typeof date === 'string') { // happens when serializing dates to json for testing
            date = new Date(date);
        }
        var dd = date.getDay();
        var mm = date.getMonth() + 1; //January is 0!
        var yyyy = date.getFullYear();
        if (dd < 10) {
            dd = '0' + dd;
        }
        if (mm < 10) {
            mm = '0' + mm;
        }
        if (format === 'YYYY-MM-DD') {
            return yyyy + '-' + mm + '-' + dd;
        }
        else {
            return mm + "/" + dd + "/" + yyyy;
        }
    }
    exports.formatDate = formatDate;
});
