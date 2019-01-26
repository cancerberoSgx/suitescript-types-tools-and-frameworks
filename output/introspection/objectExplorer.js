// the idea is to build tools to explore JS live objects 
define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // basic object exploration utilities
    var __c = typeof 1;
    exports.TypeOfValues = ["string", "number", "bigint", "boolean", "symbol", "undefined", "object", "function"];
    // simple tools
    function getObjectKeys(o) {
        var a = [];
        for (var k in o) {
            a.push(k);
        }
        return a;
    }
    exports.getObjectKeys = getObjectKeys;
    function getType(o) {
        return typeof o;
    }
    exports.getType = getType;
    function getObjectValueTypes(o) {
        return getObjectKeys(o).map(function (name) { return ({ name: name + '', type: getType(o[name]) }); });
    }
    exports.getObjectValueTypes = getObjectValueTypes;
    function printObjectValueTypes(o) {
        return printNamedTypedArray(getObjectValueTypes(o));
    }
    exports.printObjectValueTypes = printObjectValueTypes;
    function getObjectKeysTypesAndValues(o) {
        return getObjectKeys(o).map(function (name) { return ({ name: name + '', type: getType(o[name]), value: o[name] }); });
    }
    exports.getObjectKeysTypesAndValues = getObjectKeysTypesAndValues;
    function printTyped(o) {
        return "" + o.type;
    }
    exports.printTyped = printTyped;
    function printNamedTyped(o) {
        return " * " + o.name + ": " + printTyped(o);
    }
    exports.printNamedTyped = printNamedTyped;
    function printNamedTypedArray(arr) {
        return arr.map(function (o) { return printNamedTyped(o); }).join('\n');
    }
    exports.printNamedTypedArray = printNamedTypedArray;
    var TypeValues = exports.TypeOfValues.concat('other');
});
