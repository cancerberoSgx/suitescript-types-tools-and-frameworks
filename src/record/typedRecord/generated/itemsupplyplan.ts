// This file is auto generated, do not edit it. 




/** 
 * Item Supply Plan Fields Definition.
 * Record's Internal Id: itemsupplyplan. 
 * Supports Custom Fields: true 
 */
export interface itemsupplyplanFields {
/**  */
  customform?: string;
  /**  */
  externalid?: string;
  /** Select the item to create a supply plan for. */
  item: string;
  /** If you use the Multi-Location Inventory feature, select a location. Then, the list of items that shows is filtered to show only items for the selected location that are time-phased replenishment items.TEST */
  location: string;
  /** Optionally enter a memo. You can later search for this plan using this text. */
  memo?: string;
  /** If you use NetSuite OneWorld, select a Subsidiary. */
  subsidiary: string;
  /** Select a Unit of Measure to create a supply plan based on the unit. */
  units?: string;
}





/** 
 * Item Supply Plan Sublists Definition.
 * Record's Internal Id: itemsupplyplan. 
 * Supports Custom Fields: true 
 */
export interface itemsupplyplanSublists {
  
  /** order: Orders */
  order: {
    /** orderdate - Order Date  */
    orderdate?: Date;
    /** ordertype - Order Type  */
    ordertype?: string;
    /** quantity - Quantity  */
    quantity?: string;
    /** receiptdate - Receipt Date  */
    receiptdate?: Date;
    /** sourcelocation - Source Location  */
    sourcelocation: string;
  }
}





