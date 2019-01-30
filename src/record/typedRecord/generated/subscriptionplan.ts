// This file is auto generated, do not edit it. 




/** 
 * Subscription Plan Fields Definition.
 * Record's Internal Id: subscriptionplan. 
 * Supports Custom Fields: true 
 */
export interface subscriptionplanFields {
/**  */
  advancerenewalperiodnumber: number;
  /**  */
  advancerenewalperiodunit: string;
  /**  */
  autorenewal?: boolean;
  /**  */
  class?: string;
  /**  */
  createddate?: Date;
  /**  */
  defaultrenewalmethod: string;
  /**  */
  defaultrenewalplan?: string;
  /**  */
  defaultrenewalterm: string;
  /**  */
  defaultrenewaltrantype?: string;
  /**  */
  department?: string;
  /**  */
  description?: string;
  /**  */
  displayname?: string;
  /**  */
  externalid?: string;
  /**  */
  includechildren?: boolean;
  /**  */
  incomeaccount?: string;
  /**  */
  initialterm: string;
  /**  */
  isinactive?: boolean;
  /**  */
  itemid: string;
  /**  */
  itemtype?: string;
  /**  */
  lastmodifieddate?: Date;
  /**  */
  location?: string;
  /**  */
  subsidiary?: string;
}





/** 
 * Subscription Plan Sublists Definition.
 * Record's Internal Id: subscriptionplan. 
 * Supports Custom Fields: true 
 */
export interface subscriptionplanSublists {
  
  /** member: Lines */
  member: {
    /** billingmode - Billing Mode  */
    billingmode?: string;
    /** isrequired - Required  */
    isrequired: boolean;
    /** item - Item  */
    item?: string;
    /** lineid - Line Id  */
    lineid: number;
    /** linenumber - Line Number  */
    linenumber: number;
    /** prorateenddate - Prorate End Date  */
    prorateenddate: boolean;
    /** proratestartdate - Prorate Start Date  */
    proratestartdate: boolean;
    /** renewaloption - Include In Renewal Subscription  */
    renewaloption?: string;
    /** subscriptionlinetype - Type  */
    subscriptionlinetype?: string;
  }
}





