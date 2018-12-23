define(["require", "exports", "./runner"], function (require, exports, runner_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function create(name, fn, type) {
        var parent = runner_1.SpecRunner.getInstance()._currentDescribe;
        if (!parent) {
            throw new Error('it() must be used inside describe(): ' + name);
        }
        var i = { parent: parent, fn: fn, name: name, type: type, results: [] };
        parent.its.push(i);
        // fn()
    }
    function it(name, fn) {
        create(name, fn, 'normal');
    }
    exports.it = it;
    function fit(name, fn) {
        create(name, fn, 'f');
    }
    exports.fit = fit;
    function xit(name, fn) {
        create(name, fn, 'x');
    }
    exports.xit = xit;
});
