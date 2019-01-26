define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AccessorArray = /** @class */ (function () {
        function AccessorArray() {
        }
        AccessorArray.prototype.get = function (n) {
            throw 'override me please';
        };
        AccessorArray.prototype.set = function (n, t) {
            throw 'override me please';
        };
        Object.defineProperty(AccessorArray.prototype, '0', {
            get: function () { return this.get(0); },
            set: function (val) { this.set(0, val); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AccessorArray.prototype, '1', {
            get: function () { return this.get(1); },
            set: function (val) { this.set(1, val); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AccessorArray.prototype, '2', {
            get: function () { return this.get(2); },
            set: function (val) { this.set(2, val); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AccessorArray.prototype, '3', {
            get: function () { return this.get(3); },
            set: function (val) { this.set(3, val); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AccessorArray.prototype, '4', {
            get: function () { return this.get(4); },
            set: function (val) { this.set(4, val); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AccessorArray.prototype, '5', {
            get: function () { return this.get(5); },
            set: function (val) { this.set(5, val); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AccessorArray.prototype, '6', {
            get: function () { return this.get(6); },
            set: function (val) { this.set(6, val); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AccessorArray.prototype, '7', {
            get: function () { return this.get(7); },
            set: function (val) { this.set(7, val); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AccessorArray.prototype, '8', {
            get: function () { return this.get(8); },
            set: function (val) { this.set(8, val); },
            enumerable: true,
            configurable: true
        });
        return AccessorArray;
    }());
    exports.AccessorArray = AccessorArray;
});
