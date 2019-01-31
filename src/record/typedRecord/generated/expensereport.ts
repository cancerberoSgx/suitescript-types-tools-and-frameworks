// This file is auto generated, do not edit it. 




/** 
 * Expense Report Fields Definition.
 * Record's Internal Id: expensereport. 
 * Supports Custom Fields: true 
 */
export interface expensereportFields {
/** Select an account for this expense.

Note: This field is available to edit only in the following cases:
    * You have checked the Accounting Approval box on this form.
    * You are editing an expense report entered previously. */
  account?: string;
  /** If you have the appropriate accounting authority to approve this report indicating it is ready to pay, place a check mark in this box. */
  accountingapproval?: boolean;
  /** Enter any advance that should be applied to any reimbursement for these expenses. */
  advance?: number;
  /** The number NetSuite enters here represents the total of all line items minus any advances and lines marked as non-reimbursable. */
  amount?: number;
  /** When you use SuiteFlow for expense report approvals, the forms now include an Approval Status field. The Approval Status field reflects the state of the transaction in the approval process.
Expense reports may have one of the following statuses:
    * Pending Approval &#x2013; The expense is in the approval queue.
    * Approved &#x2013; The expense has been given approval for processing.
    * Rejected &#x2013; The expense has not been approved and will not be processed. */
  approvalstatus?: string;
  /** Choose a class to associate with this transaction.

Click New to enter a new class. */
  class?: string;
  /** This field shows if this report is complete. Only complete reports are submitted for approval and processing.
 
Note: Once an expense report is marked complete, you can no longer make changes to it. */
  complete?: boolean;
  /**  */
  createddate?: Date;
  /** To use a different custom form to enter the expense report, select it here. */
  customform: string;
  /** Choose a department to associate with this transaction.

Click New to enter a new department. */
  department?: string;
  /** Enter the due date of the expense report. */
  duedate?: Date;
  /** Enter the name of the employee who incurred these expenses. */
  entity: string;
  /**  */
  entitynexus?: string;
  /**  */
  externalid?: string;
  /**  */
  lastmodifieddate?: Date;
  /** Choose a location to associate with this transaction.

Select New to enter a new location record.

Go to Lists > Locations for details about existing location records. */
  location?: string;
  /** Enter the purpose of the entire expense report. */
  memo?: string;
  /** When you use SuiteFlow for expense approvals, expense reports include a Next Approver field. This field is populated based on the associated workflow.
For example, in your workflow you may create a state of Pending Approval. In that state you create a formula to set the Next Approver as the employee&#x2019;s supervisor. */
  nextapprover?: string;
  /**  */
  nexus?: string;
  /** The current period is entered as the posting period for the expense report. If this period is closed before the expense report is approved, the posting period is the earliest open period. */
  postingperiod: string;
  /**  */
  status?: string;
  /**  */
  statusRef?: string;
  /** The subsidiary associated with the selected employee is displayed here.

To enter expenses associated with other subsidiaries, the Intercompany Time and Expense feature must be enabled, and journal entries will need to be created to adjust for intercompany expenses.

Automated intercompany adjustments can be generated at <_TABNAME=TRAN_CREATEINTERCOADJJE_> > <_TASKCATEGORY=TRAN_CREATEINTERCOADJJE_> > Create Intercompany Adjustments. */
  subsidiary?: string;
  /** If you have the appropriate authority as a supervisor to approve this report, place a check mark in this box. */
  supervisorapproval?: boolean;
  /** NetSuite will keep track of the total expenses as you add and edit line items below. */
  total?: number;
  /** NetSuite inserts today's date as the date of this expense report. You can type or pick another date. */
  trandate: Date;
  /** NetSuite increases the largest expense report number by one. If you wish, you can type another number. The next expense number will revert to the standard pattern.

You can enter a maximum of 45 characters in this field. */
  tranid?: string;
  /** Check this box if you want to enter expenses in foreign currencies on this expense report.

This box is checked by default if you have enabled the Use Multicurrency Expense Reports preference on the General subtab at Home > Set Preferences.

Foreign amounts are translated into base currency amounts. Note that exchange rates and converted amounts displayed on expense lines are provided as approximations only. Actual reimbursement amounts will be based on rates at the time of reimbursement. */
  usemulticurrency?: boolean;
}





/** 
 * Expense Report Sublists Definition.
 * Record's Internal Id: expensereport. 
 * Supports Custom Fields: true 
 */
export interface expensereportSublists {
  
  /** accountingbookdetail: Accounting Books */
  accountingbookdetail: {
    /** accountingbook - Secondary Book  */
    accountingbook: string;
    /** exchangerate - Exchange Rate  */
    exchangerate?: number;
  }

  /** expense: Expenses */
  expense: {
    /** amount - Amount  */
    amount?: number;
    /** category - Category  */
    category?: string;
    /** class - Class  */
    class: string;
    /** currency - Currency  */
    currency?: string;
    /** customer - Customer  */
    customer: string;
    /** department - Department  */
    department: string;
    /** exchangerate - Exchange Rate  */
    exchangerate: number;
    /** expensedate - Date  */
    expensedate?: Date;
    /** foreignamount - Foreign Amount  */
    foreignamount: number;
    /** isbillable - Billable  */
    isbillable: boolean;
    /** isnonreimbursable - Non-reimbursable  */
    isnonreimbursable: boolean;
    /** line -   */
    line: string;
    /** location - Location  */
    location: string;
    /** memo - Memo  */
    memo: string;
    /** receipt - Receipt  */
    receipt: boolean;
  }
}





