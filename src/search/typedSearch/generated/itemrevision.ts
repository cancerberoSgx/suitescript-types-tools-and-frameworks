// This file is automatically generated - don't edit it. 
// Search Types for record Item Revision (itemrevision)

// Search Columns

/** Item Revision (itemrevision) Search Columns definition */
export interface itemrevisionSearchColumn {
  /** Effective Date (effectivedate: date) */
      effectivedate?: Date;
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
  /** inactive (isinactive: checkbox) */
      isinactive?: boolean;
  /** Item (item: select) */
      item?: string;
  /** Memo (memo: text) */
      memo?: string;
  /** Name (name: text) */
      name?: string;
  /** Obsolete Date (obsoletedate: date) */
      obsoletedate?: Date;
}


// Search Filters

/** Item Revision (itemrevision) Search Filters definition */
export interface itemrevisionSearchFilter {
/** Effective Date (effectivedate: date) */
  effectivedate?: Date;
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
  /** Item (item: select) */
  item?: string;
  /** Name (name: text) */
  name?: string;
  /** Obsolete Date (obsoletedate: date) */
  obsoletedate?: Date;
}


// Search Joins

/** Item Revision (itemrevision) Search Joins definitions. */
export interface itemrevisionSearchJoinTypes {

}


// Search Filter Types

/** Item Revision (itemrevision) Search Filter Type definitions. */
export interface itemrevisionSearchFilterTypes {
effectivedate: 'date';
  externalid: 'select';
  externalidstring: 'text';
  formuladate: 'date';
  formulanumeric: 'float';
  formulatext: 'text';
  internalid: 'select';
  internalidnumber: 'integer';
  item: 'select';
  name: 'text';
  obsoletedate: 'date';
}


// Search Column Types

/** Item Revision (itemrevision) Search Column Type definitions. */
export interface itemrevisionSearchColumnTypes {
effectivedate: 'date';
  externalid: 'select';
  formulacurrency: 'currency';
  formuladate: 'date';
  formuladatetime: 'datetime';
  formulanumeric: 'float';
  formulapercent: 'percent';
  formulatext: 'text';
  internalid: 'select';
  isinactive: 'checkbox';
  item: 'select';
  memo: 'text';
  name: 'text';
  obsoletedate: 'date';
}