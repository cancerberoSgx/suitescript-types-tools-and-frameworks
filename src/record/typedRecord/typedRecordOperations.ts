import { StringKeyOf, ValueOfStringKey, checkThrow, EmptyObject } from '../../misc/misc';
import * as record from 'N/record';
import { RecordId } from '../recordRef';
// import { RecordType } from './generated';
import { Record, RecordType } from './typedRecord';
// import { recordTypes, recordConstructorsImpl } from './generated/recordConstructor';

export function load<RType extends RecordType>(options: { id: RecordId, type: RType }): Record<RType>|undefined {
  return record.load(options) as any
  // return r ? recordConstructorsImpl[options.type](r) : undefined as any
}
export function loadOrThrow<RType extends RecordType>(options: { id: RecordId, type: RType }): Record<RType> {
  const r = load(options)
  return checkThrow(r, `record ${options.id},${options.type} not found`)
}
export function create<RType extends RecordType>(options: { type: RType }): Record<RType> {
  return record.create(options) as any
  // return recordConstructorsImpl[options.type](r) as any
}



