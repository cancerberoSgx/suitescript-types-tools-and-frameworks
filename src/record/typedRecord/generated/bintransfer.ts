// This file is auto generated, do not edit it. 




/** 
 * Bin Transfer Fields Definition.
 * Record's Internal Id: bintransfer. 
 * Supports Custom Fields: true 
 */
export interface bintransferFields {
/**  */
  createddate?: Date;
  /**  */
  externalid?: string;
  /**  */
  lastmodifieddate?: Date;
  /** Select a location to associate with this transfer. 

The location you select determines which bins you are able to choose from. Items can be transferred to and from bins within only one location. */
  location: string;
  /** Optionally enter a Memo for this transfer. Then, you can search for the text entered here to find this transfer. */
  memo?: string;
  /**  */
  subsidiary: string;
  /**  */
  total?: number;
  /** Verify or enter the date of this transfer. */
  trandate: Date;
}





/** 
 * Bin Transfer Sublists Definition.
 * Record's Internal Id: bintransfer. 
 * Supports Custom Fields: true 
 */
export interface bintransferSublists {
  
  /** inventory: Adjustments */
  inventory: {
    /** description - Description  */
    description: string;
    /** inventorydetail - Inventory Detail  */
    inventorydetail: string;
    /** item - Item  */
    item?: string;
    /** itemunitslabel - Units  */
    itemunitslabel: string;
    /** line -   */
    line: string;
    /** preferredbin - Preferred Bin  */
    preferredbin: string;
    /** quantity - Quantity  */
    quantity?: number;
  }
}





