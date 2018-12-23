define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var response;
    var enabled = true;
    function initialize(config) {
        response = config.response;
        enabled = config.enabled;
    }
    exports.initialize = initialize;
    function log() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        response && response.writeLine({ output: args && args.join(', ') || '' });
    }
    exports.log = log;
    function setEnabled(enabled_) {
        enabled = enabled_;
    }
    exports.setEnabled = setEnabled;
});
