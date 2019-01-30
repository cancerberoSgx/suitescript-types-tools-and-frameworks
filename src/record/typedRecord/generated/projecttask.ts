// This file is auto generated, do not edit it. 




/** 
 * Project Task Fields Definition.
 * Record's Internal Id: projecttask. 
 * Supports Custom Fields: true 
 */
export interface projecttaskFields {
/** Indicates the actual time entered against the task. */
  actualwork?: number;
  /**  */
  bbudgetshowcalculatedlines?: boolean;
  /**  */
  bbudgetusecalculatedvalues?: boolean;
  /**  */
  cbudgetshowcalculatedlines?: boolean;
  /**  */
  cbudgetusecalculatedvalues?: boolean;
  /** Indicates the customer and project that this task belongs to.

All project tasks must be created in the context of a project and cannot be moved from one project to another. */
  company: string;
  /** Specifies how to determine the start and end dates for a task.

As Soon As Possible: NetSuite calculates the earliest possible start date for a task based on existing predecessors and sets the end date based on the available work time in the assigned resource's work calendar.

Fixed Date: The task starts on the date you specify. Predecessor relationships are ignored. The task end date is based on the estimated work for the task and the assigned resource's available work time. */
  constrainttype?: string;
  /** Select a contact for this task. */
  contact?: string;
  /** Select the form you want to use to enter this record.

Select Standard Project Task Form to continue using this form, select a custom project task form you have already created, or select New to create a custom project task form. */
  customform: string;
  /** Indicates the estimated date when work for this task will be completed.

NetSuite derives this date from the estimated work and other task dependencies. This date can change over the life of the project if the amount of work, resources assigned, or task dependencies change.

When the task status is Completed, the end date is the date of the last time entry entered against the task. */
  enddate?: Date;
  /** The date in the End Date field when the baseline was set. */
  enddatebaseline?: Date;
  /** Estimated Work for a project task is the total of all completed and planned work for this task.

NetSuite calculates this field by summing the estimated work entered for the resources. If you enter a value in this field, then NetSuite distributes the amount equally to all resources assigned to this task.

If you also use Resource Allocations and the Allow Allocated Resources to Enter Time to All Tasks preference is enabled for this project, the estimated work field is updated to add any time tracked against tasks by allocated resources.

When task status is marked Completed, this number is set to equal Actual Work. */
  estimatedwork?: number;
  /** The value in the Estimated Work field when the baseline was set. */
  estimatedworkbaseline?: number;
  /**  */
  eventid: number;
  /**  */
  externalid?: string;
  /** Select the date this task must be finished by.

This constraint takes precedence over task relationships and start dates are adjusted according to the fixed end date of a task with a Finish No Later Than constraint. */
  finishbydate?: Date;
  /**  */
  fxrate?: number;
  /**  */
  ismilestone?: boolean;
  /**  */
  isoncriticalpath?: string;
  /**  */
  lateend?: Date;
  /**  */
  latestart?: Date;
  /** Enter any comments for the task. */
  message?: string;
  /** Check this box to designate this task as non-billable.

When time is entered against this task, it is automatically marked as non-billable and cannot be changed to billable. */
  nonbillabletask?: boolean;
  /** To place the new task in the proper order in the schedule, select the task that follows it. */
  order?: string;
  /** The name of the employee who created this task. */
  owner?: string;
  /** Select a parent task if the task you are creating is part of a group of tasks.
 
The parent task summarizes data for all of its subordinate tasks.
 
You cannot assign resources to a parent task. */
  parent?: string;
  /** Shows the percent of planned project task time that has been completed.

Percent Complete is calculated as follows:
[Actual Work / Estimated Work]

Percent Complete is 100% when the task status is Completed and Estimated Work is set to Actual Work. */
  percenttimecomplete?: number;
  /** Indicate how important the task is.
 
Tasks with higher priorities should be worked on before tasks with lower priorities. 
 
Task priority does not affect the project schedule. */
  priority: string;
  /** Remaining Work is calculated as:
[Estimated Work - Actual Work]

Before work starts on a task, Remainng Work is the same as Estimated Work.

When a task is marked Completed, Estimated Work is set to equal Actual Work and Remaining Work is 0. */
  remainingwork?: number;
  /**  */
  slackminutes?: number;
  /** Indicates the estimated date to begin work on the task.

If the task constraint is Fixed Date, enter the date to begin work on the task.

If the constraint is As Soon As Possible, NetSuite determines the Start Date based on the schedule. */
  startdate?: Date;
  /** The date in the State Date field when the baseline was set. */
  startdatebaseline?: Date;
  /**  */
  starttime?: string;
  /** The status for a task can be:

Completed - task has been finished
In Progress - task is being worked on
Not Started - task has not been started

You must have permission to edit a task record to change the status. */
  status: string;
  /** Enter a name for the project task. */
  title: string;
}





/** 
 * Project Task Sublists Definition.
 * Record's Internal Id: projecttask. 
 * Supports Custom Fields: true 
 */
export interface projecttaskSublists {
  
  /** assignee: Assignees */
  assignee: {
    /** billingclass - Billing Class  */
    billingclass: string;
    /** cost - Cost  */
    cost: number;
    /** estimatedwork - Estimated Work  */
    estimatedwork?: number;
    /** id -   */
    id: number;
    /** price - Price  */
    price: number;
    /** resource - Resource  */
    resource?: string;
    /** serviceitem - Service Item  */
    serviceitem: string;
    /** unitcost - Unit Cost  */
    unitcost?: number;
    /** unitprice - Unit Price  */
    unitprice: number;
    /** units - Units  */
    units: number;
  }

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
    /** totalamount - Task Total  */
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
    /** totalamount - Task Total  */
    totalamount: number;
  }

  /** predecessor: Predecessors */
  predecessor: {
    /** enddate - End Date  */
    enddate: Date;
    /** startdate - Start Date  */
    startdate: Date;
    /** task - Task  */
    task?: string;
    /** type - Type  */
    type?: string;
  }
}





