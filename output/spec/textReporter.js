define(["require", "exports", "../misc/misc", "../log/log"], function (require, exports, misc_1, log_1) {
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
                if (i.error) {
                    log_1.log(printError(i.error, i, d));
                }
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
            output += "\n" + totalItCount + " spec, " + totalItFail + " failures " + ((this.config.format === 'detailed' || true) ? "\n" + totalExpectCount + " expectations, " + totalExpectFail + " failures" : "") + "\nFinished in " + misc_1.printMs(this.config.result.totalTime, { seconds: true, ms: true }) + "\n";
            return {
                output: output
            };
        };
        //   printError(i: It, d: Describe): string {
        //     
        //       }
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
            return "\n" + this.indent(indentLevel) + i.name + ": " + i.results.filter(function (r) { return _this.config.format === 'detailed' || r.type === 'fail'; }).map(function (r, index) { return _this.renderExpect(r, index, indentLevel + 1); });
        };
        // }
        TextReporter.prototype.renderExpect = function (r, index, indentLevel) {
            // if (this.config.format === 'detailed') {
            //   return 'detailed format not implemented'
            // }
            // else {
            return "\n" + this.indent(indentLevel) + r.message + " (expect #" + (index + 1) + ")";
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
    function printError(error, i, d) {
        return "Error: in " + (d && d.name) + " - " + (i && i.name) + ":\n  " + misc_1.printNativeError(error.nativeException);
    }
    exports.printError = printError;
});
