// This file is auto generated, do not edit it. 




/** 
 * Nexus Fields Definition.
 * Record's Internal Id: nexus. 
 * Supports Custom Fields: true 
 */
export interface nexusFields {
/** Select the country that you are making this record for. */
  country: string;
  /** Enter a description for this record. */
  description: string;
  /**  */
  externalid?: string;
  /** This field is false by default. Check this box to inactivate this record. Inactive records do not show on transactions and records for selection in lists.

On nexus and tax type records, this field is available only if the SuiteTax feature is enabled in your account. */
  isinactive?: boolean;
  /** If the nexus record that you are creating represents a subnexus, select a parent nexus. Otherwise, leave the Parent Nexus field blank.

This field is available only if the SuiteTax feature is enabled in your account. */
  parentnexus?: string;
  /** Select the state, province, or county that you are making this record for. You can create a new state, province, or county at Setup > Company > Setup Tasks > States/Provinces/Counties.

On tax code records, this field is available only if the SuiteTax feature is disabled in your account. */
  state?: string;
  /** Select the name of the tax vendor to whom you submit tax reports and remit payments. 

You can set up a vendor as a tax agency in two ways:
- By selecting Tax Agency in the Category field on the vendor record.
- By clicking the plus icon (New) next to the Tax Agency field on the nexus record.

On tax code records, this field is available only if the SuiteTax feature is disabled in your account. */
  taxagency?: string;
}





/** 
 * Nexus Sublists Definition.
 * Record's Internal Id: nexus. 
 * Supports Custom Fields: true 
 */
export interface nexusSublists {
  
}





