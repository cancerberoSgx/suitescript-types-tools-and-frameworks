// This file is auto generated, do not edit it. 




/** 
 * Customer Fields Definition.
 * Record's Internal Id: customer. 
 * Supports Custom Fields: true 
 */
export interface customerFields {
/** Select the role you want to assign this customer.

An administrator can create new Customer Center roles at <_TABNAME=EDIT_ROLE_> > <_TASKCATEGORY=EDIT_ROLE_> > Manage Roles. */
  accessrole?: string;
  /** If you assign accounts to your customers, enter an account number for this customer here. */
  accountnumber?: string;
  /** FedEx requires that all packages containing alcohol are declared with the intended recipient type on the shipping note. This preference sets the default type for this customer. */
  alcoholrecipienttype?: string;
  /** Enter an alternate email address for this customer. If you use the Capture Email Replies, email sent with the alternate email address are automatically attached to the customer record. */
  altemail?: string;
  /** If applicable, enter an alternate phone number for this record. */
  altphone?: string;
  /** Use this list to select the web site where you want to assign access to a customer account. The customer will be restricted to using the customer account associated with the web site you select here. 
If you leave this field blank, then the customer has access to all your web sites. If you use OneWorld, customers have access to all web sites under the same subsidiary. */
  assignedwebsite?: string;
  /**  */
  autoname?: boolean;
  /** The customer's current accounts receivable balance due appears here.

If you use the Multiple Currencies feature, the amount in this field is shown in the customer's currency. */
  balance?: number;
  /** In order to send this customer payments online, check this box.

You must follow the setup procedure in the help topic "Setting Up Payees" before you can use this feature. */
  billpay?: boolean;
  /** Choose the prospect or customer's reason for buying from your company. You can create additional options for this field at <_TABNAME=LIST_CRMOTHERLIST_> > <_TASKCATEGORY=LIST_CRMOTHERLIST_> > CRM Lists. */
  buyingreason?: string;
  /** Select the time frame for the prospect or customer to purchase. You can create additional options for this field at <_TABNAME=LIST_CRMOTHERLIST_> > <_TASKCATEGORY=LIST_CRMOTHERLIST_> > CRM Lists. */
  buyingtimeframe?: string;
  /** Select the type of campaign used with this customer.

You can create campaign categories at <_TABNAME=EDIT_CAMPAIGNCATEGORY_> > <_TASKCATEGORY=EDIT_CAMPAIGNCATEGORY_> > Campaign Categories > New. */
  campaigncategory?: string;
  /** You can select the category that applies to this customer.

To add choices to this list, go to <_TABNAME=EDIT_ACCOUNTINGOTHERLIST_> > <_TASKCATEGORY=EDIT_ACCOUNTINGOTHERLIST_> > Accounting Lists > New > Customer Category.

For example, you might create categories of wholesale and retail. */
  category?: string;
  /** This field lists the pages this customer visited on his or her first visit to your Web site in chronological order. */
  clickstream?: string;
  /** Enter any other information you wish to track for this customer. */
  comments?: string;
  /** Enter the legal name of the customer.

If you use Auto-Generated Numbering, it is important that you enter the customer's name here, as the Customer Name field fills with the number or code for this record. */
  companyname?: string;
  /** The current accounts receivable balance due for the customer-subcustomer hierarchy this customer is a part of is shown here. */
  consolbalance?: number;
  /** This field shows the number of days overdue the consolidated overdue balance is. */
  consoldaysoverdue?: number;
  /** This field displays the total amount of unapplied deposits for the customer-subcustomer hierarchy this customer is a member of.

Deposits are recorded in the general ledger, as a liability, when the customer makes an advance payment before delivery of goods or services. A deposit balance exists until the goods or services are delivered. Deposits do not affect the customer's accounts receivable balance. */
  consoldepositbalance?: number;
  /** This field shows the consolidated total owed for open transactions for this customer-subcustomer hierarchy that are past their due date based on the invoice terms.

Note: For open transactions that do not have a due date, the transaction date is used as the due date to calculate this total. */
  consoloverduebalance?: number;
  /** This field displays the total amount of orders that have been entered but not yet billed for the customer-subcustomer hierarchy this customer is a part of.
 
If you have enabled the preference Customer Credit Limit Includes Orders, then this total is included in credit limit calculations.
 
Set this preference at <_TABNAME=ADMI_ACCTSETUP_> > <_TASKCATEGORY=ADMI_ACCTSETUP_> > Set Up Accounting > General. */
  consolunbilledorders?: number;
  /**  */
  contact?: string;
  /** Select one of the following:

    * Select Auto if you want this customer's credit status to follow the rules you set at Setup > Accounting > Accounting Preferences.
    * Select On to manually apply a credit hold on this customer.
    * Select Off to manually remove a credit hold on this customer. */
  creditholdoverride?: string;
  /** Enter a credit limit to define the maximum currency amount the customer is allowed to accrue in outstanding receivables.

When you meet or exceed this customer's limit while you are entering transactions, NetSuite can warn you or block the transaction. To set preferences for credit limit handling, an administrator must go to Setup > Accounting > Accounting Preferences > General > Customer Credit Limit Handling.

For more information, click Help at the top of the page and search for Customer Credit Limits and Holds. */
  creditlimit?: string;
  /** Select the currency this customer conducts business in. This customer's currency cannot be changed after transactions for this customer have been saved. All transactions involving this customer are conducted in this currency. Transaction figures are converted to your base currency in registers and on reports.

If you use the Multi-Currency Customers feature, select the customer's primary currency in this field. The primary currency is the default currency on transactions and is used to display balance information for this customer. You can enter other transaction currencies on the Currencies subtab under the Financial subtab.

Subcustomers are assigned the same currency as the parent customer.

You can change the currency (or primary) currency at any time as long as the customer is not also have a vendor, partner, or other name record. Also, if you change the currency, you must re-enter the customer credit limit in the new currency.

An administrator can create new currency records at <_TABNAME=EDIT_CURRENCY_> > <_TASKCATEGORY=EDIT_CURRENCY_> > Currencies. */
  currency: string;
  /**  */
  currencyprecision?: string;
  /** Select the form you want to use to enter this record.

Select Standard Customer Form to continue using this form, select a custom customer form you have already created, or select New to create a custom customer form. */
  customform: string;
  /** In this field, NetSuite automatically records the date you created this record. */
  datecreated?: Date;
  /** The number of days overdue this balance is overdue is shown here. */
  daysoverdue?: number;
  /** This field automatically shows the default billing address that you enter and add using the Address subtab. */
  defaultaddress?: string;
  /**  */
  defaultbankaccount?: string;
  /** Enter a number to designate the priority for this customer. */
  defaultorderpriority?: number;
  /** The Customer Deposit Balance field displays the total amount of unapplied deposits for the customer. Deposits are recorded in the general ledger, as a liability, when the customer makes an advance payment before delivery of goods or services. A deposit balance exists until the goods or services are delivered. Deposits do not affect the customer's accounts receivable balance.

If you use the Multiple Currencies feature, the amount in this field is shown in the customer's currency. */
  depositbalance?: number;
  /** Select the deferred revenue account to use by default to post revenue reclassification amounts generated by revenue reclassification journal entries for this customer. 

You can override this account on a sales order for this customer. */
  draccount?: string;
  /** Enter your customer's email address.

If you allow your customers to access their accounts online, this becomes part of their access codes. */
  email?: string;
  /** You can see your default email setting at Home > Set Preferences.

You can choose a different method to send forms here.

If you select HTML, be sure this customer has an email program that allows HTML viewing. */
  emailpreference?: string;
  /** Set a preferred transaction delivery method for this customer.
 
Choose to send transactions by regular mail, by email, by fax, or by a combination of the three. Then, when you select the customer on a transaction, their preferred delivery method is marked by default.
    * Email &#x2013; Check this box to check the To Be Emailed box by default on transactions when this customer is selected.
    * Print &#x2013; Check this box to check the To Be Printed box by default on transactions when this customer is selected.
    * Fax &#x2013; Check this box to check the To Be Faxed box by default on transactions when this customer is selected.

Once you enter these settings on the customer record, these boxes are checked by default for transactions created from the customer record or for transactions that are copied or converted.

Note: These settings override any customized settings on transaction forms you use.

There are also preferences to set default values for new customer records at Setup > Company > Preferences > Printing, Fax,& Email Preferences. On the Print subtab, Fax subtab, or Email subtab, check Customers Default to [Print/Fax/Email] Transactions.

You can also set these fields using the Mass Update function. Go to Lists > Mass Updates > Mass Updates > General and click Customer. */
  emailtransactions?: boolean;
  /** If you have a contract with this customer, enter the end date here.

If you are entering a job record, enter the projected end date of the job here. */
  enddate?: Date;
  /** Enter the name of this customer, prospect or lead the way it should appear in all lists and on the Pay to the Order of line of checks.

If you use Auto-Generated Numbering, the customer number or code fills here. Enter the customer name in the Company Name field. */
  entityid: string;
  /** Select the status of this customer or potential customer.

A lead status creates a lead record. A prospect status creates a prospect record. A customer status creates a customer record.

If this is a job record, select the status of this job's progress: Awarded, Not Awarded, Closed, In Progress or Pending.

You can create a new customer status at <_TABNAME=LIST_CUSTOMERSTATUS_> > <_TASKCATEGORY=LIST_CUSTOMERSTATUS_> > Customer Statuses > New. */
  entitystatus: string;
  /** Enter the estimated budget the prospect or customer has for this opportunity. */
  estimatedbudget?: number;
  /**  */
  externalid?: string;
  /** Enter a fax number for this record. You should enter the fax number exactly as it must be dialed. If a '1' is required to fax to this number, be sure to include it at the beginning of the number.

The number you enter here automatically appears in the To Be Faxed field of transactions when you select this customer.

To fax NetSuite forms, an administrator must first set up fax service at Setup > Set Up Printing, Fax and E-mail > Fax. */
  fax?: string;
  /** Set a preferred transaction delivery method for this customer.
 
Choose to send transactions by regular mail, by email, by fax, or by a combination of the three. Then, when you select the customer on a transaction, their preferred delivery method is marked by default.
    * Email &#x2013; Check this box to check the To Be Emailed box by default on transactions when this customer is selected.
    * Print &#x2013; Check this box to check the To Be Printed box by default on transactions when this customer is selected.
    * Fax &#x2013; Check this box to check the To Be Faxed box by default on transactions when this customer is selected.

Once you enter these settings on the customer record, these boxes are checked by default for transactions created from the customer record or for transactions that are copied or converted.

Note: These settings override any customized settings on transaction forms you use.

There are also preferences to set default values for new customer records at Setup > Company > Preferences > Printing, Fax,& Email Preferences. On the Print subtab, Fax subtab, or Email subtab, check Customers Default to [Print/Fax/Email] Transactions.

You can also set these fields using the Mass Update function. Go to Lists > Mass Updates > Mass Updates > General and click Customer. */
  faxtransactions?: boolean;
  /** Enter this customer's name. */
  firstname?: string;
  /** This is the date this customer first viewed your Web site. */
  firstvisit?: Date;
  /** Select the revenue account to use by default to post foreign currency adjustments that result when exchange rates are different for billing and revenue postings for this customer. You must select an income account.

You can override this account on a sales order for this customer. */
  fxaccount?: string;
  /** Check this box to assign your customer the Customer Center role.

This role gives a customer access to view estimates, orders, invoices and payments.

You must also assign a password and email address for the customer to log in. */
  giveaccess?: boolean;
  /** Email recipients can have one of four subscription statuses:

    * Confirmed Opt-In - When an email recipient has indicated that they want to receive your campaign and bulk merge email, they are assigned this subscription status. Only a recipient can set his or her subscription status to Confirmed Opt-In.
    * Soft Opt-In - Recipients with this status can receive opt-in messages that enable them to confirm whether or not they want to receive your email campaigns as well as bulk email.
      You can set a recipient&#x2019;s status to Soft Opt-In manually or through a mass update.
    * Soft Opt-Out - Recipients with this status cannot receive campaign or bulk email messages but can receive opt-in messages.
      You can change this subscription status to Soft Opt-In manually or through a mass update.
    * Confirmed Opt-Out - Only the recipient can set their subscription status to Confirmed Opt-Out.
      Recipients with this status cannot receive email campaigns, bulk email, or opt-in messages. Recipients with this status can only opt in again through the Customer Center or by clicking the link in an email message they have received prior to opting out. */
  globalsubscriptionstatus?: string;
  /** Enter a home phone number for this person. */
  homephone?: string;
  /** Select an image from your file cabinet to attach to this record.

Select -New- to upload a new image from your hard drive to your file cabinet in a new window. */
  image?: string;
  /** Check this box if the customer's budget has been approved. */
  isbudgetapproved?: boolean;
  /** When you check this box, this customer will no longer appear on customer, prospect or lead list unless you check the Show Inactives box at the bottom of the list page.

This customer's name will also no longer appear in other dropdown lists containing customers, and the customer will no longer have access to NetSuite or be able to sign into your Web store. */
  isinactive?: boolean;
  /**  */
  isjob?: string;
  /** Choose the type of customer record you are creating by selecting Company or Individual in the Type field.

This selection determines which fields and subtabs are used on this record. */
  isperson?: string;
  /** If this customer was referred to your Web site by a search engine on the first visit, this field lists the keywords the customer used with the search engine. */
  keywords?: string;
  /** Select this customer's preferred language.

This determines the language used on printed transaction forms.

In order to provide translated item names and descriptions, an administrator must select this language at <_TABNAME=ADMI_GENERAL_> > <_TASKCATEGORY=ADMI_GENERAL_> > > Languages. */
  language?: string;
  /**  */
  lastmodifieddate?: Date;
  /** Optionally enter a last name here. */
  lastname?: string;
  /** This field displays the last page this customer viewed on his or her most recent visit to your Web site. */
  lastpagevisited?: string;
  /** This is the date this customer most recently visited your Web site. */
  lastvisit?: Date;
  /** Select how this customer was referred to you.

If you do not use the Marketing Automation feature, you can create new leads sources at <_TABNAME=EDIT_CRMOTHERLIST_> > <_TASKCATEGORY=EDIT_CRMOTHERLIST_> > CRM Lists > New > Lead Source.

If you have enabled the Marketing Automation feature, this field fills with the names of your campaigns, and you can not create new lead sources at <_TABNAME=EDIT_CRMOTHERLIST_> > <_TASKCATEGORY=EDIT_CRMOTHERLIST_> > CRM Lists. Instead, create new campaigns at <_TABNAME=EDIT_CAMPAIGN_> > Campaigns > New. */
  leadsource?: string;
  /**  */
  middlename?: string;
  /** Enter a mobile or cell phone number for this person. */
  mobilephone?: string;
  /**  */
  monthlyclosing: string;
  /** Select the customer&#x2019;s negative number format preference, if any. The format controls whether the negative number is preceded by the minus sign (-) or is enclosed in parentheses ( ). */
  negativenumberformat?: string;
  /** Select the customer&#x2019;s positive number format preference, if any. The format controls the thousands separator and decimals display. */
  numberformat?: string;
  /** Enter the opening balance of this customer's account. */
  openingbalance?: number;
  /** Select the account this opening balance is applied to. */
  openingbalanceaccount?: string;
  /** Enter the date of the balance entered in the Opening Balance field. */
  openingbalancedate?: Date;
  /** The Overdue field shows the total amount owed for open transactions that are past their due date based on the invoice terms.

Note: For open transactions that do not have a due date, the transaction date is used as the due date to calculate this total.

If you use the Multiple Currencies feature, the amount in this field is shown in the customer's currency. */
  overduebalance?: number;
  /** If this customer is subcustomer of another customer or a smaller entity of another customer, select the larger parent customer.

If you select a parent customer in this field, this record shows indented under the parent customer in the Customers list. */
  parent?: string;
  /** Identify a partner responsible for referring this customer or potential customer to you.

When you select a partner on a customer record, that customer can only use promotion codes associated with that partner. */
  partner?: string;
  /** Assign a password to allow this customer access to NetSuite.

As of 2014.1, for a user assigned a Customer Center role, the password must be at least six characters long.

The Password Criteria panel will help you ensure you create a password that meets the password policy in effect in your account. You will need to tell the user the password you assign. It is not provided in the email notification.

For more information, see the help topic NetSuite Password Requirements. */
  password?: string;
  /** Reenter the password in this field to verify that you entered the same password twice. */
  password2?: string;
  /** Enter a phone number for your customer. It will appear on the Customer List report. */
  phone?: string;
  /** Enter the furigana character you want to use to sort this record. */
  phoneticname?: string;
  /** Select the preferred credit card processor for this credit card.

You can enter new credit card processors at <_TABNAME=ADMI_CREDCARD_> > <_TASKCATEGORY=ADMI_CREDCARD_> > Set Up Credit Card Processing.

When this customer chooses this credit card in an order placed in your Web site, this credit card processor is used to process the order. */
  prefccprocessor?: string;
  /** If you want to sell to a customer at a specific price level, select one from the list.

You can add multiple price levels to an item by clicking the Lists tab. Under the Accounting heading, click Items, and click Edit next to each item you want to set multiple prices for. */
  pricelevel?: string;
  /** What you enter here prints on the Pay to the Order of line of a check instead of what you entered in the Customer field. */
  printoncheckas?: string;
  /** Set a preferred transaction delivery method for this customer.
 
Choose to send transactions by regular mail, by email, by fax, or by a combination of the three. Then, when you select the customer on a transaction, their preferred delivery method is marked by default.
    * Email &#x2013; Check this box to check the To Be Emailed box by default on transactions when this customer is selected.
    * Print &#x2013; Check this box to check the To Be Printed box by default on transactions when this customer is selected.
    * Fax &#x2013; Check this box to check the To Be Faxed box by default on transactions when this customer is selected.

Once you enter these settings on the customer record, these boxes are checked by default for transactions created from the customer record or for transactions that are copied or converted.

Note: These settings override any customized settings on transaction forms you use.

There are also preferences to set default values for new customer records at Setup > Company > Preferences > Printing, Fax,& Email Preferences. On the Print subtab, Fax subtab, or Email subtab, check Customers Default to [Print/Fax/Email] Transactions.

You can also set these fields using the Mass Update function. Go to Lists > Mass Updates > Mass Updates > General and click Customer. */
  printtransactions?: boolean;
  /** Choose the A/R account to use by default on receivables transactions for this customer.

If you select Use System Preference, the account selected at <_TABNAME=ADMI_ACCTSETUP_> > <_TASKCATEGORY=ADMI_ACCTSETUP_> > Accounting Preferences > Items/Transactions in the Default Receivables Account field is used as this customer's default. */
  receivablesaccount?: string;
  /** This field diplays the URL for the site the customer used to first access your Web site.

For example, if this customer clicked a link to your site from the results of a search engine, the URL is provided for the results of that search. */
  referrer?: string;
  /** Enter how many days before the end date you want to be reminded that this customer's contract or job service needs renewing.

You can set the reminder to appear in the Reminders portlet on your Home, Lists and Transactions pages by clicking Customize Page on each page. On the Layout tab, click the Right Side Content subtab, and check the Reminders box. Then click the Reminders subtab, and check the Customers to Review box. Click Save. */
  reminderdays?: string;
  /** Indicates that this entity is an intercompany customer. Select the subsidiary this customer represents as a buyer in intercompany transactions. */
  representingsubsidiary?: string;
  /** If you do not collect sales tax from this customer because your merchandise will be resold, enter your customer's valid tax license number here. Make sure that you also set the Not Taxable tax code for this customer. */
  resalenumber?: string;
  /** Select a sales team to associate with this record.

You To create a sales team, go to <_TABNAME=EDIT_CRMGROUP_> > <_TASKCATEGORY=EDIT_CRMGROUP_> > New > Select Sales Team Members. */
  salesgroup?: string;
  /** Choose how close the prospect or customer is to purchasing. You can create additional options for this field at <_TABNAME=LIST_CRMOTHERLIST_> > <_TASKCATEGORY=LIST_CRMOTHERLIST_> > CRM Lists. */
  salesreadiness?: string;
  /** This field shows the sales rep assigned to this record.

You can choose Reassign Using Territories if you want to reassign this record according to current sales territories.

If you use the Team Selling feature, the primary sales rep from the team assigned to this customer is shown here along with the primary rep's contribution percentage for this customer.

If the Sales Rep box is checked on your employee record, you will default as the sales rep on new customer records you create, even if you are not logged in with a sales role. */
  salesrep?: string;
  /** Enter the title of this person, such as Mr., Mrs., Ms., Dr., Rev., etc. */
  salutation?: string;
  /** Check this box to notify this customer automatically by email when you give them access to NetSuite.

If you do not check this box, you need to tell this person how to log in.

For security reasons, the email notification does not disclose the password. You need to contact your customer with this information. */
  sendemail?: boolean;
  /** Check this box if you only want to ship orders to this customer when they are completely fulfilled. */
  shipcomplete?: boolean;
  /**  */
  shippingcarrier?: string;
  /** Select a default shipping method for this customer.

This shipping method will be selected by default on transactions when you select this customer's name.

You can create new shipping items at <_TABNAME=EDIT_SHIPITEM_> > <_TASKCATEGORY=EDIT_SHIPITEM_> > Shipping Items > New. */
  shippingitem?: string;
  /** This field is read-only. It shows the web site where the customer registered for a customer account. */
  sourcewebsite?: string;
  /**  */
  stage?: string;
  /** Enter the date this person or company became a customer, lead or prospect.

If this person or company has a contract with you, enter the start date of the contract.

If you enter an estimate or an opportunity for this customer, this field will be updated with the date of that transaction. */
  startdate?: Date;
  /**  */
  strength?: string;
  /** Select the subsidiary to associate with this entity or job. You cannot enter transactions for this entity or job unless a subsidiary is assigned.
 
If you select this entity on a transaction, the transaction is associated with this subsidiary. The entity is able to access only information associated with this subsidiary.
 
Note: Once a transaction has posted for the entity or job, you are not able to change the subsidiary selected on the entity or job record. */
  subsidiary: string;
  /** Check this box if you want to update this customer's transactions to reflect the changes you make to the partner team. */
  syncpartnerteams?: boolean;
  /**  */
  syncsalesteams?: boolean;
  /** Place a check mark in this box if this customer pays sales tax. Clear this box if this customer is not taxable. Note that if there is a value entered in the Tax Item field, the Tax IItem value applies, even if the Taxable box is clear. NetSuite determines that a customer is not taxable only if the Taxable box is clear and the Tax Item field is empty.

To have customers default to taxable, go to Setup > Accounting > Setup Tasks > Set Up Taxes, check the Customers Default to Taxable box, and click Save. */
  taxable?: boolean;
  /**  */
  taxexempt?: boolean;
  /**  */
  taxfractionunit?: string;
  /** Select the standard tax code associated with this customer. A tax code is a tax that you, as a vendor, collect from your customers at one certain rate and pay to one tax agency. You can change this for any individual sale.

You can create new tax codes at <_TABNAME=EDIT_TAXITEM_> > <_TASKCATEGORY=EDIT_TAXITEM_> > Tax Codes > New. */
  taxitem?: string;
  /**  */
  taxrounding?: string;
  /** Select the standard account terms for this customer's invoices. You can always change terms for any individual sale, however.

To add choices to this list, go to <_TABNAME=EDIT_ACCOUNTINGOTHERLIST_> > <_TASKCATEGORY=EDIT_ACCOUNTINGOTHERLIST_> > Accounting Lists > New > Term. */
  terms?: string;
  /** Select the sales territory this customer or potential customer belongs in.

To set up sales territories, create rules by going to <_TABNAME=LIST_CUSTOMERFIELDRULE_> > <_TASKCATEGORY=LIST_CUSTOMERFIELDRULE_> > New, and then group rules together by going to <_TABNAME=LIST_SALESTERRITORY_> > <_TASKCATEGORY=LIST_SALESTERRITORY_> > New. */
  territory?: string;
  /** Enter this customer&#x2019;s FedEx&#xae; or UPS&#xae; account number in the 3rd Party Billing Account Number field.

This account number is used if you select Consignee Billing on item fulfillments using UPS or select Bill Recipient on item fulfillments using FedEx. */
  thirdpartyacct?: string;
  /**  */
  thirdpartycarrier?: string;
  /** Select the country associated with the customer&#x2019;s UPS or FedEx account number. */
  thirdpartycountry?: string;
  /** Enter the zip code associated with the customer&#x2019;s UPS or FedEx account number. */
  thirdpartyzipcode?: string;
  /** Enter the job title for this person's position at his or her company. */
  title?: string;
  /** This field displays the total amount of orders that have been entered but not yet billed.

If you have enabled the preference Customer Credit Limit Includes Orders, then this total is included in credit limit calculations.

Set this preference at <_TABNAME=ADMI_ACCTSETUP_> > <_TASKCATEGORY=ADMI_ACCTSETUP_> > Set Up Accounting > General.

If you use the Multiple Currencies feature, the amount in this field is shown in the customer's currency. */
  unbilledorders?: number;
  /**  */
  unsubscribe?: string;
  /** Enter the URL associated with this customer. */
  url?: string;
  /** Enter this customer's tax registration number. */
  vatregnumber?: string;
  /** This field displays the total number of visits this customer has made to your Web site.

A new visit is counted after the customer leaves your site and returns. */
  visits?: number;
  /** This field is set to Yes if this lead, prospect, or customer record was created as a result of registering through your Web site. */
  weblead?: string;
}





