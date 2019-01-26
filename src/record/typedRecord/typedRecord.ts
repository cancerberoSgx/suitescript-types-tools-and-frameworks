import * as record from "N/record";
import { Record } from 'N/record';
import { CommonFields } from './fieldTypes';
import { RecordOrRefResult, asRecordOrThrow } from '../recordRef';
import { RecordType } from './generated/recordConstructor';

export interface TypedRecord<Fields extends CommonFields = CommonFields, Sublists extends SublistTypes = SublistTypes> {
  readonly nsRecord: record.Record

  readonly id: string
  readonly type: RecordType

  readonly fields: Fields

  readonly sublists: Sublists
}

export class TypedRecordImpl<Fields extends CommonFields = CommonFields, Sublists extends SublistTypes = SublistTypes> implements TypedRecord<Fields, Sublists> {
  nsRecord: Record
  protected _sublists: Sublists = null as any
  protected _fields: Fields = null as any
  constructor(nsRecordOrRefOrResult: RecordOrRefResult) {
    this.nsRecord = asRecordOrThrow(nsRecordOrRefOrResult)
  }
  public get id(): string {
    return this.nsRecord.id + ''
  }
  public get type(): RecordType {
    return this.nsRecord.type + '' as any
  }
  public get fields(): Fields {
    return this._fields
  }
  public get sublists(): Sublists {
    return this._sublists
  }
}


// const c: CommercategoryRecord = null as any as CommercategoryRecord
// export type recordTypes = {
//   'commercecategory': commercecategoryRecord
// }
// export type recordConstructors = {
//   'commercecategory': (r: Record) => commercecategoryRecord
// }
// type recordFieldTypes = {
//   'commercecategory': CommercecategoryFields2
// }
// export type recordFieldConstructors = {
//   'commercecategory': (r: TypedRecord) => commercecategoryFields
// }




// export function createRecordField<T extends RecordType>(r: TypedRecord): ValueOfStringKey<recordFieldTypes, T> {
//   return recordFieldConstructorImpl[r.type](r)
// }
// export interface FieldsAttribute<Fields extends FieldTypes = FieldTypes> { 
//   get<T extends StringKeyOf<Fields>>(name:T): ValueOfStringKey<Fields, T>
//   set<T extends StringKeyOf<Fields>>(name:T, value: ValueOfStringKey<Fields, T>): this
// }

export type DefaultSublistFieldTypes = {
  // common fields in all sublists ?
}
export interface SublistTypes<SublistFieldTypes extends DefaultSublistFieldTypes=DefaultSublistFieldTypes> {
  // id: string
  // parentRecord: TypedRecord
  // lineCount(): number
  // empty(): void
  // getFieldNames(): (keyof SublistFieldTypes)[]
  // getLines(range?: [number, number]): SublistFieldTypes[]
  // getLine(line: number): SublistFieldTypes
  // setLine(line: number, value: SublistFieldTypes): void
  // addLine(line: number, value: SublistFieldTypes): void
  // addLines(line: number, value: SublistFieldTypes[]): void
  // removeLine(line: number): void
  // setField<T extends StringKeyOf<SublistFieldTypes>>(fieldRef: SublistFieldRef, value: ValueOfStringKey<SublistFieldTypes, T>): void
  // getField<T extends StringKeyOf<SublistFieldTypes>>(fieldRef: SublistFieldRef): ValueOfStringKey<SublistFieldTypes, T>
}
// export interface SublistFieldRef {
//   line: number
//   fieldId: string
// }

// /** common sublist line fields - don't know if that exists */
// export interface SublistFieldTypes {
//   // counter: number // I think there is something that all sublist lines have
// }
// export interface SublistLine<Fields extends SublistFieldTypes = SublistFieldTypes>{
// }
