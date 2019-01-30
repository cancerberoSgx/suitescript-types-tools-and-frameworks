// This file is auto generated, do not edit it. 




/** 
 * Gift Certificate Item Fields Definition.
 * Record's Internal Id: giftcertificateitem. 
 * Supports Custom Fields: true 
 */
export interface giftcertificateitemFields {
/** Check this box to make this item available to partners with the Advanced Partner Center role for viewing.

These items are also available to partners with roles that are customized for the Advanced Partner Center and include view, create or edit access to item records. */
  availabletopartners?: boolean;
  /** Choose the billing schedule you want to associate with this item.

When an item is associated with a billing schedule, the billing schedule appears by default when the item is added to an order.
 
Note: Forms must be customized to show schedules on lines. Read Applying Billing Schedules. 

Click New to enter a new billing schedule. */
  billingschedule?: string;
  /** Select a class to associate with this item.

Click New to enter a new class record.

Go to <_TABNAME=LIST_CLASS_> > <_TASKCATEGORY=LIST_CLASS_> > Classes for details about existing class records. */
  class?: string;
  /** Enter an Item Defined Cost amount. */
  costestimate?: number;
  /** The Cost Estimate Type determines what value NetSuite uses to calculate estimated Gross Profit.

The estimated Gross Profit for Items on a transaction provides the data needed to calculate the total estimated Gross Profit on that transaction.

The individual line items that you enter in a transaction determine the amounts that post when you process that transaction.

The following Cost Estimate Types on Items are available:

    * Item Defined Cost - a user-defined amount, entered into the Item Defined Cost field on the Item definition page.
    * Average Cost - NetSuite calculates an average cost of the units purchased. 
    * Last Purchase Price - This field displays the most recent purchase price of the item as determined by purchase order receipt transactions. 
    * Purchase Price - Price entered that you pay for this item. If you do not enter a price, then the most recent purchase price from purchase orders provides the price for this item by default.
    * Preferred Vendor Rate - This option is only used if the Multi-Vendor feature is enabled and multiple vendors supply the same item.
          o First priority is to use the preferred vendor rate if defined on the Item record.
          o Next priority would be to use the purchase price.
          o Last priority would be the purchase order rate. (Initially this uses the preferred vendor rate cost, and then after a purchase order is entered, this type uses the most recent actual purchase order rate. Special orders and drop-shipped items use this cost information.)
    * Derived from member items - Total costs of items currently included in a kit. This Cost Estimate Type only applies to kits and sums the estimated costs of each item in the kit, based on each of their individual Cost Estimate Types. Uses the latest definition of the kit, not its historical definition. */
  costestimatetype?: string;
  /**  */
  createddate?: Date;
  /** Select the form you want to use to enter this record.

You can select the standard form, a custom form you have already created, or select New to create a custom form. */
  customform?: string;
  /** If you want this item to expire, enter the number of days it should remain active after purchase.

If this item is downloadable and the same customer purchases this item more than once, the countdown to expiration restarts with each purchase.

Note: If this item is a gift certificate and the buyer lives in California, Connecticut, Louisiana, Massachusetts, New Hampshire, Rhode Island or Washington, by law the gift certificate cannot expire. */
  daysbeforeexpiration?: number;
  /** Choose a department to associate with this item.

Click New to enter a new department record.

Go to <_TABNAME=LIST_DEPARTMENT_> > <_TASKCATEGORY=LIST_DEPARTMENT_> > Departments for details about existing department records. */
  department?: string;
  /** You can enter an optional name for this item in addition to the Item Name. If you are integrating with a Yahoo! store, this field is imported from Yahoo!.

The display name prints in the Item column of sales forms. If this item is a member of a kit, this name appears in the Item column when the Print Items box is checked.

If you do not enter a display name, the item name appears on printed forms. */
  displayname?: string;
  /** Check this box to hide the price of this item online.

This is useful for items you want to advertise but don't want to sell or for items that you track inventory for and want to display but are offered in combination with other items. */
  dontshowprice?: boolean;
  /** Check this box to exclude a tab, category or item page from the site map. */
  excludefromsitemap?: boolean;
  /**  */
  externalid?: string;
  /** If this item is displayed on the home page of your Web site, enter a featured description for this item.

This description appears below the item's store display name on the Home page of your store or site.

You can enter up to 999 characters including basic HTML code.

Enter and format text using the formatting options, or click the HTML Source Code link to enter HTML. */
  featureddescription?: string;
  /** Check the Include Children box to share the item with all the sub-subsidiaries associated with each subsidiary selected in the Subsidiary field.

Note: When sharing items across subsidiaries, all of the options selected on the item record must be compatible across subsidiaries.
 
For example, when entering an inventory item to be shared across subsidiaries, you should select Income and Asset accounts on the item record that are also shared across the same subsidiaries. */
  includechildren?: boolean;
  /** Select the income account to associate with this item. When no income account is selected, the item does not show in the Item dropdown list for sales transactions. */
  incomeaccount?: string;
  /**  */
  internalid?: number;
  /** Check this box to set this item as variable-priced. This enables customers to enter their own prices for this item, such as for donations. */
  isdonationitem?: boolean;
  /** Check the Can be Fulfilled/Received box to enable this item to be received and fulfilled during order processing.

Clear this box if this item does not require being received and fulfilled.

Note: Once this item has been added to transactions, this setting cannot be changed.

This field is used when the Advanced Billing and Advanced Shipping features are both enabled. */
  isfulfillable?: boolean;
  /** Check this box to make the item available for purchase with Google Checkout. */
  isgcocompliant?: boolean;
  /** When you check this box, this item will no longer appear on a list unless you check the Show All box at the bottom of the list page. */
  isinactive?: boolean;
  /** Check this box to make this item available online in your Web site.

You cannot sell this item online unless you check this box. */
  isonline?: boolean;
  /** Select the product this item is associated with.

Product records are tracked with versions and builds for issue management.

To create product records, go to <_TABNAME=ADMI_ISSUEPRODUCT_> > <_TASKCATEGORY=ADMI_ISSUEPRODUCT_> > Products > New. */
  issueproduct?: string;
  /** Type up to 60 characters for the name of this item. This name appears in lists on transactions.

If you have the option of entering a display name and do not, the item name prints in the Item column of sales forms.

If you have the option to enter a vendor name and do not, the item name prints in the Item column of purchase forms. If you have entered a display name, it will print on purchases instead of the item name. */
  itemid: string;
  /**  */
  itemnumberoptions?: string;
  /**  */
  itemoptions?: string;
  /**  */
  itemtype?: string;
  /**  */
  lastmodifieddate?: Date;
  /** Select the liabilty account that will be affected by this item. Click New to set up a new account.

Go to Setup > Accounts for details about existing accounts. */
  liabilityaccount: string;
  /** Select a location to associate with this item.
To use a location, the Multi-Location Inventory feature must be enabled.

    * If the Multi-Location Inventory feature is not enabled:

      Selecting an item record location limits the items that certain roles can access.
      For example, Role A is set up to access only items associated with Location One. Therefore, employees who have Role A can access only items associated with Location One.

      Note: If the Multi-Location Inventory feature is not enabled, you cannot use this field to track inventory by locations. For example, you cannot track how many widgets you have in stock in Location One.

      For more information click here.

    * If the Multi-Location Inventory feature is enabled:

      Selecting an item record location classifies the item by that location to limit the items that certain roles can access. To track inventory per location, use the Locations subtab at the bottom of this form.

      For more information click here.

Select New to enter a new location record.

Go to <_TABNAME=LIST_LOCATION_> > <_TASKCATEGORY=LIST_LOCATION_> > Locations for details about existing location records. */
  location?: string;
  /** If you checked the Variable Amount box, enter the maximum amount that can be paid or donated for this item. */
  maxdonationamount?: number;
  /** Enter the Meta Tag HTML you want to appear in the < head > section of this item page.

Meta tags enable your Web site to be found by search engines. */
  metataghtml?: string;
  /** If you opted to not show a price online, enter the message that should show instead of the price.

For example, you might enter "Call for Price." */
  nopricemessage?: string;
  /** Check this box to offer support for this particular item.

By offering support for items, customers can select on case records which item they are having trouble with. */
  offersupport?: boolean;
  /** Select a custom out of stock behavior for this item. It overwrites the overall site&#x2019;s out of stock behavior. Your choices are:

    * Default - Uses the behavior selected in the Web Store Out of Stock Items field at Setup > Web Site > Setup Tasks > Set Up Web Site > Shopping.
    * Disallow back orders but display out of stock messages
    * Allow back orders but display out of stock messages
    * Remove items when out of stock
    * Allow back orders with no out of stock message */
  outofstockbehavior?: string;
  /** You can enter a custom out of stock message for this item. The message here replaces the default out of stock message. */
  outofstockmessage?: string;
  /** Enter the text you want to appear as the page's title for this item. This text appears in the browser tab. Use a descriptive title for the item page, this can help achieve better results with search engine ranking. */
  pagetitle?: string;
  /** If you want this item to be a subitem, select the parent item here. */
  parent?: string;
  /** Enter a description for the related items you show with this item in your Web site.

You can enter up to 999 characters of letters, numbers and basic HTML code.

You can also clear the View as HTML box below to enter and format text using the formatting options above.  This eliminates the need for HTML code. */
  relateditemsdescription?: string;
  /** Enter a sales description for this item.

You can enter letters and numbers. There is a 999 character limit.

The sales description displays on transactions such as sales orders, cash sales and invoices.

If you use the Web Store feature, the sales description displays immediately under the item's store display name on item list pages in your store or site, if you have not entered a store description for an item. Enter the store description on the Store subtab of the item record.

The sales description also displays by default when the item is in the Web store shopping cart. */
  salesdescription?: string;
  /** Enter alternative search keywords that customers might use to find this item using your Web store&#x2019;s internal search.

These can include synonyms, acronyms, alternate languages or misspellings.

These keywords are seen as equally important as the item name when searches are conducted. */
  searchkeywords?: string;
  /** Check this box to suggest the item's online price for the item.

When customers navigate to a donation item, they first see the online price for the item and then can choose to enter any amount they like. */
  showdefaultdonationamount?: boolean;
  /** Use the Sitemap Priority list to indicate the relative importance of your Web site URLs.

You can select a priority ranging from 0.0 to 1.0 on item, category, and tab records.

NetSuite assigns the default priority &#x201c;Auto&#x201d; to all new and existing tab, category and item records in your account. The priority is calculated based on the position of the item or category in the hierarchy of your Web site.

For example, your Web site tabs automatically generate a default priority value of 1.0 because they are top level pages. A category published to a tab gets a priority of 0.5. An item published to a category on a tab gets a priority of 0.3. */
  sitemappriority?: string;
  /** The store description appears under the item's store display name on item list pages in your store or site.

You can enter letters, numbers, and basic HTML code.

Note: To make the store description display when an item is in the Web store shopping cart, go to Setup > Web Site > Set Up Web Site. Click the Cart subtab, and check the box next to Store Description. */
  storedescription?: string;
  /** Enter a detailed description for this item.

When your customers click an item's store display name for more information, they see this description.

You can enter letters, numbers or basic HTML code.

If you are using Internet Explorer, you can also clear the View Source box below to enter and format text using the formatting options above.  This eliminates the need for HTML code.

If you do not see the View Source box, make sure Rich Text Editing is enabled at Home > Set Preferences > Appearance. */
  storedetaileddescription?: string;
  /** Select an image from your file cabinet to display with this item in your Web site.

Upload images at Lists > Web Site > Images.

You can automatically resize images less than 5 megapixels in size at Setup > Web Site > Image Resizing. */
  storedisplayimage?: string;
  /** Enter the name of this item as you want it displayed in your Web site. */
  storedisplayname?: string;
  /** Select an image from your file cabinet you want to use as the thumbnail image for this item.

This image shows with this item before a customer clicks the item for more information.

Upload images at Lists > Web Site > Images.

You can automatically resize images less than 5 megapixels in size at Setup > Web Site > Image Resizing. */
  storedisplaythumbnail?: string;
  /** If you have created an item template to display this item in your Web site, select the template here.

Create item templates at Lists > Item Templates.

You can set an item template for all your items at Setup > Site Templates > Body. */
  storeitemtemplate?: string;
  /**  */
  subsidiary?: string;
  /**  */
  subtype?: string;
  /** Select the tax schedule you want to apply to this item.

You can create new tax schedules at Setup > Accounting > Taxes > Tax Schedules > New. */
  taxschedule: string;
  /** Enter a maximum of 999 characters in this field to identify an internal name or number to store the item's UPC Code. You can use the text you enter here when adding the item to transactions, searching, or viewing reports.
    * When you enter text in this field, the SKU/UPC field on item labels displays this UPC Code and prints in UPC bar code format.
    * When this field is clear, the SKU/UPC field on item labels displays the Item Name/Number and prints in Code-128 bar code format. */
  upccode?: string;
  /** Enter a short, descriptive name for this item to appear as part of its URL in the Web store.

Setting a name to show in the URL can result in better ranking from search engines.

If you leave this field blank, NetSuite terms and numbers are used as identifiers in the URL.

Note: Descriptive URL components are case sensitive. Descriptive URLs must match the case used in the URL Component field of an item record to point to the correct page. */
  urlcomponent?: string;
}





