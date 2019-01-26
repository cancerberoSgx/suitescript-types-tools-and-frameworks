// This file is auto generated, do not edit it. 

import { TypedRecord, TypedRecordImpl } from '../typedRecord';
import { Record } from 'N/record';




/** 
 * Customer Fields Definition.
 * Record's Internal Id: customer. 
 * Supports Custom Fields: true 
 */
export interface customerFields {
/** Select the role you want to assign this customer.

An administrator can create new Customer Center roles at <_TABNAME=EDIT_ROLE_> > <_TASKCATEGORY=EDIT_ROLE_> > Manage Roles. */
  accessrole: string | undefined;
  /** If you assign accounts to your customers, enter an account number for this customer here. */
  accountnumber: string | undefined;
  /** FedEx requires that all packages containing alcohol are declared with the intended recipient type on the shipping note. This preference sets the default type for this customer. */
  alcoholrecipienttype: string | undefined;
  /** Enter an alternate email address for this customer. If you use the Capture Email Replies, email sent with the alternate email address are automatically attached to the customer record. */
  altemail: string | undefined;
  /** If applicable, enter an alternate phone number for this record. */
  altphone: string | undefined;
  /** Use this list to select the web site where you want to assign access to a customer account. The customer will be restricted to using the customer account associated with the web site you select here. 
If you leave this field blank, then the customer has access to all your web sites. If you use OneWorld, customers have access to all web sites under the same subsidiary. */
  assignedwebsite: string | undefined;
  /**  */
  autoname: boolean | undefined;
  /** The customer's current accounts receivable balance due appears here.

If you use the Multiple Currencies feature, the amount in this field is shown in the customer's currency. */
  balance: string | undefined;
  /** In order to send this customer payments online, check this box.

You must follow the setup procedure in the help topic "Setting Up Payees" before you can use this feature. */
  billpay: boolean | undefined;
  /** Choose the prospect or customer's reason for buying from your company. You can create additional options for this field at <_TABNAME=LIST_CRMOTHERLIST_> > <_TASKCATEGORY=LIST_CRMOTHERLIST_> > CRM Lists. */
  buyingreason: string | undefined;
  /** Select the time frame for the prospect or customer to purchase. You can create additional options for this field at <_TABNAME=LIST_CRMOTHERLIST_> > <_TASKCATEGORY=LIST_CRMOTHERLIST_> > CRM Lists. */
  buyingtimeframe: string | undefined;
  /** Select the type of campaign used with this customer.

You can create campaign categories at <_TABNAME=EDIT_CAMPAIGNCATEGORY_> > <_TASKCATEGORY=EDIT_CAMPAIGNCATEGORY_> > Campaign Categories > New. */
  campaigncategory: string | undefined;
  /** You can select the category that applies to this customer.

To add choices to this list, go to <_TABNAME=EDIT_ACCOUNTINGOTHERLIST_> > <_TASKCATEGORY=EDIT_ACCOUNTINGOTHERLIST_> > Accounting Lists > New > Customer Category.

For example, you might create categories of wholesale and retail. */
  category: string | undefined;
  /** This field lists the pages this customer visited on his or her first visit to your Web site in chronological order. */
  clickstream: string | undefined;
  /** Enter any other information you wish to track for this customer. */
  comments: string | undefined;
  /** Enter the legal name of the customer.

If you use Auto-Generated Numbering, it is important that you enter the customer's name here, as the Customer Name field fills with the number or code for this record. */
  companyname: string | undefined;
  /** The current accounts receivable balance due for the customer-subcustomer hierarchy this customer is a part of is shown here. */
  consolbalance: string | undefined;
  /** This field shows the number of days overdue the consolidated overdue balance is. */
  consoldaysoverdue: number | undefined;
  /** This field displays the total amount of unapplied deposits for the customer-subcustomer hierarchy this customer is a member of.

Deposits are recorded in the general ledger, as a liability, when the customer makes an advance payment before delivery of goods or services. A deposit balance exists until the goods or services are delivered. Deposits do not affect the customer's accounts receivable balance. */
  consoldepositbalance: string | undefined;
  /** This field shows the consolidated total owed for open transactions for this customer-subcustomer hierarchy that are past their due date based on the invoice terms.

Note: For open transactions that do not have a due date, the transaction date is used as the due date to calculate this total. */
  consoloverduebalance: string | undefined;
  /** This field displays the total amount of orders that have been entered but not yet billed for the customer-subcustomer hierarchy this customer is a part of.
 
If you have enabled the preference Customer Credit Limit Includes Orders, then this total is included in credit limit calculations.
 
Set this preference at <_TABNAME=ADMI_ACCTSETUP_> > <_TASKCATEGORY=ADMI_ACCTSETUP_> > Set Up Accounting > General. */
  consolunbilledorders: string | undefined;
  /**  */
  contact: string | undefined;
  /** Select one of the following:

    * Select Auto if you want this customer's credit status to follow the rules you set at Setup > Accounting > Accounting Preferences.
    * Select On to manually apply a credit hold on this customer.
    * Select Off to manually remove a credit hold on this customer. */
  creditholdoverride: string | undefined;
  /** Enter a credit limit to define the maximum currency amount the customer is allowed to accrue in outstanding receivables.

When you meet or exceed this customer's limit while you are entering transactions, NetSuite can warn you or block the transaction. To set preferences for credit limit handling, an administrator must go to Setup > Accounting > Accounting Preferences > General > Customer Credit Limit Handling.

For more information, click Help at the top of the page and search for Customer Credit Limits and Holds. */
  creditlimit: string | undefined;
  /** Select the currency this customer conducts business in. This customer's currency cannot be changed after transactions for this customer have been saved. All transactions involving this customer are conducted in this currency. Transaction figures are converted to your base currency in registers and on reports.

If you use the Multi-Currency Customers feature, select the customer's primary currency in this field. The primary currency is the default currency on transactions and is used to display balance information for this customer. You can enter other transaction currencies on the Currencies subtab under the Financial subtab.

Subcustomers are assigned the same currency as the parent customer.

You can change the currency (or primary) currency at any time as long as the customer is not also have a vendor, partner, or other name record. Also, if you change the currency, you must re-enter the customer credit limit in the new currency.

An administrator can create new currency records at <_TABNAME=EDIT_CURRENCY_> > <_TASKCATEGORY=EDIT_CURRENCY_> > Currencies. */
  currency: string;
  /**  */
  currencyprecision: string | undefined;
  /** Select the form you want to use to enter this record.

Select Standard Customer Form to continue using this form, select a custom customer form you have already created, or select New to create a custom customer form. */
  customform: string;
  /** In this field, NetSuite automatically records the date you created this record. */
  datecreated: string | undefined;
  /** The number of days overdue this balance is overdue is shown here. */
  daysoverdue: number | undefined;
  /** This field automatically shows the default billing address that you enter and add using the Address subtab. */
  defaultaddress: string | undefined;
  /**  */
  defaultbankaccount: string | undefined;
  /** Enter a number to designate the priority for this customer. */
  defaultorderpriority: number | undefined;
  /** The Customer Deposit Balance field displays the total amount of unapplied deposits for the customer. Deposits are recorded in the general ledger, as a liability, when the customer makes an advance payment before delivery of goods or services. A deposit balance exists until the goods or services are delivered. Deposits do not affect the customer's accounts receivable balance.

If you use the Multiple Currencies feature, the amount in this field is shown in the customer's currency. */
  depositbalance: string | undefined;
  /** Select the deferred revenue account to use by default to post revenue reclassification amounts generated by revenue reclassification journal entries for this customer. 

You can override this account on a sales order for this customer. */
  draccount: string | undefined;
  /** Enter your customer's email address.

If you allow your customers to access their accounts online, this becomes part of their access codes. */
  email: string | undefined;
  /** You can see your default email setting at Home > Set Preferences.

You can choose a different method to send forms here.

If you select HTML, be sure this customer has an email program that allows HTML viewing. */
  emailpreference: string | undefined;
  /** Set a preferred transaction delivery method for this customer.
 
Choose to send transactions by regular mail, by email, by fax, or by a combination of the three. Then, when you select the customer on a transaction, their preferred delivery method is marked by default.
    * Email &#x2013; Check this box to check the To Be Emailed box by default on transactions when this customer is selected.
    * Print &#x2013; Check this box to check the To Be Printed box by default on transactions when this customer is selected.
    * Fax &#x2013; Check this box to check the To Be Faxed box by default on transactions when this customer is selected.

Once you enter these settings on the customer record, these boxes are checked by default for transactions created from the customer record or for transactions that are copied or converted.

Note: These settings override any customized settings on transaction forms you use.

There are also preferences to set default values for new customer records at Setup > Company > Preferences > Printing, Fax,& Email Preferences. On the Print subtab, Fax subtab, or Email subtab, check Customers Default to [Print/Fax/Email] Transactions.

You can also set these fields using the Mass Update function. Go to Lists > Mass Updates > Mass Updates > General and click Customer. */
  emailtransactions: boolean | undefined;
  /** If you have a contract with this customer, enter the end date here.

If you are entering a job record, enter the projected end date of the job here. */
  enddate: Date | undefined;
  /** Enter the name of this customer, prospect or lead the way it should appear in all lists and on the Pay to the Order of line of checks.

If you use Auto-Generated Numbering, the customer number or code fills here. Enter the customer name in the Company Name field. */
  entityid: string;
  /** Select the status of this customer or potential customer.

A lead status creates a lead record. A prospect status creates a prospect record. A customer status creates a customer record.

If this is a job record, select the status of this job's progress: Awarded, Not Awarded, Closed, In Progress or Pending.

You can create a new customer status at <_TABNAME=LIST_CUSTOMERSTATUS_> > <_TASKCATEGORY=LIST_CUSTOMERSTATUS_> > Customer Statuses > New. */
  entitystatus: string;
  /** Enter the estimated budget the prospect or customer has for this opportunity. */
  estimatedbudget: string | undefined;
  /**  */
  externalid: string | undefined;
  /** Enter a fax number for this record. You should enter the fax number exactly as it must be dialed. If a '1' is required to fax to this number, be sure to include it at the beginning of the number.

The number you enter here automatically appears in the To Be Faxed field of transactions when you select this customer.

To fax NetSuite forms, an administrator must first set up fax service at Setup > Set Up Printing, Fax and E-mail > Fax. */
  fax: string | undefined;
  /** Set a preferred transaction delivery method for this customer.
 
Choose to send transactions by regular mail, by email, by fax, or by a combination of the three. Then, when you select the customer on a transaction, their preferred delivery method is marked by default.
    * Email &#x2013; Check this box to check the To Be Emailed box by default on transactions when this customer is selected.
    * Print &#x2013; Check this box to check the To Be Printed box by default on transactions when this customer is selected.
    * Fax &#x2013; Check this box to check the To Be Faxed box by default on transactions when this customer is selected.

Once you enter these settings on the customer record, these boxes are checked by default for transactions created from the customer record or for transactions that are copied or converted.

Note: These settings override any customized settings on transaction forms you use.

There are also preferences to set default values for new customer records at Setup > Company > Preferences > Printing, Fax,& Email Preferences. On the Print subtab, Fax subtab, or Email subtab, check Customers Default to [Print/Fax/Email] Transactions.

You can also set these fields using the Mass Update function. Go to Lists > Mass Updates > Mass Updates > General and click Customer. */
  faxtransactions: boolean | undefined;
  /** Enter this customer's name. */
  firstname: string | undefined;
  /** This is the date this customer first viewed your Web site. */
  firstvisit: string | undefined;
  /** Select the revenue account to use by default to post foreign currency adjustments that result when exchange rates are different for billing and revenue postings for this customer. You must select an income account.

You can override this account on a sales order for this customer. */
  fxaccount: string | undefined;
  /** Check this box to assign your customer the Customer Center role.

This role gives a customer access to view estimates, orders, invoices and payments.

You must also assign a password and email address for the customer to log in. */
  giveaccess: boolean | undefined;
  /** Email recipients can have one of four subscription statuses:

    * Confirmed Opt-In - When an email recipient has indicated that they want to receive your campaign and bulk merge email, they are assigned this subscription status. Only a recipient can set his or her subscription status to Confirmed Opt-In.
    * Soft Opt-In - Recipients with this status can receive opt-in messages that enable them to confirm whether or not they want to receive your email campaigns as well as bulk email.
      You can set a recipient&#x2019;s status to Soft Opt-In manually or through a mass update.
    * Soft Opt-Out - Recipients with this status cannot receive campaign or bulk email messages but can receive opt-in messages.
      You can change this subscription status to Soft Opt-In manually or through a mass update.
    * Confirmed Opt-Out - Only the recipient can set their subscription status to Confirmed Opt-Out.
      Recipients with this status cannot receive email campaigns, bulk email, or opt-in messages. Recipients with this status can only opt in again through the Customer Center or by clicking the link in an email message they have received prior to opting out. */
  globalsubscriptionstatus: string | undefined;
  /** Enter a home phone number for this person. */
  homephone: string | undefined;
  /** Select an image from your file cabinet to attach to this record.

Select -New- to upload a new image from your hard drive to your file cabinet in a new window. */
  image: string | undefined;
  /** Check this box if the customer's budget has been approved. */
  isbudgetapproved: boolean | undefined;
  /** When you check this box, this customer will no longer appear on customer, prospect or lead list unless you check the Show Inactives box at the bottom of the list page.

This customer's name will also no longer appear in other dropdown lists containing customers, and the customer will no longer have access to NetSuite or be able to sign into your Web store. */
  isinactive: boolean | undefined;
  /**  */
  isjob: string | undefined;
  /** Choose the type of customer record you are creating by selecting Company or Individual in the Type field.

This selection determines which fields and subtabs are used on this record. */
  isperson: string | undefined;
  /** If this customer was referred to your Web site by a search engine on the first visit, this field lists the keywords the customer used with the search engine. */
  keywords: string | undefined;
  /** Select this customer's preferred language.

This determines the language used on printed transaction forms.

In order to provide translated item names and descriptions, an administrator must select this language at <_TABNAME=ADMI_GENERAL_> > <_TASKCATEGORY=ADMI_GENERAL_> > > Languages. */
  language: string | undefined;
  /**  */
  lastmodifieddate: string | undefined;
  /** Optionally enter a last name here. */
  lastname: string | undefined;
  /** This field displays the last page this customer viewed on his or her most recent visit to your Web site. */
  lastpagevisited: string | undefined;
  /** This is the date this customer most recently visited your Web site. */
  lastvisit: string | undefined;
  /** Select how this customer was referred to you.

If you do not use the Marketing Automation feature, you can create new leads sources at <_TABNAME=EDIT_CRMOTHERLIST_> > <_TASKCATEGORY=EDIT_CRMOTHERLIST_> > CRM Lists > New > Lead Source.

If you have enabled the Marketing Automation feature, this field fills with the names of your campaigns, and you can not create new lead sources at <_TABNAME=EDIT_CRMOTHERLIST_> > <_TASKCATEGORY=EDIT_CRMOTHERLIST_> > CRM Lists. Instead, create new campaigns at <_TABNAME=EDIT_CAMPAIGN_> > Campaigns > New. */
  leadsource: string | undefined;
  /**  */
  middlename: string | undefined;
  /** Enter a mobile or cell phone number for this person. */
  mobilephone: string | undefined;
  /**  */
  monthlyclosing: string;
  /** Select the customer&#x2019;s negative number format preference, if any. The format controls whether the negative number is preceded by the minus sign (-) or is enclosed in parentheses ( ). */
  negativenumberformat: string | undefined;
  /** Select the customer&#x2019;s positive number format preference, if any. The format controls the thousands separator and decimals display. */
  numberformat: string | undefined;
  /** Enter the opening balance of this customer's account. */
  openingbalance: string | undefined;
  /** Select the account this opening balance is applied to. */
  openingbalanceaccount: string | undefined;
  /** Enter the date of the balance entered in the Opening Balance field. */
  openingbalancedate: Date | undefined;
  /** The Overdue field shows the total amount owed for open transactions that are past their due date based on the invoice terms.

Note: For open transactions that do not have a due date, the transaction date is used as the due date to calculate this total.

If you use the Multiple Currencies feature, the amount in this field is shown in the customer's currency. */
  overduebalance: string | undefined;
  /** If this customer is subcustomer of another customer or a smaller entity of another customer, select the larger parent customer.

If you select a parent customer in this field, this record shows indented under the parent customer in the Customers list. */
  parent: string | undefined;
  /** Identify a partner responsible for referring this customer or potential customer to you.

When you select a partner on a customer record, that customer can only use promotion codes associated with that partner. */
  partner: string | undefined;
  /** Assign a password to allow this customer access to NetSuite.

As of 2014.1, for a user assigned a Customer Center role, the password must be at least six characters long.

The Password Criteria panel will help you ensure you create a password that meets the password policy in effect in your account. You will need to tell the user the password you assign. It is not provided in the email notification.

For more information, see the help topic NetSuite Password Requirements. */
  password: string | undefined;
  /** Reenter the password in this field to verify that you entered the same password twice. */
  password2: string | undefined;
  /** Enter a phone number for your customer. It will appear on the Customer List report. */
  phone: string | undefined;
  /** Enter the furigana character you want to use to sort this record. */
  phoneticname: string | undefined;
  /** Select the preferred credit card processor for this credit card.

You can enter new credit card processors at <_TABNAME=ADMI_CREDCARD_> > <_TASKCATEGORY=ADMI_CREDCARD_> > Set Up Credit Card Processing.

When this customer chooses this credit card in an order placed in your Web site, this credit card processor is used to process the order. */
  prefccprocessor: string | undefined;
  /** If you want to sell to a customer at a specific price level, select one from the list.

You can add multiple price levels to an item by clicking the Lists tab. Under the Accounting heading, click Items, and click Edit next to each item you want to set multiple prices for. */
  pricelevel: string | undefined;
  /** What you enter here prints on the Pay to the Order of line of a check instead of what you entered in the Customer field. */
  printoncheckas: string | undefined;
  /** Set a preferred transaction delivery method for this customer.
 
Choose to send transactions by regular mail, by email, by fax, or by a combination of the three. Then, when you select the customer on a transaction, their preferred delivery method is marked by default.
    * Email &#x2013; Check this box to check the To Be Emailed box by default on transactions when this customer is selected.
    * Print &#x2013; Check this box to check the To Be Printed box by default on transactions when this customer is selected.
    * Fax &#x2013; Check this box to check the To Be Faxed box by default on transactions when this customer is selected.

Once you enter these settings on the customer record, these boxes are checked by default for transactions created from the customer record or for transactions that are copied or converted.

Note: These settings override any customized settings on transaction forms you use.

There are also preferences to set default values for new customer records at Setup > Company > Preferences > Printing, Fax,& Email Preferences. On the Print subtab, Fax subtab, or Email subtab, check Customers Default to [Print/Fax/Email] Transactions.

You can also set these fields using the Mass Update function. Go to Lists > Mass Updates > Mass Updates > General and click Customer. */
  printtransactions: boolean | undefined;
  /** Choose the A/R account to use by default on receivables transactions for this customer.

If you select Use System Preference, the account selected at <_TABNAME=ADMI_ACCTSETUP_> > <_TASKCATEGORY=ADMI_ACCTSETUP_> > Accounting Preferences > Items/Transactions in the Default Receivables Account field is used as this customer's default. */
  receivablesaccount: string | undefined;
  /** This field diplays the URL for the site the customer used to first access your Web site.

For example, if this customer clicked a link to your site from the results of a search engine, the URL is provided for the results of that search. */
  referrer: string | undefined;
  /** Enter how many days before the end date you want to be reminded that this customer's contract or job service needs renewing.

You can set the reminder to appear in the Reminders portlet on your Home, Lists and Transactions pages by clicking Customize Page on each page. On the Layout tab, click the Right Side Content subtab, and check the Reminders box. Then click the Reminders subtab, and check the Customers to Review box. Click Save. */
  reminderdays: string | undefined;
  /** Indicates that this entity is an intercompany customer. Select the subsidiary this customer represents as a buyer in intercompany transactions. */
  representingsubsidiary: string | undefined;
  /** If you do not collect sales tax from this customer because your merchandise will be resold, enter your customer's valid tax license number here. Make sure that you also set the Not Taxable tax code for this customer. */
  resalenumber: string | undefined;
  /** Select a sales team to associate with this record.

You To create a sales team, go to <_TABNAME=EDIT_CRMGROUP_> > <_TASKCATEGORY=EDIT_CRMGROUP_> > New > Select Sales Team Members. */
  salesgroup: string | undefined;
  /** Choose how close the prospect or customer is to purchasing. You can create additional options for this field at <_TABNAME=LIST_CRMOTHERLIST_> > <_TASKCATEGORY=LIST_CRMOTHERLIST_> > CRM Lists. */
  salesreadiness: string | undefined;
  /** This field shows the sales rep assigned to this record.

You can choose Reassign Using Territories if you want to reassign this record according to current sales territories.

If you use the Team Selling feature, the primary sales rep from the team assigned to this customer is shown here along with the primary rep's contribution percentage for this customer.

If the Sales Rep box is checked on your employee record, you will default as the sales rep on new customer records you create, even if you are not logged in with a sales role. */
  salesrep: string | undefined;
  /** Enter the title of this person, such as Mr., Mrs., Ms., Dr., Rev., etc. */
  salutation: string | undefined;
  /** Check this box to notify this customer automatically by email when you give them access to NetSuite.

If you do not check this box, you need to tell this person how to log in.

For security reasons, the email notification does not disclose the password. You need to contact your customer with this information. */
  sendemail: boolean | undefined;
  /** Check this box if you only want to ship orders to this customer when they are completely fulfilled. */
  shipcomplete: boolean | undefined;
  /**  */
  shippingcarrier: string | undefined;
  /** Select a default shipping method for this customer.

This shipping method will be selected by default on transactions when you select this customer's name.

You can create new shipping items at <_TABNAME=EDIT_SHIPITEM_> > <_TASKCATEGORY=EDIT_SHIPITEM_> > Shipping Items > New. */
  shippingitem: string | undefined;
  /** This field is read-only. It shows the web site where the customer registered for a customer account. */
  sourcewebsite: string | undefined;
  /**  */
  stage: string | undefined;
  /** Enter the date this person or company became a customer, lead or prospect.

If this person or company has a contract with you, enter the start date of the contract.

If you enter an estimate or an opportunity for this customer, this field will be updated with the date of that transaction. */
  startdate: Date | undefined;
  /**  */
  strength: string | undefined;
  /** Select the subsidiary to associate with this entity or job. You cannot enter transactions for this entity or job unless a subsidiary is assigned.
 
If you select this entity on a transaction, the transaction is associated with this subsidiary. The entity is able to access only information associated with this subsidiary.
 
Note: Once a transaction has posted for the entity or job, you are not able to change the subsidiary selected on the entity or job record. */
  subsidiary: string;
  /** Check this box if you want to update this customer's transactions to reflect the changes you make to the partner team. */
  syncpartnerteams: boolean | undefined;
  /**  */
  syncsalesteams: boolean | undefined;
  /** Place a check mark in this box if this customer pays sales tax. Clear this box if this customer is not taxable. Note that if there is a value entered in the Tax Item field, the Tax IItem value applies, even if the Taxable box is clear. NetSuite determines that a customer is not taxable only if the Taxable box is clear and the Tax Item field is empty.

To have customers default to taxable, go to Setup > Accounting > Setup Tasks > Set Up Taxes, check the Customers Default to Taxable box, and click Save. */
  taxable: boolean | undefined;
  /**  */
  taxexempt: boolean | undefined;
  /**  */
  taxfractionunit: string | undefined;
  /** Select the standard tax code associated with this customer. A tax code is a tax that you, as a vendor, collect from your customers at one certain rate and pay to one tax agency. You can change this for any individual sale.

You can create new tax codes at <_TABNAME=EDIT_TAXITEM_> > <_TASKCATEGORY=EDIT_TAXITEM_> > Tax Codes > New. */
  taxitem: string | undefined;
  /**  */
  taxrounding: string | undefined;
  /** Select the standard account terms for this customer's invoices. You can always change terms for any individual sale, however.

To add choices to this list, go to <_TABNAME=EDIT_ACCOUNTINGOTHERLIST_> > <_TASKCATEGORY=EDIT_ACCOUNTINGOTHERLIST_> > Accounting Lists > New > Term. */
  terms: string | undefined;
  /** Select the sales territory this customer or potential customer belongs in.

To set up sales territories, create rules by going to <_TABNAME=LIST_CUSTOMERFIELDRULE_> > <_TASKCATEGORY=LIST_CUSTOMERFIELDRULE_> > New, and then group rules together by going to <_TABNAME=LIST_SALESTERRITORY_> > <_TASKCATEGORY=LIST_SALESTERRITORY_> > New. */
  territory: string | undefined;
  /** Enter this customer&#x2019;s FedEx&#xae; or UPS&#xae; account number in the 3rd Party Billing Account Number field.

This account number is used if you select Consignee Billing on item fulfillments using UPS or select Bill Recipient on item fulfillments using FedEx. */
  thirdpartyacct: string | undefined;
  /**  */
  thirdpartycarrier: string | undefined;
  /** Select the country associated with the customer&#x2019;s UPS or FedEx account number. */
  thirdpartycountry: string | undefined;
  /** Enter the zip code associated with the customer&#x2019;s UPS or FedEx account number. */
  thirdpartyzipcode: string | undefined;
  /** Enter the job title for this person's position at his or her company. */
  title: string | undefined;
  /** This field displays the total amount of orders that have been entered but not yet billed.

If you have enabled the preference Customer Credit Limit Includes Orders, then this total is included in credit limit calculations.

Set this preference at <_TABNAME=ADMI_ACCTSETUP_> > <_TASKCATEGORY=ADMI_ACCTSETUP_> > Set Up Accounting > General.

If you use the Multiple Currencies feature, the amount in this field is shown in the customer's currency. */
  unbilledorders: string | undefined;
  /**  */
  unsubscribe: string | undefined;
  /** Enter the URL associated with this customer. */
  url: string | undefined;
  /** Enter this customer's tax registration number. */
  vatregnumber: string | undefined;
  /** This field displays the total number of visits this customer has made to your Web site.

A new visit is counted after the customer leaves your site and returns. */
  visits: number | undefined;
  /** This field is set to Yes if this lead, prospect, or customer record was created as a result of registering through your Web site. */
  weblead: string | undefined;
}

