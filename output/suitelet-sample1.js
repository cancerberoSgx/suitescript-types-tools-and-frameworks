/**
 * @NApiVersion 2.x
 * @NScriptType Suitelet
 */
define(["require", "exports", "./log/log", "./log/responseLogger", "./file/ls"], function (require, exports, log_1, responseLogger_1, ls_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // import { getObjectValueTypes } from './misc';
    // import * as nsError from 'N/error';
    exports.onRequest = function (context) {
        log_1.setDefaultLogger(new responseLogger_1.ResponseLogger(context.response));
        // console.log('seba')
        // typedSearchTest()
        ls_1.lsTest();
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
    };
});
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
