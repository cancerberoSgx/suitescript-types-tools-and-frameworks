// This file is auto generated, do not edit it. 




/** 
 * Take Ownership Fields Definition.
 * Record's Internal Id: bulkownershiptransfer. 
 * Supports Custom Fields: true 
 */
export interface bulkownershiptransferFields {
/**  */
  inboundshipmentnumber?: string;
  /**  */
  incoterm?: string;
  /**  */
  postingperiod?: string;
  /**  */
  receivinglocation?: string;
  /**  */
  trandate?: Date;
  /**  */
  vendor?: string;
}





/** 
 * Take Ownership Sublists Definition.
 * Record's Internal Id: bulkownershiptransfer. 
 * Supports Custom Fields: true 
 */
export interface bulkownershiptransferSublists {
  
  /** items: Ownership Transfer Item */
  items: {
    /** amount - Amount  */
    amount: number;
    /** currency - Currency  */
    currency: string;
    /** description - Description  */
    description: string;
    /** exchangerate - Exchange Rate  */
    exchangerate: number;
    /** incoterm - Incoterm  */
    incoterm: string;
    /** item - Item  */
    item: string;
    /** ownershiptransfer - Receive Inbound Shipment  */
    ownershiptransfer: string;
    /** porate - PO Rate  */
    porate: number;
    /** process - Process  */
    process: boolean;
    /** purchaseorder - PO  */
    purchaseorder: string;
    /** quantity - Quantity  */
    quantity: number;
    /** rate - Rate  */
    rate: number;
    /** receivinglocation - Receiving Location  */
    receivinglocation: string;
    /** unit - Unit  */
    unit: string;
    /** vendor - Vendor  */
    vendor: string;
  }
}





