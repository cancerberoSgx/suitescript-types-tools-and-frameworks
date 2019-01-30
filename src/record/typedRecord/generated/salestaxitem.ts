// This file is auto generated, do not edit it. 




/** 
 * Sales Tax Item Fields Definition.
 * Record's Internal Id: salestaxitem. 
 * Supports Custom Fields: true 
 */
export interface salestaxitemFields {
/** Enter the city where this tax should be applied.

This value is used by NetSuite to automatically determine the correct tax when an order is entered or a customer places an order on your website.

This field is available only if the SuiteTax feature is disabled in your account. */
  city?: string;
  /** Enter the county where this tax should be applied.
 
This value is used by NetSuite to automatically determine the correct tax when an order is entered or a customer places an order on your website.
 
This field is available only if the SuiteTax feature is disabled in your account. */
  county?: string;
  /** Enter a description for this record. */
  description?: string;
  /** You can enter a unique name or number for a tax code in addition to the Tax Name.
 
If you are integrating with a Yahoo store, this field is imported from Yahoo.
 
This field is available only if the SuiteTax feature is disabled in your account. */
  displayname?: string;
  /**  */
  externalid?: string;
  /** Check this box to apply the tax code to the children of the subsidiary that you selected in the Subsidiaries field. In the Subsidiaries field, colons separate parent subsidiaries (on the left) from their children (on the right).

This field is available only if the SuiteTax feature is disabled in your account. */
  includechildren?: boolean;
  /** This field is false by default. Check this box to inactivate this record. Inactive records do not show on transactions and records for selection in lists.

On nexus and tax type records, this field is available only if the SuiteTax feature is enabled in your account. */
  isinactive?: boolean;
  /** Enter a name for this record.

This field is available only if the SuiteTax feature is disabled in your account. */
  itemid: string;
  /**  */
  itemtype?: string;
  /**  */
  name: string;
  /** Enter the appropriate tax rate as a percentage.

Example: 8%

This percentage will be calculated when you select this tax item on transactions.

This field is available only if the SuiteTax feature is disabled in your account. */
  rate: string;
  /** Select the state, province, or county that you are making this record for. You can create a new state, province, or county at Setup > Company > Setup Tasks > States/Provinces/Counties.

On tax code records, this field is available only if the SuiteTax feature is disabled in your account. */
  state?: string;
  /**  */
  subsidiary?: string;
  /** If the tax control account for this tax code differs from other tax codes of this type, select the tax control account you want to use. You can create tax control accounts at Setup > Accounting > Taxes > Tax Control Accounts > New.
 
This field is available only if the SuiteTax feature is disabled in your account. */
  taxaccount: string;
  /** Select the name of the tax vendor to whom you submit tax reports and remit payments. 

You can set up a vendor as a tax agency in two ways:
- By selecting Tax Agency in the Category field on the vendor record.
- By clicking the plus icon (New) next to the Tax Agency field on the nexus record.

On tax code records, this field is available only if the SuiteTax feature is disabled in your account. */
  taxagency: string;
  /** Select the tax type for this tax code. You can create a new tax type at Setup > Accounting > Taxes > Tax Types > New.

If the SuiteTax feature is enabled in your account, you cannot change the value in the Tax Type field after the tax code record has been saved. */
  taxtype?: string;
  /** Enter the zip codes where this tax should be applied. Separate each zip code with a comma.
 
This value is used by NetSuite to automatically determine the correct tax when an order is entered or a customer places an order on your website.
 
This field is available only if the SuiteTax feature is disabled in your account. */
  zip?: string;
}





/** 
 * Sales Tax Item Sublists Definition.
 * Record's Internal Id: salestaxitem. 
 * Supports Custom Fields: true 
 */
export interface salestaxitemSublists {
  
}





