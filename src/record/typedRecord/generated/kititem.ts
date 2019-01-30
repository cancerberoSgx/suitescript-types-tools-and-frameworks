// This file is auto generated, do not edit it. 




/** 
 * Kit Item Fields Definition.
 * Record's Internal Id: kititem. 
 * Supports Custom Fields: true 
 */
export interface kititemFields {
/**  */
  auctionquantity?: string;
  /**  */
  auctiontype?: string;
  /** Check this box to make this item available to partners with the Advanced Partner Center role for viewing.

These items are also available to partners with roles that are customized for the Advanced Partner Center and include view, create or edit access to item records. */
  availabletopartners?: boolean;
  /** Choose the billing schedule you want to associate with this item.

When an item is associated with a billing schedule, the billing schedule appears by default when the item is added to an order.
 
Note: Forms must be customized to show schedules on lines. Read Applying Billing Schedules. 

Click New to enter a new billing schedule. */
  billingschedule?: string;
  /**  */
  buyitnowprice?: number;
  /** Select a class to associate with this item.

Click New to enter a new class record.

Go to <_TABNAME=LIST_CLASS_> > <_TASKCATEGORY=LIST_CLASS_> > Classes for details about existing class records. */
  class?: string;
  /**  */
  conditionenabled?: string;
  /**  */
  conditionhelpurl?: string;
  /** Check this box to indicate that the item is subject to contingent revenue handling. When checked, revenue allocation is affected. */
  contingentrevenuehandling?: boolean;
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
  /** Enter the name of the country where this item is manufactured.

This information is used for customs purposes when shipping. */
  countryofmanufacture?: string;
  /**  */
  createddate?: Date;
  /** Select the event that triggers creation of revenue recognition plans. Match the event with the amount source of the item's revenue recognition rule.

    * Revenue Arrangement Creation - Revenue plans can be created when the revenue arrangement is created. Use this option with rules that have Event-Amount as the Amount Source.
    * Billing - Revenue plans can be created when the sales order is billed and from stand-alone cash sales, invoices, credit memos, and cash refunds. Use this option with rules that have Event-Percent based on amount as the Amount Source.
    * Fulfillment - This option is available only when Advanced Shipping is enabled. Revenue plans can be created upon fulfillment. Use this option with rules that have Event-Percent based on quantity as the Amount Source.
    * Project Progress - This option is available only when the Projects feature is enabled. Use this option with rules that have Event-Percent Complete as the Amount Source. */
  createrevenueplanson?: string;
  /** Select the form you want to use to enter this record.

You can select the standard form, a custom form you have already created, or select New to create a custom form. */
  customform?: string;
  /** Select the deferred revenue account to associate with this item. If you use revenue recognition or advanced revenue management, the revenue from the sale of this item is deferred. */
  deferredrevenueaccount?: string;
  /** Check this box to delay recognizing revenue from the sale of this item. When this box is check, revenue recognition schedules or revenue plans are created with the status On Hold.

For more information, see the help topic Delaying Revenue Recognition for an Item. */
  deferrevrec?: boolean;
  /** Choose a department to associate with this item.

Click New to enter a new department record.

Go to <_TABNAME=LIST_DEPARTMENT_> > <_TASKCATEGORY=LIST_DEPARTMENT_> > Departments for details about existing department records. */
  department?: string;
  /** Enter a description for this item. This description will appear in the Description column of sales forms. */
  description?: string;
  /** Check this box to disable advanced revenue management for this item. When checked, posting transactions that include this item post directly to the item revenue account. No revenue element or revenue arrangement is created. When you check this box, the Deferred Revenue Account on the Accounting subtab is disabled.

When you create sales transactions that include items that have this box checked, all the items in the transaction must have the box checked. You cannot mix items that post directly to revenue with items that post to deferred revenue in the same transaction. This restriction also applies to kit items. All items in a kit must post either to revenue or to deferred revenue.

You cannot check or clear the box after the item has been used in a transaction with advanced revenue management.

By default, this box is not checked. */
  directrevenueposting?: boolean;
  /**  */
  displayinebaystore?: boolean;
  /** You can enter an optional name for this item in addition to the Item Name. If you are integrating with a Yahoo! store, this field is imported from Yahoo!.

The display name prints in the Item column of sales forms. If this item is a member of a kit, this name appears in the Item column when the Print Items box is checked.

If you do not enter a display name, the item name appears on printed forms. */
  displayname?: string;
  /** Check this box to hide the price of this item online.

This is useful for items you want to advertise but don't want to sell or for items that you track inventory for and want to display but are offered in combination with other items. */
  dontshowprice?: boolean;
  /**  */
  ebayhandlingtime?: string;
  /**  */
  ebayintlinsurancefee?: number;
  /**  */
  ebayintlpackagehandlingfee?: number;
  /**  */
  ebayintlshipinsurance?: string;
  /**  */
  ebayintlshippingitem1?: string;
  /**  */
  ebayintlshippingitem2?: string;
  /**  */
  ebayintlshippingitem3?: string;
  /**  */
  ebayisintlcalculatedrate?: string;
  /**  */
  ebayisirregularpackage?: boolean;
  /**  */
  ebayitemdescription?: string;
  /**  */
  ebayitemlocdisplay?: string;
  /**  */
  ebayitemloczipcode?: string;
  /**  */
  ebayitemlots?: number;
  /**  */
  ebayitemsubtitle?: string;
  /**  */
  ebayitemtitle?: string;
  /**  */
  ebayitemweightamt?: string;
  /**  */
  ebaylayout?: string;
  /**  */
  ebaypackagetype?: string;
  /**  */
  ebaypagecounter?: string;
  /**  */
  ebayrelistingoption?: string;
  /**  */
  ebaytheme?: string;
  /**  */
  ebaythemegroup?: string;
  /**  */
  endauctionswhenoutofstock?: boolean;
  /** Check this box to apply the minimum quantity restriction on sales orders generated from NetSuite. When you clear this box, but enter a number in the Minimum Quantity field, the minimum quantity is only applied to web store orders. */
  enforceminqtyinternally?: boolean;
  /** Check this box to exclude a tab, category or item page from the site map. */
  excludefromsitemap?: boolean;
  /**  */
  externalid?: string;
  /** If this item is displayed on the home page of your Web site, enter a featured description for this item.

This description appears below the item's store display name on the Home page of your store or site.

You can enter up to 999 characters including basic HTML code.

Enter and format text using the formatting options, or click the HTML Source Code link to enter HTML. */
  featureddescription?: string;
  /**  */
  froogleproductfeed?: string;
  /**  */
  gallery?: boolean;
  /**  */
  galleryfeatured?: boolean;
  /**  */
  gifttypeexpressship?: boolean;
  /**  */
  gifttypegiftwrap?: boolean;
  /**  */
  gifttypeshiptorecipient?: boolean;
  /** As an option, you may enter a handling cost for this item in dollars.

You must also create a shipping item for per-item shipping and handling costs at Lists > Shipping Items > New.

When this item is selected on sales orders, invoices or cash sales, the appropriate shipping and handling charges are automatically calculated. */
  handlingcost?: number;
  /**  */
  handlinggroup?: string;
  /**  */
  imagesgroup?: string;
  /**  */
  imageslocation?: string;
  /** Check the Include Children box to share the item with all the sub-subsidiaries associated with each subsidiary selected in the Subsidiary field.

Note: When sharing items across subsidiaries, all of the options selected on the item record must be compatible across subsidiaries.
 
For example, when entering an inventory item to be shared across subsidiaries, you should select Income and Asset accounts on the item record that are also shared across the same subsidiaries. */
  includechildren?: boolean;
  /** Select the income account to associate with this item. When no income account is selected, the item does not show in the Item dropdown list for sales transactions. */
  incomeaccount?: string;
  /**  */
  internalid?: number;
  /**  */
  iscalculatedrate?: string;
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
  /**  */
  itemcondition?: string;
  /**  */
  itemhandlingfee?: number;
  /** Type up to 60 characters for the name of this item. This name appears in lists on transactions.

If you have the option of entering a display name and do not, the item name prints in the Item column of sales forms.

If you have the option to enter a vendor name and do not, the item name prints in the Item column of purchase forms. If you have entered a display name, it will print on purchases instead of the item name. */
  itemid: string;
  /**  */
  iteminsurancefee?: number;
  /**  */
  itemoptions?: string;
  /** The item revenue category is a classification for items that have similar characteristics and revenue allocation requirements. It is used in the fair value price list. */
  itemrevenuecategory?: string;
  /**  */
  itemshipinsurance?: string;
  /**  */
  itemtype?: string;
  /**  */
  lastmodifieddate?: Date;
  /**  */
  listimmediate?: string;
  /**  */
  listingduration?: string;
  /**  */
  listingstartdate?: Date;
  /**  */
  listingstarttime?: string;
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
  /** Enter the name of the company that manufactures this item. */
  manufacturer?: string;
  /** Enter the address of the manufacturer.

This is necessary to fill out international shipping forms when you sell and ship this item. */
  manufactureraddr1?: string;
  /** Enter the city location of the manufacturer of this item.

This is necessary to automatically fill out international forms when you ship this item across borders. */
  manufacturercity?: string;
  /** Enter the state where this item's manufacturer is located.

This is necessary to fill out international forms when you ship this item. */
  manufacturerstate?: string;
  /** Enter the Harmonized System (HS) tariff code number or the Harmonized Tariff Schedule (HTS) code number.

This number should be six to ten characters. */
  manufacturertariff?: string;
  /** Enter the Tax ID Number (TIN) for the manufacturer. */
  manufacturertaxid?: string;
  /** Enter the postal code of the location of this manufacturer.

This is necessary to create international forms when you ship this item. */
  manufacturerzip?: string;
  /** If you checked the Variable Amount box, enter the maximum amount that can be paid or donated for this item. */
  maxdonationamount?: number;
  /**  */
  maximumquantity?: string;
  /** Enter the Meta Tag HTML you want to appear in the < head > section of this item page.

Meta tags enable your Web site to be found by search engines. */
  metataghtml?: string;
  /** Enter the lowest quantity that customers can purchase.  Web store customers receive a warning and cannot check out if they enter an item quantity below this minimum. 

 Leave this field empty to allow customers to check out with no minimum quantity restrictions.

You can edit this warning at Setup > Site Builder/SuiteCommerce Advanced > Customize Text. */
  minimumquantity?: string;
  /**  */
  mossapplies?: boolean;
  /** MPN (Manufacturers Part Number) - Enter the part number used by the manufacturer to identify this item. */
  mpn?: string;
  /** Check the Multiple Manufacture Addresses box if this manufacturer uses more than one address. */
  multmanufactureaddr?: boolean;
  /** Enter the name of the NexTag category this item should be included in.

This category is included in the product feeds you can export at Setup > Web Site > Product Feeds.

Go to www.nextag.com for more information on the available categories.

This is an optional field only displayed for the following item records: Kit/Package, Non-inventory Item for Sale, Non-inventory Item for Resale, Assembly (lot and serialized), and Inventory (lot and serialized). */
  nextagcategory?: string;
  /**  */
  nextagproductfeed?: string;
  /** If you opted to not show a price online, enter the message that should show instead of the price.

For example, you might enter "Call for Price." */
  nopricemessage?: string;
  /**  */
  numactivelistings?: number;
  /**  */
  numcurrentlylisted?: number;
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
  /** Choose how to determine the quantity for the purpose of pricing:
    * By Line Quantity - pricing is applied according to the quantity included in the line item.
    * By Overall Item Quantity - pricing is applied for all line items for the same item on a transaction.
    * By Overall Parent Quantity - pricing is applied for all items with the same parent item on the transaction. This can be useful for applying quantity pricing to matrix items.
    * By Overall Schedule Quantity - pricing is applied to all items that use the same pricing schedule that are included in the transaction. */
  overallquantitypricingtype?: string;
  /**  */
  packageheight?: string;
  /**  */
  packagelength?: string;
  /**  */
  packagewidth?: string;
  /** Enter the text you want to appear as the page's title for this item. This text appears in the browser tab. Use a descriptive title for the item page, this can help achieve better results with search engine ranking. */
  pagetitle?: string;
  /** If you want this item to be a subitem, select the parent item here. */
  parent?: string;
  /** Set the NAFTA criterion for this item. */
  preferencecriterion?: string;
  /** Select the pricing group this item is a member of.

Using pricing groups allows you to assign customer-specific price levels for a group of items.

You can create new pricing groups at <_TABNAME=EDIT_OTHERLIST_> > <_TABNAME=EDIT_OTHERLIST_> > Accounting Lists > New > Pricing Group. */
  pricinggroup?: string;
  /**  */
  primarycatdisplayname?: string;
  /**  */
  primarycategory?: number;
  /** Check this box to display the member items with their respective display names, quantities and descriptions on sales and purchase forms. Clear this box to display only the description and amount of the group or kit on sales and purchase forms.

Note: Assembly items do not display on purchase forms even when this box is checked.  Also note that member items are never shown on printed forms; only one line with the group name and summary is printed. */
  printitems?: boolean;
  /** Check this box if you produce this item for the purposes of the NAFTA Certificate of Origin. */
  producer?: boolean;
  /**  */
  productfeed?: string;
  /** Select the pricing schedule you want to use to set prices for this item.

You can create new pricing schedules at <_TABNAME=EDIT_QUANTITYPRICINGSCHEDULE_> > <_TASKCATEGORY=EDIT_QUANTITYPRICINGSCHEDULE_> > Quantity Pricing Schedules > New.

Selecting a pricing schedule sets the Use Marginal Rates and Calculate Quantity Discounts fields. */
  quantitypricingschedule?: string;
  /**  */
  refundgivenas?: string;
  /** Enter a description for the related items you show with this item in your Web site.

You can enter up to 999 characters of letters, numbers and basic HTML code.

You can also clear the View as HTML box below to enter and format text using the formatting options above.  This eliminates the need for HTML code. */
  relateditemsdescription?: string;
  /**  */
  reserveprice?: number;
  /**  */
  returnpolicy?: string;
  /**  */
  returnpolicydetails?: string;
  /**  */
  returnshippingpaidby?: string;
  /**  */
  returnswithin?: string;
  /** Select a revenue allocation group to use in GroupSum functions in fair value formulas. The value you select here is the default. You can change it on the revenue element. */
  revenueallocationgroup?: string;
  /** Select the revenue rule to use by default for this item in a revenue arrangement.

Be sure the rule you select has an Amount Source that is appropriate for the value you select in the Create Revenue Plans On field. For more information, see the field level help for Create Revenue Plans On. */
  revenuerecognitionrule?: string;
  /** Select a revenue rule to use for forecast revenue recognition plans. The default is determined by the same accounting preference as the Revenue Recognition Rule.

You may select the same rule or a different rule for actual and forecast rules. Percent complete rules are not available as forecast rules. For information about forecast revenue plans for project progress, see Working with Percent-Complete Revenue Recognition Plans. */
  revrecforecastrule: string;
  /** Select the account to use for the foreign currency adjustment during reclassification.

You can select any account with an account type of income, other income, expense, or other expense, including the gain and loss accounts generated by the system after qualifying revaluation transactions. You can change the Foreign Currency Adjustment Account on the revenue element before revenue recognition plans are created. */
  revreclassfxaccount?: string;
  /** Select a default revenue recognition template to associate with this item on sales transactions.

You must also select a Deferred Revenue Account in order to use revenue recognition. */
  revrecschedule?: string;
  /** Select the unit of measure used to express the quantity entered in the Schedule B Quantity field. These two fields are used together to determine the amount represented by one of this item on the Schedule B form for Shipping Export Declarations.

For example, if you enter 5 in the Schedule B Quantity field, and you select kilogram in the Schedule B Code field, when you fulfill two of these items on an order, the Schedule B form presents the item's amount as 10 kilograms.

Schedule B is the form for Statistical Classification of Domestic and Foreign Commodities Exported from the U.S. See www.census.gov/foreign-trade for more information. */
  schedulebcode?: string;
  /** Enter the number for the Schedule B form for this item. */
  schedulebnumber?: string;
  /** Enter the numeric quantity in relation to the unit of measure entered in the Schedule B Code field. These two fields are used together to determine the amount represented by one of this item on the Schedule B form for Shipping Export Declarations.

For example, if you enter 5 in the Schedule B Quantity field, and you select kilogram in the Schedule B Code field, when you fulfill two of these items on an order, the Schedule B form presents the items&#x2019; amount as 10 kilograms. */
  schedulebquantity?: string;
  /** Enter alternative search keywords that customers might use to find this item using your Web store&#x2019;s internal search.

These can include synonyms, acronyms, alternate languages or misspellings.

These keywords are seen as equally important as the item name when searches are conducted. */
  searchkeywords?: string;
  /**  */
  secondarycatdisplayname?: string;
  /**  */
  secondarycategory?: number;
  /**  */
  sellonebay?: boolean;
  /**  */
  shipasia?: boolean;
  /**  */
  shipaustralia?: boolean;
  /**  */
  shipcanada?: boolean;
  /**  */
  shipeurope?: boolean;
  /**  */
  shipgermany?: boolean;
  /** Check this box if this item always ships alone and with no other items in the same package.

This helps determine the number of packages needed and the shipping rate on order fulfillments. */
  shipindividually?: boolean;
  /**  */
  shipjapan?: boolean;
  /**  */
  shipmexico?: boolean;
  /**  */
  shipnorthsouthamerica?: boolean;
  /** Select the type of package this item normally ships in. The information for this package type automatically fills in on order fulfillments for this item.

Setting up and assigning package types helps determine the number of packages on an order and helps return accurate real-time shipping rates.

Create package types at Setup > Accounting > Shipping > Packages subtab. */
  shippackage?: string;
  /** As an option, you may enter a shipping cost for this item in dollars.

You must also create a shipping item for per-item shipping costs at Lists > Shipping Items > New.

When this item is selected on sales orders, invoices or cash sales, the appropriate shipping charges are automatically calculated. */
  shippingcost?: number;
  /**  */
  shippingdomesticmethodsgroup?: string;
  /**  */
  shippingdomgroup?: string;
  /**  */
  shippingintlgroup?: string;
  /**  */
  shippingintlgroup1?: string;
  /**  */
  shippingintlgroup2?: string;
  /**  */
  shippingintlgroup3?: string;
  /**  */
  shippingitem1?: string;
  /**  */
  shippingitem2?: string;
  /**  */
  shippingitem3?: string;
  /**  */
  shippinglocationsgroup?: string;
  /**  */
  shippingpackaginggroup?: string;
  /**  */
  shippingrate1?: number;
  /**  */
  shippingrate2?: number;
  /**  */
  shippingrate3?: number;
  /**  */
  shipuk?: boolean;
  /**  */
  shipworldwide?: boolean;
  /** Enter the name of the Shopping.com category that this item should go under.

This category is included in the product feeds that you can export from Setup > Web Site > Product Feeds.

Go to www.shopping.com for more information on the categories available.

This is an optional field only available for following item records: Kit/Package, Non-inventory Item for Sale, Non-inventory Item for Resale, Assembly (lot and serialized), and Inventory (lot and serialized). */
  shoppingdotcomcategory?: string;
  /**  */
  shoppingproductfeed?: string;
  /** Enter the name of the Shopzilla category this item should be included in.

This category is included in the product feeds you export at Setup > Web Site > Product Feeds.

Go to www.shopzilla.com for more information on the available categories.

This is an optional field only displayed for the following item records: Kit/Package, Non-inventory Item for Sale, Non-inventory Item for Resale, Assembly (lot and serialized), and Inventory (lot and serialized). */
  shopzillacategoryid?: number;
  /**  */
  shopzillaproductfeed?: string;
  /**  */
  showasgift?: boolean;
  /** Check this box to suggest the item's online price for the item.

When customers navigate to a donation item, they first see the online price for the item and then can choose to enter any amount they like. */
  showdefaultdonationamount?: boolean;
  /** Use the Sitemap Priority list to indicate the relative importance of your Web site URLs.

You can select a priority ranging from 0.0 to 1.0 on item, category, and tab records.

NetSuite assigns the default priority &#x201c;Auto&#x201d; to all new and existing tab, category and item records in your account. The priority is calculated based on the position of the item or category in the hierarchy of your Web site.

For example, your Web site tabs automatically generate a default priority value of 1.0 because they are top level pages. A category published to a tab gets a priority of 0.5. An item published to a category on a tab gets a priority of 0.3. */
  sitemappriority?: string;
  /** In the Soft Descriptor list, select the name that will appear on the customer's credit card statement when this item is purchased.

Enter soft descriptors to select in this field at Setup > Accounting > Payment Processing > Credit Card Soft Descriptors. */
  softdescriptor?: string;
  /**  */
  standardimages?: string;
  /**  */
  startingprice?: number;
  /** Enter up to 21 characters to specify information about this item, such as New, Refurbished or Ships 2-3 days. */
  stockdescription?: string;
  /**  */
  storecatdisplayname?: string;
  /**  */
  storecatdisplayname2?: string;
  /**  */
  storecategory?: number;
  /**  */
  storecategory2?: number;
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
  supersizeimages?: boolean;
  /**  */
  taxable?: boolean;
  /** Select the tax schedule you want to apply to this item.

You can create new tax schedules at Setup > Accounting > Taxes > Tax Schedules > New. */
  taxschedule: string;
  /**  */
  templatesgroup?: string;
  /** Enter a maximum of 999 characters in this field to identify an internal name or number to store the item's UPC Code. You can use the text you enter here when adding the item to transactions, searching, or viewing reports.
    * When you enter text in this field, the SKU/UPC field on item labels displays this UPC Code and prints in UPC bar code format.
    * When this field is clear, the SKU/UPC field on item labels displays the Item Name/Number and prints in Code-128 bar code format. */
  upccode?: string;
  /** Enter a short, descriptive name for this item to appear as part of its URL in the Web store.

Setting a name to show in the URL can result in better ranking from search engines.

If you leave this field blank, NetSuite terms and numbers are used as identifiers in the URL.

Note: Descriptive URL components are case sensitive. Descriptive URLs must match the case used in the URL Component field of an item record to point to the correct page. */
  urlcomponent?: string;
  /** Check this box if you want the quantity discounts in the schedule to be applied to each pricing bracket separately.

For example, a schedule offers no discount for the first 100 items sold and a 5% discount if more than 100 are sold. If 150 items are sold, the first 100 are at normal price, and the other fifty items are sold at 5% discount.

Leave this box clear if you want the discount to apply to all of the items sold. */
  usemarginalrates?: boolean;
  /** In the Deferral field, choose how to handle deferment when this item is sold as part of a bundle:

    * Defer Bundle Until Delivered &#x2013; Until this item is marked delivered, item revenue recognition in the bundle is deferred.

      A typical use for this option is to identify items whose revenue recognition depends on the delivery of the item in addition to the delivery of a separate service. For example, a specified upgrade would typically be marked Defer Bundle Until Delivered.

    * Defer Until Item Delivered &#x2013; Until this item is marked delivered, the item revenue recognition is deferred. This is the default field setting.

Note: The deferral setting you choose for each item in a bundle works with the deferral settings for other items in the bundle. */
  vsoedeferral?: string;
  /** Check this box to automatically set this item to a Delivered status when this item is added to a transaction. Clear this box to leave the delivery status clear by default. */
  vsoedelivered?: boolean;
  /** Choose from the following options to determine how discounts are handled for this item.
    * As Allowed - Allows a portion of an applicable discount to be applied against this item if its status is delivered when revenue allocation is performed.
    * Never - Prevents a discount from being applied against this item when revenue allocation is performed.

When you use advanced revenue management, items with VSOE values never permit discount if the residual method is used. */
  vsoepermitdiscount?: string;
  /** Enter the VSOE Price for this item if it is known.

Note: If you need to use more than one VSOE price for an item, you can set the most common price here and then change the price on each order manually. */
  vsoeprice?: number;
  /** Select an allocation type to associate with this item on sales transactions.

    * Normal - Revenue allocation follows EITF 08-01 rules when you use VSOE and the fair value price list with advanced revenue management.
    * Exclude - This item is excluded from revenue allocation. The item discounted sales amount is the revenue amount.
    * Software - The item is software. When you use VSOE with the EITF SuiteApp, both EITF 08-01 and SOP 97-2 rules apply for revenue allocation. When you use advanced revenue management, revenue allocation follows the fair value price list. Then if the fair value prices for any of the items in the allocation are estimates rather than VSOE, the allocation is recalculated using the residual method.

Note: Do not select the Software value unless you are using VSOE with the EITF SuiteApp or Advanced Revenue Management. */
  vsoesopgroup?: string;
  /** Enter the weight of this item and select the units in the dropdown. */
  weight?: number;
  /**  */
  weightunit?: string;
  /**  */
  willship?: string;
  /**  */
  yahooproductfeed?: string;
}





