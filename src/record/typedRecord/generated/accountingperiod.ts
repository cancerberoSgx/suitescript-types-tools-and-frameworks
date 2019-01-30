// This file is auto generated, do not edit it. 




/** 
 * Accounting Period Fields Definition.
 * Record's Internal Id: accountingperiod. 
 * Supports Custom Fields: true 
 */
export interface accountingperiodFields {
/**  */
  alllocked?: boolean;
  /** Check this box to allow users with the Allow Non-G/L Changes permission to enter non-posting transactions to this period after it has been closed.

Users who do not have the Allow Non-G/L Changes permission cannot enter non-posting transactions to a period even if the Allow Non-G/L Changes option for a period is checked. */
  allownonglchanges?: boolean;
  /**  */
  aplocked?: boolean;
  /**  */
  arlocked?: boolean;
  /**  */
  closed?: boolean;
  /**  */
  closedondate?: Date;
  /** Enter or pick this period's end date here.

This is a required field. */
  enddate: Date;
  /** Select the fiscal calendar for the accounting year. */
  fiscalcalendar: string;
  /** Check this box if this period is an adjustment period to adjust the difference between 365 days in a calendar year and 364 days in a fiscal year that consists of 52 weeks x 7 days per week. */
  isadjust?: boolean;
  /**  */
  isinactive?: boolean;
  /**  */
  isposting?: boolean;
  /** Check this box if this period is a quarter. */
  isquarter?: boolean;
  /** Check this box if this period is a year. */
  isyear?: boolean;
  /** Select the appropriate parent period if one exists.

For example, you are setting up your periods for 2002 and you've created a period called Year 2002. When you create your first quarter, you would select Year 2002 in the Sub-period of field as the parent period of this quarter. */
  parent: string;
  /**  */
  payrolllocked?: boolean;
  /** The name of the selected period. You can enter this name when you first set up the period.

If you accessed the page from Transactions > Management > GL Audit Numbering > Setup, you can select the open period.

This is a required field. */
  periodname: string;
  /** Enter or pick the date this period starts here.

This is a required field. */
  startdate: Date;
}





/** 
 * Accounting Period Sublists Definition.
 * Record's Internal Id: accountingperiod. 
 * Supports Custom Fields: true 
 */
export interface accountingperiodSublists {
  
  /** fiscalcalendars: Parent Periods */
  fiscalcalendars: {
    /** fiscalcalendar - Fiscal Calendar  */
    fiscalcalendar: string;
    /** parent - Sub-period of  */
    parent: string;
  }
}





