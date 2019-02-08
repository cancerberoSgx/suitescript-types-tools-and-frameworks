define(["require", "exports", "./ls"], function (require, exports, ls_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function lsTest() {
        ls_1.ls({ root: '5226', rootAbsoluteName: '/SuiteScripts/DeployExtensions/AwaLabs' })
            .sort(function (a, b) { return a.absoluteName.localeCompare(b.absoluteName); })
            .forEach(function (f) {
            console.log(f.absoluteName + " " + f.type + " " + f.id + " " + f.parent);
        });
    }
    exports.lsTest = lsTest;
});
