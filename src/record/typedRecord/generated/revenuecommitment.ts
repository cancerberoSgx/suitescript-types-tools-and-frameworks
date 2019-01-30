// This file is auto generated, do not edit it. 




/** 
 * Revenue Commitment Fields Definition.
 * Record's Internal Id: revenuecommitment. 
 * Supports Custom Fields: true 
 */
export interface revenuecommitmentFields {
/**  */
  accountingbook?: string;
  /**  */
  billaddress?: string;
  /**  */
  billaddresslist?: string;
  /**  */
  billingaddress?: string;
  /**  */
  billisresidential?: string;
  /**  */
  class?: string;
  /**  */
  couponcode?: string;
  /**  */
  createddate?: Date;
  /**  */
  createdfrom?: string;
  /**  */
  currency: string;
  /**  */
  currencyname?: string;
  /**  */
  currencysymbol?: string;
  /**  */
  customform: string;
  /**  */
  deferredrevenue?: number;
  /**  */
  department?: string;
  /**  */
  discountamount?: number;
  /**  */
  discountdate?: Date;
  /**  */
  discountitem?: string;
  /**  */
  discountrate?: string;
  /**  */
  discounttotal?: number;
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
  fob?: string;
  /**  */
  isbasecurrency?: boolean;
  /**  */
  job?: string;
  /**  */
  lastmodifieddate?: Date;
  /**  */
  linkedtrackingnumbers?: string;
  /**  */
  location?: string;
  /**  */
  memo?: string;
  /**  */
  muccpromocodeinstance?: string;
  /**  */
  nexus?: string;
  /**  */
  opportunity?: string;
  /**  */
  otherrefnum?: string;
  /**  */
  partner?: string;
  /**  */
  postingperiod: string;
  /**  */
  promocode?: string;
  /**  */
  promocodepluginimpl?: string;
  /**  */
  recognizedrevenue?: number;
  /**  */
  returntrackingnumbers?: string;
  /**  */
  revenuestatus?: string;
  /**  */
  salesgroup?: string;
  /**  */
  salesrep?: string;
  /**  */
  shipaddress?: string;
  /**  */
  shipaddresslist?: string;
  /**  */
  shipisresidential?: string;
  /**  */
  shipoverride?: string;
  /**  */
  shippingaddress?: string;
  /**  */
  source?: string;
  /**  */
  startdate?: Date;
  /**  */
  subsidiary?: string;
  /**  */
  subtotal?: number;
  /**  */
  syncpartnerteams?: boolean;
  /**  */
  syncsalesteams?: boolean;
  /**  */
  total?: number;
  /**  */
  trackingnumbers?: string;
  /**  */
  trandate: Date;
  /**  */
  tranid?: string;
  /**  */
  tranisvsoebundle?: boolean;
  /**  */
  vsoeautocalc?: boolean;
}





/** 
 * Revenue Commitment Sublists Definition.
 * Record's Internal Id: revenuecommitment. 
 * Supports Custom Fields: true 
 */
export interface revenuecommitmentSublists {
  
  /** accountingbookdetail: Accounting Books */
  accountingbookdetail: {
    /** accountingbook - Secondary Book  */
    accountingbook: string;
    /** exchangerate - Exchange Rate  */
    exchangerate?: number;
  }

  /** item: Items */
  item: {
    /** amortizationperiod -   */
    amortizationperiod: string;
    /** amortizationtype -   */
    amortizationtype: string;
    /** amount - Amount  */
    amount: number;
    /** billvariancestatus -   */
    billvariancestatus: string;
    /** catchupperiod -   */
    catchupperiod: string;
    /** daysbeforeexpiration -   */
    daysbeforeexpiration: string;
    /** deferrevrec -   */
    deferrevrec: boolean;
    /** description - Description  */
    description: string;
    /** giftcertfrom - From  */
    giftcertfrom: string;
    /** giftcertmessage - Gift Message  */
    giftcertmessage: string;
    /** giftcertrecipientemail - Recipient Email  */
    giftcertrecipientemail: string;
    /** giftcertrecipientname - Recipient Name  */
    giftcertrecipientname: string;
    /** id -   */
    id: string;
    /** inventorydetail - Inventory Detail  */
    inventorydetail: string;
    /** isvsoebundle -   */
    isvsoebundle: string;
    /** item - Item  */
    item?: string;
    /** itemsubtype -   */
    itemsubtype: string;
    /** itemtype -   */
    itemtype: string;
    /** job - Project  */
    job: string;
    /** licensecode - License Code  */
    licensecode: string;
    /** line -   */
    line: string;
    /** linenumber -   */
    linenumber: number;
    /** matrixtype -   */
    matrixtype: string;
    /** options - Options  */
    options: string;
    /** price - Price Level  */
    price: string;
    /** printitems -   */
    printitems: string;
    /** quantity - Quantity  */
    quantity: number;
    /** quantityavailable -   */
    quantityavailable: number;
    /** rate - Unit Price  */
    rate: string;
    /** rateschedule -   */
    rateschedule: string;
    /** revrecenddate - Rev. Rec. End Date  */
    revrecenddate: Date;
    /** revrecschedule - Rev. Rec. Schedule  */
    revrecschedule: string;
    /** revrecstartdate - Rev. Rec. Start Date  */
    revrecstartdate: Date;
    /** units - Units  */
    units: string;
    /** vsoeallocation - Allocation Amount  */
    vsoeallocation: number;
    /** vsoeamount - Calculated Amount  */
    vsoeamount: number;
    /** vsoedeferral - Deferral  */
    vsoedeferral: string;
    /** vsoedelivered - Delivered  */
    vsoedelivered: boolean;
    /** vsoeisestimate - Estimate  */
    vsoeisestimate: boolean;
    /** vsoepermitdiscount - Permit Discount  */
    vsoepermitdiscount: string;
    /** vsoeprice - Allocation Price  */
    vsoeprice: number;
    /** vsoesopgroup - Allocation Type  */
    vsoesopgroup: string;
  }

  /** partners: T */
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





