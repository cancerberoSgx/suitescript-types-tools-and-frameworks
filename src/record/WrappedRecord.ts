import { Record } from 'N/record';

export interface WrappedRecord {
  // new(record: Record): this
  record: Record
}
export class WrappedRecordImpl implements WrappedRecord{
  constructor(public record: Record){
  }
}