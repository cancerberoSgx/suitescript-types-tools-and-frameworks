// This file is auto generated, do not edit it. 




/** 
 * Credit Memo Fields Definition.
 * Record's Internal Id: creditmemo. 
 * Supports Custom Fields: true 
 */
export interface creditmemoFields {
/** Select the Accounts Receivable account that will be affected by this transaction. </P

Click New to set up a new account. */
  account?: string;
  /** The handling cost automatically calculates depending on the shipping method you select in the Ship Via field.

To change the cost of handling, go to Lists > Shipping Items and select the shipping method with the handling cost you want to change. */
  althandlingcost?: number;
  /** The shipping cost automatically calculates depending on the shipping method you select in the Ship Via field above.

To change the cost of a shipping method, go to Lists > Shipping Items and select the shipping method you want to change.

If you use UPS Real-Time rates, shipments over 150lbs are broken up into shipments less than or equal to 150lbs for charging. */
  altshippingcost?: number;
  /**  */
  amountpaid?: number;
  /**  */
  amountremaining?: number;
  /** NetSuite displays the amount of credit you applied below. */
  applied?: number;
  /** Check this box to automatically apply credit to the oldest open receivable.
 
If you clear this box, the credit amount defaults to unapplied and you must later apply the credit amount to an open receivable.
 
Once you check or uncheck the Auto Apply box on a credit memo and save it, the box retains the setting the next time you enter a credit memo. */
  autoapply?: boolean;
  /**  */
  balance?: number;
  /**  */
  billaddress?: string;
  /** Select the appropriate billing address for this transaction. Select New to enter a new billing address. */
  billaddresslist?: string;
  /**  */
  billingaddress?: string;
  /**  */
  billisresidential?: string;
  /** Select a class to associate with this transaction.

To create a new class, select New.

For details on existing classes, go to <_TABNAME=LIST_CLASS_> > <_TASKCATEGORY=LIST_CLASS_> > Classes. */
  class?: string;
  /**  */
  consolidatebalance?: number;
  /**  */
  couponcode?: string;
  /**  */
  createddate?: Date;
  /**  */
  createdfrom?: string;
  /** If you do not use the Multi-Currency Customers feature, the currency of the customer you are creating this transaction for is shown here.

If you use the Multi-Currency Customers feature, select the transaction currency you want to create this transaction in. This customer's primary currency is selected by default.

If you have already selected items on this transaction, selecting a new currency refreshes them to show the price in the new currency (except for items you entered custom prices for) and recalculates tax and gross profit. */
  currency: string;
  /** This customer's currency is shown in this field.

All currency amounts on this transaction are shown in this currency. */
  currencyname?: string;
  /**  */
  currencysymbol?: string;
  /** If you customized a credit memo form, select it here, or click New to customize a new credit memo form. */
  customform: string;
  /** Deferred Revenue:

amount of revenue deferred on this transaction */
  deferredrevenue?: number;
  /** Select a department to associate with this transaction.

To create a new department, select New.

For details on existing departments, go to <_TABNAME=LIST_DEPARTMENT_> > <_TASKCATEGORY=LIST_DEPARTMENT_> > Departments. */
  department?: string;
  /** You can select a discount for this credit memo if one was applied to the original sale. NetSuite fills the Rate and Discount Total fields based on the discount you choose.

Leave this field blank if you do not want to apply a discount to this transaction. */
  discountitem?: string;
  /** NetSuite enters the rate for the discount item you selected. You can change the discount rate for this cash refund.

Enter the discount as a dollar amount like 10.00, or as a percentage like 10%. */
  discountrate?: string;
  /** NetSuite enters the amount discounted on this credit memo.

If this discount item is taxable, the discount is applied before taxes. If it is not taxable, the discount is applied after taxes. */
  discounttotal?: number;
  /**  */
  email?: string;
  /** Select the customer for this credit. If you are using projects, select the appropriate project rather than the master customer account.

To create a new customer record, select New.

For details on existing customers and projects, go to <_TABNAME=LIST_CUSTJOB_> > <_TASKCATEGORY=LIST_CUSTJOB_> > Customers. */
  entity: string;
  /**  */
  entitynexus?: string;
  /**  */
  entitytaxregnum?: string;
  /** Estimated Gross Profit: Read-only field that equals the revenue amount minus the Est. Cost. At the transaction level, it equals the gross profit of all lines, factoring transaction-level discounts and markups. */
  estgrossprofit?: number;
  /** Estimated Gross Profit Margin, as a percentage: Read-only field that equals the Est. Gross Profit divided by revenue, expressed as a percentage. At the transaction level, it equals the gross profit percent of all lines, factoring transaction-level discounts and markups. */
  estgrossprofitpercent?: number;
  /** The currency's exchange rate is shown in this field.

You can edit the exchange rate for this transaction only, or you can update the currency record with the exchange rate you enter here. */
  exchangerate: number;
  /** Check this option to exclude this transaction and its subordinate transactions from inclusion in all commission calculations. */
  excludecommission?: boolean;
  /**  */
  externalid?: string;
  /** Enter the amount the customer was charged for handling. */
  handlingcost?: number;
  /** The tax rate for this tax code is shown here. */
  handlingtax1rate?: string;
  /** Select the tax code that determines the tax for handling charges. */
  handlingtaxcode?: string;
  /**  */
  isbasecurrency?: boolean;
  /** Check this box if you want to allow shipping to more than one address, using alternative shipping methods, for this transaction.  
Checking this box adds the fields Ship To, Carrier and Ship Via fields to the Item line.

Search "Multiple Shipping Routes" in the Help Center for more information. */
  ismultishipto?: boolean;
  /** Check this box if the order being credited is taxable. */
  istaxable?: boolean;
  /**  */
  lastmodifieddate?: Date;
  /** Select the lead source this transaction is associated with.

If you use the Marketing Automation feature, your list of lead sources is your list of campaigns.

If you do not use Marketing Automation, you can create new lead sources by going to <_TABNAME=LIST_CRMOTHERLIST_> > <_TASKCATEGORY=LIST_CRMOTHERLIST_> > CRM Lists > New and clicking Lead Sources. */
  leadsource?: string;
  /** Select a location to associate with this transaction.

To create a new location, select New.

For details on existing locations, go to <_TABNAME=LIST_LOCATION_> > <_TASKCATEGORY=LIST_LOCATION_> > Locations. */
  location: string;
  /** If you wish, enter a memo to describe this credit. It will appear on reports such as the 2-line Accounts Receivable register that your customers can see if you give them permission to log in and view their transaction history. */
  memo?: string;
  /** Select a customer message that will appear on the Credit Memo form.

To add additional choices to this list, go to <_TABNAME=LIST_ACCOUNTINGOTHERLIST_> > <_TASKCATEGORY=LIST_ACCOUNTINGOTHERLIST_> > Accounting Lists > New > Customer Message. */
  message?: string;
  /** Select a customer message to appear on this form. For example, you may add "Thank you for your business!"

Choose from the list of existing customer messages stored in Accounting Lists.

The text of the selected message appears in the Customer Message field. In this field, you can optionally edit the message or enter a new customer message for only this transaction.

To add messages to appear in the Select Message field, go to <_TABNAME=LIST_ACCOUNTINGOTHERLIST_> > <_TASKCATEGORY=LIST_ACCOUNTINGOTHERLIST_> > Accounting Lists > New, and click Customer Message. */
  messagesel?: string;
  /**  */
  muccpromocodeinstance?: string;
  /** This field shows the nexus of the transaction. NetSuite automatically populates this field based on the nexus lookup logic. 

You can override the transaction nexus and tax registration number that NetSuite automatically selects by checking the Nexus Override box. When you select a different nexus in the dropdown list, the corresponding tax registration number is automatically selected in the Subsidiary Tax Reg. Number field. */
  nexus?: string;
  /** For your customers' convenience, you can enter their purchase order number here. */
  otherrefnum?: string;
  /** The partner associated with this customer appears in the Partner field.
 
You can change the partner for this transaction. */
  partner?: string;
  /** Select the period you want to post this credit memo to.

If a period is closed, you cannot post to that period. */
  postingperiod: string;
  /** Select a promotion code to apply to this transaction.

Customers associated with a partner can only use that partner's promotion codes.
If you select a promotion code associated with a partner, this transaction is attributed to that partner for reporting purposes.

Create new promotion codes at <_TABNAME=EDIT_REFERRALCODE_> > <_TASKCATEGORY=EDIT_REFERRALCODE_> > Promotion Codes > New. */
  promocode?: string;
  /**  */
  promocodepluginimpl?: string;
  /** Recognized Revenue:

cumulative amount of revenue recognized for this transaction */
  recognizedrevenue?: number;
  /** The possible values for this field are:

   1. Pending: indicates that no recognition has occurred. All revenue is still deferred.
   2. In Progress: indicates that some recognition has occurred.
   3. Completed: indicates that all recognition has occurred. No deferred revenue remains. */
  revenuestatus?: string;
  /** Check this check box to create a Revenue Commitment or Revenue Commitment Reversal.

    * On a Sales Order, the Revenue Commitment replaces an invoice
    * On a Return Authorization, the Revenue Commitment Reversal replaces a credit memo.

NetSuite creates all applicable Revenue Recognition schedules the Revenue Commitment or Revenue Commitment Reversal. */
  revreconrevcommitment?: boolean;
  /** You can change the sales effective date for this transaction.

The sales effective date determines which commission plan and historical sales team this transaction applies to.

If this credit memo is created from a return authorization, the sales effective date from the return shown in the Created From field is set by default for this credit memo. */
  saleseffectivedate?: Date;
  /**  */
  salesgroup?: string;
  /** NetSuite inserts the sales representative associated with this company on the customer record at <_TABNAME=LIST_CUSTJOB_> > <_TASKCATEGORY=LIST_CUSTJOB_> > Customers.

If a different sales rep is assigned to this transaction, select that sales rep here.

To add additional sales reps to this list, go to <_TABNAME=EDIT_EMPLOYEE_> > <_TASKCATEGORY=EDIT_EMPLOYEE_> > Employees > New. */
  salesrep?: string;
  /**  */
  shipaddress?: string;
  /**  */
  shipaddresslist?: string;
  /**  */
  shipisresidential?: string;
  /** Enter the method used to ship this order to the customer. */
  shipmethod?: string;
  /**  */
  shipoverride?: string;
  /**  */
  shippingaddress?: string;
  /** Enter the amount the customer was charged for shipping. */
  shippingcost?: number;
  /**  */
  shippingcostoverridden?: string;
  /** The tax rate for this tax code is shown here. */
  shippingtax1rate?: string;
  /** Select the tax code that determines the tax charged for shipping. */
  shippingtaxcode?: string;
  /**  */
  source?: string;
  /**  */
  status?: string;
  /**  */
  statusRef?: string;
  /**  */
  subsidiary?: string;
  /** This field shows the tax registration number of the transaction nexus. NetSuite automatically populates this field based on the nexus lookup logic. 

You can override the transaction nexus and tax registration number that NetSuite automatically selects by checking the Nexus Override box. When you select a different tax registration number in the dropdown list, the corresponding nexus is automatically selected in the Nexus field. */
  subsidiarytaxregnum?: string;
  /** This field shows the total of the items on this credit memo.

This is the total before any discounts, shipping cost, handling cost or tax is added to the order. */
  subtotal?: number;
  /** Check this box if you want to update the sales team on the customer's record with changes you make here. */
  syncpartnerteams?: boolean;
  /** Check this box if you want to update the sales team on the customer's record with changes you make here. */
  syncsalesteams?: boolean;
  /** Check this box to override the tax information on the Tax Details subtab of the transaction. Only roles with at least the Edit level of the Tax Details Tab permission can override the tax details. */
  taxdetailsoverride?: boolean;
  /** NetSuite inserts the tax item for this customer from the record at Lists > Customers. To credit a previous sale, duplicate the tax item from that sale. */
  taxitem?: string;
  /** NetSuite inserts the percentage rate of the tax item from its record at Lists > Items. To credit a previous sale, duplicate the tax rate from that sale. */
  taxrate?: number;
  /** Check this box to override the values in the Nexus and Subsidiary Tax Reg. Number fields. Only roles with at least the Edit level of the Tax Details Tab permission can override the values that NetSuite automatically selects in these fields. */
  taxregoverride?: boolean;
  /** NetSuite multiplies the tax rate by the taxable total of line items and enters it here. */
  taxtotal?: number;
  /** Check this box if you want to e-mail this credit memo. Then enter the e-mail address in the space to the right of the check box.

If you don't check this box, the credit memo won't be e-mailed.

You can enter multiple e-mail addresses separated by a semicolon with no spaces. */
  tobeemailed?: boolean;
  /** Check this box if you want to fax this credit memo.

Enter the fax number in the space to the right of the check box if it doesn't already appear.

To fax NetSuite forms, an administrator must first set up fax service at <_TABNAME=ADMI_PRINTING_> > <_TASKCATEGORY=ADMI_PRINTING_> > Printing, Fax and Email Preferences. */
  tobefaxed?: boolean;
  /** Check this box if you wish to save this in a queue of credit memos to print. Otherwise, you can click Print below to submit and print this credit memo at once. */
  tobeprinted?: boolean;
  /** NetSuite computes the total of line items and tax and then enters it here. */
  total?: number;
  /** Estimated Cost: Estimated cost of the specific number of items; estimated rate x quantity = estimated cost. */
  totalcostestimate?: number;
  /** NetSuite inserts today's date as the date of this order. You can type or pick another date. */
  trandate: Date;
  /** NetSuite increases the largest credit memo number by one. If you wish, you can type another number. The next credit memo number will revert to the standard pattern.

You can enter a maximum of 45 characters in this field. */
  tranid?: string;
  /** Check this box to include all items added to this transaction as a VSOE bundle. */
  tranisvsoebundle?: boolean;
  /** NetSuite displays the remaining amount of credit to be applied. */
  unapplied?: number;
  /**  */
  unbilledorders?: number;
  /** The VSOE allocation amount can be calculated automatically by checking the Auto Calculate VSOE Allocation box.
 
Allocation is the process to determine the VSOE price for items. The total VSOE amount allocated is the revenue amount to be recognized for the bundle. */
  vsoeautocalc?: boolean;
}





