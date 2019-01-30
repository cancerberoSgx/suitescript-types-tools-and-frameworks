// This file is auto generated, do not edit it. 




/** 
 * Invoice Fields Definition.
 * Record's Internal Id: invoice. 
 * Supports Custom Fields: true 
 */
export interface invoiceFields {
/** Select the Accounts Receivable account that will be affected by this transaction. </P

Click New to set up a new account.

For details on accounts, go to <_TABNAME=LIST_ACCOUNT_> > <_TASKCATEGORY=LIST_ACCOUNT_> > Chart of Accounts. */
  account?: string;
  /** The handling cost automatically calculates depending on the shipping method you select in the Ship Via field.

To change the cost of handling, go to Lists > Shipping Items and select the shipping method with the handling cost you want to change. */
  althandlingcost?: number;
  /** The shipping cost automatically calculates depending on the shipping method you select in the Ship Via field above.

To change the cost of a shipping method, go to Lists > Shipping Items and select the shipping method you want to change.

If you use UPS Real-Time rates, shipments over 150lbs are broken up into shipments less than or equal to 150lbs for charging. */
  altshippingcost?: number;
  /** Displays the total amount paid for this invoice. */
  amountpaid?: number;
  /** Displays the total amount due for this invoice. */
  amountremaining?: number;
  /**  */
  amountremainingtotalbox?: number;
  /**  */
  approvalstatus?: string;
  /** Displays the total of all outstanding invoices for this customer. */
  balance?: number;
  /**  */
  billaddress?: string;
  /** Select the appropriate billing address for this transaction. 

    * Select New to enter a new billing address to be used for this transaction and saved with the associated entity record.
    * Select Custom to enter a new billing address to be used for this transaction only (and not saved with the associated entity record).
    * Click the Edit icon to modify an existing billing address. */
  billaddresslist?: string;
  /**  */
  billingaccount?: string;
  /**  */
  billingaddress?: string;
  /**  */
  billisresidential?: string;
  /** Check this box to enable stackable promotions on this transaction. */
  canhavestackable?: boolean;
  /** If you want, select the class that applies to this invoice.

Click New to set up a new class.

Go to <_TABNAME=LIST_CLASS_> > <_TASKCATEGORY=LIST_CLASS_> > Classes for details about existing classes. */
  class?: string;
  /**  */
  consolidatebalance?: number;
  /**  */
  couponcode?: string;
  /**  */
  createddate?: Date;
  /** This field shows the sales order this invoice is created from.

Click the link to open the sales order. */
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
  /** If you customized an invoice form, select it here, or click New to customize a new invoice form. */
  customform: string;
  /** Deferred Revenue:

amount of revenue deferred on this transaction */
  deferredrevenue?: number;
  /** Select a department to associate with this invoice.

Click New to enter a new department.

Go to <_TABNAME=LIST_DEPARTMENT_> > <_TASKCATEGORY=LIST_DEPARTMENT_> > Departments for details about existing departments. */
  department?: string;
  /** The amount listed here is the discount your customer will receive if he or she pays this invoice according to the terms you have set. */
  discountamount?: number;
  /** The date listed here is the date your customer must pay this invoice by in order to receive a discount. The discount your customer receives in based on the terms you have set for the customer. */
  discountdate?: Date;
  /** You can select a discount for this invoice. NetSuite fills the Rate and Discount Total fields based on the discount you choose.

Leave this field blank if you do not want to apply a discount to this transaction.

To create new discount items, go to <_TABNAME=LIST_ITEM_> > <_TASKCATEGORY=LIST_ITEM_> Items and click New. On the New Item page, click Discount. */
  discountitem?: string;
  /** NetSuite enters the rate for the discount item you selected. You can change the discount rate for this cash refund.

Enter the discount as a dollar amount like 10.00, or as a percentage like 10%. */
  discountrate?: string;
  /** NetSuite enters the amount discounted on this invoice.

If this discount item is taxable, the discount is applied before taxes. If it is not taxable, the discount is applied after taxes. */
  discounttotal?: number;
  /** Type or pick the due date for this invoice. If you do not assign a due date, the due date defaults to the date in the Date field. In addition, if you do not assign a due date, this invoice will appear on aging reports. */
  duedate?: Date;
  /**  */
  email?: string;
  /** Type or pick the end date for this invoice.

If an invoice is created from a sales order that includes a Start Date and End Date, those dates autofill on the invoice when the order is billed. */
  enddate?: Date;
  /** Select the customer for this invoice.

Click New to set up a new customer.

Go to <_TABNAME=LIST_CUSTJOB_> > <_TASKCATEGORY=LIST_CUSTJOB_> > Customers for details about existing customers. */
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
  /** The rate you enter automatically appears here.

If you entered a percentage in the Rate field, NetSuite multiplies the discount or markup percentage by the total amount of line items you select. */
  expcostdiscamount?: number;
  /** If you want to add a discount or markup to the cost of the expenses you are billing, select it from the list.

To see a list of your discounts or markups, go to Lists > Items and select Discount or Markup from the dropdown list at the bottom of the page.

To create a new discount or markup, go to Lists > New Item and click Discount or Markup. */
  expcostdiscount?: string;
  /** Check this box if you added a discount or markup and want to print it on the invoice. */
  expcostdiscprint?: boolean;
  /** The rate for the discount or markup item you selected automatically appears here.

If you want, enter a new rate.

Rates can be entered as dollar amounts and percentages. */
  expcostdiscrate?: string;
  /** Check this box if the expenses you are billing are taxable. */
  expcostdisctaxable?: boolean;
  /**  */
  expcosttaxcode?: string;
  /** NetSuite inserts the GST rate based on the tax code you assigned to this expense.

To set up tax codes and corresponding tax percentages, go to Lists > Tax Codes.

To change the assignment of a tax code to an item, go to Lists > Items. */
  expcosttaxrate1?: number;
  /**  */
  externalid?: string;
  /** Enter the location where the customers technically acquire ownership. For example, if your customers own goods as soon as they ship and pay the shipping costs from your location to theirs, you might enter Our warehouse. */
  fob?: string;
  /**  */
  giftcertapplied?: number;
  /** The handling cost automatically calculates depending on the shipping method you select in the Ship Via field.

To change the cost of handling, go to <_TABNAME=LIST_SHIPITEM_> > <_TASKCATEGORY=LIST_SHIPITEM_> > Shipping Items and select the shipping method with the handling cost you want to change. */
  handlingcost?: number;
  /** The tax rate for the tax code selected shows here. */
  handlingtax1rate?: string;
  /** Select the tax code that determines the tax for handling charges. */
  handlingtaxcode?: string;
  /**  */
  isbasecurrency?: boolean;
  /**  */
  ismultishipto?: boolean;
  /** Place a check mark in this box if the order you are invoicing is taxable. */
  istaxable?: boolean;
  /** The rate you enter automatically appears here.

If you entered a percentage in the Rate field, NetSuite multiplies the discount or markup percentage by the total amount of line items you select. */
  itemcostdiscamount?: number;
  /** If you want to add a discount or markup to the cost of the items you are billing, select it from the list.

To see a list of your discounts or markups, go to Lists > Items and select Discount or Markup from the dropdown list at the bottom of the page.

To create a new discount or markup, go to Lists > New Item and click Discount or Markup. */
  itemcostdiscount?: string;
  /** Check this box if you added a discount or markup and want to print it on the invoice. */
  itemcostdiscprint?: boolean;
  /** The rate for the discount or markup item you selected automatically appears here.

If you want, enter a new rate.

Rates can be entered as dollar amounts and percentages. */
  itemcostdiscrate?: string;
  /** Check this box if you want the discount or markup you entered to be applied before taxes. */
  itemcostdisctaxable?: boolean;
  /**  */
  itemcosttaxcode?: string;
  /** NetSuite inserts the GST rate based on the tax code you assigned to this item.

To set up tax codes and corresponding tax percentages, go to Lists > Tax Codes.

To change the assignment of a tax code to an item, go to Lists > Items. */
  itemcosttaxrate1?: number;
  /**  */
  lastmodifieddate?: Date;
  /** Select the lead source associated with this transaction.

If you use the Marketing Automation feature, select the campaign you want to associate with this transaction's revenue. */
  leadsource?: string;
  /**  */
  linkedtrackingnumbers?: string;
  /** Choose the location you want to associate with this transaction.

Select New to enter a new location record.

Go to Lists > Locations for details about existing location records. */
  location: string;
  /** Enter an optional memo to describe this invoice so you can easily distinguish it from others for this customer.

For example: Suite A installation or Suite B installation.

It will appear on reports such as the 2-line Accounts Receivable register, which your customers can see if you give them permission to log in and view their transaction history. */
  memo?: string;
  /** The text of the customer message you select in the Select Message field appears here.

You can edit the message or enter a new customer message for only this transaction. */
  message?: string;
  /** Select a customer message to appear on this form. For example, you may add "Thank you for your business!" Choose from the list of existing customer messages stored in Accounting Lists.

The text of the selected message appears in the Customer Message field. In this field, you can optionally edit the message or enter a new customer message for only this transaction.

To add messages to appear in the Select Message field, go to <_TABNAME=LIST_ACCOUNTINGOTHERLIST_> > <_TASKCATEGORY=LIST_ACCOUNTINGOTHERLIST_> > Accounting Lists > New, and click Customer Message. */
  messagesel?: string;
  /**  */
  muccpromocodeinstance?: string;
  /**  */
  nextapprover?: string;
  /** This field shows the nexus of the transaction. NetSuite automatically populates this field based on the nexus lookup logic. 

You can override the transaction nexus and tax registration number that NetSuite automatically selects by checking the Nexus Override box. When you select a different nexus in the dropdown list, the corresponding tax registration number is automatically selected in the Subsidiary Tax Reg. Number field. */
  nexus?: string;
  /** If you are entering this transaction for an opportunity, select the opportunity.

You can create opportunity records at <_TABNAME=EDIT_TRAN_OPPRTNTY_> > <_TASKCATEGORY=TRAN_OPPRTNTY_> > Create Opportunities. */
  opportunity?: string;
  /** To make it easy for your customers to locate this invoice in their own records, enter their purchase order number here. */
  otherrefnum?: string;
  /** The partner associated with this customer appears in the Partner field.
 
You can change the partner for this transaction. */
  partner?: string;
  /** Select the period you want to post this invoice to.

If a period is closed, you cannot post to that period. */
  postingperiod: string;
  /** If you want to apply a multiple-use coupon code to this transaction, select the promotion here.

If you want to apply a single-use coupon code, enter the code in the Coupon Code field. The promotion for that coupon code is shown here.

Customers associated with a partner can only use coupon codes from that partner's promotions. If you select a promotion associated with a partner, this transaction is attributed to that partner for reporting purposes.

You can choose to have a promotion selected by default at <_TABNAME=TRAN_CAMPAIGNSETUP_> > <_TASKCATEGORY=TRAN_CAMPAIGNSETUP_> > Marketing Preferences in the Default Promotion Code on Sales Transactions field.

Create new promotion codes at <_TABNAME=LIST_REFERRALCODE_> > <_TASKCATEGORY=LIST_REFERRALCODE_> > Promotions > New. */
  promocode?: string;
  /**  */
  promocodepluginimpl?: string;
  /** Recognized Revenue:

cumulative amount of revenue recognized for this transaction */
  recognizedrevenue?: number;
  /**  */
  recurringbill?: boolean;
  /**  */
  returntrackingnumbers?: string;
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
  /** You can change the sales effective date for this transaction. The sales effective date determines which commission plan and historical sales team this transaction applies to. */
  saleseffectivedate?: Date;
  /** Select a sales team to associate with this transaction.

To create a sales team, go to <_TABNAME=EDIT_CRMGROUP_> > <_TASKCATEGORY=EDIT_CRMGROUP_> > New > Select Sales Team Members. */
  salesgroup?: string;
  /** NetSuite inserts the sales representative associated with this company on the customer record at Lists > Customers.

If a different sales rep is assigned to this transaction, select that sales rep here.

To add additional sales reps to this list, go to Lists > New Employee. */
  salesrep?: string;
  /**  */
  shipaddress?: string;
  /** Select the appropriate shipping address for this transaction. 

    * Select New to enter a new shipping address to be used for this transaction and saved with the associated entity record.
    * Select Custom to enter a new shipping address to be used for this transaction only (and not saved with the associated entity record).
    * Click the Edit icon to edit an existing shipping address. */
  shipaddresslist?: string;
  /** Type or pick a shipping date for this invoice. */
  shipdate?: Date;
  /**  */
  shipisresidential?: string;
  /** Select a shipping method for this order.

If you automatically charge for shipping, the shipping amount is entered in the shipping costs field. To automatically charge for shipping, go to <_TABNAME=ADMI_SHIPPING_> > <_TASKCATEGORY=ADMI_SHIPPING_> > Shipping. Check the Charge for Shipping box and click Save. You must also set up the charge details of your shipping items.

To add or edit shipping items, go to <_TABNAME=LIST_SHIPITEM_> > <_TASKCATEGORY=LIST_SHIPITEM_> > Shipping Items. */
  shipmethod?: string;
  /**  */
  shipoverride?: string;
  /**  */
  shippingaddress?: string;
  /** The shipping cost automatically calculates depending on the shipping method you select in the Ship Via field above.

To change the cost of a shipping method, go to <_TABNAME=LIST_SHIPITEM_> > <_TASKCATEGORY=LIST_SHIPITEM_> > Shipping Items and select the shipping method you want to change.

If you use UPS Real-Time rates, shipments over 150lbs are broken up into shipments less than or equal to 150lbs for charging. */
  shippingcost?: number;
  /**  */
  shippingcostoverridden?: string;
  /** The tax rate for the selected tax code shows here. */
  shippingtax1rate?: string;
  /** Select the tax code that determines the tax charged for shipping. */
  shippingtaxcode?: string;
  /**  */
  source?: string;
  /** If you use the Advanced Billing feature, enter the date for the first invoice to be created.

If an invoice is created from a sales order that includes a Start Date and End Date, those dates autofill on the invoice when the order is billed. */
  startdate?: Date;
  /**  */
  status?: string;
  /**  */
  statusRef?: string;
  /** This field displays the subsidiary associated with this transaction. */
  subsidiary?: string;
  /** This field shows the tax registration number of the transaction nexus. NetSuite automatically populates this field based on the nexus lookup logic. 

You can override the transaction nexus and tax registration number that NetSuite automatically selects by checking the Nexus Override box. When you select a different tax registration number in the dropdown list, the corresponding nexus is automatically selected in the Nexus field. */
  subsidiarytaxregnum?: string;
  /** This field shows the total of the items on this invoice.

This is the total before any discounts, shipping cost, handling cost or tax is added to the order. */
  subtotal?: number;
  /** Check this box if you want to update the sales team on the customer's record with changes you make here. */
  syncpartnerteams?: boolean;
  /** Check this box if you want to update the sales team on the customer's record with changes you make here. */
  syncsalesteams?: boolean;
  /** Check this box to override the tax information on the Tax Details subtab of the transaction. Only roles with at least the Edit level of the Tax Details Tab permission can override the tax details. */
  taxdetailsoverride?: boolean;
  /** A tax item is a tax that you collect at one certain rate and pay to one tax agency for this invoice. NetSuite inserts the tax item for this customer from the record at Lists > Customers. To change it just for this order, select another tax item.

To add additional choices to this list, go to Lists > New Item > Sales Tax Item. */
  taxitem?: string;
  /** NetSuite inserts the percentage rate of the tax item from its record at Lists > Items. You can change it here for just this transaction if you wish. */
  taxrate?: number;
  /** Check this box to override the values in the Nexus and Subsidiary Tax Reg. Number fields. Only roles with at least the Edit level of the Tax Details Tab permission can override the values that NetSuite automatically selects in these fields. */
  taxregoverride?: boolean;
  /** NetSuite multiplies the tax rate by the taxable total of line items and enters it here. */
  taxtotal?: number;
  /** Select discount terms that will apply to this invoice.

To add additional choices to this list, go to <_TABNAME=LIST_ACCOUNTINGOTHERLIST_> > <_TASKCATEGORY=LIST_ACCOUNTINGOTHERLIST_> > Accounting Lists > New > Terms. */
  terms?: string;
  /** The rate you enter automatically appears here.

If you entered a percentage in the Rate field, NetSuite multiplies the discount or markup percentage by the total amount of line items you select. */
  timediscamount?: number;
  /** If you want to add a discount or markup to the cost of the time you are billing, select it from the list.

To see a list of your discounts or markups, go to Lists > Items and select Discount or Markup from the dropdown list at the bottom of the page.

To create a new discount or markup, go to Lists > New Item and click Discount or Markup. */
  timediscount?: string;
  /** Check this box if you added a discount or markup and want to print it on the invoice. */
  timediscprint?: boolean;
  /** The rate for the discount or markup item you selected automatically appears here.

If you want, enter a new rate.

Rates can be entered as dollar amounts and percentages. */
  timediscrate?: string;
  /** Check this box if you want the discount or markup you entered to be applied before taxes. */
  timedisctaxable?: boolean;
  /**  */
  timetaxcode?: string;
  /** NetSuite inserts the GST rate based on the tax code you assigned to this time.

To set up tax codes and corresponding tax percentages, go to Lists > Tax Codes.

To change the assignment of a tax code to an item, go to Lists > Items. */
  timetaxrate1?: number;
  /** When processing individual invoices:
    * Check the To Be Emailed box if you want to email this invoice. Then enter the email address in the space to the right of the check box.
    * You can enter multiple email addresses by separating them with a semicolon. It is important to separate the addresses with only a semicolon, and do not include any spaces.

When bulk processing invoices:

In the To Be Emailed field:
    * Select Yes if you want to email this form.
    * Select No if you do not want to email this form.
    * Select Respect Customer Preference to send the form based on the default preference on the customer record. Set the preference on the Info subtab of a customer record in the Send Transactions Via field. */
  tobeemailed?: boolean;
  /** When processing individual invoices:

    * Check the To Be Faxed box if you want to fax this invoice. Then enter the fax number in the box to the right of the check box if it does not already appear.


When bulk processing invoices:
In the To Be Faxed field:

    * Select Yes if you want to fax this form.
    * Select No if you do not want to fax this form.
    * Select Respect Customer Preference to send the form based on the default preference on the customer record.
     Set the preference on the Info subtab of a customer record in the Send Transactions Via field.

To fax NetSuite forms, an administrator must first set up fax service at <_TABNAME=ADMI_PRINTING_> > <_TASKCATEGORY=ADMI_PRINTING_> > Printing, Fax and Email Preferences. */
  tobefaxed?: boolean;
  /** When processing individual invoices:

Check the To Be Printed box if you want to print this invoice.

When bulk processing invoices:

    * Select Yes if you want to save this in a queue of invoices to print.
    * Select No if you do not want to print this form.
    * Select Respect Customer Preference to send the form based on the default preference on the customer record.
      Set the preference on the Info subtab of a customer record in the Send Transactions Via field. */
  tobeprinted?: boolean;
  /** NetSuite computes the total of line items, tax and shipping costs, and then enters it here. */
  total?: number;
  /** Estimated Cost: Estimated cost of the specific number of items; estimated rate x quantity = estimated cost. */
  totalcostestimate?: number;
  /** Enter the shipment tracking number from the shipping company.

If a tracking number is entered in the exact format used by UPS or FedEx and the transaction is saved, the tracking number will show on the transaction as a link to the UPS or FedEx website. You can click the link to check the status of the shipment. */
  trackingnumbers?: string;
  /** NetSuite inserts today's date for the posting date of this invoice. You can type or pick another date.

What you enter here determines the date range in which this transaction appears on the Accounts Receivable Register.

You can select or enter custom date ranges on registers. */
  trandate: Date;
  /** NetSuite increases the largest invoice number by one. You can type another number. The next invoice number will revert to the standard pattern. */
  tranid?: string;
  /** Check this box to include all items added to this transaction as a VSOE bundle. */
  tranisvsoebundle?: boolean;
  /**  */
  unbilledorders?: number;
  /** The VSOE allocation amount for a sale can be calculated automatically by checking the Auto Calculate VSOE Allocation box.
 
Allocation is the process to determine the VSOE price for items on a sale. The total VSOE amount allocated is the revenue amount to be recognized for the bundle. */
  vsoeautocalc?: boolean;
}





