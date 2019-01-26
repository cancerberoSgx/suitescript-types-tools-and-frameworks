// declare interface RecordMetadata{
//   fields: RecordField[]
//   sublists : Sublist[]
//   searchFilters: AbstractField[]
//   searchColumns: AbstractField[]
// }
// declare interface AbstractField {
//   type: Type, 
//   id: string, 
//   label: string
// }
// declare interface SublistField extends AbstractField {
//   required: boolean
//   help: string
// }
// declare interface RecordField extends SublistField {
//   nlapiSubmitField: boolean
// }
// declare interface Sublist {
//   id: string
//   label:string
//   fields: SublistField[]
// }
// declare type Type = 'text'|'integer'| 'checkbox'| 'date'| 'textarea'| 'select'| 'float'| 'richtext'| 'image'