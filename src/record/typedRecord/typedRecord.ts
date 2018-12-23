// super typed netsuite record type
// there is a super generic record definition that let declare concrete records by just declaring its fields and sublists generics. 
// IDEA: consume record definition XML and from there generate the concrete record generics declaration code. Could also be quering the record type with suitesscript

import * as record from "N/record";
import { StringKeyOf, ValueOfStringKey } from '../../misc';
import { RecordId } from './RecordRef';
import { type } from 'os';
import { FieldTypes, DefaultSublistLineType } from './fieldTypes';
export interface Record<Fields extends FieldTypes = FieldTypes, Sublists extends SublistTypes = SublistTypes> {
  nsRecord: record.Record
  fields: Fields

  // wrap id and type with getters
  id: string
  externalId: string

  getFieldValue<T extends StringKeyOf<Fields>>(name:T): ValueOfStringKey<Fields, T>
  setFieldValue<T extends StringKeyOf<Fields>>(name:T, value: ValueOfStringKey<Fields, T>): this

  // sublists: SublistsTypes
  // copyFieldsFrom(config: any): this
  // copySublistsFrom(config: any): this
  // remove(config: TODO): void
}
// export interface = SublistsTypes{
//   [sublistId: string]
// }
export interface SublistTypes<SublistFieldTypes extends DefaultSublistLineType=DefaultSublistLineType> {
  getLine(line:number): SublistLine
}

// export interface CommerceFieldTypes extends FieldTypes{
//   // TODO: maybe there are common fields for commerce related records ?
//   }

/** common sublist line fields - don't know if that exists */
export interface SublistFieldTypes {
  // counter: number // I think there is something that all sublist lines have
}
export interface SublistLine<Fields extends SublistFieldTypes = SublistFieldTypes>{
  getFieldValues<T extends StringKeyOf<Fields>>(line: number): ValueOfStringKey<Fields, T>
}

// export type FieldValue = Date | number | number[] | string | string[] | boolean | null;

