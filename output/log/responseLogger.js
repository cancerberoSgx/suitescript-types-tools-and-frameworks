define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ResponseLogger = /** @class */ (function () {
        function ResponseLogger(response) {
            this.response = response;
        }
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
