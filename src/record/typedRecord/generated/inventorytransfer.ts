// This file is auto generated, do not edit it. 




/** 
 * Inventory Transfer Fields Definition.
 * Record's Internal Id: inventorytransfer. 
 * Supports Custom Fields: true 
 */
export interface inventorytransferFields {
/** Select a class to associate with this transaction.

To create a new class, select New.

For details on existing classes, go to <_TABNAME=LIST_CLASS_> > <_TASKCATEGORY=LIST_CLASS_> > Classes. */
  class?: string;
  /**  */
  createddate?: Date;
  /** Select a department to associate with this transaction.

To create a new department, select New.

For details on existing departments, go to <_TABNAME=LIST_DEPARTMENT_> > <_TASKCATEGORY=LIST_DEPARTMENT_> > Departments. */
  department?: string;
  /**  */
  externalid?: string;
  /**  */
  lastmodifieddate?: Date;
  /** Select the location you want to remove the item from.

The inventory at this location is reduced.

For details on existing locations, go to <_TABNAME=LIST_LOCATION_> > <_TASKCATEGORY=LIST_LOCATION_> > Locations. */
  location: string;
  /** Enter a memo to identify this inventory transfer.

When you search for transactions, you can search for specific words and phrases in the Memo field. */
  memo?: string;
  /** Select the period you want to post this inventory transfer to.

If a period is closed, you cannot post to that period. */
  postingperiod?: string;
  /**  */
  subsidiary: string;
  /**  */
  total?: number;
  /** The current date autofills for this inventory transfer.

You can select or enter a different date. */
  trandate: Date;
  /** Enter a reference number to identify this inventory transfer. */
  tranid?: string;
  /** Select the location you want to add the item to.

The inventory at this location is increased.

For details on existing locations, go to <_TABNAME=LIST_LOCATION_> > <_TASKCATEGORY=LIST_LOCATION_> > Locations. */
  transferlocation: string;
}





/** 
 * Inventory Transfer Sublists Definition.
 * Record's Internal Id: inventorytransfer. 
 * Supports Custom Fields: true 
 */
export interface inventorytransferSublists {
  
  /** inventory: Adjustments */
  inventory: {
    /** adjustqtyby - Qty to Transfer  */
    adjustqtyby: string;
    /** description - Description  */
    description: string;
    /** inventorydetail - Inventory Detail  */
    inventorydetail: string;
    /** item - Item  */
    item?: string;
    /** line -   */
    line: string;
    /** quantityonhand - Qty On Hand  */
    quantityonhand: number;
    /** units - Units  */
    units: string;
  }
}





