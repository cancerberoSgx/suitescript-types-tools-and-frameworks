// This file is auto generated, do not edit it. 




/** 
 * Resource Allocation Fields Definition.
 * Record's Internal Id: resourceallocation. 
 * Supports Custom Fields: true 
 */
export interface resourceallocationFields {
/** Enter the number of hours you want this resource allocated.

Or, select Percent of Time in the dropdown and then enter the percentage you want this resource allocated over the selected time period.

For example, a resource that typically works 8 hours a day for a 5 day work week is allocated 50% for two weeks would work on the project 4 hours per day for a total of 40 hours. */
  allocationamount: string;
  /** Select a resource for this allocation.

Only employees and vendors identified as project resources are available for resource allocations. Check the Project Resource box on the employee or vendor record to identify a project resource. */
  allocationresource: string;
  /** Select an allocation type.

Hard &#x2013; This allocation request is not flexible; the resource is committed to the dates and hours on this request.

Soft &#x2013; This allocation request is flexible; adjustments can be made to the date and hours if needed to accommodate other priorities. */
  allocationtype: string;
  /** This field displays how this allocation is requested.

Hours &#x2013; A specific number of hours distributed over the selected dates is requested. 

Percent of Time &#x2013; A percentage of time distributed over the selected dates is requested. NetSuite calculates the number of hours based on the resources work calendar and the selected dates. */
  allocationunit?: string;
  /** If you customized a resource allocations form, select it here. */
  customform: string;
  /** Select the date you want this allocation to end. */
  enddate: Date;
  /**  */
  externalid?: string;
  /** Enter any additional information about this allocation. */
  notes?: string;
  /** This field displays the number of hours requested in this allocation.

If the allocation is requested using Percent of Time, NetSuite calculates the number of hours based on the requested percentage, selected dates, and the resource's work calendar. */
  numberhours?: string;
  /** This field displays the percentage of time requested by this allocation. 

If the allocation is requested using Number of Hours, NetSuite calculates the percentage based on the requested hours, selected dates, and the resource's work calendar. */
  percentoftime?: string;
  /** Select the project this allocation applies to. */
  project: string;
  /**  */
  requestor?: string;
  /** Select the date you want this allocation to begin. */
  startdate: Date;
}





/** 
 * Resource Allocation Sublists Definition.
 * Record's Internal Id: resourceallocation. 
 * Supports Custom Fields: true 
 */
export interface resourceallocationSublists {
  
}





