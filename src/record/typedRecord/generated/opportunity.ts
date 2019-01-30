// This file is auto generated, do not edit it. 




/** 
 * Opportunity Fields Definition.
 * Record's Internal Id: opportunity. 
 * Supports Custom Fields: true 
 */
export interface opportunityFields {
/** Record the next step in the negotiation process. */
  actionitem?: string;
  /** Enter the range of alternate sales amounts this deal might be worth.

The low amount entered must be lower than or equal to the projected amount in the Alt. Sales Total field. This amount is the Worst Case projected total.

The high amount must be greater than or equal to the Alt. Sales Total amount. This amount is the Upside projected total. */
  altsalesrangehigh?: number;
  /** Enter the range of alternate sales amounts this deal might be worth.

The low amount entered must be lower than or equal to the projected amount in the Alt. Sales Total field. This amount is the Worst Case projected total.

The high amount must be greater than or equal to the Alt. Sales Total amount. This amount is the Upside projected total. */
  altsalesrangelow?: number;
  /**  */
  altsalestotal?: string;
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
  /** Choose the prospect or customer's reason for buying from your company. You can create additional options for this field at <_TABNAME=LIST_CRMOTHERLIST_> > <_TASKCATEGORY=LIST_CRMOTHERLIST_> > CRM Lists. */
  buyingreason?: string;
  /** Select the time frame for the prospect or customer to purchase. You can create additional options for this field at <_TABNAME=LIST_CRMOTHERLIST_> > <_TASKCATEGORY=LIST_CRMOTHERLIST_> > CRM Lists. */
  buyingtimeframe?: string;
  /** If this opportunity is associated with a class, select that class.

Select New to create a new class. */
  class?: string;
  /**  */
  consolidatebalance?: number;
  /**  */
  createddate?: Date;
  /** If you do not use the Multi-Currency Customers feature, the currency of the customer you are creating this transaction for is shown here.

If you use the Multi-Currency Customers feature, select the transaction currency you want to create this transaction in. This customer's primary currency is selected by default.

If you have already selected items on this transaction, selecting a new currency refreshes them to show the price in the new currency (except for items you entered custom prices for) and recalculates tax and gross profit. */
  currency: string;
  /** This company's currency shows in this field. */
  currencyname?: string;
  /**  */
  currencysymbol?: string;
  /** If you use a custom transaction form for opportunities, select the form.

To create a new custom form, select New. */
  customform: string;
  /** If this opportunity is associated with a department, select that department.

Select New to create a new department.

Go to <_TABNAME=LIST_DEPARTMENT_> > <_TASKCATEGORY=LIST_DEPARTMENT_> > Departments for information on existing departments. */
  department?: string;
  /**  */
  documentstatus?: string;
  /** Select the company you are creating the opportunity for.

Select New to create a new company record. */
  entity: string;
  /**  */
  entitynexus?: string;
  /** Select the status of this opportunity.

Once this opportunity has a transaction other than a sales order or estimate associated with it, the status becomes Closed Won.

If there are estimates or sales orders associated with the opportunity, the status of the opportunity is updated to match the transaction's status. */
  entitystatus: string;
  /**  */
  entitytaxregnum?: string;
  /** Estimated Gross Profit: Read-only field that equals the revenue amount minus the Est. Cost. At the transaction level, it equals the gross profit of all lines, factoring transaction-level discounts and markups. */
  estgrossprofit?: number;
  /** Estimated Gross Profit Margin, as a percentage: Read-only field that equals the Est. Gross Profit divided by revenue, expressed as a percentage. At the transaction level, it equals the gross profit percent of all lines, factoring transaction-level discounts and markups. */
  estgrossprofitpercent?: number;
  /** Enter the estimated budget the prospect or customer has for this opportunity. */
  estimatedbudget?: number;
  /** The current exchange rate for this currency shows in this field.

You can change this exchange rate for this transaction */
  exchangerate: number;
  /** Enter the date you think this opportunity will close. */
  expectedclosedate: Date;
  /**  */
  externalid?: string;
  /** Select the forecast category you want this opportunity to appear in.

If you do not want this opportunity to appear in the forecast, select Omitted. */
  forecasttype?: string;
  /**  */
  isbasecurrency?: boolean;
  /** Check this box if the budget for this opportunity has been approved by the prospect or customer. */
  isbudgetapproved?: boolean;
  /** Select the project associated with this opportunity. */
  job?: string;
  /**  */
  lastmodifieddate?: Date;
  /** Select a lead source for this company.

If you use marketing automation, you can choose from a list of marketing campaigns.

If you do not use marketing automation, you can create lead sources at <_TABNAME=LIST_CRMOTHERLIST_> > <_TASKCATEGORY=LIST_CRMOTHERLIST_> > CRM Lists > New. */
  leadsource?: string;
  /** Select the location associated with this opportunity.

Select New to create a new location record. */
  location?: string;
  /** Enter additional information about the opportunity. */
  memo?: string;
  /** This field shows the nexus of the transaction. NetSuite automatically populates this field based on the nexus lookup logic. 

You can override the transaction nexus and tax registration number that NetSuite automatically selects by checking the Nexus Override box. When you select a different nexus in the dropdown list, the corresponding tax registration number is automatically selected in the Subsidiary Tax Reg. Number field. */
  nexus?: string;
  /**  */
  onetime?: number;
  /** Select the partner that is associated with this opportunity.

Select New to create a new partner record. */
  partner?: string;
  /** Enter the probability that this opportunity will be won.

If there is an estimate associated with this opportunity, the probability from the estimate is applied to the opportunity. */
  probability: number;
  /** This field shows the projected alternate sales amount of the opportunity based on the items selected on the opportunity and the estimates associated with the opportunity. */
  projaltsalesamt?: number;
  /** This field shows the projected value of the opportunity based on the items selected on the opportunity and the estimates associated with the opportunity. */
  projectedtotal: number;
  /** Enter the range of amounts this deal might be worth.

The low amount entered must be lower than or equal to the projected amount in the Projected Total field. This amount is the Worst Case projected total.

The high amount must be greater than or equal to the Projected Total amount. This amount is the Upside projected total. */
  rangehigh?: number;
  /** Enter the range of amounts this deal might be worth.

The low amount entered must be lower than or equal to the projected amount in the Projected Total field. This amount is the Worst Case projected total.

The high amount must be greater than or equal to the Projected Total amount. This amount is the Upside projected total. */
  rangelow?: number;
  /**  */
  recurannually?: number;
  /**  */
  recurmonthly?: number;
  /**  */
  recurquarterly?: number;
  /**  */
  recurweekly?: number;
  /** Select a sales team to associate with this transaction.

To create a sales team, go to Setup > Sales Teams > New. */
  salesgroup?: string;
  /** Choose how close the prospect or customer is to purchasing. You can create additional options for this field at <_TABNAME=LIST_CRMOTHERLIST_> > <_TASKCATEGORY=LIST_CRMOTHERLIST_> > CRM Lists. */
  salesreadiness?: string;
  /** NetSuite inserts the sales representative associated with this company on the customer record at Lists > Customers.

If a different sales rep is assigned to this transaction, select that sales rep here.

To add additional sales reps to this list, go to Lists > New Employee. */
  salesrep?: string;
  /**  */
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
  /** This field displays the subsidiary associated with this transaction. */
  subsidiary?: string;
  /** This field shows the tax registration number of the transaction nexus. NetSuite automatically populates this field based on the nexus lookup logic. 

You can override the transaction nexus and tax registration number that NetSuite automatically selects by checking the Nexus Override box. When you select a different tax registration number in the dropdown list, the corresponding nexus is automatically selected in the Nexus field. */
  subsidiarytaxregnum?: string;
  /** Check this box if you want to update the partner team on the customer record with the changes you make here. */
  syncpartnerteams?: boolean;
  /** Check this box if you want to update the sales team on the customer record with the changes you make here. */
  syncsalesteams?: boolean;
  /** Check this box to override the tax information on the Tax Details subtab of the transaction. Only roles with at least the Edit level of the Tax Details Tab permission can override the tax details. */
  taxdetailsoverride?: boolean;
  /** Check this box to override the values in the Nexus and Subsidiary Tax Reg. Number fields. Only roles with at least the Edit level of the Tax Details Tab permission can override the values that NetSuite automatically selects in these fields. */
  taxregoverride?: boolean;
  /** Enter a title for this opportunity.

This title appears on lists, reports and on the Opportunities subtab of the record it is associated with. */
  title?: string;
  /**  */
  total?: string;
  /** Estimated Cost: Estimated cost of the specific number of items; estimated rate x quantity = estimated cost. */
  totalcostestimate?: number;
  /** NetSuite enters the date the opportunity record is created.

You can change this date. */
  trandate: Date;
  /** NetSuite assigns a number to identify this transaction.

You can change this number. */
  tranid?: string;
  /**  */
  unbilledorders?: number;
  /** If there are no transactions included in this opportunity or if there is a single transaction, the weighted total for this transaction is the projected total multiplied by the probability of close.

If there are multiple transactions associated with this opportunity, the weighted total of the opportunity is the sum of the weighted totals for each transaction. Only estimates marked Include in forecast are included in the weighted total. */
  weightedtotal?: number;
  /** Select the reason you won or lost the deal.

You can create new win/loss reasons at <_TABNAME=LIST_CRMOTHERLIST_> > <_TASKCATEGORY=LIST_CRMOTHERLIST_> > CRM Lists > New. */
  winlossreason?: string;
}





