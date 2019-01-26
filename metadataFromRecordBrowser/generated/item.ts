// This file is auto generated, do not edit it. 

import { TypedRecord, TypedRecordImpl } from '../typedRecord';
import { Record } from 'N/record';




/** 
 * Item Fields Definition.
 * Record's Internal Id: item. 
 * Supports Custom Fields: true 
 */
export interface itemFields {

}

export class itemFieldsImpl implements itemFields {
  constructor(protected typedRecord: TypedRecord){ 
  }
  
}


/** 
 * Item Record Definition.
 * Record's Internal Id: item. 
 * Supports Custom Fields: true 
 */
export interface itemRecord extends TypedRecord<itemFields> {

}

export class itemRecordImpl extends TypedRecordImpl<itemFields> implements itemRecord {
  constructor(public nsRecord: Record) {
    super(nsRecord)
    this._fields = new itemFieldsImpl(this);
    // this._sublists = itemnew FieldsImpl(this)
  }
}


