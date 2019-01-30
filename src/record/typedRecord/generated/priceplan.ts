// This file is auto generated, do not edit it. 




/** 
 * Price Plan Fields Definition.
 * Record's Internal Id: priceplan. 
 * Supports Custom Fields: true 
 */
export interface priceplanFields {
/**  */
  currency?: string;
  /**  */
  externalid?: string;
  /**  */
  id?: number;
  /**  */
  internalid?: number;
  /**  */
  priceplantype: string;
}





/** 
 * Price Plan Sublists Definition.
 * Record's Internal Id: priceplan. 
 * Supports Custom Fields: true 
 */
export interface priceplanSublists {
  
  /** pricetiers: Price Plan Price Tiers */
  pricetiers: {
    /** fromval - Above Quantity  */
    fromval?: number;
    /** lineid - Line Id  */
    lineid: number;
    /** priceplan - Price Plan  */
    priceplan: string;
    /** pricetier - Tiers  */
    pricetier: string;
    /** pricingoption - Pricing Option  */
    pricingoption?: string;
    /** value - Value  */
    value?: number;
  }
}





