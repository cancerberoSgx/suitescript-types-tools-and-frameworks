// This file is auto generated, do not edit it. 




/** 
 * Customer Refund Fields Definition.
 * Record's Internal Id: customerrefund. 
 * Supports Custom Fields: true 
 */
export interface customerrefundFields {
/** Select the bank account you are using for this refund. Click &#x2014;New&#x2014; to set up a new account.

For details on accounts, go to <_TABNAME=LIST_ACCOUNT_> > <_TASKCATEGORY=LIST_ACCOUNT_> > Chart of Accounts. */
  account: string;
  /** NetSuite inserts the billing address of the customer from the record at <_TABNAME=LIST_CUSTJOB_> > <_TASKCATEGORY=LIST_CUSTJOB_> > Customers. You can change the address for just this transaction by typing up to 5 rows of information in this field. */
  address?: string;
  /**  */
  allowemptycards?: boolean;
  /** Select the Accounts Receivable account that will be affected by this transaction.</p

Click &#x2014;New &#x2014; to set up a new account. */
  aracct?: string;
  /** This field shows the current customer balance. */
  balance?: number;
  /** Place a check mark in this box only after the credit card refund has been validated outside NetSuite, such as by a card-swipe terminal.

If you have a NetSuite merchant account, then this field is automatically filled as soon as the refund is approved. */
  ccapproved?: boolean;
  /** Enter the credit card's expiration date using this format: MM/YYYY. */
  ccexpiredate?: string;
  /**  */
  cchold?: string;
  /**  */
  ccholdetails?: string;
  /** If you use the Send Purchase Card Data feature, this box is marked when NetSuite determines that the credit card entered is a purchase card. If the Process as Purchase Card box is also checked, this credit card payment will be processed by NetSuite as a purchase card.

Contact your NetSuite account representative for more information. */
  ccispurchasecardbin?: boolean;
  /** NetSuite enters the cardholder name from the default credit card on the customer's record.

If the field contains no value or the wrong value, check the customer's record at <_TABNAME=LIST_CUSTJOB_> > <_TASKCATEGORY=LIST_CUSTJOB_> > Customers. On the Financial subtab of the customer's record, verify that the Cardholder Name field contains the correct information. */
  ccname?: string;
  /** If refund is by credit card, enter the card number here. Enter numbers only, without spaces.

NetSuite is a secure site. If a NetSuite merchant gives a customer access to view payment information, only that merchant and that customer will be able to see this number. */
  ccnumber?: string;
  /**  */
  ccprocessoraccount?: string;
  /** NetSuite enters the street address from the customer's billing address.

If the field contains no value or the wrong value, check the customer's record at <_TABNAME=LIST_CUSTJOB_> > <_TASKCATEGORY=LIST_CUSTJOB_> > Customers. On the Address subtab of the customer's record, make sure the default billing address contains the correct street address. */
  ccstreet?: string;
  /** NetSuite enters the zip or postal code from the customer's billing address.

If the field contains no value or the wrong value, check the customer's record at <_TABNAME=LIST_CUSTJOB_> > <_TASKCATEGORY=LIST_CUSTJOB_> > Customers. On the Address subtab of the customer's record, make sure the default billing address contains the correct zip or postal code. */
  cczipcode?: string;
  /** If refund is by credit card, place a check mark in this box to process the credit to the customer's charge account over the Internet. You must have previously set up a NetSuite merchant account for this to work. */
  chargeit?: boolean;
  /**  */
  class?: string;
  /**  */
  consolidatebalance?: number;
  /**  */
  createddate?: Date;
  /** Select a credit card stored on the customer record to use as the method to refund the payment for this sale.

Click New to enter a new credit card. */
  creditcard?: string;
  /** Select the credit card processor you want to use for this transaction.

You can set up credit card processors at <_TABNAME=ADMI_CREDCARD_> > <_TASKCATEGORY=ADMI_CREDCARD_> > Set Up Credit Card Processing. */
  creditcardprocessor?: string;
  /** If you do not use the Multi-Currency Customers feature, the currency of the customer you are creating this transaction for is shown here.

If you use the Multi-Currency Customers feature, select the currency of the credits or deposits you want to refund. The currency selected in the Currency field filters the list of credits and deposits on the Apply subtab. */
  currency: string;
  /** This customer's currency is shown in this field.

All currency amounts on this transaction are shown in this currency. */
  currencyname?: string;
  /**  */
  currencysymbol?: string;
  /** Select the customer for this refund. If you are using projects, select the appropriate project rather than the master customer account.

Click &#x2014;New&#x2014; to set up a new customer.

Go to <_TABNAME=LIST_CUSTJOB_> > <_TASKCATEGORY=LIST_CUSTJOB_> > Customers for details about existing customers and projects. */
  customer: string;
  /**  */
  customercode?: string;
  /**  */
  customform: string;
  /** If the card is a debit card, enter the card's issue number. */
  debitcardissueno?: string;
  /** Choose a department to associate with this transaction.

Click New to enter a new department.

Go to Lists > Departments for details about existing departments. */
  department?: string;
  /**  */
  entitynexus?: string;
  /** The currency's exchange rate is shown in this field.

You can edit the exchange rate for this transaction only, or you can update the currency record with the exchange rate you enter here. */
  exchangerate: number;
  /**  */
  externalid?: string;
  /**  */
  inputpnrefnum?: string;
  /**  */
  isbasecurrency?: boolean;
  /**  */
  ispurchasecard?: string;
  /**  */
  lastmodifieddate?: Date;
  /** Choose a location to associate with this transaction.

Select New to enter a new location record.

Go to Lists > Locations for details about existing location records. */
  location?: string;
  /** Enter an optional memo to describe this refund.

For example, you may want to include the original transaction number on the refund.

This memo appears on issued checks and register reports. */
  memo?: string;
  /**  */
  nexus?: string;
  /**  */
  overridehold?: boolean;
  /**  */
  overrideholdchecked?: boolean;
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
  /** Select the method to refund the payment for this sale.

To add additional choices to this list, go to <_TABNAME=LIST_ACCOUNTINGOTHERLIST_> > <_TASKCATEGORY=LIST_ACCOUNTINGOTHERLIST_> > Accounting Lists > New > Payment Method. */
  paymentmethod: string;
  /** If you accept credit card payments, the Verisign authentication code appears here once the transaction is approved. */
  pnrefnum?: string;
  /** Select the period you want to post this refund to.

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
  /** Check this box to queue this refund to be printed. */
  tobeprinted?: boolean;
  /** NetSuite updates the refund amount as you check or clear the Apply check boxes at the bottom of the form. */
  total?: number;
  /** NetSuite inserts today's date as the date of this refund. You can type or pick another date. */
  trandate: Date;
  /** If you are issuing a check, NetSuite supplies the next consecutive number. */
  tranid?: string;
  /** The number automatically generated for the transaction by NetSuite. */
  transactionnumber?: string;
  /** Enter the date when this card first became valid. */
  validfrom?: string;
}





/** 
 * Customer Refund Sublists Definition.
 * Record's Internal Id: customerrefund. 
 * Supports Custom Fields: true 
 */
export interface customerrefundSublists {
  
  /** accountingbookdetail: Accounting Books */
  accountingbookdetail: {
    /** accountingbook - Secondary Book  */
    accountingbook: string;
    /** exchangerate - Exchange Rate  */
    exchangerate?: number;
  }

  /** apply: Credits */
  apply: {
    /** amount - Payment  */
    amount: number;
    /** apply - Apply  */
    apply: boolean;
    /** applydate - Date  */
    applydate: Date;
    /** createdfrom -   */
    createdfrom: string;
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





