define(["require", "exports", "./spec/runner", "./spec/textReporter", "./log/responseLogger", "./search/__tests__/resultsTest"], function (require, exports, runner_1, textReporter_1, responseLogger_1, resultsTest_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function runSpecs() {
        resultsTest_1.resultsTest();
        var result = runner_1.SpecRunner.getInstance().run();
        responseLogger_1.log(new textReporter_1.TextReporter().render({ result: result }).output);
    }
    exports.runSpecs = runSpecs;
});
