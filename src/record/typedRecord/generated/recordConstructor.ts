
import { commercecategoryRecordImpl, commercecategoryRecord } from './index';
import { StringKeyOf } from '../../../misc/misc';
import * as record from 'N/record';

export type recordTypes = {
  'commercecategory': commercecategoryRecordImpl
}

export type RecordType = StringKeyOf<recordTypes>

export type recordConstructors = {
  'commercecategory': (r: record.Record) => commercecategoryRecord
}

export const recordConstructorsImpl: recordConstructors = {
  'commercecategory': (r: record.Record) => new commercecategoryRecordImpl(r)
}
