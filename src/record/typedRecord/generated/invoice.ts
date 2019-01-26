// This file is auto generated, do not edit it. 

import { TypedRecord, TypedRecordImpl } from '../typedRecord';
import { Record } from 'N/record';




/** 
 * Invoice Fields Definition.
 * Record's Internal Id: invoice. 
 * Supports Custom Fields: true 
 */
export interface invoiceFields {
/** Select the Accounts Receivable account that will be affected by this transaction. </P

Click New to set up a new account.

For details on accounts, go to <_TABNAME=LIST_ACCOUNT_> > <_TASKCATEGORY=LIST_ACCOUNT_> > Chart of Accounts. */
  account: string | undefined;
  /** The handling cost automatically calculates depending on the shipping method you select in the Ship Via field.

To change the cost of handling, go to Lists > Shipping Items and select the shipping method with the handling cost you want to change. */
  althandlingcost: string | undefined;
  /** The shipping cost automatically calculates depending on the shipping method you select in the Ship Via field above.

To change the cost of a shipping method, go to Lists > Shipping Items and select the shipping method you want to change.

If you use UPS Real-Time rates, shipments over 150lbs are broken up into shipments less than or equal to 150lbs for charging. */
  altshippingcost: string | undefined;
  /** Displays the total amount paid for this invoice. */
  amountpaid: string | undefined;
  /** Displays the total amount due for this invoice. */
  amountremaining: string | undefined;
  /**  */
  amountremainingtotalbox: string | undefined;
  /**  */
  approvalstatus: string | undefined;
  /** Displays the total of all outstanding invoices for this customer. */
  balance: string | undefined;
  /**  */
  billaddress: string | undefined;
  /** Select the appropriate billing address for this transaction. 

    * Select New to enter a new billing address to be used for this transaction and saved with the associated entity record.
    * Select Custom to enter a new billing address to be used for this transaction only (and not saved with the associated entity record).
    * Click the Edit icon to modify an existing billing address. */
  billaddresslist: string | undefined;
  /**  */
  billingaccount: string | undefined;
  /**  */
  billingaddress: string | undefined;
  /**  */
  billisresidential: string | undefined;
  /** Check this box to enable stackable promotions on this transaction. */
  canhavestackable: boolean | undefined;
  /** If you want, select the class that applies to this invoice.

Click New to set up a new class.

Go to <_TABNAME=LIST_CLASS_> > <_TASKCATEGORY=LIST_CLASS_> > Classes for details about existing classes. */
  class: string | undefined;
  /**  */
  consolidatebalance: string | undefined;
  /**  */
  couponcode: string | undefined;
  /**  */
  createddate: string | undefined;
  /** This field shows the sales order this invoice is created from.

Click the link to open the sales order. */
  createdfrom: string | undefined;
  /** If you do not use the Multi-Currency Customers feature, the currency of the customer you are creating this transaction for is shown here.

If you use the Multi-Currency Customers feature, select the transaction currency you want to create this transaction in. This customer's primary currency is selected by default.

If you have already selected items on this transaction, selecting a new currency refreshes them to show the price in the new currency (except for items you entered custom prices for) and recalculates tax and gross profit. */
  currency: string;
  /** This customer's currency is shown in this field.

All currency amounts on this transaction are shown in this currency. */
  currencyname: string | undefined;
  /**  */
  currencysymbol: string | undefined;
  /** If you customized an invoice form, select it here, or click New to customize a new invoice form. */
  customform: string;
  /** Deferred Revenue:

amount of revenue deferred on this transaction */
  deferredrevenue: string | undefined;
  /** Select a department to associate with this invoice.

Click New to enter a new department.

Go to <_TABNAME=LIST_DEPARTMENT_> > <_TASKCATEGORY=LIST_DEPARTMENT_> > Departments for details about existing departments. */
  department: string | undefined;
  /** The amount listed here is the discount your customer will receive if he or she pays this invoice according to the terms you have set. */
  discountamount: string | undefined;
  /** The date listed here is the date your customer must pay this invoice by in order to receive a discount. The discount your customer receives in based on the terms you have set for the customer. */
  discountdate: Date | undefined;
  /** You can select a discount for this invoice. NetSuite fills the Rate and Discount Total fields based on the discount you choose.

Leave this field blank if you do not want to apply a discount to this transaction.

To create new discount items, go to <_TABNAME=LIST_ITEM_> > <_TASKCATEGORY=LIST_ITEM_> Items and click New. On the New Item page, click Discount. */
  discountitem: string | undefined;
  /** NetSuite enters the rate for the discount item you selected. You can change the discount rate for this cash refund.

Enter the discount as a dollar amount like 10.00, or as a percentage like 10%. */
  discountrate: string | undefined;
  /** NetSuite enters the amount discounted on this invoice.

If this discount item is taxable, the discount is applied before taxes. If it is not taxable, the discount is applied after taxes. */
  discounttotal: string | undefined;
  /** Type or pick the due date for this invoice. If you do not assign a due date, the due date defaults to the date in the Date field. In addition, if you do not assign a due date, this invoice will appear on aging reports. */
  duedate: Date | undefined;
  /**  */
  email: string | undefined;
  /** Type or pick the end date for this invoice.

If an invoice is created from a sales order that includes a Start Date and End Date, those dates autofill on the invoice when the order is billed. */
  enddate: Date | undefined;
  /** Select the customer for this invoice.

Click New to set up a new customer.

Go to <_TABNAME=LIST_CUSTJOB_> > <_TASKCATEGORY=LIST_CUSTJOB_> > Customers for details about existing customers. */
  entity: string;
  /**  */
  entitynexus: string | undefined;
  /**  */
  entitytaxregnum: string | undefined;
  /** Estimated Gross Profit: Read-only field that equals the revenue amount minus the Est. Cost. At the transaction level, it equals the gross profit of all lines, factoring transaction-level discounts and markups. */
  estgrossprofit: string | undefined;
  /** Estimated Gross Profit Margin, as a percentage: Read-only field that equals the Est. Gross Profit divided by revenue, expressed as a percentage. At the transaction level, it equals the gross profit percent of all lines, factoring transaction-level discounts and markups. */
  estgrossprofitpercent: string | undefined;
  /** The currency's exchange rate is shown in this field.

You can edit the exchange rate for this transaction only, or you can update the currency record with the exchange rate you enter here. */
  exchangerate: string;
  /** Check this option to exclude this transaction and its subordinate transactions from inclusion in all commission calculations. */
  excludecommission: boolean | undefined;
  /** The rate you enter automatically appears here.

If you entered a percentage in the Rate field, NetSuite multiplies the discount or markup percentage by the total amount of line items you select. */
  expcostdiscamount: string | undefined;
  /** If you want to add a discount or markup to the cost of the expenses you are billing, select it from the list.

To see a list of your discounts or markups, go to Lists > Items and select Discount or Markup from the dropdown list at the bottom of the page.

To create a new discount or markup, go to Lists > New Item and click Discount or Markup. */
  expcostdiscount: string | undefined;
  /** Check this box if you added a discount or markup and want to print it on the invoice. */
  expcostdiscprint: boolean | undefined;
  /** The rate for the discount or markup item you selected automatically appears here.

If you want, enter a new rate.

Rates can be entered as dollar amounts and percentages. */
  expcostdiscrate: string | undefined;
  /** Check this box if the expenses you are billing are taxable. */
  expcostdisctaxable: boolean | undefined;
  /**  */
  expcosttaxcode: string | undefined;
  /** NetSuite inserts the GST rate based on the tax code you assigned to this expense.

To set up tax codes and corresponding tax percentages, go to Lists > Tax Codes.

To change the assignment of a tax code to an item, go to Lists > Items. */
  expcosttaxrate1: string | undefined;
  /**  */
  externalid: string | undefined;
  /** Enter the location where the customers technically acquire ownership. For example, if your customers own goods as soon as they ship and pay the shipping costs from your location to theirs, you might enter Our warehouse. */
  fob: string | undefined;
  /**  */
  giftcertapplied: string | undefined;
  /** The handling cost automatically calculates depending on the shipping method you select in the Ship Via field.

To change the cost of handling, go to <_TABNAME=LIST_SHIPITEM_> > <_TASKCATEGORY=LIST_SHIPITEM_> > Shipping Items and select the shipping method with the handling cost you want to change. */
  handlingcost: string | undefined;
  /** The tax rate for the tax code selected shows here. */
  handlingtax1rate: string | undefined;
  /** Select the tax code that determines the tax for handling charges. */
  handlingtaxcode: string | undefined;
  /**  */
  isbasecurrency: boolean | undefined;
  /**  */
  ismultishipto: boolean | undefined;
  /** Place a check mark in this box if the order you are invoicing is taxable. */
  istaxable: boolean | undefined;
  /** The rate you enter automatically appears here.

If you entered a percentage in the Rate field, NetSuite multiplies the discount or markup percentage by the total amount of line items you select. */
  itemcostdiscamount: string | undefined;
  /** If you want to add a discount or markup to the cost of the items you are billing, select it from the list.

To see a list of your discounts or markups, go to Lists > Items and select Discount or Markup from the dropdown list at the bottom of the page.

To create a new discount or markup, go to Lists > New Item and click Discount or Markup. */
  itemcostdiscount: string | undefined;
  /** Check this box if you added a discount or markup and want to print it on the invoice. */
  itemcostdiscprint: boolean | undefined;
  /** The rate for the discount or markup item you selected automatically appears here.

If you want, enter a new rate.

Rates can be entered as dollar amounts and percentages. */
  itemcostdiscrate: string | undefined;
  /** Check this box if you want the discount or markup you entered to be applied before taxes. */
  itemcostdisctaxable: boolean | undefined;
  /**  */
  itemcosttaxcode: string | undefined;
  /** NetSuite inserts the GST rate based on the tax code you assigned to this item.

To set up tax codes and corresponding tax percentages, go to Lists > Tax Codes.

To change the assignment of a tax code to an item, go to Lists > Items. */
  itemcosttaxrate1: string | undefined;
  /**  */
  lastmodifieddate: string | undefined;
  /** Select the lead source associated with this transaction.

If you use the Marketing Automation feature, select the campaign you want to associate with this transaction's revenue. */
  leadsource: string | undefined;
  /**  */
  linkedtrackingnumbers: string | undefined;
  /** Choose the location you want to associate with this transaction.

Select New to enter a new location record.

Go to Lists > Locations for details about existing location records. */
  location: string;
  /** Enter an optional memo to describe this invoice so you can easily distinguish it from others for this customer.

For example: Suite A installation or Suite B installation.

It will appear on reports such as the 2-line Accounts Receivable register, which your customers can see if you give them permission to log in and view their transaction history. */
  memo: string | undefined;
  /** The text of the customer message you select in the Select Message field appears here.

You can edit the message or enter a new customer message for only this transaction. */
  message: string | undefined;
  /** Select a customer message to appear on this form. For example, you may add "Thank you for your business!" Choose from the list of existing customer messages stored in Accounting Lists.

The text of the selected message appears in the Customer Message field. In this field, you can optionally edit the message or enter a new customer message for only this transaction.

To add messages to appear in the Select Message field, go to <_TABNAME=LIST_ACCOUNTINGOTHERLIST_> > <_TASKCATEGORY=LIST_ACCOUNTINGOTHERLIST_> > Accounting Lists > New, and click Customer Message. */
  messagesel: string | undefined;
  /**  */
  muccpromocodeinstance: string | undefined;
  /**  */
  nextapprover: string | undefined;
  /** This field shows the nexus of the transaction. NetSuite automatically populates this field based on the nexus lookup logic. 

You can override the transaction nexus and tax registration number that NetSuite automatically selects by checking the Nexus Override box. When you select a different nexus in the dropdown list, the corresponding tax registration number is automatically selected in the Subsidiary Tax Reg. Number field. */
  nexus: string | undefined;
  /** If you are entering this transaction for an opportunity, select the opportunity.

You can create opportunity records at <_TABNAME=EDIT_TRAN_OPPRTNTY_> > <_TASKCATEGORY=TRAN_OPPRTNTY_> > Create Opportunities. */
  opportunity: string | undefined;
  /** To make it easy for your customers to locate this invoice in their own records, enter their purchase order number here. */
  otherrefnum: string | undefined;
  /** The partner associated with this customer appears in the Partner field.
 
You can change the partner for this transaction. */
  partner: string | undefined;
  /** Select the period you want to post this invoice to.

If a period is closed, you cannot post to that period. */
  postingperiod: string;
  /** If you want to apply a multiple-use coupon code to this transaction, select the promotion here.

If you want to apply a single-use coupon code, enter the code in the Coupon Code field. The promotion for that coupon code is shown here.

Customers associated with a partner can only use coupon codes from that partner's promotions. If you select a promotion associated with a partner, this transaction is attributed to that partner for reporting purposes.

You can choose to have a promotion selected by default at <_TABNAME=TRAN_CAMPAIGNSETUP_> > <_TASKCATEGORY=TRAN_CAMPAIGNSETUP_> > Marketing Preferences in the Default Promotion Code on Sales Transactions field.

Create new promotion codes at <_TABNAME=LIST_REFERRALCODE_> > <_TASKCATEGORY=LIST_REFERRALCODE_> > Promotions > New. */
  promocode: string | undefined;
  /**  */
  promocodepluginimpl: string | undefined;
  /** Recognized Revenue:

cumulative amount of revenue recognized for this transaction */
  recognizedrevenue: string | undefined;
  /**  */
  recurringbill: boolean | undefined;
  /**  */
  returntrackingnumbers: string | undefined;
  /** The possible values for this field are:

   1. Pending: indicates that no recognition has occurred. All revenue is still deferred.
   2. In Progress: indicates that some recognition has occurred.
   3. Completed: indicates that all recognition has occurred. No deferred revenue remains. */
  revenuestatus: string | undefined;
  /** Check this check box to create a Revenue Commitment or Revenue Commitment Reversal.

    * On a Sales Order, the Revenue Commitment replaces an invoice
    * On a Return Authorization, the Revenue Commitment Reversal replaces a credit memo.

NetSuite creates all applicable Revenue Recognition schedules the Revenue Commitment or Revenue Commitment Reversal. */
  revreconrevcommitment: boolean | undefined;
  /** You can change the sales effective date for this transaction. The sales effective date determines which commission plan and historical sales team this transaction applies to. */
  saleseffectivedate: Date | undefined;
  /** Select a sales team to associate with this transaction.

To create a sales team, go to <_TABNAME=EDIT_CRMGROUP_> > <_TASKCATEGORY=EDIT_CRMGROUP_> > New > Select Sales Team Members. */
  salesgroup: string | undefined;
  /** NetSuite inserts the sales representative associated with this company on the customer record at Lists > Customers.

If a different sales rep is assigned to this transaction, select that sales rep here.

To add additional sales reps to this list, go to Lists > New Employee. */
  salesrep: string | undefined;
  /**  */
  shipaddress: string | undefined;
  /** Select the appropriate shipping address for this transaction. 

    * Select New to enter a new shipping address to be used for this transaction and saved with the associated entity record.
    * Select Custom to enter a new shipping address to be used for this transaction only (and not saved with the associated entity record).
    * Click the Edit icon to edit an existing shipping address. */
  shipaddresslist: string | undefined;
  /** Type or pick a shipping date for this invoice. */
  shipdate: Date | undefined;
  /**  */
  shipisresidential: string | undefined;
  /** Select a shipping method for this order.

If you automatically charge for shipping, the shipping amount is entered in the shipping costs field. To automatically charge for shipping, go to <_TABNAME=ADMI_SHIPPING_> > <_TASKCATEGORY=ADMI_SHIPPING_> > Shipping. Check the Charge for Shipping box and click Save. You must also set up the charge details of your shipping items.

To add or edit shipping items, go to <_TABNAME=LIST_SHIPITEM_> > <_TASKCATEGORY=LIST_SHIPITEM_> > Shipping Items. */
  shipmethod: string | undefined;
  /**  */
  shipoverride: string | undefined;
  /**  */
  shippingaddress: string | undefined;
  /** The shipping cost automatically calculates depending on the shipping method you select in the Ship Via field above.

To change the cost of a shipping method, go to <_TABNAME=LIST_SHIPITEM_> > <_TASKCATEGORY=LIST_SHIPITEM_> > Shipping Items and select the shipping method you want to change.

If you use UPS Real-Time rates, shipments over 150lbs are broken up into shipments less than or equal to 150lbs for charging. */
  shippingcost: string | undefined;
  /**  */
  shippingcostoverridden: string | undefined;
  /** The tax rate for the selected tax code shows here. */
  shippingtax1rate: string | undefined;
  /** Select the tax code that determines the tax charged for shipping. */
  shippingtaxcode: string | undefined;
  /**  */
  source: string | undefined;
  /** If you use the Advanced Billing feature, enter the date for the first invoice to be created.

If an invoice is created from a sales order that includes a Start Date and End Date, those dates autofill on the invoice when the order is billed. */
  startdate: Date | undefined;
  /**  */
  status: string | undefined;
  /**  */
  statusRef: string | undefined;
  /** This field displays the subsidiary associated with this transaction. */
  subsidiary: string | undefined;
  /** This field shows the tax registration number of the transaction nexus. NetSuite automatically populates this field based on the nexus lookup logic. 

You can override the transaction nexus and tax registration number that NetSuite automatically selects by checking the Nexus Override box. When you select a different tax registration number in the dropdown list, the corresponding nexus is automatically selected in the Nexus field. */
  subsidiarytaxregnum: string | undefined;
  /** This field shows the total of the items on this invoice.

This is the total before any discounts, shipping cost, handling cost or tax is added to the order. */
  subtotal: string | undefined;
  /** Check this box if you want to update the sales team on the customer's record with changes you make here. */
  syncpartnerteams: boolean | undefined;
  /** Check this box if you want to update the sales team on the customer's record with changes you make here. */
  syncsalesteams: boolean | undefined;
  /** Check this box to override the tax information on the Tax Details subtab of the transaction. Only roles with at least the Edit level of the Tax Details Tab permission can override the tax details. */
  taxdetailsoverride: boolean | undefined;
  /** A tax item is a tax that you collect at one certain rate and pay to one tax agency for this invoice. NetSuite inserts the tax item for this customer from the record at Lists > Customers. To change it just for this order, select another tax item.

To add additional choices to this list, go to Lists > New Item > Sales Tax Item. */
  taxitem: string | undefined;
  /** NetSuite inserts the percentage rate of the tax item from its record at Lists > Items. You can change it here for just this transaction if you wish. */
  taxrate: number | undefined;
  /** Check this box to override the values in the Nexus and Subsidiary Tax Reg. Number fields. Only roles with at least the Edit level of the Tax Details Tab permission can override the values that NetSuite automatically selects in these fields. */
  taxregoverride: boolean | undefined;
  /** NetSuite multiplies the tax rate by the taxable total of line items and enters it here. */
  taxtotal: string | undefined;
  /** Select discount terms that will apply to this invoice.

To add additional choices to this list, go to <_TABNAME=LIST_ACCOUNTINGOTHERLIST_> > <_TASKCATEGORY=LIST_ACCOUNTINGOTHERLIST_> > Accounting Lists > New > Terms. */
  terms: string | undefined;
  /** The rate you enter automatically appears here.

If you entered a percentage in the Rate field, NetSuite multiplies the discount or markup percentage by the total amount of line items you select. */
  timediscamount: string | undefined;
  /** If you want to add a discount or markup to the cost of the time you are billing, select it from the list.

To see a list of your discounts or markups, go to Lists > Items and select Discount or Markup from the dropdown list at the bottom of the page.

To create a new discount or markup, go to Lists > New Item and click Discount or Markup. */
  timediscount: string | undefined;
  /** Check this box if you added a discount or markup and want to print it on the invoice. */
  timediscprint: boolean | undefined;
  /** The rate for the discount or markup item you selected automatically appears here.

If you want, enter a new rate.

Rates can be entered as dollar amounts and percentages. */
  timediscrate: string | undefined;
  /** Check this box if you want the discount or markup you entered to be applied before taxes. */
  timedisctaxable: boolean | undefined;
  /**  */
  timetaxcode: string | undefined;
  /** NetSuite inserts the GST rate based on the tax code you assigned to this time.

To set up tax codes and corresponding tax percentages, go to Lists > Tax Codes.

To change the assignment of a tax code to an item, go to Lists > Items. */
  timetaxrate1: string | undefined;
  /** When processing individual invoices:
    * Check the To Be Emailed box if you want to email this invoice. Then enter the email address in the space to the right of the check box.
    * You can enter multiple email addresses by separating them with a semicolon. It is important to separate the addresses with only a semicolon, and do not include any spaces.

When bulk processing invoices:

In the To Be Emailed field:
    * Select Yes if you want to email this form.
    * Select No if you do not want to email this form.
    * Select Respect Customer Preference to send the form based on the default preference on the customer record. Set the preference on the Info subtab of a customer record in the Send Transactions Via field. */
  tobeemailed: boolean | undefined;
  /** When processing individual invoices:

    * Check the To Be Faxed box if you want to fax this invoice. Then enter the fax number in the box to the right of the check box if it does not already appear.


When bulk processing invoices:
In the To Be Faxed field:

    * Select Yes if you want to fax this form.
    * Select No if you do not want to fax this form.
    * Select Respect Customer Preference to send the form based on the default preference on the customer record.
     Set the preference on the Info subtab of a customer record in the Send Transactions Via field.

To fax NetSuite forms, an administrator must first set up fax service at <_TABNAME=ADMI_PRINTING_> > <_TASKCATEGORY=ADMI_PRINTING_> > Printing, Fax and Email Preferences. */
  tobefaxed: boolean | undefined;
  /** When processing individual invoices:

Check the To Be Printed box if you want to print this invoice.

When bulk processing invoices:

    * Select Yes if you want to save this in a queue of invoices to print.
    * Select No if you do not want to print this form.
    * Select Respect Customer Preference to send the form based on the default preference on the customer record.
      Set the preference on the Info subtab of a customer record in the Send Transactions Via field. */
  tobeprinted: boolean | undefined;
  /** NetSuite computes the total of line items, tax and shipping costs, and then enters it here. */
  total: string | undefined;
  /** Estimated Cost: Estimated cost of the specific number of items; estimated rate x quantity = estimated cost. */
  totalcostestimate: string | undefined;
  /** Enter the shipment tracking number from the shipping company.

If a tracking number is entered in the exact format used by UPS or FedEx and the transaction is saved, the tracking number will show on the transaction as a link to the UPS or FedEx website. You can click the link to check the status of the shipment. */
  trackingnumbers: string | undefined;
  /** NetSuite inserts today's date for the posting date of this invoice. You can type or pick another date.

What you enter here determines the date range in which this transaction appears on the Accounts Receivable Register.

You can select or enter custom date ranges on registers. */
  trandate: Date;
  /** NetSuite increases the largest invoice number by one. You can type another number. The next invoice number will revert to the standard pattern. */
  tranid: string | undefined;
  /** Check this box to include all items added to this transaction as a VSOE bundle. */
  tranisvsoebundle: boolean | undefined;
  /**  */
  unbilledorders: string | undefined;
  /** The VSOE allocation amount for a sale can be calculated automatically by checking the Auto Calculate VSOE Allocation box.
 
Allocation is the process to determine the VSOE price for items on a sale. The total VSOE amount allocated is the revenue amount to be recognized for the bundle. */
  vsoeautocalc: boolean | undefined;
}

