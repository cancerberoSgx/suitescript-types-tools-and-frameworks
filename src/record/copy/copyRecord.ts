import * as record from 'N/record';
import { CopyRecordAbstractConfig } from '../types';
import { CopyFieldsConfig, copyFields } from './copyFields';
import { CopySublistsConfig, copySublists } from './copySublists';


export interface CopyRecordConfig extends CopyRecordAbstractConfig, CopyFieldsConfig, CopySublistsConfig{
    
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
export function copyRecord(config: CopyRecordConfig): record.Record {
    const toRecord = copyFields({
        ...config as CopyFieldsConfig,
    });
    copySublists({...config as CopySublistsConfig});
    record.detach
    return toRecord;
} 