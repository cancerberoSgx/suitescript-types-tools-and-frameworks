// This file is auto generated, do not edit it. 




/** 
 * Deposit Application Fields Definition.
 * Record's Internal Id: depositapplication. 
 * Supports Custom Fields: true 
 */
export interface depositapplicationFields {
/**  */
  applied?: number;
  /** Select the Accounts Receivable account that will be affected by this transaction. Click New to set up a new account.

For details on accounts, go to <_TABNAME=LIST_ACCOUNT_> > <_TASKCATEGORY=LIST_ACCOUNT_> > Chart of Accounts. */
  aracct?: string;
  /** Select a class to associate with this transaction.

To create a new class, select New.

For details on existing classes, go to <_TABNAME=LIST_CLASS_> > <_TASKCATEGORY=LIST_CLASS_> > Classes. */
  class?: string;
  /**  */
  createddate?: Date;
  /**  */
  currency?: string;
  /** The customer or project shows in this field. */
  customer?: string;
  /** Select a department to associate with this transaction.

To create a new department, select New.

For details on existing departments, go to <_TABNAME=LIST_DEPARTMENT_> > <_TASKCATEGORY=LIST_DEPARTMENT_> > Departments. */
  department?: string;
  /** This field shows a link to the customer deposit being applied. */
  deposit?: string;
  /**  */
  depositdate?: Date;
  /**  */
  exchangerate?: number;
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
  /** Enter a memo to identify this application transaction. */
  memo?: string;
  /** Select the period you want to post this deposit to.

If a period is closed, you cannot post to that period. */
  postingperiod?: string;
  /**  */
  status?: string;
  /**  */
  statusRef?: string;
  /**  */
  subsidiary?: string;
  /**  */
  total?: number;
  /** The current date defaults to show in this field.

You can select or enter another date if necessary. */
  trandate: Date;
  /**  */
  unapplied?: number;
}





/** 
 * Deposit Application Sublists Definition.
 * Record's Internal Id: depositapplication. 
 * Supports Custom Fields: true 
 */
export interface depositapplicationSublists {
  
  /** accountingbookdetail: Accounting Books */
  accountingbookdetail: {
    /** accountingbook - Secondary Book  */
    accountingbook: string;
    /** exchangerate - Exchange Rate  */
    exchangerate?: number;
  }

  /** apply: Invoices */
  apply: {
    /** amount - Payment  */
    amount: number;
    /** apply - Apply  */
    apply: boolean;
    /** applydate - Date  */
    applydate: Date;
    /** createdfrom -   */
    createdfrom: string;
    /** doc -   */
    doc: string;
    /** due - Amt. Due  */
    due: number;
    /** duedate -   */
    duedate: Date;
    /** internalid - Hidden  */
    internalid: string;
    /** job -   */
    job: number;
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





