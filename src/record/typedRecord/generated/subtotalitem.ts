// This file is auto generated, do not edit it. 




/** 
 * Subtotal Item Fields Definition.
 * Record's Internal Id: subtotalitem. 
 * Supports Custom Fields: true 
 */
export interface subtotalitemFields {
/** Check this box to make this item available to partners with the Advanced Partner Center role for viewing.

These items are also available to partners with roles that are customized for the Advanced Partner Center and include view, create or edit access to item records. */
  availabletopartners?: boolean;
  /**  */
  createddate?: Date;
  /** Select the form you want to use to enter this record.

You can select the standard form, a custom form you have already created, or select New to create a custom form. */
  customform?: string;
  /** Enter a description for this item. This description will appear in the Description column of sales forms. */
  description?: string;
  /** You can enter an optional name for this item in addition to the Item Name. If you are integrating with a Yahoo! store, this field is imported from Yahoo!.

The display name prints in the Item column of sales forms. If this item is a member of a kit, this name appears in the Item column when the Print Items box is checked.

If you do not enter a display name, the item name appears on printed forms. */
  displayname?: string;
  /**  */
  externalid?: string;
  /** Check the Include Children box to share the item with all the sub-subsidiaries associated with each subsidiary selected in the Subsidiary field.

Note: When sharing items across subsidiaries, all of the options selected on the item record must be compatible across subsidiaries.
 
For example, when entering an inventory item to be shared across subsidiaries, you should select Income and Asset accounts on the item record that are also shared across the same subsidiaries. */
  includechildren?: boolean;
  /** When you check this box, this item will no longer appear on a list unless you check the Show All box at the bottom of the list page. */
  isinactive?: boolean;
  /** Select the product this item is associated with.

Product records are tracked with versions and builds for issue management.

To create product records, go to <_TABNAME=ADMI_ISSUEPRODUCT_> > <_TASKCATEGORY=ADMI_ISSUEPRODUCT_> > Products > New. */
  issueproduct?: string;
  /** Type up to 60 characters for the name of this item. This name appears in lists on transactions.

If you have the option of entering a display name and do not, the item name prints in the Item column of sales forms.

If you have the option to enter a vendor name and do not, the item name prints in the Item column of purchase forms. If you have entered a display name, it will print on purchases instead of the item name. */
  itemid: string;
  /**  */
  itemtype?: string;
  /**  */
  lastmodifieddate?: Date;
  /**  */
  subsidiary?: string;
}





/** 
 * Subtotal Item Sublists Definition.
 * Record's Internal Id: subtotalitem. 
 * Supports Custom Fields: true 
 */
export interface subtotalitemSublists {
  
  /** translations: Translations */
  translations: {
    /** displayname - Display Name  */
    displayname: string;
    /** featureddescription - Featured Description  */
    featureddescription: string;
    /** language - Language  */
    language: string;
    /** locale -   */
    locale: string;
    /** nopricemessage - No Price Message  */
    nopricemessage: string;
    /** outofstockmessage - Out Of Stock Message  */
    outofstockmessage: string;
    /** pagetitle - Page Title  */
    pagetitle: string;
    /** salesdescription - Sales Description  */
    salesdescription: string;
    /** storedescription - Store Description  */
    storedescription: string;
    /** storedetaileddescription - Detailed Description  */
    storedetaileddescription: string;
    /** storedisplayname - Store Display Name  */
    storedisplayname: string;
  }
}





