/**
 * @NApiVersion 2.x
 * @NScriptType Suitelet
 */

import { EntryPoints } from 'N/types';
import { copyCategory } from './catalog/copyCategory';
// import { initialize as initializeLogger } from './log/responseLogger';
import { log, setDefaultLogger } from "./log/log";
import { removeCategory } from './catalog/removeCategory';
import { load, Type } from 'N/record';
import { getLines } from './record/sublistUtil';
import { moveCategory } from './catalog/moveCategory';
import { runSpecs } from './__tests__';
import { getObjectKeysTypesAndValues, printNamedTypedArray, printNamedTyped, getObjectValueTypes, printObjectValueTypes } from './introspection/objectExplorer';
import { ResponseLogger } from './log/responseLogger';
import { actionsExperiment1 } from './experiments/actions1';
import { writeRecordJsonInResponse } from './introspection/dumpRecordToJsonResponse';
import { recordToJsonTest1 } from './experiments/recordToJson1';
// import { recordFieldsTypesTest1 } from './experiments/recordFieldsTypesTest1';
import { typedRecordTest } from './record/typedRecord/typedRecordTest';
import { query1Test } from './experiments/query1';
import { typedSearchTest } from './search/typedSearch/typedSearchTest';
import { lsTest } from './file/ls';
// import { getObjectValueTypes } from './misc';
// import * as nsError from 'N/error';

export let onRequest: EntryPoints.Suitelet.onRequest = context => {

    setDefaultLogger(new ResponseLogger(context.response))

    // console.log('seba')
    // typedSearchTest()
    lsTest()
    
    // query1Test()
    // typedRecordTest()

    
    // const newCategory = copyCategory({
    //     categoryId: 18,
    //     newPrimaryParent: null
    // })

    // const newCategory = moveCategory({
    //     categoryId: 18,
    //     newPrimaryParent: null
    // })

    // log(`New category copied: ${newCategory.id}`)
    // removeCategory({categoryId: 32})

    // const record = load({id: 32, type: 'commercecategory'})
    // getLines({record, sublistId: 'items'}).forEach(line=>{
    //     log(`Removing items item ${record.getSublistValue({sublistId: 'items', fieldId: 'item', line: 0})}`)
    //     record.removeLine({sublistId: 'items', line: 0})
    // })
    // record.save()
    // record.removeSublistSubrecord({sublistId: 'items', line: 0, fieldId: 'item'})
    // record.removeSublistSubrecord({sublistId: 'items', line})
//   } catch (error) {
//     log(`General error: 

// ${error.type} ${error.name} ${error.code} ${error.message} 

// ${(error.stack || []).map((s: string) => `${s}`).join('\n')}
//         Message: ${error.message}

// ${error}
 
// ${Object.keys(error)}
// `);
//   }
} 



// import { describe, expect, it, SpecRunner } from './spec/index'
// import { TextReporter } from './spec/textReporter';
// import { matrixItemTest } from './catalog/__tests__/matrixItemTest';
// import { getObjectValueTypes } from './misc';
// import { findNonMatrixItem } from './catalog/matrixItem';
// function runSomeSpecs() {
//   describe('Fruit', () => {
//     it('can be eaten', () => {
//       expect([1, 2, 3]).toContain(2)
//     })
//     it('can walk', () => {
//       expect('asdas').toContain('as')
//       expect(Math.random() > 2).toBe(true)
//     })
//   })

// try {
    
//   matrixItemTest()
// // } catch (error) {
// //     log('error')
// //     // @ts-ignore
// //     // const e = nlapiCreateError(error).toString()
// //     // log(e+'')
// // }
//   const result = SpecRunner.getInstance().run()
//   log(new TextReporter().render({ result }).output)
// }  
