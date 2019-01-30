// This file is auto generated, do not edit it. 




/** 
 * Deposit Fields Definition.
 * Record's Internal Id: deposit. 
 * Supports Custom Fields: true 
 */
export interface depositFields {
/** Select the bank account to receive these funds. Click New to set up a new bank account.

For details about existing bank accounts, go to <_TABNAME=LIST_ACCOUNT_> > Accounts. */
  account: string;
  /** Choose a class to associate with this transaction.

To enter a new class, click New.

For details about existing classes, go to <_TABNAME=LIST_CLASS_> > <_TASKCATEGORY=LIST_CLASS_> > Classes. */
  class?: string;
  /**  */
  createddate?: Date;
  /**  */
  creditcardprocessor?: string;
  /**  */
  currency: string;
  /** The currency of this bank account is shown in this field. */
  currencyname?: string;
  /** Select the custom form for this deposit. */
  customform: string;
  /** Choose a department to associate with this transaction.

Click New to enter a new department.

Go to <_TABNAME=LIST_DEPARTMENT_> > <_TASKCATEGORY=LIST_DEPARTMENT_> > Departments for details about existing departments. */
  department?: string;
  /** The currency's exchange rate is shown in this field.

If the bank account's currency is the same as the subsidiary's base currency, the exchange rate is a read-only field. */
  exchangerate: number;
  /**  */
  externalid?: string;
  /**  */
  isbasecurrency?: boolean;
  /**  */
  lastmodifieddate?: Date;
  /** Select a location to associate with this transaction.

To create a new location, select New.

For details on existing locations, go to <_TABNAME=LIST_LOCATION_> > <_TASKCATEGORY=LIST_LOCATION_> > Locations. */
  location?: string;
  /** If you want, enter a memo to describe this deposit. It will appear on reports. */
  memo?: string;
  /** Select the period to which you want to post this deposit.

If a period is closed, you cannot post to that period. */
  postingperiod?: string;
  /** If you use NetSuite OneWorld, the subsidiary defaults to that associated with the selected bank account. */
  subsidiary?: string;
  /**  */
  taxperiod?: string;
  /** If you enter multiple deposits before printing, you can print all the slips at once. To do this, check the To Be Printed box on each transaction page as you enter deposits.
 
To print the queued deposits, go to <_TABNAME=TRAN_PRINT_DEPOSIT_> > <_TASKCATEGORY=TRAN_PRINT_DEPOSIT_> Print Deposits. */
  tobeprinted?: boolean;
  /** Enter the Amount being deposited. */
  total?: number;
  /** NetSuite inserts today's date for the posting date of this deposit. You can type or pick another date.

What you enter here determines the date range in which this transaction appears on the Bank register.

You can select or enter custom date ranges on registers. */
  trandate: Date;
  /** This field displays the system-generated number associated with this deposit. */
  tranid?: string;
  /**  */
  updatecurrency?: string;
}





/** 
 * Deposit Sublists Definition.
 * Record's Internal Id: deposit. 
 * Supports Custom Fields: true 
 */
export interface depositSublists {
  
  /** accountingbookdetail: Accounting Books */
  accountingbookdetail: {
    /** accountingbook - Secondary Book  */
    accountingbook: string;
    /** exchangerate - Exchange Rate  */
    exchangerate?: number;
  }

  /** cashback: Cash Back */
  cashback: {
    /** account - Account  */
    account?: string;
    /** amount - Amount  */
    amount?: number;
    /** class - Class  */
    class: string;
    /** department - Department  */
    department: string;
    /** line -   */
    line: string;
    /** location - Location  */
    location: string;
    /** memo - Memo  */
    memo: string;
  }

  /** other: Other Deposits */
  other: {
    /** account - Account  */
    account?: string;
    /** amount - Amount  */
    amount?: number;
    /** class - Class  */
    class: string;
    /** department - Department  */
    department: string;
    /** entity - Name  */
    entity: string;
    /** line -   */
    line: string;
    /** location - Location  */
    location: string;
    /** memo - Memo  */
    memo: string;
    /** paymentmethod - Payment Method  */
    paymentmethod: string;
    /** refnum - Number  */
    refnum: string;
  }

  /** payment: Payments */
  payment: {
    /** class - Class  */
    class: string;
    /** currency - Currency  */
    currency: string;
    /** department - Department  */
    department: string;
    /** deposit - Deposit  */
    deposit: boolean;
    /** docdate - Date  */
    docdate: Date;
    /** docnumber - Number  */
    docnumber: string;
    /** entity - From  */
    entity: string;
    /** id -   */
    id: string;
    /** lineid -   */
    lineid: number;
    /** location - Location  */
    location: string;
    /** memo - Memo  */
    memo: string;
    /** paymentamount - Amount (null)  */
    paymentamount: number;
    /** paymentmethod - Pmt. Meth.  */
    paymentmethod: string;
    /** pmtcurrencyprecision - Currency Precision  */
    pmtcurrencyprecision: string;
    /** refnum - Ref No.  */
    refnum: string;
    /** transactionamount - Payment Amount  */
    transactionamount: number;
    /** type - Type  */
    type: string;
  }
}





