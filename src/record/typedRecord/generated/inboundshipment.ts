// This file is auto generated, do not edit it. 




/** 
 * Inbound Shipment Fields Definition.
 * Record's Internal Id: inboundshipment. 
 * Supports Custom Fields: false 
 */
export interface inboundshipmentFields {
/** Use the picker to input the actual date the shipment arrived at the receiving location.

The expected and actual dates can be used for the reporting of variances and setting performance metrics. */
  actualdeliverydate?: Date;
  /** Input a date when the consignment was actually shipped.

The expected and actual dates can be used for the reporting of variances and setting performance metrics. */
  actualshippingdate?: Date;
  /** Enter the number from your bill of lading documentation in this field. */
  billoflading?: string;
  /**  */
  customform?: string;
  /** Use the picker to add the date when the shipment is expected to be delivered to the receiving location. */
  expecteddeliverydate?: Date;
  /** Use the date picker to insert the date for when the shipment is expected to leave. The field can be edited to reflect changing circumstances. */
  expectedshippingdate?: Date;
  /** Add the identifying number for the shipment as supplied by your shipping company here.

You can customize the Inbound Shipments list page to include this field for easy identification of the shipment. */
  externaldocumentnumber?: string;
  /**  */
  externalid?: string;
  /**  */
  id?: number;
  /**  */
  internalid?: number;
  /**  */
  shipmentbillingstatus?: string;
  /**  */
  shipmentcreateddate?: Date;
  /** Use this field to highlight key, or frequently used information.

It is best practice to add a User Note in the Communications subtab to log call other types of communication relating to the shipment. */
  shipmentmemo?: string;
  /** This is a system generated number. The format can be customized by updating the Inbound Shipment field at: 

Setup > Company > Auto-Generated Numbers > Transaction Numbers. */
  shipmentnumber?: string;
  /** This is a read only field and updates to reflect the progress of the shipment. The five statuses are:
    * To be Shipped
    * In Transit
    * Partially Received
    * Received
    * Closed */
  shipmentstatus?: string;
  /** Input the vessel's IMO number, or other identifying reference in this field. */
  vesselnumber?: string;
}





/** 
 * Inbound Shipment Sublists Definition.
 * Record's Internal Id: inboundshipment. 
 * Supports Custom Fields: false 
 */
export interface inboundshipmentSublists {
  
  /** items: Inbound Shipment Item */
  items: {
    /** currency - Currency  */
    currency: string;
    /** expectedrate - Expected Rate  */
    expectedrate: number;
    /** id - ID  */
    id: number;
    /** inboundshipment - Inbound Shipment  */
    inboundshipment: string;
    /** incoterm - Incoterm  */
    incoterm: string;
    /** pocurrency - Currency  */
    pocurrency: string;
    /** porate - PO Rate  */
    porate: number;
    /** povendor - Vendor  */
    povendor: string;
    /** purchaseorder - PO  */
    purchaseorder?: string;
    /** quantitybilled - Quantity Billed  */
    quantitybilled: number;
    /** quantityexpected - Quantity Expected  */
    quantityexpected: number;
    /** quantityreceived - Quantity Received  */
    quantityreceived: number;
    /** quantityremaining - Quantity Remaining  */
    quantityremaining: number;
    /** receivinglocation - Receiving Location  */
    receivinglocation: string;
    /** shipmentitem - Item  */
    shipmentitem?: string;
    /** shipmentitemamount - Amount  */
    shipmentitemamount: number;
    /** shipmentitemdescription - Description  */
    shipmentitemdescription: string;
    /** unit - Unit  */
    unit: string;
    /** vendor - Vendor  */
    vendor: string;
  }
}





