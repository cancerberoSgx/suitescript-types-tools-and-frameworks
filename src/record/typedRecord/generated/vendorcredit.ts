// This file is auto generated, do not edit it. 




/** 
 * Vendor Credit Fields Definition.
 * Record's Internal Id: vendorcredit. 
 * Supports Custom Fields: true 
 */
export interface vendorcreditFields {
/** Select the Accounts Payable account that will be affected by this transaction.</p

Click New to set up a new account.

For details on accounts, go to <_TABNAME=LIST_ACCOUNT_> > <_TASKCATEGORY=LIST_ACCOUNT_> > Chart of Accounts. */
  account?: string;
  /** NetSuite will update the Applied amount as you check bills on the Apply tab. */
  applied?: number;
  /** Check the Auto Apply box if you want NetSuite to apply the credit amount to the oldest outstanding vendor bills. NetSuite remembers your preference for using the Auto Apply box on vendor credits. The next time you enter a vendor credit, the Auto Apply box is checked or cleared by default based on the last vendor credit you entered. */
  autoapply?: boolean;
  /** In the Vendor Select field, choose a vendor.
Verify the billing address displayed in the Vendor field. */
  billaddresslist?: string;
  /**  */
  billingaddress?: string;
  /** Select a class to associate with this transaction.

To create a new class, select New.

For details on existing classes, go to <_TABNAME=LIST_CLASS_> > <_TASKCATEGORY=LIST_CLASS_> > Classes. */
  class?: string;
  /**  */
  createddate?: Date;
  /** This field displays the return authorization from which this bill credit is created. */
  createdfrom?: string;
  /** Select the currency you want to enter this credit in. */
  currency: string;
  /** This vendor's currency is shown in this field.

All currency amounts on this transaction are shown in this currency. */
  currencyname?: string;
  /**  */
  currencysymbol?: string;
  /**  */
  customform: string;
  /** Select a department to associate with this transaction.

To create a new department, select New.

For details on existing departments, go to <_TABNAME=LIST_DEPARTMENT_> > <_TASKCATEGORY=LIST_DEPARTMENT_> > Departments. */
  department?: string;
  /** Select the vendor for this credit. Click New to set up a new vendor.

If you have NetSuite OneWorld and you have defined vendor records that are shared with multiple secondary subsidiaries, you can associated this vendor credit with any of the subsidiaries assigned to this vendor. The items that can be credited reflect the combination of the selected vendor and subsidiary. 

Go to <_TABNAME=LIST_VENDOR_> > <_TASKCATEGORY=LIST_VENDOR_> > Vendors for details about existing suppliers. */
  entity: string;
  /**  */
  entitynexus?: string;
  /**  */
  entitytaxregnum?: string;
  /** The currency's exchange rate is shown in this field.

You can edit the exchange rate for this transaction only, or you can update the currency record with the exchange rate you enter here. */
  exchangerate: number;
  /**  */
  externalid?: string;
  /**  */
  isbasecurrency?: boolean;
  /**  */
  lastmodifieddate?: Date;
  /** Select a location to associate with this line item. Select New to create a new location record.

Go to Lists > Locations for details about existing locations. */
  location: string;
  /** Enter a memo that will appear on such reports 2-line Accounts Payable Register. */
  memo?: string;
  /** This field shows the nexus of the transaction. NetSuite automatically populates this field based on the nexus lookup logic. 

You can override the transaction nexus and tax registration number that NetSuite automatically selects by checking the Nexus Override box. When you select a different nexus in the dropdown list, the corresponding tax registration number is automatically selected in the Subsidiary Tax Reg. Number field. */
  nexus?: string;
  /** Select the period you want to post this vendor credit to.

If a period is closed, you cannot post to that period. */
  postingperiod: string;
  /** This field displays the subsidiary associated with this transaction. */
  subsidiary?: string;
  /** This field shows the tax registration number of the transaction nexus. NetSuite automatically populates this field based on the nexus lookup logic. 

You can override the transaction nexus and tax registration number that NetSuite automatically selects by checking the Nexus Override box. When you select a different tax registration number in the dropdown list, the corresponding nexus is automatically selected in the Nexus field. */
  subsidiarytaxregnum?: string;
  /** Check this box to override the tax information on the Tax Details subtab of the transaction. Only roles with at least the Edit level of the Tax Details Tab permission can override the tax details. */
  taxdetailsoverride?: boolean;
  /** Check this box to override the values in the Nexus and Subsidiary Tax Reg. Number fields. Only roles with at least the Edit level of the Tax Details Tab permission can override the values that NetSuite automatically selects in these fields. */
  taxregoverride?: boolean;
  /**  */
  total?: number;
  /** NetSuite inserts today's date for the posting date of this vendor credit. You can type or pick another date.

What you enter here determines the date range in which this transaction appears on the Accounts Payable Register.

You can select or enter custom date ranges on registers. */
  trandate: Date;
  /** Enter up to 45 characters to identify this transaction, such as the vendor's invoice or credit number. This reference appears on reports such as the Accounts Payable Register. */
  tranid?: string;
  /** If you have set up auto-generated numbering (Setup > Company > Setup Tasks > Auto-Generated Numbers), this field displays To Be Generated for this transaction type.

Account-based transaction types such as Check, where the numbering sequence is dependent upon a particular account, and transaction types where the numbers are used for external reference such as Vendor Bill, display this read-only field.

Note: By default, transaction lists display only the Number field in searches and reporting. If you plan to include the new Transaction Number field, be aware that this value will be different from the value in the Number field for account-based and externally referenced transaction types. For the other transaction types, these two values will be the same. */
  transactionnumber?: string;
  /** NetSuite will update the Unapplied amount as you check bills on the Apply tab. */
  unapplied?: number;
  /** You can enter the dollar amount of the transaction, but NetSuite will update this as you add or edit line items. */
  usertotal?: number;
}





