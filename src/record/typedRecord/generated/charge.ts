// This file is auto generated, do not edit it. 




/** 
 * Charge Fields Definition.
 * Record's Internal Id: charge. 
 * Supports Custom Fields: true 
 */
export interface chargeFields {
/** The charge amount is shown here.

The charge amount is calculated as charge rate multiplied by charge quantity. You can manually override the charge amount. */
  amount: string;
  /**  */
  billingaccount?: string;
  /** The service item associated with this charge is shown here.

For project charges, the service item is used to group charges on invoices.

The service item's price is only used to determine the rate if the charge rule used to generate the charge explicitly bases the charge rate on the service item. */
  billingitem?: string;
  /** Choose the project or customer you are billing this charge to. */
  billto: string;
  /** This is the date this charge was generated or created. */
  chargedate: Date;
  /** This field shows the type of rule or process used to generate this charge. */
  chargetype: string;
  /** The class associated with this charge is shown here. */
  class?: string;
  /** This is the date this charge was created either manually or by a charge run. */
  createddate?: Date;
  /** The currency of this charge is shown here. */
  currency?: string;
  /** The department associated with this charge is shown here. */
  department?: string;
  /** Enter a description of this charge. */
  description?: string;
  /** If the sales order has been billed, the invoice is shown here.

Charges that have been billed cannot be edited. */
  invoice?: string;
  /** If this charge has been billed, the invoice line containing this charge is shown here. */
  invoiceline?: string;
  /** The location associated with this charge is shown here. */
  location?: string;
  /**  */
  projecttask?: string;
  /** The quantity for this charge is shown here.

The quantity for a project charge is set to 1. */
  quantity: number;
  /** The rate for this charge is shown here.

The charge rates for project charges are determined by charge rules. */
  rate: string;
  /** If this is a project charge, the charge rule used to generate this charge is shown here. */
  rule?: string;
  /**  */
  runid?: string;
  /** If this charge has been included on a sales order, the sales order is shown here. */
  salesorder?: string;
  /** If this charge has been included on a sales order, the sales order line is shown here. */
  salesorderline?: string;
  /** Choose the status of this charge:

    * Ready - a charge must have this status in order to be billed.
    * Hold - a charge is given this status if it needs to be approved before it is billed or otherwise processed.
    * Processed - a charge with this status has been billed. */
  stage: string;
  /**  */
  subscriptionline?: string;
  /** The project time record that is being charged by this transaction is shown here. */
  timerecord?: string;
  /**  */
  transaction?: string;
  /**  */
  transactionline?: string;
  /** This field shows the kind of charge this record represents.

Project charges uses include:

    * Actual - These are charges that can be billed when in the Ready stage.
    * Forecast - These charges represent predicted charge amounts over the entire project's life. */
  use?: string;
}





/** 
 * Charge Sublists Definition.
 * Record's Internal Id: charge. 
 * Supports Custom Fields: true 
 */
export interface chargeSublists {
  
}





