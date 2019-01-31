import * as record from 'N/record';
import { checkThrow } from '../../misc/misc';
import { RecordId } from '../recordRef';
import { Record, RecordType } from './typedRecord';

interface LoadRecordOptions<RType extends RecordType> {
   id: RecordId, 
   type: RType 
  }
export function load<RType extends RecordType>(options: LoadRecordOptions<RType>): Record<RType> | undefined {
  return record.load(options) as any
}

export function loadOrThrow<RType extends RecordType>(options: LoadRecordOptions<RType>): Record<RType> {
  return checkThrow(load(options), `record ${options.id},${options.type} not found`)
}

export function create<RType extends RecordType>(options: { type: RType }): Record<RType> {
  return record.create(options) as any
}



