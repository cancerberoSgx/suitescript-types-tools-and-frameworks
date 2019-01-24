define(["require", "exports", "N/record", "../misc"], function (require, exports, record, misc_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function isRecordId(r) {
        return ['number', 'string'].indexOf(typeof r) !== -1;
    }
    exports.isRecordId = isRecordId;
    function isRecordRef(r) {
        return !!((typeof r.getLineCount === 'undefined') && r.id && r.type);
    }
    exports.isRecordRef = isRecordRef;
    function isRecord(r) {
        return !isRecordRef(r);
    }
    exports.isRecord = isRecord;
    /** type is needed in case they provide just an id*/
    function asRecord(rr) {
        // let rref: RecordOrRef = rr
        // if (isRecordId(rr)) {
        //   if (!type) {
        //     throw new Error('asRecord() requires a type in case just an id is given')
        //   }
        //   return record.load({ id: rr, type })
        // }
        return isRecordRef(rr) ? record.load(rr) : isResult(rr) ? record.load({ id: rr.id, type: rr.recordType + '' }) : rr;
    }
    exports.asRecord = asRecord;
    function isResult(r) {
        return r.recordType && r.columns && r.getAllValues;
    }
    exports.isResult = isResult;
    function printRecordRef(rr) {
        return "Record(" + rr.id + ", " + rr.type + ")";
    }
    exports.printRecordRef = printRecordRef;
    function asRecordOrThrow(rr) {
        var r = asRecord(rr);
        return misc_1.checkThrow(r, "Record doesn't exists");
    }
    exports.asRecordOrThrow = asRecordOrThrow;
});
