import { copy, load, Record } from 'N/record';
import { log } from '../log/responseLogger';
import { RecordId } from '../record/types';
import { CopyCategoryConfig } from './copyCategory';
import { getLines } from '../record/sublistUtil';
/** trying to use copy() but it doesn't work or I don't understand the API */

export function copyCategory2_(config: CopyCategoryConfig): Record {
    const { categoryId, newPrimaryParent, dontSave } = config;
    let target: Record = copy({ id: categoryId, type: 'commercecategory' });
    target.setValue({ fieldId: 'primaryparent', value: newPrimaryParent });
    log(`copy(): ${target.save()}`);
    log(`target set primaryparent:  ${target.save()}`);
    let targetId: RecordId = 'not yet saved';
    if (!dontSave) {
        targetId = target.save();
    }
    // TODO: should we re-load it ?
    log(`new category saved: !!${target.id} ${targetId}`);
    const source = load({ id: categoryId, type: 'commercecategory' });
    const removedChildren = getLines({ record: source, sublistId: 'subcategories' })
        .map(line => source.removeSublistSubrecord({ sublistId: 'subcategories', line, fieldId: 'subcategory' }));
    log(`Removed children from parent ${source.id}: ${removedChildren.map(r => `id: ${r.id} primaryparent: ${r.getValue('primaryparent')}`).join(',')} `);
    const newChildren = getLines({ record: target, sublistId: 'subcategories' })
        .map(line => target.getSublistSubrecord({ sublistId: 'subcategories', line, fieldId: 'subcategory' }));
    log(`New children in parent ${target.id}: ${newChildren.map(r => `{id: ${r.id}, primaryparent: ${r.getValue('primaryparent')}}`).join(', ')} `);
    if (!dontSave) {
        target.save();
    }
    return target;
    // return result;
}
