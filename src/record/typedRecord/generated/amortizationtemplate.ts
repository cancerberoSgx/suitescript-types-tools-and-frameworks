// This file is auto generated, do not edit it. 




/** 
 * Amortization Template Fields Definition.
 * Record's Internal Id: amortizationtemplate. 
 * Supports Custom Fields: true 
 */
export interface amortizationtemplateFields {
/**  */
  acctcontra?: string;
  /**  */
  acctdeferral?: string;
  /**  */
  accttarget?: string;
  /**  */
  amortizationperiod?: number;
  /**  */
  amortizationtype?: string;
  /**  */
  externalid?: string;
  /**  */
  initialamount?: string;
  /**  */
  isinactive?: boolean;
  /**  */
  name: string;
  /**  */
  periodoffset: number;
  /**  */
  recogintervalsrc?: string;
  /**  */
  recurrencetype?: string;
  /**  */
  residual?: string;
  /**  */
  revrecoffset: number;
  /**  */
  totalamount?: number;
}





/** 
 * Amortization Template Sublists Definition.
 * Record's Internal Id: amortizationtemplate. 
 * Supports Custom Fields: true 
 */
export interface amortizationtemplateSublists {
  
  /** recurrence: Custom Recurrence Pattern */
  recurrence: {
    /** defrevaccount - Account  */
    defrevaccount: string;
    /** incomeaccount -   */
    incomeaccount: string;
    /** periodoffset - Period Offset  */
    periodoffset?: number;
    /** postingperiod -   */
    postingperiod: string;
    /** recamount - Amount  */
    recamount?: string;
  }
}





