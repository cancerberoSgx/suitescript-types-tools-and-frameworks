// This file is auto generated, do not edit it. 




/** 
 * Sales Order Fields Definition.
 * Record's Internal Id: salesorder. 
 * Supports Custom Fields: true 
 */
export interface salesorderFields {
/**  */
  allowemptycards?: boolean;
  /** The handling cost automatically calculates depending on the shipping method you select in the Ship Via field.

To change the cost of handling, go to Lists > Shipping Items and select the shipping method with the handling cost you want to change. */
  althandlingcost?: number;
  /** The alternate sales amount total is shown here. */
  altsalestotal?: number;
  /** The shipping cost automatically calculates depending on the shipping method you select in the Ship Via field above.

To change the cost of a shipping method, go to Lists > Shipping Items and select the shipping method you want to change.

If you use UPS Real-Time rates, shipments over 150lbs are broken up into shipments less than or equal to 150lbs for charging. */
  altshippingcost?: number;
  /** If you have a NetSuite merchant account, then this field autofills with the authorization code as soon as the charge is approved.

If you do not have a NetSuite merchant account, enter the authorization code you receive when the charge to the customer's credit card is validated outside of NetSuite, such as by a card-swipe terminal. */
  authcode?: string;
  /** The balance owed by this customer. */
  balance?: number;
  /**  */
  billaddress?: string;
  /** Select the appropriate billing address for this transaction. 

    * Select New to enter a new billing address to be used for this transaction and saved with the associated entity record.
    * Select Custom to enter a new billing address to be used for this transaction only (and not saved with the associated entity record).
    * Click the Edit icon to modify an existing billing address. */
  billaddresslist?: string;
  /**  */
  billingaddress?: string;
  /** Choose the billing schedule you want to associate with this transaction.

When you select a billing schedule, all items on the order are billed according to the billing schedule.

Click New to enter a new billing schedule.

When you create a new billing schedule on-the-fly, it can be identified as Public or Private. Private billing schedules show only in the transaction it is created from.

Go to Lists > Billing Schedules for details about existing billing schedules. */
  billingschedule?: string;
  /**  */
  billisresidential?: string;
  /** Check this box to enable stackable promotions on this transaction. */
  canhavestackable?: boolean;
  /** Place a check mark in this box only after the credit card charge has been validated outside NetSuite, such as by a card-swipe terminal.

If you have a NetSuite merchant account, then this field is automatically filled as soon as the charge is approved. */
  ccapproved?: boolean;
  /** This field shows the Address Verification Services (AVS) result code returned to credit card processor when a credit card transaction takes place.

The possible codes are:

   1. Y &#x2013; The address information submitted did match.
   2. N &#x2013; The address information submitted did not match.
   3. X &#x2013; The credit card company does not support AVS, or no information was returned to the procesor. */
  ccavsstreetmatch?: string;
  /** This field shows the Address Verification Services (AVS) result code returned to the credit card processor when a credit card transaction takes place.

The possible codes are:

   1. Y &#x2013; The address information submitted did match.
   2. N &#x2013; The address information submitted did not match.
   3. X &#x2013; The credit card company does not support AVS, or no information was returned. */
  ccavszipmatch?: string;
  /** Enter the credit card's expiration date using this format: MM/YYYY. */
  ccexpiredate?: string;
  /**  */
  cchold?: string;
  /**  */
  ccholdetails?: string;
  /**  */
  cciavsmatch?: string;
  /** NetSuite enters the cardholder name from the default credit card on the customer's record.

If the field contains no value or the wrong value, check the customer's record at <_TABNAME=LIST_CUSTJOB_> > <_TASKCATEGORY=LIST_CUSTJOB_> > Customers. On the Financial subtab of the customer's record, verify that the Cardholder Name field contains the correct information. */
  ccname?: string;
  /** If payment is by credit card, enter the card number here. Enter numbers only, without spaces.

NetSuite is a secure site. If a NetSuite merchant gives a customer access to view payment information, only that merchant and that customer will be able to see this number. */
  ccnumber?: string;
  /**  */
  ccprocessoraccount?: string;
  /** Enter the three-digit security code from the back of the customer's credit card. */
  ccsecuritycode?: string;
  /** This field shows the Card Security Code (CSC) result code returned to the credit card processor when a credit card transaction takes place.

The possible codes are:

   1. Y - The code submitted did match.
   2. N - The code submitted did not match.
   3. X - The credit card company does not support CSC, or no information was returned. */
  ccsecuritycodematch?: string;
  /** NetSuite enters the street address from the customer's billing address.

If the field contains no value or the wrong value, check the customer's record at <_TABNAME=LIST_CUSTJOB_> > <_TASKCATEGORY=LIST_CUSTJOB_> > Customers. On the Address subtab of the customer's record, make sure the default billing address contains the correct street address. */
  ccstreet?: string;
  /** NetSuite enters the zip or postal code from the customer's billing address.

If the field contains no value or the wrong value, check the customer's record at <_TABNAME=LIST_CUSTJOB_> > <_TASKCATEGORY=LIST_CUSTJOB_> > Customers. On the Address subtab of the customer's record, make sure the default billing address contains the correct zip or postal code. */
  cczipcode?: string;
  /** Select the class that applies to this order. Click New to set up a new class.

Go to <_TABNAME=LIST_CLASS_> > <_TASKCATEGORY=LIST_CLASS_> > Classes for details about existing classes. */
  class?: string;
  /**  */
  consolidatebalance?: number;
  /**  */
  couponcode?: string;
  /**  */
  createddate?: Date;
  /** The opportunity or estimate used to create this sales order is shown here.

Click the name to view the opportunity or estimate record. */
  createdfrom?: string;
  /** Select a credit card stored on the customer record to use as the payment method for this sale.

Click New to add a new credit card.

For details on credit cards on record, view the customer record at <_TABNAME=LIST_CUSTJOB_> > <_TASKCATEGORY=LIST_CUSTJOB_> > Customers. */
  creditcard?: string;
  /** Select a payment processing profile.

For details about payment processing profiles, click Help and read Setting Up Credit Card Processing Profiles in NetSuite. */
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
  /** If you customized a sales order form, select it here, or click New to customize a new sales order form. */
  customform: string;
  /** If the card is a debit card, enter the card's issue number. */
  debitcardissueno?: string;
  /** Deferred Revenue:

amount of revenue deferred on this transaction */
  deferredrevenue?: number;
  /** Select a department.

Click New to enter a new department.

Go to <_TABNAME=LIST_DEPARTMENT_> > <_TASKCATEGORY=LIST_DEPARTMENT_> > Departments for details about existing departments. */
  department?: string;
  /** You can select a discount for this transaction. NetSuite fills the Rate and Discount Total fields based on the discount you choose. Leave this field blank if you do not want to apply a discount to this transaction.

For details on existing discount items, go to <_TABNAME=LIST_ITEM_> > <_TASKCATEGORY=LIST_ITEM_> > Items and select Discount in the type field in the footer.

To create new discount items, go to <_TABNAME=EDIT_ITEM_> > <_TASKCATEGORY=EDIT_ITEM_> > Items > New and click Discount. */
  discountitem?: string;
  /** NetSuite enters the rate for the discount item you selected. You can change the discount rate for this transaction.

To have the discount subtracted from your total, enter a negative currency amount (for example -10.00) or a negative percentage (for example -10%). */
  discountrate?: string;
  /** NetSuite enters the amount discounted on this sales order.

If this discount item is taxable, the discount is applied before taxes. If it is not taxable, the discount is applied after taxes. */
  discounttotal?: number;
  /** Select the deferred revenue account to post revenue reclassification amounts generated by revenue reclassification journal entries. */
  draccount?: string;
  /**  */
  email?: string;
  /** If this order has an end date, enter or pick it here.

If a sales order includes a Start Date and End Date, those dates autofill on the invoice or cash sale when the order is billed. */
  enddate?: Date;
  /** Select the customer.

If you use Projects, you can select a customer or a customer project.

If you use Advanced Projects, select the customer here and enter the project in the Project field.

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
  /**  */
  externalid?: string;
  /** Enter the location where the customers technically acquire ownership. For example, if your customers own goods as soon as they ship and pay the shipping costs from your location to theirs, you might enter Our warehouse. */
  fob?: string;
  /** Select the revenue account to use to post foreign currency adjustments that result when exchange rates are different for billing and revenue postings for this transaction.

You must select an income account. */
  fxaccount?: string;
  /** Check this box only if you have a merchant account with NetSuite.

When you click Save, NetSuite sends a request to your payment gateway to process the request according to the processing profile settings.

Note: If the payment processing profile supports sales and does not support authorization, the gateway performs a sale operation, and the collected funds are associated with the sales order as a customer deposit. */
  getauth?: boolean;
  /**  */
  giftcertapplied?: number;
  /** The handling costs displayed in this field are calculated by applying the values pre-defined in the selected Shipping Method. For example you may have a flat rate handling charge for all items sent by US Mail of $1.50. 

To change handling rates, go to Shipping > Lists > Shipping Items, and select the required shipping method. Click on the Handling Rate subtab. */
  handlingcost?: number;
  /** This field shows that tax rate for the handling tax code selected. */
  handlingtax1rate?: string;
  /** Select the tax code that should apply to any handling charges on this order. */
  handlingtaxcode?: string;
  /** Check the Ignore AVS box to ignore the results of the Address Verification System (AVS) pre-authorization check. If you choose to ignore the AVS check, when a customer's address information does not match the
billing address of the credit card account, then Cybersource still processes the payment. */
  ignoreavs?: boolean;
  /**  */
  ignorecsc?: boolean;
  /**  */
  inputpnrefnum?: string;
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
  isdefaultshippingrequest?: string;
  /** Check this box to enter multiple shipping routes on this order.

In the Ship To field, select a shipping address for the customer.
The Default Billing address, from the customer record, is automatically displayed in the field. You can add a New address which is saved to the customer record, or enter a Custom address, which only stays on the transaction, and is not saved to the customer record.

In the Ship Via field, select the shipping method you want to use for that address. */
  ismultishipto?: boolean;
  /**  */
  ispurchasecard?: string;
  /** This box is checked if this cash sale was generated from a sales order for a recurring payment.

Payments marked as recurring can be successfully processed even if the credit card expires during the billing schedule.

You should not check this box for standalone cash sales. You should only check this box for transactions with recurring payments. It can be used for cash sale sales orders with billing schedules or memorized cash sale sales order. */
  isrecurringpayment?: boolean;
  /** Place a check mark in this box if this order is taxable. */
  istaxable?: boolean;
  /**  */
  lastmodifieddate?: Date;
  /** Select the lead source associated with this transaction.

If you use the Marketing Automation feature, select the campaign you want to associate with this transaction's revenue. */
  leadsource?: string;
  /**  */
  linkedtrackingnumbers?: string;
  /** Choose the location you want to associate with this transaction.

Select New to enter a new location record.

Go to <_TABNAME=LIST_LOCATION_> > <_TASKCATEGORY=LIST_LOCATION_> > Locations for details about existing location records or to create a new one. */
  location?: string;
  /** If you wish, enter a memo to describe this sales order. It will appear on reports such as the 2-line Sales Orders register. */
  memo?: string;
  /** The text of the customer message you select in the Select Message field appears here.

You can edit the message or enter a new customer message for only this transaction. */
  message?: string;
  /** Select a customer message to appear on this form. For example, you may add "Thank you for your business!" Choose from the list of existing customer messages stored in Accounting Lists.

The text of the selected message appears in the Customer Message field. In this field, you can optionally edit the message or enter a new customer message for only this transaction.

To add messages to appear in the Select Message field, go to <_TABNAME=LIST_ACCOUNTINGOTHERLIST_> > <_TASKCATEGORY=LIST_ACCOUNTINGOTHERLIST_> > Accounting Lists > New and click Customer Message. */
  messagesel?: string;
  /**  */
  muccpromocodeinstance?: string;
  /**  */
  nextbill?: Date;
  /** This field shows the nexus of the transaction. NetSuite automatically populates this field based on the nexus lookup logic.

You can override the transaction nexus and tax registration number that NetSuite automatically selects by checking the Nexus Override box. When you select a different nexus in the dropdown list, the corresponding tax registration number is automatically selected in the Subsidiary Tax Reg. Number field. */
  nexus?: string;
  /**  */
  onetime?: number;
  /** If you are entering this transaction for an opportunity, select the opportunity.

You can create opportunity records at <_TABNAME=EDIT_TRAN_OPPRTNTY_> > <_TASKCATEGORY=EDIT_TRAN_OPPRTNTY_> > Create Opportunities. */
  opportunity?: string;
  /** The default status for your sales orders was set up by your company on the Company Preference page.

If your company uses the approval process for sales orders, Pending Approval is your default. If your company does not use the approval process, Pending Fulfillment is your default.

You can change the status for each sales order here if needed. */
  orderstatus: string;
  /** If your customer is paying by check, enter the number here.

If your customer is issuing a purchase order, enter the PO number here. */
  otherrefnum?: string;
  /**  */
  overridehold?: boolean;
  /**  */
  overrideholdchecked?: boolean;
  /**  */
  overrideshippingcost?: number;
  /** Select a partner to associate with this transaction.
 
To view a list of existing partner records, go to Lists > Partners. */
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
  /** Select your customer's payment method here.

If you use the Google Checkout Integration feature, this field is view-only. Orders generated from Google Checkout display your Google Checkout Account name as the payment method. */
  paymentmethod?: string;
  /**  */
  paypalauthid?: string;
  /**  */
  paypalprocess?: boolean;
  /**  */
  paypalstatus?: string;
  /**  */
  paypaltranid?: string;
  /** Payment request message identifier appears here once payment is authorized. */
  pnrefnum?: string;
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
  recurannually?: number;
  /**  */
  recurmonthly?: number;
  /**  */
  recurquarterly?: number;
  /**  */
  recurweekly?: number;
  /**  */
  returntrackingnumbers?: string;
  /** This field provides information about Revenue Commitment(s) in the case of a Sales Order or Revenue Commitment Reversal(s) in the case of a Return Authorization.

If you uncheck the Rev Rec on Rev Commit. Field, the Rev. Commit. Status field displays information about the related Invoice(s) or Credit Memo(s).

The possible values for this field and definitions are as follows:

   1. Pending Commitment - No related revenue transactions have been created.
   2. Partially Committed - Some related revenue transactions have been created.
   3. Committed - All related revenue transactions have been created. */
  revcommitstatus?: string;
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

The sales effective date determines which commission plan and historical sales team this transaction applies to. */
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
  /** Check this box if you want to ship this order only when complete. This will prevent multiple shipments of part-orders. 

When fulfilling orders in bulk, you can filter the list to include those orders marked Ship Complete that can be completely fulfilled by selecting Respect Ship Complete in the Filter By field. */
  shipcomplete?: boolean;
  /** Type or pick a shipping date for this order. */
  shipdate?: Date;
  /**  */
  shipisresidential?: string;
  /** Select which type of shipping service (method) you want to use for this transaction. For example next day delivery or airmail.

If you automatically charge for shipping, the shipping method you select here, is used to calculate the shipping costs in the next field. */
  shipmethod?: string;
  /**  */
  shipoverride?: string;
  /**  */
  shippingaddress?: string;
  /** This field displays the shipping costs associated with the transaction. 

If you have set up your account to automatically calculate shipping, shipping costs are calculated according to the shipping method selected in the Shipping Method field.

To automatically charge for shipping, go to Setup > Accounting > Shipping. Check the Charge for Shipping box. In addition, you need to set up charge details for your shipping items. Go to Lists > Accounting > Shipping Items.

UPS Real-Time rates
If you use this service and a package is over 150lbs, the package is charged as multiple packages equal to or less than 150lbs. */
  shippingcost?: number;
  /**  */
  shippingcostoverridden?: string;
  /** This field shows the tax rate for the shipping tax code selected. */
  shippingtax1rate?: string;
  /** Select the tax code that should apply to shipping for this order.

The tax rate for this code shows below. */
  shippingtaxcode?: string;
  /**  */
  softdescriptor?: string;
  /**  */
  source?: string;
  /** If you use the Advanced Billing feature, enter the date for the first invoice to be created.

If a sales order includes a Start Date and End Date, those dates autofill on the invoice or cash sale when the order is billed. */
  startdate?: Date;
  /**  */
  status?: string;
  /**  */
  statusref?: string;
  /** This field displays the subsidiary associated with this transaction. */
  subsidiary?: string;
  /** This field shows the tax registration number of the transaction nexus. NetSuite automatically populates this field based on the nexus lookup logic. 

You can override the transaction nexus and tax registration number that NetSuite automatically selects by checking the Nexus Override box. When you select a different tax registration number in the dropdown list, the corresponding nexus is automatically selected in the Nexus field. */
  subsidiarytaxregnum?: string;
  /** This field shows the total of the items on this sales order.

This is the total before any discounts, shipping cost, handling cost or tax is added to the order. */
  subtotal?: number;
  /** Check this box if you want to update the sales team on the customer's record with changes you make here. */
  syncpartnerteams?: boolean;
  /** Check this box if you want to update the sales team on the customer's record with changes you make here. */
  syncsalesteams?: boolean;
  /** Check this box to override the tax information on the Tax Details subtab of the transaction. Only roles with at least the Edit level of the Tax Details Tab permission can override the tax details. */
  taxdetailsoverride?: boolean;
  /** A tax item is a tax that you collect at one certain rate and pay to one tax agency for this invoice. NetSuite inserts the tax item for this customer from the record at Lists > Customers. To change it just for this sale, select another tax item.

To add additional choices to this list, go to Lists > New Item > Sales Tax Item. */
  taxitem?: string;
  /** NetSuite inserts the percentage rate of the tax item from its record at Lists > Items. You can change it here for just this transaction if you wish. */
  taxrate?: number;
  /** Check this box to override the values in the Nexus and Subsidiary Tax Reg. Number fields. Only roles with at least the Edit level of the Tax Details Tab permission can override the values that NetSuite automatically selects in these fields. */
  taxregoverride?: boolean;
  /** NetSuite multiplies the tax rate by the taxable total of line items and enters it here. */
  taxtotal?: number;
  /** Select terms that will apply to this sales order.

To add additional choices to this list, go to <_TABNAME=LIST_ACCOUNTINGOTHERLIST_> > <_TASKCATEGORY=LIST_ACCOUNTINGOTHERLIST_> > Accounting Lists > New > Terms. */
  terms?: string;
  /**  */
  threedstatuscode?: string;
  /** Check this box if you want to email this sales order. Then enter the email address in the space to the right of the check box.

You can enter multiple email addresses by separating them with a semicolon. It is important to separate the addresses with only a semicolon and do not include any spaces. */
  tobeemailed?: boolean;
  /** Check this box if you want to fax this transaction.

Enter the fax number in the space to the right of the check box if it doesn't already appear.

To fax NetSuite forms, an administrator must first set up fax service at <_TABNAME=ADMI_PRINTING_> > <_TASKCATEGORY=ADMI_PRINTING_> > Printing, Fax and Email Preferences. */
  tobefaxed?: boolean;
  /** Check this box if you want to save this in a queue of sales orders and picking tickets you can later chose to print.

On new individual sales orders, you can click Save and Print to submit and print the sales order at once.

On existing individual sales orders, you can click Print to submit and print the sales order at once. */
  tobeprinted?: boolean;
  /** NetSuite computes the total of line items, tax and shipping costs, and then enters it here. */
  total?: number;
  /** Estimated Cost: Estimated cost of the specific number of items; estimated rate x quantity = estimated cost. */
  totalcostestimate?: number;
  /** NetSuite inserts today's date for the posting date of this sales order. You can type or pick another date.

What you enter here determines the date range in which this transaction appears on the Sales Order Register.

You can select or enter custom date ranges on registers. */
  trandate: Date;
  /** NetSuite increases the largest sales order number by one. If you wish, you can type another number. The next order number will revert to the standard pattern.

Note: The maximum number of characters you can enter in this field is 45. */
  tranid?: string;
  /** Check this box to include all items on this transaction as a VSOE bundle.

Note: If Rev Rec Dates Specified on Sales Order is the Revenue Recognition Template term source used to allocate revenue, then NetSuite uses the Start and End Dates from the sales order to calculate the Revenue Recognition Schedule. */
  tranisvsoebundle?: boolean;
  /**  */
  unbilledorders?: number;
  /** Enter the date when this card first became valid. Use the format MM/YYYY. */
  validfrom?: string;
  /** Check this box to automatically calculate allocation amounts when you save the transaction.  

Allocation determines the revenue amount for individual transaction lines. */
  vsoeautocalc?: boolean;
}





