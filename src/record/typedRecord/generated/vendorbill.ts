// This file is auto generated, do not edit it. 




/** 
 * Vendor Bill Fields Definition.
 * Record's Internal Id: vendorbill. 
 * Supports Custom Fields: true 
 */
export interface vendorbillFields {
/** Select the Accounts Payable account that will be affected by this transaction.</p

Click New to set up a new account.

For details on accounts, go to <_TABNAME=LIST_ACCOUNT_> > <_TASKCATEGORY=LIST_ACCOUNT_> > Chart of Accounts. */
  account?: string;
  /** The approval status of this bill shows in this field.

Accept the default status or choose one of the following:
    * Approved &#x2013; No further review or processing is required before a payment is processed.
    * Pending Approval &#x2013; Someone with permission must approve the bill before a payment can be processed for it. */
  approvalstatus?: string;
  /** The Available Vendor Credit field displays the remaining credit available to this vendor before a payment is received. It is converted from vendor&#x2019;s primary currency into the transaction currency. The field value is available only in edit mode.

This field is visible after you customize the vendor bill. To display this field, enable accounts payable preferences:

   1. Go to Setup >Accounting > Preferences > Accounting Preferences.
   2. In the Accounts Payable section, check the Vendor Credit Limit Warnings and Vendor Credit Limit Includes Orders boxes.
   3. Click Save.
   4. In the vendor bill Customize menu, click Customize Form.
   5. In the Screen Fields subtab, beside Available Vendor Credit, check the Show box.
   6. Click Save.

If the transaction exceeds the vendor&#x2019;s credit limit, a warning message appears displaying the exceeded credit amount. The message does not prevent you from saving the transaction. */
  availablevendorcredit?: number;
  /**  */
  balance?: string;
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
  /** The credit limit you entered for your purchases from this vendor will appear here.

To enter or change a credit limit, go to <_TABNAME=LIST_VENDOR_> > <_TASKCATEGORY=LIST_VENDOR_> > Vendors. On the vendor record's Financial tab, enter the credit limit.

NetSuite will warn you when you meet or exceed this vendor's limit while you are entering orders if you go to Home > Set Preferences and check the Credit Limit Warnings box. */
  creditlimit?: number;
  /** The transaction currency for this bill is shown here.

If this bill was created from a purchase order, the currency on the originating purchase order is shown, and you cannot change the currency on the bill. */
  currency: string;
  /** This vendor's currency is shown in this field.

All currency amounts on this transaction are shown in this currency. */
  currencyname?: string;
  /**  */
  currencysymbol?: string;
  /** Select the appropriate standard or custom form to use. */
  customform: string;
  /** Select a department to associate with this transaction.

To create a new department, select New.

For details on existing departments, go to <_TABNAME=LIST_DEPARTMENT_> > <_TASKCATEGORY=LIST_DEPARTMENT_> > Departments. */
  department?: string;
  /** NetSuite enters the amount discounted on this bill.

This discount is based on the purchase order terms.  For example, if terms are set as 2%-10, Net 30 and the bill is paid within 10 days, a 2% discount is applied.

If this discount item is taxable, the discount is applied before taxes. If it is not taxable, the discount is applied after taxes. */
  discountamount?: number;
  /** If your vendor offers discounts for early payments on bills, a calculated date based on the terms of the bill automatically shows up in this field. This date is the last day you can pay this bill in order to receive a discount. */
  discountdate?: Date;
  /**  */
  documentstatus?: string;
  /** NetSuite inserts today's date. You can type or pick another date. If you do not assign a due date, this bill will not appear on aging reports. */
  duedate?: Date;
  /** Select the vendor for this purchase. Click New to set up a new vendor.

Go to <_TABNAME=LIST_VENDOR_> > <_TASKCATEGORY=LIST_VENDOR_> > Vendors for details about existing vendors.

Note: If you use NetSuite OneWorld, the Subsidiary field defaults to the primary subsidiary assigned to the selected vendor. If the selected vendor has been shared with multiple secondary subsidiaries, you can select the secondary subsidiary to associate with this bill. */
  entity: string;
  /**  */
  entitynexus?: string;
  /** The tax registration number for this entity displays here. */
  entitytaxregnum?: string;
  /** The currency's exchange rate is shown in this field.

You can edit the exchange rate for this transaction only, or you can update the currency record with the exchange rate you enter here. */
  exchangerate: number;
  /**  */
  externalid?: string;
  /**  */
  isbasecurrency?: boolean;
  /** Check this box to enter a landed cost per line item. */
  landedcostperline?: boolean;
  /**  */
  lastmodifieddate?: Date;
  /** Select a location to associate with this line item. Select New to create a new location record.

Go to Lists > Locations for details about existing locations. */
  location: string;
  /** Enter a memo that will appear on such reports as the 2-line Accounts Payable Register. */
  memo?: string;
  /** This field displays the next person set to approve this bill via approval routing. */
  nextapprover?: string;
  /** This field shows the nexus of the transaction. NetSuite automatically populates this field based on the nexus lookup logic. 

You can override the transaction nexus and tax registration number that NetSuite automatically selects by checking the Nexus Override box. When you select a different nexus in the dropdown list, the corresponding tax registration number is automatically selected in the Subsidiary Tax Reg. Number field. */
  nexus?: string;
  /** Check the Payment Hold box to apply a payment hold on a disputed bill:

    * The Make Payment button does not appear on the vendor bill and a vendor payment for that bill cannot be processed.
    * Vendor bills subject to a payment hold do not appear on the bill payments page.
    * The Electronic Payment SuiteApp does not process payments that are subject to a payment hold. */
  paymenthold?: boolean;
  /** Select the period to which you want to post this transaction.

You cannot post to a closed period. */
  postingperiod: string;
  /**  */
  received?: string;
  /**  */
  status?: string;
  /**  */
  statusRef?: string;
  /** Enter the subsidiary you want to associate with this transaction. */
  subsidiary?: string;
  /** This field shows the tax registration number of the transaction nexus. NetSuite automatically populates this field based on the nexus lookup logic. 

You can override the transaction nexus and tax registration number that NetSuite automatically selects by checking the Nexus Override box. When you select a different tax registration number in the dropdown list, the corresponding nexus is automatically selected in the Nexus field. */
  subsidiarytaxregnum?: string;
  /** Check this box to override the tax information on the Tax Details subtab of the transaction. Only roles with at least the Edit level of the Tax Details Tab permission can override the tax details. */
  taxdetailsoverride?: boolean;
  /** Check this box to override the values in the Nexus and Subsidiary Tax Reg. Number fields. Only roles with at least the Edit level of the Tax Details Tab permission can override the values that NetSuite automatically selects in these fields. */
  taxregoverride?: boolean;
  /** Select discount terms that apply to this bill.

To add additional choices to this list, go to <_TABNAME=LIST_ACCOUNTINGOTHERLIST_> > <_TASKCATEGORY=LIST_ACCOUNTINGOTHERLIST_> > Accounting Lists > Terms. */
  terms?: string;
  /**  */
  total?: number;
  /** NetSuite inserts today's date for the posting date of this bill. You can type or pick another date.

What you enter here determines the date range in which this transaction appears on the Accounts Payable Register.

You can select or enter custom date ranges on registers. */
  trandate: Date;
  /** Enter up to 45 characters to identify this transaction, such as the vendor's invoice number. This reference appears on reports such as the Accounts Payable Register.

Note: The maximum number of characters you can enter in this field is 45. */
  tranid?: string;
  /** By default, transaction lists display only the Number field in searches and reporting. If you plan to include the new Transaction Number field, be aware that this value will be the different from the value in the Number field for the twelve transaction types available through Version 2014 Release 1.

For the transaction types available through previous releases, these two values will be the same.

Note: The Transaction Number field is visible by default on standard NetSuite forms and invisible by default on customized forms. You can customize a form to display this field. */
  transactionnumber?: string;
  /**  */
  unbilledorders?: string;
  /** You can enter the dollar amount of the bill, but NetSuite will update this amount as you add or edit line items. */
  usertotal?: number;
}





/** 
 * Vendor Bill Sublists Definition.
 * Record's Internal Id: vendorbill. 
 * Supports Custom Fields: true 
 */
export interface vendorbillSublists {
  
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
    /** category - Category  */
    category: string;
    /** class - Class  */
    class: string;
    /** customer - Customer  */
    customer: string;
    /** department - Department  */
    department: string;
    /** grossamt - Gross Amt  */
    grossamt: number;
    /** isbillable - Billable  */
    isbillable: boolean;
    /** line -   */
    line: string;
    /** location - Location  */
    location: string;
    /** memo - Memo  */
    memo: string;
    /** orderdoc -   */
    orderdoc: string;
    /** orderline -   */
    orderline: string;
    /** projecttask - Project Task  */
    projecttask: string;
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
    /** billreceipts - Receipts  */
    billreceipts: string;
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
    /** grossamt - Gross Amt  */
    grossamt: number;
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
    /** landedcostcategory - Landed Cost Category  */
    landedcostcategory: string;
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
    /** orderdoc -   */
    orderdoc: string;
    /** orderline - {1}  */
    orderline: string;
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





