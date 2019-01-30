// This file is auto generated, do not edit it. 




/** 
 * Coupon Code Fields Definition.
 * Record's Internal Id: couponcode. 
 * Supports Custom Fields: true 
 */
export interface couponcodeFields {
/** The coupon code that is entered on a sales transaction to apply the promotion. Coupon codes can be multiple-use or single-use. Multiple-use codes can be used any number of times by any number of customers. Each single-use code can only be used one time by a single customer. */
  code: string;
  /** This field shows the date the coupon code was sent to the recipient. */
  datesent?: Date;
  /**  */
  externalid?: string;
  /** This field displays the name of the promotion that the selected coupon code is used with. */
  promotion: string;
  /** This field displays the recipient of the selected coupon code.

Note that the recipient of the coupon code may differ from the customer who used the coupon code. */
  recipient?: string;
  /** The coupon has been used by the recipient when the Used box is checked. */
  used?: boolean;
}





/** 
 * Coupon Code Sublists Definition.
 * Record's Internal Id: couponcode. 
 * Supports Custom Fields: true 
 */
export interface couponcodeSublists {
  
}