/** 
 * Kit Item Sublists Definition.
 * Record's Internal Id: kititem. 
 * Supports Custom Fields: true 
 */
export interface kititemSublists {
  
  /** accountingbookdetail: Accounting Books */
  accountingbookdetail: {
    /** accountingbook - Accounting Book  */
    accountingbook: string;
    /** amortizationtemplate - Amortization Template  */
    amortizationtemplate: string;
    /** createrevenueplanson - Create Revenue Plans On  */
    createrevenueplanson: string;
    /** revenuerecognitionrule - Revenue Recognition Rule  */
    revenuerecognitionrule: string;
    /** revrecforecastrule - Rev Rec Forecast Rule  */
    revrecforecastrule: string;
    /** revrecschedule - Revenue Recognition Template  */
    revrecschedule: string;
    /** sameasprimaryamortization - Same as Primary Book Amortization  */
    sameasprimaryamortization: boolean;
    /** sameasprimaryrevrec - Same as Primary Book Rev Rec  */
    sameasprimaryrevrec: boolean;
  }

  /** member: Members */
  member: {
    /** item - Item  */
    item?: string;
    /** memberdescr - Description  */
    memberdescr: string;
    /** memberunit - Units  */
    memberunit: string;
    /** quantity - Quantity  */
    quantity: number;
    /** taxschedule - Schedule  */
    taxschedule: string;
    /** weight -   */
    weight: string;
  }

  /** price1: US Dollar */
  price1: {
    /** currency - Currency  */
    currency: string;
    /** discount - Default Discount %  */
    discount: number;
    /** discountdisplay - Default Discount %  */
    discountdisplay: number;
    /** pricelevel - Price Level  */
    pricelevel: string;
  }

  /** price2: British pound */
  price2: {
    /** currency - Currency  */
    currency: string;
    /** discount - Default Discount %  */
    discount: number;
    /** discountdisplay - Default Discount %  */
    discountdisplay: number;
    /** pricelevel - Price Level  */
    pricelevel: string;
  }

  /** price3: Canadian Dollar */
  price3: {
    /** currency - Currency  */
    currency: string;
    /** discount - Default Discount %  */
    discount: number;
    /** discountdisplay - Default Discount %  */
    discountdisplay: number;
    /** pricelevel - Price Level  */
    pricelevel: string;
  }

  /** price4: Euro */
  price4: {
    /** currency - Currency  */
    currency: string;
    /** discount - Default Discount %  */
    discount: number;
    /** discountdisplay - Default Discount %  */
    discountdisplay: number;
    /** pricelevel - Price Level  */
    pricelevel: string;
  }

  /** sitecategory: Site Category */
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





