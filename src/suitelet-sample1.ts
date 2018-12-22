/**
 * @NApiVersion 2.x
 * @NScriptType Suitelet
 */
 
import { EntryPoints } from 'N/types';
import { initialize as initializeLogger, log } from './log/responseLogger';
import { copyCategory } from './catalog/copyCategory';

export let onRequest: EntryPoints.Suitelet.onRequest = context => {
    try {
        initializeLogger({ response: context.response, enabled: true })
        const newCategory = copyCategory({
            categoryId: 18,
            newPrimaryParent: null
        })
    } catch (error) {
        log('GENERAL error, ' + error);
    } 
}
 
export type RecordId = number | string
 