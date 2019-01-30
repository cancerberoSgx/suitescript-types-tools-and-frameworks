// This file is auto generated, do not edit it. 




/** 
 * Cash Sale Fields Definition.
 * Record's Internal Id: cashsale. 
 * Supports Custom Fields: true 
 */
export interface cashsaleFields {
/** Click the button to the right and then select the account where you want to deposit the amount received. */
  account?: string;
  /**  */
  allowemptycards?: boolean;
  /** The handling cost automatically calculates depending on the shipping method you select in the Ship Via field.

To change the cost of handling, go to Lists > Shipping Items and select the shipping method with the handling cost you want to change. */
  althandlingcost?: number;
  /** The shipping cost automatically calculates depending on the shipping method you select in the Ship Via field above.

To change the cost of a shipping method, go to Lists > Shipping Items and select the shipping method you want to change.

If you use UPS Real-Time rates, shipments over 150lbs are broken up into shipments less than or equal to 150lbs for charging. */
  altshippingcost?: number;
  /** If you have a NetSuite merchant account, then this field autofills with the authorization code as soon as the charge is approved.

If you do not have a NetSuite merchant account, enter the authorization code you receive when the charge to the customer's credit card is validated outside of NetSuite, such as by a card-swipe terminal. */
  authcode?: string;
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
  /**  */
  canhavestackable?: boolean;
  /** Check this box in the following cases:

    * The transaction has been performed outside NetSuite, such as by a card-swipe terminal
    * You have validated the payment outside of NetSuite. For example, by contacting the payment gateway back office or by checking your bank account.

If you have a NetSuite merchant account, then this field is automatically filled as soon as the transaction is approved.

This field is also automatically checked and dimmed if you select a non-credit card payment method, such as cash or check. */
  ccapproved?: boolean;
  /** This field shows the Address Verification Services (AVS) result code returned to VeriSign when a credit card transaction takes place.

The possible codes are:

   1. Y &#x96; The address information submitted did match.
   2. N &#x96; The address information submitted did not match.
   3. X &#x96; The credit card company does not support AVS, or no information was returned to VeriSign. */
  ccavsstreetmatch?: string;
  /** This field shows the Address Verification Services (AVS) result code returned to VeriSign when a credit card transaction takes place.

The possible codes are:

   1. Y &#x96; The address information submitted did match.
   2. N &#x96; The address information submitted did not match.
   3. X &#x96; The credit card company does not support AVS, or no information was returned to VeriSign. */
  ccavszipmatch?: string;
  /** Enter the credit card's expiration date using this format: MM/YYYY. */
  ccexpiredate?: string;
  /**  */
  cchold?: string;
  /**  */
  ccholdetails?: string;
  /**  */
  cciavsmatch?: string;
  /** This box is marked when NetSuite determines that the credit card entered is a purchase card. If you use the Send Purchase Card Data feature and the Process as Purchase Card box is also checked, this credit card payment will be processed by NetSuite as a purchase card.

Contact your NetSuite account representative for more information. */
  ccispurchasecardbin?: boolean;
  /** NetSuite enters the cardholder name from the default credit card on the customer's record.

If the field contains no value or the wrong value, check the customer's record at <_TABNAME=LIST_CUSTJOB_> > <_TASKCATEGORY=LIST_CUSTJOB_> > Customers. On the Financial subtab of the customer's record, verify that the Cardholder Name field contains the correct information. */
  ccname?: string;
  /** If payment is by credit card, enter the card number here. Enter numbers only, without spaces.

NetSuite is a secure site. If a NetSuite merchant gives a customer access to view payment information, only that merchant and that customer will be able to see this number. */
  ccnumber?: string;
  /**  */
  ccprocessoraccount?: string;
  /** Enter the three-digit card security code from the back of the customer's credit card. */
  ccsecuritycode?: string;
  /** This field shows the Card Security Code (CSC) result code returned to VeriSign when a credit card transaction takes place.

The possible codes are:

   1. Y - The code submitted did match.
   2. N - The code submitted did not match.
   3. X - The credit card company does not support CSC, or no information was returned to VeriSign. */
  ccsecuritycodematch?: string;
  /** NetSuite enters the street address from the customer's billing address.

If the field contains no value or the wrong value, check the customer's record at <_TABNAME=LIST_CUSTJOB_> > <_TASKCATEGORY=LIST_CUSTJOB_> > Customers. On the Address subtab of the customer's record, make sure the default billing address contains the correct street address. */
  ccstreet?: string;
  /** NetSuite enters the zip or postal code from the customer's billing address.

If the field contains no value or the wrong value, check the customer's record at <_TABNAME=LIST_CUSTJOB_> > <_TASKCATEGORY=LIST_CUSTJOB_> > Customers. On the Address subtab of the customer's record, make sure the default billing address contains the correct zip or postal code. */
  cczipcode?: string;
  /** If payment is by credit card, place a check mark in this box to process the credit card charge over the Internet. The effect is the same as swiping a card through a terminal. Funds will move if the card is accepted. If rejected, you will be told why. You must have previously set up a NetSuite merchant account for this to work. */
  chargeit?: boolean;
  /** Select the class that applies to this sale.

To create a new class, select New.

For details on existing classes, go to <_TABNAME=LIST_CLASS_> > <_TASKCATEGORY=LIST_CLASS_> > Classes. */
  class?: string;
  /**  */
  couponcode?: string;
  /**  */
  createddate?: Date;
  /** This field shows the sales order this cash sale is created from.

Click the link to open the sales order. */
  createdfrom?: string;
  /** Select a credit card stored on the customer record to use as the payment method for this sale.

Click New to enter a new credit card. */
  creditcard?: string;
  /** Select a credit card processor.
 
For details about credit card processors, click Help and read Setting Up Credit Card Gateways in NetSuite. */
  creditcardprocessor?: string;
  /** If you do not use the Multi-Currency Customers feature, the currency of the customer you are creating this transaction for is shown here.

If you use the Multi-Currency Customers feature, select the transaction currency you want to create this transaction in. This customer's primary currency is selected by default.

If you have already selected items on this transaction, selecting a new currency refreshes them to show the price in the new currency (except for items you entered custom prices for) and recalculates tax and gross profit. */
  currency: string;
  /** This customer's currency is shown in this field.

All currency amounts on this transaction are shown in this currency. */
  currencyname?: string;
  /**  */
  currencysymbol?: string;
  /**  */
  customercode?: string;
  /** If you customized a sales receipt form, select it here, or click New to customize a new sales receipt form. */
  customform: string;
  /** If the card is a debit card, enter the card's issue number. */
  debitcardissueno?: string;
  /** Deferred Revenue:

amount of revenue deferred on this transaction */
  deferredrevenue?: number;
  /** Select a department to associate with this transaction.

To create a new department, select New.

For details on existing departments, go to <_TABNAME=LIST_DEPARTMENT_> > <_TASKCATEGORY=LIST_DEPARTMENT_> > Departments. */
  department?: string;
  /** You can select a discount for this transaction. NetSuite fills the Rate and Discount Total fields based on the discount you choose.

Leave this field blank if you do not want to apply a discount to this transaction.

For details on existing discount items, go to <_TABNAME=LIST_ITEM_> > <_TASKCATEGORY=LIST_ITEM_> > Items and select Discount in the type field in the footer.

To create new discount items, go to <_TABNAME=EDIT_ITEM_> > <_TASKCATEGORY=EDIT_ITEM_> > Items > New and click Discount. */
  discountitem?: string;
  /** NetSuite enters the rate for the discount item you selected. You can change the discount rate for this cash refund.

Enter the discount as a dollar amount like 10.00, or as a percentage like 10%. */
  discountrate?: string;
  /** NetSuite enters the amount discounted on this cash sale.

If this discount item is taxable, the discount is applied before taxes. If it is not taxable, the discount is applied after taxes. */
  discounttotal?: number;
  /**  */
  email?: string;
  /** Type or pick the end date for this invoice. */
  enddate?: Date;
  /** Select the customer for this sale. If you are using projects, select the appropriate project rather than the master customer account.

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
  /** The amount added to or taken away from the total shows here, based on what is selected in the Discount/Markup field. */
  expcostdiscamount?: number;
  /** Select a discount or markup item to apply to billable expenses applied to this cash sale.

The rate of discount or markup automatically fills in the Rate field and is calculated in the Total. */
  expcostdiscount?: string;
  /** Check this box if you added a discount or markup to expenses and want to print it on the invoice. */
  expcostdiscprint?: boolean;
  /** The rate of the discount or markup item selected shows here.

This rate is applied to the billable expenses you select and calculated in the total for the cash sale. */
  expcostdiscrate?: string;
  /** Place a check mark in this box if these expenses are taxable. */
  expcostdisctaxable?: boolean;
  /** If expenses should be taxed, select the default tax code for all expenses.

If expenses should not be taxed, select -Not Taxable-.

You can edit individual expenses in the list below. */
  expcosttaxcode?: string;
  /** The tax rate of the code selected shows here. */
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
  /** The tax rate for this tax code is shown here. */
  handlingtax1rate?: string;
  /** Select the tax code that determines the tax for handling charges. */
  handlingtaxcode?: string;
  /** Check the Ignore AVS box to ignore the results of the Address Verification System (AVS) pre-authorization check. If you choose to ignore the AVS check, when a customer's address information does not match the billing address of the credit card account, then Cybersource still processes the payment. */
  ignoreavs?: boolean;
  /**  */
  ignorecsc?: boolean;
  /**  */
  inputpnrefnum?: string;
  /**  */
  isbasecurrency?: boolean;
  /**  */
  ismultishipto?: boolean;
  /**  */
  ispurchasecard?: string;
  /** This box is checked if this cash sale was generated from a sales order for a recurring payment.

Payments marked as recurring can be successfully processed even if the credit card expires during the billing schedule.

You should not check this box for standalone cash sales. You should only check this box for transactions with recurring payments. It can be used for cash sale sales orders with billing schedules or memorized cash sale sales order. */
  isrecurringpayment?: boolean;
  /** Place a check mark in this box if this order is taxable. */
  istaxable?: boolean;
  /** The amount added to or taken away from the total shows here, based on what is selected in the Discount/Markup field. */
  itemcostdiscamount?: number;
  /** Select a discount or markup item to apply to billable items applied to this cash sale.

The rate of discount or markup automatically fills in the Rate field and is calculated in the Total. */
  itemcostdiscount?: string;
  /** Check this box if you added a discount or markup and want to print it on the invoice. */
  itemcostdiscprint?: boolean;
  /** The rate of the discount or markup item selected shows here.

This rate is applied to the billable items you select and calculated in the total for the cash sale. */
  itemcostdiscrate?: string;
  /** Check the Apply Before Tax box to apply the markup to the price before you charge taxes. 
This applies to every billable item on the sale. */
  itemcostdisctaxable?: boolean;
  /** If items should be taxed, select the default tax code for all items.

If items should not be taxed, select -Not Taxable-.

You can edit individual items in the list below. */
  itemcosttaxcode?: string;
  /** The tax rate of the code selected shows here. */
  itemcosttaxrate1?: number;
  /**  */
  lastmodifieddate?: Date;
  /** Select the lead source associated with this transaction.

If you use the Marketing Automation feature, select the campaign you want to associate with this transaction's revenue. */
  leadsource?: string;
  /**  */
  linkedtrackingnumbers?: string;
  /** Choose the location you want to associate with this transaction.

To create a new location, select New.

For details on existing locations, go to <_TABNAME=LIST_LOCATION_> > <_TASKCATEGORY=LIST_LOCATION_> > Locations. */
  location: string;
  /** Enter a memo to describe this cash sale. It will appear on reports such as the 2-line Undeposited Funds register. */
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
  /** This field shows the nexus of the transaction. NetSuite automatically populates this field based on the nexus lookup logic.

You can override the transaction nexus and tax registration number that NetSuite automatically selects by checking the Nexus Override box. When you select a different nexus in the dropdown list, the corresponding tax registration number is automatically selected in the Subsidiary Tax Reg. Number field. */
  nexus?: string;
  /** If you are entering this transaction for an opportunity, select the opportunity.

You can create opportunity records at <_TABNAME=EDIT_TRAN_OPPRTNTY_> > <_TASKCATEGORY=EDIT_TRAN_OPPRTNTY_> > Create Opportunities. */
  opportunity?: string;
  /** If your customer paid by check, enter the number here. It will appear on the Sales Receipt form. */
  otherrefnum?: string;
  /**  */
  overridehold?: boolean;
  /**  */
  overrideholdchecked?: boolean;
  /** The partner associated with this customer appears in the Partner field.
 
You can change the partner for this transaction. */
  partner?: string;
  /**  */
  paymenteventdate?: Date;
  /**  */
  paymenteventholdreason?: string;
  /**  */
  paymenteventpurchasedatasent?: string;
  /**  */
  paymenteventresult?: string;
  /**  */
  paymenteventtype?: string;
  /**  */
  paymenteventupdatedby?: string;
  /** Select the payment method for this sale.

To add additional choices to this list, go to <_TABNAME=EDIT_ACCOUNTINGOTHERLIST_> > <_TASKCATEGORY=EDIT_ACCOUNTINGOTHERLIST_> > Accounting Lists > New > Payment Method.

If you use the Google Checkout Integration feature, orders from Google Checkout display your Google Checkout account as the payment method. You cannot change the value in this field. */
  paymentmethod?: string;
  /**  */
  paypalauthid?: string;
  /**  */
  paypalprocess?: boolean;
  /**  */
  paypalstatus?: string;
  /**  */
  paypaltranid?: string;
  /** If you accept credit card payments, the Verisign authentication code appears here once the payment is approved. */
  pnrefnum?: string;
  /** Select the period you want to post this cash sale to.

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

NetSuite creates all applicable Revenue Recognition schedules for the Revenue Commitment or Revenue Commitment Reversal. */
  revreconrevcommitment?: boolean;
  /** You can change the sales effective date for this transaction.

The sales effective date determines which commission plan and historical sales team this transaction applies to. */
  saleseffectivedate?: Date;
  /** Select a sales team to associate with this transaction.

To create a sales team, go to <_TABNAME=EDIT_CRMGROUP_> > <_TASKCATEGORY=EDIT_CRMGROUP_> > New > Select Sales Team Members. */
  salesgroup?: string;
  /** NetSuite inserts the sales representative associated with this company on the customer record at <_TABNAME=LIST_CUSTJOB_> > <_TASKCATEGORY=LIST_CUSTJOB_> > Customers.

If a different sales rep is assigned to this transaction, select that sales rep here.

To add additional sales reps to this list, go to <_TABNAME=EDIT_EMPLOYEE_> > <_TASKCATEGORY=EDIT_EMPLOYEE_> > Employees > New. */
  salesrep?: string;
  /**  */
  shipaddress?: string;
  /** Select the appropriate shipping address for this transaction. Select New to enter a new shipping address. */
  shipaddresslist?: string;
  /** Enter or pick the date this item will ship. */
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

If you use UPS Real-Time rates, shipments over 150lbs are charged as separate packages weiging equal to or less than 150lbs each. */
  shippingcost?: number;
  /**  */
  shippingcostoverridden?: string;
  /** The tax rate for this tax code is shown here. */
  shippingtax1rate?: string;
  /** Select the tax code that determines the tax charged for shipping. */
  shippingtaxcode?: string;
  /**  */
  softdescriptor?: string;
  /**  */
  source?: string;
  /** If you use the Advanced Billing feature, enter the date for the first bill to be created.

If a cash sale is created from a sales order that includes a Start Date and End Date, those dates autofill on the cash sale when the order is billed. */
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
  /** This field shows the total of the items on this sales order.

This is the total before any discount, shipping cost, handling cost or tax is added to the order. */
  subtotal?: number;
  /** Check this box if you want to update the sales team on the customer's record with changes you make here. */
  syncpartnerteams?: boolean;
  /** Check this box if you want to update the sales team on the customer's record with changes you make here. */
  syncsalesteams?: boolean;
  /** Check this box to override the tax information on the Tax Details subtab of the transaction. Only roles with at least the Edit level of the Tax Details Tab permission can override the tax details. */
  taxdetailsoverride?: boolean;
  /** A tax item is a tax that you collect at one certain rate and pay to one tax agency for this sale. NetSuite inserts the tax item for this customer from the record at Lists > Customers. To change it just for this sale, select another tax item.

To add additional choices to this list, go to Lists > New Item > Sales Tax Item. */
  taxitem?: string;
  /** NetSuite inserts the percentage rate of the tax item from its record at Lists > Items. You can change it here for just this transaction if you wish. */
  taxrate?: number;
  /** Check this box to override the values in the Nexus and Subsidiary Tax Reg. Number fields. Only roles with at least the Edit level of the Tax Details Tab permission can override the values that NetSuite automatically selects in these fields. */
  taxregoverride?: boolean;
  /** NetSuite multiplies the tax rate by the taxable total of line items and enters it here. */
  taxtotal?: number;
  /**  */
  threedstatuscode?: string;
  /** The amount added to or taken away from the total shows here, based on what is selected in the Discount/Markup field. */
  timediscamount?: number;
  /** Select a discount or markup item to apply to billable time applied to this cash sale.

The rate of discount or markup automatically fills in the Rate field and is calculated in the Total. */
  timediscount?: string;
  /** Check this box if you added a discount or markup and want to print it on the invoice. */
  timediscprint?: boolean;
  /** The rate of the discount or markup item selected shows here.

This rate is applied to the billable time you select and calculated in the total for the cash sale. */
  timediscrate?: string;
  /** Check this box if the discount or markup item selected should be applied to the billable time you select before taxes are calculated for the cash sale. */
  timedisctaxable?: boolean;
  /** If time should be taxed, select the default tax code for all time entries.

If time should not be taxed, select -Not Taxable-.

You can edit individual time entries in the list below. */
  timetaxcode?: string;
  /** The tax rate of the code selected shows here. */
  timetaxrate1?: number;
  /** Check this box if you want to e-mail this receipt. Then enter the e-mail address in the space to the right of the check box.

You can enter multiple e-mail addresses by separating them with semicolons. It is important to separate the addresses with only semicolons, and do not include any spaces. */
  tobeemailed?: boolean;
  /** Check this box if you want to fax this cash sale receipt.

Enter the fax number in the space to the right of the check box if it doesn't already appear.

To fax NetSuite forms, an administrator must first set up fax service at <_TABNAME=ADMI_PRINTING_> > <_TASKCATEGORY=ADMI_PRINTING_> > Printing, Fax and E-mail Preferences. */
  tobefaxed?: boolean;
  /** Check this box if you wish to save this in a queue of sales receipts to print. Otherwise, you can click Print below to submit and print this sales receipt at once. */
  tobeprinted?: boolean;
  /** NetSuite computes the total of line items, tax and shipping charges, and then enters it here. */
  total?: number;
  /** Estimated Cost: Estimated cost of the specific number of items; estimated rate x quantity = estimated cost. */
  totalcostestimate?: number;
  /** Enter the shipment tracking number from the shipping company.

If a tracking number is entered in the exact format used by UPS or FedEx and the transaction is saved, the tracking number will show on the transaction as a link to the UPS or FedEx website. You can click the link to check the status of the shipment. */
  trackingnumbers?: string;
  /** NetSuite inserts today's date as the date of this cash sale. You can type or pick another date. */
  trandate: Date;
  /** NetSuite increases the largest sale number by one.

You can also type another number. Then, the next sale number reverts to the standard pattern.

You can also enter non-numerical characters in this field.

The maximum number of characters you can enter in this field is 45. */
  tranid?: string;
  /** Check this box to include all items added to this transaction as a VSOE bundle. */
  tranisvsoebundle?: boolean;
  /** * If you receive payment by cash or check, click
      Undep. Funds.
      Once you deposit the money, you will need to go to Transactions > Make Deposits.

    * If you receive payment by credit card, click Account
      and select which account will be credited. */
  undepfunds?: string;
  /** Enter the date when this card first became valid. Use the format MM/YYYY. */
  validfrom?: string;
  /** The VSOE allocation amount for a sale can be calculated automatically by checking the Auto Calculate VSOE Allocation box.
 
Allocation is the process to determine the VSOE price for items on a sale. The total VSOE amount allocated is the revenue amount to be recognized for the bundle. */
  vsoeautocalc?: boolean;
}





/** 
 * Cash Sale Sublists Definition.
 * Record's Internal Id: cashsale. 
 * Supports Custom Fields: true 
 */
export interface cashsaleSublists {
  
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





