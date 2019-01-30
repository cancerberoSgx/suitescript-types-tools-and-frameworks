// This file is auto generated, do not edit it. 




/** 
 * Item Fulfillment Fields Definition.
 * Record's Internal Id: itemfulfillment. 
 * Supports Custom Fields: true 
 */
export interface itemfulfillmentFields {
/**  */
  accessibilitytypefedex?: string;
  /** For SmartPost Returns, select Address Correction or Return Service for Presorted Standard SmartPost shipments. */
  ancillaryendorsementfedex?: string;
  /**  */
  b13afilingoptionfedex?: string;
  /**  */
  b13astatementdatafedex?: string;
  /**  */
  backupemailaddressups?: string;
  /**  */
  balance?: number;
  /**  */
  bookingconfirmationnumfedex?: string;
  /**  */
  certifiedmailusps?: boolean;
  /**  */
  consolidatebalance?: number;
  /**  */
  createddate?: Date;
  /** This field shows the sales order this fulfillment is created from.

Click the link to open the sales order. */
  createdfrom?: string;
  /**  */
  createdfromshipgroup?: number;
  /**  */
  customform: string;
  /** The customer or job associated with this transaction appears here.

For details on existing customers and projects, go to <_TABNAME=LIST_CUSTJOB_> > <_TASKCATEGORY=LIST_CUSTJOB_> > Customers. */
  entity?: string;
  /**  */
  exchangerate?: string;
  /**  */
  externalid?: string;
  /**  */
  haladdressfedex?: string;
  /**  */
  halphonefedex?: string;
  /** The handling cost automatically calculates depending on the shipping method you select in the Ship Via field.

To change the cost of handling, go to <_TABNAME=LIST_SHIPITEM_> > <_TASKCATEGORY=LIST_SHIPITEM_> > Shipping Items and select the shipping method with the handling cost you want to change. */
  handlingcost?: number;
  /**  */
  hazmattypefedex?: string;
  /**  */
  holdatlocationfedex?: boolean;
  /** Check this box to deliver to a location other than the loading area. */
  insidedeliveryfedex?: boolean;
  /** Check this box to pick up the order from a location other than the loading area. */
  insidepickupfedex?: boolean;
  /**  */
  isbasecurrency?: boolean;
  /**  */
  iscargoaircraftonlyfedex?: boolean;
  /**  */
  lastmodifieddate?: Date;
  /** Enter an optional memo with additional information about this fulfillment.
 
What you enter here can be used in searches and shows on reports. */
  memo?: string;
  /** Picked

        * If the Pick Date field is empty, it populates with the current date and the Transaction Date field is populated with the current date.

Packed

        * If the Pick Date field is empty, it populates with the current date.
        * If the Pack Date field is empty, it populates with the current date and the Transaction Date field is populated with the current date.

Shipped

        * If the Pick Date field is empty, it populates with the current date.
        * If the Pack Date field is empty, it populates with the current date.
        * If the Ship Date field is empty, it populates with the current date and the Transaction Date field is populated with the current date.
        * The Accounting Period field is required and it is populated based on the Ship Date. */
  packeddate?: Date;
  /** Picked

        * If the Pick Date field is empty, it populates with the current date and the Transaction Date field is populated with the current date.

Packed

        * If the Pick Date field is empty, it populates with the current date.
        * If the Pack Date field is empty, it populates with the current date and the Transaction Date field is populated with the current date.

Shipped

        * If the Pick Date field is empty, it populates with the current date.
        * If the Pack Date field is empty, it populates with the current date.
        * If the Ship Date field is empty, it populates with the current date and the Transaction Date field is populated with the current date.
        * The Accounting Period field is required and it is populated based on the Ship Date. */
  pickeddate?: Date;
  /** Select the period you want to post this transaction to.

If a period is closed, you cannot post to that period. */
  postingperiod?: string;
  /** Shows the fulfillment request that the item fulfillment originated from.

Click the fulfillment number to open the fulfillment request. */
  requestedby?: string;
  /**  */
  shipaddress?: string;
  /** Select the address to ship the order to. The full address displays in the Address field.
 
    * Select New to enter a new shipping address to be used for this transaction and saved with the associated entity record.
    * Select Custom to enter a new shipping address to be used for this transaction only (and not saved with the associated entity record).
    * Click the Edit icon to edit an existing shipping address. */
  shipaddresslist?: string;
  /**  */
  shipcompany?: string;
  /**  */
  shipcountry?: string;
  /** Check this box if this address is not a business.

This helps return accurate rates from UPS and FedEx. */
  shipisresidential?: boolean;
  /**  */
  shipmentprocessed?: boolean;
  /** This field totals the weight for all packages on this order in pounds. */
  shipmentweightfedex?: string;
  /** This field displays the total weight of all individual packages for this order. */
  shipmentweightups?: string;
  /**  */
  shipmentweightusps?: string;
  /** Select a shipping method for this order.

If you automatically charge for shipping, the shipping amount is entered in the shipping costs field. To automatically charge for shipping, go to <_TABNAME=ADMI_SHIPPING_> > <_TASKCATEGORY=ADMI_SHIPPING_> > Shipping. Check the Charge for Shipping box and click Save. You must also set up the charge details of your shipping items.

To add or edit shipping items, go to <_TABNAME=LIST_SHIPITEM_> > <_TASKCATEGORY=LIST_SHIPITEM_> > Shipping Items. */
  shipmethod?: string;
  /**  */
  shipoverride?: boolean;
  /** Picked

        * If the Pick Date field is empty, it populates with the current date and the Transaction Date field is populated with the current date.

Packed

        * If the Pick Date field is empty, it populates with the current date.
        * If the Pack Date field is empty, it populates with the current date and the Transaction Date field is populated with the current date.

Shipped

        * If the Pick Date field is empty, it populates with the current date.
        * If the Pack Date field is empty, it populates with the current date.
        * If the Ship Date field is empty, it populates with the current date and the Transaction Date field is populated with the current date.
        * The Accounting Period field is required and it is populated based on the Ship Date. */
  shippeddate?: Date;
  /**  */
  shipphone?: string;
  /**  */
  shippingaddress?: string;
  /** If you charge for shipping, enter the amount of shipping costs for this order here. */
  shippingcost?: number;
  /** Select Picked if you want to pick, pack and ship your orders as separate transactions.

Select Packed if you want to combine the steps to pick and pack orders. Orders will then need to be marked shipped.

Select Shipped if you want to combine the steps to pick, pack and ship orders. Orders will then need to be billed. */
  shipstatus?: string;
  /**  */
  status?: string;
  /**  */
  statusRef?: string;
  /**  */
  subsidiary?: string;
  /** This field is required for dutiable International Express shipments.

Note: This field is not applicable to International document Express shipments. */
  termsofsalefedex?: string;
  /** This is the date you are fulfilling this order. By fulfilling this order, you may be shipping items or completing services.

If you want to change the date, enter or click Pick to select a different date. */
  trandate: Date;
  /** NetSuite increases the largest fulfillment number by one.

If you wish, you can type another number. The next fulfillment number will revert to the standard pattern. */
  tranid?: string;
}





