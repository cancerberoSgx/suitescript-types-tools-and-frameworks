// This file is auto generated, do not edit it. 




/** 
 * Percent Complete Project Revenue Rule Fields Definition.
 * Record's Internal Id: pctcompleteprojectrevenuerule. 
 * Supports Custom Fields: true 
 */
export interface pctcompleteprojectrevenueruleFields {
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
  revenuereconciled?: boolean;
  /**  */
  serviceitem: string;
}





/** 
 * Percent Complete Project Revenue Rule Sublists Definition.
 * Record's Internal Id: pctcompleteprojectrevenuerule. 
 * Supports Custom Fields: true 
 */
export interface pctcompleteprojectrevenueruleSublists {
  
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
}





