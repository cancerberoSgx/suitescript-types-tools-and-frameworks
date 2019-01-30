// This file is auto generated, do not edit it. 




/** 
 * Item Group Fields Definition.
 * Record's Internal Id: itemgroup. 
 * Supports Custom Fields: true 
 */
export interface itemgroupFields {
/** Check this box to make this item available to partners with the Advanced Partner Center role for viewing.

These items are also available to partners with roles that are customized for the Advanced Partner Center and include view, create or edit access to item records. */
  availabletopartners?: boolean;
  /** Select a class to associate with this item.

Click New to enter a new class record.

Go to <_TABNAME=LIST_CLASS_> > <_TASKCATEGORY=LIST_CLASS_> > Classes for details about existing class records. */
  class?: string;
  /**  */
  createddate?: Date;
  /** Select the form you want to use to enter this record.

You can select the standard form, a custom form you have already created, or select New to create a custom form. */
  customform?: string;
  /** Choose a department to associate with this item.

Click New to enter a new department record.

Go to <_TABNAME=LIST_DEPARTMENT_> > <_TASKCATEGORY=LIST_DEPARTMENT_> > Departments for details about existing department records. */
  department?: string;
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
  /** Choose whether the start and end lines of the item group are referenced for sorting picking tickets that include item groups.
    * Clear the Include Start/End Lines box to delete the start or end line of the group on picking tickets. Then, component items for the group are sorted with other items on the picking ticket.
    * Check the Include Start/End Lines box to recognize the start or end line of the group on picking tickets. */
  includestartendlines?: boolean;
  /** When you check this box, this item will no longer appear on a list unless you check the Show All box at the bottom of the list page. */
  isinactive?: boolean;
  /** Select the product this item is associated with.

Product records are tracked with versions and builds for issue management.

To create product records, go to <_TABNAME=ADMI_ISSUEPRODUCT_> > <_TASKCATEGORY=ADMI_ISSUEPRODUCT_> > Products > New. */
  issueproduct?: string;
  /** Check this box if this group of items is a VSOE bundle. The VSOE price of each item will then be used to allocate revenue across all items sold in the group. */
  isvsoebundle?: boolean;
  /** Type up to 60 characters for the name of this item. This name appears in lists on transactions.

If you have the option of entering a display name and do not, the item name prints in the Item column of sales forms.

If you have the option to enter a vendor name and do not, the item name prints in the Item column of purchase forms. If you have entered a display name, it will print on purchases instead of the item name. */
  itemid: string;
  /**  */
  itemtype?: string;
  /**  */
  lastmodifieddate?: Date;
  /** Select a location to associate with this item.
To use a location, the Multi-Location Inventory feature must be enabled.

    * If the Multi-Location Inventory feature is not enabled:

      Selecting an item record location limits the items that certain roles can access.
      For example, Role A is set up to access only items associated with Location One. Therefore, employees who have Role A can access only items associated with Location One.

      Note: If the Multi-Location Inventory feature is not enabled, you cannot use this field to track inventory by locations. For example, you cannot track how many widgets you have in stock in Location One.

      For more information click here.

    * If the Multi-Location Inventory feature is enabled:

      Selecting an item record location classifies the item by that location to limit the items that certain roles can access. To track inventory per location, use the Locations subtab at the bottom of this form.

      For more information click here.

Select New to enter a new location record.

Go to <_TABNAME=LIST_LOCATION_> > <_TASKCATEGORY=LIST_LOCATION_> > Locations for details about existing location records. */
  location?: string;
  /** If you want this item to be a subitem, select the parent item here. */
  parent?: string;
  /** Check this box to display the member items with their respective display names, quantities and descriptions on sales and purchase forms. Clear this box to display only the description and amount of the group or kit on sales and purchase forms.

Note: Assembly items do not display on purchase forms even when this box is checked.  Also note that member items are never shown on printed forms; only one line with the group name and summary is printed. */
  printitems?: boolean;
  /**  */
  subsidiary?: string;
  /** Enter a maximum of 999 characters in this field to identify an internal name or number to store the item's UPC Code. You can use the text you enter here when adding the item to transactions, searching, or viewing reports.
    * When you enter text in this field, the SKU/UPC field on item labels displays this UPC Code and prints in UPC bar code format.
    * When this field is clear, the SKU/UPC field on item labels displays the Item Name/Number and prints in Code-128 bar code format. */
  upccode?: string;
  /** If your vendor uses a name for this item that is different from the name you use, you can enter up to 60 characters as the vendor's name for this item here.

The vendor's name for this item prints in the Item column of purchase forms.

If you do not enter a vendor name, the item name prints in the Item column of purchase forms. If you have entered a display name, it will print on purchases instead of the item name. */
  vendorname?: string;
}





/** 
 * Item Group Sublists Definition.
 * Record's Internal Id: itemgroup. 
 * Supports Custom Fields: true 
 */
export interface itemgroupSublists {
  
  /** member: Members */
  member: {
    /** item - Item  */
    item?: string;
    /** memberdescr - Description  */
    memberdescr: string;
    /** memberunit - Units  */
    memberunit: string;
    /** quantity - Quantity  */
    quantity: number;
    /** taxschedule - Schedule  */
    taxschedule: string;
    /** vsoedeferral - Deferral  */
    vsoedeferral: string;
    /** vsoedelivered - Default as Delivered  */
    vsoedelivered: boolean;
    /** vsoepermitdiscount - Permit Discount  */
    vsoepermitdiscount: string;
    /** weight -   */
    weight: string;
  }

  /** translations: Item Translation */
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





