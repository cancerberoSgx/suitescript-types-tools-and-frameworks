// This file is auto generated, do not edit it. 




/** 
 * Manufacturing Operation Task Fields Definition.
 * Record's Internal Id: manufacturingoperationtask. 
 * Supports Custom Fields: true 
 */
export interface manufacturingoperationtaskFields {
/**  */
  actualruntime?: number;
  /**  */
  actualsetuptime?: number;
  /**  */
  actualwork?: number;
  /** Check the Auto-Calculate Lag box to automatically calculate the optimal lag amount, which is the shortest possible lead time for each work order. */
  autocalculatelag?: boolean;
  /**  */
  company: string;
  /**  */
  completedquantity?: number;
  /**  */
  constrainttype?: string;
  /**  */
  contact?: string;
  /** In the Custom Form list, select the form to use with this work order. */
  customform?: string;
  /** In the Production End Date field, enter the date you expect to complete assembly production.

This field defaults to show the transaction date plus lead time. */
  enddate?: Date;
  /**  */
  enddatebaseline?: Date;
  /**  */
  estimatedwork?: number;
  /**  */
  estimatedworkbaseline?: number;
  /**  */
  eventid: number;
  /**  */
  externalid?: string;
  /**  */
  fxrate?: number;
  /**  */
  inputquantity?: number;
  /**  */
  laborresources: number;
  /**  */
  machineresources: number;
  /**  */
  manufacturingcosttemplate: string;
  /**  */
  manufacturingworkcenter: string;
  /**  */
  message?: string;
  /**  */
  operationsequence: number;
  /**  */
  order?: string;
  /**  */
  owner?: string;
  /**  */
  percenttimecomplete?: number;
  /**  */
  priority?: string;
  /**  */
  remainingwork?: number;
  /**  */
  runrate: number;
  /**  */
  setuptime: number;
  /** In the Production Start Date field, enter the date you expect to begin assembly production. This field defaults to today's date.

    * Demand Planning bases component demand on the production start date.
    * Manufacturing Routing production start date depends on whether NetSuite uses forward or backward scheduling to calculate production requirements.

To learn more, see Production Scheduling Methods Overview. */
  startdate?: Date;
  /**  */
  startdatebaseline?: Date;
  /**  */
  starttime?: string;
  /**  */
  status?: string;
  /**  */
  title: string;
  /**  */
  workorder?: string;
}





/** 
 * Manufacturing Operation Task Sublists Definition.
 * Record's Internal Id: manufacturingoperationtask. 
 * Supports Custom Fields: true 
 */
export interface manufacturingoperationtaskSublists {
  
  /** costdetail: Costs */
  costdetail: {
    /** account -   */
    account: number;
    /** costcategory - Cost Category  */
    costcategory?: string;
    /** fixedrate - Fixed Rate  */
    fixedrate: number;
    /** id -   */
    id: number;
    /** item - Item  */
    item?: string;
    /** runrate - Run Rate  */
    runrate: number;
  }

  /** predecessor: Predecessors */
  predecessor: {
    /** enddate - End Date  */
    enddate: Date;
    /** lagamount - Lag Amount  */
    lagamount: number;
    /** lagtype - Lag Type  */
    lagtype: string;
    /** lagunits - Lag Units  */
    lagunits: string;
    /** startdate - Start Date  */
    startdate: Date;
    /** task - Task  */
    task?: string;
    /** type - Type  */
    type?: string;
  }
}





