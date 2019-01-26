// This file is auto generated, do not edit it. 

import { TypedRecord, TypedRecordImpl } from '../typedRecord';
import { Record } from 'N/record';




/** 
 * Non-Inventory Part Fields Definition.
 * Record's Internal Id: noninventoryitem. 
 * Supports Custom Fields: true 
 */
export interface noninventoryitemFields {
/**  */
  amortizationperiod: number | undefined;
  /**  */
  amortizationtemplate: string | undefined;
  /**  */
  auctionquantity: string | undefined;
  /**  */
  auctiontype: string | undefined;
  /**  */
  availabletopartners: boolean | undefined;
  /**  */
  billingschedule: string | undefined;
  /**  */
  buyitnowprice: string | undefined;
  /**  */
  class: string | undefined;
  /**  */
  conditionenabled: string | undefined;
  /**  */
  conditionhelpurl: string | undefined;
  /**  */
  contingentrevenuehandling: boolean | undefined;
  /**  */
  copydescription: boolean | undefined;
  /**  */
  cost: string | undefined;
  /**  */
  costcategory: string;
  /**  */
  costestimate: string | undefined;
  /**  */
  costestimatetype: string | undefined;
  /**  */
  costunits: string | undefined;
  /**  */
  countryofmanufacture: string | undefined;
  /**  */
  createddate: string | undefined;
  /**  */
  createrevenueplanson: string | undefined;
  /**  */
  currency: string | undefined;
  /**  */
  customform: string | undefined;
  /**  */
  deferralaccount: string | undefined;
  /**  */
  deferredrevenueaccount: string | undefined;
  /**  */
  deferrevrec: boolean | undefined;
  /**  */
  department: string | undefined;
  /**  */
  directrevenueposting: boolean | undefined;
  /**  */
  displayinebaystore: boolean | undefined;
  /**  */
  displayname: string | undefined;
  /**  */
  dontshowprice: boolean | undefined;
  /**  */
  dropshipexpenseaccount: string | undefined;
  /**  */
  ebayhandlingtime: string | undefined;
  /**  */
  ebayintlinsurancefee: string | undefined;
  /**  */
  ebayintlpackagehandlingfee: string | undefined;
  /**  */
  ebayintlshipinsurance: string | undefined;
  /**  */
  ebayintlshippingitem1: string | undefined;
  /**  */
  ebayintlshippingitem2: string | undefined;
  /**  */
  ebayintlshippingitem3: string | undefined;
  /**  */
  ebayisintlcalculatedrate: string | undefined;
  /**  */
  ebayisirregularpackage: boolean | undefined;
  /**  */
  ebayitemdescription: string | undefined;
  /**  */
  ebayitemlocdisplay: string | undefined;
  /**  */
  ebayitemloczipcode: string | undefined;
  /**  */
  ebayitemlots: number | undefined;
  /**  */
  ebayitemsubtitle: string | undefined;
  /**  */
  ebayitemtitle: string | undefined;
  /**  */
  ebayitemweightamt: string | undefined;
  /**  */
  ebaylayout: string | undefined;
  /**  */
  ebaypackagetype: string | undefined;
  /**  */
  ebaypagecounter: string | undefined;
  /**  */
  ebayrelistingoption: string | undefined;
  /**  */
  ebaytheme: string | undefined;
  /**  */
  ebaythemegroup: string | undefined;
  /**  */
  endauctionswhenoutofstock: boolean | undefined;
  /**  */
  enforceminqtyinternally: boolean | undefined;
  /**  */
  excludefromsitemap: boolean | undefined;
  /**  */
  expenseaccount: string | undefined;
  /**  */
  externalid: string | undefined;
  /**  */
  featureddescription: string | undefined;
  /**  */
  froogleproductfeed: string | undefined;
  /**  */
  gallery: boolean | undefined;
  /**  */
  galleryfeatured: boolean | undefined;
  /**  */
  generateaccruals: boolean | undefined;
  /**  */
  gifttypeexpressship: boolean | undefined;
  /**  */
  gifttypegiftwrap: boolean | undefined;
  /**  */
  gifttypeshiptorecipient: boolean | undefined;
  /**  */
  handlingcost: string | undefined;
  /**  */
  handlingcostunits: string | undefined;
  /**  */
  handlinggroup: string | undefined;
  /**  */
  imagesgroup: string | undefined;
  /**  */
  imageslocation: string | undefined;
  /**  */
  includechildren: boolean | undefined;
  /**  */
  incomeaccount: string | undefined;
  /**  */
  intercodefrevaccount: string | undefined;
  /**  */
  intercoexpenseaccount: string | undefined;
  /**  */
  intercoincomeaccount: string | undefined;
  /**  */
  internalid: number | undefined;
  /**  */
  iscalculatedrate: string | undefined;
  /**  */
  isdonationitem: boolean | undefined;
  /**  */
  isdropshipitem: boolean | undefined;
  /**  */
  isfulfillable: boolean | undefined;
  /**  */
  isgcocompliant: boolean | undefined;
  /**  */
  isinactive: boolean | undefined;
  /**  */
  isonline: boolean | undefined;
  /**  */
  isspecialorderitem: boolean | undefined;
  /**  */
  issueproduct: string | undefined;
  /**  */
  itemcondition: string | undefined;
  /**  */
  itemhandlingfee: string | undefined;
  /**  */
  itemid: string;
  /**  */
  iteminsurancefee: string | undefined;
  /**  */
  itemoptions: string | undefined;
  /**  */
  itemrevenuecategory: string | undefined;
  /**  */
  itemshipinsurance: string | undefined;
  /**  */
  itemtype: string | undefined;
  /**  */
  lastmodifieddate: string | undefined;
  /**  */
  listimmediate: string | undefined;
  /**  */
  listingduration: string | undefined;
  /**  */
  listingstartdate: Date | undefined;
  /**  */
  listingstarttime: string | undefined;
  /**  */
  location: string | undefined;
  /**  */
  manufacturer: string | undefined;
  /**  */
  manufactureraddr1: string | undefined;
  /**  */
  manufacturercity: string | undefined;
  /**  */
  manufacturerstate: string | undefined;
  /**  */
  manufacturertariff: string | undefined;
  /**  */
  manufacturertaxid: string | undefined;
  /**  */
  manufacturerzip: string | undefined;
  /**  */
  matrixitemnametemplate: string | undefined;
  /**  */
  matrixtype: string | undefined;
  /**  */
  maxdonationamount: string | undefined;
  /**  */
  maximumquantity: string | undefined;
  /**  */
  metataghtml: string | undefined;
  /**  */
  minimumquantity: string | undefined;
  /**  */
  minimumquantityunits: string | undefined;
  /**  */
  mossapplies: boolean | undefined;
  /**  */
  mpn: string | undefined;
  /**  */
  multmanufactureaddr: boolean | undefined;
  /**  */
  nextagcategory: string | undefined;
  /**  */
  nextagproductfeed: string | undefined;
  /**  */
  nopricemessage: string | undefined;
  /**  */
  numactivelistings: number | undefined;
  /**  */
  numcurrentlylisted: number | undefined;
  /**  */
  offersupport: boolean | undefined;
  /**  */
  outofstockbehavior: string | undefined;
  /**  */
  outofstockmessage: string | undefined;
  /**  */
  overallquantitypricingtype: string | undefined;
  /**  */
  overheadtype: string;
  /**  */
  packageheight: string | undefined;
  /**  */
  packagelength: string | undefined;
  /**  */
  packagewidth: string | undefined;
  /**  */
  pagetitle: string | undefined;
  /**  */
  parent: string | undefined;
  /**  */
  preferencecriterion: string | undefined;
  /**  */
  pricinggroup: string | undefined;
  /**  */
  primarycatdisplayname: string | undefined;
  /**  */
  primarycategory: number | undefined;
  /**  */
  producer: boolean | undefined;
  /**  */
  productfeed: string | undefined;
  /**  */
  purchasedescription: string | undefined;
  /**  */
  purchaseorderamount: string | undefined;
  /**  */
  purchaseorderquantity: string | undefined;
  /**  */
  purchaseorderquantitydiff: string | undefined;
  /**  */
  purchaseunit: string | undefined;
  /**  */
  quantitypricingschedule: string | undefined;
  /**  */
  receiptamount: string | undefined;
  /**  */
  receiptquantity: string | undefined;
  /**  */
  receiptquantitydiff: string | undefined;
  /**  */
  refundgivenas: string | undefined;
  /**  */
  relateditemsdescription: string | undefined;
  /**  */
  reserveprice: string | undefined;
  /**  */
  residual: string | undefined;
  /**  */
  returnpolicy: string | undefined;
  /**  */
  returnpolicydetails: string | undefined;
  /**  */
  returnshippingpaidby: string | undefined;
  /**  */
  returnswithin: string | undefined;
  /**  */
  revenueallocationgroup: string | undefined;
  /**  */
  revenuerecognitionrule: string | undefined;
  /**  */
  revrecforecastrule: string;
  /**  */
  revreclassfxaccount: string | undefined;
  /**  */
  revrecschedule: string | undefined;
  /**  */
  salesdescription: string | undefined;
  /**  */
  saleunit: string | undefined;
  /**  */
  schedulebcode: string | undefined;
  /**  */
  schedulebnumber: string | undefined;
  /**  */
  schedulebquantity: string | undefined;
  /**  */
  searchkeywords: string | undefined;
  /**  */
  secondarycatdisplayname: string | undefined;
  /**  */
  secondarycategory: number | undefined;
  /**  */
  sellonebay: boolean | undefined;
  /**  */
  shipasia: boolean | undefined;
  /**  */
  shipaustralia: boolean | undefined;
  /**  */
  shipcanada: boolean | undefined;
  /**  */
  shipeurope: boolean | undefined;
  /**  */
  shipgermany: boolean | undefined;
  /**  */
  shipindividually: boolean | undefined;
  /**  */
  shipjapan: boolean | undefined;
  /**  */
  shipmexico: boolean | undefined;
  /**  */
  shipnorthsouthamerica: boolean | undefined;
  /**  */
  shippackage: string | undefined;
  /**  */
  shippingcost: string | undefined;
  /**  */
  shippingcostunits: string | undefined;
  /**  */
  shippingdomesticmethodsgroup: string | undefined;
  /**  */
  shippingdomgroup: string | undefined;
  /**  */
  shippingintlgroup: string | undefined;
  /**  */
  shippingintlgroup1: string | undefined;
  /**  */
  shippingintlgroup2: string | undefined;
  /**  */
  shippingintlgroup3: string | undefined;
  /**  */
  shippingitem1: string | undefined;
  /**  */
  shippingitem2: string | undefined;
  /**  */
  shippingitem3: string | undefined;
  /**  */
  shippinglocationsgroup: string | undefined;
  /**  */
  shippingpackaginggroup: string | undefined;
  /**  */
  shippingrate1: string | undefined;
  /**  */
  shippingrate2: string | undefined;
  /**  */
  shippingrate3: string | undefined;
  /**  */
  shipuk: boolean | undefined;
  /**  */
  shipworldwide: boolean | undefined;
  /**  */
  shoppingdotcomcategory: string | undefined;
  /**  */
  shoppingproductfeed: string | undefined;
  /**  */
  shopzillacategoryid: number | undefined;
  /**  */
  shopzillaproductfeed: string | undefined;
  /**  */
  showasgift: boolean | undefined;
  /**  */
  showdefaultdonationamount: boolean | undefined;
  /**  */
  sitemappriority: string | undefined;
  /**  */
  softdescriptor: string | undefined;
  /**  */
  standardimages: string | undefined;
  /**  */
  startingprice: string | undefined;
  /**  */
  stockdescription: string | undefined;
  /**  */
  storecatdisplayname: string | undefined;
  /**  */
  storecatdisplayname2: string | undefined;
  /**  */
  storecategory: number | undefined;
  /**  */
  storecategory2: number | undefined;
  /**  */
  storedescription: string | undefined;
  /**  */
  storedetaileddescription: string | undefined;
  /**  */
  storedisplayimage: string | undefined;
  /**  */
  storedisplayname: string | undefined;
  /**  */
  storedisplaythumbnail: string | undefined;
  /**  */
  storeitemtemplate: string | undefined;
  /**  */
  subsidiary: string | undefined;
  /**  */
  subtype: string | undefined;
  /**  */
  supersizeimages: boolean | undefined;
  /**  */
  taxable: boolean | undefined;
  /**  */
  taxschedule: string;
  /**  */
  templatesgroup: string | undefined;
  /**  */
  unitstype: string | undefined;
  /**  */
  upccode: string | undefined;
  /**  */
  urlcomponent: string | undefined;
  /**  */
  usemarginalrates: boolean | undefined;
  /**  */
  vendorname: string | undefined;
  /**  */
  vsoedeferral: string | undefined;
  /**  */
  vsoedelivered: boolean | undefined;
  /**  */
  vsoepermitdiscount: string | undefined;
  /**  */
  vsoeprice: string | undefined;
  /**  */
  vsoesopgroup: string | undefined;
  /**  */
  weight: number | undefined;
  /**  */
  weightunit: string | undefined;
  /**  */
  weightunits: string | undefined;
  /**  */
  willship: string | undefined;
  /**  */
  yahooproductfeed: string | undefined;
}

