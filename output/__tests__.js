define(["require", "exports", "./spec/runner", "./spec/textReporter", "./log/log", "./search/__tests__/resultsTest", "./catalog/__tests__/matrixItemTest", "./record/__tests__/recordRefTest", "./misc"], function (require, exports, runner_1, textReporter_1, log_1, resultsTest_1, matrixItemTest_1, recordRefTest_1, misc_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function runSpecs() {
        //@ts-ignore
        GLOBAL1 = 123;
        try {
            var result = runner_1.SpecRunner.getInstance().run({
                specs: [
                    recordRefTest_1.recordRefTest,
                    resultsTest_1.resultsTest,
                    matrixItemTest_1.matrixItemTest,
                ],
                reset: true
                // breakOnFirstError: true
            });
            log_1.log(new textReporter_1.TextReporter().render({
                result: result,
            }).output);
        }
        catch (error) {
            log_1.log(misc_1.printNativeError(error));
        }
    }
    exports.runSpecs = runSpecs;
});
