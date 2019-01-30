// This file is auto generated, do not edit it. 




/** 
 * Phone Call Fields Definition.
 * Record's Internal Id: phonecall. 
 * Supports Custom Fields: true 
 */
export interface phonecallFields {
/** Check this box to have this call show only in your Phone Calls list.

Calls that are not private can be seen by others with access to your account. */
  accesslevel?: boolean;
  /** Select the employee responsible for setting up or making this phone call. */
  assigned: string;
  /** Select the customer, vendor or partner this call pertains to.

Selecting a company adds this call to the associated record.

You can also select this company on the Participants subtab. */
  company?: string;
  /** Enter the date the subject for this call was concluded.

This field can be useful if the call required a follow-up or call back or was not completed on the call date for another reason. */
  completeddate?: Date;
  /** Select the contact for this company in relation to this cal.

The contacts in this field are the contacts attached to the company selected above. Click Open next to the Company field to add contacts to a company's record. */
  contact?: string;
  /**  */
  createddate?: Date;
  /** If you have created a custom entry form for phone call records, you can select that form here. Selecting the form changes the page to your custom record.

An administrator can create custom records at <_TABNAME=LIST_CUSTENTRYFORM_> > <_TASKCATEGORY=LIST_CUSTENTRYFORM_> > Custom Entry Forms. */
  customform: string;
  /** Enter the date this call must be made by, or the deadline. */
  enddate?: string;
  /**  */
  endtime: string;
  /**  */
  endtimepicker?: string;
  /**  */
  externalid?: string;
  /**  */
  group?: string;
  /**  */
  lastmodifieddate?: Date;
  /** Enter notes on the context and decisions made in this phone call.

You can enter up to 999 characters. */
  message?: string;
  /**  */
  owner: string;
  /** Enter the phone number used for this call.

Phone numbers can be entered in the following formats: 999-999-9999, 1-999-999-9999, (999) 999-9999, 1(999) 999-9999 or 999-999-9999 ext 9999. */
  phone?: string;
  /**  */
  priority: string;
  /** Select the amount of time before the start time for this call when you would like to set a reminder for the organizer.

You must check the Block Out Time box to set a reminder.

You must also select a reminder type to set the reminder. */
  reminderminutes?: string;
  /** Select the type of reminder the call organizer should receive before the start time of this task.

You must check the Block Out Time box to set a reminder.

Email reminders are sent to the email address on the employee record of the organizer.

Popup reminders appear only if the organizer is logged in to his or her NetSuite account.

You must also set a time in the Reminder field to set a reminder. */
  remindertype?: string;
  /**  */
  sendemail?: boolean;
  /** Enter the date of this call.

Click the calendar icon to choose the date from the calendar. */
  startdate: Date;
  /**  */
  starttime: string;
  /**  */
  starttimepicker?: string;
  /** Select either Scheduled or Completed as the status of this call.

Completed calls no longer show on your Phone Calls list by default. */
  status: string;
  /** If this call is related to a support case, select the case number here.

Selecting a case attaches this phone call record to the case record. */
  supportcase?: string;
  /** Check this box to schedule this call on the calendar of the person organizing the call.

Enter the start and end times in the From and To fields.

This time is scheduled on the calendar for the phone call date. */
  timedevent?: boolean;
  /**  */
  timezone?: string;
  /** Enter the subject of this phone call.

You can enter up to 100 characters. */
  title: string;
  /** If this call is associated with a transaction, select that transaction here.

If you select a transaction, this phone call is listed on the History subtab of the transaction. */
  transaction?: string;
}





/** 
 * Phone Call Sublists Definition.
 * Record's Internal Id: phonecall. 
 * Supports Custom Fields: true 
 */
export interface phonecallSublists {
  
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





