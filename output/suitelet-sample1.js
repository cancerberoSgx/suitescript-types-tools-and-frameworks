/**
 * @NApiVersion 2.x
 * @NScriptType Suitelet
 */
define(["require", "exports", "./log/responseLogger", "./catalog/moveCategory"], function (require, exports, responseLogger_1, moveCategory_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.onRequest = function (context) {
        try {
            responseLogger_1.initialize({ response: context.response, enabled: true });
            // const newCategory = copyCategory({
            //     categoryId: 18,
            //     newPrimaryParent: null
            // })
            var newCategory = moveCategory_1.moveCategory({
                categoryId: 18,
                newPrimaryParent: null
            });
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
