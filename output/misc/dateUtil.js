define(["require", "exports", "N/util"], function (require, exports, util_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function now(unit) {
        if (unit === void 0) { unit = 'milliseconds'; }
        return unit === 'milliseconds' ? nanosecondsToMilliseconds(util_1.nanoTime()) : util_1.nanoTime();
    }
    exports.now = now;
    function nanosecondsToMilliseconds(n) {
        return n / 1e+6;
    }
    exports.nanosecondsToMilliseconds = nanosecondsToMilliseconds;
    function formatDate(date, format) {
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