/** 
 * Vendor Credit Sublists Definition.
 * Record's Internal Id: vendorcredit. 
 * Supports Custom Fields: true 
 */
export interface vendorcreditSublists {
  
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

  /** expense: Expenses */
  expense: {
    /** account - Account  */
    account?: string;
    /** amortizationenddate - Amort. End  */
    amortizationenddate: Date;
    /** amortizationresidual - Residual  */
    amortizationresidual: string;
    /** amortizationsched - Amort. Schedule  */
    amortizationsched: string;
    /** amortizationtype -   */
    amortizationtype: string;
    /** amortizstartdate - Amort. Start  */
    amortizstartdate: Date;
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
    /** scheduletype -   */
    scheduletype: string;
  }

  /** item: Items */
  item: {
    /** amortizationenddate - Amort. End  */
    amortizationenddate: Date;
    /** amortizationresidual - Residual  */
    amortizationresidual: string;
    /** amortizationsched - Amort. Schedule  */
    amortizationsched: string;
    /** amortizationtype -   */
    amortizationtype: string;
    /** amortizstartdate - Amort. Start  */
    amortizstartdate: Date;
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
    /** scheduletype -   */
    scheduletype: string;
    /** units - Units  */
    units: string;
    /** vendorname - Vendor Name  */
    vendorname: string;
  }

  /** taxdetails: Tax Detail */
  taxdetails: {
    /** calcdetail - Details  */
    calcdetail: string;
    /** grossamount - Gross Amount  */
    grossamount: number;
    /** netamount - Net Amount  */
    netamount: number;
    /** taxamount - Tax Amount  */
    taxamount?: number;
    /** taxbasis - Tax Basis  */
    taxbasis?: number;
    /** taxcode - Tax Code  */
    taxcode?: string;
    /** taxdetailsreference - Tax Details Reference  */
    taxdetailsreference: string;
    /** taxrate - Tax Rate  */
    taxrate?: number;
    /** transaction - Transaction  */
    transaction: string;
  }
}





