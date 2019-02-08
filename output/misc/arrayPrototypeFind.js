define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function find(a, predicate) {
        for (var i = 0; i < a.length; i++) {
            var v = a[i];
            if (predicate(v, i, a)) {
                return v;
            }
        }
    }
    exports.find = find;
    function installArrayPrototypeFind() {
        Array.prototype.find = typeof Array.prototype.find === 'undefined' ? function (predicate) { return find(this, predicate); } : Array.prototype.find;
    }
    exports.installArrayPrototypeFind = installArrayPrototypeFind;
    installArrayPrototypeFind();
});
