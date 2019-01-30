// This file is auto generated, do not edit it. 




/** 
 * Merchandise Hierarchy Version Fields Definition.
 * Record's Internal Id: merchandisehierarchyversion. 
 * Supports Custom Fields: true 
 */
export interface merchandisehierarchyversionFields {
/**  */
  description?: string;
  /**  */
  enddate?: Date;
  /**  */
  externalid?: string;
  /**  */
  name: string;
  /**  */
  startdate?: Date;
}





/** 
 * Merchandise Hierarchy Version Sublists Definition.
 * Record's Internal Id: merchandisehierarchyversion. 
 * Supports Custom Fields: true 
 */
export interface merchandisehierarchyversionSublists {
  
  /** hierarchylevels: Hierarchy Levels */
  hierarchylevels: {
    /** hierarchylevel - Hierarchy Level  */
    hierarchylevel: string;
    /** isincluded - Included In This Version  */
    isincluded: boolean;
    /** levelrank - Level Rank  */
    levelrank: number;
  }
}





