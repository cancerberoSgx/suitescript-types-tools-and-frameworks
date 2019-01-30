// This file is auto generated, do not edit it. 




/** 
 * Time Entry Fields Definition.
 * Record's Internal Id: timeentry. 
 * Supports Custom Fields: true 
 */
export interface timeentryFields {
/** Select an approval status for this time entry. */
  approvalstatus?: string;
  /** Select a billing class for this time entry. If a billing class is selected for this employee it is automatically selected. */
  billingclass?: string;
  /** Select a case, task, event or call for the customer or project you selected, to associate this time with an activity.

This time entry is added to the record you select. */
  casetaskevent?: string;
  /** If you want, select the class that applies to this transaction.

Click New to set up a new class. */
  class?: string;
  /**  */
  createddate?: Date;
  /** If applicable, select the customer or project that applies to this time transaction. If you select a customer or project, you must also select a service item.

Click -New- to set up a new customer. */
  customer?: string;
  /**  */
  day?: Date;
  /** If you want, select the department that applies to this transaction.

Click New to set up a new department. */
  department?: string;
  /**  */
  employee: string;
  /**  */
  externalid?: string;
  /** If you filled in the Start Time, End Time and Break fields, NetSuite automatically fills in the Duration field for you.

If you didn't fill in these fields, enter the total time worked in hours and minutes.

If you want to time yourself as you work, click the Timer link next to the Duration field. */
  hours: string;
  /** Check this box if the time you are entering can be billed. */
  isbillable?: boolean;
  /**  */
  isexempt?: boolean;
  /**  */
  isproductive?: boolean;
  /**  */
  isutilized?: boolean;
  /** If applicable, select the service that was provided. If you select a service item, you must also select a customer or project.

Click New to set up a new service item. */
  item?: string;
  /** Select a location to associate with this transaction. Select New to create a new location record. */
  location: string;
  /** If you want, enter a memo for this time transaction.

If you are billing this time back to a customer or job, this memo appears as a description for this line item on the customer invoice. */
  memo?: string;
  /** If you're billing this time back to a customer, check this box to lock the rate you enter so it's not affected by rate changes that happen before the customer is billed.

If you're entering time for a charge-based project and there are time-based charge rules, the rate is determined by the applied charge rule. Any rates entered on time records are discarded.

If you are entering time for a payroll item like vacation time, leave this field blank. */
  overriderate?: string;
  /** Check this box to designate that this time will be or has been paid to the employee outside of NetSuite.

This removes the time entry from NetSuite payroll lists and transactions but still keeps the time available for billing back to the customer. */
  paidexternally?: boolean;
  /** Select the payroll item that applies to this time entry.

Selecting the correct payroll item ensures that the correct rate is applied. */
  payrollitem?: string;
  /** If you've set up a custom price level for your customer, it appears here. Otherwise, Sales Price 1 on the service item's record appears.

If you want to change the price level, select one from the list. Select Custom to enter a new price in the Rate field.

If you're entering time for a payroll item like vacation time, leave this field blank.

If you're entering time for a charge-based project and there are time-based charge rules, any price level selected in this field will be overridden by the applied charge rule. */
  price?: string;
  /**  */
  projecttaskassignment?: string;
  /** If you selected a price in the Price Level field, it automatically appears here.

If you don't use multiple prices or if you selected Custom in the Price Level field, enter a rate for this time transaction.

If you're entering time for a payroll item like vacation time, leave this field blank.

If you're entering time for a charge-based project and there are time-based charge rules, any rate entered in this field will be overridden by the applied charge rule. */
  rate?: string;
  /** The subsidiary associated with the employee is displayed here. */
  subsidiary?: string;
  /** The type of time transaction is displayed here. 

Actual time is time that has been worked by an employee. Planned time is time that has been accounted for when planning a project. Allocated time is time that has been assigned due to a resource allocation. */
  timetype?: string;
}





/** 
 * Time Entry Sublists Definition.
 * Record's Internal Id: timeentry. 
 * Supports Custom Fields: true 
 */
export interface timeentrySublists {
  
}