/** 
 * Sales Order Sublists Definition.
 * Record's Internal Id: salesorder. 
 * Supports Custom Fields: true 
 */
export interface salesorderSublists {
  
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

  /** item: Items */
  item: {
    /** altsalesamt - Alt. Sales  */
    altsalesamt: number;
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
    /** commitinventory - Commit  */
    commitinventory: string;
    /** costestimate - Est. Extended Cost  */
    costestimate: number;
    /** costestimaterate -   */
    costestimaterate: string;
    /** costestimatetype - Cost Estimate Type  */
    costestimatetype: string;
    /** createdpo -   */
    createdpo: string;
    /** createpo - Create PO  */
    createpo: string;
    /** createwo - Create WO  */
    createwo: boolean;
    /** daysbeforeexpiration -   */
    daysbeforeexpiration: string;
    /** deferrevrec -   */
    deferrevrec: boolean;
    /** description - Description  */
    description: string;
    /** excludefromraterequest - Exclude Item from Rate Request  */
    excludefromraterequest: boolean;
    /** expectedshipdate - Expected Ship Date  */
    expectedshipdate: Date;
    /** fromjob - Project Item  */
    fromjob: boolean;
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
    /** isclosed - Closed  */
    isclosed: boolean;
    /** isestimate - Billable Estimate  */
    isestimate: boolean;
    /** istaxable - Tax  */
    istaxable: boolean;
    /** isvsoebundle -   */
    isvsoebundle: string;
    /** item - Item  */
    item?: string;
    /** itemfulfillmentchoice -   */
    itemfulfillmentchoice: string;
    /** itemsubtype -   */
    itemsubtype: string;
    /** itemtype -   */
    itemtype: string;
    /** licensecode - License Code  */
    licensecode: string;
    /** line -   */
    line: string;
    /** linenumber -   */
    linenumber: number;
    /** lineuniquekey -   */
    lineuniquekey: string;
    /** locationautoassigned -   */
    locationautoassigned: boolean;
    /** matrixtype -   */
    matrixtype: string;
    /** noautoassignlocation -   */
    noautoassignlocation: boolean;
    /** options - Options  */
    options: string;
    /** orderpriority - Order Priority  */
    orderpriority: number;
    /** porate -   */
    porate: number;
    /** povendor -   */
    povendor: string;
    /** price - Price Level  */
    price: string;
    /** printitems -   */
    printitems: string;
    /** quantity - Quantity  */
    quantity: number;
    /** quantityavailable -   */
    quantityavailable: number;
    /** quantitybackordered - Back Ordered  */
    quantitybackordered: number;
    /** quantitybilled - Invoiced  */
    quantitybilled: number;
    /** quantitycommitted - Committed  */
    quantitycommitted: number;
    /** quantityfulfilled - Fulfilled  */
    quantityfulfilled: number;
    /** quantityrevcommitted - Rev. Committed  */
    quantityrevcommitted: number;
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
    /** subscription - Subscription  */
    subscription: string;
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
}





