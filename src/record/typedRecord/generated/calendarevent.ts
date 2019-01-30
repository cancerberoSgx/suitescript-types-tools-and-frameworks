// This file is auto generated, do not edit it. 




/** 
 * Event Fields Definition.
 * Record's Internal Id: calendarevent. 
 * Supports Custom Fields: true 
 */
export interface calendareventFields {
/** This determines how the event appears to others who have access to this calendar.

    * Public &#x96; this event and its information appear to everyone with access to the calendar.
    * Private &#x96; this event appears only to you on the calendar.
    * Show As Busy &#x96; this event appears as a busy time slot to everyone with access to the calendar. */
  accesslevel: string;
  /** If this event will take place all day long, check this box when you are creating the event.

The event appears in the calendar from 8:00 a.m. until 6:00 p.m. */
  alldayevent?: boolean;
  /** Select a customer, partner or vendor related to this event.

The event record is attached to the company's record. */
  company?: string;
  /** If you selected a company, select the contact for that company in regards to this event. */
  contact?: string;
  /**  */
  createddate?: Date;
  /** Select the custom event form you would like to use to continue filling out this event record.

To use the default form, select the Standard Event Form.

To create a custom event form, select New or click Customize Form. */
  customform: string;
  /** If this a recurring event, enter the date this event stops repeating.

The event will stop appearing on attendees' calendars after this date. */
  endbydate?: Date;
  /**  */
  enddate?: string;
  /**  */
  endtime: string;
  /**  */
  externalid?: string;
  /**  */
  frequency?: string;
  /**  */
  group?: string;
  /**  */
  lastmodifieddate?: Date;
  /** Enter the location where this event will take place. */
  location?: string;
  /** Enter any message or notes for this event.

This message appears under the event title in the e-mail sent to the people invited to this event. */
  message?: string;
  /** Check No End Date if this event continues indefinitely.

Later, if the event ends, you can return to this page to enter the end date in the End By field. */
  noenddate?: boolean;
  /** Select the person who is organizing this event. The event organizer is automatically set as an accepted attendee for this event. 

If you edit the event to change organizers, the new organizer is not automatically added to the attendee list.

If you create an event from a calendar other than your own, then select the calendar's owner as the event organizer to avoid being listed as an attendee. */
  organizer: string;
  /**  */
  owner?: string;
  /**  */
  period?: string;
  /** If you would like to receive a reminder for this event, select the amount of time before the event you want to receive the reminder.

Select the type of reminder you want to receive in the Reminder Type field. Select None if you do not want to receive a reminder. */
  reminderminutes?: string;
  /** Select Email to receive an e-mail reminder at the address you log in with.

Select Popup Window to receive a popup reminder.

Set the amount of time before the event your reminder should trigger in the Reminder field. If you select None, you will not receive a reminder. */
  remindertype?: string;
  /** Enter a date that defines when the event begins to recur. */
  seriesstartdate?: Date;
  /** Enter the date for this event or click the calendar icon to choose a date.

This event appears on that date in the calendar in the daily view, weekly view and monthly view.

The date will also appear below the message if you choose to send an e-mail to the attendees. */
  startdate: Date;
  /**  */
  starttime: string;
  /** The status for the event can be Confirmed, Tentative or Canceled.

    * Confirmed &#x96; This event is definitely going to occur.
    * Tentative &#x96; This event may occur.
    * Canceled &#x96; This event will not occur.

If the status changes, the event organizer can return to the event record and change the status. */
  status: string;
  /** If this event is related to a case of the customer, vendor, or partner selected in the Company field, select the case.

This attaches the event record to the case record. */
  supportcase?: string;
  /**  */
  timezone?: string;
  /** Enter a name for this event.

This name is the subject line of the e-mail sent to those invited to the event.

This title also appears to others if this event is marked public. The title shows on your calendar and on the calendars of those invited to this event. */
  title: string;
  /** If this event is related to an transaction, select the transaction.

This event is then listed on the Events subtab of the transaction record. */
  transaction?: string;
}





/** 
 * Event Sublists Definition.
 * Record's Internal Id: calendarevent. 
 * Supports Custom Fields: true 
 */
export interface calendareventSublists {
  
  /** attendee: Attendees */
  attendee: {
    /** attendance - Attendance  */
    attendance: string;
    /** attendee - Send Invitation to  */
    attendee?: string;
    /** attendeetype -   */
    attendeetype: string;
    /** availability - Availability  */
    availability: string;
    /** id -   */
    id: string;
    /** response - Response  */
    response?: string;
  }

  /** resource: Resources */
  resource: {
    /** availability - Availability  */
    availability: string;
    /** id -   */
    id: string;
    /** location - Location  */
    location: string;
    /** resource - Resource  */
    resource?: string;
  }

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





