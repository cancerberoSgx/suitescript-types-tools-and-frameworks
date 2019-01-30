// This file is auto generated, do not edit it. 




/** 
 * Assembly Build Fields Definition.
 * Record's Internal Id: assemblybuild. 
 * Supports Custom Fields: true 
 */
export interface assemblybuildFields {
/** Select the Bill of Materials (BOM) you want to associate with this assembly. */
  billofmaterials?: string;
  /** Select the BOM Revision you want to associate with this assembly. */
  billofmaterialsrevision?: string;
  /** When you select an assembly item, the maximum number that you can build appears in the Buildable Quantity field.

If you use locations, the quantity for the selected location is displayed in the Buildable Quantity field. */
  buildable?: number;
  /** Select a class for this transaction.

To create a new class, select New.

For details on existing classes, go to <_TABNAME=LIST_CLASS_> > <_TASKCATEGORY=LIST_CLASS_> > Classes. */
  class?: string;
  /**  */
  createddate?: Date;
  /**  */
  customform: string;
  /** Select the department that applies to this assembly item.

To create a new department, select New.

For details on existing departments, go to <_TABNAME=LIST_DEPARTMENT_> > <_TASKCATEGORY=LIST_DEPARTMENT_> > Departments. */
  department?: string;
  /**  */
  externalid?: string;
  /** Click the Inventory Detail icon to filter the bins list, choose a bin, and enter a quantity. */
  inventorydetail?: string;
  /** Select the Assembly item you want to build.
You can enter an assembly build only for assembly items on record.

To learn more, see Creating Item Records. */
  item: string;
  /**  */
  lastmodifieddate?: Date;
  /** Select a location for the built assembly items.

Raw materials are taken from the inventory at this location. The built assembly items are added to the inventory at this location.

To create a new location, select New.

For details on existing locations, go to <_TABNAME=LIST_LOCATION_> > <_TASKCATEGORY=LIST_LOCATION_> > Locations. */
  location: string;
  /** Optionally enter a Memo.
You can search for this text later to find this entry. */
  memo?: string;
  /** If you use accounting periods, select a transaction Posting Period. */
  postingperiod?: string;
  /** In the Quantity to Build field, enter the number of assembly items you want to build.
You cannot enter a quantity that exceeds the amount displayed in the Buildable Quantity field. */
  quantity: string;
  /** Select the revision of the assembly build to use. The effective date shown on the revision record you select determines when this item is included as a member for an assembly. */
  revision?: string;
  /**  */
  revisionmemo?: string;
  /**  */
  subsidiary: string;
  /** NetSuite calculates the Projected Value of this transaction.
Projected value for the new assembly items is the total value of the parts times the quantity being built. */
  total?: number;
  /** Accept today's Date or enter another transaction date. */
  trandate: Date;
  /** The Reference # field displays a system generated number.
You can enter a different reference number to track this transaction. */
  tranid?: string;
  /** If the assembly you select uses Units of Measure, the base units are displayed in the Units field. */
  units?: string;
}





/** 
 * Assembly Build Sublists Definition.
 * Record's Internal Id: assemblybuild. 
 * Supports Custom Fields: true 
 */
export interface assemblybuildSublists {
  
  /** accountingbookdetail: Accounting Books */
  accountingbookdetail: {
    /** accountingbook - Secondary Book  */
    accountingbook: string;
    /** exchangerate - Exchange Rate  */
    exchangerate?: number;
  }

  /** component: Components */
  component: {
    /** componentinventorydetail - Inventory Detail  */
    componentinventorydetail: string;
    /** item -   */
    item: string;
    /** linenumber -   */
    linenumber: number;
    /** quantity - Quantity  */
    quantity?: number;
    /** quantityonhand - Quantity On Hand  */
    quantityonhand: number;
    /** unitcost -   */
    unitcost: number;
  }
}





