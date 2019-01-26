"use strict";
// interface Arr<T extends any = any>{
//   [n: number]: T
// }
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var arr = /** @class */ (function () {
    function arr() {
        this._a = [];
        // set <N>(n:N, t: T) {console.log('set');
        // return this._a[n as any as number] = t}
        // get <N>(n:N) {return (n as any as number)*2}
        // get [2]() {return 1}
        // get [3]() {return 1}
    }
    Object.defineProperty(arr.prototype, '1', {
        get: function () { console.log('get'); return this._a[1]; },
        set: function (val) { console.log('set'); this._a[1] = val; },
        enumerable: true,
        configurable: true
    });
    return arr;
}());
// const a = new arr()
// a[1] = 2
// const d = a[1]
// console.log(a, d);
var AccessorArray = /** @class */ (function () {
    function AccessorArray() {
    }
    AccessorArray.prototype.getArrayItem = function (n) {
        throw 'please override me';
    };
    AccessorArray.prototype.setArrayItem = function (n, t) {
        throw 'please override me';
    };
    Object.defineProperty(AccessorArray.prototype, '0', {
        get: function () { return this.getArrayItem(0); },
        set: function (val) { this.setArrayItem(0, val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccessorArray.prototype, '1', {
        get: function () { return this.getArrayItem(1); },
        set: function (val) { this.setArrayItem(1, val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccessorArray.prototype, '2', {
        get: function () { return this.getArrayItem(2); },
        set: function (val) { this.setArrayItem(2, val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccessorArray.prototype, '3', {
        get: function () { return this.getArrayItem(3); },
        set: function (val) { this.setArrayItem(3, val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccessorArray.prototype, '4', {
        get: function () { return this.getArrayItem(4); },
        set: function (val) { this.setArrayItem(4, val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccessorArray.prototype, '5', {
        get: function () { return this.getArrayItem(5); },
        set: function (val) { this.setArrayItem(5, val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccessorArray.prototype, '6', {
        get: function () { return this.getArrayItem(6); },
        set: function (val) { this.setArrayItem(6, val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccessorArray.prototype, '7', {
        get: function () { return this.getArrayItem(7); },
        set: function (val) { this.setArrayItem(7, val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccessorArray.prototype, '8', {
        get: function () { return this.getArrayItem(8); },
        set: function (val) { this.setArrayItem(8, val); },
        enumerable: true,
        configurable: true
    });
    return AccessorArray;
}());
var MyCustomAccessorArray = /** @class */ (function (_super) {
    __extends(MyCustomAccessorArray, _super);
    function MyCustomAccessorArray() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MyCustomAccessorArray.prototype.getArrayItem = function (n) {
        console.log('get ', n);
        return '';
    };
    MyCustomAccessorArray.prototype.setArrayItem = function (n, v) {
        console.log('set ', n, v);
    };
    return MyCustomAccessorArray;
}(AccessorArray));
var a = new MyCustomAccessorArray();
a[0] = '2';
var f = a[0];
