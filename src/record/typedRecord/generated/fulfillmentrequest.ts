// This file is auto generated, do not edit it. 




/** 
 * Fulfillment Request Fields Definition.
 * Record's Internal Id: fulfillmentrequest. 
 * Supports Custom Fields: true 
 */
export interface fulfillmentrequestFields {
/**  */
  assignee?: string;
  /**  */
  createdfrom?: string;
  /**  */
  customform?: string;
  /**  */
  entity: string;
  /**  */
  expirationdate?: Date;
  /**  */
  fulfillmenttype?: string;
  /**  */
  ispickupemailnotificationsent?: boolean;
  /**  */
  location?: string;
  /**  */
  memo?: string;
  /**  */
  pickuphold?: string;
  /**  */
  prevdate?: Date;
  /**  */
  status?: string;
  /**  */
  subsidiary?: string;
  /**  */
  trandate: Date;
  /**  */
  tranid?: string;
  /**  */
  transtatus: string;
}





/** 
 * Fulfillment Request Sublists Definition.
 * Record's Internal Id: fulfillmentrequest. 
 * Supports Custom Fields: true 
 */
export interface fulfillmentrequestSublists {
  
  /** fulfillmentexception: Fulfillment Exceptions */
  fulfillmentexception: {
    /** exceptioncomments - Exception Comments  */
    exceptioncomments: string;
    /** exceptionquantity - Exception Quantity  */
    exceptionquantity?: number;
    /** exceptionreason - Exception Reason  */
    exceptionreason?: string;
    /** exceptiontype - Exception Type  */
    exceptiontype?: string;
    /** itemline - Item  */
    itemline?: number;
    /** line -   */
    line: number;
    /** quantityrequested - Quantity Requested  */
    quantityrequested: number;
  }

  /** item: Items */
  item: {
    /** acknowledgefulfillinstruction - Acknowledge Instruction  */
    acknowledgefulfillinstruction: boolean;
    /** class - Class  */
    class: string;
    /** department - Department  */
    department: string;
    /** fulfillmentinstruction - Instruction  */
    fulfillmentinstruction: string;
    /** item - Item  */
    item: string;
    /** itemdescription - Description  */
    itemdescription: string;
    /** line -   */
    line: number;
    /** location - Location  */
    location: string;
    /** onhand - On Hand  */
    onhand: number;
    /** options - Options  */
    options: number;
    /** quantity - Quantity  */
    quantity: string;
    /** quantityfulfilled - Fulfilled  */
    quantityfulfilled: string;
    /** quantitypacked - Packed  */
    quantitypacked: string;
    /** quantitypicked - Picked  */
    quantitypicked: string;
    /** quantityrejected - Rejected  */
    quantityrejected: number;
    /** quantityremaining - Quantity Remaining  */
    quantityremaining: number;
    /** quantityremainingdisplay - Remaining  */
    quantityremainingdisplay: number;
    /** requestnote - Request Note  */
    requestnote: string;
    /** units -   */
    units: number;
    /** unitsdisplay - Units  */
    unitsdisplay: string;
  }
}





