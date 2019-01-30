// This file is auto generated, do not edit it. 




/** 
 * Bin Worksheet Fields Definition.
 * Record's Internal Id: binworksheet. 
 * Supports Custom Fields: true 
 */
export interface binworksheetFields {
/**  */
  createddate?: Date;
  /**  */
  externalid?: string;
  /**  */
  lastmodifieddate?: Date;
  /** Select a Location to display only work orders for that location.
Select All to display work orders for all locations.

If you use Multi-Location Inventory, the selected location is the one that component inventory items are committed from. */
  location: string;
  /** Enter any comment about why you are deleting this transaction.

If you selected the standard deletion reason, Other, you must provide a comment in this field. */
  memo?: string;
  /**  */
  subsidiary: string;
  /** NetSuite inserts today's Date as the date of this transaction.
You can enter another date. */
  trandate: Date;
}





/** 
 * Bin Worksheet Sublists Definition.
 * Record's Internal Id: binworksheet. 
 * Supports Custom Fields: true 
 */
export interface binworksheetSublists {
  
  /** item: Items */
  item: {
    /** description - Description  */
    description: string;
    /** inventorydetail - Inventory Detail  */
    inventorydetail: string;
    /** item - Item  */
    item: string;
    /** itemname - Item  */
    itemname: string;
    /** itemonhand - Total  */
    itemonhand: number;
    /** line -   */
    line: string;
    /** quantity - Quantity  */
    quantity: string;
  }
}





