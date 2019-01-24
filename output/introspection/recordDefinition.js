define(["require", "exports", "../record/recordRef"], function (require, exports, recordRef_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var FieldType;
    (function (FieldType) {
        FieldType[FieldType["string"] = 0] = "string";
        FieldType[FieldType["boolean"] = 1] = "boolean";
    })(FieldType = exports.FieldType || (exports.FieldType = {})); // TODO - is there a record for extracting this ? 
    function getRecordTypeMetadata(rr) {
        var r = recordRef_1.asRecord(rr);
        if (!r) {
            return;
        }
        r.getFields().map(function (fieldId) {
            var f = r.getField({ fieldId: fieldId });
            f.type;
        });
    }
    exports.getRecordTypeMetadata = getRecordTypeMetadata;
});
