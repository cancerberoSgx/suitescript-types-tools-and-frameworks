import { StringKeyOf, ValueOfStringKey, checkThrow } from '../../misc/misc';
import * as record from 'N/record';
import { RecordId } from '../recordRef';
import { recordTypes, recordConstructorsImpl } from './generated/recordConstructor';

export function load<T extends StringKeyOf<recordTypes>>(options: { id: RecordId, type: T }): ValueOfStringKey<recordTypes, T> | undefined {
  const r = record.load(options)
  return r ? recordConstructorsImpl[options.type](r) : undefined as any
}
export function loadOrThrow<T extends StringKeyOf<recordTypes>>(options: { id: RecordId, type: T }): ValueOfStringKey<recordTypes, T> {
  const r = load(options)
  return checkThrow(r, `record ${options.id},${options.type} not found`)
}
export function create<T extends StringKeyOf<recordTypes>>(options: { type: T }): ValueOfStringKey<recordTypes, T> {
  const r = record.create(options)
  return recordConstructorsImpl[options.type](r) as any
}
