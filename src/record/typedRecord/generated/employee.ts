// This file is auto generated, do not edit it. 




/** 
 * Employee Fields Definition.
 * Record's Internal Id: employee. 
 * Supports Custom Fields: true 
 */
export interface employeeFields {
/**  */
  accountnumber?: string;
  /**  */
  aliennumber?: string;
  /**  */
  approvallimit?: number;
  /**  */
  approver?: string;
  /**  */
  authworkdate?: Date;
  /**  */
  autoname?: boolean;
  /**  */
  billingclass?: string;
  /**  */
  billpay?: boolean;
  /**  */
  birthdate?: Date;
  /**  */
  btemplate?: string;
  /**  */
  class?: string;
  /**  */
  comments?: string;
  /**  */
  commissionpaymentpreference?: string;
  /**  */
  currency?: string;
  /**  */
  customform: string;
  /**  */
  datecreated?: Date;
  /**  */
  defaultaddress?: string;
  /**  */
  department?: string;
  /**  */
  directdeposit?: boolean;
  /**  */
  eligibleforcommission?: boolean;
  /**  */
  email?: string;
  /**  */
  empcenterqty?: string;
  /**  */
  empcenterqtymax?: string;
  /**  */
  employeestatus?: string;
  /**  */
  employeetype?: string;
  /**  */
  entityid: string;
  /**  */
  ethnicity?: string;
  /**  */
  expenselimit?: number;
  /**  */
  externalid?: string;
  /**  */
  fax?: string;
  /**  */
  firstname?: string;
  /**  */
  fulluserqty?: string;
  /**  */
  fulluserqtymax?: string;
  /**  */
  gender?: string;
  /**  */
  giveaccess?: boolean;
  /**  */
  globalsubscriptionstatus?: string;
  /**  */
  hasofflineaccess?: boolean;
  /**  */
  hiredate: Date;
  /**  */
  homephone?: string;
  /**  */
  i9verified?: boolean;
  /**  */
  image?: string;
  /**  */
  inheritiprules: boolean;
  /**  */
  initials?: string;
  /**  */
  ipaddressrule: string;
  /**  */
  isempcenterqtyenforced?: string;
  /**  */
  isfulluserqtyenforced?: string;
  /**  */
  isinactive?: boolean;
  /**  */
  isjobresource?: boolean;
  /**  */
  isretailuserqtyenforced?: string;
  /**  */
  issalesrep?: boolean;
  /**  */
  issupportrep?: boolean;
  /**  */
  job?: string;
  /**  */
  jobdescription?: string;
  /**  */
  jurisdiction1display?: string;
  /**  */
  jurisdiction2display?: string;
  /**  */
  jurisdiction3display?: string;
  /**  */
  jurisdiction4display?: string;
  /**  */
  jurisdiction5display?: string;
  /**  */
  laborcost?: number;
  /**  */
  lastmodifieddate?: Date;
  /**  */
  lastname?: string;
  /**  */
  lastpaiddate?: Date;
  /**  */
  lastreviewdate?: Date;
  /**  */
  location?: string;
  /**  */
  maritalstatus?: string;
  /**  */
  middlename?: string;
  /**  */
  mobilephone?: string;
  /**  */
  nextreviewdate?: Date;
  /**  */
  officephone?: string;
  /**  */
  payfrequency: string;
  /**  */
  phone?: string;
  /**  */
  phoneticname?: string;
  /**  */
  purchaseorderapprovallimit?: number;
  /**  */
  purchaseorderapprover?: string;
  /**  */
  purchaseorderlimit?: number;
  /**  */
  releasedate?: Date;
  /**  */
  requirepwdchange?: boolean;
  /**  */
  residentstatus?: string;
  /**  */
  retailuserqty?: string;
  /**  */
  retailuserqtymax?: string;
  /**  */
  salesrole?: string;
  /**  */
  salutation?: string;
  /**  */
  sendemail?: boolean;
  /**  */
  socialsecuritynumber?: string;
  /**  */
  startdatetimeoffcalc?: Date;
  /**  */
  strength?: string;
  /**  */
  subsidiary: string;
  /**  */
  supervisor?: string;
  /**  */
  terminationbydeath?: boolean;
  /**  */
  timeapprover?: string;
  /**  */
  timeoffplan?: string;
  /**  */
  title?: string;
  /**  */
  unsubscribe?: string;
  /**  */
  useperquest?: boolean;
  /**  */
  usetimedata?: string;
  /**  */
  visaexpdate?: Date;
  /**  */
  visatype?: string;
  /**  */
  wasempcenterhasaccess?: string;
  /**  */
  wasfulluserhasaccess?: string;
  /**  */
  wasinactive?: string;
  /**  */
  wasretailuserhasaccess?: string;
  /**  */
  workassignment?: string;
  /**  */
  workcalendar: string;
  /**  */
  workplace?: string;
}





