// super typed netsuite record type
// there is a super generic record definition that let declare concrete records by just declaring its fields and sublists generics. 
// IDEA: consume record definition XML and from there generate the concrete record generics declaration code. Could also be quering the record type with suitesscript

import * as record from "N/record";
import { StringKeyOf, TODO, TypedMap, ValueOfStringKey } from '../../misc/misc';
import {  FieldTypes } from './fieldTypes';

export interface Record<Fields extends FieldTypes = FieldTypes, Sublists extends SublistTypes = SublistTypes> {
  nsRecord: record.Record

  // wrap id and type with getters
  id: string
  externalId: string

  // getFieldValue<T extends StringKeyOf<Fields>>(name:T): ValueOfStringKey<Fields, T>
  // setFieldValue<T extends StringKeyOf<Fields>>(name:T, value: ValueOfStringKey<Fields, T>): this
  fields: TypedMap<Fields>

  lines:TypedMap<Sublists>
  // sublists: SublistsTypes
  // copyFieldsFrom(config: TODO): this
  // copySublistsFrom(config: TODO): this
  // remove(config: TODO): void
}
// export interface FieldsAttribute<Fields extends FieldTypes = FieldTypes> { 
//   get<T extends StringKeyOf<Fields>>(name:T): ValueOfStringKey<Fields, T>
//   set<T extends StringKeyOf<Fields>>(name:T, value: ValueOfStringKey<Fields, T>): this
// }

export type DefaultSublistFieldTypes = {
  // common fields in all sublists ?
}
export interface SublistTypes<SublistFieldTypes extends DefaultSublistFieldTypes=DefaultSublistFieldTypes> {
  id: string
  parentRecord: Record
  lineCount(): number
  empty(): void
  getFieldNames(): (keyof SublistFieldTypes)[]
  getLines(range?: [number, number]): SublistFieldTypes[]
  getLine(line:number): SublistFieldTypes
  setLine(line:number, value: SublistFieldTypes): void
  addLine(line: number, value: SublistFieldTypes):void
  addLines(line: number, value: SublistFieldTypes[]):void
  removeLine(line: number): void
  setField<T extends StringKeyOf<SublistFieldTypes>>(fieldRef: SublistFieldRef, value: ValueOfStringKey<SublistFieldTypes, T>):void
  getField<T extends StringKeyOf<SublistFieldTypes>>(fieldRef: SublistFieldRef): ValueOfStringKey<SublistFieldTypes, T>
}
export interface SublistFieldRef {
  line: number
  fieldId: string
}

// /** common sublist line fields - don't know if that exists */
// export interface SublistFieldTypes {
//   // counter: number // I think there is something that all sublist lines have
// }
// export interface SublistLine<Fields extends SublistFieldTypes = SublistFieldTypes>{
// }
