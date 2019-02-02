/**
 * @NApiVersion 2.x
 * @NScriptType Suitelet
 */
define(["require", "exports", "./log/log", "./log/responseLogger", "./__tests__"], function (require, exports, log_1, responseLogger_1, __tests__1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.onRequest = function (context) {
        log_1.setDefaultLogger(new responseLogger_1.ResponseLogger(context.response));
        // typedSearchTest()
        // lsTest()
        // query1Test()
        // typedRecordTest()
        // reactLikeTest( )   
        __tests__1.runSpecs();
    };
});
