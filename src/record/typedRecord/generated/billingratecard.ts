// This file is auto generated, do not edit it. 




/** 
 * Billing Rate Card Fields Definition.
 * Record's Internal Id: billingratecard. 
 * Supports Custom Fields: true 
 */
export interface billingratecardFields {
/**  */
  externalid?: string;
  /**  */
  isinactive?: boolean;
  /**  */
  name: string;
}





/** 
 * Billing Rate Card Sublists Definition.
 * Record's Internal Id: billingratecard. 
 * Supports Custom Fields: true 
 */
export interface billingratecardSublists {
  
  /** ratecardpricing: Pricing */
  ratecardpricing: {
    /** billingclassid - Billing Class  */
    billingclassid: number;
    /** price - Price  */
    price: string;
    /** saleunit - Sale Unit  */
    saleunit: string;
    /** unitstype - Units Type  */
    unitstype: string;
  }

  /** ratecardpricingmulti: Pricing */
  ratecardpricingmulti: {
    /** billingclassid - Billing Class  */
    billingclassid: number;
    /** saleunit - Sale Unit  */
    saleunit: string;
    /** unitstype - Units Type  */
    unitstype: string;
  }
}