/** 
 * Invoice Sublists Definition.
 * Record's Internal Id: invoice. 
 * Supports Custom Fields: true 
 */
export interface invoiceSublists {
  
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

  /** expcost: Billable Expenses */
  expcost: {
    /** amortizationperiod -   */
    amortizationperiod: string;
    /** amortizationtype -   */
    amortizationtype: string;
    /** amount - Bill Amount  */
    amount: number;
    /** apply - Apply  */
    apply: boolean;
    /** billeddate - Date  */
    billeddate: Date;
    /** category -   */
    category: string;
    /** doc -   */
    doc: number;
    /** employee -   */
    employee: string;
    /** job -   */
    job: string;
    /** line -   */
    line: number;
    /** location - Location  */
    location: string;
    /** memo - Memo  */
    memo: string;
    /** originalamount - Original Amount  */
    originalamount: number;
    /** revrecenddate - Rev. Rec. End Date  */
    revrecenddate: Date;
    /** revrecschedule - Rev. Rec. Schedule  */
    revrecschedule: string;
    /** revrecstartdate - Rev. Rec. Start Date  */
    revrecstartdate: Date;
    /** taxable -   */
    taxable: string;
    /** taxcode - Tax Code  */
    taxcode?: string;
    /** taxrate1 - Tax Rate  */
    taxrate1: number;
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
    /** chargetype - Charge Type  */
    chargetype: string;
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
    /** excludefromraterequest - Exclude Item from Rate Request  */
    excludefromraterequest: boolean;
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
    /** licensecode - License Code  */
    licensecode: string;
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
    /** quantityavailable -   */
    quantityavailable: number;
    /** quantityremaining - Back Ordered  */
    quantityremaining: number;
    /** rate - Unit Price  */
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
    /** shipcarrier - Carrier  */
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

  /** itemcost: Billable Items */
  itemcost: {
    /** amortizationperiod -   */
    amortizationperiod: string;
    /** amortizationtype -   */
    amortizationtype: string;
    /** amount - Total  */
    amount: number;
    /** apply - Apply  */
    apply: boolean;
    /** billeddate - Date  */
    billeddate: Date;
    /** binnumbers - Bin Numbers  */
    binnumbers: string;
    /** cost - Rate  */
    cost: number;
    /** doc -   */
    doc: number;
    /** item -   */
    item: string;
    /** itemcostcount - Qty  */
    itemcostcount: string;
    /** job -   */
    job: string;
    /** line -   */
    line: number;
    /** location - Location  */
    location: string;
    /** memo - Description  */
    memo: string;
    /** options - Options  */
    options: string;
    /** rateschedule -   */
    rateschedule: string;
    /** revrecenddate - Rev. Rec. End Date  */
    revrecenddate: Date;
    /** revrecschedule - Rev. Rec. Schedule  */
    revrecschedule: string;
    /** revrecstartdate - Rev. Rec. Start Date  */
    revrecstartdate: Date;
    /** serialnumbers - Serial/Lot Numbers  */
    serialnumbers: string;
    /** taxable -   */
    taxable: string;
    /** taxcode - Tax Code  */
    taxcode?: string;
    /** taxrate1 - Tax Rate  */
    taxrate1: number;
    /** unit -   */
    unit: string;
    /** url -   */
    url: string;
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

  /** promotions: Promotions */
  promotions: {
    /** cannotbecombined -   */
    cannotbecombined: string;
    /** couponcode - Coupon Code  */
    couponcode?: string;
    /** discount - Discount Item  */
    discount: string;
    /** discountrate - Rate  */
    discountrate: string;
    /** muccpromocodeinstance - Promo Code  */
    muccpromocodeinstance: string;
    /** promocode - Promotion  */
    promocode?: string;
    /** purchasediscount - Purchase Discount  */
    purchasediscount: number;
    /** shippingdiscount - Shipping Discount  */
    shippingdiscount: string;
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

  /** shipgroup: Shipment */
  shipgroup: {
    /** destinationaddress - Ship To  */
    destinationaddress: string;
    /** handlingrate - Handling Rate  */
    handlingrate: number;
    /** id -   */
    id: number;
    /** shippingcarrier -   */
    shippingcarrier: string;
    /** shippingmethod - Ship Via  */
    shippingmethod: string;
    /** shippingrate - Shipping Rate  */
    shippingrate: number;
    /** sourceaddress - Ship From  */
    sourceaddress: string;
    /** weight -   */
    weight: number;
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

  /** time: Billable Time */
  time: {
    /** amortizationperiod -   */
    amortizationperiod: string;
    /** amortizationtype -   */
    amortizationtype: string;
    /** amount - Amount  */
    amount: number;
    /** apply - Apply  */
    apply: boolean;
    /** billeddate - Date  */
    billeddate: Date;
    /** doc -   */
    doc: string;
    /** item - Item  */
    item: string;
    /** job -   */
    job: string;
    /** memo - Description  */
    memo: string;
    /** rate - Rate  */
    rate: number;
    /** rateschedule -   */
    rateschedule: string;
    /** revrecenddate - Rev. Rec. End Date  */
    revrecenddate: Date;
    /** revrecschedule - Rev. Rec. Schedule  */
    revrecschedule: string;
    /** revrecstartdate - Rev. Rec. Start Date  */
    revrecstartdate: Date;
    /** taxable -   */
    taxable: string;
    /** taxcode - Tax Code  */
    taxcode?: string;
    /** taxrate1 - Tax Rate  */
    taxrate1: number;
    /** unit -   */
    unit: string;
    /** url -   */
    url: string;
  }
}





