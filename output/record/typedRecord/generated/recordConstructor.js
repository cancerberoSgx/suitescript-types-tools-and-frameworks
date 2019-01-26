define(["require", "exports", "./index"], function (require, exports, index_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.recordConstructorsImpl = {
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
});
