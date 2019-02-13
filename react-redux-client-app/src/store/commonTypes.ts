
export interface ErrorOptions {
  error?: Error,
  responseText: string
}


export type FieldValueSimpleType = string | Date | boolean | number
export type FieldValueType = FieldValueSimpleType | FieldValueSimpleType[]
