define(["require", "exports", "N/record", "../misc/misc"], function (require, exports, record, misc_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function isRecordId(r) {
        return ['number', 'string'].indexOf(typeof r) !== -1;
    }
    exports.isRecordId = isRecordId;
    function isRecordRef(r) {
        return !!(
        // ((typeof (r as record.Record).getLineCount === 'undefined') &&
        !isRecord(r) &&
            r.id && r.type //&&
        // (typeof (r as record.Record).findMatrixSublistLineWIthValue === 'undefined')
        );
    }
    exports.isRecordRef = isRecordRef;
    function isRecord(r) {
        return (
        // !isRecordRef(r) &&
        (typeof r.setValue !== 'undefined') && !!r.getFields && !!r.getSublistFields
        // (typeof (r as record.Record).getCurrentMatrixSublistValue !== 'undefined')
        );
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
        // if(isRecord(rr)){return rr}
        return isRecord(rr) ? rr : isRecordRef(rr) ? record.load(rr) : record.load({ id: rr.id, type: rr.recordType + '' });
    }
    exports.asRecord = asRecord;
    function asRecordOrThrow(rr) {
        return misc_1.checkThrow(asRecord(rr), "Record doesn't exists");
    }
    exports.asRecordOrThrow = asRecordOrThrow;
    function isResult(r) {
        return typeof r === 'object' && !isRecord(r);
    }
    exports.isResult = isResult;
    function printRecordRef(rr) {
        return "Record(" + rr.id + ", " + rr.type + ")";
    }
    exports.printRecordRef = printRecordRef;
});
