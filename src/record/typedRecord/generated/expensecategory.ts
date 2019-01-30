// This file is auto generated, do not edit it. 




/** 
 * Expense Category Fields Definition.
 * Record's Internal Id: expensecategory. 
 * Supports Custom Fields: true 
 */
export interface expensecategoryFields {
/** Enter a default rate to be used on expense reports for this category.

This rate can be overridden on individual line items. */
  defaultrate?: string;
  /** Enter a description of the expense category.

If you use the Google Checkout Integration feature, enter a description for the tracking URL. This field is optional. */
  description?: string;
  /** Select the expense account for items charged to this category. */
  expenseacct: string;
  /**  */
  externalid?: string;
  /** Check this box if you want to make this expense category inactive. */
  isinactive?: boolean;
  /** Enter the name of an expense category.

If you use the Google Checkout Integration feature, enter a name for the tracking URL.

Name the tracking URL for the tracking pixel vendor you use. If you use multiple vendors, you must create a conversion tracking URL record for each vendor. */
  name: string;
  /** Check this box to require a quantity and rate when this category is selected on expense reports.

Quantity and rate fields are used to calculate the amount on line items with rate required expenses. */
  raterequired?: boolean;
  /**  */
  subsidiary?: string;
}





/** 
 * Expense Category Sublists Definition.
 * Record's Internal Id: expensecategory. 
 * Supports Custom Fields: true 
 */
export interface expensecategorySublists {
  
}





