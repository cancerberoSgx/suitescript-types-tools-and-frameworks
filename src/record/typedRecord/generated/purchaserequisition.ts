// This file is auto generated, do not edit it. 




/** 
 * Requisition Fields Definition.
 * Record's Internal Id: purchaserequisition. 
 * Supports Custom Fields: true 
 */
export interface purchaserequisitionFields {
/** This field displays the status of this transaction in the approval process. */
  approvalstatus?: string;
  /** Select a Class if you track them.
For OneWorld accounts, select a class from the requestor's subsidiary. */
  class?: string;
  /**  */
  createddate?: Date;
  /**  */
  createdfrom?: string;
  /** The requestor's currency appears in the Currency field.
All currency amounts on this transaction are shown in this currency. */
  currency?: string;
  /**  */
  currencyname?: string;
  /**  */
  currencysymbol?: string;
  /** Choose the Standard Requisition form or select a custom form you have already created. Click New to customize a requisition form. */
  customform: string;
  /** Select a Department if you track them.
For OneWorld accounts, select a department from the requestor's subsidiary. */
  department?: string;
  /** In the Receive By field, enter the date you need to receive the requested items. */
  duedate?: Date;
  /** In the Requestor field, select the employee or person making the request.
For example, this can be a company representative, such as a consultant. */
  entity: string;
  /**  */
  entity_nexus_country?: string;
  /**  */
  entitynexus?: string;
  /**  */
  estimatedtotal?: number;
  /**  */
  exchangerate: number;
  /**  */
  externalid?: string;
  /**  */
  fob?: string;
  /**  */
  isbasecurrency?: boolean;
  /**  */
  lastmodifieddate?: Date;
  /**  */
  linkedtrackingnumbers?: string;
  /** If you track locations, select a Location for this order.

For OneWorld accounts, select a location from the requestor's subsidiary. */
  location: string;
  /** In the Memo field, enter a memo to identify this purchase order.

You can use the Search Transactions feature, to search for specific words and phrases in this field. */
  memo?: string;
  /**  */
  message?: string;
  /**  */
  messagesel?: string;
  /** When you use SuiteFlow for purchase approvals, purchase orders, and requests include the Next Approver field.
The Next Approver field displays the employee who approves or rejects the purchase based on the workflow requirements.
You can manually select a different approver in this field if necessary.

Note: If you have an approval chain or series of approvers for the same transaction, the value in this field can change during the approval process. */
  nextapprover?: string;
  /**  */
  nexus?: string;
  /**  */
  nexus_country?: string;
  /**  */
  oldrevenuecommitment?: string;
  /**  */
  returntrackingnumbers?: string;
  /**  */
  shipdate?: Date;
  /**  */
  source?: string;
  /**  */
  status?: string;
  /**  */
  statusRef?: string;
  /** Choose the subsidiary to associate with this transaction.

Note: If you use NetSuite OneWorld and the subsidiary you select is assigned to a vendor record that is shared with multiple subsidiaries, you can make the primary subsidiary the default on a transaction, and then you can change the default to any valid subsidiaries assigned to that vendor. */
  subsidiary?: string;
  /**  */
  terms?: string;
  /**  */
  total?: number;
  /**  */
  trackingnumbers?: string;
  /** Enter a date for this requisition.
The current date appears by default. */
  trandate: Date;
  /** In the Req # field, NetSuite increases the largest requisition number by one. If you wish, you can enter another number. The next requisition number will revert to the standard pattern.
Note: The maximum number of characters you can enter in this field is 45.</p? */
  tranid?: string;
  /**  */
  updatecurrency?: string;
}





/** 
 * Requisition Sublists Definition.
 * Record's Internal Id: purchaserequisition. 
 * Supports Custom Fields: true 
 */
export interface purchaserequisitionSublists {
  
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
    /** customer - Customer  */
    customer: string;
    /** department - Department  */
    department: string;
    /** estimatedamount -   */
    estimatedamount: number;
    /** isbillable - Billable  */
    isbillable: boolean;
    /** isclosed - Closed  */
    isclosed: boolean;
    /** line -   */
    line: string;
    /** linkedorder - Linked Order  */
    linkedorder: string;
    /** linkedorderstatus - Linked Order Status  */
    linkedorderstatus: string;
    /** location - Location  */
    location: string;
    /** memo - Memo  */
    memo: string;
    /** povendor -   */
    povendor: string;
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
    /** createpo -   */
    createpo: string;
    /** custcol_contact - Recipient  */
    custcol_contact: string;
    /** custcol_css_core_api_sourced_column - Item Sourced Field  */
    custcol_css_core_api_sourced_column: string;
    /** custcol_formula - Formula ( Default Value)  */
    custcol_formula: number;
    /** custcol_textanormal - Text A Normal  */
    custcol_textanormal: string;
    /** customer - Customer  */
    customer: string;
    /** deferrevrec -   */
    deferrevrec: boolean;
    /** department - Department  */
    department: string;
    /** description - Description  */
    description: string;
    /** estimatedamount - Estimated Amount  */
    estimatedamount: number;
    /** estimatedrate - Estimated Rate  */
    estimatedrate: number;
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
    /** line -   */
    line: string;
    /** linenumber -   */
    linenumber: number;
    /** linkedorder - Linked Order  */
    linkedorder: string;
    /** linkedorderstatus - Linked Order Status  */
    linkedorderstatus: string;
    /** matrixtype -   */
    matrixtype: string;
    /** options - Options  */
    options: string;
    /** porate -   */
    porate: number;
    /** povendor - Vendor  */
    povendor: string;
    /** quantity - Quantity  */
    quantity: number;
    /** quantityreceived - Received  */
    quantityreceived: number;
    /** rate - Rate  */
    rate: string;
    /** rateschedule -   */
    rateschedule: string;
    /** serialnumbers - Serial/Lot Numbers  */
    serialnumbers: string;
    /** units - Units  */
    units: string;
    /** vendorname - Vendor Name  */
    vendorname: string;
  }

  /** links: Purchase Orders */
  links: {
    /** id -   */
    id: string;
  }
}





