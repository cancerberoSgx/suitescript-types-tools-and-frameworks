define(["require", "exports", "./cloneRecord", "N/record", "./cloneSublists"], function (require, exports, cloneRecord_1, record, cloneSublists_1) {
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Will move given category (and all its descendants to given target parent (targetId).
     *
     * Use targetId===null to move the category to the root (as primary category)
     *
     * Important: It will actually clone (just) the given category in the parent and then move its direct children to the clone
     *
     * @returns the new category record
     */
    function copyCategory(config) {
        var fromRecord = record.load({ type: 'commercecategory', id: config.categoryId });
        var toRecord = cloneRecord_1.copyFields({
            fromRecord: fromRecord,
            customFieldValues: { primaryparent: config.parentCategoryId },
            ignoreFields: ['lastmodifiedby', 'created']
        });
        // const toRecord = record.load({ type: 'commercecategory', id: newRecordId });
        cloneSublists_1.copySublists({
            fromRecord: fromRecord,
            toRecord: toRecord
        });
        return toRecord;
    }
    exports.copyCategory = copyCategory;
});
