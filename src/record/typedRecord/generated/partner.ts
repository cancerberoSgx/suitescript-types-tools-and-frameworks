// This file is auto generated, do not edit it. 




/** 
 * Partner Fields Definition.
 * Record's Internal Id: partner. 
 * Supports Custom Fields: true 
 */
export interface partnerFields {
/** Choose the role you want to assign this partner. */
  accessrole?: string;
  /**  */
  altemail?: string;
  /**  */
  assigntasks?: boolean;
  /**  */
  autoname?: boolean;
  /** If this partner is located in Canada, enter the partner's business number. */
  bcn?: string;
  /**  */
  category?: string;
  /**  */
  centertype?: string;
  /** Choose a class to associate with this partner.

Click New to enter a new class record.

Go to <_TABNAME=EDIT_CLASS_> > <_TASKCATEGORY=EDIT_CLASS_> > Classes for details about existing class records. */
  class?: string;
  /** Enter any other information you want to note about this partner. */
  comments?: string;
  /** Enter the legal name of this partner.

If you use Auto-Generated Numbers, you may want to make sure you enter the partner name here so that it shows up in the Partners list. */
  companyname?: string;
  /**  */
  contact?: string;
  /** Select the entry form you want to use to create this partner record.

To create custom partner forms, go to <_TABNAME=LIST_CUSTENTRYFORM_> > <_TASKCATEGORY=LIST_CUSTENTRYFORM_> > Entry Forms, and click Customize next to Standard Partner Form. */
  customform: string;
  /**  */
  datecreated?: Date;
  /** This field automatically shows the default billing address that you enter and add using the Address subtab. */
  defaultaddress?: string;
  /** Choose a department to associate with this partner.

Click New to enter a new department record.

Go to <_TABNAME=EDIT_DEPARTMENT_> > <_TASKCATEGORY=EDIT_DEPARTMENT_> > Departments for details about existing department records. */
  department?: string;
  /** Check this box if you want this partner to be able to earn commission or royalties. Partners must be assigned to a partner commission plan before they can earn commission. */
  eligibleforcommission?: boolean;
  /** Enter this partner's email address.

If you enter an email address, you can email this partner directly from the Partners list. */
  email?: string;
  /** Choose the email format used when you email this partner copies of transactions.

You can set your default email setting at <_TABNAME=TRAN_USERPREFS_> > Set Preferences.

If you select HTML, be sure this partner has an e-mail program that allows HTML viewing. */
  emailpreference?: string;
  /** Enter the partner's name here the way it should appear in all lists.

If you use Auto-Generated Numbering, this field fills with the number for this vendor. */
  entityid: string;
  /**  */
  externalid?: string;
  /**  */
  faqty?: string;
  /**  */
  faqtymax?: string;
  /** Enter a fax number for this record. You should enter the fax number exactly as it must be dialed. If a '1' is required to fax to this number, be sure to include it at the beginning of the number.

The number you enter here automatically appears in the To Be Faxed field of transactions when you select this customer.

To fax NetSuite forms, an administrator must first set up fax service at Setup > Set Up Printing, Fax and E-mail > Fax. */
  fax?: string;
  /**  */
  firstname?: string;
  /** Check this box to assign your partner the Partner Center role.

This role gives a partner access to view and create subpartner records, promotion codes and special reports.

You must also assign an email address and password for this partner to log in. */
  giveaccess?: boolean;
  /** Email recipients can have one of four subscription statuses:

    * Confirmed Opt-In - When an email recipient has indicated that they want to receive your campaign messages, they are assigned this subscription status. Only a recipient can set his or her subscription status to Confirmed Opt-In.
    * Soft Opt-In - Recipients with this status can receive opt-in messages that enable them to confirm whether or not they want to receive your email campaigns as well as email marketing campaigns.
      You can set a recipient&#x2019;s status to Soft Opt-In manually or through a mass update.
    * Soft Opt-Out - Recipients with this status cannot receive campaign email messages but can receive opt-in messages.
      You can change this subscription status to Soft Opt-In manually or through a mass update.
    * Confirmed Opt-Out - Only the recipient can set their subscription status to Confirmed Opt-Out.
      Recipients with this status cannot receive email campaigns or opt-in messages. Recipients with this status can only opt in again through the Partner Center or by clicking the link in a campaign message they have received prior to opting out. */
  globalsubscriptionstatus?: string;
  /**  */
  homephone?: string;
  /** Select an image from your file cabinet to attach to this record.

Select -New- to upload a new image from your hard drive to your file cabinet in a new window. */
  image?: string;
  /**  */
  isfaqtyenforced?: string;
  /** When you check this box, this partner no longer appears on the Partners list unless you check the Show Inactives box at the bottom of the page.

Also, you can no longer select this partner from any lists on transactions, contact records, task records or event records. */
  isinactive?: boolean;
  /** Choose the type of customer record you are creating by selecting Company or Individual in the Type field.

This selection determines which fields and subtabs are used on this record. */
  isperson?: string;
  /**  */
  lastmodifieddate?: Date;
  /**  */
  lastname?: string;
  /** Choose a location to associate with this partner.

Click New to enter a new location record.

Go to <_TABNAME=EDIT_LOCATION_> > <_TASKCATEGORY=EDIT_LOCATION_> > Locations for details about existing location records. */
  location?: string;
  /**  */
  middlename?: string;
  /**  */
  mobilephone?: string;
  /**  */
  otherrelationships?: string;
  /** Select this partner's parent partner. */
  parent?: string;
  /** This field autofills with what you entered in the Partner field.

You can edit in this field if you need to change the code. */
  partnercode: string;
  /** Enter a phone number for this partner.

This number appears in the Partners list.

This field is required for the Online Bill Pay feature. */
  phone?: string;
  /** Enter the furigana character you want to use to sort this record. */
  phoneticname?: string;
  /** What you enter here prints on the Pay to the Order of line of a check instead of what you entered in the Partner field. */
  printoncheckas?: string;
  /** This is the URL you should provide to this partner for referring new customers.

When a customer follows this link and registers with your Web site, the partner is associated with the customer record that is created. */
  referringurl?: string;
  /** Check this box to require this user to change their password on their next login to NetSuite.

When the user next logs in, they see the Change Password page and cannot access other NetSuite pages until a new password is created and saved.

Requiring this action protects your account from unauthorized access using generic passwords and prepares your account for an audit.

Note that the Require Password Change on Next Login box never displays as checked. When you check this box and save the record, an internal flag is set. When the password change occurs, the flag is cleared. If you later check the box again and resave the record, the internal flag is reset to require another password change. */
  requirepwdchange?: boolean;
  /** Enter the appropriate salutation for this partner. */
  salutation?: string;
  /** Check this box if you want to send a notification email to the partner that you have given them access to view prior orders.

If you do not check this box, you need to tell partners how to log in.

For security reasons, the email notification will not disclose the password. You will need to contact your partner with this information. */
  sendemail?: boolean;
  /**  */
  strength?: string;
  /** Check this box to let this partner create subpartner records and give them access to NetSuite.

Subpartners can only see information that applies to their parent partner. */
  subpartnerlogin?: boolean;
  /** Select the subsidiary to associate with this partner. You cannot enter transactions for this partner unless a subsidiary is assigned.
 
If you select this customer on a transaction, the transaction is associated with this subsidiary. The partner is able to access only information associated with this subsidiary.
 
Note: Once a transaction has posted for the partner, you are not able to change the subsidiary selected on the partner record. */
  subsidiary: string;
  /** Choose the level of accuracy you want to to calculate tax to. */
  taxfractionunit?: string;
  /** Enter the partner's tax ID number.

This is necessary if you are required to issue a 1099 form. */
  taxidnum?: string;
  /** Choose the tax rounding method you want to use to calculate tax for this record. */
  taxrounding?: string;
  /**  */
  title?: string;
  /**  */
  unsubscribe?: string;
  /** If this partner has a Web site, enter the URL for the site here.

Web addresses must begin with http:// or https:// */
  url?: string;
  /** If this partner is liable for value added tax, enter the partner's VAT registration number. */
  vatregnumber?: string;
  /**  */
  washasaccess?: string;
  /**  */
  wasinactive?: string;
}





/** 
 * Partner Sublists Definition.
 * Record's Internal Id: partner. 
 * Supports Custom Fields: true 
 */
export interface partnerSublists {
  
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
}





