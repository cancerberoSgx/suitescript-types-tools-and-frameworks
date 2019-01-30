// This file is auto generated, do not edit it. 




/** 
 * Amortization Schedule Fields Definition.
 * Record's Internal Id: amortizationschedule. 
 * Supports Custom Fields: true 
 */
export interface amortizationscheduleFields {
/**  */
  accountingbook?: string;
  /**  */
  amortizationtype?: string;
  /**  */
  enddate?: Date;
  /**  */
  externalid?: string;
  /**  */
  initialamount?: string;
  /**  */
  isinactive?: boolean;
  /**  */
  job?: string;
  /**  */
  name: string;
  /**  */
  parentSched?: string;
  /**  */
  periodoffset: number;
  /**  */
  recogintervalsrc?: string;
  /**  */
  recurrencetype?: string;
  /**  */
  remainingdeferredbalance?: number;
  /**  */
  residual?: string;
  /**  */
  revrecoffset: number;
  /**  */
  schedulenumber?: string;
  /**  */
  sourcetran?: string;
  /**  */
  startdate?: Date;
  /**  */
  status?: string;
  /**  */
  totalamortized?: number;
  /**  */
  totalamount?: number;
}





/** 
 * Amortization Schedule Sublists Definition.
 * Record's Internal Id: amortizationschedule. 
 * Supports Custom Fields: true 
 */
export interface amortizationscheduleSublists {
  
  /** recurrence: Custom Recurrence Pattern */
  recurrence: {
    /** defrevaccount - Account  */
    defrevaccount: string;
    /** id -   */
    id: number;
    /** incomeaccount -   */
    incomeaccount: string;
    /** isrecognized - Is Recognized  */
    isrecognized: boolean;
    /** jdate - Date Executed  */
    jdate: Date;
    /** journal - Journal  */
    journal: string;
    /** periodoffset - Period Offset  */
    periodoffset?: number;
    /** postingperiod -   */
    postingperiod: string;
    /** recamount - Amount  */
    recamount?: string;
    /** recurdate - Date  */
    recurdate: Date;
  }
}





