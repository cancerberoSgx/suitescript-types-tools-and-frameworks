import * as record from 'N/record';
import { checkThrow } from '../misc';
import { Result } from '@hitc/netsuite-types/N/search';


export type RecordId = number | string
export function isRecordId(r: RecordOrRefOrId): r is RecordId {
  return ['number', 'string'].indexOf(typeof r) !== -1
}
// export type RecordOrId = record.Record | RecordId

export interface RecordRef {
  id: RecordId,
  type: string
}
export type RecordOrRef = RecordRef | record.Record
export function isRecordRef(r: RecordOrRefOrId|Result): r is RecordRef {
  return !!((typeof (r as record.Record).getLineCount === 'undefined' )&& (r as record.Record).id && (r as record.Record).type)
}


export type RecordOrRefOrId = RecordOrRef | RecordId


export function isRecord(r: RecordOrRefOrId): r is record.Record {
  return !isRecordRef(r)
}
/** type is needed in case they provide just an id*/
export function asRecord(rr: RecordOrRefResult): record.Record | undefined {
  // let rref: RecordOrRef = rr
  // if (isRecordId(rr)) {
  //   if (!type) {
  //     throw new Error('asRecord() requires a type in case just an id is given')
  //   }
  //   return record.load({ id: rr, type })
  // }
  return isRecordRef(rr) ? record.load(rr) : isResult(rr) ? record.load({id: rr.id, type: rr.recordType+''}) : rr
}

export type RecordOrRefResult = RecordOrRef|Result
export function isResult(r: any): r is Result {
  return r.recordType && r.columns && r.getAllValues
}


export function printRecordRef(rr: RecordRef) {
  return `Record(${rr.id}, ${rr.type})`
}
export function asRecordOrThrow(rr: RecordOrRef): record.Record {
  let r = asRecord(rr)
  return checkThrow(r, `Record doesn't exists`)
}

