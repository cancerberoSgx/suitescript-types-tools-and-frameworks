import { log } from '../../log/responseLogger';
import { copySublist, CloneSublistConfigSublist } from './copySublist';
import { CopyRecordAbstractConfig } from '..';

/** will copy all sublists from given one record to another */
export function copySublists(config: CopySublistsConfig): void {
    const { fromRecord, toRecord, ignoreSublists = [], dontSave, customCloneSublistConfigs = {} } = config;
    const sublists = fromRecord.getSublists().filter(f => [...ignoreSublists].indexOf(f) === -1);
    log(`cloneSublists starts: sublists: ${sublists.join(',')}, fromRecord: ${fromRecord.id}, toRecord: ${toRecord.id}, dontSave: ${dontSave}, customCloneSublistConfigs: ${Object.keys(customCloneSublistConfigs).join(',')}`);
    sublists.forEach(sublistId => {
        const defaultCloneSublistConfig = { sublistId, fromRecord, toRecord, dontSave };
        const finalSublistConfig = {
            ...defaultCloneSublistConfig,
            ...(customCloneSublistConfigs[sublistId] || {}),
            dontSave: true // we don't want to save the record until all sublists are cloned
        };
        copySublist(finalSublistConfig);
    });
    if (!dontSave) {
        toRecord.save();
    }
    log(`cloneSublists ends: sublists: ${sublists.join(',')}, fromRecord: ${fromRecord.id}, toRecord: ${toRecord.id}`);
}

export interface CopySublistsConfig extends CopyRecordAbstractConfig {
    ignoreSublists?: string[];
    customCloneSublistConfigs?: {
        [sublistId: string]: CloneSublistConfigSublist;
    };
}