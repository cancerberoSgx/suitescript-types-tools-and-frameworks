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
define(["require", "exports", "./textReporter", "../misc/misc"], function (require, exports, textReporter_1, misc_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function now() {
        return Date.now();
    }
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
            if (config === void 0) { config = {}; }
            if (config.reset) {
                SpecRunner.getInstance().reset();
            }
            (config.specs || []).forEach(function (s, index) {
                try {
                    s();
                }
                catch (error) {
                    console.log("Exception while evaluating describe() and its() of the #" + index + " given specs function:" + error);
                    console.log((_this._currentDescribe && _this._currentDescribe.name) + ' ' + (_this._currentIt && _this._currentIt.name));
                    console.log(misc_1.printNativeError(error));
                }
            });
            var totalTime = now();
            this.describes.forEach(function (d) {
                _this._currentDescribe = d;
                d.its.forEach(function (i) {
                    _this._currentIt = i;
                    try {
                        i.fn();
                    }
                    catch (err) {
                        var error = __assign({}, err, { nativeException: err });
                        i.error = error;
                        console.log('Exception catch in it ' + i.name);
                        if (config.breakOnFirstError) {
                            console.log(textReporter_1.printError(error));
                            throw error;
                        }
                    }
                });
            });
            var results = this.getResults(this.describes);
            totalTime = now() - totalTime;
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
