
export interface ErrorOptions {
  error?: Error | ServiceError,
  responseText?: string
}
export interface ServiceError {
  name: string
  message: string
  stack: string
  asString: string
}

export type FieldValueSimpleType = string | Date | boolean | number
export type FieldValueType = FieldValueSimpleType | FieldValueSimpleType[]
