// This file is auto generated, do not edit it. 




/** 
 * Custom Record Fields Definition.
 * Record's Internal Id: customrecord. 
 * Supports Custom Fields: false 
 */
export interface customrecordFields {
/**  */
  altname: string;
  /**  */
  autoname?: boolean;
  /**  */
  created?: Date;
  /** Select the entry form to use for creating this record. */
  customform: string;
  /**  */
  externalid?: string;
  /**  */
  isinactive?: boolean;
  /**  */
  lastmodified?: Date;
  /**  */
  lastmodifiedby?: string;
  /**  */
  linenumber?: number;
  /** Enter a name for this record. */
  name: string;
  /** The owner is the user who created this record.

By default, the owner is set to the current user.

If this field appears as a dropdown or popup field, you can change the owner to another user. */
  owner: string;
  /**  */
  recordid?: number;
  /**  */
  rectype?: string;
}





/** 
 * Custom Record Sublists Definition.
 * Record's Internal Id: customrecord. 
 * Supports Custom Fields: false 
 */
export interface customrecordSublists {
  
  /** translations: Translation */
  translations: {
    /** label - Name  */
    label: string;
    /** language - Language  */
    language: string;
    /** locale -   */
    locale: string;
  }
}





