define(["require", "exports", "./runner"], function (require, exports, runner_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // export interface SpecWithParentDescribe extends SpecBaseWithoutParent {
    // }
    function createDescribe(name, fn, type) {
        var parent = runner_1.SpecRunner.getInstance()._currentDescribe;
        var d = { parent: parent, its: [], fn: fn, name: name, type: type, describes: [] };
        if (!parent) {
            runner_1.SpecRunner.getInstance().describes.push(d);
        }
        else {
            parent.describes.push(d);
        }
        runner_1.SpecRunner.getInstance()._currentDescribe = d;
        fn();
        runner_1.SpecRunner.getInstance()._currentDescribe = parent;
    }
    function describe(name, fn) {
        return createDescribe(name, fn, 'normal');
    }
    exports.describe = describe;
    function fdescribe(name, fn) {
        createDescribe(name, fn, 'f');
    }
    exports.fdescribe = fdescribe;
    function xdescribe(name, fn) {
        createDescribe(name, fn, 'x');
    }
    exports.xdescribe = xdescribe;
});
// /** when a test suite runs one of this is created and will store all the descriptions of describes and its. */
// export class SpecHome {
//   describes: SpecDescribe[] = []
//   addDescribe(d: SpecDescribe): void{
//   }
// }
