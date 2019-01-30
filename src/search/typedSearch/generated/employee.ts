// This file is automatically generated - don't edit it. 
// Search Types for record Employee (employee)

// Search Columns

/** Employee (employee) Search Columns definition */
export interface employeeSearchColumn {
  /** Account (accountnumber: text) */
      accountnumber?: string;
  /** Address (address: text) */
      address?: string;
  /** Addressee (addressee: text) */
      addressee?: string;
  /** Address Internal ID (addressinternalid: integer) */
      addressinternalid?: number;
  /** Address Label (addresslabel: text) */
      addresslabel?: string;
  /** Address Phone (addressphone: text) */
      addressphone?: string;
  /** Alien # (aliennumber: text) */
      aliennumber?: string;
  /** Allocated Position FTE (allocation: float) */
      allocation?: number;
  /** Alt. Email (altemail: email) */
      altemail?: string;
  /** Name (altname: text) */
      altname?: string;
  /** Office Phone (altphone: phone) */
      altphone?: string;
  /** Expense Approval Limit (approvallimit: currency) */
      approvallimit?: number;
  /** Expense Approver (approver: select) */
      approver?: string;
  /** Attention (attention: text) */
      attention?: string;
  /** Authorized to work until date (authworkdate: date) */
      authworkdate?: Date;
  /** Base Wage (basewage: currency) */
      basewage?: number;
  /** Base Wage Type (basewagetype: select) */
      basewagetype?: string;
  /** Billing Country Code (billcountrycode: text) */
      billcountrycode?: string;
  /** Billing Class (billingclass: select) */
      billingclass?: string;
  /** Billing Zip (billzipcode: text) */
      billzipcode?: string;
  /** Birth Date (birthdate: date) */
      birthdate?: Date;
  /** Birth Day (birthday: date) */
      birthday?: Date;
  /** City (city: text) */
      city?: string;
  /** Class (class: select) */
      class?: string;
  /** Class (no hierarchy) (classnohierarchy: select) */
      classnohierarchy?: string;
  /** Comments (comments: text) */
      comments?: string;
  /** Compensation Currency (compensationcurrency: select) */
      compensationcurrency?: string;
  /** Concurrent Web Services User (concurrentwebservicesuser: checkbox) */
      concurrentwebservicesuser?: boolean;
  /** Country (country: select) */
      country?: string;
  /** Country Code (countrycode: text) */
      countrycode?: string;
  /** Date Created (datecreated: datetime) */
      datecreated?: Date;
  /** Department (department: select) */
      department?: string;
  /** Department (no hierarchy) (departmentnohierarchy: select) */
      departmentnohierarchy?: string;
  /** Eligible for Commission (eligibleforcommission: checkbox) */
      eligibleforcommission?: boolean;
  /** Email (email: email) */
      email?: string;
  /** Employee Status (employeestatus: select) */
      employeestatus?: string;
  /** Type (employeetype: select) */
      employeetype?: string;
  /** Name (entityid: text) */
      entityid?: string;
  /** Number (entitynumber: integer) */
      entitynumber?: number;
  /** Ethnicity (ethnicity: select) */
      ethnicity?: string;
  /** Expense Limit (expenselimit: currency) */
      expenselimit?: number;
  /** External ID (externalid: select) */
      externalid?: string;
  /** Fax (fax: text) */
      fax?: string;
  /** First Name (firstname: text) */
      firstname?: string;
  /** Formula (Currency) (formulacurrency: currency) */
      formulacurrency?: number;
  /** Formula (Date) (formuladate: date) */
      formuladate?: Date;
  /** Formula (Date/Time) (formuladatetime: datetime) */
      formuladatetime?: Date;
  /** Formula (Numeric) (formulanumeric: float) */
      formulanumeric?: number;
  /** Formula (Percent) (formulapercent: percent) */
      formulapercent?: number;
  /** Formula (Text) (formulatext: text) */
      formulatext?: string;
  /** Gender (gender: select) */
      gender?: string;
  /** Login Access (giveaccess: checkbox) */
      giveaccess?: boolean;
  /** Global Subscription Status (globalsubscriptionstatus: select) */
      globalsubscriptionstatus?: string;
  /** Hire Date (hiredate: date) */
      hiredate?: Date;
  /** Home Phone (homephone: phone) */
      homephone?: string;
  /** I9 Verified (i9verified: checkbox) */
      i9verified?: boolean;
  /** Image (image: select) */
      image?: string;
  /** Internal ID (internalid: select) */
      internalid?: string;
  /** Default Billing Address (isdefaultbilling: checkbox) */
      isdefaultbilling?: boolean;
  /** Default Shipping Address (isdefaultshipping: checkbox) */
      isdefaultshipping?: boolean;
  /** Inactive (isinactive: checkbox) */
      isinactive?: boolean;
  /** Job Resource (isjobresource: checkbox) */
      isjobresource?: boolean;
  /** Sales Rep (issalesrep: checkbox) */
      issalesrep?: boolean;
  /** Support Rep (issupportrep: checkbox) */
      issupportrep?: boolean;
  /** Is Template (istemplate: checkbox) */
      istemplate?: boolean;
  /** Job (job: select) */
      job?: string;
  /** Labor Cost (laborcost: currency) */
      laborcost?: number;
  /** Language (language: select) */
      language?: string;
  /** Last Modified (lastmodifieddate: datetime) */
      lastmodifieddate?: Date;
  /** Last Name (lastname: text) */
      lastname?: string;
  /** Last Paid Date (lastpaiddate: date) */
      lastpaiddate?: Date;
  /** Last Review (lastreviewdate: date) */
      lastreviewdate?: Date;
  /** Last Viewed (lastviewed: datetime) */
      lastviewed?: Date;
  /** Level (level: select) */
      level?: string;
  /** Location (location: select) */
      location?: string;
  /** Location (no hierarchy) (locationnohierarchy: select) */
      locationnohierarchy?: string;
  /** Marital Status (maritalstatus: select) */
      maritalstatus?: string;
  /** Middle Name (middlename: text) */
      middlename?: string;
  /** Mobile Phone (mobilephone: phone) */
      mobilephone?: string;
  /** Next Review (nextreviewdate: date) */
      nextreviewdate?: Date;
  /** Offline Access (offlineaccess: checkbox) */
      offlineaccess?: boolean;
  /** Pay Frequency (payfrequency: select) */
      payfrequency?: string;
  /** Permission Change Date (permchangedate: datetime) */
      permchangedate?: Date;
  /** Permission Change Level (permchangelevel: text) */
      permchangelevel?: string;
  /** Permission (permission: select) */
      permission?: string;
  /** Permission Change (permissionchange: text) */
      permissionchange?: string;
  /** Phone (phone: phone) */
      phone?: string;
  /** Phonetic Name (phoneticname: text) */
      phoneticname?: string;
  /** Position Title (positiontitle: text) */
      positiontitle?: string;
  /** Primary Earning Amount (primaryearningamount: currency) */
      primaryearningamount?: number;
  /** Primary Earning Item (primaryearningitem: text) */
      primaryearningitem?: string;
  /** Primary Earning Type (primaryearningtype: text) */
      primaryearningtype?: string;
  /** Purchase Approval Limit (purchaseorderapprovallimit: currency) */
      purchaseorderapprovallimit?: number;
  /** Purchase Approver (purchaseorderapprover: select) */
      purchaseorderapprover?: string;
  /** Purchase Limit (purchaseorderlimit: currency) */
      purchaseorderlimit?: number;
  /** Release Date (releasedate: date) */
      releasedate?: Date;
  /** Represents Subsidiary (representingsubsidiary: select) */
      representingsubsidiary?: string;
  /** Resident Status (residentstatus: select) */
      residentstatus?: string;
  /** Role (role: select) */
      role?: string;
  /** Role Change (rolechange: text) */
      rolechange?: string;
  /** Role Change Action (rolechangeaction: text) */
      rolechangeaction?: string;
  /** Role Change Date (rolechangedate: datetime) */
      rolechangedate?: Date;
  /** Sales Role (salesrole: select) */
      salesrole?: string;
  /** Mr./Mrs... (salutation: text) */
      salutation?: string;
  /** Shipping Country Code (shipcountrycode: text) */
      shipcountrycode?: string;
  /** Social Security # (socialsecuritynumber: ssnumber) */
      socialsecuritynumber?: string;
  /** Start Date for Time-Off Calculations (startdatetimeoffcalc: date) */
      startdatetimeoffcalc?: Date;
  /** State/Province (state: select) */
      state?: string;
  /** State/Province Display Name (statedisplayname: select) */
      statedisplayname?: string;
  /** Subscription (subscription: select) */
      subscription?: string;
  /** Subscription Date (subscriptiondate: datetime) */
      subscriptiondate?: Date;
  /** Subscription Status (subscriptionstatus: checkbox) */
      subscriptionstatus?: boolean;
  /** Subsidiary (subsidiary: select) */
      subsidiary?: string;
  /** Subsidiary (no hierarchy) (subsidiarynohierarchy: select) */
      subsidiarynohierarchy?: string;
  /** Supervisor (supervisor: select) */
      supervisor?: string;
  /** Termination Category (terminationcategory: select) */
      terminationcategory?: string;
  /** Termination Details (terminationdetails: text) */
      terminationdetails?: string;
  /** Termination Reason (terminationreason: select) */
      terminationreason?: string;
  /** Termination Regretted (terminationregretted: select) */
      terminationregretted?: string;
  /** Time Approver (timeapprover: select) */
      timeapprover?: string;
  /** Time-Off Plan (timeoffplan: text) */
      timeoffplan?: string;
  /** Job Title (title: text) */
      title?: string;
  /** Include In US Payroll (useperquest: checkbox) */
      useperquest?: boolean;
  /** Use Time Data (usetimedata: checkbox) */
      usetimedata?: boolean;
  /** Visa Expiration Date (visaexpdate: date) */
      visaexpdate?: Date;
  /** Visa Type (visatype: select) */
      visatype?: string;
  /** Work Calendar (workcalendar: select) */
      workcalendar?: string;
  /** Workplace (workplace: select) */
      workplace?: string;
  /** Zip Code (zipcode: text) */
      zipcode?: string;
}


