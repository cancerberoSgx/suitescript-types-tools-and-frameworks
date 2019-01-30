// This file is auto generated, do not edit it. 




/** 
 * Department Fields Definition.
 * Record's Internal Id: department. 
 * Supports Custom Fields: true 
 */
export interface departmentFields {
/**  */
  externalid?: string;
  /** Check the Include Children box to associate the department with all the sub-subsidiaries associated with each subsidiary selected in the Subsidiary field. */
  includechildren?: boolean;
  /** Check this box to inactivate this department record. Inactive departments do not show in lists of departments on records and transactions. */
  isinactive?: boolean;
  /** Enter a name for this department. The name you enter here shows in lists of departments on records and transactions.

The name can be alphanumeric. The maximum number of characters is 31. */
  name: string;
  /** Select a parent department for this subdepartment. */
  parent?: string;
  /**  */
  subsidiary?: string;
}





/** 
 * Department Sublists Definition.
 * Record's Internal Id: department. 
 * Supports Custom Fields: true 
 */
export interface departmentSublists {
  
}





