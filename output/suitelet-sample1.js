/**
 * @NApiVersion 2.x
 * @NScriptType Suitelet
 */
define(["require", "exports", "./log/log", "./log/responseLogger", "./app/__tests__/appTest"], function (require, exports, log_1, responseLogger_1, appTest_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.onRequest = function (context) {
        log_1.setDefaultLogger(new responseLogger_1.ResponseLogger(context.response));
        // typedSearchTest()
        // lsTest()
        // query1Test()
        // typedRecordTest()
        // reactLikeTest( )   
        // runSpecs();
        appTest_1.appTest(context.request, context.response);
    };
});