/** 
 * Credit Memo Sublists Definition.
 * Record's Internal Id: creditmemo. 
 * Supports Custom Fields: true 
 */
export interface creditmemoSublists {
  
  /** accountingbookdetail: Accounting Books */
  accountingbookdetail: {
    /** accountingbook - Secondary Book  */
    accountingbook: string;
    /** exchangerate - Exchange Rate  */
    exchangerate?: number;
    /** revreconrevcommitment - Rev Rec on Rev Commit.  */
    revreconrevcommitment: boolean;
    /** tranisvsoebundle - Transaction Is VSOE Bundle  */
    tranisvsoebundle: boolean;
  }

  /** apply: Apply */
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

  /** item: Items */
  item: {
    /** account -   */
    account: string;
    /** amortizationperiod -   */
    amortizationperiod: string;
    /** amortizationtype -   */
    amortizationtype: string;
    /** amount - Amount  */
    amount: number;
    /** billvariancestatus -   */
    billvariancestatus: string;
    /** catchupperiod -   */
    catchupperiod: string;
    /** costestimate - Est. Extended Cost  */
    costestimate: number;
    /** costestimaterate -   */
    costestimaterate: string;
    /** costestimatetype - Cost Estimate Type  */
    costestimatetype: string;
    /** daysbeforeexpiration -   */
    daysbeforeexpiration: string;
    /** deferrevrec -   */
    deferrevrec: boolean;
    /** description - Description  */
    description: string;
    /** giftcertfrom - From  */
    giftcertfrom: string;
    /** giftcertmessage - Gift Message  */
    giftcertmessage: string;
    /** giftcertrecipientemail - Recipient Email  */
    giftcertrecipientemail: string;
    /** giftcertrecipientname - Recipient Name  */
    giftcertrecipientname: string;
    /** id -   */
    id: string;
    /** inventorydetail - Inventory Detail  */
    inventorydetail: string;
    /** isdropshipment -   */
    isdropshipment: string;
    /** istaxable - Tax  */
    istaxable: boolean;
    /** isvsoebundle -   */
    isvsoebundle: string;
    /** item - Item  */
    item?: string;
    /** itemsubtype -   */
    itemsubtype: string;
    /** itemtype -   */
    itemtype: string;
    /** job - Project  */
    job: string;
    /** line -   */
    line: string;
    /** linenumber -   */
    linenumber: number;
    /** matrixtype -   */
    matrixtype: string;
    /** options - Options  */
    options: string;
    /** price - Price Level  */
    price: string;
    /** printitems -   */
    printitems: string;
    /** quantity - Quantity  */
    quantity: number;
    /** rate - Rate  */
    rate: string;
    /** rateschedule -   */
    rateschedule: string;
    /** revrecenddate - Rev. Rec. End Date  */
    revrecenddate: Date;
    /** revrecschedule - Rev. Rec. Schedule  */
    revrecschedule: string;
    /** revrecstartdate - Rev. Rec. Start Date  */
    revrecstartdate: Date;
    /** shipaddress - Ship To  */
    shipaddress: string;
    /** shipcarrier - Shipping Carrier  */
    shipcarrier: string;
    /** shipmethod - Ship Via  */
    shipmethod: string;
    /** subscriptionline - Subscription Line  */
    subscriptionline: string;
    /** taxcode - Tax Code  */
    taxcode?: string;
    /** taxrate1 - Tax Rate  */
    taxrate1: number;
    /** units - Units  */
    units: string;
    /** vsoeallocation - Allocation Amount  */
    vsoeallocation: number;
    /** vsoeamount - Calculated Amount  */
    vsoeamount: number;
    /** vsoedeferral - Deferral  */
    vsoedeferral: string;
    /** vsoedelivered - Delivered  */
    vsoedelivered: boolean;
    /** vsoeisestimate - Estimate  */
    vsoeisestimate: boolean;
    /** vsoepermitdiscount - Permit Discount  */
    vsoepermitdiscount: string;
    /** vsoeprice - Allocation Price  */
    vsoeprice: number;
    /** vsoesopgroup - Allocation Type  */
    vsoesopgroup: string;
  }

  /** partners: Partners */
  partners: {
    /** contribution - Contribution %  */
    contribution?: number;
    /** id -   */
    id: string;
    /** isprimary - Primary  */
    isprimary: boolean;
    /** partner - Partner  */
    partner?: string;
    /** partnerrole - Partner Role  */
    partnerrole: string;
    /** transaction -   */
    transaction: string;
  }

  /** salesteam: Sales Team */
  salesteam: {
    /** contribution - Contribution %  */
    contribution?: number;
    /** employee - Employee  */
    employee?: string;
    /** id -   */
    id: string;
    /** isprimary - Primary  */
    isprimary: boolean;
    /** issalesrep -   */
    issalesrep: string;
    /** salesrole - Sales Role  */
    salesrole?: string;
    /** transaction -   */
    transaction: string;
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





