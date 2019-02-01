define(["require", "exports", "N/record", "../../misc/misc"], function (require, exports, record, misc_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function load(options) {
        return record.load(options);
    }
    exports.load = load;
    function loadOrThrow(options) {
        return misc_1.checkThrow(load(options), "record " + options.id + "," + options.type + " not found");
    }
    exports.loadOrThrow = loadOrThrow;
    function create(options) {
        return record.create(options);
    }
    exports.create = create;
});
