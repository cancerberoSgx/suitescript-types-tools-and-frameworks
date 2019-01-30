// This file is auto generated, do not edit it. 




/** 
 * Price Level Fields Definition.
 * Record's Internal Id: pricelevel. 
 * Supports Custom Fields: true 
 */
export interface pricelevelFields {
/** If you like, enter a positive or negative percentage to mark up or discount prices for this price level.

Prices for this level are calculated by applying the positive or negative percentage to the Base Price level.

If you want to update all items using this price level, you must also check the Update Existing Prices box.

After you click Save, your prices automatically update.

Note: Any value you enter is rounded to the nearest 0.01% */
  discountpct?: number;
  /**  */
  externalid?: string;
  /** Check this box to remove all references to this record from your account.

You can reactivate the record at any time. */
  isinactive?: boolean;
  /** Check this box to allow customers to use this in the web store. */
  isonline?: boolean;
  /** Enter the name for this record. This name appears in lists that include this record. */
  name: string;
  /** Check this box to update all items using this price level with what you entered in the Markup/Discount % field. */
  updateexistingprices?: boolean;
}





/** 
 * Price Level Sublists Definition.
 * Record's Internal Id: pricelevel. 
 * Supports Custom Fields: true 
 */
export interface pricelevelSublists {
  
}





