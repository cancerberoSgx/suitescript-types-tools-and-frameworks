define(["require", "exports", "../spec/index", "./recordMetadata", "../record/recordRef", "../catalog/matrixItem", "../catalog/__tests__/itemTestPreconditions", "../log/log", "./objectExplorer"], function (require, exports, index_1, recordMetadata_1, recordRef_1, matrixItem_1, itemTestPreconditions_1, log_1, objectExplorer_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function recordMetadataTest() {
        index_1.describe('recordMetadataTest', function () {
            var r = recordRef_1.asRecordOrThrow(matrixItem_1.findMatrixChildOrThrow(itemTestPreconditions_1.get().oneMatrixChildId));
            log_1.log(objectExplorer_1.printNamedTypedArray(objectExplorer_1.getObjectValueTypes(r)));
            // const metadata = getRecordTypeMetadata(load({id: r.id, type: r.type, isDynamic: true}))
            var metadata = recordMetadata_1.getRecordTypeMetadata({ record: r });
            log_1.log(JSON.stringify(metadata, null, 2));
        });
        //  3
    }
    exports.recordMetadataTest = recordMetadataTest;
});
