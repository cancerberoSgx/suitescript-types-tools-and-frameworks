/**
 * @NApiVersion 2.x
 * @NScriptType Suitelet
 */
define(["require", "exports", "./log/responseLogger", "./catalog/copyCategory"], function (require, exports, responseLogger_1, copyCategory_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.onRequest = function (context) {
        try {
            responseLogger_1.initialize({ response: context.response, enabled: true });
            var newCategory = copyCategory_1.copyCategory({
                categoryId: 18,
                newPrimaryParent: null
            });
            // copySublist({
            //     fromRecord: load({id: 18, type: 'commercecategory'}),
            //     sublistId: 'subcategories', 
            //     toRecord: load({id: 28, type: 'commercecategory'})
            // })
            // copySublist({
            //     fromRecord: load({id: 18, type: 'commercecategory'}),
            //     sublistId: 'items', 
            //     toRecord: load({id: 28, type: 'commercecategory'})
            // })
        }
        catch (error) {
            responseLogger_1.log("General error: \n" + error + " \n" + Object.keys(error) + "\n");
        }
    };
});
