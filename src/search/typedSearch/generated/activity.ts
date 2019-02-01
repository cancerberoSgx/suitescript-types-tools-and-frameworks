// This file is automatically generated - don't edit it. 
// Search Types for record Activity (activity)

// Search Columns

/** Activity (activity) Search Columns definition */
export interface activitySearchColumn {
  /** Assigned To (assigned: select) */
      assigned?: string;
  /** Company (company: text) */
      company?: string;
  /** Date Completed (completeddate: date) */
      completeddate?: Date;
  /** Contact (contact: select) */
      contact?: string;
  /** Date Created (createddate: date) */
      createddate?: Date;
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
  /** Last Modified (lastmodifieddate: date) */
      lastmodifieddate?: Date;
  /** Mark (markdone: text) */
      markdone?: string;
  /** Notes (message: textarea) */
      message?: string;
  /** Owner (owner: select) */
      owner?: string;
  /** Priority (priority: select) */
      priority?: string;
  /** Date (startdate: date) */
      startdate?: Date;
  /** Time (starttime: timeofday) */
      starttime?: string;
  /** Status (status: text) */
      status?: string;
  /** Title (title: text) */
      title?: string;
  /** Transaction (transaction: select) */
      transaction?: string;
  /** Type (type: text) */
      type?: string;
}


// Search Filters

/** Activity (activity) Search Filters definition */
export interface activitySearchFilter {
/** Assigned To (assigned: select) */
  assigned?: string;
  /** Company (company: select) */
  company?: string;
  /** Date Completed (completeddate: date) */
  completeddate?: Date;
  /** Contact (contact: select) */
  contact?: string;
  /** Date (date: date) */
  date?: Date;
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
  /** Notes (memo: textarea) */
  memo?: string;
  /** Created By (owner: select) */
  owner?: string;
  /** Priority (priority: select) */
  priority?: string;
  /** Status (status: select) */
  status?: string;
  /** Title (title: text) */
  title?: string;
  /** Activity Type (type: select) */
  type?: string;
}


// Search Joins

/** Activity (activity) Search Joins definitions. */
export interface activitySearchJoinTypes {
/** activity's contact search filter. Contact. Actual name: Contact. */
  contact: 'contact';
  /** activity's originatinglead search filter. Originating Lead. Actual name: Lead. */
  originatinglead: 'originatinglead';
  /** activity's user search filter. User. Actual name: Employee. */
  user: 'user';
}


// Search Filter Types

/** Activity (activity) Search Filter Type definitions. */
export interface activitySearchFilterTypes {
assigned: 'select';
  company: 'select';
  completeddate: 'date';
  contact: 'select';
  date: 'date';
  externalid: 'select';
  externalidstring: 'text';
  formuladate: 'date';
  formulanumeric: 'float';
  formulatext: 'text';
  internalid: 'select';
  internalidnumber: 'integer';
  memo: 'textarea';
  owner: 'select';
  priority: 'select';
  status: 'select';
  title: 'text';
  type: 'select';
}


// Search Column Types

/** Activity (activity) Search Column Type definitions. */
export interface activitySearchColumnTypes {
assigned: 'select';
  company: 'text';
  completeddate: 'date';
  contact: 'select';
  createddate: 'date';
  externalid: 'select';
  formulacurrency: 'currency';
  formuladate: 'date';
  formuladatetime: 'datetime';
  formulanumeric: 'float';
  formulapercent: 'percent';
  formulatext: 'text';
  internalid: 'select';
  lastmodifieddate: 'date';
  markdone: 'text';
  message: 'textarea';
  owner: 'select';
  priority: 'select';
  startdate: 'date';
  starttime: 'timeofday';
  status: 'text';
  title: 'text';
  transaction: 'select';
  type: 'text';
}