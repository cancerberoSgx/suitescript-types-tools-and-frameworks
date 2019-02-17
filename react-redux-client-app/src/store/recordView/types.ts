import { ErrorOptions } from '../commonTypes';

export enum RecordViewActionTypes {
  FETCH = '@@recordView/FETCH',
  SHOW = '@@recordView/SHOW',
  FETCH_REQUEST = '@@recordView/FETCH_REQUEST',
  FETCH_SUCCESS = '@@recordView/FETCH_SUCCESS',
  FETCH_ERROR = '@@recordView/FETCH_ERROR',
}

export interface RecordViewState extends RecordViewSettings {
  readonly type?: string
  readonly id?: string
  readonly loading?: boolean
  readonly record?: Record
  readonly error?: ErrorOptions
}

export interface FetchRecordOptions extends RecordViewSettings {
  id: string,
  type: string,
}

export interface ShowRecordOptions extends RecordViewSettings {
  record: Record;
  error?: ErrorOptions
}


export interface RecordViewSettings {
  showSublistLines?: boolean
  seeValues?: boolean
  showAllFields?: boolean
  inlineEdit?: boolean
  findRecord?: boolean
}




// untyped record  - i.e basically the info that is in xml=T without the values
export interface Record extends Base {
  fields: ValuedField[]
  sublists: ValuedSublist[]
  type: string
}

// enum FieldType { 'string', 'boolean', }// TODO - is there a record for extracting this ?
// interface Sublists { [sublistId: string]: Sublist }

interface Base {
  id: string,
  name?: string
}
export interface Field extends Base {
  isReadonly: boolean,
  isMandatory: boolean
  type: string
  selectOptions?: { value: string, text: string }[]
  isVisible?: boolean
  isDisplay?: boolean
  asString?: string
  asJSON?: any
}
export interface Sublist extends Base {
  fields: Field[]
}

export type Value = string | boolean | number | Date | null | number[] | string[] | undefined

export type Text = string | string[] | undefined;

interface Valued {
  value?: Value;
  text?: Text;
}

export interface ValuedField extends Field, Valued {
}

export interface SublistRow extends Valued {
  field: Field;
}

interface SublistLine extends Valued {
  rows: SublistRow[];
}

export interface ValuedSublist extends Sublist {
  lines: SublistLine[];
  lineCount: number;
}

export interface RecordV extends Record {
  fields: ValuedField[];
  sublists: ValuedSublist[];
}
