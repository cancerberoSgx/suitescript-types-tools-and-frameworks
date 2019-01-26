define(["require", "exports", "../catalog/matrixItem", "../catalog/__tests__/itemTestPreconditions", "../record/recordRef"], function (require, exports, matrixItem_1, itemTestPreconditions_1, recordRef_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function recordFieldsTypesTest1(response) {
        var result = matrixItem_1.findByIdOrThrow(itemTestPreconditions_1.get().oneMatrixParentId);
        var recordRef = { id: result.id, type: result.recordType + '' };
        var record = recordRef_1.asRecordOrThrow(recordRef);
        var f = record.getSublistField({ sublistId: 'price3', fieldId: 'currency', line: 0 });
        console.log();
        // writeRecordJsonInResponse(record, response)
    }
    exports.recordFieldsTypesTest1 = recordFieldsTypesTest1;
});