/** 
 * Opportunity Sublists Definition.
 * Record's Internal Id: opportunity. 
 * Supports Custom Fields: true 
 */
export interface opportunitySublists {
  
  /** accountingbookdetail: Accounting Books */
  accountingbookdetail: {
    /** accountingbook - Secondary Book  */
    accountingbook: string;
    /** exchangerate - Exchange Rate  */
    exchangerate?: number;
  }

  /** competitors: Competitors */
  competitors: {
    /** competitor - Name  */
    competitor?: string;
    /** id -   */
    id: string;
    /** notes - Notes  */
    notes: string;
    /** url - URL  */
    url: string;
    /** winner - Winner  */
    winner: boolean;
  }

  /** item: Items */
  item: {
    /** altsalesamt - Alt. Sales Amount  */
    altsalesamt: number;
    /** amount - Amount  */
    amount: number;
    /** billingschedule -   */
    billingschedule: string;
    /** billvariancestatus -   */
    billvariancestatus: string;
    /** catchupperiod -   */
    catchupperiod: string;
    /** class - Class  */
    class: string;
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
    /** department - Department  */
    department: string;
    /** description - Description  */
    description: string;
    /** expectedshipdate - Expected Ship Date  */
    expectedshipdate: Date;
    /** fromjob - Project Item  */
    fromjob: boolean;
    /** grossamt - Gross Amt  */
    grossamt: number;
    /** id -   */
    id: string;
    /** isestimate - Billable Estimate  */
    isestimate: boolean;
    /** istaxable -   */
    istaxable: string;
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
    /** location - Location  */
    location: string;
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
    /** subscription - Subscription  */
    subscription: string;
    /** tax1amt - Tax Amt  */
    tax1amt: number;
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





