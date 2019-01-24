define(["require", "exports", "../spec/index", "./recordMetadata", "../record/recordRef", "../catalog/matrixItem", "../catalog/__tests__/itemTestPreconditions", "../log/responseLogger"], function (require, exports, index_1, recordMetadata_1, recordRef_1, matrixItem_1, itemTestPreconditions_1, responseLogger_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function recordMetadataTest() {
        index_1.describe('recordMetadataTest', function () {
            // const res = 
            var metadata = recordMetadata_1.getRecordTypeMetadata(recordRef_1.asRecordOrThrow(matrixItem_1.findMatrixChildOrThrow(itemTestPreconditions_1.get().oneMatrixChildId)));
            responseLogger_1.log(JSON.stringify(metadata, null, 2));
        });
    }
    exports.recordMetadataTest = recordMetadataTest;
});