/** 
 * Employee Sublists Definition.
 * Record's Internal Id: employee. 
 * Supports Custom Fields: true 
 */
export interface employeeSublists {
  
  /** accruedtime: Accrued Time */
  accruedtime: {
    /** accrualmethod - Accrue As  */
    accrualmethod: string;
    /** accrualrate - Accrual Rate  */
    accrualrate: number;
    /** accruedhours - Accrued Hours  */
    accruedhours: number;
    /** inactive - Inactive  */
    inactive: boolean;
    /** maximumaccruedhours - Maximum Hours  */
    maximumaccruedhours: number;
    /** monetaryrate - Monetary Rate  */
    monetaryrate: number;
    /** payrollitem - Sick/Vacation Time  */
    payrollitem?: string;
    /** resetaccruedhoursatyearend - Reset at Year End  */
    resetaccruedhoursatyearend: boolean;
  }

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
    /** defaultbilling - Home  */
    defaultbilling: boolean;
    /** defaultshipping - Default Shipping  */
    defaultshipping: boolean;
    /** displaystate - State/Province  */
    displaystate: string;
    /** id - ID  */
    id: number;
    /** internalid -   */
    internalid: number;
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

  /** companycontribution: Company Contributions */
  companycontribution: {
    /** inactive - Inactive  */
    inactive: boolean;
    /** limit - Limit  */
    limit: number;
    /** payrollitem - Company Contribution  */
    payrollitem?: string;
    /** rate - Rate  */
    rate: string;
  }

  /** deduction: Deductions */
  deduction: {
    /** inactive - Inactive  */
    inactive: boolean;
    /** limit - Limit  */
    limit: number;
    /** payrollitem - Deduction  */
    payrollitem?: string;
    /** rate - Rate  */
    rate: string;
  }

  /** directdeposit: Accounts */
  directdeposit: {
    /** accountprenoted - Prenoted  */
    accountprenoted: boolean;
    /** amount - Amount  */
    amount: number;
    /** bankaccountnumber - Account Number  */
    bankaccountnumber?: string;
    /** bankname - Bank Name  */
    bankname?: string;
    /** bankroutingnumber - Routing Number  */
    bankroutingnumber?: string;
    /** id - ID  */
    id: string;
    /** inactive - Inactive  */
    inactive: boolean;
    /** netaccount - Net Account  */
    netaccount: boolean;
    /** savingsaccount - Savings Account  */
    savingsaccount: boolean;
  }

  /** earning: Earnings */
  earning: {
    /** defaultearning - Default  */
    defaultearning: boolean;
    /** defaulthours - Default Hours  */
    defaulthours: number;
    /** inactive - Inactive  */
    inactive: boolean;
    /** payrate - Rate  */
    payrate: string;
    /** payrollitem - Earning  */
    payrollitem?: string;
    /** primaryearning - Primary  */
    primaryearning: boolean;
  }

  /** hcmposition: Positions */
  hcmposition: {
    /** employmentcategory - Employment Category  */
    employmentcategory: string;
    /** fulltimeequivalent - Full Time Equivalent  */
    fulltimeequivalent: number;
    /** location - Location  */
    location: string;
    /** position - Position  */
    position?: string;
    /** positionallocation - Allocated Position FTE  */
    positionallocation: number;
    /** positionid - Position ID  */
    positionid: string;
    /** primaryposition - Primary  */
    primaryposition?: boolean;
    /** reportsto - Reports To  */
    reportsto: string;
    /** subsidiary - Subsidiary  */
    subsidiary?: string;
  }

  /** rates: Rates */
  rates: {
    /** entitycurrency - Currency  */
    entitycurrency?: string;
    /** rate - Hourly Rate  */
    rate?: number;
  }
}





