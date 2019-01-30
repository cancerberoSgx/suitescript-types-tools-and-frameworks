// This file is auto generated, do not edit it. 




/** 
 * Fixed Amount Project Revenue Rule Fields Definition.
 * Record's Internal Id: fixedamountprojectrevenuerule. 
 * Supports Custom Fields: true 
 */
export interface fixedamountprojectrevenueruleFields {
/**  */
  customform: string;
  /**  */
  description?: string;
  /**  */
  externalid?: string;
  /**  */
  fixedamounttype?: string;
  /**  */
  fixedscheduletype?: string;
  /**  */
  isinactive?: boolean;
  /**  */
  name: string;
  /**  */
  project?: string;
  /**  */
  revenuereconciled?: boolean;
  /**  */
  serviceitem: string;
}





/** 
 * Fixed Amount Project Revenue Rule Sublists Definition.
 * Record's Internal Id: fixedamountprojectrevenuerule. 
 * Supports Custom Fields: true 
 */
export interface fixedamountprojectrevenueruleSublists {
  
  /** chargerule: Charge Rules */
  chargerule: {
    /** actualamount - Amount  */
    actualamount: number;
    /** billingitem - Billing Item  */
    billingitem: string;
    /** chargerule - Name  */
    chargerule?: string;
    /** description - Description  */
    description: string;
    /** forecastamount - Amount  */
    forecastamount: number;
    /** ruletype - Type  */
    ruletype: string;
  }

  /** datesfixedamount: Date Scheduled */
  datesfixedamount: {
    /** fixedamount - Amount to Recognize  */
    fixedamount?: number;
    /** recognitiondate - Date  */
    recognitiondate?: Date;
  }

  /** datespctfromtotal: Date Scheduled */
  datespctfromtotal: {
    /** percentfromtotal - Percent to Recognize  */
    percentfromtotal?: number;
    /** recognitiondate - Date  */
    recognitiondate?: Date;
  }

  /** tasksfixedamount: Task Complete */
  tasksfixedamount: {
    /** fixedamount - Amount to Recognize  */
    fixedamount?: number;
    /** projecttask - Name  */
    projecttask?: string;
  }

  /** taskspctfromtotal: Task Complete */
  taskspctfromtotal: {
    /** percentfromtotal - Percent to Recognize  */
    percentfromtotal?: number;
    /** projecttask - Name  */
    projecttask?: string;
  }
}





