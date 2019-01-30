// This file is auto generated, do not edit it. 




/** 
 * Account Fields Definition.
 * Record's Internal Id: account. 
 * Supports Custom Fields: true 
 */
export interface accountFields {
/** Enter up to 31 characters for an account name that will appear on all reports.

If you want to use GL account numbers and do not see a Number field above the Name field, go to Setup > Accounting > Preferences > Accounting Preferences, and check the Use Account Numbers box. Save the preference, and return to this page. */
  acctname: string;
  /** Enter the number to identify this account.

The number can be alphanumeric. The maximum number of characters is 60. */
  acctnumber: string;
  /** Select a GAAP category for the type of account you are creating.

The account type you select here determines the default section for this account on your financial statement. */
  accttype: string;
  /**  */
  accttype2?: string;
  /** You can select a revenue or income account to track expenses and costs that are billable to customers. This field only appears for Account Types such as COGS and Expense. */
  billableexpensesacct?: string;
  /** Select the type of exchange rate that is used to translate foreign currency amounts for this account in the cash flow statement.

The Current rate type is based on the currency exchange rate that is effective at the end of the reported upon period.

The Average rate type is calculated from a weighted average of the exchange rates for transactions applied during the period to accounts with a general rate type of Average. This rate is the default.

The Historical rate type is calculated from a weighted average of the exchange rates for transactions applied during the period to accounts with a general rate type of Historical. */
  cashflowrate?: string;
  /** Select a 1099-MISC Category to have all cash-basis transactions for a vendor reported on the corresponding box of the 1099 form.

Amounts are not reported until they exceed the threshold for the category.

To view 1099-MISC categories and edit thresholds, go to Setup > Accounting > Accounting Lists, and select 1099-MISC Category in the Type field. */
  category1099misc?: string;
  /** Select a class to restrict use of this account to roles with permission to access it. If you select a class in this field, this account can be selected only by employees whose role permits access.

For example, if you select Class 1 in this field, use of this account is restricted to employees that have permission to access Class 1. This account does not appear in account dropdown lists on transactions for employees with a role that restricts access to Class 1. */
  class?: string;
  /** Select a currency for the funds in this account. */
  currency?: string;
  /** Select a deferred expense account to record deferred transactions for amortization and depreciation.
A deferral account is available only for account types that allow deferred transactions. */
  deferralacct?: string;
  /** Select a department to restrict use of this account to roles with permission to access it. If you select a department in this field, this account can be selected only by employees whose role permits access.

For example, if you select Department 1 in this field, use of this account is restricted to employees that have permission to access Department 1. This account does not appear in account dropdown lists on transactions for employees with a role that restricts access to Department 1. */
  department?: string;
  /** Enter a description for this account. */
  description?: string;
  /** Check this box to make this account an intercompany account. Intercompany accounts are used to record transactions between subsidiaries.

You can post both intercompany transactions and non-intercompany transactions to most intercompany accounts. Intercompany Accounts Receivable and Intercompany Accounts Payable, however, can be used only for recording amounts that are candidates for eliminations.

For details, see the help topic Intercompany Accounts. */
  eliminate?: boolean;
  /**  */
  externalid?: string;
  /** Select the type of exchange rate that is used to translate foreign currency amounts for this account in the income statement, balance sheet, and other general purposes.

The Current rate type is based on the currency exchange rate that is effective at the end of the reported upon period. This rate is the default for most balance sheet accounts.

The Average rate type is calculated from a weighted average of the exchange rates for transactions applied during the period to accounts with a general rate type of Average. This rate is the default for income statement accounts and is used build retained earnings.

The Historical rate type is calculated from a weighted average of the exchange rates for transactions applied during the period to accounts with a general rate type of Historical. This rate is used for equity accounts, or owner&#x2019;s investments, in the balance sheet. */
  generalrate?: string;
  /** Check the Include Children box to share the account with all the sub-subsidiaries associated with each subsidiary selected in the Subsidiary field. */
  includechildren?: boolean;
  /** If this will be an Other Current Asset account and you want the balance of this account included in the total balance of the Inventory KPI, select the Inventory box. */
  inventory?: boolean;
  /** Check this box to inactivate this account. Inactive accounts do not show in lists on transactions and records. */
  isinactive?: boolean;
  /** If the Use Legal Name in Account accounting preference is enabled at Setup > Accounting > Preferences > Accounting Preferences, the Legal Name field appears. You can enter up to 400 characters in this field including special characters such as colon and semi colon. You can also enter characters such as &#xc9;&#xe9;,&#xc7;&#xe7;, and 2 byte characters such as &#x4f1a;&#x8a08;&#x3001;&#x79d1;&#x76ee;.

This field is useful in countries where the legal name of an entity is required by law.

The Legal Name field can be added to financial reports where account is an available component. It is also available in advanced searches, SuiteScript, and ODBC. 

System notes maintains an audit trail specific to the activity on the Legal Name field. */
  legalname?: string;
  /** Select a location to restrict use of this account to roles with permission to access it. If you select a location in this field, this account can be selected only by employees whose role permits access.

For example, if you select Location 1 in this field, use of this account is restricted to employees that have permission to access Location 1. This account does not appear in account dropdown lists on transactions for employees with a role that restricts access to Location 1. */
  location?: string;
  /** Enter an opening balance for this account. */
  openingbalance?: string;
  /** Select the parent account if this account is a subaccount of another. */
  parent?: string;
  /**  */
  restricttoaccountingbook?: string;
  /** Check this box to select this account for open balance currency revaluation. */
  revalue?: boolean;
  /**  */
  subsidiary: string;
  /** Enter the date of the opening balance of this account. */
  trandate?: Date;
  /** This field displays the base unit assigned to the Unit Type. The default unit cannot be changed. */
  unit: string;
  /** This field displays the type of unit associated with this statistical account. */
  unitstype?: string;
}





/** 
 * Account Sublists Definition.
 * Record's Internal Id: account. 
 * Supports Custom Fields: true 
 */
export interface accountSublists {
  
  /** localizations: Localization */
  localizations: {
    /** accountingcontext - Accounting Context  */
    accountingcontext: string;
    /** acctname - Name  */
    acctname: string;
    /** acctnumber - Number  */
    acctnumber: string;
    /** legalname - Legal Name  */
    legalname: string;
    /** locale - Language  */
    locale: string;
  }
}





