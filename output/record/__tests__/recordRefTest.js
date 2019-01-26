define(["require", "exports", "../../spec/index", "../../catalog/matrixItem", "../../catalog/__tests__/itemTestPreconditions", "../recordRef"], function (require, exports, index_1, matrixItem_1, itemTestPreconditions_1, recordRef_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function recordRefTest() {
        index_1.describe('record/RecordRef asRecord isRecord', function () {
            index_1.it('should return a record when a RecordRef is given', function () {
                var result = matrixItem_1.findByIdOrThrow(itemTestPreconditions_1.get().oneMatrixParentId);
                var recordRef = { id: result.id, type: result.recordType + '' };
                var record = recordRef_1.asRecordOrThrow(recordRef);
                index_1.expect(record.id + '').toBe(result.id);
                // log('seba'+record.setValue + ' '+(!!(record.setValue)))
                index_1.expect(!!record.setValue).toBe(true);
                // log(record.toString())
                // // throw 'hello hello'
                index_1.expect(recordRef_1.isRecord(record)).toBe(true);
            });
            index_1.it('should return a record when a Result is given', function () {
                var result = matrixItem_1.findByIdOrThrow(itemTestPreconditions_1.get().oneMatrixParentId);
                // const recordRef: RecordRef = { id: result.id, type: result.recordType + '' }
                var record = recordRef_1.asRecordOrThrow(result);
                index_1.expect(record.id + '').toBe(result.id);
                index_1.expect(record.type + '').toBe(result.recordType + '');
                // expect(!!record.setValue).toBe(true)
                // expect(!!record.getFields&&!!record.getSublistFields).toBe(true)
                index_1.expect(recordRef_1.isRecord(record)).toBe(true);
                index_1.expect(recordRef_1.isRecord(result)).toBe(false);
            });
        });
    }
    exports.recordRefTest = recordRefTest;
});
