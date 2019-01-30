define(["require", "exports", "../../misc/misc", "N/record"], function (require, exports, misc_1, record) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // import { recordTypes, recordConstructorsImpl } from './generated/recordConstructor';
    function load(options) {
        return record.load(options);
        // return r ? recordConstructorsImpl[options.type](r) : undefined as any
    }
    exports.load = load;
    function loadOrThrow(options) {
        var r = load(options);
        return misc_1.checkThrow(r, "record " + options.id + "," + options.type + " not found");
    }
    exports.loadOrThrow = loadOrThrow;
    function create(options) {
        return record.create(options);
        // return recordConstructorsImpl[options.type](r) as any
    }
    exports.create = create;
});