export class customerFieldsImpl implements customerFields {
  constructor(protected typedRecord: TypedRecord){ 
  }
  public get accessrole(): string | undefined {
    return this.typedRecord.nsRecord.getValue('accessrole') as any;
  }
  public set accessrole(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('accessrole', value as any)
  }
  public get accountnumber(): string | undefined {
    return this.typedRecord.nsRecord.getValue('accountnumber') as any;
  }
  public set accountnumber(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('accountnumber', value as any)
  }
  public get alcoholrecipienttype(): string | undefined {
    return this.typedRecord.nsRecord.getValue('alcoholrecipienttype') as any;
  }
  public set alcoholrecipienttype(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('alcoholrecipienttype', value as any)
  }
  public get altemail(): string | undefined {
    return this.typedRecord.nsRecord.getValue('altemail') as any;
  }
  public set altemail(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('altemail', value as any)
  }
  public get altphone(): string | undefined {
    return this.typedRecord.nsRecord.getValue('altphone') as any;
  }
  public set altphone(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('altphone', value as any)
  }
  public get assignedwebsite(): string | undefined {
    return this.typedRecord.nsRecord.getValue('assignedwebsite') as any;
  }
  public set assignedwebsite(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('assignedwebsite', value as any)
  }
  public get autoname(): boolean | undefined {
    return this.typedRecord.nsRecord.getValue('autoname') as any;
  }
  public set autoname(value: boolean | undefined) {
    this.typedRecord.nsRecord.setValue('autoname', value as any)
  }
  public get balance(): string | undefined {
    return this.typedRecord.nsRecord.getValue('balance') as any;
  }
  public set balance(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('balance', value as any)
  }
  public get billpay(): boolean | undefined {
    return this.typedRecord.nsRecord.getValue('billpay') as any;
  }
  public set billpay(value: boolean | undefined) {
    this.typedRecord.nsRecord.setValue('billpay', value as any)
  }
  public get buyingreason(): string | undefined {
    return this.typedRecord.nsRecord.getValue('buyingreason') as any;
  }
  public set buyingreason(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('buyingreason', value as any)
  }
  public get buyingtimeframe(): string | undefined {
    return this.typedRecord.nsRecord.getValue('buyingtimeframe') as any;
  }
  public set buyingtimeframe(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('buyingtimeframe', value as any)
  }
  public get campaigncategory(): string | undefined {
    return this.typedRecord.nsRecord.getValue('campaigncategory') as any;
  }
  public set campaigncategory(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('campaigncategory', value as any)
  }
  public get category(): string | undefined {
    return this.typedRecord.nsRecord.getValue('category') as any;
  }
  public set category(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('category', value as any)
  }
  public get clickstream(): string | undefined {
    return this.typedRecord.nsRecord.getValue('clickstream') as any;
  }
  public set clickstream(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('clickstream', value as any)
  }
  public get comments(): string | undefined {
    return this.typedRecord.nsRecord.getValue('comments') as any;
  }
  public set comments(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('comments', value as any)
  }
  public get companyname(): string | undefined {
    return this.typedRecord.nsRecord.getValue('companyname') as any;
  }
  public set companyname(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('companyname', value as any)
  }
  public get consolbalance(): string | undefined {
    return this.typedRecord.nsRecord.getValue('consolbalance') as any;
  }
  public set consolbalance(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('consolbalance', value as any)
  }
  public get consoldaysoverdue(): number | undefined {
    return this.typedRecord.nsRecord.getValue('consoldaysoverdue') as any;
  }
  public set consoldaysoverdue(value: number | undefined) {
    this.typedRecord.nsRecord.setValue('consoldaysoverdue', value as any)
  }
  public get consoldepositbalance(): string | undefined {
    return this.typedRecord.nsRecord.getValue('consoldepositbalance') as any;
  }
  public set consoldepositbalance(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('consoldepositbalance', value as any)
  }
  public get consoloverduebalance(): string | undefined {
    return this.typedRecord.nsRecord.getValue('consoloverduebalance') as any;
  }
  public set consoloverduebalance(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('consoloverduebalance', value as any)
  }
  public get consolunbilledorders(): string | undefined {
    return this.typedRecord.nsRecord.getValue('consolunbilledorders') as any;
  }
  public set consolunbilledorders(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('consolunbilledorders', value as any)
  }
  public get contact(): string | undefined {
    return this.typedRecord.nsRecord.getValue('contact') as any;
  }
  public set contact(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('contact', value as any)
  }
  public get creditholdoverride(): string | undefined {
    return this.typedRecord.nsRecord.getValue('creditholdoverride') as any;
  }
  public set creditholdoverride(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('creditholdoverride', value as any)
  }
  public get creditlimit(): string | undefined {
    return this.typedRecord.nsRecord.getValue('creditlimit') as any;
  }
  public set creditlimit(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('creditlimit', value as any)
  }
  public get currency(): string {
    return this.typedRecord.nsRecord.getValue('currency') as any;
  }
  public set currency(value: string) {
    this.typedRecord.nsRecord.setValue('currency', value as any)
  }
  public get currencyprecision(): string | undefined {
    return this.typedRecord.nsRecord.getValue('currencyprecision') as any;
  }
  public set currencyprecision(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('currencyprecision', value as any)
  }
  public get customform(): string {
    return this.typedRecord.nsRecord.getValue('customform') as any;
  }
  public set customform(value: string) {
    this.typedRecord.nsRecord.setValue('customform', value as any)
  }
  public get datecreated(): string | undefined {
    return this.typedRecord.nsRecord.getValue('datecreated') as any;
  }
  public set datecreated(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('datecreated', value as any)
  }
  public get daysoverdue(): number | undefined {
    return this.typedRecord.nsRecord.getValue('daysoverdue') as any;
  }
  public set daysoverdue(value: number | undefined) {
    this.typedRecord.nsRecord.setValue('daysoverdue', value as any)
  }
  public get defaultaddress(): string | undefined {
    return this.typedRecord.nsRecord.getValue('defaultaddress') as any;
  }
  public set defaultaddress(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('defaultaddress', value as any)
  }
  public get defaultbankaccount(): string | undefined {
    return this.typedRecord.nsRecord.getValue('defaultbankaccount') as any;
  }
  public set defaultbankaccount(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('defaultbankaccount', value as any)
  }
  public get defaultorderpriority(): number | undefined {
    return this.typedRecord.nsRecord.getValue('defaultorderpriority') as any;
  }
  public set defaultorderpriority(value: number | undefined) {
    this.typedRecord.nsRecord.setValue('defaultorderpriority', value as any)
  }
  public get depositbalance(): string | undefined {
    return this.typedRecord.nsRecord.getValue('depositbalance') as any;
  }
  public set depositbalance(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('depositbalance', value as any)
  }
  public get draccount(): string | undefined {
    return this.typedRecord.nsRecord.getValue('draccount') as any;
  }
  public set draccount(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('draccount', value as any)
  }
  public get email(): string | undefined {
    return this.typedRecord.nsRecord.getValue('email') as any;
  }
  public set email(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('email', value as any)
  }
  public get emailpreference(): string | undefined {
    return this.typedRecord.nsRecord.getValue('emailpreference') as any;
  }
  public set emailpreference(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('emailpreference', value as any)
  }
  public get emailtransactions(): boolean | undefined {
    return this.typedRecord.nsRecord.getValue('emailtransactions') as any;
  }
  public set emailtransactions(value: boolean | undefined) {
    this.typedRecord.nsRecord.setValue('emailtransactions', value as any)
  }
  public get enddate(): Date | undefined {
    return this.typedRecord.nsRecord.getValue('enddate') as any;
  }
  public set enddate(value: Date | undefined) {
    this.typedRecord.nsRecord.setValue('enddate', value as any)
  }
  public get entityid(): string {
    return this.typedRecord.nsRecord.getValue('entityid') as any;
  }
  public set entityid(value: string) {
    this.typedRecord.nsRecord.setValue('entityid', value as any)
  }
  public get entitystatus(): string {
    return this.typedRecord.nsRecord.getValue('entitystatus') as any;
  }
  public set entitystatus(value: string) {
    this.typedRecord.nsRecord.setValue('entitystatus', value as any)
  }
  public get estimatedbudget(): string | undefined {
    return this.typedRecord.nsRecord.getValue('estimatedbudget') as any;
  }
  public set estimatedbudget(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('estimatedbudget', value as any)
  }
  public get externalid(): string | undefined {
    return this.typedRecord.nsRecord.getValue('externalid') as any;
  }
  public set externalid(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('externalid', value as any)
  }
  public get fax(): string | undefined {
    return this.typedRecord.nsRecord.getValue('fax') as any;
  }
  public set fax(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('fax', value as any)
  }
  public get faxtransactions(): boolean | undefined {
    return this.typedRecord.nsRecord.getValue('faxtransactions') as any;
  }
  public set faxtransactions(value: boolean | undefined) {
    this.typedRecord.nsRecord.setValue('faxtransactions', value as any)
  }
  public get firstname(): string | undefined {
    return this.typedRecord.nsRecord.getValue('firstname') as any;
  }
  public set firstname(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('firstname', value as any)
  }
  public get firstvisit(): string | undefined {
    return this.typedRecord.nsRecord.getValue('firstvisit') as any;
  }
  public set firstvisit(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('firstvisit', value as any)
  }
  public get fxaccount(): string | undefined {
    return this.typedRecord.nsRecord.getValue('fxaccount') as any;
  }
  public set fxaccount(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('fxaccount', value as any)
  }
  public get giveaccess(): boolean | undefined {
    return this.typedRecord.nsRecord.getValue('giveaccess') as any;
  }
  public set giveaccess(value: boolean | undefined) {
    this.typedRecord.nsRecord.setValue('giveaccess', value as any)
  }
  public get globalsubscriptionstatus(): string | undefined {
    return this.typedRecord.nsRecord.getValue('globalsubscriptionstatus') as any;
  }
  public set globalsubscriptionstatus(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('globalsubscriptionstatus', value as any)
  }
  public get homephone(): string | undefined {
    return this.typedRecord.nsRecord.getValue('homephone') as any;
  }
  public set homephone(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('homephone', value as any)
  }
  public get image(): string | undefined {
    return this.typedRecord.nsRecord.getValue('image') as any;
  }
  public set image(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('image', value as any)
  }
  public get isbudgetapproved(): boolean | undefined {
    return this.typedRecord.nsRecord.getValue('isbudgetapproved') as any;
  }
  public set isbudgetapproved(value: boolean | undefined) {
    this.typedRecord.nsRecord.setValue('isbudgetapproved', value as any)
  }
  public get isinactive(): boolean | undefined {
    return this.typedRecord.nsRecord.getValue('isinactive') as any;
  }
  public set isinactive(value: boolean | undefined) {
    this.typedRecord.nsRecord.setValue('isinactive', value as any)
  }
  public get isjob(): string | undefined {
    return this.typedRecord.nsRecord.getValue('isjob') as any;
  }
  public set isjob(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('isjob', value as any)
  }
  public get isperson(): string | undefined {
    return this.typedRecord.nsRecord.getValue('isperson') as any;
  }
  public set isperson(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('isperson', value as any)
  }
  public get keywords(): string | undefined {
    return this.typedRecord.nsRecord.getValue('keywords') as any;
  }
  public set keywords(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('keywords', value as any)
  }
  public get language(): string | undefined {
    return this.typedRecord.nsRecord.getValue('language') as any;
  }
  public set language(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('language', value as any)
  }
  public get lastmodifieddate(): string | undefined {
    return this.typedRecord.nsRecord.getValue('lastmodifieddate') as any;
  }
  public set lastmodifieddate(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('lastmodifieddate', value as any)
  }
  public get lastname(): string | undefined {
    return this.typedRecord.nsRecord.getValue('lastname') as any;
  }
  public set lastname(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('lastname', value as any)
  }
  public get lastpagevisited(): string | undefined {
    return this.typedRecord.nsRecord.getValue('lastpagevisited') as any;
  }
  public set lastpagevisited(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('lastpagevisited', value as any)
  }
  public get lastvisit(): string | undefined {
    return this.typedRecord.nsRecord.getValue('lastvisit') as any;
  }
  public set lastvisit(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('lastvisit', value as any)
  }
  public get leadsource(): string | undefined {
    return this.typedRecord.nsRecord.getValue('leadsource') as any;
  }
  public set leadsource(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('leadsource', value as any)
  }
  public get middlename(): string | undefined {
    return this.typedRecord.nsRecord.getValue('middlename') as any;
  }
  public set middlename(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('middlename', value as any)
  }
  public get mobilephone(): string | undefined {
    return this.typedRecord.nsRecord.getValue('mobilephone') as any;
  }
  public set mobilephone(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('mobilephone', value as any)
  }
  public get monthlyclosing(): string {
    return this.typedRecord.nsRecord.getValue('monthlyclosing') as any;
  }
  public set monthlyclosing(value: string) {
    this.typedRecord.nsRecord.setValue('monthlyclosing', value as any)
  }
  public get negativenumberformat(): string | undefined {
    return this.typedRecord.nsRecord.getValue('negativenumberformat') as any;
  }
  public set negativenumberformat(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('negativenumberformat', value as any)
  }
  public get numberformat(): string | undefined {
    return this.typedRecord.nsRecord.getValue('numberformat') as any;
  }
  public set numberformat(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('numberformat', value as any)
  }
  public get openingbalance(): string | undefined {
    return this.typedRecord.nsRecord.getValue('openingbalance') as any;
  }
  public set openingbalance(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('openingbalance', value as any)
  }
  public get openingbalanceaccount(): string | undefined {
    return this.typedRecord.nsRecord.getValue('openingbalanceaccount') as any;
  }
  public set openingbalanceaccount(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('openingbalanceaccount', value as any)
  }
  public get openingbalancedate(): Date | undefined {
    return this.typedRecord.nsRecord.getValue('openingbalancedate') as any;
  }
  public set openingbalancedate(value: Date | undefined) {
    this.typedRecord.nsRecord.setValue('openingbalancedate', value as any)
  }
  public get overduebalance(): string | undefined {
    return this.typedRecord.nsRecord.getValue('overduebalance') as any;
  }
  public set overduebalance(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('overduebalance', value as any)
  }
  public get parent(): string | undefined {
    return this.typedRecord.nsRecord.getValue('parent') as any;
  }
  public set parent(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('parent', value as any)
  }
  public get partner(): string | undefined {
    return this.typedRecord.nsRecord.getValue('partner') as any;
  }
  public set partner(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('partner', value as any)
  }
  public get password(): string | undefined {
    return this.typedRecord.nsRecord.getValue('password') as any;
  }
  public set password(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('password', value as any)
  }
  public get password2(): string | undefined {
    return this.typedRecord.nsRecord.getValue('password2') as any;
  }
  public set password2(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('password2', value as any)
  }
  public get phone(): string | undefined {
    return this.typedRecord.nsRecord.getValue('phone') as any;
  }
  public set phone(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('phone', value as any)
  }
  public get phoneticname(): string | undefined {
    return this.typedRecord.nsRecord.getValue('phoneticname') as any;
  }
  public set phoneticname(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('phoneticname', value as any)
  }
  public get prefccprocessor(): string | undefined {
    return this.typedRecord.nsRecord.getValue('prefccprocessor') as any;
  }
  public set prefccprocessor(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('prefccprocessor', value as any)
  }
  public get pricelevel(): string | undefined {
    return this.typedRecord.nsRecord.getValue('pricelevel') as any;
  }
  public set pricelevel(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('pricelevel', value as any)
  }
  public get printoncheckas(): string | undefined {
    return this.typedRecord.nsRecord.getValue('printoncheckas') as any;
  }
  public set printoncheckas(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('printoncheckas', value as any)
  }
  public get printtransactions(): boolean | undefined {
    return this.typedRecord.nsRecord.getValue('printtransactions') as any;
  }
  public set printtransactions(value: boolean | undefined) {
    this.typedRecord.nsRecord.setValue('printtransactions', value as any)
  }
  public get receivablesaccount(): string | undefined {
    return this.typedRecord.nsRecord.getValue('receivablesaccount') as any;
  }
  public set receivablesaccount(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('receivablesaccount', value as any)
  }
  public get referrer(): string | undefined {
    return this.typedRecord.nsRecord.getValue('referrer') as any;
  }
  public set referrer(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('referrer', value as any)
  }
  public get reminderdays(): string | undefined {
    return this.typedRecord.nsRecord.getValue('reminderdays') as any;
  }
  public set reminderdays(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('reminderdays', value as any)
  }
  public get representingsubsidiary(): string | undefined {
    return this.typedRecord.nsRecord.getValue('representingsubsidiary') as any;
  }
  public set representingsubsidiary(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('representingsubsidiary', value as any)
  }
  public get resalenumber(): string | undefined {
    return this.typedRecord.nsRecord.getValue('resalenumber') as any;
  }
  public set resalenumber(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('resalenumber', value as any)
  }
  public get salesgroup(): string | undefined {
    return this.typedRecord.nsRecord.getValue('salesgroup') as any;
  }
  public set salesgroup(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('salesgroup', value as any)
  }
  public get salesreadiness(): string | undefined {
    return this.typedRecord.nsRecord.getValue('salesreadiness') as any;
  }
  public set salesreadiness(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('salesreadiness', value as any)
  }
  public get salesrep(): string | undefined {
    return this.typedRecord.nsRecord.getValue('salesrep') as any;
  }
  public set salesrep(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('salesrep', value as any)
  }
  public get salutation(): string | undefined {
    return this.typedRecord.nsRecord.getValue('salutation') as any;
  }
  public set salutation(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('salutation', value as any)
  }
  public get sendemail(): boolean | undefined {
    return this.typedRecord.nsRecord.getValue('sendemail') as any;
  }
  public set sendemail(value: boolean | undefined) {
    this.typedRecord.nsRecord.setValue('sendemail', value as any)
  }
  public get shipcomplete(): boolean | undefined {
    return this.typedRecord.nsRecord.getValue('shipcomplete') as any;
  }
  public set shipcomplete(value: boolean | undefined) {
    this.typedRecord.nsRecord.setValue('shipcomplete', value as any)
  }
  public get shippingcarrier(): string | undefined {
    return this.typedRecord.nsRecord.getValue('shippingcarrier') as any;
  }
  public set shippingcarrier(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('shippingcarrier', value as any)
  }
  public get shippingitem(): string | undefined {
    return this.typedRecord.nsRecord.getValue('shippingitem') as any;
  }
  public set shippingitem(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('shippingitem', value as any)
  }
  public get sourcewebsite(): string | undefined {
    return this.typedRecord.nsRecord.getValue('sourcewebsite') as any;
  }
  public set sourcewebsite(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('sourcewebsite', value as any)
  }
  public get stage(): string | undefined {
    return this.typedRecord.nsRecord.getValue('stage') as any;
  }
  public set stage(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('stage', value as any)
  }
  public get startdate(): Date | undefined {
    return this.typedRecord.nsRecord.getValue('startdate') as any;
  }
  public set startdate(value: Date | undefined) {
    this.typedRecord.nsRecord.setValue('startdate', value as any)
  }
  public get strength(): string | undefined {
    return this.typedRecord.nsRecord.getValue('strength') as any;
  }
  public set strength(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('strength', value as any)
  }
  public get subsidiary(): string {
    return this.typedRecord.nsRecord.getValue('subsidiary') as any;
  }
  public set subsidiary(value: string) {
    this.typedRecord.nsRecord.setValue('subsidiary', value as any)
  }
  public get syncpartnerteams(): boolean | undefined {
    return this.typedRecord.nsRecord.getValue('syncpartnerteams') as any;
  }
  public set syncpartnerteams(value: boolean | undefined) {
    this.typedRecord.nsRecord.setValue('syncpartnerteams', value as any)
  }
  public get syncsalesteams(): boolean | undefined {
    return this.typedRecord.nsRecord.getValue('syncsalesteams') as any;
  }
  public set syncsalesteams(value: boolean | undefined) {
    this.typedRecord.nsRecord.setValue('syncsalesteams', value as any)
  }
  public get taxable(): boolean | undefined {
    return this.typedRecord.nsRecord.getValue('taxable') as any;
  }
  public set taxable(value: boolean | undefined) {
    this.typedRecord.nsRecord.setValue('taxable', value as any)
  }
  public get taxexempt(): boolean | undefined {
    return this.typedRecord.nsRecord.getValue('taxexempt') as any;
  }
  public set taxexempt(value: boolean | undefined) {
    this.typedRecord.nsRecord.setValue('taxexempt', value as any)
  }
  public get taxfractionunit(): string | undefined {
    return this.typedRecord.nsRecord.getValue('taxfractionunit') as any;
  }
  public set taxfractionunit(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('taxfractionunit', value as any)
  }
  public get taxitem(): string | undefined {
    return this.typedRecord.nsRecord.getValue('taxitem') as any;
  }
  public set taxitem(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('taxitem', value as any)
  }
  public get taxrounding(): string | undefined {
    return this.typedRecord.nsRecord.getValue('taxrounding') as any;
  }
  public set taxrounding(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('taxrounding', value as any)
  }
  public get terms(): string | undefined {
    return this.typedRecord.nsRecord.getValue('terms') as any;
  }
  public set terms(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('terms', value as any)
  }
  public get territory(): string | undefined {
    return this.typedRecord.nsRecord.getValue('territory') as any;
  }
  public set territory(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('territory', value as any)
  }
  public get thirdpartyacct(): string | undefined {
    return this.typedRecord.nsRecord.getValue('thirdpartyacct') as any;
  }
  public set thirdpartyacct(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('thirdpartyacct', value as any)
  }
  public get thirdpartycarrier(): string | undefined {
    return this.typedRecord.nsRecord.getValue('thirdpartycarrier') as any;
  }
  public set thirdpartycarrier(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('thirdpartycarrier', value as any)
  }
  public get thirdpartycountry(): string | undefined {
    return this.typedRecord.nsRecord.getValue('thirdpartycountry') as any;
  }
  public set thirdpartycountry(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('thirdpartycountry', value as any)
  }
  public get thirdpartyzipcode(): string | undefined {
    return this.typedRecord.nsRecord.getValue('thirdpartyzipcode') as any;
  }
  public set thirdpartyzipcode(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('thirdpartyzipcode', value as any)
  }
  public get title(): string | undefined {
    return this.typedRecord.nsRecord.getValue('title') as any;
  }
  public set title(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('title', value as any)
  }
  public get unbilledorders(): string | undefined {
    return this.typedRecord.nsRecord.getValue('unbilledorders') as any;
  }
  public set unbilledorders(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('unbilledorders', value as any)
  }
  public get unsubscribe(): string | undefined {
    return this.typedRecord.nsRecord.getValue('unsubscribe') as any;
  }
  public set unsubscribe(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('unsubscribe', value as any)
  }
  public get url(): string | undefined {
    return this.typedRecord.nsRecord.getValue('url') as any;
  }
  public set url(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('url', value as any)
  }
  public get vatregnumber(): string | undefined {
    return this.typedRecord.nsRecord.getValue('vatregnumber') as any;
  }
  public set vatregnumber(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('vatregnumber', value as any)
  }
  public get visits(): number | undefined {
    return this.typedRecord.nsRecord.getValue('visits') as any;
  }
  public set visits(value: number | undefined) {
    this.typedRecord.nsRecord.setValue('visits', value as any)
  }
  public get weblead(): string | undefined {
    return this.typedRecord.nsRecord.getValue('weblead') as any;
  }
  public set weblead(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('weblead', value as any)
  }
}


/** 
 * Customer Record Definition.
 * Record's Internal Id: customer. 
 * Supports Custom Fields: true 
 */
export interface customerRecord extends TypedRecord<customerFields> {

}

export class customerRecordImpl extends TypedRecordImpl<customerFields> implements customerRecord {
  constructor(public nsRecord: Record) {
    super(nsRecord)
    this._fields = new customerFieldsImpl(this);
    // this._sublists = customernew FieldsImpl(this)
  }
}


