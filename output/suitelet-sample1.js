/**
 * @NApiVersion 2.x
 * @NScriptType Suitelet
 */
define(["require", "exports", "./log/responseLogger", "./__tests__"], function (require, exports, responseLogger_1, __tests__1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.onRequest = function (context) {
        try {
            responseLogger_1.initialize({ response: context.response, enabled: true });
            // runSomeSpecs()
            __tests__1.runSpecs();
            responseLogger_1.log('foo2');
            // log(JSON.stringify(results,null, 2));
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
        }
        catch (error) {
            responseLogger_1.log("General error: \n\n" + error.type + " " + error.name + " " + error.code + " " + error.message + " \n\n" + (error.stack || []).map(function (s) { return "" + s; }).join('\n') + "\n        Message: " + error.message + "\n\n" + error + "\n \n" + Object.keys(error) + "\n");
        }
    };
});
// import { describe, expect, it, SpecRunner } from './spec/index'
// import { TextReporter } from './spec/textReporter';
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
//   const result = SpecRunner.getInstance().run()
//   log(new TextReporter().render({ result }).output)
// } 
