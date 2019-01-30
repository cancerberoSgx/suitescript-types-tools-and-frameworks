// This file is auto generated, do not edit it. 




/** 
 * Purchase Contract Fields Definition.
 * Record's Internal Id: purchasecontract. 
 * Supports Custom Fields: true 
 */
export interface purchasecontractFields {
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
  minimumamount?: string;
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
  /**  */
  updateitemvendor?: boolean;
}





/** 
 * Purchase Contract Sublists Definition.
 * Record's Internal Id: purchasecontract. 
 * Supports Custom Fields: true 
 */
export interface purchasecontractSublists {
  
  /** accountingbookdetail: Accounting Books */
  accountingbookdetail: {
    /** accountingbook - Secondary Book  */
    accountingbook: string;
    /** exchangerate - Exchange Rate  */
    exchangerate?: number;
  }

  /** discount: Discount */
  discount: {
    /** amountordered - Amount Ordered  */
    amountordered: string;
    /** fromamount - From Amount  */
    fromamount?: number;
    /** id -   */
    id: number;
    /** memo - Memo  */
    memo: string;
    /** percent - Percent Discount  */
    percent?: number;
  }

  /** item: Item */
  item: {
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
    /** itempricing - Additional Pricing  */
    itempricing: string;
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
    /** quantity -   */
    quantity: number;
    /** rate - Base Rate  */
    rate?: string;
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





