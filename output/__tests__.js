define(["require", "exports", "./spec/runner", "./spec/textReporter", "./misc/misc", "./jsx/__tests__/jsxTests"], function (require, exports, runner_1, textReporter_1, misc_1, jsxTests_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function runSpecs() {
        try {
            console.log('Running specs');
            var result = runner_1.SpecRunner.getInstance().run({
                specs: [
                    // recordRefTest,
                    // resultsTest,
                    // matrixItemTest,
                    // recordMetadataTest
                    jsxTests_1.jsxTests
                ],
                reset: true
                // breakOnFirstError: true
            });
            var _a = new textReporter_1.TextReporter().render({
                result: result,
            }), output = _a.output, fail = _a.fail;
            console.log(output);
            return fail;
        }
        catch (error) {
            console.log(misc_1.printNativeError(error));
            return true;
        }
    }
    exports.runSpecs = runSpecs;
});
