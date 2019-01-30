// This file is auto generated, do not edit it. 




/** 
 * Lead Fields Definition.
 * Record's Internal Id: lead. 
 * Supports Custom Fields: false 
 */
export interface leadFields {
/**  */
  accessrole?: string;
  /**  */
  accountnumber?: string;
  /**  */
  altemail?: string;
  /**  */
  altphone?: string;
  /**  */
  assignedwebsite?: string;
  /**  */
  autoname?: boolean;
  /**  */
  balance?: number;
  /**  */
  buyingreason?: string;
  /**  */
  buyingtimeframe?: string;
  /**  */
  campaigncategory?: string;
  /**  */
  category?: string;
  /**  */
  clickstream?: string;
  /**  */
  comments?: string;
  /**  */
  companyname?: string;
  /**  */
  consolbalance?: number;
  /**  */
  consoldaysoverdue?: number;
  /**  */
  consoldepositbalance?: number;
  /**  */
  consoloverduebalance?: number;
  /**  */
  consolunbilledorders?: number;
  /**  */
  contact?: string;
  /**  */
  creditholdoverride?: string;
  /**  */
  creditlimit?: string;
  /**  */
  currency: string;
  /**  */
  currencyprecision?: string;
  /**  */
  customform: string;
  /**  */
  datecreated?: Date;
  /**  */
  daysoverdue?: number;
  /**  */
  defaultaddress?: string;
  /**  */
  defaultbankaccount?: string;
  /**  */
  depositbalance?: number;
  /**  */
  draccount?: string;
  /**  */
  email?: string;
  /**  */
  emailpreference?: string;
  /**  */
  emailtransactions?: boolean;
  /**  */
  entityid: string;
  /**  */
  entitystatus: string;
  /**  */
  estimatedbudget?: number;
  /**  */
  externalid?: string;
  /**  */
  fax?: string;
  /**  */
  faxtransactions?: boolean;
  /**  */
  firstname?: string;
  /**  */
  firstvisit?: Date;
  /**  */
  fxaccount?: string;
  /**  */
  giveaccess?: boolean;
  /**  */
  globalsubscriptionstatus?: string;
  /**  */
  homephone?: string;
  /**  */
  image?: string;
  /**  */
  isbudgetapproved?: boolean;
  /**  */
  isinactive?: boolean;
  /**  */
  isjob?: string;
  /**  */
  isperson?: string;
  /**  */
  keywords?: string;
  /**  */
  language?: string;
  /**  */
  lastmodifieddate?: Date;
  /**  */
  lastname?: string;
  /**  */
  lastpagevisited?: string;
  /**  */
  lastvisit?: Date;
  /**  */
  leadsource?: string;
  /**  */
  middlename?: string;
  /**  */
  mobilephone?: string;
  /**  */
  monthlyclosing: string;
  /**  */
  negativenumberformat?: string;
  /**  */
  numberformat?: string;
  /**  */
  otherrelationships?: string;
  /**  */
  overduebalance?: number;
  /**  */
  parent?: string;
  /**  */
  partner?: string;
  /**  */
  phone?: string;
  /**  */
  phoneticname?: string;
  /**  */
  prefccprocessor?: string;
  /**  */
  pricelevel?: string;
  /**  */
  printoncheckas?: string;
  /**  */
  printtransactions?: boolean;
  /**  */
  receivablesaccount?: string;
  /**  */
  referrer?: string;
  /**  */
  resalenumber?: string;
  /**  */
  salesgroup?: string;
  /**  */
  salesreadiness?: string;
  /**  */
  salesrep?: number;
  /**  */
  salutation?: string;
  /**  */
  sendemail?: boolean;
  /**  */
  sourcewebsite?: string;
  /**  */
  stage?: string;
  /**  */
  strength?: string;
  /**  */
  subsidiary: string;
  /**  */
  syncpartnerteams?: boolean;
  /**  */
  syncsalesteams?: boolean;
  /**  */
  taxable?: boolean;
  /**  */
  taxexempt?: boolean;
  /**  */
  taxfractionunit?: string;
  /**  */
  taxitem?: string;
  /**  */
  taxrounding?: string;
  /**  */
  terms?: string;
  /**  */
  territory?: string;
  /**  */
  title?: string;
  /**  */
  unbilledorders?: number;
  /**  */
  unsubscribe?: string;
  /**  */
  url?: string;
  /**  */
  vatregnumber?: string;
  /**  */
  visits?: number;
  /**  */
  weblead?: string;
}





