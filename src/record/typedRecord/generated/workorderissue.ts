// This file is auto generated, do not edit it. 




/** 
 * Work Order Issue Fields Definition.
 * Record's Internal Id: workorderissue. 
 * Supports Custom Fields: true 
 */
export interface workorderissueFields {
/**  */
  class?: string;
  /**  */
  createddate?: Date;
  /**  */
  customform: string;
  /**  */
  department?: string;
  /** Select a Starting Operation and Ending Operation to define a range. The default component quantity shows for components to be issued within the operation range. */
  endoperation?: string;
  /**  */
  externalid?: string;
  /** In the Assembly field, select the assembly item you want to issue.
An issue can be entered only for assembly items on record.
To create new assembly item records, click Assembly at Lists > Accounting > Items > New . */
  item: string;
  /**  */
  lastmodifieddate?: Date;
  /**  */
  location: string;
  /** This field displays the associated routing. */
  manufacturingrouting?: string;
  /** Optionally enter a memo for this transaction. You can search for text entered here to find the transaction later. */
  memo?: string;
  /** Select a posting period for this transaction. */
  postingperiod?: string;
  /** Select the revision to be used for this issue. For details, click Help and read Revision Control BOM Management . */
  revision?: string;
  /**  */
  revisionmemo?: string;
  /** Select a Starting Operation and Ending Operation to define a range. The default component quantity shows for components to be issued within the operation range. */
  startoperation?: string;
  /**  */
  subsidiary?: string;
  /**  */
  taxperiod?: string;
  /** Select or verify the date for this transaction. The current date autofills this field. */
  trandate: Date;
  /** In the Reference # field, you can enter a reference number to track this transaction. */
  tranid?: string;
}





/** 
 * Work Order Issue Sublists Definition.
 * Record's Internal Id: workorderissue. 
 * Supports Custom Fields: true 
 */
export interface workorderissueSublists {
  
  /** component: Components */
  component: {
    /** componentinventorydetail - Inventory Detail  */
    componentinventorydetail: string;
    /** item -   */
    item: string;
    /** linenumber -   */
    linenumber: number;
    /** operationsequencenumber - Operation  */
    operationsequencenumber: string;
    /** quantity - Quantity  */
    quantity?: number;
    /** unitcost -   */
    unitcost: number;
  }
}





