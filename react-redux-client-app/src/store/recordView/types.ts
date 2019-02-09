export const enum RecordViewActionTypes {
  FETCH = '@@recordView/FETCH',
  SHOW = '@@recordView/SHOW',

  FETCH_REQUEST = '@@recordView/FETCH_REQUEST',
  FETCH_SUCCESS = '@@recordView/FETCH_SUCCESS',
  FETCH_ERROR = '@@recordView/FETCH_ERROR',
}
export interface RecordViewState {
  readonly type?: string
  readonly id?: string
  readonly loading?: boolean
  readonly record?: Record
  readonly error?: string
}

// export interface Record {
//   id: string,
//   type: string
//   fields: any[]
//   sublists: any[] // frmo metadata
// }


export interface FetchRecordOptions {
  id: string, type: string, showSublistLines?: boolean, seeValues?: boolean, showAllFields?: boolean
}
export interface ShowRecordOptions {
  record: Record;
  seeValues?: boolean;
  showAllFields?: boolean;
  messageFromRedirect?: string;
  showSublistLines?: boolean;
  error?: string
}


// untyped record  - i.e basically the info that is in xml=T without the values
export interface Record extends Base {
  fields: Field[]
  sublists: Sublist[]
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

interface Row extends Valued {
  field: Field;
}

interface SublistLine extends Valued {
  rows: Row[];
}

export interface ValuedSublist extends Sublist {
  lines: SublistLine[];
  lineCount: number;
}

export interface RecordV extends Record {
  fields: ValuedField[];
  sublists: ValuedSublist[];
}
