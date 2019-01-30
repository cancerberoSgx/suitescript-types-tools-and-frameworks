// This file is auto generated, do not edit it. 




/** 
 * Reallocate Items Fields Definition.
 * Record's Internal Id: reallocateitem. 
 * Supports Custom Fields: false 
 */
export interface reallocateitemFields {
/**  */
  externalid?: string;
  /**  */
  item: string;
  /**  */
  location: string;
  /**  */
  quantitycommitted?: number;
  /**  */
  quantityonhand?: number;
  /**  */
  quantitypicked?: number;
  /**  */
  quantityrequired?: number;
  /**  */
  units?: string;
}





/** 
 * Reallocate Items Sublists Definition.
 * Record's Internal Id: reallocateitem. 
 * Supports Custom Fields: false 
 */
export interface reallocateitemSublists {
  
  /** order: Orders */
  order: {
    /** commit - Commit  */
    commit: boolean;
    /** numberedquantityremaining - Numbered Quantity Remaining  */
    numberedquantityremaining: number;
    /** quantitycommitted - Quantity Committed  */
    quantitycommitted: string;
    /** quantitypicked - Quantity Picked  */
    quantitypicked: number;
    /** quantityremaining - Quantity Remaining  */
    quantityremaining: number;
  }
}





