import { copy, load, Record } from 'N/record';
import { log } from '../log/responseLogger';
import { RecordId } from '../suitelet-sample1';
 



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

export function getLines(config: { record: Record, sublistId: string }): number[] {
    let counter = 0
    const arr : number[] = []
    const { record, sublistId } = config
    const lineCount = record.getLineCount({ sublistId })
    for (let line = 0; line < lineCount; line++) {
        arr.push(counter++)
    }
    return arr;
    // return new Array().fill(0).map(i => counter++)
}

export interface CopyCategoryConfig {
    categoryId: RecordId
    /** use null to move the category to the root */
    newPrimaryParent: RecordId | null
    dontSave?: boolean
}
export function copyCategory(config: CopyCategoryConfig): Record {
    const { categoryId, newPrimaryParent, dontSave } = config
    const source = load({ id: categoryId, type: 'commercecategory' })
    let target: Record = copy({ id: categoryId, type: 'commercecategory' })
    log(`Category copy result: ${!!target} ${target && target.id}`);

    target.setValue({fieldId: 'primaryparent', value: newPrimaryParent})

    let targetId: RecordId = 'not yet saved'
     if(!dontSave){
        targetId = target.save()
    } 
    // TODO: should we re-load it ?
    log(`new category saved: !!${target.id} ${targetId}`);

    const removedChildren = getLines({ record: source, sublistId: 'subcategories' })
        .map(line => source.removeSublistSubrecord({ sublistId: 'subcategories', line, fieldId: 'subcategory' }))
    log(`Removed children from parent ${source.id}: ${removedChildren.map(r => `id: ${r.id} primaryparent: ${r.getValue('primaryparent')}`).join(',')} `);

    const newChildren = getLines({ record: target, sublistId: 'subcategories' })
        .map(line => target.getSublistSubrecord({ sublistId: 'subcategories', line, fieldId: 'subcategory' }))
    log(`New children in parent ${target.id}: ${newChildren.map(r => `{id: ${r.id}, primaryparent: ${r.getValue('primaryparent')}}`).join(', ')} `);

    if(!dontSave){
        target.save()
    }
    return target
    // return result;
}



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