// Search Filters

/** Employee (employee) Search Filters definition */
export interface employeeSearchFilter {
/** Address (address: textarea) */
  address?: string;
  /** Addressee (addressee: text) */
  addressee?: string;
  /** Address Label (addresslabel: text) */
  addresslabel?: string;
  /** Address Phone (addressphone: phone) */
  addressphone?: string;
  /** Alien Number (aliennumber: text) */
  aliennumber?: string;
  /** Allocation (allocation: percent) */
  allocation?: number;
  /** Anniversary (anniversary: date) */
  anniversary?: Date;
  /** Expense Approval Limit (approvallimit: currency) */
  approvallimit?: number;
  /** Expense Approver (approver: select) */
  approver?: string;
  /** Attention (attention: text) */
  attention?: string;
  /** Authorized to work until date (authworkdate: date) */
  authworkdate?: Date;
  /** Base Wage (basewage: currency) */
  basewage?: number;
  /** Base Wage Type (basewagetype: select) */
  basewagetype?: string;
  /** Billing Class (billingclass: select) */
  billingclass?: string;
  /** Birth Date (birthdate: date) */
  birthdate?: Date;
  /** Birthday (birthday: date) */
  birthday?: Date;
  /** Company Contribution (ccontribution: select) */
  ccontribution?: string;
  /** City (city: text) */
  city?: string;
  /** Class (class: select) */
  class?: string;
  /** Comments (comments: textarea) */
  comments?: string;
  /** Commission Plan (commissionplan: select) */
  commissionplan?: string;
  /** Currency (compensationcurrency: select) */
  compensationcurrency?: string;
  /** Concurrent Web Services User (concurrentwebservicesuser: checkbox) */
  concurrentwebservicesuser?: boolean;
  /** Country (country: select) */
  country?: string;
  /** County/State (county: text) */
  county?: string;
  /** Date Created (datecreated: datetime) */
  datecreated?: Date;
  /** Deduction (deduction: select) */
  deduction?: string;
  /** Department (department: select) */
  department?: string;
  /** Earning (earning: select) */
  earning?: string;
  /** Education (education: select) */
  education?: string;
  /** Eligible For Commission (eligibleforcommission: checkbox) */
  eligibleforcommission?: boolean;
  /** Email (email: text) */
  email?: string;
  /** Employee Status (employeestatus: select) */
  employeestatus?: string;
  /** Type (employeetype: select) */
  employeetype?: string;
  /** Include in KPI (employeetypekpi: checkbox) */
  employeetypekpi?: boolean;
  /** Name/ID (entityid: text) */
  entityid?: string;
  /** Ethnicity (ethnicity: select) */
  ethnicity?: string;
  /** Expense Limit (expenselimit: currency) */
  expenselimit?: number;
  /** External ID (externalid: select) */
  externalid?: string;
  /** External ID (Text) (externalidstring: text) */
  externalidstring?: string;
  /** Fax (fax: phone) */
  fax?: string;
  /** First Name (firstname: text) */
  firstname?: string;
  /** Formula (Date) (formuladate: date) */
  formuladate?: Date;
  /** Formula (Numeric) (formulanumeric: float) */
  formulanumeric?: number;
  /** Formula (Text) (formulatext: text) */
  formulatext?: string;
  /** Gender (gender: checkbox) */
  gender?: boolean;
  /** Login Access (giveaccess: checkbox) */
  giveaccess?: boolean;
  /** Global Subscription Status (globalsubscriptionstatus: select) */
  globalsubscriptionstatus?: string;
  /** Group (group: multiselect) */
  group?: number;
  /** Hire Date (hiredate: date) */
  hiredate?: Date;
  /** I9 Verified (i9verified: checkbox) */
  i9verified?: boolean;
  /** Image (image: image) */
  image?: string;
  /** Internal ID (internalid: select) */
  internalid?: string;
  /** Internal ID (Number) (internalidnumber: integer) */
  internalidnumber?: number;
  /** Default Billing Address (isdefaultbilling: checkbox) */
  isdefaultbilling?: boolean;
  /** Default Shipping Address (isdefaultshipping: checkbox) */
  isdefaultshipping?: boolean;
  /** Inactive (isinactive: checkbox) */
  isinactive?: boolean;
  /** Is Job Resource (isjobresource: checkbox) */
  isjobresource?: boolean;
  /** Is Template (istemplate: checkbox) */
  istemplate?: boolean;
  /** Job (job: select) */
  job?: string;
  /** Job Description (jobdescription: text) */
  jobdescription?: string;
  /** Labor Cost (laborcost: currency) */
  laborcost?: number;
  /** Language (language: select) */
  language?: string;
  /** Last Modified (lastmodifieddate: datetime) */
  lastmodifieddate?: Date;
  /** Last Name (lastname: text) */
  lastname?: string;
  /** Last Paid Date (lastpaiddate: date) */
  lastpaiddate?: Date;
  /** Last Review Date (lastreviewdate: date) */
  lastreviewdate?: Date;
  /** Level (level: select) */
  level?: string;
  /** Location (location: select) */
  location?: string;
  /** Marital Status (maritalstatus: select) */
  maritalstatus?: string;
  /** Middle Name (middlename: text) */
  middlename?: string;
  /** Next Review Date (nextreviewdate: date) */
  nextreviewdate?: Date;
  /** Offline Access (offlineaccess: checkbox) */
  offlineaccess?: boolean;
  /** Pay Frequency (payfrequency: select) */
  payfrequency?: string;
  /** Permission Change Date (permchangedate: datetime) */
  permchangedate?: Date;
  /** Permission (permission: select) */
  permission?: string;
  /** Permission Change (permissionchange: select) */
  permissionchange?: string;
  /** Phone (phone: phone) */
  phone?: string;
  /** Phonetic Name (phoneticname: text) */
  phoneticname?: string;
  /** Position Title (positiontitle: select) */
  positiontitle?: string;
  /** Primary Earning Amount (primaryearningamount: currency) */
  primaryearningamount?: number;
  /** Primary Earning Item (primaryearningitem: text) */
  primaryearningitem?: string;
  /** Primary Earning Type (primaryearningtype: text) */
  primaryearningtype?: string;
  /** Purchase Approval Limit (purchaseorderapprovallimit: currency) */
  purchaseorderapprovallimit?: number;
  /** Purchase Approver (purchaseorderapprover: select) */
  purchaseorderapprover?: string;
  /** Purchase Limit (purchaseorderlimit: currency) */
  purchaseorderlimit?: number;
  /** Release Date (releasedate: date) */
  releasedate?: Date;
  /** Represents Subsidiary (representingsubsidiary: select) */
  representingsubsidiary?: string;
  /** Resident Status (residentstatus: select) */
  residentstatus?: string;
  /** Role (role: select) */
  role?: string;
  /** Role Change (rolechange: select) */
  rolechange?: string;
  /** Role Change Date (rolechangedate: datetime) */
  rolechangedate?: Date;
  /** Is Sales Rep (salesrep: checkbox) */
  salesrep?: boolean;
  /** Sales Role (salesrole: select) */
  salesrole?: string;
  /** Mr./Mrs... (salutation: text) */
  salutation?: string;
  /** Social Security Number (socialsecuritynumber: ssnumber) */
  socialsecuritynumber?: string;
  /** Start Date for Time-Off Calculations (startdatetimeoffcalc: date) */
  startdatetimeoffcalc?: Date;
  /** State/Province (state: select) */
  state?: string;
  /** Subsidiary (subsidiary: select) */
  subsidiary?: string;
  /** Supervisor (supervisor: select) */
  supervisor?: string;
  /** Is Support Rep (supportrep: checkbox) */
  supportrep?: boolean;
  /** Termination Category (terminationcategory: select) */
  terminationcategory?: string;
  /** Termination Details (terminationdetails: text) */
  terminationdetails?: string;
  /** Termination Reason (terminationreason: select) */
  terminationreason?: string;
  /** Termination Regretted (terminationregretted: select) */
  terminationregretted?: string;
  /** Time Approver (timeapprover: select) */
  timeapprover?: string;
  /** Time-Off Plan (timeoffplan: select) */
  timeoffplan?: string;
  /** Job Title (title: text) */
  title?: string;
  /** Include In US Payroll (useperquest: checkbox) */
  useperquest?: boolean;
  /** Use Time Data (usetimedata: checkbox) */
  usetimedata?: boolean;
  /** Visa Expiration Date (visaexpdate: date) */
  visaexpdate?: Date;
  /** Visa Type (visatype: select) */
  visatype?: string;
  /** Withholding (withholding: select) */
  withholding?: string;
  /** Work Calendar (workcalendar: select) */
  workcalendar?: string;
  /** Workplace (workplace: select) */
  workplace?: string;
  /** Zip (zipcode: text) */
  zipcode?: string;
}


