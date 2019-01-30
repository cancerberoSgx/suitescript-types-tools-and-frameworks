// This file is auto generated, do not edit it. 




/** 
 * Inventory Detail Fields Definition.
 * Record's Internal Id: inventorydetail. 
 * Supports Custom Fields: false 
 */
export interface inventorydetailFields {
/**  */
  customform?: string;
  /**  */
  externalid?: string;
  /**  */
  item?: string;
  /**  */
  itemdescription?: string;
  /**  */
  location?: string;
  /**  */
  quantity?: number;
  /**  */
  tolocation?: string;
  /**  */
  unit?: string;
}





/** 
 * Inventory Detail Sublists Definition.
 * Record's Internal Id: inventorydetail. 
 * Supports Custom Fields: false 
 */
export interface inventorydetailSublists {
  
  /** inventoryassignment: Inventory Detail */
  inventoryassignment: {
    /** binnumber - Bin  */
    binnumber?: string;
    /** expirationdate - Expiration Date  */
    expirationdate: Date;
    /** internalid -   */
    internalid: number;
    /** inventorydetail -   */
    inventorydetail: number;
    /** inventorystatus - Status  */
    inventorystatus?: string;
    /** issueinventorynumber - Serial/Lot Number  */
    issueinventorynumber?: string;
    /** quantity - Quantity  */
    quantity?: number;
    /** quantityavailable - Available  */
    quantityavailable: string;
    /** tobinnumber - Bin  */
    tobinnumber?: string;
    /** toinventorystatus - Status  */
    toinventorystatus?: string;
  }
}





