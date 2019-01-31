// This file is auto generated, do not edit it. 




/** 
 * Work Order Fields Definition.
 * Record's Internal Id: workorder. 
 * Supports Custom Fields: true 
 */
export interface workorderFields {
/** Select the Assembly you need to build.

After an item is selected, the assembly components are displayed on the Items subtab.
This field cannot be changed after an assembly build is associated with this work order. */
  assemblyitem: string;
  /** Check the Auto-Calculate Lag box to automatically calculate the optimal lag amount, which is the shortest possible lead time for each work order. */
  autocalculatelag?: boolean;
  /** Select the Bill of Materials (BOM) you want to associate with this assembly. */
  billofmaterials?: string;
  /** Select a Bill of Materials Revision to associate with this work order.
A BOM Revision displays BOM updates and details throughout the product lifecycle. */
  billofmaterialsrevision?: string;
  /** Select a Class if you track them.
The selected class carries over to the assembly build. */
  class?: string;
  /**  */
  createddate?: Date;
  /** The Created From field displays the number of the sales order associated with this work order, if any.

Note: The Created From field is not available if you are creating a stand-alone work order on the Enter Work Orders page. The Created From field appears only on existing work orders created from sales orders using one of these methods:
    * By clicking on the Work Ord. link on the line item in the sales order
    * By automatic work order creation from a sales order when the Create WO field is marked upon saving the sales order */
  createdfrom?: string;
  /**  */
  currency?: string;
  /** In the Custom Form list, select the form to use with this work order. */
  customform: string;
  /** Select a Department to associate with the assemblies on this work order.
This selection is carried over to the assembly build.

Click New to enter a new department. */
  department?: string;
  /** In the Production End Date field, enter the date you expect to complete assembly production.

This field defaults to show the transaction date plus lead time. */
  enddate?: Date;
  /** Select a Customer to associate with this work order. */
  entity?: string;
  /**  */
  entitynexus?: string;
  /**  */
  exchangerate?: string;
  /** Check the Mark Sub-Assemblies Phantom box to build member items that are also assemblies used to complete the work order.
Sub-assembly components are displayed on the Items subtab.

To learn more, see Work Orders and Sub-Assemblies */
  expandassembly?: boolean;
  /**  */
  externalid?: string;
  /** Check the Firmed box to save the the order and process it when the supply planning engine runs. */
  firmed?: boolean;
  /** Select a job if the assemblies on this work order are for a particular job. Click the Open icon to open a list of jobs. */
  job?: string;
  /**  */
  lastmodifieddate?: Date;
  /** Select a Location to display only work orders for that location.
Select All to display work orders for all locations.

If you use Multi-Location Inventory, the selected location is the one that component inventory items are committed from. */
  location?: string;
  /** Optionally, enter a Memo for this work order.
You can search for the memo text to find this work order. */
  memo?: string;
  /**  */
  nexus?: string;
  /** Select the work order Status.
For example, In-Process or Built. */
  orderstatus?: string;
  /** Enter the Quantity of assembly items you want to create.
This can be a fractional number. */
  quantity: string;
  /** For work orders, NetSuite automatically populates the effective revision based on the effective date. If you change the revision selected on the work order, then NetSuite changes the components on the top level assembly based on the revision selected.

If you change the revision selected on the work order and the Build Subassembly box is checked, then top-level components will change based on the revision selected and the lower level components are determined based on the effective date. */
  revision?: string;
  /**  */
  revisionmemo?: string;
  /**  */
  salesgroup?: string;
  /**  */
  salesrep?: string;
  /** Select a Scheduling Method:

Forward Scheduling - to set production start date and calculate the time, materials, and resources required to complete all necessary operations to finish the task.

Backward Scheduling to set the production end date, which is the date you need to have the completed items. NetSuite calculates the time, materials, and resources required to complete all necessary operations. */
  schedulingmethod: string;
  /**  */
  source?: string;
  /** In the Production Start Date field, enter the date you expect to begin assembly production. This field defaults to today's date.

    * Demand Planning bases component demand on the production start date.
    * Manufacturing Routing production start date depends on whether NetSuite uses forward or backward scheduling to calculate production requirements.

To learn more, see Production Scheduling Methods Overview. */
  startdate?: Date;
  /**  */
  status?: string;
  /**  */
  statusRef?: string;
  /** If you use OneWorld, select a subsidiary. */
  subsidiary: string;
  /**  */
  syncpartnerteams?: boolean;
  /**  */
  syncsalesteams?: boolean;
  /** NetSuite displays today's Date as the default work order date.
You can enter or select another date. */
  trandate: Date;
  /** NetSuite increases the largest work order number by one.

   1. To enter another order number, go to Setup > Company > Setup Tasks > Auto-Generated Numbers.
   2. On the Transactions subtab, next to Work Order, check the Allow Override box.
   3. Click Save.
      The next order number will revert to the standard pattern. */
  tranid?: string;
  /** The Units field displays the units of the component used in the parent assembly. */
  units?: string;
}





