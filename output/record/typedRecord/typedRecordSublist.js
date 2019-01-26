define(["require", "exports", "../../misc/misc"], function (require, exports, misc_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var LineImpl = /** @class */ (function () {
        function LineImpl(typedRecord, sublistId, sublistFieldImpl) {
            this.typedRecord = typedRecord;
            this.sublistId = sublistId;
            this.sublistFieldImpl = sublistFieldImpl;
        }
        LineImpl.prototype.getArrayItem = function (n) {
            return this.line(n);
        };
        LineImpl.prototype.setArrayItem = function (n, t) {
            this.setLine(n, t);
        };
        LineImpl.prototype.get = function (fieldId, line) {
            return this.typedRecord.nsRecord.getSublistValue({ sublistId: this.sublistId, line: line, fieldId: fieldId });
        };
        LineImpl.prototype.set = function (fieldId, line, V) {
            this.typedRecord.nsRecord.setSublistValue({ sublistId: this.sublistId, line: line, fieldId: fieldId, value: V });
        };
        LineImpl.prototype.append = function (f) {
            this.typedRecord.nsRecord.insertLine({ line: this.lineCount(), sublistId: this.sublistId });
        };
        LineImpl.prototype.remove = function (line) {
            if (line === void 0) { line = this.lineCount(); }
            this.typedRecord.nsRecord.removeLine({ line: line, sublistId: this.sublistId });
        };
        LineImpl.prototype.line = function (l) {
            return this.getLine(l);
        };
        LineImpl.prototype.getLine = function (l) {
            return new this.sublistFieldImpl(l);
        };
        LineImpl.prototype.setLine = function (l, f) {
            var _this = this;
            misc_1.objectKeys(f).forEach(function (fieldId) { return _this.set(fieldId, l, f[fieldId]); });
        };
        Object.defineProperty(LineImpl.prototype, "lines", {
            get: function () {
                var _this = this;
                return this.linesIndexes().map(function (l) { return _this.line(l); });
            },
            set: function (value) {
                var _this = this;
                this.linesIndexes().forEach(function (line) { return _this.typedRecord.nsRecord.removeLine({ sublistId: _this.sublistId, line: line }); });
                value.forEach(function (field) { return _this.append(field); });
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
