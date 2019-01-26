define(["require", "exports", "./generated/commercecategory", "../../misc/misc", "N/record"], function (require, exports, commercecategory_1, misc_1, record) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // const recordFieldConstructorImpl: recordFieldConstructors = {
    //   'commercecategory': (r: TypedRecord) => { return new commercecategoryFieldsImpl(r) }
    // }
    var recordConstructorsImpl = {
        'commercecategory': function (r) { return new commercecategory_1.commercecategoryRecordImpl(r); }
    };
    function load(options) {
        var r = record.load(options);
        return r ? recordConstructorsImpl[options.type](r) : undefined;
    }
    exports.load = load;
    function loadOrThrow(options) {
        var r = load(options);
        return misc_1.checkThrow(r, "record " + options.id + "," + options.type + " not found");
    }
    exports.loadOrThrow = loadOrThrow;
    function create(options) {
        var r = record.create(options);
        return recordConstructorsImpl[options.type](r);
    }
    exports.create = create;
});