/** 
 * Work Order Sublists Definition.
 * Record's Internal Id: workorder. 
 * Supports Custom Fields: true 
 */
export interface workorderSublists {
  
  /** accountingbookdetail: Accounting Books */
  accountingbookdetail: {
    /** accountingbook - Secondary Book  */
    accountingbook: string;
    /** exchangerate - Exchange Rate  */
    exchangerate?: number;
  }

  /** item: Items */
  item: {
    /** billvariancestatus -   */
    billvariancestatus: string;
    /** catchupperiod -   */
    catchupperiod: string;
    /** commitinventory - Commit  */
    commitinventory: string;
    /** createpo - Create PO  */
    createpo: string;
    /** createwo - Create WO  */
    createwo: boolean;
    /** daysbeforeexpiration -   */
    daysbeforeexpiration: string;
    /** deferrevrec -   */
    deferrevrec: boolean;
    /** description - Description  */
    description: string;
    /** id -   */
    id: string;
    /** inventorydetail - Inventory Detail  */
    inventorydetail: string;
    /** isclosed -   */
    isclosed: string;
    /** isvsoebundle -   */
    isvsoebundle: string;
    /** item - Item  */
    item?: string;
    /** itemid -   */
    itemid: string;
    /** itemsource - Item Source  */
    itemsource: string;
    /** itemsubtype -   */
    itemsubtype: string;
    /** itemtype -   */
    itemtype: string;
    /** line -   */
    line: string;
    /** linenumber -   */
    linenumber: number;
    /** matrixtype -   */
    matrixtype: string;
    /** operationsequencenumber - Operation Sequence Number  */
    operationsequencenumber: number;
    /** options - Options  */
    options: string;
    /** orderpriority - Order Priority  */
    orderpriority: number;
    /** plannedissuedate - Planned Component Issue Date  */
    plannedissuedate: Date;
    /** porate -   */
    porate: number;
    /** povendor -   */
    povendor: string;
    /** printitems -   */
    printitems: string;
    /** quantity - Quantity  */
    quantity: number;
    /** quantityavailable -   */
    quantityavailable: number;
    /** quantitybackordered - Back Ordered  */
    quantitybackordered: number;
    /** quantitycommitted - Committed  */
    quantitycommitted: number;
    /** quantityfulfilled - Used in Build  */
    quantityfulfilled: number;
    /** rate -   */
    rate: string;
    /** rateschedule -   */
    rateschedule: string;
    /** units - Units  */
    units: string;
  }

  /** partners: Partners */
  partners: {
    /** contribution - Contribution %  */
    contribution?: number;
    /** id -   */
    id: string;
    /** isprimary - Primary  */
    isprimary: boolean;
    /** partner - Partner  */
    partner?: string;
    /** partnerrole - Partner Role  */
    partnerrole: string;
    /** transaction -   */
    transaction: string;
  }

  /** salesteam: Sales Team */
  salesteam: {
    /** contribution - Contribution %  */
    contribution?: number;
    /** employee - Employee  */
    employee?: string;
    /** id -   */
    id: string;
    /** isprimary - Primary  */
    isprimary: boolean;
    /** issalesrep -   */
    issalesrep: string;
    /** salesrole - Sales Role  */
    salesrole?: string;
    /** transaction -   */
    transaction: string;
  }
}





