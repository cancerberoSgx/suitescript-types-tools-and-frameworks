// This file is auto generated, do not edit it. 




/** 
 * Customer Payment Fields Definition.
 * Record's Internal Id: customerpayment. 
 * Supports Custom Fields: true 
 */
export interface customerpaymentFields {
/** Click the button to the left and then select the account where you want to deposit the amount received.

For example, an approved credit card payment might go directly into your checking account, but an unapproved payment would go into the non-posting account specifically for unapproved payments. */
  account?: string;
  /**  */
  allowemptycards?: boolean;
  /** NetSuite keeps track of the total applied payments here.

You can apply payments by placing or clearing check marks in the Apply column next to the appropriate invoices at the bottom of the page.

If you want, you can change dollar amounts in the Payment column next to these invoices. When you do this, the Applied field automatically updates. */
  applied?: number;
  /** Select the Accounts Receivable account that will be affected by this transaction.</p

Click &#x2014;New &#x2014; to set up a new account. */
  aracct?: string;
  /** If you have a NetSuite merchant account, then this field autofills with the authorization code as soon as the charge is approved.

If you do not have a NetSuite merchant account, enter the authorization code you receive when the charge to the customer's credit card is validated outside of NetSuite, such as by a card-swipe terminal. */
  authcode?: string;
  /** Check this box to automatically apply payments to the oldest open receivable.

If you clear this box, the payment amount defaults to unapplied and you must later apply the payment amount to an open receivable.

Note: When you enter a customer payment and check the Auto Apply box, only the payment you enter on the transaction is applied. Other existing credits and deposits are not automatically applied against open receivables.

Once you check or uncheck the Auto Apply box on a payment and save it, the box retains the setting the next time you enter a payment. */
  autoapply?: boolean;
  /** NetSuite shows you the balance in this customer account. */
  balance?: number;
  /** Place a check mark in this box only after the credit card charge has been validated outside NetSuite, such as by a card-swipe terminal.

If you have a Internet Merchant Solutions (IMS) merchant account, then this field is automatically filled as soon as the charge is approved. */
  ccapproved?: boolean;
  /** This field shows the AVS result code that is returned from Verisign when a credit card transaction takes place.
The codes returned could be:

Y &#x96; The address information submitted did match.
N &#x96; The address information submitted did not match. */
  ccavsstreetmatch?: string;
  /** This field shows the AVS result code that is returned from Verisign when a credit card transaction takes place.
The codes returned could be:

Y &#x96; The address information submitted did match.
N &#x96; The address information submitted did not match. */
  ccavszipmatch?: string;
  /** Enter the credit card's expiration date using this format: MM/YYYY. */
  ccexpiredate?: string;
  /**  */
  cchold?: string;
  /**  */
  ccholdetails?: string;
  /**  */
  cciavsmatch?: string;
  /** This box is marked when NetSuite determines that the credit card entered is a purchase card. If you use the Send Purchase Card Data feature and the Process as Purchase Card box is also checked, this credit card payment will be processed by NetSuite as a purchase card.

Contact your NetSuite account representative for more information. */
  ccispurchasecardbin?: boolean;
  /** NetSuite enters the cardholder name from the default credit card on the customer's record.

If the field contains no value or the wrong value, check the customer's record at <_TABNAME=LIST_CUSTJOB_> > <_TASKCATEGORY=LIST_CUSTJOB_> > Customers. On the Financial subtab of the customer's record, verify that the Cardholder Name field contains the correct information. */
  ccname?: string;
  /** If payment is by credit card, enter the card number here. Enter numbers only, without spaces.

NetSuite is a secure site. If a NetSuite merchant gives a customer access to view payment information, only that merchant and that customer will be able to see this number. */
  ccnumber?: string;
  /**  */
  ccprocessoraccount?: string;
  /** Enter the three digit code found on the back of Visa, MasterCard, and Discover cards; for American Express cards, enter the four digit code found on the front of the card. */
  ccsecuritycode?: string;
  /** This field shows the Card Security Code (CSC) result code returned to VeriSign when a credit card transaction takes place.

The possible codes are:

   1. Y: The code submitted did match.
   2. N: The code submitted did not match.
   3. X: The credit card company does not support CSC, or no information was returned to VeriSign. */
  ccsecuritycodematch?: string;
  /** NetSuite enters the street address from the customer's billing address.

If the field contains no value or the wrong value, check the customer's record at <_TABNAME=LIST_CUSTJOB_> > <_TASKCATEGORY=LIST_CUSTJOB_> > Customers. On the Address subtab of the customer's record, make sure the default billing address contains the correct street address. */
  ccstreet?: string;
  /** NetSuite enters the zip or postal code from the customer's billing address.

If the field contains no value or the wrong value, check the customer's record at <_TABNAME=LIST_CUSTJOB_> > <_TASKCATEGORY=LIST_CUSTJOB_> > Customers. On the Address subtab of the customer's record, make sure the default billing address contains the correct zip or postal code. */
  cczipcode?: string;
  /** Check this box to make this payment by charging the credit card chosen in the Credit Card Select field. */
  chargeit?: boolean;
  /** If payment is by check, enter the check number here. It will appear on reports such as the 2-line Undeposited Funds register. */
  checknum?: string;
  /** Select a class to associate with this transaction.

To create a new class, select New.

For details on existing classes, go to <_TABNAME=LIST_CLASS_> > <_TASKCATEGORY=LIST_CLASS_> > Classes. */
  class?: string;
  /**  */
  consolidatebalance?: number;
  /**  */
  createddate?: Date;
  /** Select a credit card stored on the customer record to use as the payment method.

Click New to enter a new credit card. */
  creditcard?: string;
  /** Select the credit card processor you want to use for this transaction.

You can set up credit card processors at <_TABNAME=ADMI_CREDCARD_> > <_TASKCATEGORY=ADMI_CREDCARD_> > Set Up Credit Card Processing. */
  creditcardprocessor?: string;
  /** If you do not use the Multiple Currencies or Multi-Currency Customers features, the currency of the customer for whom you are creating this transaction is shown here.

If you use the Multiple Currencies or Multi-Currency Customers features, select the transaction currency in which you want to accept payment. This customer's primary currency is selected by default.

The currency you select filters the list of invoices to which you can apply payment, and lists of credits and deposits you can apply.

If you are accepting payment through a top-level customer, you can make payments toward any invoices entered for a customer in the hierarchy as long as the invoice currency is set as a transaction currency for that top-level parent.

Important: Beginning with Version 2014 Release 2, the capabilities associated with the Multiple Currencies, Multi-Currency Customers, and Multi-Currency Vendors features are combined in the Multiple Currencies feature. If you are new to NetSuite, already using all three features, or not using all three features, only the Multiple Currencies box will appear on the Company subtab of the Enable Features page. You can enable or disable this feature. When you enable this feature, you gain access to support for multiple currency customers and vendors. If you are already using Multiple Currencies and Multi-Currency Customers or Multi-Currency Vendors but not all three features, you will continue to see and maintain three boxes on the Company subtab. Regardless of the number of boxes visible in your account, the purpose associated with these three features remains the same. */
  currency: string;
  /** This customer's currency is shown in this field.

All currency amounts on this transaction are shown in this currency. */
  currencyname?: string;
  /**  */
  currencysymbol?: string;
  /** Select the customer. If you use projects, select the appropriate project rather than the master customer account.

 Go to <_TABNAME=LIST_CUSTJOB_> > <_TASKCATEGORY=LIST_CUSTJOB_> > Customers for details about existing customers and projects. */
  customer: string;
  /**  */
  customercode?: string;
  /**  */
  customform: string;
  /** If the card is a debit card, enter the card's issue number. */
  debitcardissueno?: string;
  /** Select a department to associate with this transaction.

To create a new department, select New.

For details on existing departments, go to <_TABNAME=LIST_DEPARTMENT_> > <_TASKCATEGORY=LIST_DEPARTMENT_> > Departments. */
  department?: string;
  /**  */
  entitynexus?: string;
  /** The currency's exchange rate is shown in this field.

You can edit the exchange rate for this transaction only, or you can update the currency record with the exchange rate you enter here. */
  exchangerate: number;
  /**  */
  externalid?: string;
  /** Check the Ignore AVS box to ignore the results of the Address Verification System (AVS) pre-authorization check.
 
If you choose to ignore the AVS check, when a customer's address information does not match the billing address of the credit card account, then Cybersource still processes the payment. */
  ignoreavs?: boolean;
  /**  */
  ignorecsc?: boolean;
  /**  */
  inputpnrefnum?: string;
  /**  */
  isbasecurrency?: boolean;
  /**  */
  ispurchasecard?: string;
  /** This box is checked if this payment was created for a recurring cash sale.

Payments marked as recurring can be successfully processed even if the credit card expires during the billing schedule.

You should not check this box for standalone payments. You should only check this box for transactions with recurring payments.

It can be used for cash sale sales orders with billing schedules or memorizes cash sale sales orders. */
  isrecurringpayment?: boolean;
  /**  */
  lastmodifieddate?: Date;
  /** Select a location to associate with this transaction.

To create a new location, select New.

For details on existing locations, go to <_TABNAME=LIST_LOCATION_> > <_TASKCATEGORY=LIST_LOCATION_> > Locations. */
  location?: string;
  /** If you wish, enter a memo to describe this payment. It will appear on reports such as the 2-line Accounts Receivable register that NetSuite merchants and their guest-customers can see (if given permission to log in and view their transaction history). */
  memo?: string;
  /**  */
  nexus?: string;
  /**  */
  overridehold?: boolean;
  /**  */
  overrideholdchecked?: boolean;
  /** Enter the currency amount of the payment here. */
  payment: string;
  /**  */
  paymenteventdate?: Date;
  /**  */
  paymenteventholdreason?: string;
  /**  */
  paymenteventpurchasedatasent?: string;
  /**  */
  paymenteventresult?: string;
  /**  */
  paymenteventtype?: string;
  /**  */
  paymenteventupdatedby?: string;
  /** Select the payment method for this payment.

To add additional choices to this list, go to <_TABNAME=LIST_ACCOUNTINGOTHERLIST_> > <_TASKCATEGORY=LIST_ACCOUNTINGOTHERLIST_> > Accounting Lists > New > Payment Method. */
  paymentmethod?: string;
  /** If your customer has unapproved credit card payments, NetSuite automatically fills in the sum amount of these payments here.

If you validate credit card payments outside of NetSuite, these payments will be pending until they are approved. Once payments are approved, check the Card Approved box. */
  pending?: number;
  /** If you accept credit card payments, the Verisign authentication code appears here once the payment is approved. */
  pnrefnum?: string;
  /** Select the period you want to post this payment to.

If a period is closed, you cannot post to that period. */
  postingperiod?: string;
  /**  */
  softdescriptor?: string;
  /**  */
  status?: string;
  /**  */
  statusRef?: string;
  /** This field shows the subsidiary associated with this transaction. */
  subsidiary?: string;
  /**  */
  threedstatuscode?: string;
  /**  */
  tobeemailed?: boolean;
  /** NetSuite adds the payment amount from above plus any credits you have chosen to apply and displays the total here. */
  total?: number;
  /** NetSuite inserts today's date for the posting date of this payment. You can enter or select another date.

What you enter here determines the date range in which this transaction appears on the Accounts Receivable Register. */
  trandate: Date;
  /** This is the document number automatically generated for the transaction by NetSuite. */
  tranid?: string;
  /** NetSuite shows the difference between amounts available to apply to payments and payments you have actually applied. To make this equal to 0.00, you can (1) change the Payment Amount above, (2) check the Apply Existing Credits check box above, or (3) change Payment amounts below. */
  unapplied?: number;
  /** If you are entering a payment that will be deposited to a bank account later, click Undep. Funds.

If you are entering a payment that has already been deposited, click Account and select the bank account. */
  undepfunds?: string;
  /** Enter the date when this card first became valid. */
  validfrom?: string;
}





