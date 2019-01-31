// This file is auto generated, do not edit it. 




/** 
 * Global Inventory Relationship Fields Definition.
 * Record's Internal Id: globalinventoryrelationship. 
 * Supports Custom Fields: true 
 */
export interface globalinventoryrelationshipFields {
/**  */
  alllocationscustomerreturn?: boolean;
  /**  */
  alllocationsfulfillment?: boolean;
  /**  */
  allowcrosssubcustomerreturn?: boolean;
  /**  */
  allowcrosssubfulfillment?: boolean;
  /**  */
  customform?: string;
  /**  */
  externalid?: string;
  /**  */
  inventorysubsidiary: string;
  /**  */
  originatingsubsidiary: string;
}





/** 
 * Global Inventory Relationship Sublists Definition.
 * Record's Internal Id: globalinventoryrelationship. 
 * Supports Custom Fields: true 
 */
export interface globalinventoryrelationshipSublists {
  
  /** customerreturn: Customer Return */
  customerreturn: {
    /** city - City  */
    city: string;
    /** country - Country  */
    country: string;
    /** inventorylocation - Inventory Location  */
    inventorylocation: string;
    /** state - State  */
    state: string;
  }

  /** fulfillment: Fulfillment */
  fulfillment: {
    /** city - City  */
    city: string;
    /** country - Country  */
    country: string;
    /** inventorylocation - Inventory Location  */
    inventorylocation: string;
    /** state - State  */
    state: string;
  }
}





