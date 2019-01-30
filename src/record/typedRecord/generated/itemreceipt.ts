// This file is auto generated, do not edit it. 




/** 
 * Item Receipt Fields Definition.
 * Record's Internal Id: itemreceipt. 
 * Supports Custom Fields: true 
 */
export interface itemreceiptFields {
/**  */
  class?: string;
  /**  */
  createddate?: Date;
  /** This field shows the purchase order this item receipt is created from.

Click the link to open the purchase order. */
  createdfrom?: string;
  /** The currency used on the purchase order for this receipt is shown here. */
  currency?: string;
  /** This customer's currency is shown in this field.

All currency amounts on this transaction are shown in this currency. */
  currencyname?: string;
  /**  */
  currencysymbol?: string;
  /**  */
  customform: string;
  /**  */
  department?: string;
  /** This field shows the name of the entity you are receiving items from. */
  entity?: string;
  /** The currency's exchange rate is shown in this field.
 
You can edit the exchange rate for this transaction only, or you can update the currency record with the exchange rate you enter here. */
  exchangerate: number;
  /**  */
  externalid?: string;
  /**  */
  inboundshipment?: string;
  /**  */
  isbasecurrency?: boolean;
  /**  */
  itemfulfillment?: string;
  /** If this box is checked, all new item receipts, credit card charges, vendor bills, and checks default to use landed cost per line. */
  landedcostperline?: boolean;
  /**  */
  lastmodifieddate?: Date;
  /**  */
  location?: string;
  /** Enter an optional reference memo for this receipt. Later, you can search for this receipt by text entered in the memo. */
  memo?: string;
  /** Select the period you want to post this transaction to.

If a period is closed, you cannot post to that period. */
  postingperiod?: string;
  /**  */
  subsidiary?: string;
  /** This is the date you are receiving this order.

If you want to change the date, enter or click Pick to select a different date. */
  trandate: Date;
  /** NetSuite increases the largest item receipt number by one. If you wish, you can type another number. The next item receipt number will revert to the standard pattern. */
  tranid?: string;
}





/** 
 * Item Receipt Sublists Definition.
 * Record's Internal Id: itemreceipt. 
 * Supports Custom Fields: true 
 */
export interface itemreceiptSublists {
  
  /** accountingbookdetail: Accounting Books */
  accountingbookdetail: {
    /** accountingbook - Secondary Book  */
    accountingbook: string;
    /** exchangerate - Exchange Rate  */
    exchangerate?: number;
  }

  /** expense: Expenses */
  expense: {
    /** amount - Amount  */
    amount: number;
    /** markreceived - Mark Received  */
    markreceived: boolean;
  }

  /** item: Items */
  item: {
    /** class - Class  */
    class: string;
    /** countryofmanufacture -   */
    countryofmanufacture: string;
    /** department - Department  */
    department: string;
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
    /** itemreceive - Receive  */
    itemreceive: boolean;
    /** itemtype -   */
    itemtype: string;
    /** line -   */
    line: string;
    /** location - To Location  */
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
    /** restock - Restock?  */
    restock: boolean;
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
}