/** 
 * Customer Sublists Definition.
 * Record's Internal Id: customer. 
 * Supports Custom Fields: true 
 */
export interface customerSublists {
  
  /** addressbook: Address */
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
    /** dropdownstate -   */
    dropdownstate: string;
    /** id - ID  */
    id: number;
    /** internalid -   */
    internalid: number;
    /** isresidential - Residential Address  */
    isresidential: boolean;
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

  /** contactroles: Contacts */
  contactroles: {
    /** contact - Contact  */
    contact: string;
    /** email - Email  */
    email: string;
    /** giveaccess - Access  */
    giveaccess: boolean;
    /** passwordconfirm - Confirm Password  */
    passwordconfirm: string;
    /** role - Role  */
    role: string;
    /** sendemail - Notify  */
    sendemail: boolean;
    /** strength - Password Strength  */
    strength: string;
  }

  /** creditcards: Credit Cards */
  creditcards: {
    /** cardstate - Card State  */
    cardstate: string;
    /** ccdefault - Default Credit Card  */
    ccdefault: boolean;
    /** ccexpiredate - Expiration Date  */
    ccexpiredate: string;
    /** ccmemo - Memo  */
    ccmemo: string;
    /** ccname - Cardholder Name  */
    ccname: string;
    /** ccnumber - Credit Card Number  */
    ccnumber?: string;
    /** customercode - Customer Code  */
    customercode: string;
    /** debitcardissueno - Issue No.  */
    debitcardissueno: string;
    /** internalid - ID  */
    internalid: number;
    /** paymentmethod - Credit Card Type  */
    paymentmethod?: string;
    /** statefrom - State From  */
    statefrom: Date;
    /** validfrom - Valid From / Start Date (MM/YYYY)  */
    validfrom: string;
  }

