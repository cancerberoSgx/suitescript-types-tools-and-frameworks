// This file is auto generated, do not edit it. 




/** 
 * Inventory Number Fields Definition.
 * Record's Internal Id: inventorynumber. 
 * Supports Custom Fields: true 
 */
export interface inventorynumberFields {
/**  */
  expirationdate?: Date;
  /**  */
  externalid?: string;
  /**  */
  inventorynumber?: string;
  /** Optionally enter a memo. Later, you can search for the text you enter in this field. */
  memo?: string;
  /**  */
  status?: string;
  /**  */
  units?: string;
}





/** 
 * Inventory Number Sublists Definition.
 * Record's Internal Id: inventorynumber. 
 * Supports Custom Fields: true 
 */
export interface inventorynumberSublists {
  
  /** locations:  */
  locations: {
    /** location - Location  */
    location: string;
    /** quantityavailable - Available  */
    quantityavailable: number;
    /** quantityintranist - In Transit  */
    quantityintranist: number;
    /** quantityonhand - On Hand  */
    quantityonhand: number;
    /** quantityonorder - On Order  */
    quantityonorder: number;
  }
}





