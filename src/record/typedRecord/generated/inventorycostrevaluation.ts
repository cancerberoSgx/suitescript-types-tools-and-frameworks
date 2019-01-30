// This file is auto generated, do not edit it. 




/** 
 * Inventory Cost Revaluation Fields Definition.
 * Record's Internal Id: inventorycostrevaluation. 
 * Supports Custom Fields: true 
 */
export interface inventorycostrevaluationFields {
/** Select an Adjustment Account. The inventory value variance amounts post to this account. */
  account: string;
  /** If you use Classes, select one to identify with this revaluation. */
  class?: string;
  /**  */
  createddate?: Date;
  /**  */
  customform: string;
  /** If you use Departments, select one to identify with this revaluation. */
  department?: string;
  /**  */
  externalid?: string;
  /**  */
  inventoryvalue?: number;
  /**  */
  item: string;
  /**  */
  lastmodifieddate?: Date;
  /**  */
  location: string;
  /**  */
  memo?: string;
  /**  */
  postingperiod?: string;
  /** If you have a NetSuite OneWorld account, select a subsidiary from the dropdown list in the Subsidiary field. */
  subsidiary: string;
  /**  */
  taxperiod?: string;
  /**  */
  total: number;
  /**  */
  trandate: Date;
  /**  */
  tranid?: string;
  /**  */
  unitcost?: number;
}





/** 
 * Inventory Cost Revaluation Sublists Definition.
 * Record's Internal Id: inventorycostrevaluation. 
 * Supports Custom Fields: true 
 */
export interface inventorycostrevaluationSublists {
  
  /** accountingbookdetail: Accounting Books */
  accountingbookdetail: {
    /** accountingbook - Secondary Book  */
    accountingbook: string;
    /** exchangerate - Exchange Rate  */
    exchangerate?: number;
  }
}





