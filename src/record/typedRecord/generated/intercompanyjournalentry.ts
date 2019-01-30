// This file is auto generated, do not edit it. 




/** 
 * Intercompany Journal Entry Fields Definition.
 * Record's Internal Id: intercompanyjournalentry. 
 * Supports Custom Fields: true 
 */
export interface intercompanyjournalentryFields {
/** Select an accounting book. You may select the primary book or any secondary accounting book to which you have access. */
  accountingbook?: string;
  /**  */
  approvalstatus?: string;
  /** Check this box to indicate that this journal entry is approved.

If you check this box, this journal entry will post immediately.

If you do not check this box, this journal entry must be approved before it posts. */
  approved?: boolean;
  /** If this entry is associated with a particular class, select it. Click &#x2014;New&#x2014; to set up a new class. */
  class?: string;
  /**  */
  createddate?: Date;
  /** This field shows the original transaction that is being voided.
 
Click the link to open the original transaction. */
  createdfrom?: string;
  /**  */
  credittotal?: number;
  /** This field is the currency used for all amounts in this journal entry.

For regular journal entries, currency defaults to the base currency of your company or root parent subsidiary, and can be changed to any other currency available in your account.

For intercompany journal entries in OneWorld, currency defaults to the base currency of the selected initiating subsidiary and can be changed to the currency of the To Subsidiary. */
  currency: string;
  /** Select the custom journal entry record, if required. */
  customform: string;
  /**  */
  debittotal?: number;
  /** If you like, select a department.

Click New to enter a new department. */
  department?: string;
  /**  */
  entitynexus?: string;
  /** This field displays the default exchange rate of the To Subsidiary's currency to the Subsidiary's currency.

You can edit the exchange rate for this transaction only, or you can update the currency exchange rates list. */
  exchangerate: number;
  /**  */
  expenseallocjournalcount?: string;
  /**  */
  externalid?: string;
  /**  */
  isbasecurrency?: boolean;
  /**  */
  lastmodifieddate?: Date;
  /** If you wish, enter a memo to describe this journal entry. It will appear on this transaction detail as well as reports such as a 2-line account register. */
  memo?: string;
  /**  */
  nextapprover?: string;
  /**  */
  nexus?: string;
  /**  */
  parentexpensealloc?: string;
  /** The current period is entered as the posting period for the journal entry. If this period is closed before the journal entry is approved, the posting period is the earliest open period. */
  postingperiod?: string;
  /** If this journal entry is intended to be reversed, enter the date for the reversing entry to be posted.

If Defer Entry is checked, this field is mandatory. */
  reversaldate?: Date;
  /** Check this box to make the reversal a memorized transaction that automatically occurs on the date entered in the required Reversal Date field.

Clear this box to make the reversal an immediately entered transaction with the date in the Reversal Date field. */
  reversaldefer?: boolean;
  /**  */
  status?: string;
  /** If you are entering a regular, book specific, or statistical journal entry:

In the Subsidiary field, select the subsidiary to associate with this journal entry.

Note: If the subsidiary you select is assigned to one or more shared vendor records, you can make journal entries for any of the vendors to which the selected subsidiary is assigned. To do this, on the Lines subtab, select the shared vendor from the Name field. 

Note: When a journal entry is associated with a subsidiary, the journal posts to that subsidiary and the schedule is restricted to be viewed only by entities associated with the subsidiary.

If you are entering an intercompany journal entry:

In the Subsidiary field, choose the subsidiary initiating the ledger transaction. The first line of this journal entry must post to the subsidiary you choose here.

Note: All lines of an intercompany journal entry must post to either the Subsidary or the To Subsidiary. No other subsidiaries can be associated with lines on this journal entry.

If you are entering an advanced intercompany journal entry:

In the Subsidiary field, choose the subsidiary initiating the ledger transaction. The first line of this journal entry must post to the subsidiary you choose here. The remaining lines can post to any subsidiary to which you are granted access. */
  subsidiary: string;
  /** Choose the second subsidiary for this ledger transaction.
Note: All lines of this journal entry must post to either the Subsidary or the To Subsidiary. No other subsidiaries can be associated with lines on this journal entry. */
  tosubsidiary: string;
  /** NetSuite inserts today's date as the date of this journal entry. You can enter or select another date. */
  trandate: Date;
  /** NetSuite increases the largest journal entry number by one. If you wish, you can type another number.

The next journal entry number will revert to the standard pattern.

You can enter a maximum of 45 characters in this field. */
  tranid?: string;
}





/** 
 * Intercompany Journal Entry Sublists Definition.
 * Record's Internal Id: intercompanyjournalentry. 
 * Supports Custom Fields: true 
 */
export interface intercompanyjournalentrySublists {
  
  /** accountingbookdetail: Accounting Books */
  accountingbookdetail: {
    /** accountingbook - Secondary Book  */
    accountingbook: string;
    /** exchangerate - Exchange Rate  */
    exchangerate?: number;
    /** subsidiary - Subsidiary  */
    subsidiary: string;
  }

  /** line: Lines */
  line: {
    /** account - Account  */
    account?: string;
    /** amortizationtype -   */
    amortizationtype: string;
    /** credit - Credit  */
    credit: number;
    /** debit - Debit  */
    debit: number;
    /** enddate - End Date  */
    enddate: Date;
    /** entity - Name  */
    entity: string;
    /** entitytype -   */
    entitytype: string;
    /** giftcertcode -   */
    giftcertcode: string;
    /** grossamt - Gross Amt  */
    grossamt: number;
    /** item -   */
    item: number;
    /** line -   */
    line: number;
    /** linesubsidiary - Subsidiary  */
    linesubsidiary?: string;
    /** location - Location  */
    location: string;
    /** memo - Memo  */
    memo: string;
    /** residual - Residual  */
    residual: string;
    /** revenuerecognitionrule - Revenue Recognition Rule  */
    revenuerecognitionrule: string;
    /** schedule - Schedule  */
    schedule: string;
    /** schedulenum - Schedule No.  */
    schedulenum: string;
    /** scheduletype -   */
    scheduletype: string;
    /** startdate - Start Date  */
    startdate: Date;
    /** tax1acct - Tax Account  */
    tax1acct: string;
    /** tax1amt - VAT Amt  */
    tax1amt: number;
    /** taxcode - VAT  */
    taxcode: string;
    /** taxrate1 - VAT Rate  */
    taxrate1: number;
  }
}





