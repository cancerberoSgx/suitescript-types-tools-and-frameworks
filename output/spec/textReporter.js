define(["require", "exports", "../misc"], function (require, exports, misc_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var TextReporter = /** @class */ (function () {
        function TextReporter() {
        }
        TextReporter.prototype.render = function (config) {
            var _this = this;
            this.config = config;
            this.config.tabSize = this.config.tabSize || 4;
            this.config.format = this.config.format || 'short';
            var output = "";
            config.result.results.forEach(function (r) {
                output += _this.renderDescribe(r);
            });
            var totalExpectCount = 0, totalExpectFail = 0, totalItCount = 0, totalItFail = 0;
            this.config.result.results
                .forEach(function (d) { return d.results.filter(function (i) { return i.type !== 'x'; }) //TODO:fit and fdescribe
                .forEach(function (i) {
                totalItCount++;
                var expectFail = i.results.filter(function (r) {
                    totalExpectCount++;
                    return r.type === 'fail';
                }).length;
                totalExpectFail += expectFail;
                if (expectFail) {
                    totalItFail++;
                }
            }); });
            output += "\n" + totalItCount + " spec, " + totalItFail + " failures " + ((this.config.format === 'detailed' || true) ? "\n" + totalExpectCount + " expectations, " + totalExpectFail + " failures" : "") + "\nFinished in " + this.config.result.totalTime / 1000 + " seconds\n";
            return {
                output: output
            };
        };
        TextReporter.prototype.renderDescribe = function (d, indentLevel) {
            var _this = this;
            if (indentLevel === void 0) { indentLevel = 0; }
            // if (this.config.format === 'detailed') {
            //   return 'detailed format not implemented'
            // }
            // else {
            var failIts = d.results.filter(function (i) { return _this.config.format === 'detailed' || misc_1.find(i.results, function (r) { return r.type === 'fail'; }); });
            if (this.config.format === 'detailed' || failIts.length) {
                return "\n" + this.indent(indentLevel) + d.name + ": " + failIts.map(function (i) { return _this.renderIt(i, indentLevel + 1); });
            }
            else {
                return '';
            }
            // }
        };
        TextReporter.prototype.renderIt = function (i, indentLevel) {
            var _this = this;
            // if (this.config.format === 'detailed') {
            //   return 'detailed format not implemented'
            // }
            // else {
            return "\n" + this.indent(indentLevel) + i.name + ": " + i.results.map(function (r) { return _this.renderExpect(r, indentLevel + 1); });
        };
        // }
        TextReporter.prototype.renderExpect = function (r, indentLevel) {
            // if (this.config.format === 'detailed') {
            //   return 'detailed format not implemented'
            // }
            // else {
            return "\n" + this.indent(indentLevel) + r.message;
            // }
        };
        TextReporter.prototype.indent = function (indentLevel) {
            // if(this.config.format==='detailed'){
            //   return 'detailed format not implemented'
            // }
            // else {
            return "" + misc_1.repeat(indentLevel * this.config.tabSize, ' ');
            // }
        };
        return TextReporter;
    }());
    exports.TextReporter = TextReporter;
});
