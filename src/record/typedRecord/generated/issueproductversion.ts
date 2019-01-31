// This file is auto generated, do not edit it. 




/** 
 * Version Fields Definition.
 * Record's Internal Id: issueproductversion. 
 * Supports Custom Fields: false 
 */
export interface issueproductversionFields {
/**  */
  allowbrokenin?: boolean;
  /**  */
  allowfixedin?: boolean;
  /**  */
  allowtarget?: boolean;
  /**  */
  expectedreleasedate?: Date;
  /**  */
  externalid?: string;
  /**  */
  externalreleasetarget?: string;
  /**  */
  id?: number;
  /**  */
  internalid?: number;
  /**  */
  isefix?: boolean;
  /**  */
  isinactive?: boolean;
  /**  */
  issueproduct?: string;
  /**  */
  issueversiondescription?: string;
  /**  */
  portletdescription?: string;
  /**  */
  productversion: string;
  /**  */
  showinportlet?: boolean;
}





/** 
 * Version Sublists Definition.
 * Record's Internal Id: issueproductversion. 
 * Supports Custom Fields: false 
 */
export interface issueproductversionSublists {
  
  /** availablebuild: Build */
  availablebuild: {
    /** allowbrokenin - Allow Broken In  */
    allowbrokenin: boolean;
    /** allowfixedin - Allow Fixed In  */
    allowfixedin: boolean;
    /** allowtarget - Allow Target  */
    allowtarget: boolean;
    /** build - Build  */
    build: string;
    /** builtdate - Build Date  */
    builtdate: Date;
    /** description - Description  */
    description: string;
    /** id - Internal ID  */
    id: number;
    /** isinactive - Inactive  */
    isinactive: boolean;
    /** productversion - Product Version  */
    productversion: string;
  }
}





