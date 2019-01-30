// This file is auto generated, do not edit it. 




/** 
 * Shipping Item Fields Definition.
 * Record's Internal Id: shipitem. 
 * Supports Custom Fields: true 
 */
export interface shipitemFields {
/**  */
  accchange?: boolean;
  /**  */
  account: string;
  /**  */
  accounthandling?: string;
  /**  */
  costbasis?: string;
  /**  */
  countries?: string;
  /**  */
  description?: string;
  /**  */
  displayname: string;
  /**  */
  doifarrangement?: string;
  /**  */
  doiftotal?: boolean;
  /**  */
  doiftotalamt?: number;
  /**  */
  doiftotaloperator?: string;
  /**  */
  doifweight?: boolean;
  /**  */
  doifweightamt?: number;
  /**  */
  doifweightoperator?: string;
  /**  */
  doifweightunit?: string;
  /**  */
  edition?: string;
  /**  */
  excludecountries?: boolean;
  /**  */
  excludesites?: boolean;
  /**  */
  externalid?: string;
  /**  */
  fedexdiscountrate?: number;
  /**  */
  fedexonerate?: boolean;
  /**  */
  fedexservicecode?: string;
  /**  */
  freeifordertotalisoveramount?: number;
  /**  */
  handlingaspercentageoftotal?: number;
  /**  */
  handlingbyweightamount?: number;
  /**  */
  handlingbyweightperquantity?: number;
  /**  */
  handlingbyweightperunit?: string;
  /**  */
  handlingcost?: string;
  /**  */
  handlingflatrateamount?: number;
  /**  */
  handlingperitemamount?: number;
  /**  */
  handlingtablechargeby?: string;
  /**  */
  handlingtableuom?: string;
  /**  */
  handlingtaxcode?: string;
  /**  */
  hasmaximumshippingcost?: boolean;
  /**  */
  hasminimumshippingcost?: boolean;
  /**  */
  id?: number;
  /**  */
  integratedlabelsarrangement?: string;
  /**  */
  integrationservicecode?: string;
  /**  */
  invt_dispname?: string;
  /**  */
  isfreeifordertotalisover?: boolean;
  /**  */
  ishandlingbyweightbracketed?: boolean;
  /**  */
  ishandlingtaxable?: boolean;
  /**  */
  isinactive?: boolean;
  /**  */
  isonline?: boolean;
  /**  */
  isshippingbyweightbracketed?: boolean;
  /**  */
  istaxable?: boolean;
  /**  */
  itemid: string;
  /**  */
  itemtype?: string;
  /**  */
  labelplugin?: string;
  /**  */
  labelpluginselect?: string;
  /**  */
  labelreg?: string;
  /**  */
  labelregselect?: string;
  /**  */
  labelservice?: string;
  /**  */
  labelservicegroup?: string;
  /**  */
  labelservicegroupselect?: string;
  /**  */
  labelserviceselect?: string;
  /**  */
  labeltype?: string;
  /**  */
  maximumshippingcost?: number;
  /**  */
  minimumshippingcost?: number;
  /**  */
  needsallfreeshippingitems?: boolean;
  /**  */
  omitpackaging?: boolean;
  /**  */
  pluginlabelsarrangement?: string;
  /**  */
  pluginratearrangement?: string;
  /**  */
  ratingplugin?: string;
  /**  */
  ratingpluginselect?: string;
  /**  */
  ratingreg?: string;
  /**  */
  ratingregselect?: string;
  /**  */
  ratingservice?: string;
  /**  */
  ratingservicegroup?: string;
  /**  */
  ratingservicegroupselect?: string;
  /**  */
  ratingserviceselect?: string;
  /**  */
  restrictionarrangement?: string;
  /**  */
  returnlabelreg?: string;
  /**  */
  returnlabelregselect?: string;
  /**  */
  returnlabelservice?: string;
  /**  */
  returnlabelserviceselect?: string;
  /**  */
  returnservicecode?: string;
  /**  */
  returnsintegrated?: boolean;
  /**  */
  shipitemcurrency?: string;
  /**  */
  shipperintegrated?: boolean;
  /**  */
  shippingaspercentageoftotal?: number;
  /**  */
  shippingbyweightamount?: number;
  /**  */
  shippingbyweightperquantity?: number;
  /**  */
  shippingbyweightperunit?: string;
  /**  */
  shippingcarrier?: string;
  /**  */
  shippingflatrateamount?: number;
  /**  */
  shippingperitemamount?: number;
  /**  */
  shippingtablechargeby?: string;
  /**  */
  shippingtableuom?: string;
  /**  */
  shippingtaxcode?: string;
  /**  */
  site?: string;
  /**  */
  states?: string;
  /**  */
  subsidiary?: string;
  /**  */
  tabtext?: string;
  /**  */
  taxschedule: string;
  /**  */
  taxschedulehandling: string;
  /**  */
  upsdiscountrate?: number;
  /**  */
  upssavername?: string;
  /**  */
  upsservicecode?: string;
  /**  */
  uspsdiscountrate?: number;
  /**  */
  uspsservicecode?: string;
}





/** 
 * Shipping Item Sublists Definition.
 * Record's Internal Id: shipitem. 
 * Supports Custom Fields: true 
 */
export interface shipitemSublists {
  
  /** handlingtable:  */
  handlingtable: {
    /** handlingtablecharge - Charge  */
    handlingtablecharge?: number;
    /** handlingtablerangevalue - Range Value  */
    handlingtablerangevalue?: number;
    /** shipitem -   */
    shipitem: string;
  }

  /** items: Items */
  items: {
    /** item - Item  */
    item?: string;
    /** nqty - Quantity  */
    nqty: number;
    /** shipitem -   */
    shipitem: string;
  }

  /** shipmethodrulerelations: Shipping Items */
  shipmethodrulerelations: {
    /** item - Shipping Item  */
    item: string;
    /** subsidiary - Subsidiary  */
    subsidiary: string;
  }

  /** shippingtable:  */
  shippingtable: {
    /** shipitem -   */
    shipitem: string;
    /** shippingtablecharge - Charge  */
    shippingtablecharge?: number;
    /** shippingtablerangevalue - Range Value  */
    shippingtablerangevalue?: number;
  }

  /** translations: Translation */
  translations: {
    /** displayname - Display Name  */
    displayname: string;
    /** language - Language  */
    language: string;
    /** locale -   */
    locale: string;
    /** shipitem -   */
    shipitem: string;
  }
}





