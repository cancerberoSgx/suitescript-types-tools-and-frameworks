import * as record from 'N/record';
import { log } from "../../log/log";
import { CopyRecordAbstractConfig } from './copyRecord';

export function copyFields(config: CopyFieldsConfig): record.Record {
    let { fromRecord, toRecord= record.create({ type: config.fromRecord.type }), ignoreFields = [], customFieldValues = {} } = config;
    log(`target id: ${fromRecord && fromRecord.id}`);
    const fields = fromRecord.getFields().filter(f => [...(ignoreFields || []), 'id'].indexOf(f) === -1);
    log(`cloned fields: ${fields.join(', ')}`);
    customFieldValues = customFieldValues || {};
    fields.forEach(field => toRecord.setValue({ fieldId: field, value: (typeof customFieldValues[field] === 'undefined') ? fromRecord.getValue(field) : customFieldValues[field] }));
    if(!config.dontSave){
        const id = toRecord.save();
        log(`new record id : ${id}`);
    }
    return toRecord;
}

export interface CopyFieldsConfig extends CopyRecordAbstractConfig{
    // fromRecord: record.Record;
    customFieldValues?: {
        [id: string]: any;
    };
    /** if not provided a new record will be created */
    // toRecord: record.Record
    ignoreFields?: string[];
}
 