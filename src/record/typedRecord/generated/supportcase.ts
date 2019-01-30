// This file is auto generated, do not edit it. 




/** 
 * Case Fields Definition.
 * Record's Internal Id: supportcase. 
 * Supports Custom Fields: true 
 */
export interface supportcaseFields {
/** Select an employee to assign this case to.

To add an employee to this list, go to <_TABNAME=EDIT_EMPLOYEE_> > <_TASKCATEGORY=EDIT_EMPLOYEE_> > Employees, and click Edit next to the employee's record. Click the Human Resources subtab, check the Support Rep box, and click Submit. */
  assigned?: string;
  /**  */
  autoname?: boolean;
  /** If you use auto-generated numbering, this number is automatically assigned to give the case a unique identifier.

You can use this case number to quickly access this case using the case search or the Global Search field. */
  casenumber?: string;
  /** Select the kind of issue the individual or company is reporting. By default, you can choose from problem, question or concern.

Someone with permission can add to this list by going to <_TABNAME=EDIT_CASETYPE_> > <_TASKCATEGORY=EDIT_CASETYPE_> > Case Types > New. */
  category?: string;
  /** Select the company or individual this case pertains to.

All companies or individuals that you have customer, lead, prospect, employee or partner records for will appear here. */
  company: string;
  /**  */
  companyname?: string;
  /** Select the contact who is reporting this issue.

This list shows contacts associated with the company selected above.

To add to this list, go to the customer or company record you need to add to, and click the Contact subtab. */
  contact?: string;
  /** The date and time that this case record was first created shows in this field. */
  createddate?: Date;
  /** This field will show your default case form.

If you select another form, this page will change to that form.

If you select New, you will go to the Custom Entry Forms page to customize or edit current forms. If you customize a current form, it will save as a separate custom form, and that form will be added to this list on new case records. */
  customform: string;
  /** Enter the individual or company contact's email address. You can enter multiple email addresses separated by commas or semicolons.

If you check the Email reply box, your response is emailed to these addresses. */
  email?: string;
  /**  */
  emailemployees?: string;
  /** Check this box to email your reply to the customer's email as entered in the Email field above.

When editing a case, you can also send email to customers or employees using the Email button on the Messages subtab. */
  emailform?: boolean;
  /** The date and time when the case was closed. */
  enddate?: Date;
  /** Enter a message that will be e-mailed to the person you are escalating this case to.

The customer does not receive a copy of this e-mail message. The message is not stored in the case record. */
  escalationmessage?: string;
  /**  */
  eventnumber?: string;
  /**  */
  externalid?: string;
  /** Check this box if this case is internal and is being submitted by or for an employee.

Help desk cases are not included in Customer Service reports. */
  helpdesk?: boolean;
  /** If this case was submitted by email, this field displays the email address to which the case was sent to submit the case.

For example, if you use two support email addresses, support@yourcompany.com and help@yourcompany.com, this field shows which address was used.

The email address the customer sent the message from displays in the Email field. */
  inboundemail?: string;
  /** If this case was submitted by a customer, the customer's most recent message appears here.

If you are creating this case, enter the problem or question here.

If you change the customer or company who submitted this case, the last message remains, even if it is from the previous company.

To view all past messages, click View History on the Messages subtab. */
  incomingmessage?: string;
  /** Add a solution to this case in one of the following ways:

    * Enter the first few letters of the solution title, and press Tab.
    * Click List to select the solution from a list.
    * Click Search to search for a solution.
    * Click New to create a new solution. */
  insertsolution?: string;
  /** Check this box if you do not want your reply to be seen by customers.

Only people in your company who view this case record can see your internal message.

When editing a case, you can also send email to customers or employees using the Email button on the Messages subtab. */
  internalonly?: boolean;
  /** Check this box if you want to remove this case from the cases list.

To view inactive cases, you can check the Show Inactives box at the bottom of the list. */
  isinactive?: boolean;
  /** Select the kind of issue this case pertains to.

To create new support issues, go to <_TABNAME=EDIT_CASEISSUE_> > <_TASKCATEGORY=EDIT_CASEISSUE_> > Case Issues. Click New, and enter the name and description. */
  issue?: string;
  /** Select the product or service this case pertains to.

To offer support for an item, go to <_TABNAME=EDIT_ITEM_> > <_TASKCATEGORY=EDIT_ITEM_> > Items, click the name of the item you want, click Edit and check the Offer Support box. */
  item?: string;
  /** The date and time of the last message received or sent relating to the case. */
  lastmessagedate?: Date;
  /** The date and time when the case was last worked on.

This field updates automatically when a message is received from a contact and when a message is submitted to a contact. */
  lastmodifieddate?: Date;
  /** The date and time when the case was last changed from Closed to Re-opened. */
  lastreopeneddate?: Date;
  /**  */
  messagenew?: boolean;
  /** Select the product module this case is related to.

You can create and edit modules on product records at <_TABNAME=ADMI_ISSUEPRODUCT_> > <_TASKCATEGORY=ADMI_ISSUEPRODUCT_> > Products. */
  module?: string;
  /**  */
  newsolutionfrommsg?: string;
  /** Select how this case is being reported.

Someone with permission can add to this list by going to <_TABNAME=EDIT_CASEORIGIN_> > <_TASKCATEGORY=EDIT_CASEORIGIN_> > Case Origin Types > New. */
  origin?: string;
  /** Use this field to enter a reply to the message. This can be an answer, solution or request for more information based on the information in the Message field.

Check the Send Email box to email this reply to the email address saved on this case record.

Check the Internal Only box to email this reply only to those selected in the Email Employees field. */
  outgoingmessage?: string;
  /** Enter the contact's phone number for this case.

This phone number can be used by support or IT to follow up on a case. */
  phone?: string;
  /** Select the priority of this case.

Cases marked high priority should be resolved first. Cases marked low priority should be resolved last. */
  priority?: string;
  /** Select the product this case is related to.

You can create and edit product records at <_TABNAME=ADMI_ISSUEPRODUCT_> > <_TASKCATEGORY=ADMI_ISSUEPRODUCT_> > Products. */
  product?: string;
  /** Select the profile you want to assign to this case. This profile determines the following:

    * the from name and from email address shown on notification sent for this case
    * the notification templates used

You can create new case profiles at <_TABNAME=EDIT_CASEPROFILE_> > <_TASKCATEGORY=EDIT_CASEPROFILE_> > Case Profiles > New. */
  profile: string;
  /**  */
  searchsolution?: string;
  /** Select the serial number of the item this case is about. */
  serialnumber?: string;
  /**  */
  stage?: string;
  /** Enter, accept or click the calendar to pick the date this case is being reported.

This date shows on the Cases list, and the list can be filtered by date.

The date also shows on the Case subtab of completed company, customer and solution records. */
  startdate: Date;
  /**  */
  starttime: string;
  /** Select the appropriate status for this case. You can create new case statuses at <_TABNAME=EDIT_CASESTATUS_> > <_TASKCATEGORY=EDIT_CASESTATUS_> > Case Statuses > New.

If the case status is In Progress, the person working on it should be selected in the Assigned To field.

If the case status is Escalated, the person whom this case is going to should be selected in the Escalate To field. */
  status: string;
  /** The subsidiary for the customer associated with this case is displayed here. */
  subsidiary?: string;
  /** Enter the subject of this case. You can enter up to 256 characters in this field.

The subject shows in the second column of the Cases list, and it is a useful way to determine what the case is about.

On saved records for individuals or companies who submit cases, the subject appears in the Title column of the Cases subtab.

If you use the Knowledge Base feature, the subject also appears on the Cases subtab of completed solution records. */
  title: string;
}





/** 
 * Case Sublists Definition.
 * Record's Internal Id: supportcase. 
 * Supports Custom Fields: true 
 */
export interface supportcaseSublists {
  
  /** escalateto: Escalate To */
  escalateto: {
    /** email - Email  */
    email: string;
    /** escalatee - Escalatee  */
    escalatee?: string;
    /** phone - Phone  */
    phone: string;
  }

  /** timeitem: Time Tracking */
  timeitem: {
    /** class - Class  */
    class: string;
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
    item?: string;
    /** jobbillingtype -   */
    jobbillingtype: string;
    /** location - Location  */
    location?: string;
    /** memo - Memo  */
    memo: string;
    /** payrollitem - Payroll Item  */
    payrollitem: string;
    /** timetype - Type  */
    timetype: string;
    /** trandate - Date  */
    trandate?: Date;
  }
}





