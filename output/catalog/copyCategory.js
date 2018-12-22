define(["require", "exports", "N/record", "../log/responseLogger"], function (require, exports, record_1, responseLogger_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // export interface ForEachLineFieldConfig {
    //     record: Record
    //     sublistId: string
    //     fn: (line: number, fieldId: string, fieldValue: any) => void
    // }
    // // export function forEachSublistField
    // // export function forEachLineField(config: EachSublistConfig}){
    // //     const {record, sublistId, fn} = config
    // //     const lineCount = record.getLineCount({sublistId})
    // //     for (let line = 0; line < lineCount; line++) {
    // //         sublistFields.forEach(fieldId => {
    // //             const value = (typeof customSublistFieldValues[fieldId] === 'undefined') ?
    // //                 fromRecord.getSublistValue({ sublistId, fieldId, line }) :
    // //                 customSublistFieldValues[fieldId];
    // //             toRecord.setSublistValue({ sublistId, fieldId, line, value });
    // //             log(`setSublistValue: ${sublistId}, field ${fieldId}, line: ${line} value: ${value}`);
    // //         });
    // //     }
    // // }
    // // export function getChildCategories(category: Record){
    // //     // category.removeSublistSubrecord
    // //     category.getLineCount
    // //     category.getSublistSubrecord({sublistId: 'subcategories', fieldId: 'subcategory'})
    // // }
    // export function mapLines<T>(config: { record: Record, sublistId: string, fn: (line: number, record?: Record, sublistId?: string, ...args: any[]) => T }): T[] {
    //     const { record = config.record, sublistId = config.sublistId, fn } = config
    //     const lineCount = record.getLineCount({ sublistId })
    //     const arr: T[] = []
    //     for (let line = 0; line < lineCount; line++) {
    //         arr.push(fn(line, record, sublistId))
    //     }
    //     return arr
    // }  
    function getLines(config) {
        var counter = 0;
        var arr = [];
        var record = config.record, sublistId = config.sublistId;
        var lineCount = record.getLineCount({ sublistId: sublistId });
        for (var line = 0; line < lineCount; line++) {
            arr.push(counter++);
        }
        return arr;
        // return new Array().fill(0).map(i => counter++)
    }
    exports.getLines = getLines;
    function copyCategory(config) {
        var categoryId = config.categoryId, newPrimaryParent = config.newPrimaryParent, dontSave = config.dontSave;
        var source = record_1.load({ id: categoryId, type: 'commercecategory' });
        var target = record_1.copy({ id: categoryId, type: 'commercecategory' });
        responseLogger_1.log("Category copy result: " + !!target + " " + (target && target.id));
        target.setValue({ fieldId: 'primaryparent', value: newPrimaryParent });
        var targetId = 'not yet saved';
        if (!dontSave) {
            targetId = target.save();
        }
        // TODO: should we re-load it ?
        responseLogger_1.log("new category saved: !!" + target.id + " " + targetId);
        var removedChildren = getLines({ record: source, sublistId: 'subcategories' })
            .map(function (line) { return source.removeSublistSubrecord({ sublistId: 'subcategories', line: line, fieldId: 'subcategory' }); });
        responseLogger_1.log("Removed children from parent " + source.id + ": " + removedChildren.map(function (r) { return "id: " + r.id + " primaryparent: " + r.getValue('primaryparent'); }).join(',') + " ");
        var newChildren = getLines({ record: target, sublistId: 'subcategories' })
            .map(function (line) { return target.getSublistSubrecord({ sublistId: 'subcategories', line: line, fieldId: 'subcategory' }); });
        responseLogger_1.log("New children in parent " + target.id + ": " + newChildren.map(function (r) { return "{id: " + r.id + ", primaryparent: " + r.getValue('primaryparent') + "}"; }).join(', ') + " ");
        if (!dontSave) {
            target.save();
        }
        return target;
        // return result;
    }
    exports.copyCategory = copyCategory;
});
// /**
//  * Will move given category (and all its descendants to given target parent (targetId).
//  *
//  * Use targetId===null to move the category to the root (as primary category)
//  *
//  * Important: It will actually clone (just) the given category in the parent and then move its direct children to the clone
//  * 
//  * @returns the new category record
//  */
// export function copyCategoryOld(config: CopyCategoryConfig): Record {
//     const fromRecord = load({ type: 'commercecategory', id: config.categoryId })
//     const toRecord = copyRecord({
//         fromRecord,
//         toRecord: create({ type: 'commercecategory' }),
//         customFieldValues: { primaryparent: config.newPrimaryParent },
//         ignoreFields: ['lastmodifiedby', 'created']
//     });
//     // const toRecord = record.load({ type: 'commercecategory', id: newRecordId });
//     copySublists({
//         fromRecord,
//         toRecord
//     });
//     return toRecord;
// }
