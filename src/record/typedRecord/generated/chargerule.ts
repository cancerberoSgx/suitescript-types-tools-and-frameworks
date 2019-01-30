// This file is auto generated, do not edit it. 




/** 
 * Charge Rule Fields Definition.
 * Record's Internal Id: chargerule. 
 * Supports Custom Fields: true 
 */
export interface chargeruleFields {
/**  */
  amount: string;
  /**  */
  billingitem: string;
  /**  */
  caphours?: string;
  /**  */
  capmoney?: string;
  /**  */
  captype?: string;
  /**  */
  chargeruletype: string;
  /**  */
  customform: string;
  /**  */
  description?: string;
  /**  */
  endbydate?: Date;
  /**  */
  expamtmultiplier?: string;
  /**  */
  externalid?: string;
  /**  */
  frequency?: string;
  /**  */
  isinactive?: boolean;
  /**  */
  name: string;
  /**  */
  noenddate?: boolean;
  /**  */
  project: string;
  /**  */
  projecttask: string;
  /**  */
  ratemultiplier?: string;
  /**  */
  rateroundingtype?: string;
  /**  */
  ratesourcetype: string;
  /**  */
  ruleorder: string;
  /**  */
  saleunit?: string;
  /**  */
  savedsearch?: number;
  /**  */
  scheduledate?: Date;
  /**  */
  seriesstartdate?: Date;
  /**  */
  stage: string;
  /**  */
  stopifcapped?: boolean;
  /**  */
  unitstype?: string;
}





/** 
 * Charge Rule Sublists Definition.
 * Record's Internal Id: chargerule. 
 * Supports Custom Fields: true 
 */
export interface chargeruleSublists {
  
  /** resourcerateoverride: Resources */
  resourcerateoverride: {
    /** name - Name  */
    name?: string;
    /** rate - Rate  */
    rate?: string;
  }
}