/** 
 * Item Fulfillment Sublists Definition.
 * Record's Internal Id: itemfulfillment. 
 * Supports Custom Fields: true 
 */
export interface itemfulfillmentSublists {
  
  /** accountingbookdetail: Accounting Books */
  accountingbookdetail: {
    /** accountingbook - Secondary Book  */
    accountingbook: string;
    /** exchangerate - Exchange Rate  */
    exchangerate?: number;
  }

  /** item: Items */
  item: {
    /** class - Class  */
    class: string;
    /** countryofmanufacture -   */
    countryofmanufacture: string;
    /** createdpo -   */
    createdpo: string;
    /** department - Department  */
    department: string;
    /** excludefromraterequest - Exclude Item from Rate Request  */
    excludefromraterequest: boolean;
    /** inventorydetail - Inventory Detail  */
    inventorydetail: string;
    /** item -   */
    item: string;
    /** itemdescription - Description  */
    itemdescription: string;
    /** itemkey - Item  */
    itemkey: string;
    /** itemname - Item  */
    itemname: string;
    /** itemreceive - Fulfill  */
    itemreceive: boolean;
    /** itemtype -   */
    itemtype: string;
    /** line -   */
    line: string;
    /** location - Location  */
    location?: string;
    /** manufactureraddr1 -   */
    manufactureraddr1: string;
    /** manufacturercity -   */
    manufacturercity: string;
    /** manufacturerstate -   */
    manufacturerstate: string;
    /** manufacturertariff -   */
    manufacturertariff: string;
    /** manufacturertaxid -   */
    manufacturertaxid: string;
    /** manufacturerzip -   */
    manufacturerzip: string;
    /** multmanufactureaddr -   */
    multmanufactureaddr: string;
    /** onhand - On Hand  */
    onhand: number;
    /** options - Options  */
    options: string;
    /** preferencecriterion -   */
    preferencecriterion: string;
    /** producer -   */
    producer: string;
    /** quantity - Quantity  */
    quantity: string;
    /** quantityremaining -   */
    quantityremaining: number;
    /** schedulebcode -   */
    schedulebcode: string;
    /** schedulebnumber -   */
    schedulebnumber: string;
    /** schedulebquantity -   */
    schedulebquantity: string;
    /** sitemname - Item  */
    sitemname: string;
    /** units -   */
    units: string;
  }

  /** packageFedex: Packages */
  packageFedex: {
    /** admpackagetypefedex - Admissibility Package Type  */
    admpackagetypefedex: string;
    /** alcoholrecipienttypefedex - Alcohol Recipient Type  */
    alcoholrecipienttypefedex: string;
    /** authorizationnumberfedex - Authorization Number  */
    authorizationnumberfedex: string;
    /** codfreighttypefedex - Freight Charge Added to COD Amount  */
    codfreighttypefedex: string;
    /** codmethodfedex - C.O.D. Method  */
    codmethodfedex: string;
    /** codotherchargefedex - C.O.D. Other Charge  */
    codotherchargefedex: number;
    /** custompackagefedex - Your Packaging  */
    custompackagefedex: string;
    /** dryiceweightfedex - Dry Ice Weight  */
    dryiceweightfedex: string;
    /** isalcoholfedex - Alcohol  */
    isalcoholfedex: boolean;
    /** isnonhazlithiumfedex - Non-Hazardous Lithium Batteries  */
    isnonhazlithiumfedex: boolean;
  }
}





