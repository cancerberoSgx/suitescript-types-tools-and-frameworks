// This file is auto generated, do not edit it. 




/** 
 * Term Fields Definition.
 * Record's Internal Id: term. 
 * Supports Custom Fields: true 
 */
export interface termFields {
/** Enable the Standard option if this payment term is based on the number of days since the invoice was issued, for example, for customer payments that are due within 30 days of the date the bill is created.

Enable the Date Driven option if the payment term is based on a particular calendar date, for example, for customer payments that are due on or before the 20th of any given month. */
  datedriven?: string;
  /** If you offer a discount for early payment under date driven terms, enter the last day of the month the early payment discount is available.

For example, if the early payment discount is available through the 20th of each month, enter 20 in this field. */
  daydiscountexpires?: number;
  /** For date driven terms, enter the day of the month when the net amount of the invoice is due.

If you enter a date that does not exist in the month the transaction is due, the last day of the month becomes the due date. */
  dayofmonthnetdue?: number;
  /** For standard terms, enter the number of days the early payment discount is available.

For example, if the early payment discount is available for 15 days after the bill is issued, enter 15 in this field. */
  daysuntilexpiry?: number;
  /** Enter the number of days until the net amount of the bill becomes due.

For example, if you are creating a term of Net 30, enter 30 in this field. */
  daysuntilnetdue?: number;
  /** For standard terms, enter the percentage discount if the invoice is paid early. */
  discountpercent?: string;
  /** For date driven terms, enter the percentage discount if the invoice is paid early. */
  discountpercentdatedriven?: string;
  /** For date driven terms, enter the number of days before the due date that the invoice can be postponed until the next month's due date.

For example, if invoices are due on the 30th of each month and you enter 5 in this field, then invoices issued between the 25th and 30th are due for payment by the 30th of the following month.

For another example, Day of Month Net Due = 15 and Due Next Month if Within Days = 30

Date range within 30 days:

5/16-6/14 move to 7/15

6/15-7/15 move to 8/15

8/16-9/14 move to 10/15

9/15-10/15 move to 11/15

10/16-11/14 move to 12/15

11/15-12/15 move to 1/5 */
  duenextmonthifwithindays?: number;
  /**  */
  externalid?: string;
  /** Check this box to remove all references to this record from your account.

You can reactivate the record at any time. */
  isinactive?: boolean;
  /** Enter the name for this record. This name appears in lists that include this record. */
  name: string;
  /** Check this box to make this term or message show by default on sales transactions you create.

Note: Terms set on customer records override terms marked as preferred. */
  preferred?: boolean;
}





/** 
 * Term Sublists Definition.
 * Record's Internal Id: term. 
 * Supports Custom Fields: true 
 */
export interface termSublists {
  
}





