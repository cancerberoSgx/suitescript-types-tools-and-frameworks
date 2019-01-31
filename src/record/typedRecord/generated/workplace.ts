// This file is auto generated, do not edit it. 




/** 
 * Workplace Fields Definition.
 * Record's Internal Id: workplace. 
 * Supports Custom Fields: true 
 */
export interface workplaceFields {
/**  */
  externalid?: string;
  /**  */
  isinactive?: boolean;
  /**  */
  jurisdictioncounty?: string;
  /**  */
  jurisdictionfederal?: string;
  /**  */
  jurisdictionlocal?: string;
  /**  */
  jurisdictionschool?: string;
  /**  */
  jurisdictionstate?: string;
  /**  */
  mainaddress?: string;
  /**  */
  name: string;
  /**  */
  parent?: string;
  /**  */
  subsidiary: string;
}





/** 
 * Workplace Sublists Definition.
 * Record's Internal Id: workplace. 
 * Supports Custom Fields: true 
 */
export interface workplaceSublists {
  
  /** jurisdictionhist: History */
  jurisdictionhist: {
    /** effectivedate - Effective Date  */
    effectivedate: Date;
    /** expirationdate - Expiration Date  */
    expirationdate: Date;
    /** name - Jurisdiction  */
    name: string;
    /** type - Level  */
    type: string;
  }
}





