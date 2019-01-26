// This file is auto generated, do not edit it. 
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define(["require", "exports", "../typedRecord"], function (require, exports, typedRecord_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var transactionFieldsImpl = /** @class */ (function () {
        function transactionFieldsImpl(typedRecord) {
            this.typedRecord = typedRecord;
        }
        return transactionFieldsImpl;
    }());
    exports.transactionFieldsImpl = transactionFieldsImpl;
    var transactionRecordImpl = /** @class */ (function (_super) {
        __extends(transactionRecordImpl, _super);
        function transactionRecordImpl(nsRecord) {
            var _this = _super.call(this, nsRecord) || this;
            _this.nsRecord = nsRecord;
            _this._fields = new transactionFieldsImpl(_this);
            return _this;
            // this._sublists = transactionnew FieldsImpl(this)
        }
        return transactionRecordImpl;
    }(typedRecord_1.TypedRecordImpl));
    exports.transactionRecordImpl = transactionRecordImpl;
});
