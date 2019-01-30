// This file is automatically generated - don't edit it. 
// Search Types for record Scheduled Script Instance (scheduledscriptinstance)

// Search Columns

/** Scheduled Script Instance (scheduledscriptinstance) Search Columns definition */
export interface scheduledscriptinstanceSearchColumn {
  /** Date Created (datecreated: datetime) */
      datecreated?: Date;
  /** End Date (enddate: datetime) */
      enddate?: Date;
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
  /** Percent Complete (percentcomplete: percent) */
      percentcomplete?: number;
  /** Queue (queue: text) */
      queue?: string;
  /** Queue Position (queueposition: integer) */
      queueposition?: number;
  /** Start Date (startdate: datetime) */
      startdate?: Date;
  /** Status (status: text) */
      status?: string;
}


// Search Filters

/** Scheduled Script Instance (scheduledscriptinstance) Search Filters definition */
export interface scheduledscriptinstanceSearchFilter {
/** Date Created (datecreated: datetime) */
  datecreated?: Date;
  /** End Date (enddate: datetime) */
  enddate?: Date;
  /** Formula (Date) (formuladate: date) */
  formuladate?: Date;
  /** Formula (Numeric) (formulanumeric: float) */
  formulanumeric?: number;
  /** Formula (Text) (formulatext: text) */
  formulatext?: string;
  /** Percent Complete (percentcomplete: percent) */
  percentcomplete?: number;
  /** Queue (queue: text) */
  queue?: string;
  /** Start Date (startdate: datetime) */
  startdate?: Date;
  /** Status (status: select) */
  status?: string;
}


// Search Joins

/** Scheduled Script Instance (scheduledscriptinstance) Search Joins definitions. */
export interface scheduledscriptinstanceSearchJoinTypes {
/** scheduledscriptinstance's script search filter. Script. Actual name: Script. */
  script: 'script';
  /** scheduledscriptinstance's scriptdeployment search filter. Script Deployment. Actual name: Script Deployment. */
  scriptdeployment: 'scriptdeployment';
}


// Search Filter Types

/** Scheduled Script Instance (scheduledscriptinstance) Search Filter Type definitions. */
export interface scheduledscriptinstanceSearchFilterTypes {
datecreated: 'datetime';
  enddate: 'datetime';
  formuladate: 'date';
  formulanumeric: 'float';
  formulatext: 'text';
  percentcomplete: 'percent';
  queue: 'text';
  startdate: 'datetime';
  status: 'select';
}


// Search Column Types

/** Scheduled Script Instance (scheduledscriptinstance) Search Column Type definitions. */
export interface scheduledscriptinstanceSearchColumnTypes {
datecreated: 'datetime';
  enddate: 'datetime';
  formulacurrency: 'currency';
  formuladate: 'date';
  formuladatetime: 'datetime';
  formulanumeric: 'float';
  formulapercent: 'percent';
  formulatext: 'text';
  percentcomplete: 'percent';
  queue: 'text';
  queueposition: 'integer';
  startdate: 'datetime';
  status: 'text';
}