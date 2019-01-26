define(["require", "exports", "N/record", "../log/log", "../record/sublistUtil"], function (require, exports, record_1, log_1, sublistUtil_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * TODO: could fail if the category has more than one parent
     *  * removes all lines in 'subcategories' and 'items' sublist
     *  * if it has a parent remove the parent's line corresponding to this record in its 'subcategories' sublist
     *  * then remove the record
     */
    function removeCategory(config) {
        log_1.log("removeCategory: starts for " + config.categoryId);
        var record = record_1.load({ id: config.categoryId, type: 'commercecategory' });
        log_1.log("removeCategory: removing category's subcategories");
        sublistUtil_1.getLines({ record: record, sublistId: 'subcategories' }).forEach(function (line) {
            record.removeLine({ line: line, sublistId: 'subcategories', ignoreRecalc: true });
        });
        log_1.log("removeCategory: removing category's items");
        sublistUtil_1.getLines({ record: record, sublistId: 'items' }).forEach(function (line) {
            // HEADS UP line: 0 because we are removing if not UNEXPECTED_ERROR
            log_1.log("removing line " + line + " sublistId items, currentValueFieldItem: " + record.getSublistValue({ sublistId: 'items', line: 0, fieldId: 'item' }) + ", currentValueFieldprimarycategory: " + record.getSublistValue({ sublistId: 'items', line: 0, fieldId: 'primarycategory' }));
            record.removeLine({ line: 0, sublistId: 'items', ignoreRecalc: true });
        });
        var parentId = record_1.load({ id: config.categoryId, type: 'commercecategory' }).getValue('primaryparent');
        log_1.log("removeCategory: removing category from parent " + parentId);
        if (parentId) {
            var parent_1 = record_1.load({ id: parentId + '', type: 'commercecategory' });
            sublistUtil_1.getLines({ record: parent_1, sublistId: 'subcategories' }).forEach(function (line) {
                if (parent_1.getSublistValue({ sublistId: 'subcategories', line: line, fieldId: 'subcategory' }) == parent_1.id) {
                    log_1.log("removeCategory: removing category from parent found at line " + line);
                    parent_1.removeLine({ line: line, sublistId: 'subcategories', ignoreRecalc: true });
                }
            });
            parent_1.save();
        }
        log_1.log("removeCategory: removing category record " + parentId);
        record.save();
        record_1.delete({ id: record.id, type: 'commercecategory', });
    }
    exports.removeCategory = removeCategory;
});