export class invoiceFieldsImpl implements invoiceFields {
  constructor(protected typedRecord: TypedRecord){ 
  }
  public get account(): string | undefined {
    return this.typedRecord.nsRecord.getValue('account') as any;
  }
  public set account(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('account', value as any)
  }
  public get althandlingcost(): string | undefined {
    return this.typedRecord.nsRecord.getValue('althandlingcost') as any;
  }
  public set althandlingcost(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('althandlingcost', value as any)
  }
  public get altshippingcost(): string | undefined {
    return this.typedRecord.nsRecord.getValue('altshippingcost') as any;
  }
  public set altshippingcost(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('altshippingcost', value as any)
  }
  public get amountpaid(): string | undefined {
    return this.typedRecord.nsRecord.getValue('amountpaid') as any;
  }
  public set amountpaid(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('amountpaid', value as any)
  }
  public get amountremaining(): string | undefined {
    return this.typedRecord.nsRecord.getValue('amountremaining') as any;
  }
  public set amountremaining(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('amountremaining', value as any)
  }
  public get amountremainingtotalbox(): string | undefined {
    return this.typedRecord.nsRecord.getValue('amountremainingtotalbox') as any;
  }
  public set amountremainingtotalbox(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('amountremainingtotalbox', value as any)
  }
  public get approvalstatus(): string | undefined {
    return this.typedRecord.nsRecord.getValue('approvalstatus') as any;
  }
  public set approvalstatus(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('approvalstatus', value as any)
  }
  public get balance(): string | undefined {
    return this.typedRecord.nsRecord.getValue('balance') as any;
  }
  public set balance(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('balance', value as any)
  }
  public get billaddress(): string | undefined {
    return this.typedRecord.nsRecord.getValue('billaddress') as any;
  }
  public set billaddress(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('billaddress', value as any)
  }
  public get billaddresslist(): string | undefined {
    return this.typedRecord.nsRecord.getValue('billaddresslist') as any;
  }
  public set billaddresslist(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('billaddresslist', value as any)
  }
  public get billingaccount(): string | undefined {
    return this.typedRecord.nsRecord.getValue('billingaccount') as any;
  }
  public set billingaccount(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('billingaccount', value as any)
  }
  public get billingaddress(): string | undefined {
    return this.typedRecord.nsRecord.getValue('billingaddress') as any;
  }
  public set billingaddress(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('billingaddress', value as any)
  }
  public get billisresidential(): string | undefined {
    return this.typedRecord.nsRecord.getValue('billisresidential') as any;
  }
  public set billisresidential(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('billisresidential', value as any)
  }
  public get canhavestackable(): boolean | undefined {
    return this.typedRecord.nsRecord.getValue('canhavestackable') as any;
  }
  public set canhavestackable(value: boolean | undefined) {
    this.typedRecord.nsRecord.setValue('canhavestackable', value as any)
  }
  public get class(): string | undefined {
    return this.typedRecord.nsRecord.getValue('class') as any;
  }
  public set class(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('class', value as any)
  }
  public get consolidatebalance(): string | undefined {
    return this.typedRecord.nsRecord.getValue('consolidatebalance') as any;
  }
  public set consolidatebalance(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('consolidatebalance', value as any)
  }
  public get couponcode(): string | undefined {
    return this.typedRecord.nsRecord.getValue('couponcode') as any;
  }
  public set couponcode(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('couponcode', value as any)
  }
  public get createddate(): string | undefined {
    return this.typedRecord.nsRecord.getValue('createddate') as any;
  }
  public set createddate(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('createddate', value as any)
  }
  public get createdfrom(): string | undefined {
    return this.typedRecord.nsRecord.getValue('createdfrom') as any;
  }
  public set createdfrom(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('createdfrom', value as any)
  }
  public get currency(): string {
    return this.typedRecord.nsRecord.getValue('currency') as any;
  }
  public set currency(value: string) {
    this.typedRecord.nsRecord.setValue('currency', value as any)
  }
  public get currencyname(): string | undefined {
    return this.typedRecord.nsRecord.getValue('currencyname') as any;
  }
  public set currencyname(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('currencyname', value as any)
  }
  public get currencysymbol(): string | undefined {
    return this.typedRecord.nsRecord.getValue('currencysymbol') as any;
  }
  public set currencysymbol(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('currencysymbol', value as any)
  }
  public get customform(): string {
    return this.typedRecord.nsRecord.getValue('customform') as any;
  }
  public set customform(value: string) {
    this.typedRecord.nsRecord.setValue('customform', value as any)
  }
  public get deferredrevenue(): string | undefined {
    return this.typedRecord.nsRecord.getValue('deferredrevenue') as any;
  }
  public set deferredrevenue(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('deferredrevenue', value as any)
  }
  public get department(): string | undefined {
    return this.typedRecord.nsRecord.getValue('department') as any;
  }
  public set department(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('department', value as any)
  }
  public get discountamount(): string | undefined {
    return this.typedRecord.nsRecord.getValue('discountamount') as any;
  }
  public set discountamount(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('discountamount', value as any)
  }
  public get discountdate(): Date | undefined {
    return this.typedRecord.nsRecord.getValue('discountdate') as any;
  }
  public set discountdate(value: Date | undefined) {
    this.typedRecord.nsRecord.setValue('discountdate', value as any)
  }
  public get discountitem(): string | undefined {
    return this.typedRecord.nsRecord.getValue('discountitem') as any;
  }
  public set discountitem(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('discountitem', value as any)
  }
  public get discountrate(): string | undefined {
    return this.typedRecord.nsRecord.getValue('discountrate') as any;
  }
  public set discountrate(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('discountrate', value as any)
  }
  public get discounttotal(): string | undefined {
    return this.typedRecord.nsRecord.getValue('discounttotal') as any;
  }
  public set discounttotal(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('discounttotal', value as any)
  }
  public get duedate(): Date | undefined {
    return this.typedRecord.nsRecord.getValue('duedate') as any;
  }
  public set duedate(value: Date | undefined) {
    this.typedRecord.nsRecord.setValue('duedate', value as any)
  }
  public get email(): string | undefined {
    return this.typedRecord.nsRecord.getValue('email') as any;
  }
  public set email(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('email', value as any)
  }
  public get enddate(): Date | undefined {
    return this.typedRecord.nsRecord.getValue('enddate') as any;
  }
  public set enddate(value: Date | undefined) {
    this.typedRecord.nsRecord.setValue('enddate', value as any)
  }
  public get entity(): string {
    return this.typedRecord.nsRecord.getValue('entity') as any;
  }
  public set entity(value: string) {
    this.typedRecord.nsRecord.setValue('entity', value as any)
  }
  public get entitynexus(): string | undefined {
    return this.typedRecord.nsRecord.getValue('entitynexus') as any;
  }
  public set entitynexus(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('entitynexus', value as any)
  }
  public get entitytaxregnum(): string | undefined {
    return this.typedRecord.nsRecord.getValue('entitytaxregnum') as any;
  }
  public set entitytaxregnum(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('entitytaxregnum', value as any)
  }
  public get estgrossprofit(): string | undefined {
    return this.typedRecord.nsRecord.getValue('estgrossprofit') as any;
  }
  public set estgrossprofit(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('estgrossprofit', value as any)
  }
  public get estgrossprofitpercent(): string | undefined {
    return this.typedRecord.nsRecord.getValue('estgrossprofitpercent') as any;
  }
  public set estgrossprofitpercent(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('estgrossprofitpercent', value as any)
  }
  public get exchangerate(): string {
    return this.typedRecord.nsRecord.getValue('exchangerate') as any;
  }
  public set exchangerate(value: string) {
    this.typedRecord.nsRecord.setValue('exchangerate', value as any)
  }
  public get excludecommission(): boolean | undefined {
    return this.typedRecord.nsRecord.getValue('excludecommission') as any;
  }
  public set excludecommission(value: boolean | undefined) {
    this.typedRecord.nsRecord.setValue('excludecommission', value as any)
  }
  public get expcostdiscamount(): string | undefined {
    return this.typedRecord.nsRecord.getValue('expcostdiscamount') as any;
  }
  public set expcostdiscamount(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('expcostdiscamount', value as any)
  }
  public get expcostdiscount(): string | undefined {
    return this.typedRecord.nsRecord.getValue('expcostdiscount') as any;
  }
  public set expcostdiscount(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('expcostdiscount', value as any)
  }
  public get expcostdiscprint(): boolean | undefined {
    return this.typedRecord.nsRecord.getValue('expcostdiscprint') as any;
  }
  public set expcostdiscprint(value: boolean | undefined) {
    this.typedRecord.nsRecord.setValue('expcostdiscprint', value as any)
  }
  public get expcostdiscrate(): string | undefined {
    return this.typedRecord.nsRecord.getValue('expcostdiscrate') as any;
  }
  public set expcostdiscrate(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('expcostdiscrate', value as any)
  }
  public get expcostdisctaxable(): boolean | undefined {
    return this.typedRecord.nsRecord.getValue('expcostdisctaxable') as any;
  }
  public set expcostdisctaxable(value: boolean | undefined) {
    this.typedRecord.nsRecord.setValue('expcostdisctaxable', value as any)
  }
  public get expcosttaxcode(): string | undefined {
    return this.typedRecord.nsRecord.getValue('expcosttaxcode') as any;
  }
  public set expcosttaxcode(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('expcosttaxcode', value as any)
  }
  public get expcosttaxrate1(): string | undefined {
    return this.typedRecord.nsRecord.getValue('expcosttaxrate1') as any;
  }
  public set expcosttaxrate1(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('expcosttaxrate1', value as any)
  }
  public get externalid(): string | undefined {
    return this.typedRecord.nsRecord.getValue('externalid') as any;
  }
  public set externalid(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('externalid', value as any)
  }
  public get fob(): string | undefined {
    return this.typedRecord.nsRecord.getValue('fob') as any;
  }
  public set fob(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('fob', value as any)
  }
  public get giftcertapplied(): string | undefined {
    return this.typedRecord.nsRecord.getValue('giftcertapplied') as any;
  }
  public set giftcertapplied(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('giftcertapplied', value as any)
  }
  public get handlingcost(): string | undefined {
    return this.typedRecord.nsRecord.getValue('handlingcost') as any;
  }
  public set handlingcost(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('handlingcost', value as any)
  }
  public get handlingtax1rate(): string | undefined {
    return this.typedRecord.nsRecord.getValue('handlingtax1rate') as any;
  }
  public set handlingtax1rate(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('handlingtax1rate', value as any)
  }
  public get handlingtaxcode(): string | undefined {
    return this.typedRecord.nsRecord.getValue('handlingtaxcode') as any;
  }
  public set handlingtaxcode(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('handlingtaxcode', value as any)
  }
  public get isbasecurrency(): boolean | undefined {
    return this.typedRecord.nsRecord.getValue('isbasecurrency') as any;
  }
  public set isbasecurrency(value: boolean | undefined) {
    this.typedRecord.nsRecord.setValue('isbasecurrency', value as any)
  }
  public get ismultishipto(): boolean | undefined {
    return this.typedRecord.nsRecord.getValue('ismultishipto') as any;
  }
  public set ismultishipto(value: boolean | undefined) {
    this.typedRecord.nsRecord.setValue('ismultishipto', value as any)
  }
  public get istaxable(): boolean | undefined {
    return this.typedRecord.nsRecord.getValue('istaxable') as any;
  }
  public set istaxable(value: boolean | undefined) {
    this.typedRecord.nsRecord.setValue('istaxable', value as any)
  }
  public get itemcostdiscamount(): string | undefined {
    return this.typedRecord.nsRecord.getValue('itemcostdiscamount') as any;
  }
  public set itemcostdiscamount(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('itemcostdiscamount', value as any)
  }
  public get itemcostdiscount(): string | undefined {
    return this.typedRecord.nsRecord.getValue('itemcostdiscount') as any;
  }
  public set itemcostdiscount(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('itemcostdiscount', value as any)
  }
  public get itemcostdiscprint(): boolean | undefined {
    return this.typedRecord.nsRecord.getValue('itemcostdiscprint') as any;
  }
  public set itemcostdiscprint(value: boolean | undefined) {
    this.typedRecord.nsRecord.setValue('itemcostdiscprint', value as any)
  }
  public get itemcostdiscrate(): string | undefined {
    return this.typedRecord.nsRecord.getValue('itemcostdiscrate') as any;
  }
  public set itemcostdiscrate(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('itemcostdiscrate', value as any)
  }
  public get itemcostdisctaxable(): boolean | undefined {
    return this.typedRecord.nsRecord.getValue('itemcostdisctaxable') as any;
  }
  public set itemcostdisctaxable(value: boolean | undefined) {
    this.typedRecord.nsRecord.setValue('itemcostdisctaxable', value as any)
  }
  public get itemcosttaxcode(): string | undefined {
    return this.typedRecord.nsRecord.getValue('itemcosttaxcode') as any;
  }
  public set itemcosttaxcode(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('itemcosttaxcode', value as any)
  }
  public get itemcosttaxrate1(): string | undefined {
    return this.typedRecord.nsRecord.getValue('itemcosttaxrate1') as any;
  }
  public set itemcosttaxrate1(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('itemcosttaxrate1', value as any)
  }
  public get lastmodifieddate(): string | undefined {
    return this.typedRecord.nsRecord.getValue('lastmodifieddate') as any;
  }
  public set lastmodifieddate(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('lastmodifieddate', value as any)
  }
  public get leadsource(): string | undefined {
    return this.typedRecord.nsRecord.getValue('leadsource') as any;
  }
  public set leadsource(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('leadsource', value as any)
  }
  public get linkedtrackingnumbers(): string | undefined {
    return this.typedRecord.nsRecord.getValue('linkedtrackingnumbers') as any;
  }
  public set linkedtrackingnumbers(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('linkedtrackingnumbers', value as any)
  }
  public get location(): string {
    return this.typedRecord.nsRecord.getValue('location') as any;
  }
  public set location(value: string) {
    this.typedRecord.nsRecord.setValue('location', value as any)
  }
  public get memo(): string | undefined {
    return this.typedRecord.nsRecord.getValue('memo') as any;
  }
  public set memo(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('memo', value as any)
  }
  public get message(): string | undefined {
    return this.typedRecord.nsRecord.getValue('message') as any;
  }
  public set message(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('message', value as any)
  }
  public get messagesel(): string | undefined {
    return this.typedRecord.nsRecord.getValue('messagesel') as any;
  }
  public set messagesel(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('messagesel', value as any)
  }
  public get muccpromocodeinstance(): string | undefined {
    return this.typedRecord.nsRecord.getValue('muccpromocodeinstance') as any;
  }
  public set muccpromocodeinstance(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('muccpromocodeinstance', value as any)
  }
  public get nextapprover(): string | undefined {
    return this.typedRecord.nsRecord.getValue('nextapprover') as any;
  }
  public set nextapprover(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('nextapprover', value as any)
  }
  public get nexus(): string | undefined {
    return this.typedRecord.nsRecord.getValue('nexus') as any;
  }
  public set nexus(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('nexus', value as any)
  }
  public get opportunity(): string | undefined {
    return this.typedRecord.nsRecord.getValue('opportunity') as any;
  }
  public set opportunity(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('opportunity', value as any)
  }
  public get otherrefnum(): string | undefined {
    return this.typedRecord.nsRecord.getValue('otherrefnum') as any;
  }
  public set otherrefnum(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('otherrefnum', value as any)
  }
  public get partner(): string | undefined {
    return this.typedRecord.nsRecord.getValue('partner') as any;
  }
  public set partner(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('partner', value as any)
  }
  public get postingperiod(): string {
    return this.typedRecord.nsRecord.getValue('postingperiod') as any;
  }
  public set postingperiod(value: string) {
    this.typedRecord.nsRecord.setValue('postingperiod', value as any)
  }
  public get promocode(): string | undefined {
    return this.typedRecord.nsRecord.getValue('promocode') as any;
  }
  public set promocode(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('promocode', value as any)
  }
  public get promocodepluginimpl(): string | undefined {
    return this.typedRecord.nsRecord.getValue('promocodepluginimpl') as any;
  }
  public set promocodepluginimpl(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('promocodepluginimpl', value as any)
  }
  public get recognizedrevenue(): string | undefined {
    return this.typedRecord.nsRecord.getValue('recognizedrevenue') as any;
  }
  public set recognizedrevenue(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('recognizedrevenue', value as any)
  }
  public get recurringbill(): boolean | undefined {
    return this.typedRecord.nsRecord.getValue('recurringbill') as any;
  }
  public set recurringbill(value: boolean | undefined) {
    this.typedRecord.nsRecord.setValue('recurringbill', value as any)
  }
  public get returntrackingnumbers(): string | undefined {
    return this.typedRecord.nsRecord.getValue('returntrackingnumbers') as any;
  }
  public set returntrackingnumbers(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('returntrackingnumbers', value as any)
  }
  public get revenuestatus(): string | undefined {
    return this.typedRecord.nsRecord.getValue('revenuestatus') as any;
  }
  public set revenuestatus(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('revenuestatus', value as any)
  }
  public get revreconrevcommitment(): boolean | undefined {
    return this.typedRecord.nsRecord.getValue('revreconrevcommitment') as any;
  }
  public set revreconrevcommitment(value: boolean | undefined) {
    this.typedRecord.nsRecord.setValue('revreconrevcommitment', value as any)
  }
  public get saleseffectivedate(): Date | undefined {
    return this.typedRecord.nsRecord.getValue('saleseffectivedate') as any;
  }
  public set saleseffectivedate(value: Date | undefined) {
    this.typedRecord.nsRecord.setValue('saleseffectivedate', value as any)
  }
  public get salesgroup(): string | undefined {
    return this.typedRecord.nsRecord.getValue('salesgroup') as any;
  }
  public set salesgroup(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('salesgroup', value as any)
  }
  public get salesrep(): string | undefined {
    return this.typedRecord.nsRecord.getValue('salesrep') as any;
  }
  public set salesrep(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('salesrep', value as any)
  }
  public get shipaddress(): string | undefined {
    return this.typedRecord.nsRecord.getValue('shipaddress') as any;
  }
  public set shipaddress(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('shipaddress', value as any)
  }
  public get shipaddresslist(): string | undefined {
    return this.typedRecord.nsRecord.getValue('shipaddresslist') as any;
  }
  public set shipaddresslist(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('shipaddresslist', value as any)
  }
  public get shipdate(): Date | undefined {
    return this.typedRecord.nsRecord.getValue('shipdate') as any;
  }
  public set shipdate(value: Date | undefined) {
    this.typedRecord.nsRecord.setValue('shipdate', value as any)
  }
  public get shipisresidential(): string | undefined {
    return this.typedRecord.nsRecord.getValue('shipisresidential') as any;
  }
  public set shipisresidential(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('shipisresidential', value as any)
  }
  public get shipmethod(): string | undefined {
    return this.typedRecord.nsRecord.getValue('shipmethod') as any;
  }
  public set shipmethod(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('shipmethod', value as any)
  }
  public get shipoverride(): string | undefined {
    return this.typedRecord.nsRecord.getValue('shipoverride') as any;
  }
  public set shipoverride(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('shipoverride', value as any)
  }
  public get shippingaddress(): string | undefined {
    return this.typedRecord.nsRecord.getValue('shippingaddress') as any;
  }
  public set shippingaddress(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('shippingaddress', value as any)
  }
  public get shippingcost(): string | undefined {
    return this.typedRecord.nsRecord.getValue('shippingcost') as any;
  }
  public set shippingcost(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('shippingcost', value as any)
  }
  public get shippingcostoverridden(): string | undefined {
    return this.typedRecord.nsRecord.getValue('shippingcostoverridden') as any;
  }
  public set shippingcostoverridden(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('shippingcostoverridden', value as any)
  }
  public get shippingtax1rate(): string | undefined {
    return this.typedRecord.nsRecord.getValue('shippingtax1rate') as any;
  }
  public set shippingtax1rate(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('shippingtax1rate', value as any)
  }
  public get shippingtaxcode(): string | undefined {
    return this.typedRecord.nsRecord.getValue('shippingtaxcode') as any;
  }
  public set shippingtaxcode(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('shippingtaxcode', value as any)
  }
  public get source(): string | undefined {
    return this.typedRecord.nsRecord.getValue('source') as any;
  }
  public set source(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('source', value as any)
  }
  public get startdate(): Date | undefined {
    return this.typedRecord.nsRecord.getValue('startdate') as any;
  }
  public set startdate(value: Date | undefined) {
    this.typedRecord.nsRecord.setValue('startdate', value as any)
  }
  public get status(): string | undefined {
    return this.typedRecord.nsRecord.getValue('status') as any;
  }
  public set status(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('status', value as any)
  }
  public get statusRef(): string | undefined {
    return this.typedRecord.nsRecord.getValue('statusRef') as any;
  }
  public set statusRef(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('statusRef', value as any)
  }
  public get subsidiary(): string | undefined {
    return this.typedRecord.nsRecord.getValue('subsidiary') as any;
  }
  public set subsidiary(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('subsidiary', value as any)
  }
  public get subsidiarytaxregnum(): string | undefined {
    return this.typedRecord.nsRecord.getValue('subsidiarytaxregnum') as any;
  }
  public set subsidiarytaxregnum(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('subsidiarytaxregnum', value as any)
  }
  public get subtotal(): string | undefined {
    return this.typedRecord.nsRecord.getValue('subtotal') as any;
  }
  public set subtotal(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('subtotal', value as any)
  }
  public get syncpartnerteams(): boolean | undefined {
    return this.typedRecord.nsRecord.getValue('syncpartnerteams') as any;
  }
  public set syncpartnerteams(value: boolean | undefined) {
    this.typedRecord.nsRecord.setValue('syncpartnerteams', value as any)
  }
  public get syncsalesteams(): boolean | undefined {
    return this.typedRecord.nsRecord.getValue('syncsalesteams') as any;
  }
  public set syncsalesteams(value: boolean | undefined) {
    this.typedRecord.nsRecord.setValue('syncsalesteams', value as any)
  }
  public get taxdetailsoverride(): boolean | undefined {
    return this.typedRecord.nsRecord.getValue('taxdetailsoverride') as any;
  }
  public set taxdetailsoverride(value: boolean | undefined) {
    this.typedRecord.nsRecord.setValue('taxdetailsoverride', value as any)
  }
  public get taxitem(): string | undefined {
    return this.typedRecord.nsRecord.getValue('taxitem') as any;
  }
  public set taxitem(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('taxitem', value as any)
  }
  public get taxrate(): number | undefined {
    return this.typedRecord.nsRecord.getValue('taxrate') as any;
  }
  public set taxrate(value: number | undefined) {
    this.typedRecord.nsRecord.setValue('taxrate', value as any)
  }
  public get taxregoverride(): boolean | undefined {
    return this.typedRecord.nsRecord.getValue('taxregoverride') as any;
  }
  public set taxregoverride(value: boolean | undefined) {
    this.typedRecord.nsRecord.setValue('taxregoverride', value as any)
  }
  public get taxtotal(): string | undefined {
    return this.typedRecord.nsRecord.getValue('taxtotal') as any;
  }
  public set taxtotal(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('taxtotal', value as any)
  }
  public get terms(): string | undefined {
    return this.typedRecord.nsRecord.getValue('terms') as any;
  }
  public set terms(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('terms', value as any)
  }
  public get timediscamount(): string | undefined {
    return this.typedRecord.nsRecord.getValue('timediscamount') as any;
  }
  public set timediscamount(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('timediscamount', value as any)
  }
  public get timediscount(): string | undefined {
    return this.typedRecord.nsRecord.getValue('timediscount') as any;
  }
  public set timediscount(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('timediscount', value as any)
  }
  public get timediscprint(): boolean | undefined {
    return this.typedRecord.nsRecord.getValue('timediscprint') as any;
  }
  public set timediscprint(value: boolean | undefined) {
    this.typedRecord.nsRecord.setValue('timediscprint', value as any)
  }
  public get timediscrate(): string | undefined {
    return this.typedRecord.nsRecord.getValue('timediscrate') as any;
  }
  public set timediscrate(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('timediscrate', value as any)
  }
  public get timedisctaxable(): boolean | undefined {
    return this.typedRecord.nsRecord.getValue('timedisctaxable') as any;
  }
  public set timedisctaxable(value: boolean | undefined) {
    this.typedRecord.nsRecord.setValue('timedisctaxable', value as any)
  }
  public get timetaxcode(): string | undefined {
    return this.typedRecord.nsRecord.getValue('timetaxcode') as any;
  }
  public set timetaxcode(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('timetaxcode', value as any)
  }
  public get timetaxrate1(): string | undefined {
    return this.typedRecord.nsRecord.getValue('timetaxrate1') as any;
  }
  public set timetaxrate1(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('timetaxrate1', value as any)
  }
  public get tobeemailed(): boolean | undefined {
    return this.typedRecord.nsRecord.getValue('tobeemailed') as any;
  }
  public set tobeemailed(value: boolean | undefined) {
    this.typedRecord.nsRecord.setValue('tobeemailed', value as any)
  }
  public get tobefaxed(): boolean | undefined {
    return this.typedRecord.nsRecord.getValue('tobefaxed') as any;
  }
  public set tobefaxed(value: boolean | undefined) {
    this.typedRecord.nsRecord.setValue('tobefaxed', value as any)
  }
  public get tobeprinted(): boolean | undefined {
    return this.typedRecord.nsRecord.getValue('tobeprinted') as any;
  }
  public set tobeprinted(value: boolean | undefined) {
    this.typedRecord.nsRecord.setValue('tobeprinted', value as any)
  }
  public get total(): string | undefined {
    return this.typedRecord.nsRecord.getValue('total') as any;
  }
  public set total(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('total', value as any)
  }
  public get totalcostestimate(): string | undefined {
    return this.typedRecord.nsRecord.getValue('totalcostestimate') as any;
  }
  public set totalcostestimate(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('totalcostestimate', value as any)
  }
  public get trackingnumbers(): string | undefined {
    return this.typedRecord.nsRecord.getValue('trackingnumbers') as any;
  }
  public set trackingnumbers(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('trackingnumbers', value as any)
  }
  public get trandate(): Date {
    return this.typedRecord.nsRecord.getValue('trandate') as any;
  }
  public set trandate(value: Date) {
    this.typedRecord.nsRecord.setValue('trandate', value as any)
  }
  public get tranid(): string | undefined {
    return this.typedRecord.nsRecord.getValue('tranid') as any;
  }
  public set tranid(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('tranid', value as any)
  }
  public get tranisvsoebundle(): boolean | undefined {
    return this.typedRecord.nsRecord.getValue('tranisvsoebundle') as any;
  }
  public set tranisvsoebundle(value: boolean | undefined) {
    this.typedRecord.nsRecord.setValue('tranisvsoebundle', value as any)
  }
  public get unbilledorders(): string | undefined {
    return this.typedRecord.nsRecord.getValue('unbilledorders') as any;
  }
  public set unbilledorders(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('unbilledorders', value as any)
  }
  public get vsoeautocalc(): boolean | undefined {
    return this.typedRecord.nsRecord.getValue('vsoeautocalc') as any;
  }
  public set vsoeautocalc(value: boolean | undefined) {
    this.typedRecord.nsRecord.setValue('vsoeautocalc', value as any)
  }
}


/** 
 * Invoice Record Definition.
 * Record's Internal Id: invoice. 
 * Supports Custom Fields: true 
 */
export interface invoiceRecord extends TypedRecord<invoiceFields> {

}

export class invoiceRecordImpl extends TypedRecordImpl<invoiceFields> implements invoiceRecord {
  constructor(public nsRecord: Record) {
    super(nsRecord)
    this._fields = new invoiceFieldsImpl(this);
    // this._sublists = invoicenew FieldsImpl(this)
  }
}


