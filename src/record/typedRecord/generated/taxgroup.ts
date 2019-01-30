// This file is auto generated, do not edit it. 




/** 
 * Tax Group Fields Definition.
 * Record's Internal Id: taxgroup. 
 * Supports Custom Fields: true 
 */
export interface taxgroupFields {
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
  /**  */
  externalid?: string;
  /** Check this box to apply the tax code to the children of the subsidiary that you selected in the Subsidiaries field. In the Subsidiaries field, colons separate parent subsidiaries (on the left) from their children (on the right).

This field is available only if the SuiteTax feature is disabled in your account. */
  includechildren?: boolean;
  /** Check this box if this code is the default tax group selected on transactions.
 
This tax code is selected if the customer's shipping address does not match another tax group.
 
This field is available only if the SuiteTax feature is disabled in your account. */
  isdefault?: boolean;
  /** This field is false by default. Check this box to inactivate this record. Inactive records do not show on transactions and records for selection in lists.

On nexus and tax type records, this field is available only if the SuiteTax feature is enabled in your account. */
  isinactive?: boolean;
  /** Enter a name for this record.

This field is available only if the SuiteTax feature is disabled in your account. */
  itemid: string;
  /**  */
  itemtype?: string;
  /**  */
  nexuscountry?: string;
  /** Check this box if you want this tax code to include GST in addition to the line item amount when calculating PST.

If you do not check this box, PST is calculated for the line item amount only. */
  piggyback?: boolean;
  /** Enter the appropriate tax rate as a percentage.

Example: 8%

This percentage will be calculated when you select this tax item on transactions.

This field is available only if the SuiteTax feature is disabled in your account. */
  rate?: number;
  /** Select the state, province, or county that you are making this record for. You can create a new state, province, or county at Setup > Company > Setup Tasks > States/Provinces/Counties.

On tax code records, this field is available only if the SuiteTax feature is disabled in your account. */
  state?: string;
  /**  */
  subsidiary?: string;
  /** Select the GST item you want to include in this tax code. */
  taxitem1: string;
  /** Select the PST item you want to include in this tax code. */
  taxitem2: string;
  /** Select the tax type for this tax code. You can create a new tax type at Setup > Accounting > Taxes > Tax Types > New.

If the SuiteTax feature is enabled in your account, you cannot change the value in the Tax Type field after the tax code record has been saved. */
  taxtype: string;
  /** The tax rate for the GST item is shown here. */
  unitprice1?: string;
  /** The rate for the PST item is shown here. */
  unitprice2?: string;
  /** Enter the zip codes where this tax should be applied. Separate each zip code with a comma.
 
This value is used by NetSuite to automatically determine the correct tax when an order is entered or a customer places an order on your website.
 
This field is available only if the SuiteTax feature is disabled in your account. */
  zip?: string;
}





/** 
 * Tax Group Sublists Definition.
 * Record's Internal Id: taxgroup. 
 * Supports Custom Fields: true 
 */
export interface taxgroupSublists {
  
  /** taxitem: Tax Codes */
  taxitem: {
    /** basis - Basis  */
    basis: string;
    /** city -   */
    city: string;
    /** county -   */
    county: string;
    /** rate - Rate  */
    rate: number;
    /** state -   */
    state: string;
    /** taxitemnkey -   */
    taxitemnkey: string;
    /** taxname - Name  */
    taxname?: string;
    /** taxname2 -   */
    taxname2: string;
    /** taxtype - Type  */
    taxtype: string;
  }
}





