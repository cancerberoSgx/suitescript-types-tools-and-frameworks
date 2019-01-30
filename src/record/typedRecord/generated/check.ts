// This file is auto generated, do not edit it. 




/** 
 * Check Fields Definition.
 * Record's Internal Id: check. 
 * Supports Custom Fields: true 
 */
export interface checkFields {
/** Select the bank account that will be affected by this transaction.

To set up a new bank account, click New.

For details about existing bank accounts, go to <_TABNAME=LIST_ACCOUNT_> > <_TASKCATEGORY=LIST_ACCOUNT_> > Accounts. */
  account?: string;
  /** NetSuite inserts the address of the payee from the payee record. 

To enable or disable the Auto Fill preference, go to <_TABNAME=TRAN_USERPREFS_> > Set Preferences.

If you want, you can change it here for just this transaction by typing up to five rows of information. */
  address?: string;
  /** NetSuite displays the balance of the selected bank account. */
  balance?: number;
  /** Check this box to send this check online.

You must follow the set up procedure in How Do I Set Up Online Bill Pay before you can use this feature.

The NetSuite basic package includes a set number of bill pay transactions. Click the Charges may apply link for more information. */
  billpay?: boolean;
  /** Select a class to associate with this transaction.

To create a new class, select New.

For details on existing classes, go to <_TABNAME=LIST_CLASS_> > <_TASKCATEGORY=LIST_CLASS_> > Classes. */
  class?: string;
  /**  */
  createddate?: Date;
  /** Select the currency this check is paid in. */
  currency: string;
  /**  */
  currencyname?: string;
  /**  */
  currencysymbol?: string;
  /**  */
  customform: string;
  /** Select a department to associate with this transaction.

To create a new department, select New.

For details on existing departments, go to <_TABNAME=LIST_DEPARTMENT_> > <_TASKCATEGORY=LIST_DEPARTMENT_> > Departments. */
  department?: string;
  /** Select the person or company you are paying with this check.

To set up a new payee, click New. */
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
  /** Check this box if you want to specify the landed cost per line item. */
  landedcostperline?: boolean;
  /**  */
  lastmodifieddate?: Date;
  /** Select a location to associate with this item.

Select New to create a new location record.

Go to Lists > Locations for details about existing locations. */
  location: string;
  /** If you want, enter a memo. What you enter here will print on the memo line of the check. */
  memo?: string;
  /**  */
  nexus?: string;
  /** Select the period to which you want to post this check.

If a period is closed, you cannot post to that period. */
  postingperiod: string;
  /**  */
  status?: string;
  /**  */
  statusRef?: string;
  /** If you use NetSuite OneWorld, the Subsidiary field defaults to the primary subsidiary associated with the Payee.

Note: If you share vendor records with multiple subsidiaries, you can change the subsidiary from the primary subsidiary to a secondary subsidiary. Changing the subsidiary updates the bank account to that of the selected subsidiary, updates the currency to that of the new bank, and clears the lines on the Expenses and Items subtabs. */
  subsidiary?: string;
  /** If you want to save this in a queue of checks to print, check this box.

Otherwise, to save and print this check now, you can click Save & Print. */
  tobeprinted?: boolean;
  /**  */
  total?: number;
  /** NetSuite inserts today's date for the posting date of this check. You can type or pick another date.

What you enter here determines the date range in which this transaction appears on the Bank register.

You can select or enter custom date ranges on registers. */
  trandate: Date;
  /** NetSuite automatically fills this field.

If you checked the To Be Printed box, this field autofills with To Print. You choose starting numbers when you print those checks.

If you are immediately printing this check, NetSuite increases the largest check number by one. You can type another number here, but the next number reverts to the standard pattern.

You can also use this field to record ACH, ATM, or other reference numbers. */
  tranid?: string;
  /** This field displays the system-generated number for this transaction type. */
  transactionnumber?: string;
  /** You can enter the dollar amount of the check, but NetSuite will update this amount as you add or edit line items. */
  usertotal?: number;
}





/** 
 * Check Sublists Definition.
 * Record's Internal Id: check. 
 * Supports Custom Fields: true 
 */
export interface checkSublists {
  
  /** accountingbookdetail: Accounting Books */
  accountingbookdetail: {
    /** accountingbook - Secondary Book  */
    accountingbook: string;
    /** exchangerate - Exchange Rate  */
    exchangerate?: number;
  }

  /** expense: Expenses */
  expense: {
    /** account - Account  */
    account?: string;
    /** amount - Amount  */
    amount?: number;
    /** category -   */
    category: string;
    /** class - Class  */
    class: string;
    /** customer - Customer  */
    customer: string;
    /** department - Department  */
    department: string;
    /** isbillable - Billable  */
    isbillable: boolean;
    /** line -   */
    line: string;
    /** location - Location  */
    location: string;
    /** memo - Memo  */
    memo: string;
  }

  /** item: Items */
  item: {
    /** amount - Amount  */
    amount: number;
    /** billvariancestatus -   */
    billvariancestatus: string;
    /** catchupperiod -   */
    catchupperiod: string;
    /** class - Class  */
    class: string;
    /** customer - Customer  */
    customer: string;
    /** deferrevrec -   */
    deferrevrec: boolean;
    /** department - Department  */
    department: string;
    /** description - Description  */
    description: string;
    /** id -   */
    id: string;
    /** inventorydetail - Inventory Detail  */
    inventorydetail: string;
    /** isbillable - Billable  */
    isbillable: boolean;
    /** isvsoebundle -   */
    isvsoebundle: string;
    /** item - Item  */
    item?: string;
    /** itemsubtype -   */
    itemsubtype: string;
    /** itemtype -   */
    itemtype: string;
    /** line -   */
    line: string;
    /** linenumber -   */
    linenumber: number;
    /** location - Location  */
    location?: string;
    /** matrixtype -   */
    matrixtype: string;
    /** options - Options  */
    options: string;
    /** quantity - Quantity  */
    quantity: number;
    /** rate - Rate  */
    rate: string;
    /** rateschedule -   */
    rateschedule: string;
    /** taxcode - Tax Code  */
    taxcode?: string;
    /** taxrate1 - Tax Rate  */
    taxrate1: number;
    /** units - Units  */
    units: string;
    /** vendorname - Vendor Name  */
    vendorname: string;
  }
}