  /** currency: Currencies */
  currency: {
    /** balance - Balance  */
    balance: number;
    /** consolbalance - Consolidated  */
    consolbalance: number;
    /** consoldepositbalance - Consolidated  */
    consoldepositbalance: number;
    /** consoloverduebalance - Consolidated  */
    consoloverduebalance: number;
    /** consolunbilledorders - Consolidated  */
    consolunbilledorders: number;
    /** currency - Currency  */
    currency?: string;
    /** currencyformatsample - Format Sample  */
    currencyformatsample: string;
    /** depositbalance - Deposit Balance  */
    depositbalance: number;
    /** displaysymbol - Symbol  */
    displaysymbol: string;
    /** overduebalance - Overdue Balance  */
    overduebalance: number;
    /** overridecurrencyformat - Override Currency Format  */
    overridecurrencyformat: boolean;
    /** symbolplacement - Symbol Placement  */
    symbolplacement: string;
    /** unbilledorders - Unbilled Orders  */
    unbilledorders: number;
  }

  /** download: Downloads */
  download: {
    /** expiration - Expiration Date  */
    expiration: Date;
    /** file - Attach File  */
    file: string;
    /** licensecode - License Code  */
    licensecode: string;
    /** remainingdownloads - Remaining Downloads  */
    remainingdownloads: number;
  }

