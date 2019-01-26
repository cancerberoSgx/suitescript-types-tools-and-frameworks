define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ResponseLogger = /** @class */ (function () {
        function ResponseLogger(response) {
            this.response = response;
        }
        // response: ServerResponse|undefined
        // initialize(config: ResponseLoggerConfig) {
        // this.response = config.response
        // this.enabled = config.enabled
        // }
        ResponseLogger.prototype.log = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            this.response && this.response.writeLine({ output: args && args.join(', ') || '' });
        };
        return ResponseLogger;
    }());
    exports.ResponseLogger = ResponseLogger;
});
// export function initialize(config: LoggerConfig) {
//     response = config.response
//     enabled = config.enabled
// }
// export function writeLine(...args: any[]): void {
//     response && response.writeLine({ output: args && args.join(', ') || '' });
// }
// export function setEnabled(enabled_: boolean) {
//     enabled = enabled_
// }
// export function isEnabled() {
//     return response && enabled
// }
