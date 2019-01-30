// This file is auto generated, do not edit it. 




/** 
 * Blanket Purchase Order Fields Definition.
 * Record's Internal Id: blanketpurchaseorder. 
 * Supports Custom Fields: true 
 */
export interface blanketpurchaseorderFields {
/**  */
  billedamount?: number;
  /**  */
  billinginstructions?: string;
  /**  */
  carrier?: string;
  /**  */
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
  customform?: string;
  /**  */
  department?: string;
  /**  */
  effectivitybasedon: string;
  /**  */
  employee?: string;
  /**  */
  enddate?: Date;
  /**  */
  entity: string;
  /**  */
  entitynexus?: string;
  /**  */
  exchangerate: number;
  /**  */
  externalid?: string;
  /**  */
  incoterm?: string;
  /**  */
  isbasecurrency?: boolean;
  /**  */
  lastmodifieddate?: Date;
  /**  */
  location?: string;
  /**  */
  maximumamount?: string;
  /**  */
  memo?: string;
  /**  */
  nexus?: string;
  /**  */
  oldrevenuecommitment?: string;
  /**  */
  orderstatus?: string;
  /**  */
  otherrefnum?: string;
  /**  */
  packinglistinstructions?: string;
  /**  */
  productlabelinginstructions?: string;
  /**  */
  purchasedamount?: number;
  /**  */
  purchaseorderinstructions?: string;
  /**  */
  receivedamount?: number;
  /**  */
  source?: string;
  /**  */
  startdate: Date;
  /**  */
  status?: string;
  /**  */
  statusRef?: string;
  /**  */
  subsidiary?: string;
  /**  */
  terms?: string;
  /**  */
  trandate: Date;
  /**  */
  tranid?: string;
  /**  */
  updatecurrency?: string;
}





/** 
 * Blanket Purchase Order Sublists Definition.
 * Record's Internal Id: blanketpurchaseorder. 
 * Supports Custom Fields: true 
 */
export interface blanketpurchaseorderSublists {
  
  /** accountingbookdetail: Accounting Books */
  accountingbookdetail: {
    /** accountingbook - Secondary Book  */
    accountingbook: string;
    /** exchangerate - Exchange Rate  */
    exchangerate?: number;
  }

  /** expense: Expenses */
  expense: {
    /** account - Account  */
    account?: string;
    /** amount - Amount  */
    amount?: number;
    /** amountordered - Amount Ordered  */
    amountordered: number;
    /** category - Category  */
    category: string;
    /** class - Class  */
    class: string;
    /** department - Department  */
    department: string;
    /** line -   */
    line: string;
    /** location - Location  */
    location: string;
    /** memo - Memo  */
    memo: string;
    /** orderschedule - Schedule  */
    orderschedule: string;
  }

  /** item: Item */
  item: {
    /** amount - Amount  */
    amount: number;
    /** billvariancestatus -   */
    billvariancestatus: string;
    /** catchupperiod -   */
    catchupperiod: string;
    /** class - Class  */
    class: string;
    /** deferrevrec -   */
    deferrevrec: boolean;
    /** department - Department  */
    department: string;
    /** description - Description  */
    description: string;
    /** id -   */
    id: string;
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
    /** location - Location  */
    location: string;
    /** matrixtype -   */
    matrixtype: string;
    /** options -   */
    options: string;
    /** orderschedule - Schedule  */
    orderschedule: string;
    /** quantity - Quantity  */
    quantity: number;
    /** quantityordered - Quantity Ordered  */
    quantityordered: number;
    /** rate - Rate  */
    rate: string;
    /** rateschedule -   */
    rateschedule: string;
    /** units - Units  */
    units: string;
    /** vendorname - Vendor Name  */
    vendorname: string;
  }

  /** links: Purchase Orders */
  links: {
    /** id -   */
    id: string;
  }
}





