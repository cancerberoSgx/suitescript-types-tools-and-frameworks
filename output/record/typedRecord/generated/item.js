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
    var itemFieldsImpl = /** @class */ (function () {
        function itemFieldsImpl(typedRecord) {
            this.typedRecord = typedRecord;
        }
        return itemFieldsImpl;
    }());
    exports.itemFieldsImpl = itemFieldsImpl;
    var itemRecordImpl = /** @class */ (function (_super) {
        __extends(itemRecordImpl, _super);
        function itemRecordImpl(nsRecord) {
            var _this = _super.call(this, nsRecord) || this;
            _this.nsRecord = nsRecord;
            _this._fields = new itemFieldsImpl(_this);
            return _this;
            // this._sublists = itemnew FieldsImpl(this)
        }
        return itemRecordImpl;
    }(typedRecord_1.TypedRecordImpl));
    exports.itemRecordImpl = itemRecordImpl;
});
