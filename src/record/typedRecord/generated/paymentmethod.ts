// This file is auto generated, do not edit it. 




/** 
 * Payment Method Fields Definition.
 * Record's Internal Id: paymentmethod. 
 * Supports Custom Fields: true 
 */
export interface paymentmethodFields {
/** Select the appropriate default account to assign.

If you are entering a payment method, select the default bank account for this payment method. Then, the account autofills the Deposit To field on transactions when this payment method is selected.

If you are creating a landed cost category, select the expense account to be used as a clearing account for the landeded cost of items. Then, when the item is sold, the cost of goods sold is accurately reflected. This field shows only for landed cost category records, not for service or material types.

If you are creating a project expense type select which account you want debited when posting project time transactions. 

Note: If you enable the Expand Accounts preference, you can choose any account, not just bank accounts or expense accounts, when you are creating a landed cost category or a project expense type. 

Enabling the Expand Accounts preference has no effect when you are entering a payment method. */
  account?: string;
  /** Check this box if the payment method is a type of credit card. */
  creditcard?: boolean;
  /**  */
  externalid?: string;
  /** Check this box if the payment method is a type of debit card. */
  isdebitcard?: boolean;
  /** Check this box to remove all references to this record from your account.

You can reactivate the record at any time. */
  isinactive?: boolean;
  /** Check this box to allow customers to use this in the web store. */
  isonline?: boolean;
  /**  */
  merchantaccounts?: string;
  /** Enter the name for this record. This name appears in lists that include this record. */
  name: string;
}





/** 
 * Payment Method Sublists Definition.
 * Record's Internal Id: paymentmethod. 
 * Supports Custom Fields: true 
 */
export interface paymentmethodSublists {
  
  /** visuals: Payment Visuals */
  visuals: {
    /** flags - Flags  */
    flags?: string;
    /** location - URL  */
    location?: string;
  }
}





