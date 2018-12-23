define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /** user needs to instantiate this, add their describe functions and execute run() in order to run the tests adn obtain the results */
    var SpecRunner = /** @class */ (function () {
        function SpecRunner() {
            this.describes = []; // todo getter
        }
        SpecRunner.getInstance = function () {
            return SpecRunner.instance;
        };
        // /** user facing. just add the top level describe functions . dont call them */
        // addDescribes(d: Describe[]) {
        //   this.describes = this.describes.concat(d)
        // }
        SpecRunner.prototype.run = function (config) {
            var _this = this;
            this.describes.forEach(function (d) {
                _this._currentDescribe = d;
                console.log('run ' + d.its.length);
                d.its.forEach(function (i) {
                    _this._currentIt = i;
                    i.fn();
                });
            });
            return this.getResults(this.describes);
        };
        SpecRunner.prototype.getResults = function (describes) {
            var _this = this;
            // const arr = Array.isArray(describes)?describes : [describes]
            var specs = describes.map(function (d) {
                return {
                    name: d.name,
                    specs: _this.getResults(d.describes),
                    results: d.its.map(function (i) { return ({ name: i.name, results: i.results }); })
                };
            });
            return specs;
            // const results = describe
        };
        SpecRunner.instance = new SpecRunner();
        return SpecRunner;
    }());
    exports.SpecRunner = SpecRunner;
});
