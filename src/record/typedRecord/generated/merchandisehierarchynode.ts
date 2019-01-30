// This file is auto generated, do not edit it. 




/** 
 * Merchandise Hierarchy Node Fields Definition.
 * Record's Internal Id: merchandisehierarchynode. 
 * Supports Custom Fields: true 
 */
export interface merchandisehierarchynodeFields {
/**  */
  description?: string;
  /**  */
  externalid?: string;
  /**  */
  name: string;
}





/** 
 * Merchandise Hierarchy Node Sublists Definition.
 * Record's Internal Id: merchandisehierarchynode. 
 * Supports Custom Fields: true 
 */
export interface merchandisehierarchynodeSublists {
  
  /** hierarchyversions: Hierarchy Versions */
  hierarchyversions: {
    /** enddate - End Date  */
    enddate: Date;
    /** hierarchylevel - Hierarchy Level  */
    hierarchylevel: string;
    /** hierarchyversion - Hierarchy Version  */
    hierarchyversion: string;
    /** isincluded - Included In Version  */
    isincluded: boolean;
    /** parentnode - Parent Node  */
    parentnode: string;
    /** startdate - Start Date  */
    startdate: Date;
  }
}





