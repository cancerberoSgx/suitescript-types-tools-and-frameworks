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
});
