// This file is auto generated, do not edit it. 




/** 
 * Promotion Fields Definition.
 * Record's Internal Id: promotioncode. 
 * Supports Custom Fields: true 
 */
export interface promotioncodeFields {
/** Choose how many times this promotion can be used by the same customer.

Select One time only to limit this promotion to one use per customer, or select Unlimited amount of times to allow a customer to use the promotion as many times as they want without limit. */
  applydiscountto?: string;
  /** The coupon code that is entered on a sales transaction to apply the promotion. Coupon codes can be multiple-use or single-use. Multiple-use codes can be used any number of times by any number of customers. Each single-use code can only be used one time by a single customer. */
  code: string;
  /** You enter code patterns using the following components in any order you choose:

    * [A.#] &#x2013; This adds a number of random letters in the code.
    * [N.#] &#x2013; This adds a number of random numbers in the code.
    * [AN.#] &#x2013; This adds a number of random alphanumeric characters to the code.
    * Hard-coded alphanumeric characters. Do not enclose these in square brackets.
    * Dashes (-)

Note: The following letters and numbers cannot be used in coupon codes: 1, 0, I, L, O.

For example, the code ABC-[AN.3]-[A.3]-[N.3] would generate codes like:

    * ABC-J3N-FLN-647
    * ABC-45F-KPM-958
    * ABC-5MP-PQA-874

When creating your code pattern, make sure that the pattern you give has enough variables to provide the number of unique codes you need for your promotion. */
  codepattern?: string;
  /**  */
  couponcodefile?: string;
  /**  */
  customform: string;
  /** Enter a description of this promotion. */
  description?: string;
  /** Select the discount item you want to assign to this promotion. Any account associated with this discount item is impacted by this promotion's discount. Using discount items enables you to track discount amounts without affecting inventory valuation.

To create new discount item, go to Lists > Accounting > Items > New, and click Discount. */
  discount?: string;
  /** Select the % option if the discount rate for this promotion is a percentage.

Select the Flat option if the discount rate for this promotion is a flat rate. */
  discounttype?: string;
  /** Check this box if you want to show the promotion discount as line items in transactions. The discount will appear as a line beneath qualifying items on the transaction.

You must check this box and select a percentage discount in order to show strikeout pricing on Web store orders. A flat rate promotion applies to the total order.

If you clear this box, the promotion discount will be shown in the transaction total.

Note: If you use line discount promotions, when you apply the promotion to a transaction, you must click Calculate to create the discount line before saving the transaction. */
  displaylinediscounts?: boolean;
  /** Enter the date this promotion can no longer be applied to transactions. */
  enddate?: Date;
  /** Check this box to have this promotion code apply to all items except those you add below.

If you do not check this box, the code can only be used for the items you add below. */
  excludeitems?: boolean;
  /**  */
  externalid?: string;
  /** Select a shipping method from the list that will be offered for free on eligible transactions. */
  freeshipmethod?: string;
  /** Check this box to deactivate this promotion. Inactive promotions cannot be applied to customers or transactions. */
  isinactive?: boolean;
  /** Check this box to be able to select this promotion on transactions for any customer.

If you do not check this box, only customers associated with the partners you select below are able to use this promotion. */
  ispublic?: boolean;
  /**  */
  location?: string;
  /** Enter the name for this promotion.

Note: This is the name used for internal and reporting use only. The coupon code you want customers to use on sales transactions is entered in the Coupon Code field on the Codes subtab. */
  name?: string;
  /** Enter the number of coupon codes you want to generate with your code pattern. */
  numbertogenerate?: number;
  /** Enter the discount rate for this promotion. Select % if this rate is a percentage. Select flat if this rate is a flat discount. */
  rate?: string;
  /** Enter the first date this promotion can be applied to a transaction. */
  startdate?: Date;
  /** Choose whether you are entering a multiple-use coupon code that can be used any number of times by any number of customers, or single-use coupon codes that can only be used one time by a single customer. */
  usetype?: string;
}





/** 
 * Promotion Sublists Definition.
 * Record's Internal Id: promotioncode. 
 * Supports Custom Fields: true 
 */
export interface promotioncodeSublists {
  
}





