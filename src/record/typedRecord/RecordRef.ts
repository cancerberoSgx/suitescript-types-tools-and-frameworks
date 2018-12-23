import * as record from 'N/record';




export type RecordId = number | string
export type RecordOrId = record.Record | RecordId
export interface RecordRef {
    id: RecordId,
    type: string
}
export type RecordOrRef = RecordRef | record.Record
export function isRecordId(r: RecordOrId): r is RecordId {
    return ['number', 'string'].indexOf(typeof r) !== -1
}
export function isRecordRef(r: RecordOrRef): r is RecordRef {
    return typeof (r as record.Record).getLineCount === 'undefined'
} 
export function isRecord(r: RecordOrRef): r is record.Record {
    return !isRecordRef(r)
}

export function asRecord(rr: RecordOrRef): record.Record | undefined {
    let r: record.Record = isRecordRef(rr) ? record.load(rr) : rr
    return r
}
export function printRecordRef(rr: RecordRef){
  return `Record(${rr.id}, ${rr.type})`
}
export function asRecordOrThrow(rr: RecordOrRef): record.Record | undefined {
  let r: record.Record = isRecordRef(rr) ? record.load(rr) : rr
  return checkThrow(r, `Record doesn't exists`)
}

export function checkThrow<T>(r?:T, msg='Throwing on undefined value'):T{
  if(!r){throw new Error(msg)}
  return r
}