define(["require", "exports", "./describe", "./it", "./expect", "./runner"], function (require, exports, describe_1, it_1, expect_1, runner_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.describe = describe_1.describe;
    exports.it = it_1.it;
    exports.xit = it_1.xit;
    exports.expect = expect_1.expect;
    exports.fail = expect_1.fail;
    exports.skip = expect_1.skip;
    exports.SpecRunner = runner_1.SpecRunner;
});
