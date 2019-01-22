import * as record from 'N/record';

export interface CopyRecordAbstractConfig {
  fromRecord: record.Record;
  toRecord: record.Record;
  dontSave?: boolean;
} 