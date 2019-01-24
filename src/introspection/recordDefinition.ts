import { RecordOrRef, asRecord, asRecordOrThrow } from '../record/recordRef';

// untyped record metadata - i.e basically the info that is in xml=T without the values
export interface RecordMetadata {
  fields: FieldsMetadata
  sublists: SublistsMetadata
}

export enum FieldType {'string', 'boolean', }// TODO - is there a record for extracting this ? 
export interface SublistsMetadata {[sublistId: string]: SublistMetadata}
export interface FieldsMetadata{[fieldId: string]:FieldType}
export interface SublistMetadata {
  fieldNames: string[]

}
export function getRecordTypeMetadata(rr: RecordOrRef): RecordMetadata|undefined{
  const r = asRecord(rr)
  if(!r){return }
  r.getFields().map(fieldId=>{
    const f = r.getField({fieldId})
    f.type
  })
  
}