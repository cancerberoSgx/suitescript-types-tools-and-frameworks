// This file is auto generated, do not edit it. 




/** 
 * Timesheet Fields Definition.
 * Record's Internal Id: timesheet. 
 * Supports Custom Fields: true 
 */
export interface timesheetFields {
/** Select an approval status for this time entry. */
  approvalstatus?: string;
  /** Select the type of form to use. */
  customform: string;
  /** Select the employee whose time you are recording.

Click New to set up a new employee record.

For Timesheets, click the Quick Find icon at the top of the page to select a different timesheet. */
  employee?: string;
  /**  */
  enddate: Date;
  /**  */
  externalid?: string;
  /**  */
  iscomplete?: boolean;
  /** NetSuite displays the start date for the current timesheet. */
  startdate: Date;
  /** The subsidiary associated with the employee is displayed here. */
  subsidiary?: string;
  /** NetSuite displays the total hours entered on this timesheet. This field is updated in real time. */
  totalhours?: string;
}





/** 
 * Timesheet Sublists Definition.
 * Record's Internal Id: timesheet. 
 * Supports Custom Fields: true 
 */
export interface timesheetSublists {
  
  /** timegrid: Time */
  timegrid: {
    /** friday - &nbsp  */
    friday: string;
    /** monday - &nbsp  */
    monday: string;
    /** saturday - &nbsp  */
    saturday: string;
    /** sunday - &nbsp  */
    sunday: string;
    /** thursday - &nbsp  */
    thursday: string;
    /** tuesday - &nbsp  */
    tuesday: string;
    /** wednesday - &nbsp  */
    wednesday: string;
  }
}