// Search Joins

/** Employee (employee) Search Joins definitions. */
export interface employeeSearchJoinTypes {
/** employee's campaignresponse search filter. Campaign Response. Actual name: Campaign. */
  campaignresponse: 'campaignresponse';
  /** employee's department search filter. Department. Actual name: Department. */
  department: 'department';
  /** employee's location search filter. Location. Actual name: Location. */
  location: 'location';
  /** employee's messages search filter. Messages. Actual name: Message. */
  messages: 'messages';
  /** employee's messagesfrom search filter. Messages From. Actual name: Message. */
  messagesfrom: 'messagesfrom';
  /** employee's messagesto search filter. Messages To. Actual name: Message. */
  messagesto: 'messagesto';
  /** employee's subsidiary search filter. Subsidiary. Actual name: Subsidiary. */
  subsidiary: 'subsidiary';
}


// Search Filter Types

/** Employee (employee) Search Filter Type definitions. */
export interface employeeSearchFilterTypes {
address: 'textarea';
  addressee: 'text';
  addresslabel: 'text';
  addressphone: 'phone';
  aliennumber: 'text';
  allocation: 'percent';
  anniversary: 'date';
  approvallimit: 'currency';
  approver: 'select';
  attention: 'text';
  authworkdate: 'date';
  basewage: 'currency';
  basewagetype: 'select';
  billingclass: 'select';
  birthdate: 'date';
  birthday: 'date';
  ccontribution: 'select';
  city: 'text';
  class: 'select';
  comments: 'textarea';
  commissionplan: 'select';
  compensationcurrency: 'select';
  concurrentwebservicesuser: 'checkbox';
  country: 'select';
  county: 'text';
  datecreated: 'datetime';
  deduction: 'select';
  department: 'select';
  earning: 'select';
  education: 'select';
  eligibleforcommission: 'checkbox';
  email: 'text';
  employeestatus: 'select';
  employeetype: 'select';
  employeetypekpi: 'checkbox';
  entityid: 'text';
  ethnicity: 'select';
  expenselimit: 'currency';
  externalid: 'select';
  externalidstring: 'text';
  fax: 'phone';
  firstname: 'text';
  formuladate: 'date';
  formulanumeric: 'float';
  formulatext: 'text';
  gender: 'checkbox';
  giveaccess: 'checkbox';
  globalsubscriptionstatus: 'select';
  group: 'multiselect';
  hiredate: 'date';
  i9verified: 'checkbox';
  image: 'image';
  internalid: 'select';
  internalidnumber: 'integer';
  isdefaultbilling: 'checkbox';
  isdefaultshipping: 'checkbox';
  isinactive: 'checkbox';
  isjobresource: 'checkbox';
  istemplate: 'checkbox';
  job: 'select';
  jobdescription: 'text';
  laborcost: 'currency';
  language: 'select';
  lastmodifieddate: 'datetime';
  lastname: 'text';
  lastpaiddate: 'date';
  lastreviewdate: 'date';
  level: 'select';
  location: 'select';
  maritalstatus: 'select';
  middlename: 'text';
  nextreviewdate: 'date';
  offlineaccess: 'checkbox';
  payfrequency: 'select';
  permchangedate: 'datetime';
  permission: 'select';
  permissionchange: 'select';
  phone: 'phone';
  phoneticname: 'text';
  positiontitle: 'select';
  primaryearningamount: 'currency';
  primaryearningitem: 'text';
  primaryearningtype: 'text';
  purchaseorderapprovallimit: 'currency';
  purchaseorderapprover: 'select';
  purchaseorderlimit: 'currency';
  releasedate: 'date';
  representingsubsidiary: 'select';
  residentstatus: 'select';
  role: 'select';
  rolechange: 'select';
  rolechangedate: 'datetime';
  salesrep: 'checkbox';
  salesrole: 'select';
  salutation: 'text';
  socialsecuritynumber: 'ssnumber';
  startdatetimeoffcalc: 'date';
  state: 'select';
  subsidiary: 'select';
  supervisor: 'select';
  supportrep: 'checkbox';
  terminationcategory: 'select';
  terminationdetails: 'text';
  terminationreason: 'select';
  terminationregretted: 'select';
  timeapprover: 'select';
  timeoffplan: 'select';
  title: 'text';
  useperquest: 'checkbox';
  usetimedata: 'checkbox';
  visaexpdate: 'date';
  visatype: 'select';
  withholding: 'select';
  workcalendar: 'select';
  workplace: 'select';
  zipcode: 'text';
}


