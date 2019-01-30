// This file is automatically generated - don't edit it. 
// Search Types for record Account (account)

// Search Columns

/** Account (account) Search Columns definition */
export interface accountSearchColumn {
  /** Accounting Context (accountingcontext: text) */
      accountingcontext?: string;
  /** Balance (balance: currency) */
      balance?: number;
  /** Cash Flow Rate Type (cashflowratetype: select) */
      cashflowratetype?: string;
  /** 1099-MISC Category (category1099misc: select) */
      category1099misc?: string;
  /** Description (description: text) */
      description?: string;
  /** External ID (externalid: select) */
      externalid?: string;
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
  /** General Rate Type (generalratetype: select) */
      generalratetype?: string;
  /** Internal ID (internalid: select) */
      internalid?: string;
  /** Inactive (isinactive: checkbox) */
      isinactive?: boolean;
  /** Legal Name (legalname: text) */
      legalname?: string;
  /** Language (locale: text) */
      locale?: string;
  /** Localized Legal Name (localizedlegalname: text) */
      localizedlegalname?: string;
  /** Localized Name (localizedname: text) */
      localizedname?: string;
  /** Localized Number (localizednumber: text) */
      localizednumber?: string;
  /** Name (name: text) */
      name?: string;
  /** Number (number: text) */
      number?: string;
  /** Subsidiary (subsidiary: select) */
      subsidiary?: string;
  /** Subsidiary (no hierarchy) (subsidiarynohierarchy: select) */
      subsidiarynohierarchy?: string;
  /** Account Type (type: select) */
      type?: string;
}


// Search Filters

/** Account (account) Search Filters definition */
export interface accountSearchFilter {
/** Accounting Context (accountingcontext: select) */
  accountingcontext?: string;
  /** Balance (balance: currency) */
  balance?: number;
  /** Cash Flow Rate Type (cashflowratetype: select) */
  cashflowratetype?: string;
  /** 1099-MISC Category (category1099misc: select) */
  category1099misc?: string;
  /** Description (description: text) */
  description?: string;
  /** External ID (externalid: select) */
  externalid?: string;
  /** External ID (Text) (externalidstring: text) */
  externalidstring?: string;
  /** Formula (Date) (formuladate: date) */
  formuladate?: Date;
  /** Formula (Numeric) (formulanumeric: float) */
  formulanumeric?: number;
  /** Formula (Text) (formulatext: text) */
  formulatext?: string;
  /** General Rate Type (generalratetype: select) */
  generalratetype?: string;
  /** Internal ID (internalid: select) */
  internalid?: string;
  /** Internal ID (Number) (internalidnumber: integer) */
  internalidnumber?: number;
  /** Inactive (isinactive: checkbox) */
  isinactive?: boolean;
  /** Legal Name (legalname: text) */
  legalname?: string;
  /** Language (locale: select) */
  locale?: string;
  /** Localized Legal Name (localizedlegalname: text) */
  localizedlegalname?: string;
  /** Localized Name (localizedname: text) */
  localizedname?: string;
  /** Localized Number (localizednumber: text) */
  localizednumber?: string;
  /** Name (name: text) */
  name?: string;
  /** Number (number: text) */
  number?: string;
  /** Sub-Account Of (parent: select) */
  parent?: string;
  /** Subsidiary (subsidiary: select) */
  subsidiary?: string;
  /** Type (type: select) */
  type?: string;
}


// Search Joins

/** Account (account) Search Joins definitions. */
export interface accountSearchJoinTypes {

}


// Search Filter Types

/** Account (account) Search Filter Type definitions. */
export interface accountSearchFilterTypes {
accountingcontext: 'select';
  balance: 'currency';
  cashflowratetype: 'select';
  category1099misc: 'select';
  description: 'text';
  externalid: 'select';
  externalidstring: 'text';
  formuladate: 'date';
  formulanumeric: 'float';
  formulatext: 'text';
  generalratetype: 'select';
  internalid: 'select';
  internalidnumber: 'integer';
  isinactive: 'checkbox';
  legalname: 'text';
  locale: 'select';
  localizedlegalname: 'text';
  localizedname: 'text';
  localizednumber: 'text';
  name: 'text';
  number: 'text';
  parent: 'select';
  subsidiary: 'select';
  type: 'select';
}


// Search Column Types

/** Account (account) Search Column Type definitions. */
export interface accountSearchColumnTypes {
accountingcontext: 'text';
  balance: 'currency';
  cashflowratetype: 'select';
  category1099misc: 'select';
  description: 'text';
  externalid: 'select';
  formulacurrency: 'currency';
  formuladate: 'date';
  formuladatetime: 'datetime';
  formulanumeric: 'float';
  formulapercent: 'percent';
  formulatext: 'text';
  generalratetype: 'select';
  internalid: 'select';
  isinactive: 'checkbox';
  legalname: 'text';
  locale: 'text';
  localizedlegalname: 'text';
  localizedname: 'text';
  localizednumber: 'text';
  name: 'text';
  number: 'text';
  subsidiary: 'select';
  subsidiarynohierarchy: 'select';
  type: 'select';
}