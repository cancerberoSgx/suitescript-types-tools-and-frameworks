
import { cmscontentRecordImpl, commercecategoryRecordImpl, customerRecordImpl, inventoryitemRecordImpl, invoiceRecordImpl, itemRecordImpl, noninventoryitemRecordImpl, transactionRecordImpl, websiteRecordImpl, cmscontentRecord, commercecategoryRecord, customerRecord, inventoryitemRecord, invoiceRecord, itemRecord, noninventoryitemRecord, transactionRecord, websiteRecord } from './index';
import { StringKeyOf } from '../../../misc/misc';
import * as record from 'N/record';

export type recordTypes = {
  'cmscontent': cmscontentRecordImpl,
  'commercecategory': commercecategoryRecordImpl,
  'customer': customerRecordImpl,
  'inventoryitem': inventoryitemRecordImpl,
  'invoice': invoiceRecordImpl,
  'item': itemRecordImpl,
  'noninventoryitem': noninventoryitemRecordImpl,
  'transaction': transactionRecordImpl,
  'website': websiteRecordImpl
}

export type RecordType = StringKeyOf<recordTypes>

export type recordConstructors = {
  'cmscontent': (r: record.Record) => cmscontentRecord,
  'commercecategory': (r: record.Record) => commercecategoryRecord,
  'customer': (r: record.Record) => customerRecord,
  'inventoryitem': (r: record.Record) => inventoryitemRecord,
  'invoice': (r: record.Record) => invoiceRecord,
  'item': (r: record.Record) => itemRecord,
  'noninventoryitem': (r: record.Record) => noninventoryitemRecord,
  'transaction': (r: record.Record) => transactionRecord,
  'website': (r: record.Record) => websiteRecord
}

export const recordConstructorsImpl: recordConstructors = {
  'cmscontent': (r: record.Record) => new cmscontentRecordImpl(r),
  'commercecategory': (r: record.Record) => new commercecategoryRecordImpl(r),
  'customer': (r: record.Record) => new customerRecordImpl(r),
  'inventoryitem': (r: record.Record) => new inventoryitemRecordImpl(r),
  'invoice': (r: record.Record) => new invoiceRecordImpl(r),
  'item': (r: record.Record) => new itemRecordImpl(r),
  'noninventoryitem': (r: record.Record) => new noninventoryitemRecordImpl(r),
  'transaction': (r: record.Record) => new transactionRecordImpl(r),
  'website': (r: record.Record) => new websiteRecordImpl(r)
}
