import { log } from './responseLogger';
import * as record from 'N/record';

/** 
 * Clones given record's sublist to given target record. returns the new sublist id.  
 */
export function copySublist(config: CloneSublistConfig) {
    const { fromRecord, toRecord, sublistId, dontSave, customSublistFieldValues = {}, ignoreLines = [], ignoreSublistFields = [] } = config;
    const sublistFields = fromRecord.getSublistFields({ sublistId }).filter(f => [...ignoreSublistFields].indexOf(f) === -1);
    log(`cloneSublist starts: : ${sublistId}, fromRecord: ${fromRecord.id}, toRecord: ${toRecord.id}, dontSave: ${dontSave}, sublistFieldsToClone: ${sublistFields.join(', ')}`);
    const lineCount = fromRecord.getLineCount({ sublistId });
    for (let line = 0; line < lineCount; line++) {
        if (ignoreLines.indexOf(line) !== -1) {
            continue;
        }
        sublistFields.forEach(fieldId => {
            const value = (typeof customSublistFieldValues[fieldId] === 'undefined') ?
                fromRecord.getSublistValue({ sublistId, fieldId, line }) :
                customSublistFieldValues[fieldId];
            toRecord.setSublistValue({ sublistId, fieldId, line, value });
            log(`setSublistValue: ${sublistId}, field ${fieldId}, line: ${line} value: ${value}`);
        });
    }
    if (!dontSave) {
        toRecord.save();
    }
    log(`cloneSublist ends: ${sublistId}, fromRecord: ${fromRecord.id}, toRecord: ${toRecord.id}`);
}

export interface CloneSublistConfigSublist {
    sublistId: string;
    /** sublist-field-id to value map */
    customSublistFieldValues?: {
        [id: string]: any;
    };
    ignoreSublistFields?: string[];
    ignoreLines?: number[];
}

export interface CloneSublistConfigRecord {
    fromRecord: record.Record;
    toRecord: record.Record;
    dontSave?: boolean;
}
export interface CloneSublistConfig extends CloneSublistConfigSublist, CloneSublistConfigRecord {
}
