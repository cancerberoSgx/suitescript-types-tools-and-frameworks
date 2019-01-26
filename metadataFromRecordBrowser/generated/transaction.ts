// This file is auto generated, do not edit it. 

import { TypedRecord, TypedRecordImpl } from '../typedRecord';
import { Record } from 'N/record';




/** 
 * Transaction Fields Definition.
 * Record's Internal Id: transaction. 
 * Supports Custom Fields: true 
 */
export interface transactionFields {

}

export class transactionFieldsImpl implements transactionFields {
  constructor(protected typedRecord: TypedRecord){ 
  }
  
}


/** 
 * Transaction Record Definition.
 * Record's Internal Id: transaction. 
 * Supports Custom Fields: true 
 */
export interface transactionRecord extends TypedRecord<transactionFields> {

}

export class transactionRecordImpl extends TypedRecordImpl<transactionFields> implements transactionRecord {
  constructor(public nsRecord: Record) {
    super(nsRecord)
    this._fields = new transactionFieldsImpl(this);
    // this._sublists = transactionnew FieldsImpl(this)
  }
}


