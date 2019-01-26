define(["require", "exports", "../catalog/matrixItem", "../catalog/__tests__/itemTestPreconditions", "../record/recordRef", "../introspection/dumpRecordToJsonResponse"], function (require, exports, matrixItem_1, itemTestPreconditions_1, recordRef_1, dumpRecordToJsonResponse_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function recordToJsonTest1(response) {
        var result = matrixItem_1.findByIdOrThrow(itemTestPreconditions_1.get().oneMatrixParentId);
        var recordRef = { id: result.id, type: result.recordType + '' };
        var record = recordRef_1.asRecordOrThrow(recordRef);
        dumpRecordToJsonResponse_1.writeRecordJsonInResponse(record, response);
    }
    exports.recordToJsonTest1 = recordToJsonTest1;
});
