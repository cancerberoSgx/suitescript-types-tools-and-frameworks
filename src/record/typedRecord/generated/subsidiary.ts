// This file is auto generated, do not edit it. 




/** 
 * Subsidiary Fields Definition.
 * Record's Internal Id: subsidiary. 
 * Supports Custom Fields: true 
 */
export interface subsidiaryFields {
/**  */
  addrphone?: string;
  /**  */
  addrtext?: string;
  /**  */
  attention?: string;
  /**  */
  caseupdatetemplate?: string;
  /** Select the check layout you want to use when printing checks from this subsidiary. */
  checklayout: string;
  /**  */
  city?: string;
  /** Select the country in which this subsidiary is located. */
  country: string;
  /** Select the base currency used by this subsidiary. If you do not select a currency, the currency of the parent subsidiary is used. */
  currency: string;
  /** This field displays the edition of NetSuite used by this subsidiary. */
  edition?: string;
  /** Enter the return email address for this subsidiary. */
  email?: string;
  /**  */
  externalid?: string;
  /** Enter the fax number for this subsidiary. */
  fax?: string;
  /** Enter the appropriate tax identification number for this subsidiary:

    * United States &#x96; Employee Identification Number (EIN) or Federal Identification Number (FIN)
    * Australia &#x96; Australian Business Number
    * United Kingdom &#x96; VAT Registration Number
    * All other locations &#x96; VAT Registration Number

This number is required for all businesses with employees or acting as corporations or partnerships for tax purposes. If you think you need a tax identification number or do not know what your number is, contact the tax agency with jurisdiction over this subsidiary. */
  federalidnumber?: string;
  /** Select the calendar to roll up accounting periods. The fiscal calendar determines the start date for the accounting year. */
  fiscalcalendar: string;
  /**  */
  heading0?: string;
  /**  */
  heading1?: string;
  /**  */
  heading2?: string;
  /** If the Intercompany Time and Expense feature is enabled in your account, an Intercompany Account is automatically associated with a subsidiary after qualifying transactions are created in the system, such as a journal to eliminate Time and Expense.

This account is determined by the subsidiary&#x2019;s base currency. It is used to offset the transfer of charges from intercompany time and expenses from this subsidiary to others. */
  intercoaccount?: string;
  /** Check this box if this subsidiary record is to be used for only journal entries and transactions between subsidiaries.

When a loan, sale, or inventory transfer is made between subsidiaries, you use an elimination subsidiary to balance your consolidated books. By entering a journal entry against the elimination subsidiary in the same amount as the inter-company transaction, you have both a record of the transactions and a correct balance. */
  iselimination?: boolean;
  /** Check this box if this subsidiary is no longer active or used in your account.

Inactivated subsidiaries no longer show in the Subsidiary field on records and transactions unless they are currently attached to a record. Web sites of inactive subsidiaries are no longer available online. */
  isinactive?: boolean;
  /**  */
  languagelocale: string;
  /** Enter the legal name of this subsidiary as it should appear on tax forms. */
  legalname?: string;
  /** In the Subsidiary Logo (Forms) field, select the logo image to be used on all forms by this subsidiary.

Click New to upload a logo. Logos must be in JPG or GIF format.

Note: The logo selected in this field does not affect pages in your account. The logo displayed on pages is determined by the selection in the Subsidiary Logo (Pages) field.

To upload a logo, click Add New. Check the Available Without Login box. */
  logo?: string;
  /**  */
  mainaddress?: string;
  /**  */
  mossapplies?: boolean;
  /** Enter the name of this subsidiary the way it should appear on all forms except checks.

On checks, your company name is pre-printed with address and MICR information.

The name can be alphanumeric. The maximum number of characters is 83. */
  name: string;
  /**  */
  override?: boolean;
  /** Select the logo image to be displayed on all pages for this subsidiary.

Click New to upload a logo. Logos must be in JPG or GIF format.

Note: The logo selected in this field does not affect printed forms. The logo on printed forms is determined by the selection in the Subsidiary Logo (Forms) field.

To upload a logo, click Add New. Check the Available Without Login box. */
  pagelogo?: string;
  /** Select this direct parent of this subsidiary.

Selecting a parent subsidiary sets your company hierarchy, which is shown in the subsidiaries list. */
  parent: string;
  /** Enter the tolerance limit for the discrepancy between the amount on the vendor bill and purchase order. */
  purchaseorderamount?: string;
  /** Enter the tolerance limit for the discrepancy between the quantity on the vendor bill and purchase order. */
  purchaseorderquantity?: string;
  /** Enter the difference limit for the discrepancy between the quantity on the vendor bill and purchase order. */
  purchaseorderquantitydiff?: string;
  /** Enter the tolerance limit for the discrepancy between the amount on the vendor bill and item receipt. */
  receiptamount?: string;
  /** Enter the tolerance limit for the discrepancy between the quantity on the vendor bill and item receipt. */
  receiptquantity?: string;
  /** Enter the difference limit for the discrepancy between the quantity on the vendor bill and item receipt. */
  receiptquantitydiff?: string;
  /**  */
  returnaddr?: string;
  /**  */
  returnaddress?: string;
  /**  */
  returnaddress1?: string;
  /**  */
  returnaddress2?: string;
  /**  */
  returncity?: string;
  /**  */
  returncountry?: string;
  /**  */
  returnstate?: string;
  /**  */
  returnzip?: string;
  /**  */
  roundtime?: string;
  /**  */
  shipaddr?: string;
  /**  */
  shipcountry?: string;
  /**  */
  shippingaddress?: string;
  /** Check this box to display only the subsidiary name with your role in the upper right  corner of a page.  In addition, when logging in to an employee center, vendor center, or customer center, the dashboard displays only the logo of the subsidiary, not the company logo.

Clear this box to display the parent and the subsidiary name in your account. */
  showsubsidiaryname?: boolean;
  /** If you are a United States citizen and are self-emloyed with no employees, enter your Social Security Number (SSN). If you are not a US citizen but have a Taxpayer Identification Number (TIN) issued by the IRS for the purposes of operating a business with no employees, enter your TIN.

These numbers are used for tax purposes. If you think you need a SSN or TIN or do not know what your number is, contact the United States Internal Revenue Service (IRS), or go to www.irs.gov/businesses for more information. */
  ssnortin?: string;
  /** Select the state or province in which this subsidiary is located. */
  state?: string;
  /** Select the calendar to roll up the tax periods. The tax fiscal calendar determines the start date for the tax year. */
  taxfiscalcalendar: string;
  /** When you use auto-generated numbering with NetSuite OneWorld, you can make your document number sequences independent per subsidiary.

Enter up to 8 alphanumeric characters in this field to number transactions with a prefix to signify this subsidiary.

To set up auto-generated numbering, go to Setup >  Setup Tasks > Auto-Generated Numbers. On the Document Numbers subtab, check the Use Subsidiary box next to each transaction to which this prefix should be applied. */
  tranprefix?: string;
  /** Enter this subsidiary's Web Site address, or URL. */
  url?: string;
  /**  */
  zip?: string;
}





/** 
 * Subsidiary Sublists Definition.
 * Record's Internal Id: subsidiary. 
 * Supports Custom Fields: true 
 */
export interface subsidiarySublists {
  
  /** accountingbookdetail: Currencies */
  accountingbookdetail: {
    /** accountingbook - Secondary Book  */
    accountingbook: string;
    /** currency - Base Currency  */
    currency?: string;
  }

  /** taxregistration: Tax Registrations */
  taxregistration: {
    /** effectivefrom - Effective From  */
    effectivefrom?: Date;
    /** nexus - Nexus  */
    nexus?: string;
    /** nexuscountry - Country  */
    nexuscountry?: string;
    /** taxagency - Tax Agency  */
    taxagency: string;
    /** taxengine - Tax Engine  */
    taxengine: string;
    /** taxregistrationnumber - Tax Reg. Number  */
    taxregistrationnumber: string;
    /** validuntil - Valid Until  */
    validuntil: Date;
  }
}





