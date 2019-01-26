define(["require", "exports", "../misc/misc", "N/util"], function (require, exports, misc_1, util_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var defaultLogger;
    function setDefaultLogger(logger) {
        defaultLogger = logger;
    }
    exports.setDefaultLogger = setDefaultLogger;
    function log() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (!defaultLogger) {
            throw new Error('you need to call setDefaultLogger before calling log()');
        }
        defaultLogger.log.apply(defaultLogger, args);
    }
    exports.log = log;
    var ConsoleImpl = /** @class */ (function () {
        function ConsoleImpl() {
            this.times = {};
            this.log = log;
            this.error = log;
            this.warn = log;
        }
        //   private time_Date_getTime(label: string=''): number{
        //     return this.times[label] = new Date().getTime()
        // }
        // private timeEnd_Date_getTime(label: string=''): number{
        //     const t = new Date().getTime()-this.times[label]
        //     this.log(printMs(t))
        //     return t
        // }
        ConsoleImpl.prototype.time = function (label) {
            if (label === void 0) { label = ''; }
            return this.times[label] = util_1.nanoTime();
            // return this.time_Date_getTime(label)
        };
        ConsoleImpl.prototype.timeEnd = function (label) {
            if (label === void 0) { label = ''; }
            // return this.timeEnd_Date_getTime(label)
            var nano = util_1.nanoTime() - this.times[label];
            var ms = nano / 1e+6;
            this.log(misc_1.printMs(ms));
            return ms;
        };
        return ConsoleImpl;
    }());
    //@ts-ignore
    console = typeof console === 'undefined' ? new ConsoleImpl() : console;
});
