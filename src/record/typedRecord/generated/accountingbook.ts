// This file is auto generated, do not edit it. 




/** 
 * Accounting Book Fields Definition.
 * Record's Internal Id: accountingbook. 
 * Supports Custom Fields: true 
 */
export interface accountingbookFields {
/**  */
  customform?: string;
  /**  */
  effectiveperiod: string;
  /**  */
  externalid?: string;
  /**  */
  includechildren?: boolean;
  /**  */
  isconsolidated?: boolean;
  /**  */
  isprimary?: boolean;
  /**  */
  name: string;
  /**  */
  status?: string;
  /**  */
  subsidiary?: string;
}





/** 
 * Accounting Book Sublists Definition.
 * Record's Internal Id: accountingbook. 
 * Supports Custom Fields: true 
 */
export interface accountingbookSublists {
  
  /** accountingbookcurrencies: Currencies */
  accountingbookcurrencies: {
    /** currency - Base Currency  */
    currency: string;
    /** effectivedate - Effective Date  */
    effectivedate: Date;
    /** exchangerate - Translation exchange rate  */
    exchangerate: number;
    /** primarybookcurrency - Primary Book Base Currency  */
    primarybookcurrency: string;
    /** subsidiary - Subsidiary  */
    subsidiary: string;
    /** subsidiarykey - key  */
    subsidiarykey: string;
    /** subsidiarystatus - Status  */
    subsidiarystatus: string;
  }

  /** accountingbooksubsidiaries: Subsidiaries */
  accountingbooksubsidiaries: {
    /** currency - Base Currency  */
    currency: string;
    /** effectivedate - Effective Date  */
    effectivedate: Date;
    /** exchangerate - Translation exchange rate  */
    exchangerate: number;
    /** primarybookcurrency - Primary Book Base Currency  */
    primarybookcurrency: string;
    /** status - Status  */
    status: string;
    /** subsidiary - Subsidiary  */
    subsidiary: string;
  }
}





