// This file is auto generated, do not edit it. 




/** 
 * Receive Inbound Shipment Fields Definition.
 * Record's Internal Id: receiveinboundshipment. 
 * Supports Custom Fields: true 
 */
export interface receiveinboundshipmentFields {
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
 * Receive Inbound Shipment Sublists Definition.
 * Record's Internal Id: receiveinboundshipment. 
 * Supports Custom Fields: true 
 */
export interface receiveinboundshipmentSublists {
  
  /** receiveitems: Receive Item */
  receiveitems: {
    /** amount - Amount  */
    amount: number;
    /** currency - Currency  */
    currency: string;
    /** description - Description  */
    description: string;
    /** incoterm - Incoterm  */
    incoterm: string;
    /** item - Item  */
    item: string;
    /** ownershiptransfer - Ownership Transfer  */
    ownershiptransfer: string;
    /** porate - PO Rate  */
    porate: number;
    /** purchaseorder - PO  */
    purchaseorder: string;
    /** quantity - Quantity  */
    quantity: number;
    /** quantityreceived - Quantity Received  */
    quantityreceived: number;
    /** quantitytobereceived - Quantity to be Received  */
    quantitytobereceived: string;
    /** rate - Rate  */
    rate: number;
    /** receiveinboundshipment - Receive Inbound Shipment  */
    receiveinboundshipment: string;
    /** receiveitem - Receive  */
    receiveitem: boolean;
    /** receivinglocation - Receiving Location  */
    receivinglocation: string;
    /** unit - Unit  */
    unit: string;
    /** vendor - Vendor  */
    vendor: string;
  }
}





