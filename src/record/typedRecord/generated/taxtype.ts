// This file is auto generated, do not edit it. 




/** 
 * Tax Type Fields Definition.
 * Record's Internal Id: taxtype. 
 * Supports Custom Fields: true 
 */
export interface taxtypeFields {
/** Select the country that you are making this record for. */
  country?: string;
  /** Enter a description for this record. */
  description?: string;
  /** Check this box for special tax types that do not impact the transaction total, such as withholding tax. Tax types with this property can be used on sales and purchase transactions.

This field is available only if the SuiteTax feature is enabled in your account. */
  doesnotaddtototal?: boolean;
  /**  */
  externalid?: string;
  /** This field is false by default. Check this box to inactivate this record. Inactive records do not show on transactions and records for selection in lists.

On nexus and tax type records, this field is available only if the SuiteTax feature is enabled in your account. */
  isinactive?: boolean;
  /** Enter a name for this record.

On tax code records, this field is available only if the SuiteTax feature is enabled in your account. */
  name: string;
  /** Check this box if the tax amounts for the tax type should be added to the related item cost. Tax types with this property can be used on purchase transactions only.

This field is available only if the SuiteTax feature is enabled in your account. */
  posttoitemcost?: boolean;
  /** Check this box if reverse charge applies to transactions that have this tax type. Tax types with this property can be used on purchase transactions only.

On tax code records, this field is available only if the SuiteTax feature is disabled in your account.

On tax type records, this field is available only if the SuiteTax feature is enabled in your account. */
  reversecharge?: boolean;
  /** Check this box for special tax types where the tax amount is included in the item price. Tax types with this property can be used on sales and purchase transactions.
 
This field is available only if the SuiteTax feature is enabled in your account. */
  taxinnetamount?: boolean;
}





/** 
 * Tax Type Sublists Definition.
 * Record's Internal Id: taxtype. 
 * Supports Custom Fields: true 
 */
export interface taxtypeSublists {
  
  /** nexusaccounts: Tax */
  nexusaccounts: {
    /** nexus - Nexus  */
    nexus?: string;
    /** payablesaccount - Payables Account  */
    payablesaccount: string;
    /** receivablesaccount - Receivables Account  */
    receivablesaccount: string;
  }
}





