// This file is auto generated, do not edit it. 




/** 
 * Work Order Close Fields Definition.
 * Record's Internal Id: workorderclose. 
 * Supports Custom Fields: true 
 */
export interface workordercloseFields {
/**  */
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
  item: string;
  /**  */
  lastmodifieddate?: Date;
  /**  */
  location: string;
  /**  */
  manufacturingrouting?: number;
  /**  */
  memo?: string;
  /**  */
  orderquantity?: number;
  /**  */
  postingperiod?: string;
  /**  */
  quantity?: string;
  /**  */
  revision?: string;
  /**  */
  revisionmemo?: string;
  /**  */
  scrapquantity?: number;
  /**  */
  subsidiary?: string;
  /**  */
  taxperiod?: string;
  /**  */
  total?: number;
  /**  */
  trandate: Date;
  /**  */
  tranid?: string;
}





/** 
 * Work Order Close Sublists Definition.
 * Record's Internal Id: workorderclose. 
 * Supports Custom Fields: true 
 */
export interface workordercloseSublists {
  
  /** component: Components */
  component: {
    /** item -   */
    item: string;
    /** linenumber -   */
    linenumber: number;
    /** orderquantity - Work Order Quantity  */
    orderquantity: number;
  }

  /** routingitem: Routing Items */
  routingitem: {
    /** item -   */
    item: string;
    /** unitcost -   */
    unitcost: number;
  }
}





