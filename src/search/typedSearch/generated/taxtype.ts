// This file is automatically generated - don't edit it. 
// Search Types for record Tax Type (taxtype)

// Search Columns

/** Tax Type (taxtype) Search Columns definition */
export interface taxtypeSearchColumn {
  /** Country (country: select) */
      country?: string;
  /** Description (description: textarea) */
      description?: string;
  /** Does Not Add to Transaction Total (doesnotaddtototal: checkbox) */
      doesnotaddtototal?: boolean;
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
  /** Internal ID (internalid: select) */
      internalid?: string;
  /** Inactive (isinactive: checkbox) */
      isinactive?: boolean;
  /** Name (name: text) */
      name?: string;
  /** Nexus (nexus: select) */
      nexus?: string;
  /** Payables Account (payablesaccount: select) */
      payablesaccount?: string;
  /** Post to Item Cost (posttoitemcost: checkbox) */
      posttoitemcost?: boolean;
  /** Receivables Account (receivablesaccount: select) */
      receivablesaccount?: string;
  /** Reverse Charge (reversecharge: checkbox) */
      reversecharge?: boolean;
  /** Tax Included in Net Amount (taxinnetamount: checkbox) */
      taxinnetamount?: boolean;
}


// Search Filters

/** Tax Type (taxtype) Search Filters definition */
export interface taxtypeSearchFilter {
/** Country (country: select) */
  country?: string;
  /** Description (description: textarea) */
  description?: string;
  /** Does Not Add to Transaction Total (doesnotaddtototal: checkbox) */
  doesnotaddtototal?: boolean;
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
  /** Internal ID (internalid: select) */
  internalid?: string;
  /** Internal ID (Number) (internalidnumber: integer) */
  internalidnumber?: number;
  /** Inactive (isinactive: checkbox) */
  isinactive?: boolean;
  /** Name (name: text) */
  name?: string;
  /** Nexus (nexus: select) */
  nexus?: string;
  /** Payables Account (payablesaccount: select) */
  payablesaccount?: string;
  /** Post to Item Cost (posttoitemcost: checkbox) */
  posttoitemcost?: boolean;
  /** Receivables Account (receivablesaccount: select) */
  receivablesaccount?: string;
  /** Reverse Charge (reversecharge: checkbox) */
  reversecharge?: boolean;
  /** Tax Included in Net Amount (taxinnetamount: checkbox) */
  taxinnetamount?: boolean;
}


// Search Joins

/** Tax Type (taxtype) Search Joins definitions. */
export interface taxtypeSearchJoinTypes {

}


// Search Filter Types

/** Tax Type (taxtype) Search Filter Type definitions. */
export interface taxtypeSearchFilterTypes {
country: 'select';
  description: 'textarea';
  doesnotaddtototal: 'checkbox';
  externalid: 'select';
  externalidstring: 'text';
  formuladate: 'date';
  formulanumeric: 'float';
  formulatext: 'text';
  internalid: 'select';
  internalidnumber: 'integer';
  isinactive: 'checkbox';
  name: 'text';
  nexus: 'select';
  payablesaccount: 'select';
  posttoitemcost: 'checkbox';
  receivablesaccount: 'select';
  reversecharge: 'checkbox';
  taxinnetamount: 'checkbox';
}


// Search Column Types

/** Tax Type (taxtype) Search Column Type definitions. */
export interface taxtypeSearchColumnTypes {
country: 'select';
  description: 'textarea';
  doesnotaddtototal: 'checkbox';
  externalid: 'select';
  formulacurrency: 'currency';
  formuladate: 'date';
  formuladatetime: 'datetime';
  formulanumeric: 'float';
  formulapercent: 'percent';
  formulatext: 'text';
  internalid: 'select';
  isinactive: 'checkbox';
  name: 'text';
  nexus: 'select';
  payablesaccount: 'select';
  posttoitemcost: 'checkbox';
  receivablesaccount: 'select';
  reversecharge: 'checkbox';
  taxinnetamount: 'checkbox';
}