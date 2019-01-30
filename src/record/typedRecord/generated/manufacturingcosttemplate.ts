// This file is auto generated, do not edit it. 




/** 
 * Manufacturing Cost Template Fields Definition.
 * Record's Internal Id: manufacturingcosttemplate. 
 * Supports Custom Fields: true 
 */
export interface manufacturingcosttemplateFields {
/**  */
  customform?: string;
  /**  */
  externalid?: string;
  /** Check the Inactive box if you do not want this template to show in lists on forms and records. Clear this box if you do want this template to show in lists. */
  isinactive?: boolean;
  /** Optionally enter a memo. You can search for text you enter here to find this template later. */
  memo?: string;
  /** Enter a name for this template. */
  name: string;
  /**  */
  subsidiary: string;
}





/** 
 * Manufacturing Cost Template Sublists Definition.
 * Record's Internal Id: manufacturingcosttemplate. 
 * Supports Custom Fields: true 
 */
export interface manufacturingcosttemplateSublists {
  
  /** costdetail: Costs */
  costdetail: {
    /** costcategory - Cost Category  */
    costcategory?: string;
    /** fixedrate - Fixed Rate  */
    fixedrate: number;
    /** item - Item  */
    item?: string;
    /** runrate - Run Rate  */
    runrate: number;
  }
}





