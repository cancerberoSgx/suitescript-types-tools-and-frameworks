// This file is auto generated, do not edit it. 




/** 
 * Vendor Fields Definition.
 * Record's Internal Id: vendor. 
 * Supports Custom Fields: true 
 */
export interface vendorFields {
/** If your vendors assign account numbers to you, enter one here.

This number will later appear in these places:
    * In the Vendor # field on purchase orders
    * In the Memo field on checks */
  accountnumber?: string;
  /**  */
  altemail?: string;
  /** Enter an optional alternate phone number for this record.

Phone numbers can be entered in the following formats:999-999-9999, 1-999-999-9999, (999) 999-9999, 1(999) 999-9999 or 999-999-9999 ext 9999 . */
  altphone?: string;
  /**  */
  autoname?: boolean;
  /** The vendor's current accounts payable balance due appears here. */
  balance?: number;
  /**  */
  balanceprimary?: number;
  /** Enter the 15-digit registration number that identifies this vendor as a client of the Canada Customs and Revenue Agency (CCRA). */
  bcn?: string;
  /** Check this box in order to send this vendor payments online.

Before you can use this feature, you must set up Online Bill Pay at <_TABNAME=ADMI_XML_PAYTRUST_SETUP_> > <_TASKCATEGORY=ADMI_XML_PAYTRUST_SETUP_> > Online Bill Pay. */
  billpay?: boolean;
  /** You can select the category that applies to this vendor.

To add choices to this list, go to <_TABNAME=LIST_ACCOUNTINGOTHERLIST_> > <_TASKCATEGORY=LIST_ACCOUNTINGOTHERLIST_> > Accounting Lists > New > Vendor Category.

You must select a Tax agency for sales tax agencies, payroll tax agencies and payroll benefits providers. */
  category?: string;
  /** Enter any other information you wish to track for this vendor. */
  comments?: string;
  /** In the Company name field, enter the supplier's legal name.

If you use Auto-Generated Numbering, you should enter the vendor name here to ensure that it appears along with the code in lists. */
  companyname?: string;
  /**  */
  contact?: string;
  /** Enter an optional credit limit for your purchases from this vendor.

If you have a NetSuite OneWorld account, enter the global credit limit for this vendor and any assigned subsidiary. This value can exceed the sum of the vendor and subsidiary credit limits.

This credit limit sets a maximum currency amount that should be spent using credit without making a payment. The value displays in the vendor&#x2019;s primary currency.

The default is no value, or no credit limit.

You can place the vendor on hold by entering 0 (zero.) Any new purchase order or vendor bill transaction displays a warning message. You cannot enter a negative value.

NetSuite validates the transaction amounts on purchase orders and vendor bills against the global credit limit specified in the Credit Limit field. NetSuite does not include individual subsidiary credit limits in the global credit limit validation. */
  creditlimit?: string;
  /** Select the currency that this vendor uses.

If you use the Multi-Currency Vendors feature, select this vendor's primary currency. You can enter other transaction currencies on the Currencies subtab below.

To view existing currencies or add currencies to this list, go to <_TABNAME=LIST_CURRENCY_> > <_TASKCATEGORY=LIST_CURRENCY_> > Currencies. */
  currency: string;
  /** Standard Vendor Form is selected here by default. Do not select another form if you want to continue using this form.

If you have already created a custom vendor form and want to use it, select that form here.

To create custom vendor forms, go to <_TABNAME=LIST_CUSTENTRYFORM_> > <_TASKCATEGORY=LIST_CUSTENTRYFORM_> > Entry Forms, and click Customize next to Standard Vendor Form. */
  customform: string;
  /** The date this record was created displays here. */
  datecreated?: Date;
  /** This field automatically shows the default billing address that you enter and add using the Address subtab. */
  defaultaddress?: string;
  /**  */
  defaultbankaccount?: string;
  /** Enter the e-mail address of your vendor. If you allow your vendors online access, this becomes part of their access code. */
  email?: string;
  /** Select the format for email that is sent to this person or company.

Select Default to use the preference set at Home > Set Preferences. */
  emailpreference?: string;
  /** Set a preferred transaction delivery method for this vendor.
 
Choose to send transactions by regular mail, by email, by fax, or by a combination of the three. Then, when you select the vendor on a transaction, their preferred delivery method is marked by default.
    * Email &#x2013; Check this box to check the To Be Emailed box by default on transactions when this vendor is selected.
    * Print &#x2013; Check this box to check the To Be Printed box by default on transactions when this vendor is selected.
    * Fax &#x2013; Check this box to check the To Be Faxed box by default on transactions when this vendor is selected.

Once you enter these settings on the vendor record, these boxes are checked by default for transactions created from the vendor record or for transactions that are copied or converted.

Note: These settings override any customized settings on transaction forms you use.

There are also preferences to set default values for new vendor records at <_TABNAME=ADMI_PRINTING_> > <_TASKCATEGORY=ADMI_PRINTING_> > Printing, Fax and Email Preferences. On the Print subtab, Fax subtab, or Email subtab, check Vendors Default to [Print/Fax/Email] Transactions.

You can also set these fields using the Mass Update function. Go to <_TABNAME=LIST_BULKOP_> > <_TASKCATEGORY=LIST_BULKOP_> > Mass Updates > General and click Vendor. */
  emailtransactions?: boolean;
  /** In the Supplier ID field, enter your supplier's name as it should appear in all lists.

If you use Auto-Generated Numbering, this field fills with the vendor number or code. */
  entityid: string;
  /** Select the standard expense account for goods and services you purchase from this vendor. This account appears on any transaction involving this vendor. You can always change this account for any individual order or bill.

Select New to set up a new account.

For details on accounts, go to <_TABNAME=LIST_ACCOUNT_> > <_TASKCATEGORY=LIST_ACCOUNT_> > Chart of Accounts. */
  expenseaccount?: string;
  /**  */
  externalid?: string;
  /** Enter a fax number for this record. You should enter the fax number exactly as it must be dialed. If a '1' is required to fax to this number, be sure to include it at the beginning of the number.

The number you enter here automatically appears in the To Be Faxed field of transactions when you select this customer.

To fax NetSuite forms, an administrator must first set up fax service at <_TABNAME=ADMI_PRINTING_> > <_TASKCATEGORY=ADMI_PRINTING_> > Printing, Fax and Email Preferences. */
  fax?: string;
  /** Set a preferred transaction delivery method for this vendor.
 
Choose to send transactions by regular mail, by email, by fax, or by a combination of the three. Then, when you select the vendor on a transaction, their preferred delivery method is marked by default.
    * Email &#x2013; Check this box to check the To Be Emailed box by default on transactions when this vendor is selected.
    * Print &#x2013; Check this box to check the To Be Printed box by default on transactions when this vendor is selected.
    * Fax &#x2013; Check this box to check the To Be Faxed box by default on transactions when this vendor is selected.

Once you enter these settings on the vendor record, these boxes are checked by default for transactions created from the vendor record or for transactions that are copied or converted.

Note: These settings override any customized settings on transaction forms you use.

There are also preferences to set default values for new vendor records at <_TABNAME=ADMI_PRINTING_> > <_TASKCATEGORY=ADMI_PRINTING_> > Printing, Fax and Email Preferences. On the Print subtab, Fax subtab, or Email subtab, check Vendors Default to [Print/Fax/Email] Transactions.

You can also set these fields using the Mass Update function. Go to <_TABNAME=LIST_BULKOP_> > <_TASKCATEGORY=LIST_BULKOP_> > Mass Updates > General and click Vendor. */
  faxtransactions?: boolean;
  /** Optionally enter a first name here. */
  firstname?: string;
  /** Check this box to give your vendor access to NetSuite. Then, assign a role to customize the level of access. You can assign multiple roles.

To let your vendor view prior transactions and purchase orders, select the Vendor Center role.

You must also assign a password and email address for the vendor to log in. */
  giveaccess?: boolean;
  /** Email recipients can have one of four subscription statuses:

    * Confirmed Opt-In - When an email recipient has indicated that they want to receive your campaign messages, they are assigned this subscription status. Only a recipient can set his or her subscription status to Confirmed Opt-In.
    * Soft Opt-In - Recipients with this status can receive opt-in messages that enable them to confirm whether or not they want to receive your email campaigns as well as email marketing campaigns.
      You can set a recipient&#x2019;s status to Soft Opt-In manually or through a mass update.
    * Soft Opt-Out - Recipients with this status cannot receive campaign email messages but can receive opt-in messages.
      You can change this subscription status to Soft Opt-In manually or through a mass update.
    * Confirmed Opt-Out - Only the recipient can set their subscription status to Confirmed Opt-Out.
      Recipients with this status cannot receive email campaigns or opt-in messages. Recipients with this status can only opt in again through the Vendor Center or by clicking the link in a campaign message they have received prior to opting out. */
  globalsubscriptionstatus?: string;
  /**  */
  homephone?: string;
  /** Select an image from your file cabinet to attach to this record.

Select -New- to upload a new image from your hard drive to your file cabinet in a new window. */
  image?: string;
  /** Choose the standardized three-letter trade term to be used on transactions related to this vendor.

These terms are international commercial procurement practices that communicate the tasks, costs, and risks associated with the transportation and delivery of goods. Incoterms define where the customer takes ownership of the product and are typically used for international orders, such as when an item goes through customs or crosses a border. */
  incoterm?: string;
  /** If this vendor requires you to issue an annual 1099 income statement form, place a check mark in this box.

Vendors you pay $600 or more a year for goods and/or services are 1099 eligible.

Only vendors that use the U.S. dollar are 1099 eligible. */
  is1099eligible?: boolean;
  /** When you check this box, this vendor will no longer appear on a list unless you check the Show Inactives box at the bottom of the list page. */
  isinactive?: boolean;
  /** Check this box to enable this vendor to be chosen as a resource on tasks and jobs. As a job resource, a vendor can be assigned to complete a task or to manage a project.
 
Clear this box if you do not want this vendor assigned as a job resource.


Note: If you use NetSuite OneWorld, you cannot share a vendor with multiple subsidiaries and define the vendor as a resource on tasks and jobs. */
  isjobresourcevend?: boolean;
  /** Next to Type, select to identify the supplier as a Company or Individual. */
  isperson?: string;
  /** Enter the cost of labor for this vendor in order to be able to calculate profitability on jobs. */
  laborcost?: number;
  /**  */
  lastmodifieddate?: Date;
  /** Optionally enter a last name here. */
  lastname?: string;
  /** Enter the legal name for this vendor for financial purposes.

If you entered a name in the Company Name field, that name appears here. */
  legalname?: string;
  /**  */
  middlename?: string;
  /**  */
  mobilephone?: string;
  /** Enter the opening balance of your account with this vendor. */
  openingbalance?: number;
  /** Select the account this opening balance is applied to. */
  openingbalanceaccount?: string;
  /** Enter the date of the balance entered in the Opening Balance field */
  openingbalancedate?: Date;
  /**  */
  otherrelationships?: string;
  /**  */
  parent?: number;
  /** Choose the default payable account for this vendor record. */
  payablesaccount?: string;
  /** Enter a phone number for your vendor. It will appear on the Vendor List report.

This field is required for the Online Bill Pay feature. */
  phone?: string;
  /** Enter the furigana character you want to use to sort this record. */
  phoneticname?: string;
  /** What you enter here prints on the Pay to the Order of line of a check instead of what you entered in the Vendor field. */
  printoncheckas?: string;
  /** Set a preferred transaction delivery method for this vendor.
 
Choose to send transactions by regular mail, by email, by fax, or by a combination of the three. Then, when you select the vendor on a transaction, their preferred delivery method is marked by default.
    * Email &#x2013; Check this box to check the To Be Emailed box by default on transactions when this vendor is selected.
    * Print &#x2013; Check this box to check the To Be Printed box by default on transactions when this vendor is selected.
    * Fax &#x2013; Check this box to check the To Be Faxed box by default on transactions when this vendor is selected.

Once you enter these settings on the vendor record, these boxes are checked by default for transactions created from the vendor record or for transactions that are copied or converted.

Note: These settings override any customized settings on transaction forms you use.

There are also preferences to set default values for new vendor records at <_TABNAME=ADMI_PRINTING_> > <_TASKCATEGORY=ADMI_PRINTING_> > Printing, Fax and Email Preferences. On the Print subtab, Fax subtab, or Email subtab, check Vendors Default to [Print/Fax/Email] Transactions.

You can also set these fields using the Mass Update function. Go to <_TABNAME=LIST_BULKOP_> > <_TASKCATEGORY=LIST_BULKOP_> > Mass Updates > General and click Vendor. */
  printtransactions?: boolean;
  /** Enter the tolerance limit for the discrepancy between the amount on the vendor bill and purchase order. */
  purchaseorderamount?: string;
  /** Enter the tolerance limit for the discrepancy between the quantity on the vendor bill and purchase order */
  purchaseorderquantity?: string;
  /** Enter the difference limit for the discrepancy between the quantity on the vendor bill and purchase order. */
  purchaseorderquantitydiff?: string;
  /** Enter the tolerance limit for the discrepancy between the amount on the vendor bill and item receipt. */
  receiptamount?: string;
  /** Enter the tolerance limit for the discrepancy between the quantity on the vendor bill and item receipt. */
  receiptquantity?: string;
  /** Enter the difference limit for the discrepancy between the quantity on the vendor bill and item receipt. */
  receiptquantitydiff?: string;
  /** Indicates that this entity is an intercompany vendor. Select the subsidiary this vendor represents as the seller in intercompany transactions. */
  representingsubsidiary?: string;
  /** Check this box to require this user to change their password on their next login to NetSuite.

When the user next logs in, they see the Change Password page and cannot access other NetSuite pages until a new password is created and saved.

Requiring this action protects your account from unauthorized access using generic passwords and prepares your account for an audit.

Note that the Require Password Change on Next Login box never displays as checked. When you check this box and save the record, an internal flag is set. When the password change occurs, the flag is cleared. If you later check the box again and resave the record, the internal flag is reset to require another password change. */
  requirepwdchange?: boolean;
  /**  */
  salutation?: string;
  /** Check this box if you want to send email notifying the vendor that you have given limited access to your NetSuite account.

If you do not check this box, you need to tell the vendor when you have given access and how to log in.

For security reasons, the email notification does not disclose the password. You will need to contact the vendor with this information. */
  sendemail?: boolean;
  /**  */
  strength?: string;
  /** Select the subsidiary to associate with this vendor. If you use NetSuite OneWorld, select the primary subsidiary to assign to this vendor.

You cannot enter transactions for this vendor unless a subsidiary, or primary subsidiary is assigned.

The default primary currency for the vendor is the base currency of the primary subsidiary.

If you select this vendor on a transaction, the transaction is associated with this subsidiary. The vendor is able to access only information associated with this subsidiary.
 
Note: After a transaction has posted for the vendor, you are not able to change the subsidiary selected on the vendor record. If you have NetSuite OneWorld, after you save the vendor record, you cannot change the primary subsidiary. */
  subsidiary: string;
  /**  */
  subsidiaryedition?: string;
  /**  */
  taxfractionunit?: string;
  /** Enter your vendor's tax ID number (SSN for an individual). This is necessary if you are required to issue a 1099 form. */
  taxidnum?: string;
  /** Select the default tax code you want applied to purchase orders and bills for this vendor.

You can change the tax code on individual transactions. */
  taxitem?: string;
  /**  */
  taxrounding?: string;
  /**  */
  tegatamaturity?: number;
  /** Select the standard discount terms for this vendor's invoices. You can always change terms for an individual order or bill, however.

To add choices to this list, go to <_TABNAME=LIST_ACCOUNTINGOTHERLIST_> > <_TASKCATEGORY=LIST_ACCOUNTINGOTHERLIST_> > Accounting Lists > New > Term. */
  terms?: string;
  /**  */
  title?: string;
  /** This field displays the total amount of orders that have been entered but not yet billed.
 
If you have enabled the preference Vendor Credit Limit Includes Orders, then this total is included in credit limit calculations.
 
Set this preference at <TABNAME=ADMI_ACCTSETUP_> > <_TASKCATEGORY=ADMI_ACCTSETUP_> > Accounting Preferences > General. */
  unbilledorders?: number;
  /**  */
  unbilledordersprimary?: number;
  /**  */
  unsubscribe?: string;
  /** Enter a URL for this vendor's Web address.

When you return to this record for viewing, this address is a link. */
  url?: string;
  /** Enter this vendor's VAT tax registration number. */
  vatregnumber?: string;
  /** Select the work calendar for this vendor. */
  workcalendar: string;
}





