// This file is auto generated, do not edit it. 




/** 
 * Inventory Count Fields Definition.
 * Record's Internal Id: inventorycount. 
 * Supports Custom Fields: true 
 */
export interface inventorycountFields {
/**  */
  account: string;
  /**  */
  class?: string;
  /**  */
  createddate?: Date;
  /**  */
  department?: string;
  /**  */
  externalid?: string;
  /**  */
  lastmodifieddate?: Date;
  /**  */
  location: string;
  /**  */
  memo?: string;
  /**  */
  status?: string;
  /**  */
  statusRef?: string;
  /**  */
  subsidiary: string;
  /**  */
  trandate: Date;
  /**  */
  tranid?: string;
}





/** 
 * Inventory Count Sublists Definition.
 * Record's Internal Id: inventorycount. 
 * Supports Custom Fields: true 
 */
export interface inventorycountSublists {
  
  /** item: Items */
  item: {
    /** adjustedquantity - Adjusted Quantity  */
    adjustedquantity: number;
    /** binnumber - Bin  */
    binnumber: string;
    /** countdetail - Count Detail  */
    countdetail: string;
    /** countquantity - Count Quantity  */
    countquantity: number;
    /** item - Item  */
    item?: string;
    /** memo - Memo  */
    memo: string;
    /** rate - Rate  */
    rate: number;
    /** snapshotquantity - Snapshot Quantity  */
    snapshotquantity: number;
    /** units - Units  */
    units: string;
    /** viewadjustment - Variance Detail  */
    viewadjustment: string;
    /** viewsnapshot - Snapshot Detail  */
    viewsnapshot: string;
  }
}





