import * as record from 'N/record';

export interface CopyRecordAbstractConfig {
    fromRecord: record.Record;
    toRecord: record.Record;
    dontSave?: boolean;
}


export type RecordId = number | string
export type RecordOrId = record.Record | RecordId
export interface RecordRef {
    id: RecordId,
    type: string
}
export function isRecordId(r: RecordOrId): r is RecordId {
    return ['number', 'string'].indexOf(typeof r) !== -1
} 