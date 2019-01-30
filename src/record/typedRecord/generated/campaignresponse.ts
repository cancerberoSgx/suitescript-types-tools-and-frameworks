// This file is auto generated, do not edit it. 




/** 
 * Campaign Response Fields Definition.
 * Record's Internal Id: campaignresponse. 
 * Supports Custom Fields: true 
 */
export interface campaignresponseFields {
/** This is the name of the campaign event. */
  campaignevent?: string;
  /** This is the date the campaign was sent. */
  campaignresponsedate?: Date;
  /** This is the campaign channel used by this campaign event. */
  channel?: string;
  /** This is the name of the campaign's recipient. */
  entity: string;
  /**  */
  externalid?: string;
  /** This is the name of the campaign. */
  leadsource?: string;
  /** Enter a note about this campaign response. */
  note?: string;
  /** Select the recipient's response to this campaign.

Previous responses are tracked in the list below. */
  response?: string;
}





/** 
 * Campaign Response Sublists Definition.
 * Record's Internal Id: campaignresponse. 
 * Supports Custom Fields: true 
 */
export interface campaignresponseSublists {
  
  /** responses: Response History */
  responses: {
    /** author - Author  */
    author: string;
    /** note - Notes  */
    note: string;
    /** response - Response Detail  */
    response: string;
    /** responsedate - Date/Time  */
    responsedate: Date;
  }
}





