// This file is auto generated, do not edit it. 




/** 
 * Order Schedule Fields Definition.
 * Record's Internal Id: orderschedule. 
 * Supports Custom Fields: false 
 */
export interface orderscheduleFields {
/**  */
  createpurchaseorder: string;
  /**  */
  createschedule: string;
  /**  */
  currencyprecision?: number;
  /**  */
  enddate?: Date;
  /**  */
  externalid?: string;
  /**  */
  item?: number;
  /**  */
  releasefrequency?: string;
  /**  */
  startdate?: Date;
  /**  */
  total?: number;
}





/** 
 * Order Schedule Sublists Definition.
 * Record's Internal Id: orderschedule. 
 * Supports Custom Fields: false 
 */
export interface orderscheduleSublists {
  
  /** schedule: Schedule */
  schedule: {
    /** amount -   */
    amount: string;
    /** id -   */
    id: number;
    /** memo - Memo  */
    memo: string;
    /** orderschedule -   */
    orderschedule: number;
    /** purchaseorder - Order  */
    purchaseorder: string;
    /** quantity - Quantity  */
    quantity?: string;
    /** release - Release  */
    release: boolean;
    /** trandate - Date  */
    trandate?: Date;
  }
}