/** 
 * Lead Sublists Definition.
 * Record's Internal Id: lead. 
 * Supports Custom Fields: false 
 */
export interface leadSublists {
  
  /** addressbook: Address */
  addressbook: {
    /** addressbookaddress - Edit  */
    addressbookaddress: string;
    /** addressid -   */
    addressid: string;
    /** addrtext - Address  */
    addrtext: string;
    /** attention - Attention  */
    attention: string;
    /** city - City  */
    city: string;
    /** country - Country  */
    country: string;
    /** defaultbilling - Default Billing  */
    defaultbilling: boolean;
    /** defaultshipping - Default Shipping  */
    defaultshipping: boolean;
    /** displaystate - State/Province  */
    displaystate: string;
    /** id - ID  */
    id: number;
    /** internalid -   */
    internalid: number;
    /** isresidential - Residential Address  */
    isresidential: boolean;
    /** label - Label  */
    label: string;
    /** override - Override  */
    override: boolean;
    /** phone - Phone  */
    phone: string;
    /** state - State/Province  */
    state: string;
    /** zip - Zip  */
    zip: string;
  }

  /** contactroles: Contacts */
  contactroles: {
    /** contact - Contact  */
    contact: string;
    /** email - Email  */
    email: string;
    /** giveaccess - Access  */
    giveaccess: boolean;
    /** passwordconfirm - Confirm Password  */
    passwordconfirm: string;
    /** role - Role  */
    role: string;
    /** sendemail - Notify  */
    sendemail: boolean;
    /** strength - Password Strength  */
    strength: string;
  }

  /** currency: Currencies */
  currency: {
    /** balance - Balance  */
    balance: number;
    /** consolbalance - Consolidated  */
    consolbalance: number;
    /** consoldepositbalance - Consolidated  */
    consoldepositbalance: number;
    /** consoloverduebalance - Consolidated  */
    consoloverduebalance: number;
    /** consolunbilledorders - Consolidated  */
    consolunbilledorders: number;
    /** currency - Currency  */
    currency?: string;
    /** currencyformatsample - Format Sample  */
    currencyformatsample: string;
    /** depositbalance - Deposit Balance  */
    depositbalance: number;
    /** displaysymbol - Symbol  */
    displaysymbol: string;
    /** overduebalance - Overdue Balance  */
    overduebalance: number;
    /** overridecurrencyformat - Override Currency Format  */
    overridecurrencyformat: boolean;
    /** symbolplacement - Symbol Placement  */
    symbolplacement: string;
    /** unbilledorders - Unbilled Orders  */
    unbilledorders: number;
  }

  /** download: Downloads */
  download: {
    /** expiration - Expiration Date  */
    expiration: Date;
    /** file - Attach File  */
    file: string;
    /** licensecode - License Code  */
    licensecode: string;
    /** remainingdownloads - Remaining Downloads  */
    remainingdownloads: number;
  }

  /** grouppricing: Group Pricing */
  grouppricing: {
    /** group - Pricing Group  */
    group?: string;
    /** level - Price Level  */
    level?: string;
  }

  /** itempricing: Item Pricing */
  itempricing: {
    /** currency - Currency  */
    currency: string;
    /** item - Item  */
    item?: string;
    /** level - Price Level  */
    level?: string;
    /** price - Unit Price  */
    price: number;
  }

  /** partners: Partners */
  partners: {
    /** contribution - Contribution %  */
    contribution?: number;
    /** customer -   */
    customer: string;
    /** id -   */
    id: string;
    /** isprimary - Primary  */
    isprimary: boolean;
    /** partner - Partner  */
    partner?: string;
    /** partnerrole - Partner Role  */
    partnerrole: string;
  }

  /** salesteam: Sales Team */
  salesteam: {
    /** contribution - Contribution %  */
    contribution?: number;
    /** customer -   */
    customer: string;
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
  }
}





