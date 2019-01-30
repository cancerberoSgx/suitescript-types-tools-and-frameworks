// This file is automatically generated - don't edit it. 
// Search Types for record Inventory Detail (inventorydetail)

// Search Columns

/** Inventory Detail (inventorydetail) Search Columns definition */
export interface inventorydetailSearchColumn {
  /** Bin Number (binnumber: select) */
      binnumber?: string;
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
  /** Number (inventorynumber: select) */
      inventorynumber?: string;
  /** Quantity (quantity: float) */
      quantity?: number;
}


// Search Filters

/** Inventory Detail (inventorydetail) Search Filters definition */
export interface inventorydetailSearchFilter {
/** Bin Number (binnumber: select) */
  binnumber?: string;
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
  /** Number (inventorynumber: select) */
  inventorynumber?: string;
  /** Quantity (quantity: float) */
  quantity?: number;
}


// Search Joins

/** Inventory Detail (inventorydetail) Search Joins definitions. */
export interface inventorydetailSearchJoinTypes {
/** inventorydetail's inventorynumber search filter. Inventory Number. Actual name: Inventory Numbers. */
  inventorynumber: 'inventorynumber';
}


// Search Filter Types

/** Inventory Detail (inventorydetail) Search Filter Type definitions. */
export interface inventorydetailSearchFilterTypes {
binnumber: 'select';
  externalid: 'select';
  externalidstring: 'text';
  formuladate: 'date';
  formulanumeric: 'float';
  formulatext: 'text';
  internalid: 'select';
  internalidnumber: 'integer';
  inventorynumber: 'select';
  quantity: 'float';
}


// Search Column Types

/** Inventory Detail (inventorydetail) Search Column Type definitions. */
export interface inventorydetailSearchColumnTypes {
binnumber: 'select';
  externalid: 'select';
  formulacurrency: 'currency';
  formuladate: 'date';
  formuladatetime: 'datetime';
  formulanumeric: 'float';
  formulapercent: 'percent';
  formulatext: 'text';
  internalid: 'select';
  inventorynumber: 'select';
  quantity: 'float';
}