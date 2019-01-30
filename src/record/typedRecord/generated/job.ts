// This file is auto generated, do not edit it. 




/** 
 * Project Fields Definition.
 * Record's Internal Id: job. 
 * Supports Custom Fields: true 
 */
export interface jobFields {
/** If you assign account numbers for projects, enter the account number here. */
  accountnumber?: string;
  /** Indicates the actual time entered for the project, including open, pending approval, approved, unapproved, and rejected time transactions. This total includes time transactions entered against project tasks and the project as a whole without a specified task.
 
If this project is set to include CRM tasks in project totals, then Actual Work also includes time entered for CRM tasks associated with this project. */
  actualtime?: string;
  /** Check this box to allow any employee or vendor designated as a project resource on the entity record or any employee or vendor that has previously been assigned to a project to be assigned to a project task.

When you enable this preference, any resource that has been previously assigned to a project appears in the list of available resources. This allows for the possibility that an employee or vendor no longer designated as a project resource can still be assigned to a new project task.

Clear the box if you want to restrict project task assignment to resources you add to the Resources subtab.

If you use Resource Allocations, enabling this preference overrides the need to allocate resources prior to making task assignments. Disabling this preference requires you to allocate defined resources prior to making task assignments. Generic resources are available for task assignments regardless of project allocation. */
  allowallresourcesfortasks?: boolean;
  /** Check this box to allow expenses to be entered for this project.

If the Limit Time Entry to Assignees field is also checked, then only resources listed on the Resource subtab will be able to see this project in the Customer/Project select list for Expense Reporting. */
  allowexpenses?: boolean;
  /** Check this box to enable time to be entered for this project.

If the Limit Time Entry to Assignees field is checked, the project appears only in the Customer/Project dropdown for resources listed on the Resource tab of the project. */
  allowtime?: boolean;
  /** Check this box to apply the selected project expense type to all time entries for this project. This preference overrides any other project expense type for time transactions recorded for this project. */
  applyprojectexpensetypetoall?: boolean;
  /**  */
  autoname?: boolean;
  /**  */
  bbudgetshowcalculatedlines?: boolean;
  /**  */
  bbudgetusecalculatedvalues?: boolean;
  /** A billing schedule determines when and how to bill a customer over the duration of the project.

Billing schedules for Fixed Bid, Interval and Time and Materials projects are public schedules and can be shared across projects. A Fixed Bid, Milestone billing schedule is private and used only for the project it is created for. */
  billingschedule?: string;
  /** NetSuite calculates the end date for the project as the date that all project tasks will be complete according to the current project schedule.

Calculated End Date changes as the project schedule changes. */
  calculatedenddate?: Date;
  /** The Calculated End Date when the baseline was set. */
  calculatedenddatebaseline?: Date;
  /** Select the category that applies to this customer.

To add choices to this list, go to <_TABNAME=EDIT_ACCOUNTINGOTHERLIST_> > <_TASKCATEGORY= ACCOUNTINGOTHERLIST _> > New > Customer Category.

For example, you might create categories of wholesale, retail, and online. */
  category?: string;
  /**  */
  cbudgetshowcalculatedlines?: boolean;
  /**  */
  cbudgetusecalculatedvalues?: boolean;
  /** Enter other information about this project. */
  comments?: string;
  /** Enter a unique project name.

If you use Auto-Generated Numbering, it is important to enter the project name here because the Project ID does not include the project name. */
  companyname?: string;
  /**  */
  contact?: string;
  /** The customer's currency is shown here. This is the currency used for all transactions and records created for this project.

If you use the Multi-Currency Customers feature, select the customer's transaction currency you want to use for this project and its associated records and transactions. */
  currency?: string;
  /**  */
  currencyprecision?: string;
  /** Select the form you want to use to enter this record.

Select Standard Project Form to continue using this form, select a custom project form you have already created, or select New to create a custom project form. */
  customform: string;
  /** Indicates the date the project was created. */
  datecreated?: Date;
  /** Enter the date the project is finished. */
  enddate?: Date;
  /** NetSuite copies the Project Name as the Project ID.

If you want to manually enter a Project ID, clear the Auto check box next to the field and enter the ID.

If you use Auto-Generated Numbering, then NetSuite creates this ID automatically based on your settings at <_TABNAME=ADMI_NUMBERING_> > <_TASKCATEGORY=ADMI_NUMBERING_> Set Up Auto-Generated Numbers. */
  entityid: string;
  /** Indicates the progress of the project.

When creating a new project, select the status that best indicates the progress of the project.

You can create new statuses at Setup > Accounting > Accounting Lists > New, and click Project Status. */
  entitystatus?: string;
  /** Enter the projected cost to complete this project. */
  estimatedcost?: number;
  /** Estimated Gross Profit is calculated as follows:

For Time and Materials projects:
[Estimated Labor Revenue - Estimated Labor Cost]

For Fixed Bid projects:
[Project Price - Estimated Labor cost] */
  estimatedgrossprofit?: number;
  /** Shows the expected profit percentage, calculated as:

For Time and Materials projects:
[Estimated Gross Profit / Estimated Labor Revenue

For Fixed Bid projects:
[Estimated Gross Profit / Project Price] */
  estimatedgrossprofitpercent?: number;
  /** Estimated Labor Cost is the total amount expected to be spent on labor for the project. */
  estimatedlaborcost?: number;
  /** The value of Estimated Labor Cost when the baseline was set. */
  estimatedlaborcostbaseline?: number;
  /** Indicates the projected revenue to be billed for work performed on this project. */
  estimatedlaborrevenue?: number;
  /** Enter the projected revenue to be billed for work performed on this project. */
  estimatedrevenue?: number;
  /** Indicates the sum of the initial time budgeted for the CRM Tasks that are included in this project. */
  estimatedtime?: string;
  /** Estimated Work is the sum of the estimated work for all project tasks.

Estimated Work also includes the Current Time Budget amounts for all CRM tasks if the Include CRM Tasks in Project Totals check box is selected for this project. */
  estimatedtimeoverride?: string;
  /**  */
  estimatedtimeoverridebaseline?: string;
  /** Select a revenue recognition template created for the project. The template generates a schedule forecasting expected revenue to be recognized for the project. */
  estimaterevrectemplate?: string;
  /**  */
  externalid?: string;
  /** Shows the currency's exchange rate when you create the project.

You can edit the rate for this project if you want to use a different rate for cost and labor estimates. */
  fxrate?: number;
  /** Check this box to allow CRM tasks to be included in costs, planned time, and actual time for this project. */
  includecrmtasksintotals?: boolean;
  /**  */
  isbasecurrency?: boolean;
  /** Exempt time is excluded when calculating utilization. It is not included in the numerator or denominator of the utilization formula. */
  isexempttime?: boolean;
  /** If you check this box, then the project no longer appears on the list of projects.
 
You cannot edit or make any changes to a project marked inactive.
Check the Show Inactives box at the bottom of the List page to view inactive projects. */
  isinactive?: boolean;
  /**  */
  isjob?: string;
  /** Productive time is time worked on a project but not included when calculating revenue for the project.

Productive time is not billed to the customer.

Training and pre-sales support are examples of productive time. */
  isproductivetime?: boolean;
  /** Utilized time directly contributes to the revenue for a project. */
  isutilizedtime?: boolean;
  /** Select a method to bill project costs to the customer.

Charge-Based: billable amounts are represented by charges. Charges are generated based on charge rules based on fixed dates, milestones, project progress, or time entries. This option requires that you have enabled the Charge-Based Billing feature.

Fixed Bid, Interval: bill customers at predefined intervals for a portion of the fixed amount based on project percent complete.

Fixed Bid Milestone: bill customers as milestones are completed for the percentage of the total project amount specified for the milestone.

Time and Materials: bill customers for time and expenses entered against the project. */
  jobbillingtype?: string;
  /** Enter the service item to appear on transactions billed to the customer. */
  jobitem?: string;
  /** Enter the price billed to the customer on transactions.

Project Price is also used to calculate the gross profit margin for the project. */
  jobprice?: number;
  /** Select the project type. Project types are user-defined values to classify projects in a way meaningful to your company. */
  jobtype?: string;
  /** Select the language to use to display all project records and invoices. */
  language?: string;
  /** The date when the last project baseline was set. */
  lastbaselinedate?: Date;
  /**  */
  lastmodifieddate?: Date;
  /** Check this box to allow only resources listed on the Resources subtab for the project to enter time and expenses.

Clearing this box allows any project resource to track time against this project and its project tasks.

Only resources listed on the Resource tab will be able to see the project in Project select lists for time and expenses.

Note: Regardless of whether this box is marked, in the Vendor Center, this project will only show if the vendor is listed as a resource of the project. */
  limittimetoassignees?: boolean;
  /** Check this box to generate time entries for planned work on project tasks.

Resources assigned to this project will be able to see their planned time in Time Tracking or Timesheets.

If you use Project Budgets, planned time entries are required to generate calculated costs. */
  materializetime?: boolean;
  /**  */
  otherrelationships?: string;
  /** Enter the name of the customer for this project. If you are creating a subproject, then enter a customer and project in this field. */
  parent?: string;
  /** Enter an estimate of how much of the total project work is complete.
 
This percentage is not calculated or updated by NetSuite. */
  percentcomplete?: number;
  /** Shows the percent of the total planned project time that has been completed.

Percent Work Complete is calculated by dividing the total number of actual hours worked and reported in Time Tracking by the number of hours entered in the Estimated Work field for each project task.

The percentage is 100% when the status of all project tasks is Completed. */
  percenttimecomplete?: number;
  /** Enter the date you plan to complete all project tasks by. You can update this date at any time.
 
If you use Advanced Projects, NetSuite calculates an end date based on the project schedule and displays it in Calculated End Date. */
  projectedenddate?: Date;
  /** The Estimated End Date when the baseline was set.
 
Baseline information is available only if you use Advanced Projects. */
  projectedenddatebaseline?: Date;
  /** Select a project expense type for this project.

The project expense type determines which account is debited when posting time transactions recorded for this project. */
  projectexpensetype: string;
  /**  */
  stage?: string;
  /** Enter the estimated date work will start on the project. You can change this date at any time during the life of the project.

NetSuite schedules all project tasks without predecessors to start on this date. */
  startdate?: Date;
  /** The Start Date when the baseline was set.

Baseline information is available only if you use Advanced Projects. */
  startdatebaseline?: Date;
  /** The subsidiary for this project is displayed here. */
  subsidiary: string;
  /**  */
  timeapproval?: string;
  /** Indicates the time for work yet to be done on all project tasks, calculated as:

[Estimated Work(all tasks) - Actual Work (all tasks)] */
  timeremaining?: string;
}





