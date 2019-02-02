/**
 * @NApiVersion 2.x
 * @NScriptType Suitelet
 */
define(["require", "exports", "./experiments/reactLike/test", "./log/log", "./log/responseLogger"], function (require, exports, test_1, log_1, responseLogger_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.onRequest = function (context) {
        log_1.setDefaultLogger(new responseLogger_1.ResponseLogger(context.response));
        // typedSearchTest()
        // lsTest()
        // query1Test()
        // typedRecordTest()
        test_1.reactLikeText();
    };
});
