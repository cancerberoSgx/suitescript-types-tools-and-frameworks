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
    function printMs(ms, config) {
        if (config === void 0) { config = { minutes: false, seconds: true, ms: true }; }
        config = __assign({ minutes: false, seconds: true, ms: true }, config);
        var seconds = config.seconds && Math.floor(ms / 1000);
        var minutes = config.minutes && seconds && Math.floor(seconds / 60);
        var milliseconds = config.ms && Math.floor(ms % 1000 || ms);
        return "" + (minutes ? minutes + " minutes " : '') + (seconds ? seconds + " seconds " : '') + (milliseconds ? milliseconds + " milliseconds " : '');
    }
    exports.printMs = printMs;
});
