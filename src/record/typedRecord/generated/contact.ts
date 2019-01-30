// This file is auto generated, do not edit it. 




/** 
 * Contact Fields Definition.
 * Record's Internal Id: contact. 
 * Supports Custom Fields: true 
 */
export interface contactFields {
/** <p>Enter an alternate email address for this contact. If you use the Capture Email Replies, email sent with the alternate email address are automatically attached to the contact record. */
  altemail?: string;
  /** Select this contact's assistant.

You can select only from existing contacts. To add to this list, create another contact record. */
  assistant?: string;
  /** Enter the phone number for this contact's assistant.

This number appears only on this record. */
  assistantphone?: string;
  /**  */
  category?: string;
  /** Enter any other information you want to note about this contact.

These notes appears only on this record.

You can enter up to 999 characters of text. */
  comments?: string;
  /** Select the company this contact works for.
 
This contact appears in contact lists for this company. */
  company?: string;
  /**  */
  contactrole?: number;
  /** Select how this contact came to do business with your company.

If you do not use the Marketing Automation feature, you can create new leads sources at  <_TABNAME=EDIT_CRMOTHERLIST_> > <_TASKCATEGORY=EDIT_CRMOTHERLIST_> > CRM Lists > New > Lead Source.

If you have enabled the Marketing Automation feature, this field fills with the names of your campaigns, and you cannot create new lead sources at <_TABNAME=EDIT_CRMOTHERLIST_> > <_TASKCATEGORY=EDIT_CRMOTHERLIST_> > CRM Lists. Instead, create new campaigns at <_TABNAME=EDIT_CAMPAIGN_> > Campaigns > New. */
  contactsource?: string;
  /** Select the custom form you want to use to enter this record.

To continue using this form, select Standard Contact Form. To create a custom contact form, select New or click Customize Form. */
  customform: string;
  /** In this field, NetSuite automatically records the date you created this record. */
  datecreated?: Date;
  /** The default billing address automatically shows here when you enter and add it using the Address subtab. */
  defaultaddress?: string;
  /** Enter the contact's e-mail address.

If you enter an e-mail address, you can e-mail this contact directly from the Contacts list.

Also, If you invite this contact to an event, the contact receives e-mail with the event details. */
  email?: string;
  /** NetSuite automatically completes this field as you enter first, middle and last names below.

This is how the contact's name appears in all lists. */
  entityid: string;
  /**  */
  externalid?: string;
  /** Enter a fax number for this record. You should enter the fax number exactly as it must be dialed. If a '1' is required to fax to this number, be sure to include it at the beginning of the number.

The number you enter here automatically appears in the To Be Faxed field of transactions when you select this customer.

To fax NetSuite forms, an administrator must first set up fax service at Setup > Set Up Printing, Fax and E-mail > Fax. */
  fax?: string;
  /** Enter the contact's  name.

What you enter here automatically appears first in the Contact field.

This field is required for the Online Bill Pay feature. */
  firstname?: string;
  /** Email recipients can have one of four subscription statuses:

    * Confirmed Opt-In - When an email recipient has indicated that they want to receive your campaign messages, they are assigned this subscription status. Only a recipient can set his or her subscription status to Confirmed Opt-In.
    * Soft Opt-In - Recipients with this status can receive opt-in messages that enable them to confirm whether or not they want to receive your email campaigns as well as email marketing campaigns.
      You can set a recipient&#x2019;s status to Soft Opt-In manually or through a mass update.
    * Soft Opt-Out - Recipients with this status cannot receive campaign email messages but can receive opt-in messages.
      You can change this subscription status to Soft Opt-In manually or through a mass update.
    * Confirmed Opt-Out - Only the recipient can set their subscription status to Confirmed Opt-Out.
      Recipients with this status cannot receive email campaigns or opt-in messages. Recipients with this status can only opt in again through the Customer Center or by clicking the link in a campaign message they have received prior to opting out. */
  globalsubscriptionstatus?: string;
  /** Enter the contact's home phone number. This number appears only on this record. */
  homephone?: string;
  /** Select an image from your file cabinet to attach to this record.

Select -New- to upload a new image from your hard drive to your file cabinet in a new window. */
  image?: string;
  /** When you check this box, this contact no longer appears on the Contacts list unless you check the Show Inactives box at the bottom of the page.

Also, you can no longer select this contact from lists on transactions, company records, task records or events records. */
  isinactive?: boolean;
  /** Check this box if this is a private contact.

Private contacts can only be viewed by the person that entered the contact record. */
  isprivate?: boolean;
  /**  */
  lastmodifieddate?: Date;
  /** Enter the contact's last name.

What you enter here automatically appears last in the Contact field.

This field is required for the Online Bill Pay feature. */
  lastname?: string;
  /** Enter the contact's middle name or initial. This field is optional.

What you enter here automatically appears second in the Contact field. */
  middlename?: string;
  /** Enter the contact's mobile or cell phone number. This number appears only on this record. */
  mobilephone?: string;
  /** Enter the contact's work phone number. This number appears only on this record. */
  officephone?: string;
  /**  */
  otherrelationships?: string;
  /**  */
  owner?: number;
  /** Enter the phone number you primarily use to reach this contact. This number appears in the Contacts list and in the Contact section of company records. This field is required for the Online Bill Pay feature. */
  phone?: string;
  /** Enter the furigana character you want to use to sort this record. */
  phoneticname?: string;
  /** Enter the contact's salutation.

Examples are Mr., Mrs., Ms. and Miss. */
  salutation?: string;
  /** Select the subsidiary to associate with this contact. You cannot enter transactions for this contact unless a subsidiary is assigned.
 
If you select this contact on a transaction, the transaction is associated with this subsidiary. The contact is able to access only information associated with this subsidiary.
 
Note: Once a transaction has posted for the contact, you are not able to change the subsidiary selected on the contact record. */
  subsidiary: string;
  /** Select this contact's supervisor.

You can select only from existing contacts. To add to this list, create another contact record. */
  supervisor?: string;
  /** Enter the phone number for this contact's supervisor. */
  supervisorphone?: string;
  /** Enter this contact's title at his or her company.

On the record for this contact's company, in the Contacts section, this title appears next to the contacts name. */
  title?: string;
  /**  */
  unsubscribe?: string;
}





/** 
 * Contact Sublists Definition.
 * Record's Internal Id: contact. 
 * Supports Custom Fields: true 
 */
export interface contactSublists {
  
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
}





