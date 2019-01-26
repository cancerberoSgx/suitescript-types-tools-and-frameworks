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
export function isRecordRef(r: RecordOrRefOrId | Result): r is RecordRef {
  return !!(
    // ((typeof (r as record.Record).getLineCount === 'undefined') &&
    !isRecord(r) && 
      (r as RecordRef).id && (r as RecordRef).type //&&
    // (typeof (r as record.Record).findMatrixSublistLineWIthValue === 'undefined')
  )
}

export type RecordOrRefOrId = RecordOrRef | RecordId

export function isRecord(r: RecordOrRefOrId | Result): r is record.Record {
  return (
    // !isRecordRef(r) &&
    (typeof (r as record.Record).setValue !== 'undefined') && !!(r as record.Record).getFields&&!!(r as record.Record).getSublistFields
    // (typeof (r as record.Record).getCurrentMatrixSublistValue !== 'undefined')
  )
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
  // if(isRecord(rr)){return rr}

  return isRecord(rr) ? rr : isRecordRef(rr) ? record.load(rr) : record.load({ id: rr.id, type: rr.recordType + '' })
}

export function asRecordOrThrow(rr: RecordOrRefResult): record.Record {
  return checkThrow(asRecord(rr), `Record doesn't exists`)
}


export type RecordOrRefResult = RecordOrRef | Result
export function isResult(r: any): r is Result {
  return typeof r === 'object' && !isRecord(r)
}


export function printRecordRef(rr: RecordRef) {
  return `Record(${rr.id}, ${rr.type})`
}