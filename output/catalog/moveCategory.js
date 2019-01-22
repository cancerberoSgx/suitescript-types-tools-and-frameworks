define(["require", "exports", "./copyCategory", "./removeCategory"], function (require, exports, copyCategory_1, removeCategory_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Will call copyCategory() and then call removeCategory(). See documentation for copyCategory()
     *
     * @returns the new category record
     */
    function moveCategory(config) {
        var newCategory = copyCategory_1.copyCategory(config);
        removeCategory_1.removeCategory(config);
        // // we assume the category was cloned successfully at this point, so now we remove the original one starting with its associations and then its parent's
        // const oldRecord = load({ id: config.categoryId, type: 'commercecategory' })
        // log(`moveCategory: removing category's subcategories`)
        // getLines({ record: oldRecord, sublistId: 'subcategories' }).forEach(line => {
        //     oldRecord.removeLine({ line, sublistId: 'subcategories' })
        // })
        // log(`moveCategory: removing category's items`)
        // getLines({ record: oldRecord, sublistId: 'items' }).forEach(line => {
        //     oldRecord.removeLine({ line, sublistId: 'items' })
        // })
        // const parentId = load({ id: config.categoryId, type: 'commercecategory' }).getValue('primaryparent')
        // log(`moveCategory: removing category from parent ${parentId}`)
        // if (parentId) {
        //     const parent = load({ id: parentId + '', type: 'commercecategory' })
        //     getLines({ record: parent, sublistId: 'subcategories' }).forEach(line => {
        //         if (oldRecord.getSublistValue({ sublistId: 'subcategories', line, fieldId: 'subcategory' }) == oldRecord.id) {
        //             log(`moveCategory: removing category from parent found at line ${line}`)
        //             oldRecord.removeLine({ line, sublistId: 'subcategories' })
        //         }
        //     })
        //     parent.save()
        // }
        // log(`moveCategory: removing category record ${parentId}`)
        // oldRecord.save()
        // deleteRecord({id: oldRecord.id, type: 'commercecategory', })
        return newCategory;
    }
    exports.moveCategory = moveCategory;
});
