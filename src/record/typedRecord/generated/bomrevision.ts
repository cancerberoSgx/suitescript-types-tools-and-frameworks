// This file is auto generated, do not edit it. 




/** 
 * Bill of Materials Revision Fields Definition.
 * Record's Internal Id: bomrevision. 
 * Supports Custom Fields: true 
 */
export interface bomrevisionFields {
/**  */
  billofmaterial?: string;
  /**  */
  createddate?: Date;
  /**  */
  effectivedate: Date;
  /**  */
  externalid?: string;
  /**  */
  isinactive?: boolean;
  /**  */
  memo?: string;
  /**  */
  name: string;
  /**  */
  obsoletedate?: Date;
}





/** 
 * Bill of Materials Revision Sublists Definition.
 * Record's Internal Id: bomrevision. 
 * Supports Custom Fields: true 
 */
export interface bomrevisionSublists {
  
  /** bomrevisioncomponent: Components */
  bomrevisioncomponent: {
    /** bomquantity - BOM Quantity  */
    bomquantity: string;
    /** componentyield - Component Yield  */
    componentyield: number;
    /** description - Description  */
    description: string;
    /** internalid - ID  */
    internalid: number;
    /** item - Item  */
    item?: string;
    /** itemsource - Item Source  */
    itemsource: string;
    /** itemsourcelist - Item Source options list  */
    itemsourcelist: string;
    /** linenumber - Sequence  */
    linenumber: number;
    /** quantity - Quantity  */
    quantity?: string;
    /** unit - Units  */
    unit: string;
  }
}





