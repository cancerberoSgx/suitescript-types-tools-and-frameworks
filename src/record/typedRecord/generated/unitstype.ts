// This file is auto generated, do not edit it. 




/** 
 * Units Type Fields Definition.
 * Record's Internal Id: unitstype. 
 * Supports Custom Fields: true 
 */
export interface unitstypeFields {
/**  */
  externalid?: string;
  /** Check this box to inactivate this unit record.
When a record is inactive, it does not appear in lists and cannot be selected on records and transactions. */
  isinactive?: boolean;
  /** Enter a name for the type of units you are creating. For example, enter "Length" to create units of Inch, Foot and Yard. */
  name: string;
}





/** 
 * Units Type Sublists Definition.
 * Record's Internal Id: unitstype. 
 * Supports Custom Fields: true 
 */
export interface unitstypeSublists {
  
  /** uom: Units */
  uom: {
    /** abbreviation - Abbreviation  */
    abbreviation?: string;
    /** baseunit - Base Unit  */
    baseunit: boolean;
    /** conversionrate - Conversion Rate  (/base)  */
    conversionrate?: string;
    /** internalid -   */
    internalid: string;
    /** pluralabbreviation - Plural Abbreviation  */
    pluralabbreviation?: string;
    /** pluralname - Plural Name  */
    pluralname?: string;
    /** unitname - Name  */
    unitname?: string;
  }
}





