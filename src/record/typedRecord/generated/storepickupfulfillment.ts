// This file is auto generated, do not edit it. 




/** 
 * Store Pickup Fulfillment Fields Definition.
 * Record's Internal Id: storepickupfulfillment. 
 * Supports Custom Fields: true 
 */
export interface storepickupfulfillmentFields {
/**  */
  createdfrom?: string;
  /**  */
  customform?: string;
  /**  */
  entity?: string;
  /**  */
  location?: string;
  /**  */
  memo?: string;
  /**  */
  pickeddate?: Date;
  /**  */
  pickedupdate?: Date;
  /**  */
  pickupexpirationdate?: Date;
  /**  */
  pickupstatus: string;
  /**  */
  requestedby?: string;
  /**  */
  status?: string;
  /**  */
  trandate: Date;
  /**  */
  tranid?: string;
}





/** 
 * Store Pickup Fulfillment Sublists Definition.
 * Record's Internal Id: storepickupfulfillment. 
 * Supports Custom Fields: true 
 */
export interface storepickupfulfillmentSublists {
  
  /** item: Items */
  item: {
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
    /** quantity - Quantity  */
    quantity: string;
    /** quantityremaining - Quantity Remaining  */
    quantityremaining: number;
    /** units -   */
    units: number;
    /** unitsdisplay - Units  */
    unitsdisplay: string;
  }
}





