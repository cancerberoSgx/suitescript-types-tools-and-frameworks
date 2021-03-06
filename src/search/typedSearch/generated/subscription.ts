// This file is automatically generated - don't edit it. 
// Search Types for record Subscription (subscription)

// Search Columns

/** Subscription (subscription) Search Columns definition */
export interface subscriptionSearchColumn {
  /** Advance Renewal Period (advancerenewalperiodnumber: integer) */
      advancerenewalperiodnumber?: string;
  /** Advance Renewal Period Unit (advancerenewalperiodunit: select) */
      advancerenewalperiodunit?: string;
  /** Automatically Initiate Renewal Process (autorenewal: checkbox) */
      autorenewal?: boolean;
  /** Billing Account (billingaccount: select) */
      billingaccount?: string;
  /** Customer (customer: select) */
      customer?: string;
  /** Date Created (datecreated: datetime) */
      datecreated?: string;
  /** Default Renewal Method (defaultrenewalmethod: select) */
      defaultrenewalmethod?: string;
  /** Default Renewal Term (defaultrenewalterm: select) */
      defaultrenewalterm?: string;
  /** Default Transaction Type (defaultrenewaltrantype: select) */
      defaultrenewaltrantype?: string;
  /** End Date (enddate: date) */
      enddate?: string;
  /** Estimated Revenue Recognition End Date (estimatedrevrecenddate: date) */
      estimatedrevrecenddate?: string;
  /** External ID (externalid: select) */
      externalid?: string;
  /** Initial Term (initialterm: select) */
      initialterm?: string;
  /** Internal ID (internalid: select) */
      internalid?: string;
  /** Name (name: text) */
      name?: string;
  /** Next Renewal Start Date (nextrenewalstartdate: date) */
      nextrenewalstartdate?: string;
  /** Original Sales Transaction (originalsalestransaction: text) */
      originalsalestransaction?: string;
  /** Renewal Sequence (renewalnumber: integer) */
      renewalnumber?: string;
  /** Renewal Subscription Name (renewalsubscriptionname: text) */
      renewalsubscriptionname?: string;
  /** Renewal Transaction (renewaltransaction: select) */
      renewaltransaction?: string;
  /** Sales Order (salesorder: select) */
      salesorder?: string;
  /** Start Date (startdate: date) */
      startdate?: string;
  /** Status (status: select) */
      status?: string;
  /** Subscription Plan (subscriptionplan: select) */
      subscriptionplan?: string;
}


// Search Filters

/** Subscription (subscription) Search Filters definition */
export interface subscriptionSearchFilter {
/** Advance Renewal Period (advancerenewalperiodnumber: integer) */
  advancerenewalperiodnumber?: string;
  /** Advance Renewal Period Unit (advancerenewalperiodunit: select) */
  advancerenewalperiodunit?: string;
  /** Automatically Initiate Renewal Process (autorenewal: checkbox) */
  autorenewal?: boolean;
  /** Billing Account (billingaccount: select) */
  billingaccount?: string;
  /** Customer (customer: select) */
  customer?: string;
  /** Date Created (datecreated: datetime) */
  datecreated?: string;
  /** Default Renewal Method (defaultrenewalmethod: select) */
  defaultrenewalmethod?: string;
  /** Default Renewal Term (defaultrenewalterm: select) */
  defaultrenewalterm?: string;
  /** Default Transaction Type (defaultrenewaltrantype: select) */
  defaultrenewaltrantype?: string;
  /** End Date (enddate: date) */
  enddate?: string;
  /** Estimated Revenue Recognition End Date (estimatedrevrecenddate: date) */
  estimatedrevrecenddate?: string;
  /** External ID (externalid: select) */
  externalid?: string;
  /** External ID (Text) (externalidstring: text) */
  externalidstring?: string;
  /** Initial Term (initialterm: select) */
  initialterm?: string;
  /** Internal ID (internalid: select) */
  internalid?: string;
  /** Internal ID (Number) (internalidnumber: integer) */
  internalidnumber?: string;
  /** Name (name: text) */
  name?: string;
  /** Next Renewal Start Date (nextrenewalstartdate: date) */
  nextrenewalstartdate?: string;
  /** Original Sales Transaction (originalsalestransaction: select) */
  originalsalestransaction?: string;
  /** Parent Subscription ID (parentsubscriptionid: integer) */
  parentsubscriptionid?: string;
  /** Renewal Subscription Name (renewalsubscriptionname: select) */
  renewalsubscriptionname?: string;
  /** Renewal Transaction (renewaltransaction: select) */
  renewaltransaction?: string;
  /** Root Subscription ID (rootsubscriptionid: integer) */
  rootsubscriptionid?: string;
  /** Sales Order (salesorder: select) */
  salesorder?: string;
  /** Start Date (startdate: date) */
  startdate?: string;
  /** Status (status: select) */
  status?: string;
  /** Subscription Plan (subscriptionplan: select) */
  subscriptionplan?: string;
}


// Search Joins

/** Subscription (subscription) Search Joins definitions. */
export interface subscriptionSearchJoinTypes {
/** subscription's billingaccount search filter. Billing Account. Actual name: Billing Account. */
  billingaccount: 'billingaccount';
  /** subscription's currency search filter. Currency. Actual name: Currency. */
  currency: 'currency';
  /** subscription's customer search filter. Customer. Actual name: Customer. */
  customer: 'customer';
  /** subscription's item search filter. Subscription Plan. Actual name: Item. */
  item: 'item';
}


// Search Filter Types

/** Subscription (subscription) Search Filter Type definitions. */
export interface subscriptionSearchFilterTypes {
advancerenewalperiodnumber: 'integer';
  advancerenewalperiodunit: 'select';
  autorenewal: 'checkbox';
  billingaccount: 'select';
  customer: 'select';
  datecreated: 'datetime';
  defaultrenewalmethod: 'select';
  defaultrenewalterm: 'select';
  defaultrenewaltrantype: 'select';
  enddate: 'date';
  estimatedrevrecenddate: 'date';
  externalid: 'select';
  externalidstring: 'text';
  initialterm: 'select';
  internalid: 'select';
  internalidnumber: 'integer';
  name: 'text';
  nextrenewalstartdate: 'date';
  originalsalestransaction: 'select';
  parentsubscriptionid: 'integer';
  renewalsubscriptionname: 'select';
  renewaltransaction: 'select';
  rootsubscriptionid: 'integer';
  salesorder: 'select';
  startdate: 'date';
  status: 'select';
  subscriptionplan: 'select';
}


// Search Column Types

/** Subscription (subscription) Search Column Type definitions. */
export interface subscriptionSearchColumnTypes {
advancerenewalperiodnumber: 'integer';
  advancerenewalperiodunit: 'select';
  autorenewal: 'checkbox';
  billingaccount: 'select';
  customer: 'select';
  datecreated: 'datetime';
  defaultrenewalmethod: 'select';
  defaultrenewalterm: 'select';
  defaultrenewaltrantype: 'select';
  enddate: 'date';
  estimatedrevrecenddate: 'date';
  externalid: 'select';
  initialterm: 'select';
  internalid: 'select';
  name: 'text';
  nextrenewalstartdate: 'date';
  originalsalestransaction: 'text';
  renewalnumber: 'integer';
  renewalsubscriptionname: 'text';
  renewaltransaction: 'select';
  salesorder: 'select';
  startdate: 'date';
  status: 'select';
  subscriptionplan: 'select';
}