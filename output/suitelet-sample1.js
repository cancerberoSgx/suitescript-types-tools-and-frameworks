/**
 * @NApiVersion 2.x
 * @NScriptType Suitelet
 */
define(["require", "exports", "./log/responseLogger", "./spec/index", "./spec/textReporter", "./catalog/__tests__/matrixItemTest"], function (require, exports, responseLogger_1, index_1, textReporter_1, matrixItemTest_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.onRequest = function (context) {
        try {
            responseLogger_1.initialize({ response: context.response, enabled: true });
            runSomeSpecs();
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
    function runSomeSpecs() {
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
        matrixItemTest_1.matrixItemTest();
        // } catch (error) {
        //     log('error')
        //     // @ts-ignore
        //     // const e = nlapiCreateError(error).toString()
        //     // log(e+'')
        // }
        var result = index_1.SpecRunner.getInstance().run();
        responseLogger_1.log(new textReporter_1.TextReporter().render({ result: result }).output);
    }
});
