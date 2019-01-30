// This file is auto generated, do not edit it. 




/** 
 * Vendor Payment Fields Definition.
 * Record's Internal Id: vendorpayment. 
 * Supports Custom Fields: true 
 */
export interface vendorpaymentFields {
/** Select the bank account that will be used to pay these bills.

For details on accounts, go to <_TABNAME=LIST_ACCOUNT_> > <_TASKCATEGORY=LIST_ACCOUNT_> > Chart of Accounts. */
  account: string;
  /** NetSuite inserts the mailing address of the vendor from the record at <_TABNAME=LIST_VENDOR_> > <_TASKCATEGORY=LIST_VENDOR_> > Vendors. If you wish, you can change it here for just this transaction by typing up to 4 rows of information. */
  address?: string;
  /** Select the Accounts Payable account that will be affected by this transaction.</P

Click New to set up a new account.

For details on accounts, go to <_TABNAME=LIST_ACCOUNT_> > <_TASKCATEGORY=LIST_ACCOUNT_> > Chart of Accounts. */
  apacct?: string;
  /** NetSuite shows you the balance in this bank account. */
  balance?: number;
  /** Check this box to send this payment online.

You must follow the set up procedure in How Do I Set Up Online Bill Pay before you can use this feature.

The NetSuite basic package includes a set number of bill pay transactions. Click the Charges May Apply link for more information. */
  billpay?: boolean;
  /** Choose a class to associate with this transaction.

Click New to enter a new class.

Go to <_TABNAME=LIST_CLASS_> > <_TASKCATEGORY=LIST_CLASS_> > Classes for details about existing classes. */
  class?: string;
  /**  */
  createddate?: Date;
  /** Select the vendor's transaction currency you want to enter this bill in. */
  currency: string;
  /** This vendor's currency is shown in this field.

All currency amounts on this transaction are shown in this currency. */
  currencyname?: string;
  /**  */
  currencysymbol?: string;
  /**  */
  customform: string;
  /** Choose a department to associate with this transaction.

Click New to enter a new department.

Go to <_TABNAME=LIST_DEPARTMENT_> > <_TASKCATEGORY=LIST_DEPARTMENT_> > Departments for details about existing departments. */
  department?: string;
  /** Select the payee for this purchase.

    * Select a vendor to pay vendor bills.
    * Select an employee to pay an employee expense.

Note: If you have NetSuite OneWorld and you have defined vendor records that are shared with multiple secondary subsidiaries, the Subsidiary field defaults to the vendor&#x2019;s primary subsidiary for this vendor bill. You can, however, change it to any secondary subsidiary assigned to this vendor. 

If the vendor record you select is not shared with multiple subsidiaries, the Subsidiary field defaults to the vendor&#x2019;s assigned subsidiary.

Go to <_TABNAME=LIST_VENDOR_> > <_TASKCATEGORY=LIST_VENDOR_> > Vendors for details about existing vendors.

Go to <_TABNAME=LIST_EMPLOYEE_> > <_TASKCATEGORY=LIST_EMPLOYEE_> > Employees for details about existing employees. */
  entity: string;
  /**  */
  entitynexus?: string;
  /** The currency's exchange rate is shown in this field.

You can edit the exchange rate for this transaction only, or you can update the currency record with the exchange rate you enter here. */
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
  /** Enter a memo that shows the vendor's invoice number or your account number.

This appears on the memo line of the check. */
  memo?: string;
  /**  */
  nexus?: string;
  /** Select the period you want to post this bill payment to.

If a period is closed, you cannot post to that period. */
  postingperiod?: string;
  /** Check this box to queue a voucher to print for this payment.
 
After you have entered payments, print vouchers for them at <_TABNAME=TRAN_PRINT_> > <_TASKCATEGORY=TRAN_PRINT_> > Print Checks and Forms > Payment Vouchers. */
  printvoucher?: boolean;
  /**  */
  status?: string;
  /**  */
  statusRef?: string;
  /** In a OneWorld environment, NetSuite displays the name of the subsidiary associated with the bill in a read-only field. */
  subsidiary?: string;
  /** Check this box to send this payment via ACH processing.

Before you can use this function, you must follow the set up procedures in:

    * Set Up ACH Processing
    * Set Up Vendor Records for ACH Payments */
  toach?: boolean;
  /**  */
  tobeemailed?: boolean;
  /** Check this box if you wish to save this in a queue of checks to print.

You can also click Save & Print to print this at once. */
  tobeprinted?: boolean;
  /** NetSuite will update this amount as you add or edit line items. */
  total?: number;
  /** NetSuite inserts today's date for the posting date of this bill payment. You can type or pick another date.

What you enter here determines the date range in which this transaction appears on the Accounts Payable Register.

You can select or enter custom date ranges on registers. */
  trandate: Date;
  /** If you have clicked To Be Printed, you will choose starting check numbers later, when you print those checks. If you are submitting and immediately printing this check, NetSuite increases the largest check number by one. If you wish, you can type another number here, and the next check number will revert to the standard pattern. */
  tranid?: string;
  /** This field displays the system-generated number associated with this transaction. */
  transactionnumber?: string;
  /**  */
  unapplied?: number;
}





/** 
 * Vendor Payment Sublists Definition.
 * Record's Internal Id: vendorpayment. 
 * Supports Custom Fields: true 
 */
export interface vendorpaymentSublists {
  
  /** accountingbookdetail: Accounting Books */
  accountingbookdetail: {
    /** accountingbook - Secondary Book  */
    accountingbook: string;
    /** exchangerate - Exchange Rate  */
    exchangerate?: number;
  }

  /** apply: Apply */
  apply: {
    /** amount - Payment  */
    amount: number;
    /** apply - Apply  */
    apply: boolean;
    /** applydate - Date Due  */
    applydate: Date;
    /** createdfrom -   */
    createdfrom: string;
    /** disc - Disc. Taken  */
    disc: string;
    /** discamt - Disc. Avail.  */
    discamt: number;
    /** discdate - Disc. Date  */
    discdate: Date;
    /** doc -   */
    doc: string;
    /** due - Amt. Due  */
    due: number;
    /** duedate -   */
    duedate: Date;
    /** internalid - Hidden  */
    internalid: string;
    /** line -   */
    line: number;
    /** refnum - Ref No.  */
    refnum: string;
    /** total - Orig. Amt.  */
    total: number;
    /** url -   */
    url: string;
  }
}





