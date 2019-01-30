// This file is auto generated, do not edit it. 




/** 
 * Customer Status Fields Definition.
 * Record's Internal Id: customerstatus. 
 * Supports Custom Fields: true 
 */
export interface customerstatusFields {
/** Enter a description of this customer status.

This field can hold 199 characters. */
  description?: string;
  /**  */
  externalid?: string;
  /** Check this box if you want records with this status to appear in leads reports. */
  includeinleadreports?: boolean;
  /** Check this box to inactivate this status. */
  isinactive?: boolean;
  /** Enter a title for this status.

What you enter here appears in the Status field of lead, prospect or customer records, depending on the stage you select.

If you select the stage Prospect, this status also appears in the Status field of Estimates. */
  name: string;
  /** Enter the likelihood a lead, prospect or customer with this status will purchase from your company. */
  probability: number;
  /** Select which stage in the sales cycle this customer status represents. */
  stage?: string;
}





/** 
 * Customer Status Sublists Definition.
 * Record's Internal Id: customerstatus. 
 * Supports Custom Fields: true 
 */
export interface customerstatusSublists {
  
}





