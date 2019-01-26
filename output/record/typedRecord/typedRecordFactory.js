define(["require", "exports", "../../misc/misc", "N/record", "./generated/recordConstructor"], function (require, exports, misc_1, record, recordConstructor_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function load(options) {
        var r = record.load(options);
        return r ? recordConstructor_1.recordConstructorsImpl[options.type](r) : undefined;
    }
    exports.load = load;
    function loadOrThrow(options) {
        var r = load(options);
        return misc_1.checkThrow(r, "record " + options.id + "," + options.type + " not found");
    }
    exports.loadOrThrow = loadOrThrow;
    function create(options) {
        var r = record.create(options);
        return recordConstructor_1.recordConstructorsImpl[options.type](r);
    }
    exports.create = create;
});
