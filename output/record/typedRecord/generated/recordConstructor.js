define(["require", "exports", "./index", "../../../misc/misc", "N/record"], function (require, exports, index_1, misc_1, record) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var recordConstructorsImpl = {
        'cmscontent': function (r) { return new index_1.cmscontentRecordImpl(r); },
        'commercecategory': function (r) { return new index_1.commercecategoryRecordImpl(r); },
        'customer': function (r) { return new index_1.customerRecordImpl(r); },
        'inventoryitem': function (r) { return new index_1.inventoryitemRecordImpl(r); },
        'invoice': function (r) { return new index_1.invoiceRecordImpl(r); },
        'item': function (r) { return new index_1.itemRecordImpl(r); },
        'noninventoryitem': function (r) { return new index_1.noninventoryitemRecordImpl(r); },
        'transaction': function (r) { return new index_1.transactionRecordImpl(r); },
        'website': function (r) { return new index_1.websiteRecordImpl(r); }
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
