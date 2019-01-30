// This file is auto generated, do not edit it. 




/** 
 * Inventory Adjustment Fields Definition.
 * Record's Internal Id: inventoryadjustment. 
 * Supports Custom Fields: true 
 */
export interface inventoryadjustmentFields {
/** Select the appropriate account for inventory adjustments. Usually, this will be an expense account.

For details on accounts, go to <_TABNAME=LIST_ACCOUNT_> > <_TASKCATEGORY=LIST_ACCOUNT_> > Chart of Accounts. */
  account: string;
  /** To select the location to associate with this adjustment transaction:

   1. Select New to enter a new location.
   2. Go to <_TABNAME=LIST_LOCATION_> > <_TASKCATEGORY=LIST_LOCATION_> > Locations for information on existing locations.

Note: You can select locations for items on the Adjustments subtab. */
  adjlocation?: string;
  /** Select a class to associate with this transaction.

To create a new class, select New.

For details on existing classes, go to <_TABNAME=LIST_CLASS_> > <_TASKCATEGORY=LIST_CLASS_> > Classes. */
  class?: string;
  /**  */
  createddate?: Date;
  /** If this inventory adjustment is a project-related cost but is not specifically billed as a line item, select the appropriate customer or project.
For example, when a caterer bills his or her customers a per person rate for a beer and wine bar, they can then enter an inventory adjustment to account for the actual number of bottles consumed. */
  customer?: string;
  /**  */
  customform: string;
  /** Select a department to associate with this transaction.

To create a new department, select New.

For details on existing departments, go to <_TABNAME=LIST_DEPARTMENT_> > <_TASKCATEGORY=LIST_DEPARTMENT_> > Departments. */
  department?: string;
  /** This is the total value of the change in your inventory.

When you submit the adjustment, the current cost is determined from your inventory database and your adjustment totals are updated. */
  estimatedtotalvalue?: number;
  /**  */
  externalid?: string;
  /**  */
  lastmodifieddate?: Date;
  /** Enter an optional memo for this adjustment. It will appear on a register or Account Detail report. */
  memo?: string;
  /** Select the period you want to post this inventory adjustment to.

If a period is closed, you cannot post to that period. */
  postingperiod?: string;
  /** If you have a NetSuite OneWorld account, select a Subsidiary from the list. */
  subsidiary: string;
  /** Today's date autofills as the date of this inventory adjustment.

You can enter or choose another date. */
  trandate: Date;
  /** Enter an optional reference number for this inventory adjustment.

Reference Numbers for inventory adjustments do not have to be consecutive.

You can enter a maximum of 45 characters in this field. */
  tranid?: string;
}





/** 
 * Inventory Adjustment Sublists Definition.
 * Record's Internal Id: inventoryadjustment. 
 * Supports Custom Fields: true 
 */
export interface inventoryadjustmentSublists {
  
  /** accountingbookdetail: Accounting Books */
  accountingbookdetail: {
    /** accountingbook - Secondary Book  */
    accountingbook: string;
    /** exchangerate - Exchange Rate  */
    exchangerate?: number;
  }

  /** inventory: Adjustments */
  inventory: {
    /** adjustqtyby - Adjust Qty. By  */
    adjustqtyby?: number;
    /** class - Class  */
    class: string;
    /** costingmethod -   */
    costingmethod: string;
    /** currency -   */
    currency: string;
    /** currentvalue - Current Value  */
    currentvalue: number;
    /** department - Department  */
    department: string;
    /** description - Description  */
    description: string;
    /** exchangerate -   */
    exchangerate: number;
    /** inventorydetail - Inventory Detail  */
    inventorydetail: string;
    /** item - Item  */
    item?: string;
    /** label - Exchange Rate  */
    label: string;
    /** labelcurrency - Currency  */
    labelcurrency: string;
    /** labelfxunitcost - Unit Cost in Foreign Currency  */
    labelfxunitcost: string;
    /** line -   */
    line: string;
    /** location - Location  */
    location?: string;
    /** memo - Memo  */
    memo: string;
    /** newquantity - New Quantity  */
    newquantity: number;
    /** quantityonhand - Qty. On Hand  */
    quantityonhand: number;
    /** unitcost - Est. Unit Cost  */
    unitcost: number;
    /** units - Units  */
    units: string;
  }
}





