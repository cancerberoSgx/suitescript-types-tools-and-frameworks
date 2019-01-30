// This file is auto generated, do not edit it. 




/** 
 * Customer Deposit Fields Definition.
 * Record's Internal Id: customerdeposit. 
 * Supports Custom Fields: true 
 */
export interface customerdepositFields {
/**  */
  account?: string;
  /**  */
  allowemptycards?: boolean;
  /** If you have a NetSuite merchant account, then this field autofills with the authorization code as soon as the charge is approved.

If you do not have a NetSuite merchant account, enter the authorization code you receive when the charge to the customer's credit card is validated outside of NetSuite, such as by a card-swipe terminal. */
  authcode?: string;
  /** Place a check mark in this box only if the credit card transaction has been performed outside NetSuite, such as by a card-swipe terminal.

If you have a NetSuite merchant account, then this field is automatically filled as soon as the transaction is approved. */
  ccapproved?: boolean;
  /** This field shows the Address Verification Services (AVS) result code returned to VeriSign when a credit card transaction takes place.

The possible codes are:

   1. Y &#x96; The address information submitted did match.
   2. N &#x96; The address information submitted did not match.
   3. X &#x96; The credit card company does not support AVS, or no information was returned to VeriSign. */
  ccavsstreetmatch?: string;
  /** This field shows the Address Verification Services (AVS) result code returned to VeriSign when a credit card transaction takes place.

The possible codes are:

   1. Y &#x96; The address information submitted did match.
   2. N &#x96; The address information submitted did not match.
   3. X &#x96; The credit card company does not support AVS, or no information was returned to VeriSign. */
  ccavszipmatch?: string;
  /** Enter the credit card's expiration date using this format: MM/YYYY. */
  ccexpiredate?: string;
  /**  */
  cchold?: string;
  /**  */
  ccholdetails?: string;
  /**  */
  cciavsmatch?: string;
  /** If you use the Send Purchase Card Data feature, this box is marked when NetSuite determines that the credit card entered is a purchase card. If the Process as Purchase Card box is also checked, this credit card payment will be processed by NetSuite as a purchase card.

Contact your NetSuite account representative for more information. */
  ccispurchasecardbin?: boolean;
  /** NetSuite enters the cardholder name from the default credit card on the customer's record.

If the field contains no value or the wrong value, check the customer's record at <_TABNAME=LIST_CUSTJOB_> > <_TASKCATEGORY=LIST_CUSTJOB_> > Customers. On the Financial subtab of the customer's record, verify that the Cardholder Name field contains the correct information. */
  ccname?: string;
  /** If the deposit is paid by credit card, enter the card number here. Enter numbers only, without spaces. */
  ccnumber?: string;
  /**  */
  ccprocessoraccount?: string;
  /** Enter the three-digit card security code on the back of the customer's credit card. */
  ccsecuritycode?: string;
  /** This field shows the Card Security Code (CSC) result code returned to VeriSign when a credit card transaction takes place.

The possible codes are:

   1. Y &#x96; The code submitted did match.
   2. N &#x96; The code submitted did not match.
   3. X &#x96; The credit card company does not support CSC, or no information was returned to VeriSign. */
  ccsecuritycodematch?: string;
  /** NetSuite enters the street address from the customer's billing address.

If the field contains no value or the wrong value, check the customer's record at <_TABNAME=LIST_CUSTJOB_> > <_TASKCATEGORY=LIST_CUSTJOB_> > Customers. On the Address subtab of the customer's record, make sure the default billing address contains the correct street address. */
  ccstreet?: string;
  /** NetSuite enters the zip or postal code from the customer's billing address.

If the field contains no value or the wrong value, check the customer's record at <_TABNAME=LIST_CUSTJOB_> > <_TASKCATEGORY=LIST_CUSTJOB_> > Customers. On the Address subtab of the customer's record, make sure the default billing address contains the correct zip or postal code. */
  cczipcode?: string;
  /** If payment is by credit card, place a check mark in this box to process the credit card charge over the Internet. The effect is the same as swiping a card through a terminal. Funds will move if the card is accepted. If rejected, you will be told why. You must have previously set up a NetSuite merchant account for this to work. */
  chargeit?: boolean;
  /** If your customer paid by check, enter the number here. */
  checknum?: string;
  /** Select a class to associate with this transaction.

To create a new class, select New.

For details on existing classes, go to <_TABNAME=LIST_CLASS_> > <_TASKCATEGORY=LIST_CLASS_> > Classes. */
  class?: string;
  /**  */
  createddate?: Date;
  /** Select a credit card stored on the customer record to use as the payment method for this deposit.

Click New to enter a new credit card. */
  creditcard?: string;
  /** Select the credit card processor you want to use for this transaction.

You can set up credit card processors at <_TABNAME=ADMI_CREDCARD_> > <_TASKCATEGORY=ADMI_CREDCARD_> > Set Up Credit Card Processing. */
  creditcardprocessor?: string;
  /** If you do not use the Multi-Currency Customers feature, the currency of the customer you are creating this transaction for is shown here.

If you use the Multi-Currency Customers feature, select the transaction currency you want to create this transaction in. This customer's primary currency is selected by default.

If you have already selected items on this transaction, selecting a new currency refreshes them to show the price in the new currency (except for items you entered custom prices for) and recalculates tax and gross profit. */
  currency: string;
  /** This customer's currency is shown in this field.

All currency amounts on this transaction are shown in this currency. */
  currencyname?: string;
  /**  */
  currencysymbol?: string;
  /** Select the customer. If you are using projects, select the appropriate project rather than the master customer account.

Click New to set up a new customer. Go to <_TABNAME=LIST_CUSTJOB_> > <_TASKCATEGORY=LIST_CUSTJOB_> > Customers for details about existing customers and projects. */
  customer: string;
  /**  */
  customercode?: string;
  /**  */
  customform: string;
  /** If the card is a debit card, enter the card's issue number. */
  debitcardissueno?: string;
  /** Select a department to associate with this deposit.

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
  /** This box is checked if this cash sale was generated from a sales order for a recurring payment.

Payments marked as recurring can be successfully processed even if the credit card expires during the billing schedule.

You should not check this box for standalone cash sales. You should only check this box for transactions with recurring payments. It can be used for cash sale sales orders with billing schedules or memorized cash sale sales order. </P */
  isrecurringpayment?: boolean;
  /**  */
  lastmodifieddate?: Date;
  /** Select a location to associate with this transaction.

To create a new location, select New.

For details on existing locations, go to <_TABNAME=LIST_LOCATION_> > <_TASKCATEGORY=LIST_LOCATION_> > Locations. */
  location?: string;
  /** Enter a Memo to identify this deposit transaction. */
  memo?: string;
  /**  */
  nexus?: string;
  /**  */
  overridehold?: boolean;
  /**  */
  overrideholdchecked?: boolean;
  /** Enter the curency amount of the deposit here. */
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
  /** Select the payment method for this deposit.

To add additional choices to this list, go to <_TABNAME=LIST_ACCOUNTINGOTHERLIST_> > <_TASKCATEGORY=LIST_ACCOUNTINGOTHERLIST_> > Accounting Lists > New > Payment Method. */
  paymentmethod?: string;
  /** If you accept credit card payments, the Verisign authentication code appears here once the payment is approved. */
  pnrefnum?: string;
  /** Select the period you want to post this deposit to.

If a period is closed, you cannot post to that period. */
  postingperiod?: string;
  /** This deposit is reserved for the sales order shown here. This deposit can only be applied to this order.

If this deposit amount exceeds the sales order amount, the excess is used to create a separate deposit that can be applied to any invoice. */
  salesorder?: string;
  /**  */
  softdescriptor?: string;
  /**  */
  status?: string;
  /**  */
  statusRef?: string;
  /**  */
  subsidiary?: string;
  /**  */
  threedstatuscode?: string;
  /**  */
  tobeemailed?: boolean;
  /** NetSuite inserts today's date for this deposit. You can enter or select another date.

What you enter here determines the date range in which this transaction appears on the Accounts Receivable Register.

Deposits are recorded in your general ledger as a liability until the goods or services are actually delivered and do not affect the customer's accounts receivable balance. */
  trandate: Date;
  /** The system generated deposit number. */
  tranid?: string;
  /** * If you receive payment by cash or check, click
      Undep. Funds.
      Once you deposit the money, you will need to go to <_TABNAME=EDIT_TRAN_DEPOSIT_> > <_TASKCATEGORY=EDIT_TRAN_DEPOSIT_> > Make Deposits.

    * If you receive payment by credit card, click Account
      and select the account to be credited. */
  undepfunds?: string;
  /** Enter the date when this card first became valid. */
  validfrom?: string;
}





/** 
 * Customer Deposit Sublists Definition.
 * Record's Internal Id: customerdeposit. 
 * Supports Custom Fields: true 
 */
export interface customerdepositSublists {
  
  /** accountingbookdetail: Accounting Books */
  accountingbookdetail: {
    /** accountingbook - Secondary Book  */
    accountingbook: string;
    /** exchangerate - Exchange Rate  */
    exchangerate?: number;
  }
}





