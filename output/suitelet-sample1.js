/**
 * @NApiVersion 2.x
 * @NScriptType Suitelet
 */
define(["require", "exports", "./log/responseLogger", "./catalog/copyCategory"], function (require, exports, responseLogger_1, copyCategory_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.onRequest = function (context) {
        responseLogger_1.initialize({ response: context.response, enabled: true });
        var newCategory = copyCategory_1.copyCategory({
            categoryId: 18,
            parentCategoryId: null
        });
    };
});
