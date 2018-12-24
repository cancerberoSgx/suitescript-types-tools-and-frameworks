define(["require", "exports", "N/record", "../misc"], function (require, exports, record, misc_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function isRecordId(r) {
        return ['number', 'string'].indexOf(typeof r) !== -1;
    }
    exports.isRecordId = isRecordId;
    function isRecordRef(r) {
        return typeof r.getLineCount === 'undefined';
    }
    exports.isRecordRef = isRecordRef;
    function isRecord(r) {
        return !isRecordRef(r);
    }
    exports.isRecord = isRecord;
    function asRecord(rr) {
        var r = isRecordRef(rr) ? record.load(rr) : rr;
        return r;
    }
    exports.asRecord = asRecord;
    function printRecordRef(rr) {
        return "Record(" + rr.id + ", " + rr.type + ")";
    }
    exports.printRecordRef = printRecordRef;
    function asRecordOrThrow(rr) {
        var r = isRecordRef(rr) ? record.load(rr) : rr;
        return misc_1.checkThrow(r, "Record doesn't exists");
    }
    exports.asRecordOrThrow = asRecordOrThrow;
});