/** 
 * Project Sublists Definition.
 * Record's Internal Id: job. 
 * Supports Custom Fields: true 
 */
export interface jobSublists {
  
  /** bbudget: Billing Budget */
  bbudget: {
    /** costcategoryref -   */
    costcategoryref: number;
    /** costcategorysubtype -   */
    costcategorysubtype: string;
    /** costcategorytype -   */
    costcategorytype: string;
    /** selectline - Select  */
    selectline: boolean;
    /** totalamount - Project Total  */
    totalamount: number;
  }

  /** cbudget: Cost Budget */
  cbudget: {
    /** costcategoryref -   */
    costcategoryref: number;
    /** costcategorysubtype -   */
    costcategorysubtype: string;
    /** costcategorytype -   */
    costcategorytype: string;
    /** selectline - Select  */
    selectline: boolean;
    /** totalamount - Project Total  */
    totalamount: number;
  }

  /** jobresources: Resource Details */
  jobresources: {
    /** defaultcost - Default Cost  */
    defaultcost: number;
    /** email - Email  */
    email: string;
    /** jobresource - Name  */
    jobresource?: string;
    /** overridencost - Cost Override  */
    overridencost: number;
    /** role - Role  */
    role?: string;
  }

  /** percentcompleteoverride: Rev Rec Percent Complete Override */
  percentcompleteoverride: {
    /** comments - Comments  */
    comments: string;
    /** percent - Cumulative Percent Complete  */
    percent?: number;
    /** period - Accounting Period  */
    period?: string;
  }

  /** plstatement: P&L */
  plstatement: {
    /** costcategoryref -   */
    costcategoryref: number;
    /** costcategorysubtype -   */
    costcategorysubtype: string;
    /** costcategorytype -   */
    costcategorytype: string;
  }
}





