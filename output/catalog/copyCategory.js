define(["require", "exports", "N/record", "../record/copy/copyFields", "../record/copy/copySublist"], function (require, exports, record_1, copyFields_1, copySublist_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Will clone given category (and all its descendants to given target parent (targetId))
     *
     * Use targetId===null to copy the category to the root (as primary category)
     *
     * Important: It will actually clone the given category record (fields and 'subcategories', 'items' sublists)
     * and associate it to the new parent, so the result will be a new record.
     *
     * @returns the new category record
     */
    function copyCategory(config) {
        var fromRecord = record_1.load({ type: 'commercecategory', id: config.categoryId });
        var toRecord = record_1.create({ type: 'commercecategory' });
        copyFields_1.copyFields({
            fromRecord: fromRecord,
            toRecord: toRecord,
            customFieldValues: { primaryparent: config.newPrimaryParent },
            ignoreFields: ['lastmodifiedby', 'created'],
            dontSave: true
        });
        copySublist_1.copySublist({
            fromRecord: fromRecord,
            sublistId: 'subcategories',
            toRecord: toRecord,
            dontSave: true
        });
        copySublist_1.copySublist({
            fromRecord: fromRecord,
            sublistId: 'items',
            toRecord: toRecord,
            dontSave: true
        });
        toRecord.save();
        // const toRecord = copyRecord({
        //     fromRecord,
        //     toRecord: create({ type: 'commercecategory' }),
        //     customFieldValues: { primaryparent: config.newPrimaryParent },
        //     ignoreFields: ['lastmodifiedby', 'created']
        // });
        // const toRecord = record.load({ type: 'commercecategory', id: newRecordId });
        // copySublists({
        //     fromRecord,
        //     toRecord
        // });
        return toRecord;
    }
    exports.copyCategory = copyCategory;
});
