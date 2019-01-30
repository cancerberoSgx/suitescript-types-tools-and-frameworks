// This file is auto generated, do not edit it. 




/** 
 * Item Account Mapping Fields Definition.
 * Record's Internal Id: itemaccountmapping. 
 * Supports Custom Fields: true 
 */
export interface itemaccountmappingFields {
/** You must select an accounting book before you select the subsidiary. Only active accounting books appear on the list. */
  accountingbook: string;
  /** Select the class that the transaction must be associated with in order to meet the mapping rule. */
  class?: string;
  /**  */
  customdimension?: string;
  /**  */
  customform?: string;
  /** Select the department that the transaction must include in order to meet the mapping rule. */
  department?: string;
  /** Select the account that you want transactions post to in the secondary book that you selected from the Accounting Book list.


Select -Same- if you want skip mapping for the set of dimensions you have selected. This enables you to apply the mapping rules to all dimensions except a specific set. */
  destinationaccount: string;
  /** Enter or select the date that the account mapping begins. */
  effectivedate: Date;
  /** Enter or select the date that the account mapping ends. This field can be left blank until a new account mapping is needed.

When blank, the mapping continues indefinitely. */
  enddate?: Date;
  /**  */
  externalid?: string;
  /** Select the general ledger account type or other account specified on the Item record in Accounts section of the Accounting subtab.

The item account type you select determines which accounts are available in the Source Account list. */
  itemaccount: string;
  /** Select the location that the transaction must be associated with in order to meet the mapping rule. */
  location?: string;
  /** Select an account that is used for the primary book. This is the account that is mapped from.

The list includes both primary book accounts and secondary book accounts. */
  sourceaccount?: string;
  /** Select the subsidiary that must be associated with the transaction in order to meeting the mapping rule. You must select an accounting book to select a subsidiary. */
  subsidiary?: string;
}





/** 
 * Item Account Mapping Sublists Definition.
 * Record's Internal Id: itemaccountmapping. 
 * Supports Custom Fields: true 
 */
export interface itemaccountmappingSublists {
  
}





