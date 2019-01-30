// This file is auto generated, do not edit it. 




/** 
 * Period End Journal Fields Definition.
 * Record's Internal Id: periodendjournal. 
 * Supports Custom Fields: false 
 */
export interface periodendjournalFields {
/**  */
  accountingbook: string;
  /**  */
  class?: string;
  /**  */
  createddate?: Date;
  /**  */
  credittotal?: number;
  /**  */
  currency?: string;
  /**  */
  customform: string;
  /**  */
  debittotal?: number;
  /**  */
  department?: string;
  /**  */
  externalid?: string;
  /**  */
  lastmodifieddate?: Date;
  /**  */
  location?: string;
  /**  */
  mainaccount: string;
  /**  */
  memo?: string;
  /**  */
  postingperiod?: string;
  /**  */
  sourcesubsidiary: string;
  /**  */
  subsidiary: string;
  /**  */
  trandate: Date;
  /**  */
  tranid?: string;
  /**  */
  transactionnumber?: string;
}





/** 
 * Period End Journal Sublists Definition.
 * Record's Internal Id: periodendjournal. 
 * Supports Custom Fields: false 
 */
export interface periodendjournalSublists {
  
  /** line: Lines */
  line: {
    /** account - Account  */
    account?: string;
    /** credit - Credit  */
    credit: number;
    /** debit - Debit  */
    debit: number;
    /** line -   */
    line: number;
    /** memo - Memo  */
    memo: string;
  }
}





