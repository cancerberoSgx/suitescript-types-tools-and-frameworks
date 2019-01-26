define(["require", "exports", "../recordRef"], function (require, exports, recordRef_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var TypedRecordImpl = /** @class */ (function () {
        function TypedRecordImpl(nsRecordOrRefOrResult) {
            this._sublists = null;
            this._fields = null;
            this.nsRecord = recordRef_1.asRecordOrThrow(nsRecordOrRefOrResult);
            // this.nsRecord = r
        }
        Object.defineProperty(TypedRecordImpl.prototype, "id", {
            get: function () {
                return this.nsRecord.id + '';
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TypedRecordImpl.prototype, "type", {
            get: function () {
                return this.nsRecord.type + '';
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TypedRecordImpl.prototype, "fields", {
            get: function () {
                // if (!this._fields) {
                // s
                // }
                return this._fields;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TypedRecordImpl.prototype, "sublists", {
            get: function () {
                // if (!this._sublists) {
                //   this._sublists = recordFieldConstructorImpl[this.type](this) as any
                // }
                return this._sublists;
            },
            enumerable: true,
            configurable: true
        });
        return TypedRecordImpl;
    }());
    exports.TypedRecordImpl = TypedRecordImpl;
});
// export interface SublistFieldRef {
//   line: number
//   fieldId: string
// }
// /** common sublist line fields - don't know if that exists */
// export interface SublistFieldTypes {
//   // counter: number // I think there is something that all sublist lines have
// }
// export interface SublistLine<Fields extends SublistFieldTypes = SublistFieldTypes>{
// }
