var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
define(["require", "exports", "../log/responseLogger"], function (require, exports, responseLogger_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /** user needs to instantiate this, add their describe functions and execute run() in order to run the tests adn obtain the results */
    var SpecRunner = /** @class */ (function () {
        function SpecRunner() {
            this.describes = []; // TODO getter
        }
        SpecRunner.getInstance = function () {
            return SpecRunner.instance;
        };
        SpecRunner.prototype.reset = function () {
            this._currentDescribe = undefined;
            this._currentIt = undefined;
            this.describes = [];
        };
        SpecRunner.prototype.run = function (config) {
            var _this = this;
            var totalTime = Date.now();
            this.describes.forEach(function (d) {
                _this._currentDescribe = d;
                d.its.forEach(function (i) {
                    _this._currentIt = i;
                    try {
                        i.fn();
                    }
                    catch (err) {
                        // TODO: support break on first error
                        i.error = __assign({}, err);
                        responseLogger_1.log("Error: " + err.type + ", " + err.name + "\nCause: " + err.message + "\nStack Trace: \n" + (err.stack || []).join('\n'));
                    }
                });
            });
            var results = this.getResults(this.describes);
            totalTime = Date.now() - totalTime;
            return { results: results, totalTime: totalTime };
        };
        SpecRunner.prototype.getResults = function (describes) {
            var _this = this;
            var specs = describes.map(function (d) {
                return {
                    name: d.name,
                    specs: _this.getResults(d.describes || []),
                    results: d.its.map(function (i) { return (__assign({}, i, { parent: undefined })); })
                };
            });
            return specs;
        };
        SpecRunner.instance = new SpecRunner();
        return SpecRunner;
    }());
    exports.SpecRunner = SpecRunner;
});
