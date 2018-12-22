export * from './copy/copyFields'
export * from './copy/copyRecord'
export * from './copy/copySublist'
export * from './copy/copySublists'
export * from './copy/copyRecord'

import * as record from 'N/record';

export interface CopyRecordAbstractConfig {
  fromRecord: record.Record;
  toRecord: record.Record;
  dontSave?: boolean;
}