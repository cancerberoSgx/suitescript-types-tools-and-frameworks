// This file is auto generated, do not edit it. 




/** 
 * Purchase Order Fields Definition.
 * Record's Internal Id: purchaseorder. 
 * Supports Custom Fields: true 
 */
export interface purchaseorderFields {
/** When you use SuiteFlow for purchase approvals, purchase orders and requests include the Approval Status field. The Approval Status field reflects the state of the transaction in the approval process.

Purchase orders and requests may have one of the following statuses:

    * Pending Approval &#x2013; The purchase has not yet been approved.
    * Approved &#x2013; The purchase has been given approval for processing.
    * Rejected &#x2013; The purchase approval is refused and the order will not be processed.
You may manually select a different status in this field if needed. */
  approvalstatus?: string;
  /** If you have customized the purchase order to display the Available Vendor Credit field, changing the subsidiary changes the available credit limit value to reflect the currency of the selected subsidiary. */
  availablevendorcredit?: number;
  /**  */
  balance?: number;
  /**  */
  billaddress?: string;
  /**  */
  billingaddress?: string;
  /**  */
  billisresidential?: string;
  /** If you wish, select the class that applies to this purchase order. Click New to set up a new class.

Go to <_TABNAME=LIST_CLASS_> > <_TASKCATEGORY=LIST_CLASS_> > Classes for details about existing classes. */
  class?: string;
  /**  */
  createddate?: Date;
  /**  */
  createdfrom?: string;
  /** This field displays the vendor Currency used for this transaction.

If you use the Multiple Currencies or Multi-Currency Vendors features, you can select any of this vendor's currencies to use on this transaction.

Important: Beginning with Version 2014 Release 2, the capabilities associated with the Multiple Currencies, Multi-Currency Customers, and Multi-Currency Vendors features are combined in the Multiple Currencies feature. If you are new to NetSuite, already using all three features, or not using all three features, only the Multiple Currencies box will appear on the Company subtab of the Enable Features page. When you enable this feature, you gain access to support for multiple currency customers and vendors. If you are already using Multiple Currencies and Multi-Currency Customers or Multi-Currency Vendors but not all three features, you will continue to see and maintain three boxes on the Company subtab. */
  currency: string;
  /** This vendor's currency is shown in this field.

All currency amounts on this transaction are shown in this currency. */
  currencyname?: string;
  /**  */
  currencysymbol?: string;
  /** If you customized a purchase order form, select it here, or click New to customize a new purchase order form. */
  customform: string;
  /** If you like, select a department.

Click New to enter a new department.

Go to <_TABNAME=LIST_DEPARTMENT_> > <_TASKCATEGORY=LIST_DEPARTMENT_> > Departments for details about existing departments. */
  department?: string;
  /** Enter the date by which the items to be ordered are needed. */
  duedate?: Date;
  /**  */
  email?: string;
  /** If you are entering a purchase request for an employee, select the employee's name here. If this employee has a supervisor, the supervisor must approve this request before it is treated as a purchase order.

Click New to set up a new employee record.

Go to <_TABNAME=LIST_EMPLOYEE_> > <_TASKCATEGORY=LIST_EMPLOYEE_> > Employees for details about existing employees. */
  employee?: string;
  /** Select the vendor for this purchase.

Click New to set up a new vendor.

Go to <_TABNAME=LIST_VENDOR_> > <_TASKCATEGORY=LIST_VENDOR_> > Vendors for details about existing suppliers.

Note:  If you use NetSuite OneWorld and the selected vendor record is shared with multiple subsidiaries, you can select an assigned subsidiary to associate with this purchase order. After you select the Subsidiary, the fields on the Items subtab change to reflect the values associated with the selected subsidiary. In addition, in the Classification section, the Class, Department, Location, Currency, Tax Nexus and other fields also change to reflect the selected subsidiary. */
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
  /** Enter the location where you technically acquire ownership. For example, if you own goods as soon as they ship and pay the shipping costs from your vendor s location to your own, you might enter Shipping point. */
  fob?: string;
  /** Select the standardized term for this transaction.

Incoterms are international commercial procurement practices that communicate the tasks, costs, and risks associated with the transportation and delivery of goods.
Incoterms define where the customer takes ownership of the product and are typically used for international orders, such as when an item goes through customs or crosses a border. */
  incoterm?: string;
  /** Intercompany Transaction Status can be:

    * Linked - intercompany order has been paired with an intercompany order in another subsidiary.
    * Pending - iintercompany order has not been paired with a corresponding order in another subsidiary.
    * Rejected - intercompany purchase order or vendor return authorization cannot be paired with a sales order or return authorization because it contains incorrect information, such as subsidiary, currency, amount, or other detail. */
  intercostatus?: string;
  /** Identifies the intercompany order in another subsidiary that this order is paired with.

Order pairs include Sales Order/Purchase Order and Vendor Return Authorization/Return Authorization. */
  intercotransaction?: string;
  /**  */
  isbasecurrency?: boolean;
  /**  */
  lastmodifieddate?: Date;
  /**  */
  linkedtrackingnumbers?: string;
  /** Select a location to associate with this purchase. Select New to create a new location record.

Go to <_TABNAME=LIST_LOCATION_> > <_TASKCATEGORY=LIST_LOCATION_> > Locations for details about existing locations. */
  location?: string;
  /** If you wish, enter a memo to describe this order. It will appear on reports such as the 2-line Purchase Orders register. */
  memo?: string;
  /** If you wish, type a message that will appear on the Purchase Order form. */
  message?: string;
  /** When you use SuiteFlow for purchase approvals, purchase orders and requests include the Next Approver field.
The Next Approver field displays the employee who approves or rejects the purchase based on the workflow requirements.
You can manually select a different approver in this field if necessary.

Note: If you have an approval chain or series of approvers for the same transaction, the value in this field can change during the approval process. */
  nextapprover?: string;
  /** This field shows the nexus of the transaction. NetSuite automatically populates this field based on the nexus lookup logic. 

You can override the transaction nexus and tax registration number that NetSuite automatically selects by checking the Nexus Override box. When you select a different nexus in the dropdown list, the corresponding tax registration number is automatically selected in the Subsidiary Tax Reg. Number field. */
  nexus?: string;
  /**  */
  orderstatus?: string;
  /** NetSuite inserts your account number for this vendor as entered at <_TABNAME=LIST_VENDOR_> > <_TASKCATEGORY=LIST_VENDOR_> > Vendors on the Financial subtab for this vendor's record. */
  otherrefnum?: string;
  /** This field displays the purchase contract associated with this order. For details about purchase contracts, click Help and read Purchase Contracts. */
  purchasecontract?: string;
  /**  */
  returntrackingnumbers?: string;
  /**  */
  shipaddress?: string;
  /** Enter the date you expect the items to be shipped. */
  shipdate?: Date;
  /**  */
  shipisresidential?: string;
  /** Select your shipping method for this transaction. */
  shipmethod?: string;
  /**  */
  shipoverride?: string;
  /**  */
  shippingaddress?: string;
  /** Select the customer you are shipping this order to. Select New to enter a new shipping address. */
  shipto?: string;
  /**  */
  source?: string;
  /**  */
  status?: string;
  /**  */
  statusRef?: string;
  /** This field displays the subsidiary associated with this transaction. */
  subsidiary?: string;
  /** This field shows the tax registration number of the transaction nexus. NetSuite automatically populates this field based on the nexus lookup logic. 

You can override the transaction nexus and tax registration number that NetSuite automatically selects by checking the Nexus Override box. When you select a different tax registration number in the dropdown list, the corresponding nexus is automatically selected in the Nexus field. */
  subsidiarytaxregnum?: string;
  /** If you have permission to approve this purchase order, check the Supervisor Approval box. */
  supervisorapproval?: boolean;
  /** Check this box to override the tax information on the Tax Details subtab of the transaction. Only roles with at least the Edit level of the Tax Details Tab permission can override the tax details. */
  taxdetailsoverride?: boolean;
  /** Check this box to override the values in the Nexus and Subsidiary Tax Reg. Number fields. Only roles with at least the Edit level of the Tax Details Tab permission can override the values that NetSuite automatically selects in these fields. */
  taxregoverride?: boolean;
  /** Select the discount terms that will apply to this order.

To add additional choices to this list, go to Setup > Accounting > Accounting Lists > New > Terms. */
  terms?: string;
  /** Check this box if you want to e-mail this purchase order. Then enter the e-mail address in the space to the right of the check box.

You can enter multiple e-mail addresses by separating them with semicolons. It is important to separate the addresses with only semicolons, and do not include any spaces. */
  tobeemailed?: boolean;
  /** Check this box if you want to fax this purchase order.

Enter the fax number in the space to the right of the check box if it doesn't already appear.

To fax NetSuite forms, an administrator must first set up fax service at <_TABNAME=ADMI_PRINTING_> > <_TASKCATEGORY=ADMI_PRINTING_> > Printing, Fax and Email Preferences. */
  tobefaxed?: boolean;
  /** Check this box if you wish to save this in a queue of purchase orders to print.

Otherwise, you can click Print below to submit and print this purchase order at once. */
  tobeprinted?: boolean;
  /** NetSuite computes the total of line items and then enters it here. */
  total?: number;
  /** Enter the shipment tracking number from the shipping company.

If a tracking number is entered in the exact format used by UPS or FedEx and the transaction is saved, the tracking number will show on the transaction as a link to the UPS or FedEx website. You can click the link to check the status of the shipment. */
  trackingnumbers?: string;
  /** NetSuite inserts today's date for the posting date of this purchase order. You can type or pick another date.

What you enter here determines the date range in which this transaction appears on the Purchase Orders Register.

You can select or enter custom date ranges on registers. */
  trandate: Date;
  /** NetSuite increases the largest purchase order number by one. If you wish, you can type another number. The next PO number will revert to the standard pattern.

Note: The maximum number of characters you can enter in this field is 45. */
  tranid?: string;
  /**  */
  unbilledorders?: number;
}





