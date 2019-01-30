// This file is auto generated, do not edit it. 




/** 
 * Tax Period Fields Definition.
 * Record's Internal Id: taxperiod. 
 * Supports Custom Fields: true 
 */
export interface taxperiodFields {
/**  */
  allclosed?: boolean;
  /**  */
  enddate: Date;
  /**  */
  externalid?: string;
  /**  */
  isadjust?: boolean;
  /**  */
  isquarter?: boolean;
  /**  */
  isyear?: boolean;
  /**  */
  periodname: string;
  /**  */
  startdate: Date;
}





/** 
 * Tax Period Sublists Definition.
 * Record's Internal Id: taxperiod. 
 * Supports Custom Fields: true 
 */
export interface taxperiodSublists {
  
  /** fiscalcalendars: Parent Periods */
  fiscalcalendars: {
    /** fiscalcalendar - Fiscal Calendar  */
    fiscalcalendar: string;
    /** parent - Sub-period of  */
    parent: string;
  }
}





