// This file is auto generated, do not edit it. 




/** 
 * Revenue Recognition Template Fields Definition.
 * Record's Internal Id: revrectemplate. 
 * Supports Custom Fields: true 
 */
export interface revrectemplateFields {
/** This field sets the number of periods over which the schedule will amortize. For example, if you enter 12, then the schedule runs for 12 periods starting from the Rev Rec Start Date. 
 
If both the Rev Rec Start Date and Rev Rec End Date are entered, then those dates override the recognition period set on the template. 
 
Note: If either the Rev Rec Start Date or Rev Rec End Date field is empty, NetSuite populates either date based on the recognition period. */
  amortizationperiod?: number;
  /** Select the kind of template you are creating:

    * Standard &#x2013; Select this type if you are able to enter a Method and Term Source for the template.
    * Variable &#x2013; Select this type to use this template for percent-complete recognition.

Variable templates are selected on item records and amortization amounts are determined by job completion amounts.

Note: If you select Variable, you cannot set the following template fields: Recognition Method, Recognition Term Source, Recognition Period, Period Offset and Start Offset. */
  amortizationtype?: string;
  /**  */
  externalid?: string;
  /** Enter a percentage or amount to be recognized in the first recognition period. The remaining amount is then recognized according to the set amortization method. */
  initialamount?: string;
  /** Check this box if you no longer want to use this template or schedule. */
  isinactive?: boolean;
  /**  */
  ispublic?: boolean;
  /**  */
  job?: string;
  /** Enter a name for this template or schedule. */
  name: string;
  /** Specify the number of periods to postpone the start of recognition for the entire schedule.
 
For example, if your amortization terms are based on 30-day periods, enter a 2 in this field to wait 60 days before you begin recognizing revenue.
 
This can be useful for services you sell that have a probationary or trial period.
 
Setting a period offset does not change the number of periods in the schedule. */
  periodoffset: number;
  /** The Recognition Term Source controls how the recognition period is determined.

Select from the following:

    * Rev Rec Dates Specified on Transaction &#x2013; sources the invoice or cash sale
      The revenue recognition period is determined by Rev Rec start and end dates entered on the invoice or cash sale.
    * Rev Rec Dates Specified on Sales Order &#x2013; sources the sales order
      The revenue recognition period is determined by Rev Rec start and end dates entered on the sales order.
      Note: This choice appears only when you use the Sales Order feature.
    * Billing Schedule, Transaction Date on Sales Order &#x2013; sources the transaction date of the sales order
      This term source creates a schedule to recognize revenue based on the sales order transaction date. NetSuite dates subsequent invoices based on the assigned billing schedule.
    * Billing Schedule, Rev Rec Date on Sales Order - sources the Rev Rec dates from the sales order. This term source creates a schedule to recognize revenue based on the sales order revenue recognition dates, not the transaction dates. */
  recogintervalsrc?: string;
  /** Set the terms to post income from the net sales amount:

   1. Straight-line, by even periods &#x2013; Amortizes income evenly for each period. Currency amounts are not prorated based on the number of days in any period.
   2. Straight-line, prorate first & last period &#x2013; Amortizes equal amounts for periods other than the first and the final period, regardless of the number of days in each period. Amounts are prorated for the first period and the final period based on the number of days in each period.
   3. Straight-line, using exact days &#x2013; Amortizes amounts individually for each period based on the number of days in each period.
   4. Straight-line, prorate first & last period (period-rate) &#x2013; Determines the full number of periods in the schedule and allocates revenue based on the proportional period amount.
   5. Custom &#x2013; Enables you to define amortization terms that can include uneven periods, amounts and multiple income accounts.</ */
  recurrencetype?: string;
  /** Specify the number of periods to postpone the start of the recognition for a schedule.
 
Setting a period offset changes the number of periods in the schedule because it postpones the beginning, but does not change the final period of the schedule. */
  revrecoffset: number;
  /**  */
  totalamount?: number;
}





/** 
 * Revenue Recognition Template Sublists Definition.
 * Record's Internal Id: revrectemplate. 
 * Supports Custom Fields: true 
 */
export interface revrectemplateSublists {
  
  /** recurrence: Custom Recurrence Pattern */
  recurrence: {
    /** incomeaccount - Account  */
    incomeaccount: string;
    /** periodoffset - Period Offset  */
    periodoffset?: number;
    /** postingperiod -   */
    postingperiod: string;
    /** recamount - Amount  */
    recamount?: string;
  }
}





