// This file is auto generated, do not edit it. 




/** 
 * Intercompany Transfer Order Fields Definition.
 * Record's Internal Id: intercompanytransferorder. 
 * Supports Custom Fields: false 
 */
export interface intercompanytransferorderFields {
/** This field displays shipping costs associated with this transfer order. */
  altshippingcost?: number;
  /** Select a class to associate with this transaction.

To create a new class, select New.

For details on existing classes, go to <_TABNAME=LIST_CLASS_> > <_TASKCATEGORY=LIST_CLASS_> > Classes. */
  class?: string;
  /**  */
  createddate?: Date;
  /**  */
  createdfrom?: string;
  /**  */
  currency?: string;
  /**  */
  currencyname?: string;
  /**  */
  currencysymbol?: string;
  /**  */
  customform: string;
  /** Select a department to associate with this transaction.

To create a new department, select New.

For details on existing departments, go to <_TABNAME=LIST_DEPARTMENT_> > <_TASKCATEGORY=LIST_DEPARTMENT_> > Departments. */
  department?: string;
  /** Select an employee to associate with this transfer order.

Select New to add a new employee.

Go to <_TABNAME=LIST_EMPLOYEE_> > <_TASKCATEGORY=LIST_EMPLOYEE_> > Employees for details about existing employees. */
  employee?: string;
  /**  */
  entity?: string;
  /**  */
  exchangerate: number;
  /**  */
  externalid?: string;
  /**  */
  firmed?: boolean;
  /**  */
  fob?: string;
  /** For transfer orders and intercompany transfer orders, use the following default international commercial terms (incoterms) to define when the transfer of ownership occurs for items being transferred between locations:
    * Ex Work (EXW) &#x2013; inventory ownership is transferred at the shipping point
    * Delivered at Place (DAP) &#x2013; inventory ownership is transferred at the destination point

Be aware that the incoterm you select impacts accounting and inventory information.

When creating a transfer order, you can only select EXW or DAP. After the order status is pending approval or pending fulfillment, you can choose another incoterm. */
  incoterm: string;
  /**  */
  isbasecurrency?: boolean;
  /**  */
  lastmodifieddate?: Date;
  /**  */
  linkedtrackingnumbers?: string;
  /** In the From Location field, select the originating location for the transfer. Items are taken out of this location and the inventory count for the item is decreased at the location when the order is fulfilled.

You are not required to enter a source location to enter a transfer order, but you must choose a source location to approve and fulfill the transfer order.

To create a new location, select New.

For details on existing locations, go to <_TABNAME=LIST_LOCATION_> > <_TASKCATEGORY=LIST_LOCATION_> > Locations. */
  location?: string;
  /** Enter a memo to identify this transfer order.

When you use the Search Transactions feature, you can search for specific words and phrases in the Memo field. */
  memo?: string;
  /**  */
  nexus?: string;
  /**  */
  oldrevenuecommitment?: string;
  /** Select Pending Approval to route this order through the approval process before it is fulfilled.

Select Pending Fulfillment to skip the approval process. */
  orderstatus: string;
  /**  */
  otherrefnum?: string;
  /**  */
  returntrackingnumbers?: string;
  /**  */
  shipaddress?: string;
  /** Select the appropriate shipping address for this transaction. Select New to enter a new shipping address. */
  shipaddresslist?: string;
  /** Check this box if you want to ship this order when there are enough items available to fully fulfill the orders.

When fulfilling orders in bulk, you can filter the list to include those orders marked Ship Complete that can be completely fulfilled by selecting Respect Ship Complete in the Filter By field. */
  shipcomplete?: boolean;
  /** The date defaults to show the current date. You can type or pick another shipping date for this order. */
  shipdate?: Date;
  /**  */
  shipisresidential?: string;
  /** Select a shipping method for this order.

If you automatically charge for shipping, the shipping amount is entered in the shipping costs field. To automatically charge for shipping, go to <_TABNAME=ADMI_SHIPPING_> > <_TASKCATEGORY=ADMI_SHIPPING_> > Shipping and check the Charge for Shipping box. Click Submit. You must also set up the charge details of your shipping items.

To add or edit shipping items, go to Lists > Accounting > Shipping Items. */
  shipmethod?: string;
  /**  */
  shipoverride?: string;
  /**  */
  shippingaddress?: string;
  /** The shipping cost automatically calculates depending on the shipping method you select in the Ship Via field above.

To change the cost of a shipping method, go to <_TABNAME=LIST_SHIPITEM_> > <_TASKCATEGORY=LIST_SHIPITEM_> > Shipping Items and select the shipping method you want to change.

If you use UPS Real-Time rates and a package is over 150lbs, the package is charged as multiple packages equal to or less than 150lbs. */
  shippingcost?: number;
  /**  */
  shippingcostoverridden?: string;
  /**  */
  source?: string;
  /**  */
  status?: string;
  /**  */
  statusRef?: string;
  /** Select the subsidiary where the items will be taken from. The selection you make in this field determines which locations are available to be selected in the From Location field.

For example, if you select Subsidiary B here, you can choose a source location from a list of locations limited to only those associated with Subsidiary B. */
  subsidiary?: string;
  /** As you add items, the total shows in this field. */
  subtotal?: number;
  /** Select the subsidiary where the items are to be received. The selection you make in this field determines which locations are available to be selected in the To Location field.

For example, if you select Subsidiary B here, you can choose a destination location from a list of locations limited to only those associated with Subsidiary B. */
  tosubsidiary?: string;
  /** This field shows the total amount associated with this order, including shipping and handling costs. */
  total?: number;
  /**  */
  trackingnumbers?: string;
  /** The current date autofills for this transfer order.

You can select or enter a different date. */
  trandate: Date;
  /** Enter the number of this transfer order.

If you use autogenerated numbering, the next order number in the sequence shows here. You can enter another number if you choose. */
  tranid?: string;
  /**  */
  transactionnumber?: string;
  /** In the Destination Location field, select the receiving location for the transfer. The inventory count and asset value for the item is increased at this location when the items are received.

You are required to enter a destination location to enter or approve a transfer order.

The Ship To Address of the transfer order defaults to the address of the destination location.

To create a new location, select New.

For details on existing locations, go to <_TABNAME=LIST_LOCATION_> > <_TASKCATEGORY=LIST_LOCATION_> > Locations. */
  transferlocation: string;
  /**  */
  updatecurrency?: string;
  /** Check this box to use the transfer price as a declared shipping value for reference only. For example, for insurance or international shipping.

    * The transfer price is not a charge for the destination location.
    * The transfer price does not affect inventory costing on transactions.
    * The transfer price defaults to show the value in the Transfer Price field of item records.
    * Partial fulfillment and receipt of transfer orders is allowed, but you cannot receive more than you have fulfilled on any date. For example, if you have fulfilled 10 widgets out of 20 on a transfer order, you cannot receive 12 widgets on that order.

Clear this box to use the transfer price shown on the transfer order as the item cost on the item receipt.
Important: If no transfer price is entered on the transfer order, no cost is recorded on the item receipt.

    * Any difference between the actual cost and the transfer price posts to a Gain/Loss account when the item is shipped.
    * The transfer price and the Gain/Loss account are defined on each item record.
    * The transfer price defaults to show the value in the Transfer Price field of item records.

If you use approval routing, this setting can be changed on a transfer order as long as the transfer order is not yet approved. Once the transfer order is approved, this setting cannot be changed. */
  useitemcostastransfercost?: boolean;
}





