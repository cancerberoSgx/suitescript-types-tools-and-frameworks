// import { findByIdOrThrow } from '../catalog/matrixItem';
// import { get } from '../catalog/__tests__/itemTestPreconditions';
// import { RecordRef, asRecordOrThrow } from '../record/recordRef';
// import { writeRecordJsonInResponse, writeJsonInResponse } from '../introspection/dumpRecordToJsonResponse';
// import { ServerResponse } from 'N/http';
// import { load, Field, Record } from 'N/record';
// import { getObjectKeysTypesAndValues } from '../introspection/objectExplorer';

// export function recordFieldsTypesTest1(response: ServerResponse) {

//   const result = findByIdOrThrow(get().oneMatrixParentId)
//   const recordRef: RecordRef = { id: result.id, type: result.recordType + '' }
//   const record = asRecordOrThrow(recordRef)
//   const f = record.getSublistField({ sublistId: 'price3', fieldId: 'currency', line: 0 })
//   // debugField(f)

//   const r2 = load({ id: 33, type: 'commercecategory' })

//   const f2 = r2.getField({ fieldId: 'iscurrentlyeffective' })
//   // writeJsonInResponse(f2 ? f2.toJSON() : {d: 'empty'}, response)

//   const s2 = r2.getSublist({ sublistId: 'subcategories' })
//   // console.log('sublist:');
//   writeJsonInResponse(s2 ? s2.toJSON() : {d: 'empty'}, response)
//   writeJsonInResponse(getObjectKeysTypesAndValues(s2) || { smep: 'empty' }, response)
//   if (s2) {

//     // const f22 = s2.getColumn({ fieldId: 'subcategory' })
//     // writeJsonInResponse(f22|| {smep: 'empty'}, response)
//     // console.log('COLUMN:');
    
//     // writeJsonInResponse(getObjectKeysTypesAndValues(f22) || { smep: 'empty' }, response)
//     //@ts-ignore
//     // writeJsonInResponse(f22.toJSON(), response)
//     // console.log(f22.toString());

//     // console.log(getSublistFieldType(r2, 'items', 'items'));
//     // console.log(getSublistFieldType(r2, 'subcategories', 'subcategories'));
    
    
//     // r2.currs
//   }

//   // const sr1 =     r2.getSublistSubrecord({sublistId: 'subcategories', fieldId: 'subcategory', line: 0})

//   // writeJsonInResponse(sr1 ? sr1.toJSON() : {d: 'empty'}, response)

//   // writeJsonInResponse(sr1 ? sr1.toJSON() : {d: 'empty'}, response)

//   // debugField(r2.getSublistField({sublistId: 'subcategories', fieldId: 'isprimary', line: 0}))
//   // writeRecordJsonInResponse(r2, response)
// }
// function getSublistFieldType(r: Record, sublistId: string, fieldId: string){
//   // console.log(r.getsu);
//   // r.getsu
//   const s2 = r.getSublist({ sublistId })
//   console.log(s2.type+'');
//   return 'asd'
  
//   // const f = s2.getColumn({ fieldId})
//   // return f.type
// }


// function debugField(f: Field) {
//   console.log(JSON.stringify(f.toJSON()));
//   console.log(f.type);
// }
