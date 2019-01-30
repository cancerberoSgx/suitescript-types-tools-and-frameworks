// This file is automatically generated - don't edit it. 
// Search Types for record Message (message)

// Search Columns

/** Message (message) Search Columns definition */
export interface messageSearchColumn {
  /** Author (author: select) */
      author?: string;
  /** Author Email (authoremail: text) */
      authoremail?: string;
  /** Bcc (bcc: email) */
      bcc?: string;
  /** Cc (cc: email) */
      cc?: string;
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
  /** Files (hasattachment: checkbox) */
      hasattachment?: boolean;
  /** Internal ID (internalid: select) */
      internalid?: string;
  /** Internal Only (internalonly: checkbox) */
      internalonly?: boolean;
  /** Email Sent (isemailed: checkbox) */
      isemailed?: boolean;
  /** Is Incoming (isincoming: checkbox) */
      isincoming?: boolean;
  /** Message (message: clobtext) */
      message?: string;
  /** Date (messagedate: datetime) */
      messagedate?: Date;
  /** Type (messagetype: select) */
      messagetype?: string;
  /** Recipient (recipient: select) */
      recipient?: string;
  /** Recipient Email (recipientemail: text) */
      recipientemail?: string;
  /** Subject (subject: text) */
      subject?: string;
  /** View (view: text) */
      view?: string;
}


// Search Filters

/** Message (message) Search Filters definition */
export interface messageSearchFilter {
/** Author (author: select) */
  author?: string;
  /** From Email (authoremail: email) */
  authoremail?: string;
  /** Bcc (bcc: email) */
  bcc?: string;
  /** Cc (cc: email) */
  cc?: string;
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
  /** Has Attachment (hasattachment: checkbox) */
  hasattachment?: boolean;
  /** Internal ID (internalid: select) */
  internalid?: string;
  /** Internal ID (Number) (internalidnumber: integer) */
  internalidnumber?: number;
  /** Internal Only (internalonly: checkbox) */
  internalonly?: boolean;
  /** Is Incoming (isincoming: checkbox) */
  isincoming?: boolean;
  /** Message (message: clobtext) */
  message?: string;
  /** Date (messagedate: datetime) */
  messagedate?: Date;
  /** Type (messagetype: select) */
  messagetype?: string;
  /** Recipient (recipient: select) */
  recipient?: string;
  /** Recipient Email (recipientemail: email) */
  recipientemail?: string;
  /** Subject (subject: text) */
  subject?: string;
}


// Search Joins

/** Message (message) Search Joins definitions. */
export interface messageSearchJoinTypes {
/** message's campaign search filter. Campaign. Actual name: Campaign. */
  campaign: 'campaign';
  /** message's contact search filter. Contact. Actual name: Contact. */
  contact: 'contact';
  /** message's customer search filter. Customer. Actual name: Customer. */
  customer: 'customer';
  /** message's employee search filter. Employee. Actual name: Employee. */
  employee: 'employee';
  /** message's originatinglead search filter. Originating Lead. Actual name: Lead. */
  originatinglead: 'originatinglead';
  /** message's partner search filter. Partner. Actual name: Partner. */
  partner: 'partner';
  /** message's vendor search filter. Vendor. Actual name: Vendor. */
  vendor: 'vendor';
}


// Search Filter Types

/** Message (message) Search Filter Type definitions. */
export interface messageSearchFilterTypes {
author: 'select';
  authoremail: 'email';
  bcc: 'email';
  cc: 'email';
  externalid: 'select';
  externalidstring: 'text';
  formuladate: 'date';
  formulanumeric: 'float';
  formulatext: 'text';
  hasattachment: 'checkbox';
  internalid: 'select';
  internalidnumber: 'integer';
  internalonly: 'checkbox';
  isincoming: 'checkbox';
  message: 'clobtext';
  messagedate: 'datetime';
  messagetype: 'select';
  recipient: 'select';
  recipientemail: 'email';
  subject: 'text';
}


// Search Column Types

/** Message (message) Search Column Type definitions. */
export interface messageSearchColumnTypes {
author: 'select';
  authoremail: 'text';
  bcc: 'email';
  cc: 'email';
  externalid: 'select';
  formulacurrency: 'currency';
  formuladate: 'date';
  formuladatetime: 'datetime';
  formulanumeric: 'float';
  formulapercent: 'percent';
  formulatext: 'text';
  hasattachment: 'checkbox';
  internalid: 'select';
  internalonly: 'checkbox';
  isemailed: 'checkbox';
  isincoming: 'checkbox';
  message: 'clobtext';
  messagedate: 'datetime';
  messagetype: 'select';
  recipient: 'select';
  recipientemail: 'text';
  subject: 'text';
  view: 'text';
}