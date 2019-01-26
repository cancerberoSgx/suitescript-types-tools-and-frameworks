define(["require", "exports", "../catalog/matrixItem", "../catalog/__tests__/itemTestPreconditions", "../record/recordRef", "../introspection/dumpRecordToJsonResponse", "N/record", "../introspection/objectExplorer"], function (require, exports, matrixItem_1, itemTestPreconditions_1, recordRef_1, dumpRecordToJsonResponse_1, record_1, objectExplorer_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function recordFieldsTypesTest1(response) {
        var result = matrixItem_1.findByIdOrThrow(itemTestPreconditions_1.get().oneMatrixParentId);
        var recordRef = { id: result.id, type: result.recordType + '' };
        var record = recordRef_1.asRecordOrThrow(recordRef);
        var f = record.getSublistField({ sublistId: 'price3', fieldId: 'currency', line: 0 });
        // debugField(f)
        var r2 = record_1.load({ id: 33, type: 'commercecategory' });
        var f2 = r2.getField({ fieldId: 'iscurrentlyeffective' });
        // writeJsonInResponse(f2 ? f2.toJSON() : {d: 'empty'}, response)
        var s2 = r2.getSublist({ sublistId: 'subcategories' });
        // console.log('sublist:');
        dumpRecordToJsonResponse_1.writeJsonInResponse(s2 ? s2.toJSON() : { d: 'empty' }, response);
        dumpRecordToJsonResponse_1.writeJsonInResponse(objectExplorer_1.getObjectKeysTypesAndValues(s2) || { smep: 'empty' }, response);
        if (s2) {
            // const f22 = s2.getColumn({ fieldId: 'subcategory' })
            // writeJsonInResponse(f22|| {smep: 'empty'}, response)
            // console.log('COLUMN:');
            // writeJsonInResponse(getObjectKeysTypesAndValues(f22) || { smep: 'empty' }, response)
            //@ts-ignore
            // writeJsonInResponse(f22.toJSON(), response)
            // console.log(f22.toString());
            // console.log(getSublistFieldType(r2, 'items', 'items'));
            // console.log(getSublistFieldType(r2, 'subcategories', 'subcategories'));
            // r2.currs
        }
        // const sr1 =     r2.getSublistSubrecord({sublistId: 'subcategories', fieldId: 'subcategory', line: 0})
        // writeJsonInResponse(sr1 ? sr1.toJSON() : {d: 'empty'}, response)
        // writeJsonInResponse(sr1 ? sr1.toJSON() : {d: 'empty'}, response)
        // debugField(r2.getSublistField({sublistId: 'subcategories', fieldId: 'isprimary', line: 0}))
        // writeRecordJsonInResponse(r2, response)
    }
    exports.recordFieldsTypesTest1 = recordFieldsTypesTest1;
    function getSublistFieldType(r, sublistId, fieldId) {
        // console.log(r.getsu);
        // r.getsu
        var s2 = r.getSublist({ sublistId: sublistId });
        console.log(s2.type + '');
        return 'asd';
        // const f = s2.getColumn({ fieldId})
        // return f.type
    }
    function debugField(f) {
        console.log(JSON.stringify(f.toJSON()));
        console.log(f.type);
    }
});
