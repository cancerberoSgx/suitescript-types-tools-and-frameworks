import { copyFields } from '../record/copyFields';
import { RecordId } from '../suitelet-sample1';
import * as record from 'N/record';
import { copySublists } from '../record/copySublists';


export interface MoveCategoryConfig {
    categoryId: RecordId
    /** use null to move the category to the root */
    parentCategoryId: RecordId | null;
}


/**
 * Will move given category (and all its descendants to given target parent (targetId).
 *
 * Use targetId===null to move the category to the root (as primary category)
 *
 * Important: It will actually clone (just) the given category in the parent and then move its direct children to the clone
 * 
 * @returns the new category record
 */
export function copyCategory(config: MoveCategoryConfig): record.Record {
    const fromRecord = record.load({ type: 'commercecategory', id: config.categoryId })
    const toRecord = copyFields({
        fromRecord,
        customFieldValues: { primaryparent: config.parentCategoryId },
        ignoreFields: ['lastmodifiedby', 'created']
    });
    // const toRecord = record.load({ type: 'commercecategory', id: newRecordId });
    copySublists({
        fromRecord,
        toRecord
    });
    return toRecord;
}