// Search Column Types

/** Employee (employee) Search Column Type definitions. */
export interface employeeSearchColumnTypes {
accountnumber: 'text';
  address: 'text';
  addressee: 'text';
  addressinternalid: 'integer';
  addresslabel: 'text';
  addressphone: 'text';
  aliennumber: 'text';
  allocation: 'float';
  altemail: 'email';
  altname: 'text';
  altphone: 'phone';
  approvallimit: 'currency';
  approver: 'select';
  attention: 'text';
  authworkdate: 'date';
  basewage: 'currency';
  basewagetype: 'select';
  billcountrycode: 'text';
  billingclass: 'select';
  billzipcode: 'text';
  birthdate: 'date';
  birthday: 'date';
  city: 'text';
  class: 'select';
  classnohierarchy: 'select';
  comments: 'text';
  compensationcurrency: 'select';
  concurrentwebservicesuser: 'checkbox';
  country: 'select';
  countrycode: 'text';
  datecreated: 'datetime';
  department: 'select';
  departmentnohierarchy: 'select';
  eligibleforcommission: 'checkbox';
  email: 'email';
  employeestatus: 'select';
  employeetype: 'select';
  entityid: 'text';
  entitynumber: 'integer';
  ethnicity: 'select';
  expenselimit: 'currency';
  externalid: 'select';
  fax: 'text';
  firstname: 'text';
  formulacurrency: 'currency';
  formuladate: 'date';
  formuladatetime: 'datetime';
  formulanumeric: 'float';
  formulapercent: 'percent';
  formulatext: 'text';
  gender: 'select';
  giveaccess: 'checkbox';
  globalsubscriptionstatus: 'select';
  hiredate: 'date';
  homephone: 'phone';
  i9verified: 'checkbox';
  image: 'select';
  internalid: 'select';
  isdefaultbilling: 'checkbox';
  isdefaultshipping: 'checkbox';
  isinactive: 'checkbox';
  isjobresource: 'checkbox';
  issalesrep: 'checkbox';
  issupportrep: 'checkbox';
  istemplate: 'checkbox';
  job: 'select';
  laborcost: 'currency';
  language: 'select';
  lastmodifieddate: 'datetime';
  lastname: 'text';
  lastpaiddate: 'date';
  lastreviewdate: 'date';
  lastviewed: 'datetime';
  level: 'select';
  location: 'select';
  locationnohierarchy: 'select';
  maritalstatus: 'select';
  middlename: 'text';
  mobilephone: 'phone';
  nextreviewdate: 'date';
  offlineaccess: 'checkbox';
  payfrequency: 'select';
  permchangedate: 'datetime';
  permchangelevel: 'text';
  permission: 'select';
  permissionchange: 'text';
  phone: 'phone';
  phoneticname: 'text';
  positiontitle: 'text';
  primaryearningamount: 'currency';
  primaryearningitem: 'text';
  primaryearningtype: 'text';
  purchaseorderapprovallimit: 'currency';
  purchaseorderapprover: 'select';
  purchaseorderlimit: 'currency';
  releasedate: 'date';
  representingsubsidiary: 'select';
  residentstatus: 'select';
  role: 'select';
  rolechange: 'text';
  rolechangeaction: 'text';
  rolechangedate: 'datetime';
  salesrole: 'select';
  salutation: 'text';
  shipcountrycode: 'text';
  socialsecuritynumber: 'ssnumber';
  startdatetimeoffcalc: 'date';
  state: 'select';
  statedisplayname: 'select';
  subscription: 'select';
  subscriptiondate: 'datetime';
  subscriptionstatus: 'checkbox';
  subsidiary: 'select';
  subsidiarynohierarchy: 'select';
  supervisor: 'select';
  terminationcategory: 'select';
  terminationdetails: 'text';
  terminationreason: 'select';
  terminationregretted: 'select';
  timeapprover: 'select';
  timeoffplan: 'text';
  title: 'text';
  useperquest: 'checkbox';
  usetimedata: 'checkbox';
  visaexpdate: 'date';
  visatype: 'select';
  workcalendar: 'select';
  workplace: 'select';
  zipcode: 'text';
}