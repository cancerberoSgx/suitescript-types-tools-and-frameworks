// This file is auto generated, do not edit it. 




/** 
 * Return Authorization Fields Definition.
 * Record's Internal Id: returnauthorization. 
 * Supports Custom Fields: true 
 */
export interface returnauthorizationFields {
/** The alternate sales amount total is shown here. */
  altsalestotal?: number;
  /**  */
  billaddress?: string;
  /** Select the appropriate billing address for this transaction. Select New to enter a new billing address. */
  billaddresslist?: string;
  /**  */
  billingaddress?: string;
  /**  */
  billisresidential?: string;
  /** If you wish, select the class that applies to this return. Click New to set up a new class.

Go to <_TABNAME=LIST_CLASS_> > <_TASKCATEGORY=LIST_CLASS_> > Classes for details about existing classes. */
  class?: string;
  /**  */
  couponcode?: string;
  /**  */
  createddate?: Date;
  /** This field shows the transaction type and number of the transaction this authorization was created from.
Click the transaction number to open the transaction. */
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
  /** Select the return authorization form you wish to use from the dropdown list.

Click New to customize a new form. */
  customform: string;
  /** Deferred Revenue:

amount of revenue deferred on this transaction */
  deferredrevenue?: number;
  /** If you like, select a department.

Click New to enter a new department.

Go to Go to <_TABNAME=LIST_DEPARTMENT_> > <_TASKCATEGORY=LIST_DEPARTMENT_> > Departments for details about existing departments. */
  department?: string;
  /** You can select a discount for this return authorization if one was applied to the original sale. NetSuite fills the Rate and Discount Total fields based on the discount you choose.

Leave this field blank if you do not want to apply a discount to this transaction. */
  discountitem?: string;
  /** NetSuite enters the rate for the discount item you selected. You can change the discount rate for this cash refund.

Enter the discount as a dollar amount like 10.00, or as a percentage like 10%. */
  discountrate?: string;
  /** NetSuite enters the amount discounted on this return authorization.

If this discount item is taxable, the discount is applied before taxes. If it is not taxable, the discount is applied after taxes. */
  discounttotal?: number;
  /**  */
  draccount?: string;
  /**  */
  email?: string;
  /** Select the customer. If you are using jobs, select the appropriate job rather than the master customer account.

Go to <_TABNAME=LIST_CUSTJOB_> > <_TASKCATEGORY=LIST_CUSTJOB_> > Customers for details about existing customers and jobs. */
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
  /**  */
  fxaccount?: string;
  /**  */
  inputpnrefnum?: string;
  /** Intercompany Transaction Status can be:

    * Linked - intercompany order has been paired with an intercompany order in another subsidiary.
    * Pending - iintercompany order has not been paired with a corresponding order in another subsidiary.
    *  Rejected - intercompany purchase order or vendor return authorization cannot be paired with a sales order or return authorization because it contains incorrect information, such as subsidiary, currency, amount, or other detail. */
  intercostatus?: string;
  /** Identifies the intercompany order in another subsidiary that this order is paired with.

Order pairs are Sales Order/Purchase Order and Vendor Return Authorization/Return Authorization. */
  intercotransaction?: string;
  /**  */
  isbasecurrency?: boolean;
  /** Place a check mark in this box if this return is taxable. */
  istaxable?: boolean;
  /**  */
  lastmodifieddate?: Date;
  /** Select the lead source this transaction is associated with.

If you use the Marketing Automation feature, your list of lead sources is your list of campaigns.

If you do not use Marketing Automation, you can create new lead sources at <_TABNAME=LIST_CRMOTHERLIST_> > <_TASKCATEGORY=LIST_CRMOTHERLIST_> > CRM Lists > New. */
  leadsource?: string;
  /** Choose the location you want to associate with this transaction. Click New to enter a new location.

Go to <_TABNAME=LIST_LOCATION_> > <_TASKCATEGORY=LIST_LOCATION_> > Locations for information on existing locations. */
  location?: string;
  /** If you wish, enter a memo to describe this return authorization. What you enter in this field will appear on reports. */
  memo?: string;
  /** Select a customer message that will appear on the Return Authorization form.

To add additional choices to this list, go to <_TABNAME=LIST_ACCOUNTINGOTHERLIST_> > <_TASKCATEGORY=LIST_ACCOUNTINGOTHERLIST_> > Accounting Lists > New > Customer Message. */
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
  /** If your company uses the approval process for return authorization, Pending Approval is your default. If your company does not use the approval process, Pending Receipt is your default.

The default status for your return authorization was set up by an administrator at <_TABNAME=ADMI_ACCTSETUP_> > <_TASKCATEGORY=ADMI_ACCTSETUP_> > Accounting Preferences. You can change the status for each return authorization here if needed. */
  orderstatus: string;
  /** For your customers' convenience, you can enter their purchase order number here. */
  otherrefnum?: string;
  /** The partner associated with this customer appears in the Partner field.
 
You can change the partner for this transaction. */
  partner?: string;
  /** Select a promotion code to apply to this transaction.

Customers associated with a partner can only use that partner's promotion codes.
If you select a promotion code associated with a partner, this transaction is attributed to that partner for reporting purposes.

You can choose to have a promotion code entered by default at <_TABNAME=TRAN_CAMPAIGNSETUP_> > <_TASKCATEGORY=TRAN_CAMPAIGNSETUP_> > Set Up Marketing in the Default Promotion Code on Sales Transactions field.

Create new promotion codes at <_TABNAME=EDIT_REFERRALCODE_> > <_TASKCATEGORY=EDIT_REFERRALCODE_> > Promotion Codes > New. */
  promocode?: string;
  /**  */
  promocodepluginimpl?: string;
  /** Recognized Revenue:

cumulative amount of revenue recognized for this transaction */
  recognizedrevenue?: number;
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

The sales effective date determines which commission plan and historical sales team this transaction applies to.

If this return is created from a sales order, the sales effective date from the order shown in the Created From field is set by default for this return authorization. */
  saleseffectivedate?: Date;
  /** Select a sales team to associate with this transaction.

To create a sales team, go to <_TABNAME=EDIT_CRMGROUP_> > <_TASKCATEGORY=EDIT_CRMGROUP_> > New > Select Sales Team Members. */
  salesgroup?: string;
  /** NetSuite inserts the sales representative associated with this company on the customer record at Lists > Customers.

If a different sales rep is assigned to this cash sale, select that sales rep here.

To add additional sales reps to this list, go to Lists > New Employee. */
  salesrep?: string;
  /** The default shipping address autofills this field from the customer's record at Lists > Customers.

To enter a different address:

    * Select another address in the Ship To Select field.
    * Select New in the Ship To Select field to enter a new billing address. */
  shipaddress?: string;
  /** Select the appropriate shipping address for this transaction. Select New to enter a new shipping address. */
  shipaddresslist?: string;
  /**  */
  shipisresidential?: string;
  /**  */
  shipoverride?: string;
  /**  */
  shippingaddress?: string;
  /**  */
  source?: string;
  /**  */
  status?: string;
  /**  */
  statusRef?: string;
  /** This field shows the subsidiary associated with this transaction. */
  subsidiary?: string;
  /** This field shows the tax registration number of the transaction nexus. NetSuite automatically populates this field based on the nexus lookup logic. 

You can override the transaction nexus and tax registration number that NetSuite automatically selects by checking the Nexus Override box. When you select a different tax registration number in the dropdown list, the corresponding nexus is automatically selected in the Nexus field. */
  subsidiarytaxregnum?: string;
  /** This field shows the total of the items on this return authorization.

This is the total before any discount, shipping cost, handling cost or tax is added to the order. */
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
  /** Check this box if you want to e-mail this return authorization. Then enter the e-mail address in the space to the right of the check box.

You can enter multiple e-mail addresses by separating them with a semicolon. It is important to separate the addresses with only a semicolon, and do not include any spaces. */
  tobeemailed?: boolean;
  /** Check this box if you want to fax this transaction.

Enter the fax number in the space to the right of the check box if it doesn't already appear.

To fax NetSuite forms, an administrator must first set up fax service at <_TABNAME=ADMI_PRINTING_> > <_TASKCATEGORY=ADMI_PRINTING_> > Printing, Fax and Email Preferences. */
  tobefaxed?: boolean;
  /** Check this box if you want to save this in a queue of return authorization you can later chose to print.

Otherwise, you can click Print below to submit and print this return authorization at once. */
  tobeprinted?: boolean;
  /** NetSuite computes the total of line items and tax and then enters it here. */
  total?: number;
  /** Estimated Cost: Estimated cost of the specific number of items; estimated rate x quantity = estimated cost. */
  totalcostestimate?: number;
  /** The current date autofills this field.

Enter or select another date if needed. */
  trandate: Date;
  /** NetSuite increases the largest return authorization number by one. If you wish, you can type another number. The next return number will revert to the standard pattern.

You can enter a maximum of 45 characters in this field. */
  tranid?: string;
  /** Check this box to include all items added to this transaction as a VSOE bundle. */
  tranisvsoebundle?: boolean;
  /** The VSOE allocation amount can be calculated automatically by checking the Auto Calculate VSOE Allocation box.
 
Allocation is the process to determine the VSOE price for items. The total VSOE amount allocated is the revenue amount to be recognized for the bundle. */
  vsoeautocalc?: boolean;
}





/** 
 * Return Authorization Sublists Definition.
 * Record's Internal Id: returnauthorization. 
 * Supports Custom Fields: true 
 */
export interface returnauthorizationSublists {
  
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
    /** isclosed - Closed  */
    isclosed: boolean;
    /** isdropshipment - Drop Shipment  */
    isdropshipment: boolean;
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
    /** quantitybilled - Refunded  */
    quantitybilled: number;
    /** quantityreceived - Returned  */
    quantityreceived: number;
    /** quantityrevcommitted - Rev. Commitment Reversed  */
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

  /** partners: T */
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





