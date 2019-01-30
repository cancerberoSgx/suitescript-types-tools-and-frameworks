// This file is auto generated, do not edit it. 




/** 
 * Estimate Fields Definition.
 * Record's Internal Id: estimate. 
 * Supports Custom Fields: true 
 */
export interface estimateFields {
/** The handling cost automatically calculates depending on the shipping method you select in the Ship Via field.

To change the cost of handling, go to Lists > Shipping Items and select the shipping method with the handling cost you want to change. */
  althandlingcost?: number;
  /** The alternate sales amount total is shown here. */
  altsalestotal?: number;
  /** The shipping cost automatically calculates depending on the shipping method you select in the Ship Via field above.

To change the cost of a shipping method, go to <_TABNAME=EDIT_SHIPITEM_> > <_TASKCATEGORY=EDIT_SHIPITEM_> > Shipping Items and select the shipping method you want to change.

If you use UPS Real-Time rates, shipments over 150lbs are broken up into shipments less than or equal to 150lbs for charging. */
  altshippingcost?: number;
  /**  */
  balance?: number;
  /**  */
  billaddress?: string;
  /** Select the appropriate billing address for this transaction. Select New to enter a new billing address. */
  billaddresslist?: string;
  /**  */
  billingaddress?: string;
  /** Choose the billing schedule you want to associate with this transaction.

When you select a billing schedule, all items on the order are billed according to the billing schedule.

Click New to enter a new billing schedule.

When you create a new billing schedule on-the-fly, it can be identified as Public or Private. Private billing schedules show only in the transaction it is created from. If you create a private billing schedule from an estimate, that schedule is attached to items on the resulting sales order.

Go to <_TABNAME=EDIT_BILLINGSCHEDULE_> > <_TASKCATEGORY=EDIT_BILLINGSCHEDULE_> > Billing Schedules for details about existing billing schedules. */
  billingschedule?: string;
  /**  */
  billisresidential?: string;
  /**  */
  canhavestackable?: boolean;
  /** If you wish, select the class that applies to this estimate. Click New to set up a new class.

Go to <_TABNAME=LIST_CLASS_> > <_TASKCATEGORY=LIST_CLASS_> > Classes for details about existing classes. */
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
  /** Select the customized estimate form to use. */
  customform: string;
  /** If you like, select a department.

Click New to enter a new department.

Go to <_TABNAME=LIST_DEPARTMENT_> > <_TASKCATEGORY=LIST_DEPARTMENT_> > Departments for details about existing departments. */
  department?: string;
  /** You can select a discount for this estimate. NetSuite fills the Rate and Discount Total fields based on the discount you choose.

Leave this field blank if you do not want to apply a discount to this transaction.

To create new discount items, go to <_TABNAME=EDIT_ITEM_> > <_TASKCATEGORY=EDIT_ITEM_> > Items > New. On the New Item page, click Discount. */
  discountitem?: string;
  /** NetSuite enters the rate for the discount item you selected. You can change the discount rate for this cash refund.

Enter the discount as a dollar amount like 10.00, or as a percentage like 10%. */
  discountrate?: string;
  /** NetSuite enters the amount discounted on this estimate.

If this discount item is taxable, the discount is applied before taxes. If it is not taxable, the discount is applied after taxes. */
  discounttotal?: number;
  /** Type or pick a date this estimate expires. */
  duedate?: Date;
  /**  */
  email?: string;
  /** Enter or pick the end date for this estimate. */
  enddate?: Date;
  /** Select the customer for this estimate. If you are using jobs, select the appropriate job rather than the master customer account.

Click New to set up a new customer. */
  entity: string;
  /**  */
  entitynexus?: string;
  /** Accept or change the status of this estimate. What appears in the Probability field is based on the status selected.

If this estimate is for a prospect, the prospect's record is updated with what is entered here.

To change the default status of estimates, go to <_TABNAME=ADMI_SFASETUP_> > <_TASKCATEGORY=ADMI_SFASETUP_> > Sales Preferences and select a new status in the Prospect Status field. */
  entitystatus: string;
  /**  */
  entitytaxregnum?: string;
  /** Estimated Gross Profit: Read-only field that equals the revenue amount minus the Est. Cost. At the transaction level, it equals the gross profit of all lines, factoring transaction-level discounts and markups. */
  estgrossprofit?: number;
  /** Estimated Gross Profit Margin, as a percentage: Read-only field that equals the Est. Gross Profit divided by revenue, expressed as a percentage. At the transaction level, it equals the gross profit percent of all lines, factoring transaction-level discounts and markups. */
  estgrossprofitpercent?: number;
  /** The currency's exchange rate is shown in this field.

You can edit the exchange rate for this transaction only, or you can update the currency record with the exchange rate you enter here. */
  exchangerate: number;
  /** Enter the date you expect this estimate to close. */
  expectedclosedate: Date;
  /**  */
  externalid?: string;
  /** Enter the location where the customers technically acquire ownership. For example, if your customers own goods as soon as they ship and pay the shipping costs from your location to theirs, you might enter Our warehouse. */
  fob?: string;
  /** Choose which forecast category this estimate belongs in.

If you do not want this estimate to appear in forecasts, select Omitted. */
  forecasttype?: string;
  /** The handling cost automatically calculates depending on the shipping method you select in the Ship Via field.

To change the cost of handling, go to <_TABNAME=EDIT_SHIPITEM_> > <_TASKCATEGORY=EDIT_SHIPITEM_> > Shipping Items and select the shipping method with the handling cost you want to change. */
  handlingcost?: number;
  /** The tax rate for this handling shipping item is shown here. */
  handlingtax1rate?: string;
  /** Select the tax code for this handling shipping item. */
  handlingtaxcode?: string;
  /**  */
  includeinforecasthigh?: string;
  /**  */
  includeinforecastlow?: string;
  /**  */
  isbasecurrency?: boolean;
  /**  */
  ismultishipto?: boolean;
  /** Place a check mark in this box if the order you are quoting will be taxable. */
  istaxable?: boolean;
  /** Select the project this estimate is associated with. */
  job?: string;
  /**  */
  lastmodifieddate?: Date;
  /** The lead source  for this transaction is shown here. You can choose a different lead source for this transaction.

The default lead source is determined by the Default Lead Source on Sales Transactions preference at <_TABNAME=TRAN_CAMPAIGNSETUP_> > <_TASKCATEGORY=TRAN_CAMPAIGNSETUP_> > Marketing Preferences */
  leadsource?: string;
  /**  */
  linkedtrackingnumbers?: string;
  /** Choose the location you want to associate with this transaction.

Select New to enter a new location record.

Go to <_TABNAME=LIST_LOCATION_> > <_TASKCATEGORY=LIST_LOCATION_> > Locations for details about existing location records. */
  location?: string;
  /** If you wish, enter a memo to describe this estimate. It will appear on reports such as the 2-line Estimates register that your customers can see if you give them permission to log in and view their transaction history. */
  memo?: string;
  /** The text of the customer message you select in the Select Message field appears here.

You can edit the message or enter a new customer message for only this transaction. */
  message?: string;
  /** Select a customer message to appear on this form. For example, you may add "Thank you for your business!" Choose from the list of existing customer messages stored at <_TABNAME=LIST_ACCOUNTINGOTHERLIST_> > <_TASKCATEGORY=LIST_ACCOUNTINGOTHERLIST_> > Accounting Lists.

The text of the selected message appears in the Customer Message field. In this field, you can optionally edit the message or enter a new customer message for only this transaction.

To add messages to appear in the Select Message field, go to <_TABNAME=LIST_ACCOUNTINGOTHERLIST_> > <_TASKCATEGORY=LIST_ACCOUNTINGOTHERLIST_> > Accounting Lists > New, and click Customer Message. */
  messagesel?: string;
  /**  */
  muccpromocodeinstance?: string;
  /** This field shows the nexus of the transaction. NetSuite automatically populates this field based on the nexus lookup logic. 

You can override the transaction nexus and tax registration number that NetSuite automatically selects by checking the Nexus Override box. When you select a different nexus in the dropdown list, the corresponding tax registration number is automatically selected in the Subsidiary Tax Reg. Number field. */
  nexus?: string;
  /**  */
  onetime?: number;
  /** If you are entering this transaction for an opportunity, select the opportunity.

You can create opportunity records at <_TABNAME=EDIT_TRAN_OPPRTNTY_> > <_TASKCATEGORY=EDIT_TRAN_OPPRTNTY_> > Create Opportunities. */
  opportunity?: string;
  /** If a purchase order number applies to this estimate, enter it here. */
  otherrefnum?: string;
  /** The partner associated with this customer appears in this field.

You can choose a different partner to associate with this transaction. */
  partner?: string;
  /** Accept or change the probability that this estimate will be converted to a sale. The Probability field shows the probability of the status selected.

If this estimate is for a prospect, the prospect's record is updated with what is entered here.

To change the default probability of a status, go to <_TABNAME=EDIT_CUSTOMERSTATUS_> > <_TASKCATEGORY=EDIT_CUSTOMERSTATUS_> > Customer Statuses, and click the status you want to change. */
  probability: number;
  /** If you want to apply a multiple-use coupon code to this transaction, select the promotion here.

If you want to apply a single-use coupon code, enter the code in the Coupon Code field. The promotion for that coupon code is shown here.

Customers associated with a partner can only use coupon codes from that partner's promotions. If you select a promotion associated with a partner, this transaction is attributed to that partner for reporting purposes.

You can choose to have a promotion selected by default at <_TABNAME=TRAN_CAMPAIGNSETUP_> > <_TASKCATEGORY=TRAN_CAMPAIGNSETUP_> > Marketing Preferences in the Default Promotion Code on Sales Transactions field.

Create new promotion codes at <_TABNAME=LIST_REFERRALCODE_> > <_TASKCATEGORY=LIST_REFERRALCODE_> > Promotions > New. */
  promocode?: string;
  /**  */
  promocodepluginimpl?: string;
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
  /** Select a sales team to associate with this transaction.

To create a sales team, go to <_TABNAME=EDIT_CRMGROUP_> > <_TASKCATEGORY=EDIT_CRMGROUP_> > New > Select Sales Team Members. */
  salesgroup?: string;
  /** NetSuite inserts the sales representative associated with this company on the customer record at Lists > Customers.

If a different sales rep is assigned to this transaction, select that sales rep here.

To add additional sales reps to this list, go to Lists > New Employee. */
  salesrep?: string;
  /**  */
  shipaddress?: string;
  /** Select the appropriate shipping address for this transaction. Select New to enter a new shipping address. */
  shipaddresslist?: string;
  /** Enter, pick or accept the date you expect to ship items ordered. */
  shipdate?: Date;
  /**  */
  shipisresidential?: string;
  /** Select a shipping method for this estimate.

If you automatically charge for shipping, the shipping amount is entered in the shipping costs field. To automatically charge for shipping, go to <_TABNAME=ADMI_SHIPPING_> > <_TASKCATEGORY=ADMI_SHIPPING_> > Shipping, and check the Charge for Shipping box. Click Submit. You must also set up the charge details of your shipping items.

To add or edit shipping items, go to Lists > Shipping Item. */
  shipmethod?: string;
  /**  */
  shipoverride?: string;
  /**  */
  shippingaddress?: string;
  /** The shipping cost automatically calculates depending on the shipping method you select in the Ship Via field.

If this field reads ReCalc, click the Recalculate Shipping button to receive a shipping cost.

If you use UPS Real-Time rates and a package is over 150lbs, the package is charged as multiple packages equal to or less than 150lbs. */
  shippingcost?: number;
  /**  */
  shippingcostoverridden?: string;
  /** The tax rate for this shipping item tax code is show here. */
  shippingtax1rate?: string;
  /** Select the tax code to apply to this shipping item. */
  shippingtaxcode?: string;
  /**  */
  source?: string;
  /** If there is an expected closing date for this estimate, accept today's date or enter a new date here. */
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

This is the total before any discounts, shipping cost, handling cost or tax is added to the order. */
  subtotal?: number;
  /** Check this box if you want to update the partner team on the customer record with changes you make here. */
  syncpartnerteams?: boolean;
  /** Check this box if you want to update the sales team on the customer's record with changes you make here. */
  syncsalesteams?: boolean;
  /** Check this box to override the tax information on the Tax Details subtab of the transaction. Only roles with at least the Edit level of the Tax Details Tab permission can override the tax details. */
  taxdetailsoverride?: boolean;
  /** Check this box to override the values in the Nexus and Subsidiary Tax Reg. Number fields. Only roles with at least the Edit level of the Tax Details Tab permission can override the values that NetSuite automatically selects in these fields. */
  taxregoverride?: boolean;
  /** NetSuite multiplies the tax rate by the taxable total of line items and enters it here. */
  taxtotal?: number;
  /** Select discount terms.

If this estimate is later turned into a sale, the terms set here autofill on the sales form. */
  terms?: string;
  /** Enter a title for this estimate. The estimate title text appears on lists, shows in search and reporting results, and shows on the Estimates subtab of records it is associated with.
 
When an estimate is converted from an opportunity, the title from the opportunity defaults into the title field on the estimate.   If there is already an estimate against the opportunity, then the second estimate has a number following the title.
 
For example, if the first estimate title is &#x201c;Project Estimate&#x201d;, then the second estimate title is &#x201c;Project Estimate1&#x201d;. For each subsequent estimate created against that opportunity, the number in the title increases by 1 to help distinguish between multiple estimates associated to a single opportunity.
 
The estimate title field is also available for customization, direct list editing, and mass updates. */
  title?: string;
  /** Check this box if you want to email this estimate. Then enter the email address in the space to the right of the check box.

You can enter multiple email addresses by separating them with semicolons. It is important to separate the addresses with only semicolons, and do not include any spaces. */
  tobeemailed?: boolean;
  /** Check this box if you want to fax this estimate.

Enter the fax number in the space to the right of the check box if it doesn't already appear.

To fax NetSuite forms, an administrator must first set up fax service at <_TABNAME=ADMI_PRINTING_> > <_TASKCATEGORY=ADMI_PRINTING_> > Printing, Fax and Email Preferences. */
  tobefaxed?: boolean;
  /** Check this box if you wish to save this in a queue of estimates to print.

Otherwise, you can click Print below to submit and print this estimate at once. */
  tobeprinted?: boolean;
  /** NetSuite computes the total of line items and tax and then enters it here. */
  total?: number;
  /** Estimated Cost: Estimated cost of the specific number of items; estimated rate x quantity = estimated cost. */
  totalcostestimate?: number;
  /** Enter the shipment tracking number from the shipping company.

If a tracking number is entered in the exact format used by UPS or FedEx and the transaction is saved, the tracking number will show on the transaction as a link to the UPS or FedEx website. You can click the link to check the status of the shipment. */
  trackingnumbers?: string;
  /** NetSuite inserts today's date for the posting date of this estimate. You can type or pick another date.

What you enter here determines the date range in which this transaction appears on the estimate registers.

You can select or enter custom date ranges on registers. */
  trandate: Date;
  /** NetSuite increases the largest estimate number by one. If you wish, you can type another number. The next estimate number will revert to the standard pattern. */
  tranid?: string;
  /**  */
  unbilledorders?: number;
  /** Check the Available in Customer Center box to make this estimate available to customers in the Customer Center.
 
Clear this box to leave this estimate off the list of estimates available to customers in the Customer Center.

This field is checked by default. */
  visibletocustomer?: boolean;
}





/** 
 * Estimate Sublists Definition.
 * Record's Internal Id: estimate. 
 * Supports Custom Fields: true 
 */
export interface estimateSublists {
  
  /** accountingbookdetail: Accounting Books */
  accountingbookdetail: {
    /** accountingbook - Secondary Book  */
    accountingbook: string;
    /** exchangerate - Exchange Rate  */
    exchangerate?: number;
  }

  /** item: Items */
  item: {
    /** altsalesamt - Alt. Sales  */
    altsalesamt: number;
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
    /** expectedshipdate - Expected Ship Date  */
    expectedshipdate: Date;
    /** fromjob - Project Item  */
    fromjob: boolean;
    /** id -   */
    id: string;
    /** inventorydetail - Inventory Detail  */
    inventorydetail: string;
    /** isestimate - Billable Estimate  */
    isestimate: boolean;
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
    /** job - Job  */
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
    /** quantityavailable -   */
    quantityavailable: number;
    /** rate - Rate  */
    rate: string;
    /** rateschedule -   */
    rateschedule: string;
    /** shipaddress - Ship To  */
    shipaddress: string;
    /** shipcarrier - Shipping Carrier  */
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





