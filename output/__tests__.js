define(["require", "exports", "./spec/runner", "./spec/textReporter", "./log/responseLogger", "./search/__tests__/resultsTest", "./catalog/__tests__/matrixItemTest", "./memoize", "./introspection/recordMetadataTest"], function (require, exports, runner_1, textReporter_1, responseLogger_1, resultsTest_1, matrixItemTest_1, memoize_1, recordMetadataTest_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function runSpecs() {
        runner_1.SpecRunner.getInstance().reset();
        resultsTest_1.resultsTest();
        matrixItemTest_1.matrixItemTest();
        memoize_1.memoizeTests();
        recordMetadataTest_1.recordMetadataTest();
        var result = runner_1.SpecRunner.getInstance().run();
        responseLogger_1.log(new textReporter_1.TextReporter().render({ result: result, format: 'detailed' }).output);
    }
    exports.runSpecs = runSpecs;
});
