// This file is auto generated, do not edit it. 




/** 
 * Task Fields Definition.
 * Record's Internal Id: task. 
 * Supports Custom Fields: true 
 */
export interface taskFields {
/** Check this box so that only the creator of this task or person assigned this task can view the task.

If you don't check this box, this task is considered public and can be viewed on all task lists. */
  accesslevel?: boolean;
  /** The Actual Time field shows the total amount of time entered against this task. */
  actualtime?: string;
  /** The task is assigned to the person who should complete the task.

If you are creating or editing the task, select a person's name to assign the task to the person. When creating a task, your name appears by default in this field. */
  assigned: string;
  /** Select the customer, vendor or partner this task pertains to.

Selecting a company adds this task to the associated record.

You can select additional companies on the Contacts subtab. */
  company?: string;
  /** Select the contact for this task.

The contacts in this field are the contacts attached to the company selected above. Click Open next to the Company field to add contacts to a company's record.

You can select additional companies and contacts on the Contacts subtab. */
  contact?: string;
  /**  */
  createddate?: Date;
  /** Select the custom task form you want to use to continue entering this record.

To use the default form, select Standard Task Form.

To create a new custom task form, select New or click Customize Form. */
  customform: string;
  /** Enter the projected date when this task needs to be complete. */
  duedate: Date;
  /** This is the date the task should be completed.

If you are entering or editing the task, type or pick the due date of the task.

This date is included in the email to the assignee. */
  enddate?: string;
  /**  */
  endtime: string;
  /**  */
  endtimepicker?: string;
  /** In the Initial Time Budget field, enter your first approximation of the amount of time this task will take. Later, you can increase or decrease your time estimate in the Current Time Budget field.
 
By maintaining an initial time estimate in this field, you can compare your initial estimate to your altered estimate.
 
If you entered a time estimate on a job task template, that amount shows here. */
  estimatedtime?: string;
  /** If your estimate of the time this task will take increases or decreases from your original estimate, enter the altered estimate in the Current Time Budget field. */
  estimatedtimeoverride?: string;
  /**  */
  externalid?: string;
  /**  */
  group?: string;
  /**  */
  lastmodifieddate?: Date;
  /** Enter any comments about this task.

These comments appear in the e-mail sent to the person this task is assigned to. */
  message?: string;
  /** Select the milestone you want to associate with this task. */
  milestone?: string;
  /** This is the person who created this task.

When someone creates a task, that person's name automatically appears in this field. */
  owner: string;
  /** Select the parent task if this task is the subordinate of another.
Note: By identifying this task as a subordinate, the parent task becomes a summary task. A summary task cannot have resources assigned to it because it does not track work, it only tracks information about subordinate tasks. */
  parent?: string;
  /** In the Percent Complete field, enter an estimate of how much of the total amount of work for this task is already completed.
 
For example, if half the work toward completion is done, enter 50%.
 
Note: The percentage you enter in this field overrides the auto-calculated figure in the Percent Time Complete field and is used for task calculations. */
  percentcomplete?: number;
  /** The system auto-calculates a value for the Percent Time Complete field, by dividing Actual Time by Current Time Budget (or by Initial Time Budget, if no Current Time Budget has been entered). This value indicates how much of the budgeted time for the task has been completed.

You can override this value by entering a percentage value in the Percent Complete field. */
  percenttimecomplete?: number;
  /** This is how important the task is. Tasks with higher priorities should be worked on before tasks with lower priorities.

    * High - The task very important. Do before lower priorities.
    * Medium - The task is moderately important. Do after higher priorities and before lower priorities.
    * Low - The task is not important. Do after higher priorities. */
  priority: string;
  /** Select the amount of time before the start time for this task when you would like to set a reminder for the assignee.

You must check the Block Out Time box to set a reminder.

You must also select a reminder type to set the reminder. */
  reminderminutes?: string;
  /** Select the type of reminder the assignee should receive before the start time of this task.

You must check the Block Out Time box to set a reminder.

Email reminders are sent to the email address on the employee record of the assignee.

Popup reminders appear only if the assignee is logged in to his or her NetSuite account.

You must also set a time in the Reminder field to set a reminder. */
  remindertype?: string;
  /** Check this box to send an email message to the person this task is assigned to. The person the task is assigned to also receives an e-mail message when this task is updated if the Send e-mail box is checked.

If this person's record does not include an email address, no message will be sent. */
  sendemail?: boolean;
  /** This is the date the task should be started.

If you are entering or editing the task, type or pick the start date of the task.

This date is included in the e-mail to the assignee. */
  startdate: Date;
  /**  */
  starttime: string;
  /**  */
  starttimepicker?: string;
  /** The status for the task can be Complete, In Progress or Not Started.

    * Complete &#x96; This task has been done.
    * In Progress &#x96; This task is being worked on.
    * Not Started &#x96; This task has not been started.

When status changes, someone with permission to edit the record can change the status. */
  status: string;
  /** If this task is related to a support case submitted by the customer, partner or vendor selected in the Company field, select the case number here.

Selecting a case attaches this task record to the case record. */
  supportcase?: string;
  /** Check this box to schedule this task on the calendar of the person the task is assigned to.

Enter the start and end times in the From and To fields.

This time is scheduled on the calendar for the start date. */
  timedevent?: boolean;
  /** The Time Remaining field shows the estimated remaining amount of time for this task.
 
Time remaining is calculated as follows:

    (Initial Time Budget - Actual Time)

If you have entered a Current Time Budget to update your Initial Time Budget, then the time remaining for the task is calculated as:

    (Current Time Budget - Actual Time) */
  timeremaining?: string;
  /**  */
  timezone?: string;
  /** Enter a name for this task.

This name is the subject line of the e-mail sent to the assignee if you check the Send e-mail box.

This title also appears to others if the Private Task box is not checked. The title shows on the Tasks list. */
  title: string;
  /** If this task is associated with a transaction, select that transaction here.

If you select a transaction, this task is listed on the History subtab of the transaction. */
  transaction?: string;
}





/** 
 * Task Sublists Definition.
 * Record's Internal Id: task. 
 * Supports Custom Fields: true 
 */
export interface taskSublists {
  
  /** timeitem: Time Tracking */
  timeitem: {
    /** class - Class  */
    class: string;
    /** customer - Customer:Project  */
    customer: string;
    /** department - Department  */
    department: string;
    /** employee - Employee  */
    employee?: string;
    /** hours - Duration  */
    hours?: string;
    /** id -   */
    id: number;
    /** isbillable - Billable  */
    isbillable: boolean;
    /** isexempt -   */
    isexempt: string;
    /** isproductive -   */
    isproductive: string;
    /** isutilized -   */
    isutilized: string;
    /** item - Service Item  */
    item: string;
    /** jobbillingtype -   */
    jobbillingtype: string;
    /** location - Location  */
    location?: string;
    /** memo - Memo  */
    memo: string;
    /** overriderate - Lock this Rate  */
    overriderate: boolean;
    /** payrollitem - Payroll Item  */
    payrollitem: string;
    /** price - Price Level  */
    price: string;
    /** rate - Rate  */
    rate: number;
    /** timetype - Type  */
    timetype: string;
    /** trandate - Date  */
    trandate?: Date;
  }
}





