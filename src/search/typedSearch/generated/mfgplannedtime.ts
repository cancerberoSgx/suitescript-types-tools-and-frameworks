// This file is automatically generated - don't edit it. 
// Search Types for record Manufacturing Planned Time (mfgplannedtime)

// Search Columns

/** Manufacturing Planned Time (mfgplannedtime) Search Columns definition */
export interface mfgplannedtimeSearchColumn {
  /** Date (date: date) */
      date?: string;
  /** Duration (duration: text) */
      duration?: string;
  /** Duration (Decimal) (durationdecimal: float) */
      durationdecimal?: string;
  /** External ID (externalid: select) */
      externalid?: string;
  /** Manufacturing Work Center (manufacturingworkcenter: text) */
      manufacturingworkcenter?: string;
  /** Operation (operation: text) */
      operation?: string;
}


// Search Filters

/** Manufacturing Planned Time (mfgplannedtime) Search Filters definition */
export interface mfgplannedtimeSearchFilter {
/** Date (date: date) */
  date?: string;
  /** Duration (duration: float) */
  duration?: string;
  /** External ID (externalid: select) */
  externalid?: string;
  /** External ID (Text) (externalidstring: text) */
  externalidstring?: string;
  /** Manufacturing Work Center (manufacturingworkcenter: select) */
  manufacturingworkcenter?: string;
  /** Work Order (workorder: select) */
  workorder?: string;
}


// Search Joins

/** Manufacturing Planned Time (mfgplannedtime) Search Joins definitions. */
export interface mfgplannedtimeSearchJoinTypes {
/** mfgplannedtime's manufacturingworkcenter search filter. Manufacturing Work Center. Actual name: Group. */
  manufacturingworkcenter: 'manufacturingworkcenter';
  /** mfgplannedtime's operationtask search filter. Operation Task. Actual name: Manufacturing Operation Task. */
  operationtask: 'operationtask';
}


// Search Filter Types

/** Manufacturing Planned Time (mfgplannedtime) Search Filter Type definitions. */
export interface mfgplannedtimeSearchFilterTypes {
date: 'date';
  duration: 'float';
  externalid: 'select';
  externalidstring: 'text';
  manufacturingworkcenter: 'select';
  workorder: 'select';
}


// Search Column Types

/** Manufacturing Planned Time (mfgplannedtime) Search Column Type definitions. */
export interface mfgplannedtimeSearchColumnTypes {
date: 'date';
  duration: 'text';
  durationdecimal: 'float';
  externalid: 'select';
  manufacturingworkcenter: 'text';
  operation: 'text';
}