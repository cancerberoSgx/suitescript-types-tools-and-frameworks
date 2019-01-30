// This file is auto generated, do not edit it. 




/** 
 * Labor Based Project Revenue Rule Fields Definition.
 * Record's Internal Id: laborbasedprojectrevenuerule. 
 * Supports Custom Fields: true 
 */
export interface laborbasedprojectrevenueruleFields {
/**  */
  customform: string;
  /**  */
  description?: string;
  /**  */
  externalid?: string;
  /**  */
  isinactive?: boolean;
  /**  */
  name: string;
  /**  */
  project?: string;
  /**  */
  ratemultiplier?: string;
  /**  */
  rateroundingtype?: string;
  /**  */
  ratesourcetype: string;
  /**  */
  revenuereconciled?: boolean;
  /**  */
  savedsearch?: number;
  /**  */
  serviceitem: string;
}





/** 
 * Labor Based Project Revenue Rule Sublists Definition.
 * Record's Internal Id: laborbasedprojectrevenuerule. 
 * Supports Custom Fields: true 
 */
export interface laborbasedprojectrevenueruleSublists {
  
  /** chargerule: Charge Rules */
  chargerule: {
    /** actualamount - Amount  */
    actualamount: number;
    /** billingitem - Billing Item  */
    billingitem: string;
    /** chargerule - Name  */
    chargerule?: string;
    /** description - Description  */
    description: string;
    /** forecastamount - Amount  */
    forecastamount: number;
    /** ruletype - Type  */
    ruletype: string;
  }

  /** resourcerateoverride: Resources */
  resourcerateoverride: {
    /** rate - Rate  */
    rate?: string;
    /** rsrc - Name  */
    rsrc?: string;
  }
}





