// This file is auto generated, do not edit it. 




/** 
 * Cash Refund Fields Definition.
 * Record's Internal Id: cashrefund. 
 * Supports Custom Fields: true 
 */
export interface cashrefundFields {
/** Select the cash or bank account from which you are refunding this money. */
  account?: string;
  /**  */
  allowemptycards?: boolean;
  /** This is the amount the customer was charged for handling. */
  althandlingcost?: number;
  /** This is the amount the customer was charged for shipping. */
  altshippingcost?: number;
  /**  */
  billaddress?: string;
  /** Select the appropriate billing address for this transaction. Select New to enter a new billing address. */
  billaddresslist?: string;
  /**  */
  billingaddress?: string;
  /**  */
  billisresidential?: string;
  /** Place a check mark in this box only if the credit card transaction has been performed outside NetSuite, such as by a card-swipe terminal.

If you have a NetSuite merchant account, then this field is automatically filled as soon as the transaction is approved. */
  ccapproved?: boolean;
  /** Enter the credit card's expiration date using this format: MM/YYYY. */
  ccexpiredate?: string;
  /**  */
  cchold?: string;
  /**  */
  ccholdetails?: string;
  /** If you use the Send Purchase Card Data feature, this box is marked when NetSuite determines that the credit card entered is a purchase card. If the Process as Purchase Card box is also checked, this credit card payment will be processed by NetSuite as a purchase card.

Contact your NetSuite account representative for more information. */
  ccispurchasecardbin?: boolean;
  /** NetSuite enters the cardholder name from the default credit card on the customer's record.

If the field contains no value or the wrong value, check the customer's record at <_TABNAME=LIST_CUSTJOB_> > <_TASKCATEGORY=LIST_CUSTJOB_> > Customers. On the Financial subtab of the customer's record, verify that the Cardholder Name field contains the correct information. */
  ccname?: string;
  /** If refund is by credit card, enter the card number here. Enter numbers only, without spaces.

NetSuite is a secure site. If a NetSuite merchant gives a customer access to view payment information, only that merchant and that customer will be able to see this number. */
  ccnumber?: string;
  /**  */
  ccprocessoraccount?: string;
  /** NetSuite enters the street address from the customer's billing address.

If the field contains no value or the wrong value, check the customer's record at <_TABNAME=LIST_CUSTJOB_> > <_TASKCATEGORY=LIST_CUSTJOB_> > Customers. On the Address subtab of the customer's record, make sure the default billing address contains the correct street address. */
  ccstreet?: string;
  /** NetSuite enters the zip or postal code from the customer's billing address.

If the field contains no value or the wrong value, check the customer's record at <_TABNAME=LIST_CUSTJOB_> > <_TASKCATEGORY=LIST_CUSTJOB_> > Customers. On the Address subtab of the customer's record, make sure the default billing address contains the correct zip or postal code. */
  cczipcode?: string;
  /** If refund is by credit card, place a check mark in this box to process the credit to the customer's charge account over the Internet. You must have previously set up a NetSuite merchant account for this to work. */
  chargeit?: boolean;
  /** If you wish, select the class that applies to this refund.

To create a new class, select New.

For details on existing classes, go to <_TABNAME=LIST_CLASS_> > <_TASKCATEGORY=LIST_CLASS_> > Classes. */
  class?: string;
  /**  */
  couponcode?: string;
  /**  */
  createddate?: Date;
  /** This field shows the return Authorization this refund is created from.

Click the link to open the return authorization. */
  createdfrom?: string;
  /** Select a credit card stored on the customer record to use as the method to refund this payment.

Click New to enter a new credit card. */
  creditcard?: string;
  /** Select the credit card processor you want to use for this transaction.

You can set up credit card processors at <_TABNAME=ADMI_CREDCARD_> > <_TASKCATEGORY=ADMI_CREDCARD_> > Set Up Credit Card Processing. */
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
  /** If you customized a cash refund form, select it here, or click New to customize a new cash refund form. */
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
  /** You can select a discount for this cash refund if one was used on the original sale. NetSuite fills the Rate and Discount Total fields based on the discount you choose.

Leave this field blank if you do not want to apply a discount to this transaction.

For details on existing discount items, go to <_TABNAME=LIST_ITEM_> > <_TASKCATEGORY=LIST_ITEM_> > Items and select Discount in the type field in the footer.

To create new discount items, go to <_TABNAME=EDIT_ITEM_> > <_TASKCATEGORY=EDIT_ITEM_> > Items > New and click Discount. */
  discountitem?: string;
  /** NetSuite enters the rate for the discount item you selected. You can change the discount rate for this cash refund.

Enter the discount as a dollar amount like 10.00, or as a percentage like 10%. */
  discountrate?: string;
  /** NetSuite enters the amount discounted on this cash refund.

If this discount item is taxable, the discount is applied before taxes. If it is not taxable, the discount is applied after taxes. */
  discounttotal?: number;
  /**  */
  email?: string;
  /** Select the customer for this refund. If you are using jobs, select the appropriate job rather than the master customer account.

To create a new customer record, select New. For details on existing customers and projects, go to <_TABNAME=LIST_CUSTJOB_> > <_TASKCATEGORY=LIST_CUSTJOB_> > Customers. */
  entity: string;
  /**  */
  entitynexus?: string;
  /**  */
  entitytaxregnum?: string;
  /** Estimated Gross Profit is a read-only field that equals the revenue amount minus the Est. Cost. At the transaction level, it equals the gross profit of all lines, factoring transaction-level discounts and markups. */
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
  inputpnrefnum?: string;
  /**  */
  isbasecurrency?: boolean;
  /**  */
  ispurchasecard?: string;
  /** Place a check mark in this box if the original order was taxable. */
  istaxable?: boolean;
  /**  */
  lastmodifieddate?: Date;
  /** Select the lead source this transaction is associated with.

If you use the Marketing Automation feature, your list of lead sources is your list of campaigns.

If you do not use Marketing Automation, you can create new lead sources at <_TABNAME=LIST_CRMOTHERLIST_> > <_TASKCATEGORY=LIST_CRMOTHERLIST_> > CRM Lists > New > Lead Source. */
  leadsource?: string;
  /** Choose the location you want to associate with this transaction.

To create a new location, select New.

For details on existing locations, go to <_TABNAME=LIST_LOCATION_> > <_TASKCATEGORY=LIST_LOCATION_> > Locations. */
  location: string;
  /** If you wish, enter a memo to describe this cash refund. It will appear on reports such as the 2-line Undeposited Funds register. */
  memo?: string;
  /** Edit the message you selected in the Select Message field, or enter a new message here.

If you choose to print, email or fax this transaction to the customer, this message shows on the transaction. */
  message?: string;
  /**  */
  muccpromocodeinstance?: string;
  /** This field shows the nexus of the transaction. NetSuite automatically populates this field based on the nexus lookup logic. 

You can override the transaction nexus and tax registration number that NetSuite automatically selects by checking the Nexus Override box. When you select a different nexus in the dropdown list, the corresponding tax registration number is automatically selected in the Subsidiary Tax Reg. Number field. */
  nexus?: string;
  /** If required, enter the customer's original check number. */
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
  /** Enter the customer's original payment method. */
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
  /** Select the period you want to post this refund to.

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
  /** Place a check mark in the box after Create Check if you wish to refund money by check.

Clear this box if you want to issue a cash or credit card refund. */
  refundcheck?: boolean;
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

If this return is created from a sales transaction, the sales effective date from the sale shown in the Created From field is set by default for this refund. */
  saleseffectivedate?: Date;
  /**  */
  salesgroup?: string;
  /** NetSuite inserts the sales representative associated with this company on the customer record at <_TABNAME=LIST_CUSTJOB_> > <_TASKCATEGORY=LIST_CUSTJOB_> > Customers.

If a different sales rep is assigned to this refund, select that sales rep here.

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
  softdescriptor?: string;
  /**  */
  source?: string;
  /**  */
  subsidiary?: string;
  /** This field shows the tax registration number of the transaction nexus. NetSuite automatically populates this field based on the nexus lookup logic. 

You can override the transaction nexus and tax registration number that NetSuite automatically selects by checking the Nexus Override box. When you select a different tax registration number in the dropdown list, the corresponding nexus is automatically selected in the Nexus field. */
  subsidiarytaxregnum?: string;
  /** This field shows the subtotal of the items on this cash refund.

This is the total before discounts, shipping costs, handling costs or taxes are added to the refund. */
  subtotal?: number;
  /** Check this box if you want to update the sales team on the customer's record with changes you make here. */
  syncpartnerteams?: boolean;
  /** Check this box if you want to update the sales team on the customer's record with changes you make here. */
  syncsalesteams?: boolean;
  /** Check this box to override the tax information on the Tax Details subtab of the transaction. Only roles with at least the Edit level of the Tax Details Tab permission can override the tax details. */
  taxdetailsoverride?: boolean;
  /** A tax item is a tax that you collect at one certain rate and pay to one tax agency for this sale. NetSuite inserts the tax item for this customer from the record at Lists > Customers. To change it just for this refund, select another tax item.

To add additional choices to this list, go to Lists > New Item > Sales Tax Item. */
  taxitem?: string;
  /** NetSuite inserts the percentage rate of the tax item from its record at Lists > Items. You can change it here for just this transaction if you wish. */
  taxrate?: number;
  /** Check this box to override the values in the Nexus and Subsidiary Tax Reg. Number fields. Only roles with at least the Edit level of the Tax Details Tab permission can override the values that NetSuite automatically selects in these fields. */
  taxregoverride?: boolean;
  /** NetSuite multiplies the tax rate by the taxable total of line items and enters it here. */
  taxtotal?: number;
  /** Check this box if you want to e-mail this cash refund form. Then, enter the e-mail address in the space to the right of the check box.

You can enter multiple e-mail addresses by separating them with semicolons. It is important to separate the addresses with only semicolons, and do not include any spaces. */
  tobeemailed?: boolean;
  /** Check this box if you want to fax this cash sale refund.

Enter the fax number in the space to the right of the check box if it doesn't already appear.

To fax NetSuite forms, an administrator must first set up fax service at <_TABNAME=ADMI_PRINTING_> > <_TASKCATEGORY=ADMI_PRINTING_> > Printing, Fax and E-mail Preferences. */
  tobefaxed?: boolean;
  /** Check this box if you wish to save this in a queue of cash refund forms to print. Otherwise, you can click Print below to submit and print this form at once. */
  tobeprinted?: boolean;
  /** Place a check mark in the box after Print Check if you are creating a check and if you wish to print that check. */
  toprint2?: boolean;
  /** NetSuite computes the total of line items and tax, and then enters it here. */
  total?: number;
  /** The estimated cost of the specific number of items. This is calculated as:

    estimated rate x quantity = estimated cost */
  totalcostestimate?: number;
  /** NetSuite inserts today's date for the posting date of this cash refund. You can type or pick another date.

What you enter here determines the date range in which this transaction appears in the A/R and A/P registers.

You can select or enter custom date ranges on registers. */
  trandate: Date;
  /** NetSuite increases the largest refund number by one. If you wish, you can type another number. The next refund number will revert to the standard pattern.

You can enter a maximum of 45 characters in this field. */
  tranid?: string;
  /** Check this box to include all items added to this transaction as a VSOE bundle. */
  tranisvsoebundle?: boolean;
  /** Enter the date when this card first became valid. Use the format MM/YYYY. */
  validfrom?: string;
  /** The VSOE allocation amount can be calculated automatically by checking the Auto Calculate VSOE Allocation box. Allocation is the process to determine the VSOE price for items.
 
The total VSOE amount allocated is the revenue amount to be recognized for the bundle. */
  vsoeautocalc?: boolean;
}





/** 
 * Cash Refund Sublists Definition.
 * Record's Internal Id: cashrefund. 
 * Supports Custom Fields: true 
 */
export interface cashrefundSublists {
  
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
    /** taxamount - Tax Amount  */
    taxamount: number;
    /** taxcode - Tax Code  */
    taxcode?: string;
    /** taxdetailsreference - Tax Details Reference  */
    taxdetailsreference: string;
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





