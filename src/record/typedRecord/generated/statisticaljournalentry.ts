// This file is auto generated, do not edit it. 




/** 
 * Statistical Journal Entry Fields Definition.
 * Record's Internal Id: statisticaljournalentry. 
 * Supports Custom Fields: true 
 */
export interface statisticaljournalentryFields {
/** Check this box to indicate that this journal entry is approved.

If you check this box, this journal entry will post immediately.

If you do not check this box, this journal entry must be approved before it posts. */
  approved?: boolean;
  /**  */
  createddate?: Date;
  /** Select the custom journal entry record, if required. */
  customform: string;
  /**  */
  externalid?: string;
  /** If you wish, enter a memo to describe this journal entry. It will appear on this transaction detail as well as reports such as a 2-line account register. */
  memo?: string;
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
  /** NetSuite inserts today's date as the date of this journal entry. You can enter or select another date. */
  trandate: Date;
  /** NetSuite increases the largest journal entry number by one. If you wish, you can type another number.

The next journal entry number will revert to the standard pattern.

You can enter a maximum of 45 characters in this field. */
  tranid?: string;
  /** This field displays the unit type to associate with this statistical journal entry. */
  unitstype?: string;
}





/** 
 * Statistical Journal Entry Sublists Definition.
 * Record's Internal Id: statisticaljournalentry. 
 * Supports Custom Fields: true 
 */
export interface statisticaljournalentrySublists {
  
  /** line: Lines */
  line: {
    /** account - Account  */
    account?: string;
    /** class - Class  */
    class: string;
    /** debit - Amount  */
    debit?: number;
    /** department - Department  */
    department: string;
    /** entity - Name  */
    entity: string;
    /** line -   */
    line: number;
    /** lineunit - Units  */
    lineunit?: string;
    /** location - Location  */
    location: string;
    /** memo - Memo  */
    memo: string;
    /** previewdebit - Amount (Actual)  */
    previewdebit: string;
    /** schedulenum - Schedule No.  */
    schedulenum: string;
  }
}





