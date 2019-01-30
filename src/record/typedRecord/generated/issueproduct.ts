// This file is auto generated, do not edit it. 




/** 
 * Product Fields Definition.
 * Record's Internal Id: issueproduct. 
 * Supports Custom Fields: true 
 */
export interface issueproductFields {
/**  */
  externalid?: string;
  /**  */
  id?: number;
  /**  */
  internalid?: number;
  /**  */
  isinactive?: boolean;
  /**  */
  issueproduct: string;
  /**  */
  issueproductdescription?: string;
  /**  */
  showinactiveversions?: boolean;
}





/** 
 * Product Sublists Definition.
 * Record's Internal Id: issueproduct. 
 * Supports Custom Fields: true 
 */
export interface issueproductSublists {
  
  /** issuemodule: Product Modules */
  issuemodule: {
    /** build - Module  */
    build: string;
    /** description - Description  */
    description: string;
    /** id - Internal ID  */
    id: number;
    /** isinactive - Inactive  */
    isinactive: boolean;
    /** issueproduct - Product  */
    issueproduct: string;
  }

  /** issueproductversions: Version */
  issueproductversions: {
    /** allowbrokenin - Allow Broken In  */
    allowbrokenin: boolean;
    /** allowfixedin - Allow Fixed In  */
    allowfixedin: boolean;
    /** allowtarget - Allow Target  */
    allowtarget: boolean;
    /** expectedreleasedate - Expected Release Date  */
    expectedreleasedate: Date;
    /** externalid - ExternalId  */
    externalid: string;
    /** externalreleasetarget - External Target  */
    externalreleasetarget: string;
    /** id - Internal ID  */
    id: number;
    /** internalid - Internal ID  */
    internalid: number;
    /** isefix - E-fix  */
    isefix: boolean;
    /** isinactive - Inactive  */
    isinactive: boolean;
    /** issueproduct - Product  */
    issueproduct: string;
    /** issueversiondescription - Description  */
    issueversiondescription: string;
    /** portletdescription - Portlet Description  */
    portletdescription: string;
    /** productversion - Product Version  */
    productversion?: string;
    /** showinportlet - Show In Portlet  */
    showinportlet: boolean;
  }
}





