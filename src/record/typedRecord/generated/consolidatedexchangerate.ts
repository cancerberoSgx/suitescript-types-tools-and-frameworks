// This file is auto generated, do not edit it. 




/** 
 * Consolidated Exchange Rate Fields Definition.
 * Record's Internal Id: consolidatedexchangerate. 
 * Supports Custom Fields: true 
 */
export interface consolidatedexchangerateFields {
/** If the Multi-Book Accounting feature is provisioned in your account, this is the accounting book associated with this consolidated exchange rate. */
  accountingbook?: string;
  /** This is the average exchange rate. This rate is calculated from a weighted average of the exchange rates for transactions applied during the period to accounts with a general rate type of Average. This rate is used to translate accounts in the income statement and to build retained earnings. */
  averagerate: number;
  /** This is the current exchange rate. Also referred to as ending rate. This rate is based on the currency exchange rate that is effective at the end of the reported upon period. This rate is used for most asset and liability accounts in the balance sheet. */
  currentrate: number;
  /** This is the currency from which the exchange rate is calculated. */
  fromcurrency?: string;
  /** This is the subsidiary from which the exchange rate is calculated. */
  fromsubsidiary?: string;
  /** This is the historical exchange rate. This rate is calculated from a weighted average of the exchange rates for transactions applied during the period to accounts with a general rate type of Historical. This rate is used for equity accounts, or owner's investments, in the balance sheet. */
  historicalrate: number;
  /** If this box is checked, the exchange rate is indirect. Indirect rates are rates set between subsidiaries more than one hierarchical level removed from each other, such as a child and grandchild. Indirect rates are always set by the system and cannot be edited or auto calculated by users. */
  isderived?: boolean;
  /** If this box is checked, the subsidiary associated with this consolidated exchange rate is an elimination subsidiary. You cannot edit the rates for an elimination subsidiary. */
  iseliminationsubsidiary?: boolean;
  /** If this box is checked, the accounting period is closed. */
  isperiodclosed?: boolean;
  /** This is the posting period for this exchange rate. */
  postingperiod?: string;
  /** This is the currency into which the exchange rate is calculated. */
  tocurrency?: string;
  /** This is the subsidiary to which the exchange rate is calculated. */
  tosubsidiary?: string;
}





/** 
 * Consolidated Exchange Rate Sublists Definition.
 * Record's Internal Id: consolidatedexchangerate. 
 * Supports Custom Fields: true 
 */
export interface consolidatedexchangerateSublists {
  
}





