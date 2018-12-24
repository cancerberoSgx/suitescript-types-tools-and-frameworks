import { delete as deleteRecord, load } from 'N/record';
import { log } from '../log/responseLogger';
import { getLines } from '../record/sublistUtil';
import { RecordId } from '../record/recordRef';


export interface RemoveCategoryConfig {
    categoryId: RecordId
}

/**
 * TODO: could fail if the category has more than one parent
 *  * removes all lines in 'subcategories' and 'items' sublist
 *  * if it has a parent remove the parent's line corresponding to this record in its 'subcategories' sublist
 *  * then remove the record
 */
export function removeCategory(config: RemoveCategoryConfig): void {

    log(`removeCategory: starts for ${config.categoryId}`)
    const record = load({ id: config.categoryId, type: 'commercecategory' })

    log(`removeCategory: removing category's subcategories`)
    getLines({ record, sublistId: 'subcategories' }).forEach(line => {
        record.removeLine({ line, sublistId: 'subcategories', ignoreRecalc: true })
    })

    log(`removeCategory: removing category's items`)
    getLines({ record, sublistId: 'items' }).forEach(line => {
        // HEADS UP line: 0 because we are removing if not UNEXPECTED_ERROR
        log(`removing line ${line} sublistId items, currentValueFieldItem: ${record.getSublistValue({ sublistId: 'items', line: 0, fieldId: 'item' }) }, currentValueFieldprimarycategory: ${record.getSublistValue({ sublistId: 'items', line: 0, fieldId: 'primarycategory' }) }`)
        record.removeLine({ line: 0, sublistId: 'items', ignoreRecalc: true })
    })

    const parentId = load({ id: config.categoryId, type: 'commercecategory' }).getValue('primaryparent')
    log(`removeCategory: removing category from parent ${parentId}`)

    if (parentId) {
        const parent = load({ id: parentId + '', type: 'commercecategory' })
        getLines({ record: parent, sublistId: 'subcategories' }).forEach(line => {
            if (parent.getSublistValue({ sublistId: 'subcategories', line, fieldId: 'subcategory' }) == parent.id) {
                log(`removeCategory: removing category from parent found at line ${line}`)
                parent.removeLine({ line, sublistId: 'subcategories', ignoreRecalc: true })
            }
        })
        parent.save()
    }

    log(`removeCategory: removing category record ${parentId}`)
    record.save()
    deleteRecord({ id: record.id, type: 'commercecategory', })
}