/** 
 * Vendor Sublists Definition.
 * Record's Internal Id: vendor. 
 * Supports Custom Fields: true 
 */
export interface vendorSublists {
  
  /** addressbook: Address Book */
  addressbook: {
    /** addressbookaddress - Edit  */
    addressbookaddress: string;
    /** addressid -   */
    addressid: string;
    /** addrtext - Address  */
    addrtext: string;
    /** attention - Attention  */
    attention: string;
    /** city - City  */
    city: string;
    /** country - Country  */
    country: string;
    /** defaultbilling - Default Billing  */
    defaultbilling: boolean;
    /** defaultshipping - Default Shipping  */
    defaultshipping: boolean;
    /** displaystate - State/Province  */
    displaystate: string;
    /** id - ID  */
    id: number;
    /** internalid -   */
    internalid: number;
    /** label - Label  */
    label: string;
    /** override - Override  */
    override: boolean;
    /** phone - Phone  */
    phone: string;
    /** state - State/Province  */
    state: string;
    /** zip - Zip  */
    zip: string;
  }

  /** currency: Currencies */
  currency: {
    /** balance - Balance  */
    balance: number;
    /** currency - Currency  */
    currency?: string;
    /** unbilledorders - Unbilled Orders  */
    unbilledorders: number;
  }
}