/** 
 * Purchase Order Sublists Definition.
 * Record's Internal Id: purchaseorder. 
 * Supports Custom Fields: true 
 */
export interface purchaseorderSublists {
  
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
    /** category - Category  */
    category: string;
    /** class - Class  */
    class: string;
    /** createdfrom - Created From  */
    createdfrom: string;
    /** customer - Customer  */
    customer: string;
    /** department - Department  */
    department: string;
    /** isbillable - Billable  */
    isbillable: boolean;
    /** isclosed - Closed  */
    isclosed: boolean;
    /** line -   */
    line: string;
    /** linkedorder - Linked Order  */
    linkedorder: string;
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
    /** createdfrom - Created From  */
    createdfrom: string;
    /** customer - Customer  */
    customer: string;
    /** deferrevrec -   */
    deferrevrec: boolean;
    /** department - Department  */
    department: string;
    /** description - Description  */
    description: string;
    /** expectedreceiptdate - Expected Receipt Date  */
    expectedreceiptdate: Date;
    /** id -   */
    id: string;
    /** inventorydetail - Inventory Detail  */
    inventorydetail: string;
    /** isbillable - Billable  */
    isbillable: boolean;
    /** isclosed - Closed  */
    isclosed: boolean;
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
    /** leadtime -   */
    leadtime: number;
    /** line -   */
    line: string;
    /** linenumber -   */
    linenumber: number;
    /** linkedorder - Linked Order  */
    linkedorder: string;
    /** matchbilltoreceipt - Match Bill To Receipt  */
    matchbilltoreceipt: boolean;
    /** matrixtype -   */
    matrixtype: string;
    /** options - Options  */
    options: string;
    /** printitems -   */
    printitems: string;
    /** purchasecontract - Purchase Contract  */
    purchasecontract: string;
    /** quantity - Quantity  */
    quantity: number;
    /** quantitybilled - Billed  */
    quantitybilled: number;
    /** quantityonshipments - Quantity On Shipments  */
    quantityonshipments: number;
    /** quantityreceived - Received  */
    quantityreceived: number;
    /** rate - Rate  */
    rate: string;
    /** rateschedule -   */
    rateschedule: string;
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





