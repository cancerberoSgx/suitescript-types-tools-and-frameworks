// This file is auto generated, do not edit it. 




/** 
 * Work Order Completion Fields Definition.
 * Record's Internal Id: workordercompletion. 
 * Supports Custom Fields: true 
 */
export interface workordercompletionFields {
/** Optionally select a class if you track them. */
  class?: string;
  /** The quantity to be completed shows in this field. */
  completedquantity?: number;
  /**  */
  createddate?: Date;
  /**  */
  customform: string;
  /** Optionally select a department if you track them. */
  department?: string;
  /** Select a Starting Operation and Ending Operation to define a range. The default component quantity shows for components to be completed within the operation range. */
  endoperation: string;
  /**  */
  externalid?: string;
  /** After you have entered a quantity to build, click the Inventory Detail button to specify a bin, serial or lot number for the items being processed. */
  inventorydetail?: string;
  /** Check the Backflush box to enter the completions with backflush. Using backflush means that component consumption is recorded at the same time. Component consumption is based on the proportion designated on the original work order and the build quantity. */
  isbackflush?: boolean;
  /** In the Assembly field, select the assembly item you want to complete.
A completion can be entered only for assembly items on record.
To create new assembly item records, click Assembly at Lists > Accounting > Items > New . */
  item: string;
  /**  */
  lastmodifieddate?: Date;
  /** The location is displayed in this field. */
  location: string;
  /** This field displays the associated routing. */
  manufacturingrouting?: string;
  /** Optionally enter a memo for this transaction. You can search for text entered here to find the transaction later. */
  memo?: string;
  /** The quantity of assemblies from the work order displays in this field. */
  orderquantity?: number;
  /** Select a posting period for this transaction. */
  postingperiod?: string;
  /** Enter the number of assemblies to record as being completed. */
  quantity: number;
  /** Select the revision to be used for this completion. For details, click Help and read Revision Control BOM Management . */
  revision?: string;
  /**  */
  revisionmemo?: string;
  /** Enter the quantity to record as being scrapped. */
  scrapquantity?: number;
  /** Select a Starting Operation and Ending Operation to define a range. The default component quantity shows for components to be completed within the operation range. */
  startoperation: string;
  /**  */
  subsidiary?: string;
  /**  */
  taxperiod?: string;
  /** Unlike on an assembly build, the Projected Value field on a work order completion displays the cost of the assembly, not individual components (unless you use backflush.) */
  total?: number;
  /** Select or verify the date for this transaction. The current date autofills this field. */
  trandate: Date;
  /** In the Reference # field, you can enter a reference number to track this transaction. */
  tranid?: string;
  /**  */
  unitcost?: number;
  /** The unit of measure for this item is displayed in this field. */
  units?: string;
}





/** 
 * Work Order Completion Sublists Definition.
 * Record's Internal Id: workordercompletion. 
 * Supports Custom Fields: true 
 */
export interface workordercompletionSublists {
  
  /** accountingbookdetail: Accounting Books */
  accountingbookdetail: {
    /** accountingbook - Secondary Book  */
    accountingbook: string;
    /** exchangerate - Exchange Rate  */
    exchangerate?: number;
  }

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
    /** quantityper - Quantity Per  */
    quantityper: number;
    /** unitcost -   */
    unitcost: number;
  }

  /** operation: Operations */
  operation: {
    /** completedquantity - Completed Quantity  */
    completedquantity: number;
    /** inputquantity - Input Quantity  */
    inputquantity: number;
    /** laborresources - Labor Resources  */
    laborresources: number;
    /** laborruntime - Labor Run Time (Min)  */
    laborruntime: number;
    /** laborsetuptime - Labor Setup Time (Min)  */
    laborsetuptime: number;
    /** machineresources - Machine Resources  */
    machineresources: number;
    /** machineruntime - Machine Run Time (Min)  */
    machineruntime: number;
    /** machinesetuptime - Machine Setup Time (Min)  */
    machinesetuptime: number;
    /** operationname - Operation Name  */
    operationname: string;
    /** operationsequence - Operation Sequence  */
    operationsequence: number;
    /** predecessorcompletedquantity - Predecessor Completed Quantity  */
    predecessorcompletedquantity: number;
    /** quantityremaining - Quantity Remaining  */
    quantityremaining: number;
    /** recordsetup - Record Setup Time  */
    recordsetup: boolean;
    /** runrate -   */
    runrate: number;
    /** setuptime -   */
    setuptime: number;
    /** workcenter - Manufacturing Work Center  */
    workcenter: string;
  }
}





