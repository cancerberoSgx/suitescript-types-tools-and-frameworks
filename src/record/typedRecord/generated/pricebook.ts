// This file is auto generated, do not edit it. 




/** 
 * Price Book Fields Definition.
 * Record's Internal Id: pricebook. 
 * Supports Custom Fields: true 
 */
export interface pricebookFields {
/**  */
  currency: string;
  /**  */
  externalid?: string;
  /**  */
  id?: number;
  /**  */
  internalid?: number;
  /**  */
  name: string;
  /**  */
  subscriptionplan?: string;
}





/** 
 * Price Book Sublists Definition.
 * Record's Internal Id: pricebook. 
 * Supports Custom Fields: true 
 */
export interface pricebookSublists {
  
  /** priceinterval: Price Book Lines */
  priceinterval: {
    /** chargetype - Subscription Line Type  */
    chargetype: string;
    /** discount - Discount  */
    discount: number;
    /** frequency - Charge Frequency  */
    frequency?: string;
    /** isrequired - Required  */
    isrequired: boolean;
    /** item - Item  */
    item: string;
    /** linenumber - Line Number  */
    linenumber: number;
    /** multiplierline - Included Quantity Multiplier  */
    multiplierline: string;
    /** price - Price  */
    price: string;
    /** priceplan - Price Plan  */
    priceplan?: string;
    /** repeatevery - Repeat Every  */
    repeatevery?: string;
    /** startoffsetunit - Interval  */
    startoffsetunit?: string;
    /** startoffsetvalue - Start On  */
    startoffsetvalue?: number;
    /** subscriptionplanline - Subscription Plan Line  */
    subscriptionplanline: number;
  }
}





