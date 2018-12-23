import { RecordId } from './RecordRef';

export type DefaultSublistLineType = {}
interface DefaultFieldTypes {
}
export interface FieldTypes {
  // common record fields getters
  id: RecordId
  externalId: string
}


export interface CustomRecordFieldTypes extends FieldTypes{
  // TODO: common fields for CRs
  }

export type FieldId = string