/**
 * @NApiVersion 2.x
 * @NScriptType Suitelet
 */
define(["require", "exports", "./log/log", "./log/responseLogger", "./app/__tests__/miniNetsuiteApp"], function (require, exports, log_1, responseLogger_1, miniNetsuiteApp_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // import { appTest } from './app/__tests__/appTest';
    exports.onRequest = function (context) {
        log_1.setDefaultLogger(new responseLogger_1.ResponseLogger(context.response));
        // typedSearchTest()
        // lsTest()
        // query1Test()
        // typedRecordTest()
        // reactLikeTest( )
        // runSpecs();
        miniNetsuiteApp_1.miniNetSuiteApp(context.request, context.response);
    };
});
