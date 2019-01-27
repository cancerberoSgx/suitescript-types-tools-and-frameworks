export type NSBoolean = 'T'|'F'// perhaps the api support native boolean accorting to typings
export type NSDate = string // perhaps the api support native Dates accorting to typings
export type NSRecordType = string // but could be a enum or ored type

export interface NativeError { name?: string, message?: string, stack?: string[], type?: string }