/** 
 * Intercompany Transfer Order Sublists Definition.
 * Record's Internal Id: intercompanytransferorder. 
 * Supports Custom Fields: false 
 */
export interface intercompanytransferorderSublists {
  
  /** accountingbookdetail: Accounting Books */
  accountingbookdetail: {
    /** accountingbook - Secondary Book  */
    accountingbook: string;
    /** exchangerate - Exchange Rate  */
    exchangerate?: number;
  }

  /** item: Items */
  item: {
    /** amount - Amount  */
    amount: number;
    /** billvariancestatus -   */
    billvariancestatus: string;
    /** catchupperiod -   */
    catchupperiod: string;
    /** commitinventory - Commit  */
    commitinventory: string;
    /** daysbeforeexpiration -   */
    daysbeforeexpiration: string;
    /** deferrevrec -   */
    deferrevrec: boolean;
    /** description - Description  */
    description: string;
    /** expectedreceiptdate - Expected Receipt Date  */
    expectedreceiptdate: Date;
    /** expectedshipdate - Expected Ship Date  */
    expectedshipdate: Date;
    /** id -   */
    id: string;
    /** inventorydetail - Inventory Detail  */
    inventorydetail: string;
    /** isclosed - Closed  */
    isclosed: boolean;
    /** isvsoebundle -   */
    isvsoebundle: string;
    /** item - Item  */
    item?: string;
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
    /** options - Options  */
    options: string;
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
    /** quantityfulfilled - Fulfilled  */
    quantityfulfilled: number;
    /** quantityreceived - Received  */
    quantityreceived: number;
    /** rate - Transfer Price  */
    rate: number;
    /** units - Units  */
    units: string;
  }
}





