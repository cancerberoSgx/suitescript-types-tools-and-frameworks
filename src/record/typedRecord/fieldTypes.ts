import { RecordId } from '../recordRef';
import { TypedMap, EmptyObject } from '../../misc/misc';


// Approach 2 : code generation from 



// Approach 1: Use TypedMap so user perform record.fields.get('foo') and is typed
export interface Fields<PropTypes extends CommonFields = CommonFields> extends TypedMap<PropTypes> {

}
class FieldsImpl<PropTypes extends EmptyObject> implements Fields<PropTypes> {
  get<T extends Extract<keyof PropTypes, string>>(name: T): PropTypes[T] {
    throw new Error('Method not implemented.');
  }  set<T extends Extract<keyof PropTypes, string>>(name: T, value: PropTypes[T]): void {
    throw new Error('Method not implemented.');
  }


}

interface CommonFields{
  // common record fields getters
  id: RecordId
  externalId: string
  // description: string
  isinactive: boolean
  created: Date 
  lastmodified: Date
  type: string
}