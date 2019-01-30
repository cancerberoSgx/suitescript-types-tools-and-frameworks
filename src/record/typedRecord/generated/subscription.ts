// This file is auto generated, do not edit it. 




/** 
 * Subscription Fields Definition.
 * Record's Internal Id: subscription. 
 * Supports Custom Fields: true 
 */
export interface subscriptionFields {
/**  */
  advancerenewalperiodnumber: number;
  /**  */
  advancerenewalperiodunit: string;
  /**  */
  autoname?: boolean;
  /**  */
  autorenewal?: boolean;
  /**  */
  billingaccount: string;
  /**  */
  billingaccountstartdate: Date;
  /**  */
  billingschedule: string;
  /**  */
  billingsubscriptionstatus?: string;
  /**  */
  currency?: string;
  /**  */
  customer: string;
  /**  */
  customform: string;
  /**  */
  defaultrenewalmethod: string;
  /**  */
  defaultrenewalplan: string;
  /**  */
  defaultrenewalpricebook?: string;
  /**  */
  defaultrenewalterm: string;
  /**  */
  defaultrenewaltrantype?: string;
  /**  */
  enddate?: Date;
  /**  */
  estimatedrevrecenddate?: Date;
  /**  */
  externalid?: string;
  /**  */
  frequency: string;
  /**  */
  id?: number;
  /**  */
  idnumber?: string;
  /**  */
  initialterm: string;
  /**  */
  initialtermduration?: string;
  /**  */
  initialtermtype?: string;
  /**  */
  initialtermunits?: string;
  /**  */
  internalid?: number;
  /**  */
  lastbillcycledate?: Date;
  /**  */
  lastbilldate?: Date;
  /**  */
  name: string;
  /**  */
  nextbillcycledate?: Date;
  /**  */
  nextrenewalstartdate?: Date;
  /**  */
  otherrecordnumber?: string;
  /**  */
  pricebook?: string;
  /**  */
  renewalnumber?: number;
  /**  */
  salesorder?: string;
  /**  */
  startdate: Date;
  /**  */
  subscriptionplan?: string;
  /**  */
  subscriptionplanname?: string;
  /**  */
  subsidiary?: string;
  /**  */
  templatestored?: boolean;
}





/** 
 * Subscription Sublists Definition.
 * Record's Internal Id: subscription. 
 * Supports Custom Fields: true 
 */
export interface subscriptionSublists {
  
  /** priceinterval: Price Book Lines */
  priceinterval: {
    /** chargetype - Subscription Line Type  */
    chargetype: string;
    /** discount - Discount  */
    discount: number;
    /** frequency - Charge Frequency  */
    frequency?: string;
    /** id -   */
    id: string;
    /** includedquantity - Included Quantity  */
    includedquantity: string;
    /** item - Item  */
    item: string;
    /** linenumber - Line Number  */
    linenumber: number;
    /** multiplierline - Included Quantity Multiplier  */
    multiplierline: string;
    /** priceplan - Price Plan  */
    priceplan: string;
    /** quantity - Quantity  */
    quantity: string;
    /** repeatevery - Repeat Every  */
    repeatevery?: string;
    /** startdate - Start Date  */
    startdate?: Date;
    /** startoffsetunit - Interval  */
    startoffsetunit: string;
    /** startoffsetvalue - Start On  */
    startoffsetvalue: number;
    /** status -   */
    status: string;
    /** subscriptionplanline - Subscription Plan Line  */
    subscriptionplanline: number;
  }

  /** sublinefromplan: Lines */
  sublinefromplan: {
    /** item -   */
    item: string;
    /** revrecoption -   */
    revrecoption: string;
  }

  /** subscriptionline: Lines */
  subscriptionline: {
    /** billingmode - Billing Mode  */
    billingmode: string;
    /** discount - Discount  */
    discount: number;
    /** enddate - End Date  */
    enddate: Date;
    /** isincluded - Include  */
    isincluded: boolean;
    /** item - Item  */
    item: string;
    /** linenumber - Line Number  */
    linenumber: string;
    /** quantity - Quantity  */
    quantity: string;
    /** recurrencestartdate - Recurrence Start Date  */
    recurrencestartdate: Date;
    /** startdate - Start Date  */
    startdate: Date;
    /** status - Status  */
    status?: string;
    /** subscription - Subscription  */
    subscription: string;
    /** subscriptionline -   */
    subscriptionline: number;
    /** subscriptionlinetype - Subscription Line Type  */
    subscriptionlinetype: string;
    /** terminationdate - Termination Date  */
    terminationdate: Date;
  }
}





