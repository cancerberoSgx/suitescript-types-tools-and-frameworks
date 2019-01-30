// This file is auto generated, do not edit it. 




/** 
 * Manufacturing Routing Fields Definition.
 * Record's Internal Id: manufacturingrouting. 
 * Supports Custom Fields: true 
 */
export interface manufacturingroutingFields {
/** Check the Autocalculate Lag box to autocalculate the routing.
NetSuite can automatically calculate the optimal lag amount (the shortest possible lead time for each work order operation).

Define the following on the manufacturing routing record:

    * Lag Amount
    * Lag Units

Once defined, these values default on work orders. The auto-calculated lag amount is the Optimal (minimal) Lag Amount. If lag settings are changed on the operation record, NetSuite reschedules the operation when the task is saved with the new settings and reschedules all affected subsequent tasks.

When a work order is scheduled, NetSuite calculates the optimal lag amount and maximal lag amount for each operation that has a preceding operation and has a defined lag type.
NetSuite does not allow the lag amount to be defined outside of this range.

Note: The autocalculation setting can be changed only when the work order status is Planned or Released. When Auto-calculate Lag is enabled, lag amounts on operations cannot be edited. The only available lag type is Quantity. */
  autocalculatelag?: boolean;
  /**  */
  billofmaterials: string;
  /**  */
  customform?: string;
  /**  */
  externalid?: string;
  /** Check the Default box if you want to default to use this routing for this item on forms. The Default box denotes the default steps for creating a new special work orders and mass created work orders.
Clear this box if you do not want this routing to be used by default. */
  isdefault?: boolean;
  /** Check the Inactive box if you do not want this routing to show in routing lists on records and forms. Clear this box if you do want this routing to show in lists. */
  isinactive?: boolean;
  /** Select the item you are creating an assembly sequence for. */
  item: string;
  /**  */
  location: string;
  /** Optionally enter a memo for this routing. Later you can search for the text you enter in this field. For example, enter Use Beta Alternate when primary widget supply is unavailable. */
  memo?: string;
  /** Enter a name for this routing template. This name will show for selection in the list of routings available in the Manufacturing Routing field on records and forms. For example, enter Beta Alternate Supply Routing. */
  name: string;
  /**  */
  subsidiary: string;
}





/** 
 * Manufacturing Routing Sublists Definition.
 * Record's Internal Id: manufacturingrouting. 
 * Supports Custom Fields: true 
 */
export interface manufacturingroutingSublists {
  
  /** routingcomponent: Component Per Operation */
  routingcomponent: {
    /** bomquantity - BOM Quantity  */
    bomquantity: string;
    /** component -   */
    component: string;
    /** description - Description  */
    description: string;
    /** item -   */
    item: string;
    /** itemname - Component  */
    itemname: string;
    /** operationdisplaytext - Operation  */
    operationdisplaytext: string;
    /** operationsequencenumber - Operation Sequence Number  */
    operationsequencenumber: string;
    /** quantity - Quantity  */
    quantity: string;
    /** revision - Revision  */
    revision: string;
    /** units - Units  */
    units: string;
    /** yield - Yield  */
    yield: number;
  }

  /** routingstep: Routing Steps */
  routingstep: {
    /** laborresources - Labor Resources  */
    laborresources: number;
    /** lagamount - Lag Amount  */
    lagamount: number;
    /** lagtype - Lag Type  */
    lagtype: string;
    /** lagunits - Lag Units  */
    lagunits: string;
    /** machineresources - Machine Resources  */
    machineresources: number;
    /** manufacturingcosttemplate - Manufacturing Cost Template  */
    manufacturingcosttemplate?: string;
    /** manufacturingworkcenter - Manufacturing Work Center  */
    manufacturingworkcenter?: string;
    /** operationname - Operation Name  */
    operationname?: string;
    /** operationsequence - Operation Sequence  */
    operationsequence?: number;
    /** operationyield - Operation Yield  */
    operationyield: number;
    /** runrate - Run Rate (Min/Unit)  */
    runrate?: number;
    /** setuptime - Setup Time (Min)  */
    setuptime?: number;
  }
}





