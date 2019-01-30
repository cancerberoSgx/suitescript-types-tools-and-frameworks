// This file is auto generated, do not edit it. 




/** 
 * Note Fields Definition.
 * Record's Internal Id: note. 
 * Supports Custom Fields: true 
 */
export interface noteFields {
/**  */
  accountingperiod?: string;
  /**  */
  author?: string;
  /** Select the source of this note.

If you are logging a note from outside your company, select Incoming.

If you are logging a note sent to someone outside of your company, select Outgoing. */
  direction?: string;
  /**  */
  entity?: string;
  /**  */
  externalid?: string;
  /**  */
  folder?: string;
  /**  */
  item?: string;
  /**  */
  lastmodifieddate?: Date;
  /**  */
  media?: string;
  /** Enter the comment or note you want to record.

This note could be information about or communications with this company or person. */
  note: string;
  /** Accept or enter a date for this note. */
  notedate?: Date;
  /** Select the type of note you are creating.

You can create note types at <_TABNAME=EDIT_CRMOTHERLIST_> > <_TASKCATEGORY=EDIT_CRMOTHERLIST_> > CRM Lists > New > Note Type. */
  notetype?: string;
  /**  */
  record?: string;
  /**  */
  recordtype?: string;
  /**  */
  time?: string;
  /** Enter a title for this note. */
  title?: string;
  /**  */
  topic?: string;
  /**  */
  transaction?: string;
}





/** 
 * Note Sublists Definition.
 * Record's Internal Id: note. 
 * Supports Custom Fields: true 
 */
export interface noteSublists {
  
}





