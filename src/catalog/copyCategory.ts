import { create, load, Record } from 'N/record';
import { copyFields } from '../record/copy/copyFields';
import { copySublist } from '../record/copy/copySublist';
import { RemoveCategoryConfig } from './removeCategory';
import { RecordId } from '../record/typedRecord/RecordRef';


export interface CopyCategoryConfig extends RemoveCategoryConfig {
    /** use null to move the category to the root */
    newPrimaryParent: RecordId | null
    dontSave?: boolean
} 
 
 
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
export function copyCategory(config: CopyCategoryConfig): Record {
    const fromRecord = load({ type: 'commercecategory', id: config.categoryId })
    const toRecord = create({ type: 'commercecategory' })
    copyFields({
        fromRecord, 
        toRecord,
        customFieldValues: { primaryparent: config.newPrimaryParent },
        ignoreFields: ['lastmodifiedby', 'created'], 
        dontSave: true
    })
    copySublist({
        fromRecord,
        sublistId: 'subcategories',
        toRecord, 
        dontSave: true
    })
    copySublist({
        fromRecord,
        sublistId: 'items',
        toRecord, 
        dontSave: true
    })
    toRecord.save()
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








