/**
 * @NApiVersion 2.x
 * @NScriptType Suitelet
 */
 
import {load} from 'N/record';
import { EntryPoints } from 'N/types';
import { initialize as initializeLogger, log } from './log/responseLogger';
import { copyCategory } from './catalog/copyCategory';
import { copySublist } from './record/copy/copySublist';

export let onRequest: EntryPoints.Suitelet.onRequest = context => {
    try {
        initializeLogger({ response: context.response, enabled: true })
        const newCategory = copyCategory({
            categoryId: 18,
            newPrimaryParent: null
        })
        // copySublist({
        //     fromRecord: load({id: 18, type: 'commercecategory'}),
        //     sublistId: 'subcategories', 
        //     toRecord: load({id: 28, type: 'commercecategory'})
        // })
        // copySublist({
        //     fromRecord: load({id: 18, type: 'commercecategory'}),
        //     sublistId: 'items', 
        //     toRecord: load({id: 28, type: 'commercecategory'})
        // })
    } catch (error) {
        log(`General error: 
${error} 
${Object.keys(error)}
`);
    } 
}
 
export type RecordId = number | string
  