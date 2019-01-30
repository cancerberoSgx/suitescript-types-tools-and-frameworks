// This file is auto generated, do not edit it. 




/** 
 * Assembly Unbuild Fields Definition.
 * Record's Internal Id: assemblyunbuild. 
 * Supports Custom Fields: true 
 */
export interface assemblyunbuildFields {
/**  */
  billofmaterials?: string;
  /**  */
  billofmaterialsrevision?: string;
  /** This field shows the assembled quantity you currently have in stock of this item. */
  built?: number;
  /** Select a class for this transaction.

To create a new class, select -New- or go to Lists > Classes. */
  class?: string;
  /**  */
  createddate?: Date;
  /**  */
  customform: string;
  /**  */
  department?: string;
  /**  */
  externalid?: string;
  /**  */
  inventorydetail?: string;
  /** Select the assembly item you want to disassemble.

You must first create and build assembly item records before you can unbuild them.

To create an assembly item record, go to Lists > Items > New and click Assembly/Bill of Materials. To build assembly items, go to Transactions > Build Assemblies. */
  item: string;
  /**  */
  lastmodifieddate?: Date;
  /**  */
  location: string;
  /**  */
  memo?: string;
  /** Select the period you want to post this transaction to.

If a period is closed, you cannot post to that period. */
  postingperiod?: string;
  /** Enter the number of assembly items you want to disassemble.

You cannot enter a number higher than the Built number. */
  quantity: string;
  /**  */
  revision?: string;
  /**  */
  revisionmemo?: string;
  /**  */
  subsidiary: string;
  /** NetSuite calculates the projected value of this transaction.

The projected value for the raw materials is the total value of the parts times the quantity being disassembled. */
  total?: number;
  /** NetSuite inserts today's date for the posting date of this transaction.

You can type or pick another date. */
  trandate: Date;
  /** Enter an optional reference number for this transaction.

You can use reference numbers to track transactions. */
  tranid?: string;
  /**  */
  units?: string;
}





/** 
 * Assembly Unbuild Sublists Definition.
 * Record's Internal Id: assemblyunbuild. 
 * Supports Custom Fields: true 
 */
export interface assemblyunbuildSublists {
  
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





