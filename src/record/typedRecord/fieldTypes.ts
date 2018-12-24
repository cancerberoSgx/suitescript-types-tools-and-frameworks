import { RecordId } from '../recordRef';
import { NSBoolean, NSDate, NSRecordType } from '../../nstypes';

interface DefaultFieldTypes {
}
export interface FieldTypes {
  // common record fields getters
  id: RecordId
  externalId: string
  description: string
  isinactive: NSBoolean
  created: NSDate  //TODO: could se use Date instead of strings ?
  type: NSRecordType
}


export interface CustomRecordFieldTypes extends FieldTypes{
  // TODO: common fields for CRs
  }

export type FieldId = string