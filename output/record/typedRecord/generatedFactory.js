define(["require", "exports", "../../misc/misc", "N/record", "./generated/recordConstructor"], function (require, exports, misc_1, record, recordConstructor_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // // const recordFieldConstructorImpl: recordFieldConstructors = {
    // //   'commercecategory': (r: TypedRecord) => { return new commercecategoryFieldsImpl(r) }
    // // }
    // const recordConstructorsImpl: recordConstructors = {
    //   'commercecategory': (r: record.Record) => { return new commercecategoryRecordImpl(r) }
    // }
    // export function load<T extends StringKeyOf<recordTypes>>(options: { id: RecordId, type: T }): ValueOfStringKey<recordTypes, T> | undefined {
    //   const r = record.load(options)
    //   return r ? recordConstructorsImpl[options.type](r) : undefined
    // }
    // export function loadOrThrow<T extends StringKeyOf<recordTypes>>(options: { id: RecordId, type: T }): ValueOfStringKey<recordTypes, T> {
    //   const r = load(options)
    //   return checkThrow(r, `record ${options.id},${options.type} not found`)
    // }
    // export function create<T extends StringKeyOf<recordTypes>>(options: { type: T }): ValueOfStringKey<recordTypes, T> {
    //   const r = record.create(options)
    //   return recordConstructorsImpl[options.type](r)
    // }
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
