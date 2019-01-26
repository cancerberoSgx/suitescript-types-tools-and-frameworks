import { TypedRecord, recordConstructors, recordTypes } from './typedRecord';
import { commercecategoryRecordImpl } from './generated/commercecategory';
import { StringKeyOf, ValueOfStringKey, checkThrow } from '../../misc/misc';
import * as record from 'N/record';
import { RecordId } from '../recordRef';

// const recordFieldConstructorImpl: recordFieldConstructors = {
//   'commercecategory': (r: TypedRecord) => { return new commercecategoryFieldsImpl(r) }
// }
const recordConstructorsImpl: recordConstructors = {
  'commercecategory': (r: record.Record) => { return new commercecategoryRecordImpl(r) }
}

export function load<T extends StringKeyOf<recordTypes>>(options: { id: RecordId, type: T }): ValueOfStringKey<recordTypes, T> | undefined {
  const r = record.load(options)
  return r ? recordConstructorsImpl[options.type](r) : undefined
}
export function loadOrThrow<T extends StringKeyOf<recordTypes>>(options: { id: RecordId, type: T }): ValueOfStringKey<recordTypes, T> {
  const r = load(options)
  return checkThrow(r, `record ${options.id},${options.type} not found`)
}
export function create<T extends StringKeyOf<recordTypes>>(options: { type: T }): ValueOfStringKey<recordTypes, T> {
  const r = record.create(options)
  return recordConstructorsImpl[options.type](r)
}