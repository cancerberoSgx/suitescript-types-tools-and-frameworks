define(["require", "exports", "../record/recordRef"], function (require, exports, recordRef_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var RecordBuilder = /** @class */ (function () {
        // record! : Record
        // fields: Field[] = []
        // sublists: Sublist[] = []
        function RecordBuilder(r) {
            this.r = r;
        }
        RecordBuilder.prototype.extract = function () {
            var _this = this;
            var fields = this.r.getFields().map(function (fieldId) { return _this.extractField(_this.r.getField({ fieldId: fieldId })); });
            var sublists = this.r.getSublists().map(function (sublistId) { return _this.extractSublist(_this.r.getSublist({ sublistId: sublistId }), sublistId); });
            return {
                fields: fields, sublists: sublists
            };
        };
        RecordBuilder.prototype.extractSublist = function (s, sublistId) {
            var _this = this;
            var fields = this.r.getSublistFields({ sublistId: sublistId }).map(function (fieldId) {
                return _this.extractSublistField(s, sublistId, s.getField({ id: fieldId }), fieldId);
            });
            return {
                id: sublistId,
                fields: fields
            };
        };
        RecordBuilder.prototype.extractSublistField = function (s, sublistId, f, fieldId) {
            // return this.r.getSublistFields({ sublistId }).map(fieldId => {
            // const f = s.getField({ id: f.id })
            return {
                id: fieldId,
                type: f.type.toString()
            };
            // })
        };
        RecordBuilder.prototype.extractField = function (f) {
            // const f = t
            return {
                id: f.id,
                type: f.type
            };
        };
        return RecordBuilder;
    }());
    function getRecordTypeMetadata(rr) {
        var r = recordRef_1.asRecord(rr);
        if (!r) {
            return;
        }
        var builder = new RecordBuilder(r);
        return builder.extract();
    }
    exports.getRecordTypeMetadata = getRecordTypeMetadata;
});
