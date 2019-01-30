// This file is auto generated, do not edit it. 




/** 
 * Revenue Recognition Plan Fields Definition.
 * Record's Internal Id: revenueplan. 
 * Supports Custom Fields: true 
 */
export interface revenueplanFields {
/**  */
  amount?: number;
  /**  */
  amountsource?: string;
  /**  */
  catchupperiod?: string;
  /**  */
  comments?: string;
  /**  */
  createdfrom?: string;
  /**  */
  enddatechangeimpact?: string;
  /**  */
  exchangerate?: number;
  /**  */
  holdrevenuerecognition?: boolean;
  /**  */
  initialamount?: number;
  /**  */
  item?: string;
  /**  */
  parentlinecurrency?: string;
  /**  */
  periodoffset?: string;
  /**  */
  recognitionmethod?: string;
  /**  */
  recognitionperiod?: number;
  /**  */
  recordnumber?: string;
  /**  */
  remainingdeferredbalance?: number;
  /**  */
  revenueplancurrency?: string;
  /**  */
  revenueplantype?: string;
  /**  */
  revenuerecognitionrule?: string;
  /**  */
  revrecenddate: Date;
  /**  */
  revrecenddatesource?: string;
  /**  */
  revrecstartdate: Date;
  /**  */
  revrecstartdatesource?: string;
  /**  */
  startoffset?: string;
  /**  */
  status?: string;
  /**  */
  terminmonths?: number;
  /**  */
  totalrecognized?: number;
}





/** 
 * Revenue Recognition Plan Sublists Definition.
 * Record's Internal Id: revenueplan. 
 * Supports Custom Fields: true 
 */
export interface revenueplanSublists {
  
  /** plannedrevenue: Planned Revenue */
  plannedrevenue: {
    /** amount - Amount  */
    amount?: number;
    /** dateexecuted - Date Executed  */
    dateexecuted: Date;
    /** deferredrevenueaccount - Deferral Account  */
    deferredrevenueaccount: string;
    /** isrecognized - Is Recognized  */
    isrecognized: boolean;
    /** journal - Journal  */
    journal: string;
    /** percentrecognizedinperiod - % Recognized in Period  */
    percentrecognizedinperiod: number;
    /** percenttotalrecognized - % Total Recognized  */
    percenttotalrecognized: number;
    /** plannedperiod - Planned Period  */
    plannedperiod?: string;
    /** plannedrevenue - Planned Revenue  */
    plannedrevenue: string;
    /** postingperiod - Posting Period  */
    postingperiod: string;
    /** recognitionaccount - Recognition Account  */
    recognitionaccount: string;
  }
}





