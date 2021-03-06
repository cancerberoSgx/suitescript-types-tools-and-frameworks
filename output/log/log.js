define(["require", "exports", "../misc/printMs", "N/util"], function (require, exports, printMs_1, util_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var defaultLogger;
    /** user must call setDefaultLogger() before using log(). Requiring this module and setting a default logger will let available a global `console` object so console.log() will be available and will use the installed Logger. Example:
    
    ```
    export let onRequest: EntryPoints.Suitelet.onRequest = context => {
      setDefaultLogger(new ResponseLogger(context.response))
      console.log('hello using console.log')
      console.time('first')
      console.timeEnd('first')
    })
    ```
     */
    function setDefaultLogger(logger) {
        defaultLogger = logger;
    }
    exports.setDefaultLogger = setDefaultLogger;
    /** user must call setDefaultLogger() before using log(). Requiring this module and setting a default logger will let available a global `console` object so console.log() will be available and will use the installed Logger. Example:
    
    ```
    export let onRequest: EntryPoints.Suitelet.onRequest = context => {
      setDefaultLogger(new ResponseLogger(context.response))
      console.log('hello using console.log')
      console.time('first')
      console.timeEnd('first')
    })
    ```
     */
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
            this.log(printMs_1.printMs(ms));
            return ms;
        };
        return ConsoleImpl;
    }());
    //@ts-ignore
    console = typeof console === 'undefined' ? new ConsoleImpl() : console;
});
