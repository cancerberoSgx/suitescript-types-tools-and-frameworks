// This file is auto generated, do not edit it. 




/** 
 * Message Fields Definition.
 * Record's Internal Id: message. 
 * Supports Custom Fields: true 
 */
export interface messageFields {
/**  */
  activity?: string;
  /** Select the author of this message. */
  author?: string;
  /**  */
  authoremail?: string;
  /**  */
  contact?: string;
  /** Check this box if you are pasting in an e-mail message. */
  emailed?: boolean;
  /**  */
  entity?: string;
  /**  */
  entitytype?: string;
  /**  */
  externalid?: string;
  /**  */
  hasattachment?: string;
  /**  */
  lastmodifieddate?: Date;
  /** Paste or enter the text of the message in this field. */
  message?: string;
  /**  */
  messagedate?: Date;
  /** Select the recipient of this message.

This message is saved on the Messages subtab of the recipient's record as well as the record you are currently working with. */
  recipient?: string;
  /** Enter the e-mail address of the recipient. */
  recipientemail?: string;
  /**  */
  record?: string;
  /**  */
  recordtype?: string;
  /** Enter a subject or title for this email message.

This subject is displayed on the messages subtab on the records of those receiving or sending the message. */
  subject: string;
  /**  */
  template?: string;
  /**  */
  time?: string;
  /**  */
  transaction?: string;
}





/** 
 * Message Sublists Definition.
 * Record's Internal Id: message. 
 * Supports Custom Fields: true 
 */
export interface messageSublists {
  
  /** ccbcclist: Copy Others */
  ccbcclist: {
    /** bcc - Bcc  */
    bcc: boolean;
    /** cc - Cc  */
    cc: boolean;
    /** email - Email  */
    email: string;
  }

  /** mediaitem: Attachments */
  mediaitem: {
    /** mediaitem - Attach File  */
    mediaitem?: string;
  }
}