/** 
 * Customer Payment Sublists Definition.
 * Record's Internal Id: customerpayment. 
 * Supports Custom Fields: true 
 */
export interface customerpaymentSublists {
  
  /** accountingbookdetail: Accounting Books */
  accountingbookdetail: {
    /** accountingbook - Secondary Book  */
    accountingbook: string;
    /** exchangerate - Exchange Rate  */
    exchangerate?: number;
  }

  /** apply: Invoices */
  apply: {
    /** amount - Payment  */
    amount: number;
    /** apply - Apply  */
    apply: boolean;
    /** applydate - Date  */
    applydate: Date;
    /** createdfrom -   */
    createdfrom: string;
    /** disc - Disc. Taken  */
    disc: string;
    /** discamt - Disc. Avail.  */
    discamt: number;
    /** discdate - Disc. Date  */
    discdate: Date;
    /** doc -   */
    doc: string;
    /** due - Amt. Due  */
    due: number;
    /** duedate -   */
    duedate: Date;
    /** internalid - Hidden  */
    internalid: string;
    /** job -   */
    job: number;
    /** line -   */
    line: number;
    /** refnum - Ref No.  */
    refnum: string;
    /** total - Orig. Amt.  */
    total: number;
    /** url -   */
    url: string;
  }

  /** credit: Credits */
  credit: {
    /** amount - Credit  */
    amount: number;
    /** apply - Apply  */
    apply: boolean;
    /** createdfrom -   */
    createdfrom: string;
    /** creditdate - Date  */
    creditdate: Date;
    /** doc -   */
    doc: string;
    /** due - Amount Remaining  */
    due: number;
    /** duedate -   */
    duedate: Date;
    /** internalid - Hidden  */
    internalid: string;
    /** line -   */
    line: number;
    /** refnum - Ref No.  */
    refnum: string;
    /** total - Orig. Amt.  */
    total: number;
    /** url -   */
    url: string;
  }

  /** deposit: Deposits */
  deposit: {
    /** amount - Payment  */
    amount: number;
    /** apply - Apply  */
    apply: boolean;
    /** currency -   */
    currency: string;
    /** depositdate - Date  */
    depositdate: Date;
    /** doc -   */
    doc: string;
    /** remaining - Amount Remaining  */
    remaining: number;
    /** total - Orig. Amt.  */
    total: number;
    /** url -   */
    url: string;
  }
}





