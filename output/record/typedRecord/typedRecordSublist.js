define(["require", "exports", "../../misc/misc"], function (require, exports, misc_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var LineImpl = /** @class */ (function () {
        function LineImpl(typedRecord, sublistId, sublistFieldImpl) {
            this.typedRecord = typedRecord;
            this.sublistId = sublistId;
            this.sublistFieldImpl = sublistFieldImpl;
        }
        LineImpl.prototype.get = function (fieldId, line) {
            return this.typedRecord.nsRecord.getSublistValue({ sublistId: this.sublistId, line: line, fieldId: fieldId });
        };
        LineImpl.prototype.set = function (fieldId, line, V) {
            this.typedRecord.nsRecord.setSublistValue({ sublistId: this.sublistId, line: line, fieldId: fieldId, value: V });
        };
        LineImpl.prototype.line = function (l) {
            return new this.sublistFieldImpl(l);
        };
        Object.defineProperty(LineImpl.prototype, "lines", {
            get: function () {
                var _this = this;
                return this.linesIndexes().map(function (l) { return _this.line(l); });
            },
            enumerable: true,
            configurable: true
        });
        LineImpl.prototype.lineCount = function () {
            return this.typedRecord.nsRecord.getLineCount({ sublistId: this.sublistId });
        };
        LineImpl.prototype.linesIndexes = function () {
            return misc_1.array(this.lineCount()).map(function (l, i) { return i; });
        };
        return LineImpl;
    }());
    exports.LineImpl = LineImpl;
    var SublistFieldImpl = /** @class */ (function () {
        function SublistFieldImpl(typedRecord, line) {
            this.typedRecord = typedRecord;
            this.line = line;
        }
        SublistFieldImpl.prototype.getSublistValue = function (fieldId) {
            return this.typedRecord.nsRecord.getSublistValue({ sublistId: this.sublistId, fieldId: fieldId, line: this.line });
        };
        SublistFieldImpl.prototype.setSublistValue = function (fieldId, value) {
            this.typedRecord.nsRecord.setSublistValue({ sublistId: this.sublistId, fieldId: fieldId, line: this.line, value: value });
        };
        return SublistFieldImpl;
    }());
    exports.SublistFieldImpl = SublistFieldImpl;
});
