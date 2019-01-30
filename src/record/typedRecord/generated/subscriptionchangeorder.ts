// This file is auto generated, do not edit it. 




/** 
 * Subscription Change Order Fields Definition.
 * Record's Internal Id: subscriptionchangeorder. 
 * Supports Custom Fields: true 
 */
export interface subscriptionchangeorderFields {
/**  */
  approvaldate?: Date;
  /**  */
  approvalstatus: string;
  /**  */
  billingaccount: string;
  /**  */
  createdby?: string;
  /**  */
  customer: string;
  /**  */
  datecreated?: Date;
  /**  */
  effectivedate: Date;
  /**  */
  externalid?: string;
  /**  */
  idnumber?: string;
  /**  */
  memo?: string;
  /**  */
  reactivationoption: string;
  /**  */
  renewalenddate: Date;
  /**  */
  renewalmethod: string;
  /**  */
  renewalplan: string;
  /**  */
  renewalpricebook?: string;
  /**  */
  renewalstartdate: Date;
  /**  */
  renewalterm: string;
  /**  */
  renewaltrantype?: string;
  /**  */
  requestoffcycleinvoice?: boolean;
  /**  */
  requestor: string;
  /**  */
  subscription: string;
  /**  */
  subscriptionplan?: string;
  /**  */
  subscriptiontermduration?: string;
  /**  */
  subscriptiontermtype?: string;
  /**  */
  subsidiary?: string;
}





/** 
 * Subscription Change Order Sublists Definition.
 * Record's Internal Id: subscriptionchangeorder. 
 * Supports Custom Fields: true 
 */
export interface subscriptionchangeorderSublists {
  
  /** newsubline: New Lines */
  newsubline: {
    /** item -   */
    item: string;
    /** subscriptionline -   */
    subscriptionline: string;
  }

  /** renewalsteps: Renewal Steps */
  renewalsteps: {
    /** subscription -   */
    subscription: number;
    /** transaction -   */
    transaction: number;
  }

  /** subline: Items */
  subline: {
    /** apply - Include  */
    apply: boolean;
    /** billingmode -   */
    billingmode: string;
    /** discount -   */
    discount: number;
    /** discountnew - New Discount  */
    discountnew: number;
    /** enddate -   */
    enddate: Date;
    /** includeinrenewal -   */
    includeinrenewal: string;
    /** item -   */
    item: number;
    /** pricemodelnew - New Price Plan  */
    pricemodelnew: string;
    /** quantity -   */
    quantity: string;
    /** quantitynew - New Quantity  */
    quantitynew: string;
    /** sequence - Line Number  */
    sequence: string;
    /** status -   */
    status: string;
    /** statusnew - New Status  */
    statusnew: string;
    /** subscriptionline -   */
    subscriptionline: string;
    /** terminationdate -   */
    terminationdate: Date;
  }
}





