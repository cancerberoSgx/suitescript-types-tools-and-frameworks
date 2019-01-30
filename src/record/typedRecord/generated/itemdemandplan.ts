// This file is auto generated, do not edit it. 




/** 
 * Item Demand Plan Fields Definition.
 * Record's Internal Id: itemdemandplan. 
 * Supports Custom Fields: true 
 */
export interface itemdemandplanFields {
/**  */
  alternatesourceitem?: string;
  /**  */
  analysisduration?: number;
  /**  */
  customform?: string;
  /** You can alter your view of the demand plan by changing the date range or the plan view, as described below:
    * Year &#x2013; Enter the year to view.
    * Month &#x2013; Select a month to view
    * Start Date &#x2013; Enter the first date of the period you want to view.
    * End Date &#x2013; Enter the last date of the period you want to view.
    * View &#x2013; Choose to see the demand results in a Daily, Weekly or Monthly format. */
  demandplancalendartype?: string;
  /** You can alter your view of the demand plan by changing the date range or the plan view, as described below:
    * Year &#x2013; Enter the year to view.
    * Month &#x2013; Select a month to view
    * Start Date &#x2013; Enter the first date of the period you want to view.
    * End Date &#x2013; Enter the last date of the period you want to view.
    * View &#x2013; Choose to see the demand results in a Daily, Weekly or Monthly format. */
  enddate?: Date;
  /**  */
  externalid?: string;
  /** Select the item you are entering a demand plan for. */
  item: string;
  /** If you use the Multi-Location Inventory feature, select a location. Then, the list of items that shows is filtered to show only items for the selected location that are time-phased replenishment items. */
  location: string;
  /** Optionally enter a memo for this plan. Later, you can search for this plan by the text entered here. */
  memo?: string;
  /** You can alter your view of the demand plan by changing the date range or the plan view, as described below:
    * Year &#x2013; Enter the year to view.
    * Month &#x2013; Select a month to view
    * Start Date &#x2013; Enter the first date of the period you want to view.
    * End Date &#x2013; Enter the last date of the period you want to view.
    * View &#x2013; Choose to see the demand results in a Daily, Weekly or Monthly format. */
  month?: string;
  /**  */
  projectionduration?: number;
  /**  */
  projectioninterval?: string;
  /**  */
  projectionmethod?: string;
  /**  */
  projectionstartdate?: Date;
  /** You can alter your view of the demand plan by changing the date range or the plan view, as described below:
    * Year &#x2013; Enter the year to view.
    * Month &#x2013; Select a month to view
    * Start Date &#x2013; Enter the first date of the period you want to view.
    * End Date &#x2013; Enter the last date of the period you want to view.
    * View &#x2013; Choose to see the demand results in a Daily, Weekly or Monthly format. */
  startdate?: Date;
  /**  */
  subsidiary: string;
  /** Select a Unit of Measure to create a demand plan based on the unit. */
  units?: string;
  /** You can alter your view of the demand plan by changing the date range or the plan view, as described below:
    * Year &#x2013; Enter the year to view.
    * Month &#x2013; Select a month to view
    * Start Date &#x2013; Enter the first date of the period you want to view.
    * End Date &#x2013; Enter the last date of the period you want to view.
    * View &#x2013; Choose to see the demand results in a Daily, Weekly or Monthly format. */
  year?: string;
}





/** 
 * Item Demand Plan Sublists Definition.
 * Record's Internal Id: itemdemandplan. 
 * Supports Custom Fields: true 
 */
export interface itemdemandplanSublists {
  
  /** demandplandetail: Demand */
  demandplandetail: {
    /** enddate - End Date  */
    enddate: Date;
    /** quantity_1_ - Quantity  */
    quantity_1_: string;
    /** startdate - Start Date  */
    startdate: Date;
    /** systemcalculated - Monthly Calculated  */
    systemcalculated: number;
  }
}





