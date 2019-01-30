// This file is auto generated, do not edit it. 




/** 
 * Other Charge Item Fields Definition.
 * Record's Internal Id: otherchargeitem. 
 * Supports Custom Fields: true 
 */
export interface otherchargeitemFields {
/**  */
  amortizationperiod?: number;
  /**  */
  amortizationtemplate?: string;
  /**  */
  availabletopartners?: boolean;
  /**  */
  billingschedule?: string;
  /**  */
  class?: string;
  /**  */
  contingentrevenuehandling?: boolean;
  /**  */
  cost?: number;
  /**  */
  costcategory: string;
  /**  */
  costestimate?: number;
  /**  */
  costestimatetype?: string;
  /**  */
  costunits?: string;
  /**  */
  createddate?: Date;
  /**  */
  createrevenueplanson?: string;
  /**  */
  currency?: string;
  /**  */
  customform?: string;
  /**  */
  deferralaccount?: string;
  /**  */
  deferredrevenueaccount?: string;
  /**  */
  deferrevrec?: boolean;
  /**  */
  department?: string;
  /**  */
  directrevenueposting?: boolean;
  /**  */
  displayname?: string;
  /**  */
  enforceminqtyinternally?: boolean;
  /**  */
  expenseaccount?: string;
  /**  */
  externalid?: string;
  /**  */
  generateaccruals?: boolean;
  /**  */
  includechildren?: boolean;
  /**  */
  incomeaccount?: string;
  /**  */
  intercodefrevaccount?: string;
  /**  */
  intercoexpenseaccount?: string;
  /**  */
  intercoincomeaccount?: string;
  /**  */
  isfulfillable?: boolean;
  /**  */
  isgcocompliant?: boolean;
  /**  */
  isinactive?: boolean;
  /**  */
  isonline?: boolean;
  /**  */
  issueproduct?: string;
  /**  */
  itemid: string;
  /**  */
  itemoptions?: string;
  /**  */
  itemrevenuecategory?: string;
  /**  */
  itemtype?: string;
  /**  */
  lastmodifieddate?: Date;
  /**  */
  location?: string;
  /**  */
  matrixitemnametemplate?: string;
  /**  */
  matrixtype?: string;
  /**  */
  maximumquantity?: string;
  /**  */
  minimumquantity?: string;
  /**  */
  minimumquantityunits?: string;
  /**  */
  mossapplies?: boolean;
  /**  */
  offersupport?: boolean;
  /**  */
  overallquantitypricingtype?: string;
  /**  */
  overheadtype: string;
  /**  */
  parent?: string;
  /**  */
  pricinggroup?: string;
  /**  */
  purchasedescription?: string;
  /**  */
  purchaseorderamount?: string;
  /**  */
  purchaseorderquantity?: string;
  /**  */
  purchaseorderquantitydiff?: string;
  /**  */
  purchaseunit?: string;
  /**  */
  quantitypricingschedule?: string;
  /**  */
  receiptamount?: string;
  /**  */
  receiptquantity?: string;
  /**  */
  receiptquantitydiff?: string;
  /**  */
  residual?: string;
  /**  */
  revenueallocationgroup?: string;
  /**  */
  revenuerecognitionrule?: string;
  /**  */
  revrecforecastrule: string;
  /**  */
  revreclassfxaccount?: string;
  /**  */
  revrecschedule?: string;
  /**  */
  salesdescription?: string;
  /**  */
  saleunit?: string;
  /**  */
  softdescriptor?: string;
  /**  */
  subsidiary?: string;
  /**  */
  subtype?: string;
  /**  */
  taxschedule: string;
  /**  */
  unitstype?: string;
  /**  */
  upccode?: string;
  /**  */
  usemarginalrates?: boolean;
  /**  */
  vendorname?: string;
  /**  */
  vsoedeferral?: string;
  /**  */
  vsoedelivered?: boolean;
  /**  */
  vsoepermitdiscount?: string;
  /**  */
  vsoeprice?: number;
  /**  */
  vsoesopgroup?: string;
}





/** 
 * Other Charge Item Sublists Definition.
 * Record's Internal Id: otherchargeitem. 
 * Supports Custom Fields: true 
 */
export interface otherchargeitemSublists {
  
  /** accountingbookdetail: Accounting Books */
  accountingbookdetail: {
    /** accountingbook - Accounting Book  */
    accountingbook: string;
    /** amortizationtemplate - Amortization Template  */
    amortizationtemplate: string;
    /** createrevenueplanson - Create Revenue Plans On  */
    createrevenueplanson: string;
    /** revenuerecognitionrule - Revenue Recognition Rule  */
    revenuerecognitionrule: string;
    /** revrecforecastrule - Rev Rec Forecast Rule  */
    revrecforecastrule: string;
    /** revrecschedule - Revenue Recognition Template  */
    revrecschedule: string;
    /** sameasprimaryamortization - Same as Primary Book Amortization  */
    sameasprimaryamortization: boolean;
    /** sameasprimaryrevrec - Same as Primary Book Rev Rec  */
    sameasprimaryrevrec: boolean;
  }

  /** price1: US Dollar */
  price1: {
    /** currency - Currency  */
    currency: string;
    /** discount - Default Discount %  */
    discount: number;
    /** discountdisplay - Default Discount %  */
    discountdisplay: number;
    /** pricelevel - Price Level  */
    pricelevel: string;
  }

  /** price2: British pound */
  price2: {
    /** currency - Currency  */
    currency: string;
    /** discount - Default Discount %  */
    discount: number;
    /** discountdisplay - Default Discount %  */
    discountdisplay: number;
    /** pricelevel - Price Level  */
    pricelevel: string;
  }

  /** price3: Canadian Dollar */
  price3: {
    /** currency - Currency  */
    currency: string;
    /** discount - Default Discount %  */
    discount: number;
    /** discountdisplay - Default Discount %  */
    discountdisplay: number;
    /** pricelevel - Price Level  */
    pricelevel: string;
  }

  /** price4: Euro */
  price4: {
    /** currency - Currency  */
    currency: string;
    /** discount - Default Discount %  */
    discount: number;
    /** discountdisplay - Default Discount %  */
    discountdisplay: number;
    /** pricelevel - Price Level  */
    pricelevel: string;
  }

  /** translations: Item Translation */
  translations: {
    /** displayname - Display Name  */
    displayname: string;
    /** featureddescription - Featured Description  */
    featureddescription: string;
    /** language - Language  */
    language: string;
    /** locale -   */
    locale: string;
    /** nopricemessage - No Price Message  */
    nopricemessage: string;
    /** outofstockmessage - Out Of Stock Message  */
    outofstockmessage: string;
    /** pagetitle - Page Title  */
    pagetitle: string;
    /** salesdescription - Sales Description  */
    salesdescription: string;
    /** storedescription - Store Description  */
    storedescription: string;
    /** storedetaileddescription - Detailed Description  */
    storedetaileddescription: string;
    /** storedisplayname - Store Display Name  */
    storedisplayname: string;
  }
}





