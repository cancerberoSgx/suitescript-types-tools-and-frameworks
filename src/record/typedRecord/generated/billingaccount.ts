// This file is auto generated, do not edit it. 




/** 
 * Billing Account Fields Definition.
 * Record's Internal Id: billingaccount. 
 * Supports Custom Fields: true 
 */
export interface billingaccountFields {
/** Select the billing schedule associated with this billing account. */
  billingschedule: string;
  /** Select the cash sale form you want to use for this billing account. */
  cashsaleform?: string;
  /**  */
  class?: string;
  /**  */
  createdby?: string;
  /**  */
  createddate?: Date;
  /** Select the currency this customer conducts business in. This customer's currency cannot be changed after transactions for this customer have been saved. All transactions involving this customer are conducted in this currency. Transaction figures are converted to your base currency in registers and on reports.

If you use the Multi-Currency Customers feature, select the customer's primary currency in this field. The primary currency is the default currency on transactions and is used to display balance information for this customer. You can enter other transaction currencies on the Currencies subtab under the Financial subtab.

Subcustomers are assigned the same currency as the parent customer.

You can change the currency (or primary) currency at any time as long as the customer is not also have a vendor, partner, or other name record. Also, if you change the currency, you must re-enter the customer credit limit in the new currency.

An administrator can create new currency records at <_TABNAME=EDIT_CURRENCY_> > <_TASKCATEGORY=EDIT_CURRENCY_> > Currencies. */
  currency: string;
  /** The name of the customer associated with this billing account. */
  customer: string;
  /** If checked, this field indicates that this is the default billing account for this customer. */
  customerdefault?: boolean;
  /** Select the form you want to use to enter this record.

Select Standard Customer Form to continue using this form, select a custom customer form you have already created, or select New to create a custom customer form. */
  customform?: string;
  /**  */
  department?: string;
  /**  */
  externalid?: string;
  /** Indicates how often the customers is billed. The information for this field is sourced from the billing schedule. */
  frequency?: string;
  /** The number of the billing account. This number is automatically generated upon save. */
  idnumber?: string;
  /**  */
  idnumberexternal?: string;
  /** Check this box if the billing account is no longer active. */
  inactive?: boolean;
  /** Select the invoice form you want to use for this billing account. */
  invoiceform?: string;
  /**  */
  lastbillcycledate?: Date;
  /**  */
  lastbilldate?: Date;
  /** Enter a description for this billing account. */
  memo?: string;
  /** The name of this billing account. */
  name: string;
  /**  */
  nextbillcycledate?: Date;
  /** Enter the date this person or company became a customer, lead or prospect.

If this person or company has a contract with you, enter the start date of the contract.

If you enter an estimate or an opportunity for this customer, this field will be updated with the date of that transaction. */
  startdate: Date;
  /** Select the subsidiary to associate with this entity or job. You cannot enter transactions for this entity or job unless a subsidiary is assigned.
 
If you select this entity on a transaction, the transaction is associated with this subsidiary. The entity is able to access only information associated with this subsidiary.
 
Note: Once a transaction has posted for the entity or job, you are not able to change the subsidiary selected on the entity or job record. */
  subsidiary?: string;
}





/** 
 * Billing Account Sublists Definition.
 * Record's Internal Id: billingaccount. 
 * Supports Custom Fields: true 
 */
export interface billingaccountSublists {
  
}





