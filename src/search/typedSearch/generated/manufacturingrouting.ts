// This file is automatically generated - don't edit it. 
// Search Types for record Manufacturing Routing (manufacturingrouting)

// Search Columns

/** Manufacturing Routing (manufacturingrouting) Search Columns definition */
export interface manufacturingroutingSearchColumn {
  /** Auto-calculate Lag (autocalculatelag: checkbox) */
      autocalculatelag?: boolean;
  /** Bill of Materials (billofmaterials: select) */
      billofmaterials?: string;
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
  /** Default (isdefault: checkbox) */
      isdefault?: boolean;
  /** Inactive (isinactive: checkbox) */
      isinactive?: boolean;
  /** Item (item: select) */
      item?: string;
  /** Lag Amount (lagamount: float) */
      lagamount?: number;
  /** Lag Type (lagtype: text) */
      lagtype?: string;
  /** Lag Units (lagunits: text) */
      lagunits?: string;
  /** Location (location: select) */
      location?: string;
  /** Manufacturing Cost Template (manufacturingcosttemplate: select) */
      manufacturingcosttemplate?: string;
  /** Manufacturing Work Center (manufacturingworkcenter: select) */
      manufacturingworkcenter?: string;
  /** Memo (memo: text) */
      memo?: string;
  /** Name (name: text) */
      name?: string;
  /** Operation Name (operationname: text) */
      operationname?: string;
  /** Operation Yield (operationyield: percent) */
      operationyield?: number;
  /** Run Rate (runrate: float) */
      runrate?: number;
  /** Operation Sequence (sequence: integer) */
      sequence?: number;
  /** Setup Time (setuptime: float) */
      setuptime?: number;
}


// Search Filters

/** Manufacturing Routing (manufacturingrouting) Search Filters definition */
export interface manufacturingroutingSearchFilter {
/** Auto-calculate Lag (autocalculatelag: checkbox) */
  autocalculatelag?: boolean;
  /** Bill of Materials (billofmaterials: select) */
  billofmaterials?: string;
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
  /** Default (isdefault: checkbox) */
  isdefault?: boolean;
  /** Inactive (isinactive: checkbox) */
  isinactive?: boolean;
  /** Item (item: select) */
  item?: string;
  /** Lag Amount (lagamount: float) */
  lagamount?: number;
  /** Lag Type (lagtype: select) */
  lagtype?: string;
  /** Lag Units (lagunits: text) */
  lagunits?: string;
  /** Location (location: select) */
  location?: string;
  /** Manufacturing Cost Template (manufacturingcosttemplate: select) */
  manufacturingcosttemplate?: string;
  /** Manufacturing Work Center (manufacturingworkcenter: select) */
  manufacturingworkcenter?: string;
  /** Memo (memo: text) */
  memo?: string;
  /** Name (name: text) */
  name?: string;
  /** Operation Name (operationname: text) */
  operationname?: string;
  /** Operation Yield (operationyield: percent) */
  operationyield?: number;
  /** Run Rate (runrate: float) */
  runrate?: number;
  /** Operation Sequence (sequence: integer) */
  sequence?: number;
  /** Setup Time (setuptime: float) */
  setuptime?: number;
}


// Search Joins

/** Manufacturing Routing (manufacturingrouting) Search Joins definitions. */
export interface manufacturingroutingSearchJoinTypes {
/** manufacturingrouting's location search filter. Location. Actual name: Location. */
  location: 'location';
  /** manufacturingrouting's user search filter. User. Actual name: Employee. */
  user: 'user';
}


// Search Filter Types

/** Manufacturing Routing (manufacturingrouting) Search Filter Type definitions. */
export interface manufacturingroutingSearchFilterTypes {
autocalculatelag: 'checkbox';
  billofmaterials: 'select';
  externalid: 'select';
  externalidstring: 'text';
  formuladate: 'date';
  formulanumeric: 'float';
  formulatext: 'text';
  internalid: 'select';
  internalidnumber: 'integer';
  isdefault: 'checkbox';
  isinactive: 'checkbox';
  item: 'select';
  lagamount: 'float';
  lagtype: 'select';
  lagunits: 'text';
  location: 'select';
  manufacturingcosttemplate: 'select';
  manufacturingworkcenter: 'select';
  memo: 'text';
  name: 'text';
  operationname: 'text';
  operationyield: 'percent';
  runrate: 'float';
  sequence: 'integer';
  setuptime: 'float';
}


// Search Column Types

/** Manufacturing Routing (manufacturingrouting) Search Column Type definitions. */
export interface manufacturingroutingSearchColumnTypes {
autocalculatelag: 'checkbox';
  billofmaterials: 'select';
  externalid: 'select';
  formulacurrency: 'currency';
  formuladate: 'date';
  formuladatetime: 'datetime';
  formulanumeric: 'float';
  formulapercent: 'percent';
  formulatext: 'text';
  internalid: 'select';
  isdefault: 'checkbox';
  isinactive: 'checkbox';
  item: 'select';
  lagamount: 'float';
  lagtype: 'text';
  lagunits: 'text';
  location: 'select';
  manufacturingcosttemplate: 'select';
  manufacturingworkcenter: 'select';
  memo: 'text';
  name: 'text';
  operationname: 'text';
  operationyield: 'percent';
  runrate: 'float';
  sequence: 'integer';
  setuptime: 'float';
}