  /** grouppricing: Group Pricing */
  grouppricing: {
    /** group - Pricing Group  */
    group?: string;
    /** level - Price Level  */
    level?: string;
  }

  /** itempricing: Item Pricing */
  itempricing: {
    /** currency - Currency  */
    currency: string;
    /** item - Item  */
    item?: string;
    /** level - Price Level  */
    level?: string;
    /** price - Unit Price  */
    price: number;
  }

  /** partners: Partners */
  partners: {
    /** contribution - Contribution %  */
    contribution?: number;
    /** customer -   */
    customer: string;
    /** id -   */
    id: string;
    /** isprimary - Primary  */
    isprimary: boolean;
    /** partner - Partner  */
    partner?: string;
    /** partnerrole - Partner Role  */
    partnerrole: string;
  }

  /** salesteam: Sales Team */
  salesteam: {
    /** contribution - Contribution %  */
    contribution?: number;
    /** customer -   */
    customer: string;
    /** employee - Employee  */
    employee?: string;
    /** id -   */
    id: string;
    /** isprimary - Primary  */
    isprimary: boolean;
    /** issalesrep -   */
    issalesrep: string;
    /** salesrole - Sales Role  */
    salesrole?: string;
  }

  /** subscriptions: Subscriptions */
  subscriptions: {
    /** lastmodifieddate - Last Modified  */
    lastmodifieddate: Date;
    /** subscribed - Subscribed  */
    subscribed: boolean;
    /** subscription - Subscription  */
    subscription: string;
  }
}





