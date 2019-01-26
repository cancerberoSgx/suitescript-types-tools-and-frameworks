
import { cmscontentRecordImpl, commercecategoryRecordImpl, customerRecordImpl, inventoryitemRecordImpl, invoiceRecordImpl, itemRecordImpl, noninventoryitemRecordImpl, transactionRecordImpl, websiteRecordImpl, cmscontentRecord, commercecategoryRecord, customerRecord, inventoryitemRecord, invoiceRecord, itemRecord, noninventoryitemRecord, transactionRecord, websiteRecord } from './index';
import { StringKeyOf, ValueOfStringKey, checkThrow } from '../../../misc/misc';
import * as record from 'N/record';
import { RecordId } from '../../recordRef';

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
const recordConstructorsImpl: recordConstructors = {
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