export class noninventoryitemFieldsImpl implements noninventoryitemFields {
  constructor(protected typedRecord: TypedRecord){ 
  }
  public get amortizationperiod(): number | undefined {
    return this.typedRecord.nsRecord.getValue('amortizationperiod') as any;
  }
  public set amortizationperiod(value: number | undefined) {
    this.typedRecord.nsRecord.setValue('amortizationperiod', value as any)
  }
  public get amortizationtemplate(): string | undefined {
    return this.typedRecord.nsRecord.getValue('amortizationtemplate') as any;
  }
  public set amortizationtemplate(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('amortizationtemplate', value as any)
  }
  public get auctionquantity(): string | undefined {
    return this.typedRecord.nsRecord.getValue('auctionquantity') as any;
  }
  public set auctionquantity(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('auctionquantity', value as any)
  }
  public get auctiontype(): string | undefined {
    return this.typedRecord.nsRecord.getValue('auctiontype') as any;
  }
  public set auctiontype(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('auctiontype', value as any)
  }
  public get availabletopartners(): boolean | undefined {
    return this.typedRecord.nsRecord.getValue('availabletopartners') as any;
  }
  public set availabletopartners(value: boolean | undefined) {
    this.typedRecord.nsRecord.setValue('availabletopartners', value as any)
  }
  public get billingschedule(): string | undefined {
    return this.typedRecord.nsRecord.getValue('billingschedule') as any;
  }
  public set billingschedule(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('billingschedule', value as any)
  }
  public get buyitnowprice(): string | undefined {
    return this.typedRecord.nsRecord.getValue('buyitnowprice') as any;
  }
  public set buyitnowprice(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('buyitnowprice', value as any)
  }
  public get class(): string | undefined {
    return this.typedRecord.nsRecord.getValue('class') as any;
  }
  public set class(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('class', value as any)
  }
  public get conditionenabled(): string | undefined {
    return this.typedRecord.nsRecord.getValue('conditionenabled') as any;
  }
  public set conditionenabled(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('conditionenabled', value as any)
  }
  public get conditionhelpurl(): string | undefined {
    return this.typedRecord.nsRecord.getValue('conditionhelpurl') as any;
  }
  public set conditionhelpurl(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('conditionhelpurl', value as any)
  }
  public get contingentrevenuehandling(): boolean | undefined {
    return this.typedRecord.nsRecord.getValue('contingentrevenuehandling') as any;
  }
  public set contingentrevenuehandling(value: boolean | undefined) {
    this.typedRecord.nsRecord.setValue('contingentrevenuehandling', value as any)
  }
  public get copydescription(): boolean | undefined {
    return this.typedRecord.nsRecord.getValue('copydescription') as any;
  }
  public set copydescription(value: boolean | undefined) {
    this.typedRecord.nsRecord.setValue('copydescription', value as any)
  }
  public get cost(): string | undefined {
    return this.typedRecord.nsRecord.getValue('cost') as any;
  }
  public set cost(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('cost', value as any)
  }
  public get costcategory(): string {
    return this.typedRecord.nsRecord.getValue('costcategory') as any;
  }
  public set costcategory(value: string) {
    this.typedRecord.nsRecord.setValue('costcategory', value as any)
  }
  public get costestimate(): string | undefined {
    return this.typedRecord.nsRecord.getValue('costestimate') as any;
  }
  public set costestimate(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('costestimate', value as any)
  }
  public get costestimatetype(): string | undefined {
    return this.typedRecord.nsRecord.getValue('costestimatetype') as any;
  }
  public set costestimatetype(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('costestimatetype', value as any)
  }
  public get costunits(): string | undefined {
    return this.typedRecord.nsRecord.getValue('costunits') as any;
  }
  public set costunits(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('costunits', value as any)
  }
  public get countryofmanufacture(): string | undefined {
    return this.typedRecord.nsRecord.getValue('countryofmanufacture') as any;
  }
  public set countryofmanufacture(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('countryofmanufacture', value as any)
  }
  public get createddate(): string | undefined {
    return this.typedRecord.nsRecord.getValue('createddate') as any;
  }
  public set createddate(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('createddate', value as any)
  }
  public get createrevenueplanson(): string | undefined {
    return this.typedRecord.nsRecord.getValue('createrevenueplanson') as any;
  }
  public set createrevenueplanson(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('createrevenueplanson', value as any)
  }
  public get currency(): string | undefined {
    return this.typedRecord.nsRecord.getValue('currency') as any;
  }
  public set currency(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('currency', value as any)
  }
  public get customform(): string | undefined {
    return this.typedRecord.nsRecord.getValue('customform') as any;
  }
  public set customform(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('customform', value as any)
  }
  public get deferralaccount(): string | undefined {
    return this.typedRecord.nsRecord.getValue('deferralaccount') as any;
  }
  public set deferralaccount(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('deferralaccount', value as any)
  }
  public get deferredrevenueaccount(): string | undefined {
    return this.typedRecord.nsRecord.getValue('deferredrevenueaccount') as any;
  }
  public set deferredrevenueaccount(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('deferredrevenueaccount', value as any)
  }
  public get deferrevrec(): boolean | undefined {
    return this.typedRecord.nsRecord.getValue('deferrevrec') as any;
  }
  public set deferrevrec(value: boolean | undefined) {
    this.typedRecord.nsRecord.setValue('deferrevrec', value as any)
  }
  public get department(): string | undefined {
    return this.typedRecord.nsRecord.getValue('department') as any;
  }
  public set department(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('department', value as any)
  }
  public get directrevenueposting(): boolean | undefined {
    return this.typedRecord.nsRecord.getValue('directrevenueposting') as any;
  }
  public set directrevenueposting(value: boolean | undefined) {
    this.typedRecord.nsRecord.setValue('directrevenueposting', value as any)
  }
  public get displayinebaystore(): boolean | undefined {
    return this.typedRecord.nsRecord.getValue('displayinebaystore') as any;
  }
  public set displayinebaystore(value: boolean | undefined) {
    this.typedRecord.nsRecord.setValue('displayinebaystore', value as any)
  }
  public get displayname(): string | undefined {
    return this.typedRecord.nsRecord.getValue('displayname') as any;
  }
  public set displayname(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('displayname', value as any)
  }
  public get dontshowprice(): boolean | undefined {
    return this.typedRecord.nsRecord.getValue('dontshowprice') as any;
  }
  public set dontshowprice(value: boolean | undefined) {
    this.typedRecord.nsRecord.setValue('dontshowprice', value as any)
  }
  public get dropshipexpenseaccount(): string | undefined {
    return this.typedRecord.nsRecord.getValue('dropshipexpenseaccount') as any;
  }
  public set dropshipexpenseaccount(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('dropshipexpenseaccount', value as any)
  }
  public get ebayhandlingtime(): string | undefined {
    return this.typedRecord.nsRecord.getValue('ebayhandlingtime') as any;
  }
  public set ebayhandlingtime(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('ebayhandlingtime', value as any)
  }
  public get ebayintlinsurancefee(): string | undefined {
    return this.typedRecord.nsRecord.getValue('ebayintlinsurancefee') as any;
  }
  public set ebayintlinsurancefee(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('ebayintlinsurancefee', value as any)
  }
  public get ebayintlpackagehandlingfee(): string | undefined {
    return this.typedRecord.nsRecord.getValue('ebayintlpackagehandlingfee') as any;
  }
  public set ebayintlpackagehandlingfee(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('ebayintlpackagehandlingfee', value as any)
  }
  public get ebayintlshipinsurance(): string | undefined {
    return this.typedRecord.nsRecord.getValue('ebayintlshipinsurance') as any;
  }
  public set ebayintlshipinsurance(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('ebayintlshipinsurance', value as any)
  }
  public get ebayintlshippingitem1(): string | undefined {
    return this.typedRecord.nsRecord.getValue('ebayintlshippingitem1') as any;
  }
  public set ebayintlshippingitem1(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('ebayintlshippingitem1', value as any)
  }
  public get ebayintlshippingitem2(): string | undefined {
    return this.typedRecord.nsRecord.getValue('ebayintlshippingitem2') as any;
  }
  public set ebayintlshippingitem2(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('ebayintlshippingitem2', value as any)
  }
  public get ebayintlshippingitem3(): string | undefined {
    return this.typedRecord.nsRecord.getValue('ebayintlshippingitem3') as any;
  }
  public set ebayintlshippingitem3(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('ebayintlshippingitem3', value as any)
  }
  public get ebayisintlcalculatedrate(): string | undefined {
    return this.typedRecord.nsRecord.getValue('ebayisintlcalculatedrate') as any;
  }
  public set ebayisintlcalculatedrate(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('ebayisintlcalculatedrate', value as any)
  }
  public get ebayisirregularpackage(): boolean | undefined {
    return this.typedRecord.nsRecord.getValue('ebayisirregularpackage') as any;
  }
  public set ebayisirregularpackage(value: boolean | undefined) {
    this.typedRecord.nsRecord.setValue('ebayisirregularpackage', value as any)
  }
  public get ebayitemdescription(): string | undefined {
    return this.typedRecord.nsRecord.getValue('ebayitemdescription') as any;
  }
  public set ebayitemdescription(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('ebayitemdescription', value as any)
  }
  public get ebayitemlocdisplay(): string | undefined {
    return this.typedRecord.nsRecord.getValue('ebayitemlocdisplay') as any;
  }
  public set ebayitemlocdisplay(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('ebayitemlocdisplay', value as any)
  }
  public get ebayitemloczipcode(): string | undefined {
    return this.typedRecord.nsRecord.getValue('ebayitemloczipcode') as any;
  }
  public set ebayitemloczipcode(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('ebayitemloczipcode', value as any)
  }
  public get ebayitemlots(): number | undefined {
    return this.typedRecord.nsRecord.getValue('ebayitemlots') as any;
  }
  public set ebayitemlots(value: number | undefined) {
    this.typedRecord.nsRecord.setValue('ebayitemlots', value as any)
  }
  public get ebayitemsubtitle(): string | undefined {
    return this.typedRecord.nsRecord.getValue('ebayitemsubtitle') as any;
  }
  public set ebayitemsubtitle(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('ebayitemsubtitle', value as any)
  }
  public get ebayitemtitle(): string | undefined {
    return this.typedRecord.nsRecord.getValue('ebayitemtitle') as any;
  }
  public set ebayitemtitle(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('ebayitemtitle', value as any)
  }
  public get ebayitemweightamt(): string | undefined {
    return this.typedRecord.nsRecord.getValue('ebayitemweightamt') as any;
  }
  public set ebayitemweightamt(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('ebayitemweightamt', value as any)
  }
  public get ebaylayout(): string | undefined {
    return this.typedRecord.nsRecord.getValue('ebaylayout') as any;
  }
  public set ebaylayout(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('ebaylayout', value as any)
  }
  public get ebaypackagetype(): string | undefined {
    return this.typedRecord.nsRecord.getValue('ebaypackagetype') as any;
  }
  public set ebaypackagetype(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('ebaypackagetype', value as any)
  }
  public get ebaypagecounter(): string | undefined {
    return this.typedRecord.nsRecord.getValue('ebaypagecounter') as any;
  }
  public set ebaypagecounter(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('ebaypagecounter', value as any)
  }
  public get ebayrelistingoption(): string | undefined {
    return this.typedRecord.nsRecord.getValue('ebayrelistingoption') as any;
  }
  public set ebayrelistingoption(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('ebayrelistingoption', value as any)
  }
  public get ebaytheme(): string | undefined {
    return this.typedRecord.nsRecord.getValue('ebaytheme') as any;
  }
  public set ebaytheme(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('ebaytheme', value as any)
  }
  public get ebaythemegroup(): string | undefined {
    return this.typedRecord.nsRecord.getValue('ebaythemegroup') as any;
  }
  public set ebaythemegroup(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('ebaythemegroup', value as any)
  }
  public get endauctionswhenoutofstock(): boolean | undefined {
    return this.typedRecord.nsRecord.getValue('endauctionswhenoutofstock') as any;
  }
  public set endauctionswhenoutofstock(value: boolean | undefined) {
    this.typedRecord.nsRecord.setValue('endauctionswhenoutofstock', value as any)
  }
  public get enforceminqtyinternally(): boolean | undefined {
    return this.typedRecord.nsRecord.getValue('enforceminqtyinternally') as any;
  }
  public set enforceminqtyinternally(value: boolean | undefined) {
    this.typedRecord.nsRecord.setValue('enforceminqtyinternally', value as any)
  }
  public get excludefromsitemap(): boolean | undefined {
    return this.typedRecord.nsRecord.getValue('excludefromsitemap') as any;
  }
  public set excludefromsitemap(value: boolean | undefined) {
    this.typedRecord.nsRecord.setValue('excludefromsitemap', value as any)
  }
  public get expenseaccount(): string | undefined {
    return this.typedRecord.nsRecord.getValue('expenseaccount') as any;
  }
  public set expenseaccount(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('expenseaccount', value as any)
  }
  public get externalid(): string | undefined {
    return this.typedRecord.nsRecord.getValue('externalid') as any;
  }
  public set externalid(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('externalid', value as any)
  }
  public get featureddescription(): string | undefined {
    return this.typedRecord.nsRecord.getValue('featureddescription') as any;
  }
  public set featureddescription(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('featureddescription', value as any)
  }
  public get froogleproductfeed(): string | undefined {
    return this.typedRecord.nsRecord.getValue('froogleproductfeed') as any;
  }
  public set froogleproductfeed(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('froogleproductfeed', value as any)
  }
  public get gallery(): boolean | undefined {
    return this.typedRecord.nsRecord.getValue('gallery') as any;
  }
  public set gallery(value: boolean | undefined) {
    this.typedRecord.nsRecord.setValue('gallery', value as any)
  }
  public get galleryfeatured(): boolean | undefined {
    return this.typedRecord.nsRecord.getValue('galleryfeatured') as any;
  }
  public set galleryfeatured(value: boolean | undefined) {
    this.typedRecord.nsRecord.setValue('galleryfeatured', value as any)
  }
  public get generateaccruals(): boolean | undefined {
    return this.typedRecord.nsRecord.getValue('generateaccruals') as any;
  }
  public set generateaccruals(value: boolean | undefined) {
    this.typedRecord.nsRecord.setValue('generateaccruals', value as any)
  }
  public get gifttypeexpressship(): boolean | undefined {
    return this.typedRecord.nsRecord.getValue('gifttypeexpressship') as any;
  }
  public set gifttypeexpressship(value: boolean | undefined) {
    this.typedRecord.nsRecord.setValue('gifttypeexpressship', value as any)
  }
  public get gifttypegiftwrap(): boolean | undefined {
    return this.typedRecord.nsRecord.getValue('gifttypegiftwrap') as any;
  }
  public set gifttypegiftwrap(value: boolean | undefined) {
    this.typedRecord.nsRecord.setValue('gifttypegiftwrap', value as any)
  }
  public get gifttypeshiptorecipient(): boolean | undefined {
    return this.typedRecord.nsRecord.getValue('gifttypeshiptorecipient') as any;
  }
  public set gifttypeshiptorecipient(value: boolean | undefined) {
    this.typedRecord.nsRecord.setValue('gifttypeshiptorecipient', value as any)
  }
  public get handlingcost(): string | undefined {
    return this.typedRecord.nsRecord.getValue('handlingcost') as any;
  }
  public set handlingcost(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('handlingcost', value as any)
  }
  public get handlingcostunits(): string | undefined {
    return this.typedRecord.nsRecord.getValue('handlingcostunits') as any;
  }
  public set handlingcostunits(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('handlingcostunits', value as any)
  }
  public get handlinggroup(): string | undefined {
    return this.typedRecord.nsRecord.getValue('handlinggroup') as any;
  }
  public set handlinggroup(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('handlinggroup', value as any)
  }
  public get imagesgroup(): string | undefined {
    return this.typedRecord.nsRecord.getValue('imagesgroup') as any;
  }
  public set imagesgroup(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('imagesgroup', value as any)
  }
  public get imageslocation(): string | undefined {
    return this.typedRecord.nsRecord.getValue('imageslocation') as any;
  }
  public set imageslocation(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('imageslocation', value as any)
  }
  public get includechildren(): boolean | undefined {
    return this.typedRecord.nsRecord.getValue('includechildren') as any;
  }
  public set includechildren(value: boolean | undefined) {
    this.typedRecord.nsRecord.setValue('includechildren', value as any)
  }
  public get incomeaccount(): string | undefined {
    return this.typedRecord.nsRecord.getValue('incomeaccount') as any;
  }
  public set incomeaccount(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('incomeaccount', value as any)
  }
  public get intercodefrevaccount(): string | undefined {
    return this.typedRecord.nsRecord.getValue('intercodefrevaccount') as any;
  }
  public set intercodefrevaccount(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('intercodefrevaccount', value as any)
  }
  public get intercoexpenseaccount(): string | undefined {
    return this.typedRecord.nsRecord.getValue('intercoexpenseaccount') as any;
  }
  public set intercoexpenseaccount(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('intercoexpenseaccount', value as any)
  }
  public get intercoincomeaccount(): string | undefined {
    return this.typedRecord.nsRecord.getValue('intercoincomeaccount') as any;
  }
  public set intercoincomeaccount(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('intercoincomeaccount', value as any)
  }
  public get internalid(): number | undefined {
    return this.typedRecord.nsRecord.getValue('internalid') as any;
  }
  public set internalid(value: number | undefined) {
    this.typedRecord.nsRecord.setValue('internalid', value as any)
  }
  public get iscalculatedrate(): string | undefined {
    return this.typedRecord.nsRecord.getValue('iscalculatedrate') as any;
  }
  public set iscalculatedrate(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('iscalculatedrate', value as any)
  }
  public get isdonationitem(): boolean | undefined {
    return this.typedRecord.nsRecord.getValue('isdonationitem') as any;
  }
  public set isdonationitem(value: boolean | undefined) {
    this.typedRecord.nsRecord.setValue('isdonationitem', value as any)
  }
  public get isdropshipitem(): boolean | undefined {
    return this.typedRecord.nsRecord.getValue('isdropshipitem') as any;
  }
  public set isdropshipitem(value: boolean | undefined) {
    this.typedRecord.nsRecord.setValue('isdropshipitem', value as any)
  }
  public get isfulfillable(): boolean | undefined {
    return this.typedRecord.nsRecord.getValue('isfulfillable') as any;
  }
  public set isfulfillable(value: boolean | undefined) {
    this.typedRecord.nsRecord.setValue('isfulfillable', value as any)
  }
  public get isgcocompliant(): boolean | undefined {
    return this.typedRecord.nsRecord.getValue('isgcocompliant') as any;
  }
  public set isgcocompliant(value: boolean | undefined) {
    this.typedRecord.nsRecord.setValue('isgcocompliant', value as any)
  }
  public get isinactive(): boolean | undefined {
    return this.typedRecord.nsRecord.getValue('isinactive') as any;
  }
  public set isinactive(value: boolean | undefined) {
    this.typedRecord.nsRecord.setValue('isinactive', value as any)
  }
  public get isonline(): boolean | undefined {
    return this.typedRecord.nsRecord.getValue('isonline') as any;
  }
  public set isonline(value: boolean | undefined) {
    this.typedRecord.nsRecord.setValue('isonline', value as any)
  }
  public get isspecialorderitem(): boolean | undefined {
    return this.typedRecord.nsRecord.getValue('isspecialorderitem') as any;
  }
  public set isspecialorderitem(value: boolean | undefined) {
    this.typedRecord.nsRecord.setValue('isspecialorderitem', value as any)
  }
  public get issueproduct(): string | undefined {
    return this.typedRecord.nsRecord.getValue('issueproduct') as any;
  }
  public set issueproduct(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('issueproduct', value as any)
  }
  public get itemcondition(): string | undefined {
    return this.typedRecord.nsRecord.getValue('itemcondition') as any;
  }
  public set itemcondition(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('itemcondition', value as any)
  }
  public get itemhandlingfee(): string | undefined {
    return this.typedRecord.nsRecord.getValue('itemhandlingfee') as any;
  }
  public set itemhandlingfee(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('itemhandlingfee', value as any)
  }
  public get itemid(): string {
    return this.typedRecord.nsRecord.getValue('itemid') as any;
  }
  public set itemid(value: string) {
    this.typedRecord.nsRecord.setValue('itemid', value as any)
  }
  public get iteminsurancefee(): string | undefined {
    return this.typedRecord.nsRecord.getValue('iteminsurancefee') as any;
  }
  public set iteminsurancefee(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('iteminsurancefee', value as any)
  }
  public get itemoptions(): string | undefined {
    return this.typedRecord.nsRecord.getValue('itemoptions') as any;
  }
  public set itemoptions(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('itemoptions', value as any)
  }
  public get itemrevenuecategory(): string | undefined {
    return this.typedRecord.nsRecord.getValue('itemrevenuecategory') as any;
  }
  public set itemrevenuecategory(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('itemrevenuecategory', value as any)
  }
  public get itemshipinsurance(): string | undefined {
    return this.typedRecord.nsRecord.getValue('itemshipinsurance') as any;
  }
  public set itemshipinsurance(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('itemshipinsurance', value as any)
  }
  public get itemtype(): string | undefined {
    return this.typedRecord.nsRecord.getValue('itemtype') as any;
  }
  public set itemtype(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('itemtype', value as any)
  }
  public get lastmodifieddate(): string | undefined {
    return this.typedRecord.nsRecord.getValue('lastmodifieddate') as any;
  }
  public set lastmodifieddate(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('lastmodifieddate', value as any)
  }
  public get listimmediate(): string | undefined {
    return this.typedRecord.nsRecord.getValue('listimmediate') as any;
  }
  public set listimmediate(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('listimmediate', value as any)
  }
  public get listingduration(): string | undefined {
    return this.typedRecord.nsRecord.getValue('listingduration') as any;
  }
  public set listingduration(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('listingduration', value as any)
  }
  public get listingstartdate(): Date | undefined {
    return this.typedRecord.nsRecord.getValue('listingstartdate') as any;
  }
  public set listingstartdate(value: Date | undefined) {
    this.typedRecord.nsRecord.setValue('listingstartdate', value as any)
  }
  public get listingstarttime(): string | undefined {
    return this.typedRecord.nsRecord.getValue('listingstarttime') as any;
  }
  public set listingstarttime(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('listingstarttime', value as any)
  }
  public get location(): string | undefined {
    return this.typedRecord.nsRecord.getValue('location') as any;
  }
  public set location(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('location', value as any)
  }
  public get manufacturer(): string | undefined {
    return this.typedRecord.nsRecord.getValue('manufacturer') as any;
  }
  public set manufacturer(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('manufacturer', value as any)
  }
  public get manufactureraddr1(): string | undefined {
    return this.typedRecord.nsRecord.getValue('manufactureraddr1') as any;
  }
  public set manufactureraddr1(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('manufactureraddr1', value as any)
  }
  public get manufacturercity(): string | undefined {
    return this.typedRecord.nsRecord.getValue('manufacturercity') as any;
  }
  public set manufacturercity(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('manufacturercity', value as any)
  }
  public get manufacturerstate(): string | undefined {
    return this.typedRecord.nsRecord.getValue('manufacturerstate') as any;
  }
  public set manufacturerstate(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('manufacturerstate', value as any)
  }
  public get manufacturertariff(): string | undefined {
    return this.typedRecord.nsRecord.getValue('manufacturertariff') as any;
  }
  public set manufacturertariff(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('manufacturertariff', value as any)
  }
  public get manufacturertaxid(): string | undefined {
    return this.typedRecord.nsRecord.getValue('manufacturertaxid') as any;
  }
  public set manufacturertaxid(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('manufacturertaxid', value as any)
  }
  public get manufacturerzip(): string | undefined {
    return this.typedRecord.nsRecord.getValue('manufacturerzip') as any;
  }
  public set manufacturerzip(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('manufacturerzip', value as any)
  }
  public get matrixitemnametemplate(): string | undefined {
    return this.typedRecord.nsRecord.getValue('matrixitemnametemplate') as any;
  }
  public set matrixitemnametemplate(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('matrixitemnametemplate', value as any)
  }
  public get matrixtype(): string | undefined {
    return this.typedRecord.nsRecord.getValue('matrixtype') as any;
  }
  public set matrixtype(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('matrixtype', value as any)
  }
  public get maxdonationamount(): string | undefined {
    return this.typedRecord.nsRecord.getValue('maxdonationamount') as any;
  }
  public set maxdonationamount(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('maxdonationamount', value as any)
  }
  public get maximumquantity(): string | undefined {
    return this.typedRecord.nsRecord.getValue('maximumquantity') as any;
  }
  public set maximumquantity(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('maximumquantity', value as any)
  }
  public get metataghtml(): string | undefined {
    return this.typedRecord.nsRecord.getValue('metataghtml') as any;
  }
  public set metataghtml(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('metataghtml', value as any)
  }
  public get minimumquantity(): string | undefined {
    return this.typedRecord.nsRecord.getValue('minimumquantity') as any;
  }
  public set minimumquantity(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('minimumquantity', value as any)
  }
  public get minimumquantityunits(): string | undefined {
    return this.typedRecord.nsRecord.getValue('minimumquantityunits') as any;
  }
  public set minimumquantityunits(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('minimumquantityunits', value as any)
  }
  public get mossapplies(): boolean | undefined {
    return this.typedRecord.nsRecord.getValue('mossapplies') as any;
  }
  public set mossapplies(value: boolean | undefined) {
    this.typedRecord.nsRecord.setValue('mossapplies', value as any)
  }
  public get mpn(): string | undefined {
    return this.typedRecord.nsRecord.getValue('mpn') as any;
  }
  public set mpn(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('mpn', value as any)
  }
  public get multmanufactureaddr(): boolean | undefined {
    return this.typedRecord.nsRecord.getValue('multmanufactureaddr') as any;
  }
  public set multmanufactureaddr(value: boolean | undefined) {
    this.typedRecord.nsRecord.setValue('multmanufactureaddr', value as any)
  }
  public get nextagcategory(): string | undefined {
    return this.typedRecord.nsRecord.getValue('nextagcategory') as any;
  }
  public set nextagcategory(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('nextagcategory', value as any)
  }
  public get nextagproductfeed(): string | undefined {
    return this.typedRecord.nsRecord.getValue('nextagproductfeed') as any;
  }
  public set nextagproductfeed(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('nextagproductfeed', value as any)
  }
  public get nopricemessage(): string | undefined {
    return this.typedRecord.nsRecord.getValue('nopricemessage') as any;
  }
  public set nopricemessage(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('nopricemessage', value as any)
  }
  public get numactivelistings(): number | undefined {
    return this.typedRecord.nsRecord.getValue('numactivelistings') as any;
  }
  public set numactivelistings(value: number | undefined) {
    this.typedRecord.nsRecord.setValue('numactivelistings', value as any)
  }
  public get numcurrentlylisted(): number | undefined {
    return this.typedRecord.nsRecord.getValue('numcurrentlylisted') as any;
  }
  public set numcurrentlylisted(value: number | undefined) {
    this.typedRecord.nsRecord.setValue('numcurrentlylisted', value as any)
  }
  public get offersupport(): boolean | undefined {
    return this.typedRecord.nsRecord.getValue('offersupport') as any;
  }
  public set offersupport(value: boolean | undefined) {
    this.typedRecord.nsRecord.setValue('offersupport', value as any)
  }
  public get outofstockbehavior(): string | undefined {
    return this.typedRecord.nsRecord.getValue('outofstockbehavior') as any;
  }
  public set outofstockbehavior(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('outofstockbehavior', value as any)
  }
  public get outofstockmessage(): string | undefined {
    return this.typedRecord.nsRecord.getValue('outofstockmessage') as any;
  }
  public set outofstockmessage(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('outofstockmessage', value as any)
  }
  public get overallquantitypricingtype(): string | undefined {
    return this.typedRecord.nsRecord.getValue('overallquantitypricingtype') as any;
  }
  public set overallquantitypricingtype(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('overallquantitypricingtype', value as any)
  }
  public get overheadtype(): string {
    return this.typedRecord.nsRecord.getValue('overheadtype') as any;
  }
  public set overheadtype(value: string) {
    this.typedRecord.nsRecord.setValue('overheadtype', value as any)
  }
  public get packageheight(): string | undefined {
    return this.typedRecord.nsRecord.getValue('packageheight') as any;
  }
  public set packageheight(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('packageheight', value as any)
  }
  public get packagelength(): string | undefined {
    return this.typedRecord.nsRecord.getValue('packagelength') as any;
  }
  public set packagelength(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('packagelength', value as any)
  }
  public get packagewidth(): string | undefined {
    return this.typedRecord.nsRecord.getValue('packagewidth') as any;
  }
  public set packagewidth(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('packagewidth', value as any)
  }
  public get pagetitle(): string | undefined {
    return this.typedRecord.nsRecord.getValue('pagetitle') as any;
  }
  public set pagetitle(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('pagetitle', value as any)
  }
  public get parent(): string | undefined {
    return this.typedRecord.nsRecord.getValue('parent') as any;
  }
  public set parent(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('parent', value as any)
  }
  public get preferencecriterion(): string | undefined {
    return this.typedRecord.nsRecord.getValue('preferencecriterion') as any;
  }
  public set preferencecriterion(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('preferencecriterion', value as any)
  }
  public get pricinggroup(): string | undefined {
    return this.typedRecord.nsRecord.getValue('pricinggroup') as any;
  }
  public set pricinggroup(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('pricinggroup', value as any)
  }
  public get primarycatdisplayname(): string | undefined {
    return this.typedRecord.nsRecord.getValue('primarycatdisplayname') as any;
  }
  public set primarycatdisplayname(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('primarycatdisplayname', value as any)
  }
  public get primarycategory(): number | undefined {
    return this.typedRecord.nsRecord.getValue('primarycategory') as any;
  }
  public set primarycategory(value: number | undefined) {
    this.typedRecord.nsRecord.setValue('primarycategory', value as any)
  }
  public get producer(): boolean | undefined {
    return this.typedRecord.nsRecord.getValue('producer') as any;
  }
  public set producer(value: boolean | undefined) {
    this.typedRecord.nsRecord.setValue('producer', value as any)
  }
  public get productfeed(): string | undefined {
    return this.typedRecord.nsRecord.getValue('productfeed') as any;
  }
  public set productfeed(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('productfeed', value as any)
  }
  public get purchasedescription(): string | undefined {
    return this.typedRecord.nsRecord.getValue('purchasedescription') as any;
  }
  public set purchasedescription(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('purchasedescription', value as any)
  }
  public get purchaseorderamount(): string | undefined {
    return this.typedRecord.nsRecord.getValue('purchaseorderamount') as any;
  }
  public set purchaseorderamount(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('purchaseorderamount', value as any)
  }
  public get purchaseorderquantity(): string | undefined {
    return this.typedRecord.nsRecord.getValue('purchaseorderquantity') as any;
  }
  public set purchaseorderquantity(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('purchaseorderquantity', value as any)
  }
  public get purchaseorderquantitydiff(): string | undefined {
    return this.typedRecord.nsRecord.getValue('purchaseorderquantitydiff') as any;
  }
  public set purchaseorderquantitydiff(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('purchaseorderquantitydiff', value as any)
  }
  public get purchaseunit(): string | undefined {
    return this.typedRecord.nsRecord.getValue('purchaseunit') as any;
  }
  public set purchaseunit(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('purchaseunit', value as any)
  }
  public get quantitypricingschedule(): string | undefined {
    return this.typedRecord.nsRecord.getValue('quantitypricingschedule') as any;
  }
  public set quantitypricingschedule(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('quantitypricingschedule', value as any)
  }
  public get receiptamount(): string | undefined {
    return this.typedRecord.nsRecord.getValue('receiptamount') as any;
  }
  public set receiptamount(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('receiptamount', value as any)
  }
  public get receiptquantity(): string | undefined {
    return this.typedRecord.nsRecord.getValue('receiptquantity') as any;
  }
  public set receiptquantity(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('receiptquantity', value as any)
  }
  public get receiptquantitydiff(): string | undefined {
    return this.typedRecord.nsRecord.getValue('receiptquantitydiff') as any;
  }
  public set receiptquantitydiff(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('receiptquantitydiff', value as any)
  }
  public get refundgivenas(): string | undefined {
    return this.typedRecord.nsRecord.getValue('refundgivenas') as any;
  }
  public set refundgivenas(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('refundgivenas', value as any)
  }
  public get relateditemsdescription(): string | undefined {
    return this.typedRecord.nsRecord.getValue('relateditemsdescription') as any;
  }
  public set relateditemsdescription(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('relateditemsdescription', value as any)
  }
  public get reserveprice(): string | undefined {
    return this.typedRecord.nsRecord.getValue('reserveprice') as any;
  }
  public set reserveprice(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('reserveprice', value as any)
  }
  public get residual(): string | undefined {
    return this.typedRecord.nsRecord.getValue('residual') as any;
  }
  public set residual(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('residual', value as any)
  }
  public get returnpolicy(): string | undefined {
    return this.typedRecord.nsRecord.getValue('returnpolicy') as any;
  }
  public set returnpolicy(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('returnpolicy', value as any)
  }
  public get returnpolicydetails(): string | undefined {
    return this.typedRecord.nsRecord.getValue('returnpolicydetails') as any;
  }
  public set returnpolicydetails(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('returnpolicydetails', value as any)
  }
  public get returnshippingpaidby(): string | undefined {
    return this.typedRecord.nsRecord.getValue('returnshippingpaidby') as any;
  }
  public set returnshippingpaidby(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('returnshippingpaidby', value as any)
  }
  public get returnswithin(): string | undefined {
    return this.typedRecord.nsRecord.getValue('returnswithin') as any;
  }
  public set returnswithin(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('returnswithin', value as any)
  }
  public get revenueallocationgroup(): string | undefined {
    return this.typedRecord.nsRecord.getValue('revenueallocationgroup') as any;
  }
  public set revenueallocationgroup(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('revenueallocationgroup', value as any)
  }
  public get revenuerecognitionrule(): string | undefined {
    return this.typedRecord.nsRecord.getValue('revenuerecognitionrule') as any;
  }
  public set revenuerecognitionrule(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('revenuerecognitionrule', value as any)
  }
  public get revrecforecastrule(): string {
    return this.typedRecord.nsRecord.getValue('revrecforecastrule') as any;
  }
  public set revrecforecastrule(value: string) {
    this.typedRecord.nsRecord.setValue('revrecforecastrule', value as any)
  }
  public get revreclassfxaccount(): string | undefined {
    return this.typedRecord.nsRecord.getValue('revreclassfxaccount') as any;
  }
  public set revreclassfxaccount(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('revreclassfxaccount', value as any)
  }
  public get revrecschedule(): string | undefined {
    return this.typedRecord.nsRecord.getValue('revrecschedule') as any;
  }
  public set revrecschedule(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('revrecschedule', value as any)
  }
  public get salesdescription(): string | undefined {
    return this.typedRecord.nsRecord.getValue('salesdescription') as any;
  }
  public set salesdescription(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('salesdescription', value as any)
  }
  public get saleunit(): string | undefined {
    return this.typedRecord.nsRecord.getValue('saleunit') as any;
  }
  public set saleunit(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('saleunit', value as any)
  }
  public get schedulebcode(): string | undefined {
    return this.typedRecord.nsRecord.getValue('schedulebcode') as any;
  }
  public set schedulebcode(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('schedulebcode', value as any)
  }
  public get schedulebnumber(): string | undefined {
    return this.typedRecord.nsRecord.getValue('schedulebnumber') as any;
  }
  public set schedulebnumber(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('schedulebnumber', value as any)
  }
  public get schedulebquantity(): string | undefined {
    return this.typedRecord.nsRecord.getValue('schedulebquantity') as any;
  }
  public set schedulebquantity(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('schedulebquantity', value as any)
  }
  public get searchkeywords(): string | undefined {
    return this.typedRecord.nsRecord.getValue('searchkeywords') as any;
  }
  public set searchkeywords(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('searchkeywords', value as any)
  }
  public get secondarycatdisplayname(): string | undefined {
    return this.typedRecord.nsRecord.getValue('secondarycatdisplayname') as any;
  }
  public set secondarycatdisplayname(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('secondarycatdisplayname', value as any)
  }
  public get secondarycategory(): number | undefined {
    return this.typedRecord.nsRecord.getValue('secondarycategory') as any;
  }
  public set secondarycategory(value: number | undefined) {
    this.typedRecord.nsRecord.setValue('secondarycategory', value as any)
  }
  public get sellonebay(): boolean | undefined {
    return this.typedRecord.nsRecord.getValue('sellonebay') as any;
  }
  public set sellonebay(value: boolean | undefined) {
    this.typedRecord.nsRecord.setValue('sellonebay', value as any)
  }
  public get shipasia(): boolean | undefined {
    return this.typedRecord.nsRecord.getValue('shipasia') as any;
  }
  public set shipasia(value: boolean | undefined) {
    this.typedRecord.nsRecord.setValue('shipasia', value as any)
  }
  public get shipaustralia(): boolean | undefined {
    return this.typedRecord.nsRecord.getValue('shipaustralia') as any;
  }
  public set shipaustralia(value: boolean | undefined) {
    this.typedRecord.nsRecord.setValue('shipaustralia', value as any)
  }
  public get shipcanada(): boolean | undefined {
    return this.typedRecord.nsRecord.getValue('shipcanada') as any;
  }
  public set shipcanada(value: boolean | undefined) {
    this.typedRecord.nsRecord.setValue('shipcanada', value as any)
  }
  public get shipeurope(): boolean | undefined {
    return this.typedRecord.nsRecord.getValue('shipeurope') as any;
  }
  public set shipeurope(value: boolean | undefined) {
    this.typedRecord.nsRecord.setValue('shipeurope', value as any)
  }
  public get shipgermany(): boolean | undefined {
    return this.typedRecord.nsRecord.getValue('shipgermany') as any;
  }
  public set shipgermany(value: boolean | undefined) {
    this.typedRecord.nsRecord.setValue('shipgermany', value as any)
  }
  public get shipindividually(): boolean | undefined {
    return this.typedRecord.nsRecord.getValue('shipindividually') as any;
  }
  public set shipindividually(value: boolean | undefined) {
    this.typedRecord.nsRecord.setValue('shipindividually', value as any)
  }
  public get shipjapan(): boolean | undefined {
    return this.typedRecord.nsRecord.getValue('shipjapan') as any;
  }
  public set shipjapan(value: boolean | undefined) {
    this.typedRecord.nsRecord.setValue('shipjapan', value as any)
  }
  public get shipmexico(): boolean | undefined {
    return this.typedRecord.nsRecord.getValue('shipmexico') as any;
  }
  public set shipmexico(value: boolean | undefined) {
    this.typedRecord.nsRecord.setValue('shipmexico', value as any)
  }
  public get shipnorthsouthamerica(): boolean | undefined {
    return this.typedRecord.nsRecord.getValue('shipnorthsouthamerica') as any;
  }
  public set shipnorthsouthamerica(value: boolean | undefined) {
    this.typedRecord.nsRecord.setValue('shipnorthsouthamerica', value as any)
  }
  public get shippackage(): string | undefined {
    return this.typedRecord.nsRecord.getValue('shippackage') as any;
  }
  public set shippackage(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('shippackage', value as any)
  }
  public get shippingcost(): string | undefined {
    return this.typedRecord.nsRecord.getValue('shippingcost') as any;
  }
  public set shippingcost(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('shippingcost', value as any)
  }
  public get shippingcostunits(): string | undefined {
    return this.typedRecord.nsRecord.getValue('shippingcostunits') as any;
  }
  public set shippingcostunits(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('shippingcostunits', value as any)
  }
  public get shippingdomesticmethodsgroup(): string | undefined {
    return this.typedRecord.nsRecord.getValue('shippingdomesticmethodsgroup') as any;
  }
  public set shippingdomesticmethodsgroup(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('shippingdomesticmethodsgroup', value as any)
  }
  public get shippingdomgroup(): string | undefined {
    return this.typedRecord.nsRecord.getValue('shippingdomgroup') as any;
  }
  public set shippingdomgroup(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('shippingdomgroup', value as any)
  }
  public get shippingintlgroup(): string | undefined {
    return this.typedRecord.nsRecord.getValue('shippingintlgroup') as any;
  }
  public set shippingintlgroup(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('shippingintlgroup', value as any)
  }
  public get shippingintlgroup1(): string | undefined {
    return this.typedRecord.nsRecord.getValue('shippingintlgroup1') as any;
  }
  public set shippingintlgroup1(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('shippingintlgroup1', value as any)
  }
  public get shippingintlgroup2(): string | undefined {
    return this.typedRecord.nsRecord.getValue('shippingintlgroup2') as any;
  }
  public set shippingintlgroup2(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('shippingintlgroup2', value as any)
  }
  public get shippingintlgroup3(): string | undefined {
    return this.typedRecord.nsRecord.getValue('shippingintlgroup3') as any;
  }
  public set shippingintlgroup3(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('shippingintlgroup3', value as any)
  }
  public get shippingitem1(): string | undefined {
    return this.typedRecord.nsRecord.getValue('shippingitem1') as any;
  }
  public set shippingitem1(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('shippingitem1', value as any)
  }
  public get shippingitem2(): string | undefined {
    return this.typedRecord.nsRecord.getValue('shippingitem2') as any;
  }
  public set shippingitem2(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('shippingitem2', value as any)
  }
  public get shippingitem3(): string | undefined {
    return this.typedRecord.nsRecord.getValue('shippingitem3') as any;
  }
  public set shippingitem3(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('shippingitem3', value as any)
  }
  public get shippinglocationsgroup(): string | undefined {
    return this.typedRecord.nsRecord.getValue('shippinglocationsgroup') as any;
  }
  public set shippinglocationsgroup(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('shippinglocationsgroup', value as any)
  }
  public get shippingpackaginggroup(): string | undefined {
    return this.typedRecord.nsRecord.getValue('shippingpackaginggroup') as any;
  }
  public set shippingpackaginggroup(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('shippingpackaginggroup', value as any)
  }
  public get shippingrate1(): string | undefined {
    return this.typedRecord.nsRecord.getValue('shippingrate1') as any;
  }
  public set shippingrate1(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('shippingrate1', value as any)
  }
  public get shippingrate2(): string | undefined {
    return this.typedRecord.nsRecord.getValue('shippingrate2') as any;
  }
  public set shippingrate2(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('shippingrate2', value as any)
  }
  public get shippingrate3(): string | undefined {
    return this.typedRecord.nsRecord.getValue('shippingrate3') as any;
  }
  public set shippingrate3(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('shippingrate3', value as any)
  }
  public get shipuk(): boolean | undefined {
    return this.typedRecord.nsRecord.getValue('shipuk') as any;
  }
  public set shipuk(value: boolean | undefined) {
    this.typedRecord.nsRecord.setValue('shipuk', value as any)
  }
  public get shipworldwide(): boolean | undefined {
    return this.typedRecord.nsRecord.getValue('shipworldwide') as any;
  }
  public set shipworldwide(value: boolean | undefined) {
    this.typedRecord.nsRecord.setValue('shipworldwide', value as any)
  }
  public get shoppingdotcomcategory(): string | undefined {
    return this.typedRecord.nsRecord.getValue('shoppingdotcomcategory') as any;
  }
  public set shoppingdotcomcategory(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('shoppingdotcomcategory', value as any)
  }
  public get shoppingproductfeed(): string | undefined {
    return this.typedRecord.nsRecord.getValue('shoppingproductfeed') as any;
  }
  public set shoppingproductfeed(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('shoppingproductfeed', value as any)
  }
  public get shopzillacategoryid(): number | undefined {
    return this.typedRecord.nsRecord.getValue('shopzillacategoryid') as any;
  }
  public set shopzillacategoryid(value: number | undefined) {
    this.typedRecord.nsRecord.setValue('shopzillacategoryid', value as any)
  }
  public get shopzillaproductfeed(): string | undefined {
    return this.typedRecord.nsRecord.getValue('shopzillaproductfeed') as any;
  }
  public set shopzillaproductfeed(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('shopzillaproductfeed', value as any)
  }
  public get showasgift(): boolean | undefined {
    return this.typedRecord.nsRecord.getValue('showasgift') as any;
  }
  public set showasgift(value: boolean | undefined) {
    this.typedRecord.nsRecord.setValue('showasgift', value as any)
  }
  public get showdefaultdonationamount(): boolean | undefined {
    return this.typedRecord.nsRecord.getValue('showdefaultdonationamount') as any;
  }
  public set showdefaultdonationamount(value: boolean | undefined) {
    this.typedRecord.nsRecord.setValue('showdefaultdonationamount', value as any)
  }
  public get sitemappriority(): string | undefined {
    return this.typedRecord.nsRecord.getValue('sitemappriority') as any;
  }
  public set sitemappriority(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('sitemappriority', value as any)
  }
  public get softdescriptor(): string | undefined {
    return this.typedRecord.nsRecord.getValue('softdescriptor') as any;
  }
  public set softdescriptor(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('softdescriptor', value as any)
  }
  public get standardimages(): string | undefined {
    return this.typedRecord.nsRecord.getValue('standardimages') as any;
  }
  public set standardimages(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('standardimages', value as any)
  }
  public get startingprice(): string | undefined {
    return this.typedRecord.nsRecord.getValue('startingprice') as any;
  }
  public set startingprice(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('startingprice', value as any)
  }
  public get stockdescription(): string | undefined {
    return this.typedRecord.nsRecord.getValue('stockdescription') as any;
  }
  public set stockdescription(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('stockdescription', value as any)
  }
  public get storecatdisplayname(): string | undefined {
    return this.typedRecord.nsRecord.getValue('storecatdisplayname') as any;
  }
  public set storecatdisplayname(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('storecatdisplayname', value as any)
  }
  public get storecatdisplayname2(): string | undefined {
    return this.typedRecord.nsRecord.getValue('storecatdisplayname2') as any;
  }
  public set storecatdisplayname2(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('storecatdisplayname2', value as any)
  }
  public get storecategory(): number | undefined {
    return this.typedRecord.nsRecord.getValue('storecategory') as any;
  }
  public set storecategory(value: number | undefined) {
    this.typedRecord.nsRecord.setValue('storecategory', value as any)
  }
  public get storecategory2(): number | undefined {
    return this.typedRecord.nsRecord.getValue('storecategory2') as any;
  }
  public set storecategory2(value: number | undefined) {
    this.typedRecord.nsRecord.setValue('storecategory2', value as any)
  }
  public get storedescription(): string | undefined {
    return this.typedRecord.nsRecord.getValue('storedescription') as any;
  }
  public set storedescription(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('storedescription', value as any)
  }
  public get storedetaileddescription(): string | undefined {
    return this.typedRecord.nsRecord.getValue('storedetaileddescription') as any;
  }
  public set storedetaileddescription(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('storedetaileddescription', value as any)
  }
  public get storedisplayimage(): string | undefined {
    return this.typedRecord.nsRecord.getValue('storedisplayimage') as any;
  }
  public set storedisplayimage(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('storedisplayimage', value as any)
  }
  public get storedisplayname(): string | undefined {
    return this.typedRecord.nsRecord.getValue('storedisplayname') as any;
  }
  public set storedisplayname(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('storedisplayname', value as any)
  }
  public get storedisplaythumbnail(): string | undefined {
    return this.typedRecord.nsRecord.getValue('storedisplaythumbnail') as any;
  }
  public set storedisplaythumbnail(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('storedisplaythumbnail', value as any)
  }
  public get storeitemtemplate(): string | undefined {
    return this.typedRecord.nsRecord.getValue('storeitemtemplate') as any;
  }
  public set storeitemtemplate(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('storeitemtemplate', value as any)
  }
  public get subsidiary(): string | undefined {
    return this.typedRecord.nsRecord.getValue('subsidiary') as any;
  }
  public set subsidiary(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('subsidiary', value as any)
  }
  public get subtype(): string | undefined {
    return this.typedRecord.nsRecord.getValue('subtype') as any;
  }
  public set subtype(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('subtype', value as any)
  }
  public get supersizeimages(): boolean | undefined {
    return this.typedRecord.nsRecord.getValue('supersizeimages') as any;
  }
  public set supersizeimages(value: boolean | undefined) {
    this.typedRecord.nsRecord.setValue('supersizeimages', value as any)
  }
  public get taxable(): boolean | undefined {
    return this.typedRecord.nsRecord.getValue('taxable') as any;
  }
  public set taxable(value: boolean | undefined) {
    this.typedRecord.nsRecord.setValue('taxable', value as any)
  }
  public get taxschedule(): string {
    return this.typedRecord.nsRecord.getValue('taxschedule') as any;
  }
  public set taxschedule(value: string) {
    this.typedRecord.nsRecord.setValue('taxschedule', value as any)
  }
  public get templatesgroup(): string | undefined {
    return this.typedRecord.nsRecord.getValue('templatesgroup') as any;
  }
  public set templatesgroup(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('templatesgroup', value as any)
  }
  public get unitstype(): string | undefined {
    return this.typedRecord.nsRecord.getValue('unitstype') as any;
  }
  public set unitstype(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('unitstype', value as any)
  }
  public get upccode(): string | undefined {
    return this.typedRecord.nsRecord.getValue('upccode') as any;
  }
  public set upccode(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('upccode', value as any)
  }
  public get urlcomponent(): string | undefined {
    return this.typedRecord.nsRecord.getValue('urlcomponent') as any;
  }
  public set urlcomponent(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('urlcomponent', value as any)
  }
  public get usemarginalrates(): boolean | undefined {
    return this.typedRecord.nsRecord.getValue('usemarginalrates') as any;
  }
  public set usemarginalrates(value: boolean | undefined) {
    this.typedRecord.nsRecord.setValue('usemarginalrates', value as any)
  }
  public get vendorname(): string | undefined {
    return this.typedRecord.nsRecord.getValue('vendorname') as any;
  }
  public set vendorname(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('vendorname', value as any)
  }
  public get vsoedeferral(): string | undefined {
    return this.typedRecord.nsRecord.getValue('vsoedeferral') as any;
  }
  public set vsoedeferral(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('vsoedeferral', value as any)
  }
  public get vsoedelivered(): boolean | undefined {
    return this.typedRecord.nsRecord.getValue('vsoedelivered') as any;
  }
  public set vsoedelivered(value: boolean | undefined) {
    this.typedRecord.nsRecord.setValue('vsoedelivered', value as any)
  }
  public get vsoepermitdiscount(): string | undefined {
    return this.typedRecord.nsRecord.getValue('vsoepermitdiscount') as any;
  }
  public set vsoepermitdiscount(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('vsoepermitdiscount', value as any)
  }
  public get vsoeprice(): string | undefined {
    return this.typedRecord.nsRecord.getValue('vsoeprice') as any;
  }
  public set vsoeprice(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('vsoeprice', value as any)
  }
  public get vsoesopgroup(): string | undefined {
    return this.typedRecord.nsRecord.getValue('vsoesopgroup') as any;
  }
  public set vsoesopgroup(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('vsoesopgroup', value as any)
  }
  public get weight(): number | undefined {
    return this.typedRecord.nsRecord.getValue('weight') as any;
  }
  public set weight(value: number | undefined) {
    this.typedRecord.nsRecord.setValue('weight', value as any)
  }
  public get weightunit(): string | undefined {
    return this.typedRecord.nsRecord.getValue('weightunit') as any;
  }
  public set weightunit(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('weightunit', value as any)
  }
  public get weightunits(): string | undefined {
    return this.typedRecord.nsRecord.getValue('weightunits') as any;
  }
  public set weightunits(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('weightunits', value as any)
  }
  public get willship(): string | undefined {
    return this.typedRecord.nsRecord.getValue('willship') as any;
  }
  public set willship(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('willship', value as any)
  }
  public get yahooproductfeed(): string | undefined {
    return this.typedRecord.nsRecord.getValue('yahooproductfeed') as any;
  }
  public set yahooproductfeed(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('yahooproductfeed', value as any)
  }
}


/** 
 * Non-Inventory Part Record Definition.
 * Record's Internal Id: noninventoryitem. 
 * Supports Custom Fields: true 
 */
export interface noninventoryitemRecord extends TypedRecord<noninventoryitemFields> {

}

export class noninventoryitemRecordImpl extends TypedRecordImpl<noninventoryitemFields> implements noninventoryitemRecord {
  constructor(public nsRecord: Record) {
    super(nsRecord)
    this._fields = new noninventoryitemFieldsImpl(this);
    // this._sublists = noninventoryitemnew FieldsImpl(this)
  }
}


