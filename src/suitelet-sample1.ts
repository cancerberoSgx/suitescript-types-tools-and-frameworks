/**
 * @NApiVersion 2.x
 * @NScriptType Suitelet
 */

import { EntryPoints } from 'N/types';
import { initialize as initializeLogger, setEnabled as loggerSetEnabled } from './responseLogger';
import {  copyCategory } from './copyCategory';

export let onRequest: EntryPoints.Suitelet.onRequest = context => {
    initializeLogger({ response: context.response, enabled: true })
    const newCategory = copyCategory({
        categoryId: 18,
        parentCategoryId: null
    }) 
}

export type RecordId = number | string