/** 
 * Gift Certificate Item Sublists Definition.
 * Record's Internal Id: giftcertificateitem. 
 * Supports Custom Fields: true 
 */
export interface giftcertificateitemSublists {
  
  /** price: Price Levels */
  price: {
    /** currency - Currency  */
    currency: string;
    /** pricelevel - Price Level  */
    pricelevel: string;
  }

  /** sitecategory: Web Site List */
  sitecategory: {
    /** category - Site Category  */
    category?: string;
    /** categorydescription - Description  */
    categorydescription: string;
    /** isdefault - Preferred Category  */
    isdefault: boolean;
    /** website - Site  */
    website?: string;
  }

  /** translations: Item Translation */
  translations: {
    /** displayname - Display Name  */
    displayname: string;
    /** featureddescription - Featured Description  */
    featureddescription: string;
    /** language - Language  */
    language: string;
    /** locale -   */
    locale: string;
    /** nopricemessage - No Price Message  */
    nopricemessage: string;
    /** outofstockmessage - Out Of Stock Message  */
    outofstockmessage: string;
    /** pagetitle - Page Title  */
    pagetitle: string;
    /** salesdescription - Sales Description  */
    salesdescription: string;
    /** storedescription - Store Description  */
    storedescription: string;
    /** storedetaileddescription - Detailed Description  */
    storedetaileddescription: string;
    /** storedisplayname - Store Display Name  */
    storedisplayname: string;
  }
}





