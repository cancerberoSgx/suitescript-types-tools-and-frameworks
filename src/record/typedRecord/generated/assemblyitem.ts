// This file is auto generated, do not edit it. 




/** 
 * Build/Assembly Item Fields Definition.
 * Record's Internal Id: assemblyitem. 
 * Supports Custom Fields: true 
 */
export interface assemblyitemFields {
/** For demand planning purposes, choose another item if you want to examine the historical sales of an item other than the one on the current record. When this field is left blank, the source for historical data is the original item.

For example, if you are setting up Item A for demand planning, but Item A does not have an extensive sales history, you can choose Item B as an alternate source for historical data. Then, when demand calculations need to be made for Item A, NetSuite uses Item B&#x2019;s history for the calculations.

Note: You can select only an item that is of the same item type to be an alternate source. For example, if the original item is an inventory item, the alternate source item must also be an inventory item. */
  alternatedemandsourceitem?: string;
  /** Select the asset account that tracks the value of the inventory on hand for this item. Click &#x2014;New&#x2014; to set up a new account.

Go to Lists > Accounts for details about existing accounts. */
  assetaccount?: string;
  /**  */
  atpmethod: string;
  /**  */
  auctionquantity?: string;
  /**  */
  auctiontype?: string;
  /** Lead time is the average number of days between ordering this item from the vendor and receiving it.
    * Check the Auto-Calculate box if you want NetSuite to calculate the lead time based on the most recent order history of this item. This is calculated by taking the number of days between the order entry and receipt on the three most recent purchase orders, and dividing by three.
          o If there are multiple receipts for the item against the same purchase order, only the first receipt is used for the calculation.
          o Lead time calculation is not weighted by number of units received.
          o More recent purchase orders without receipts are ignored.
    * Clear the Auto-Calculate box to manually enter a lead time value in days. If the Auto-Calculate box is cleared and no value is entered, then the default value from the Set Up Inventory Management page is used. */
  autoleadtime?: boolean;
  /** The preferred stock level is the optimum quantity to maintain in stock of an item.

The quantity you enter here is used to determine your replenishment needs on the Order Items page. It is the quantity you want to have in stock after an order is placed.

    * Auto-Calculating &#x2013; Check the Auto-Calculate box if you want NetSuite to calculate the preferred stock level based on demand for the item.

      The preferred stock level is calculated as:

      (daily demand * number of days supply preferred).

      If no preferred stock level is identified, then the default preferred stock level is used from the Set Up Inventory Management page.


    * Manually Calculating &#x2013; Clear the Auto-Calculate box to manually enter the preferred stock quantity.

The preferred stock level you set is used to calculate the quantity of items to be ordered on the Order Items page. */
  autopreferredstocklevel?: boolean;
  /** Reorder Point is the quantity level at which you need to reorder or build more of this item.

    * Auto-Calculate &#x2013; Check the Auto-Calculate box to automatically calculate the reorder point based on demand for the item over time. The reorder point depends on the safety stock definition and is calculated as follows:
          o Without safety stock defined:
            Reorder point = (average lead time days * demand)
          o With safety stock defined in days:
            Reorder point = [(average lead time days + safety stock days) * demand]
          o With safety stock quantity defined:
            Reorder point = [(average lead time days * demand) + safety stock quantity)
    * Manually Calculate &#x2013; Clear the Auto-Calculate box to manually enter the point at which to reorder or build more of this item.

If you go to Home > User Preferences and place a check mark in the Inventory Level Warnings box, NetSuite reminds you when you have reached the reorder point. */
  autoreorderpoint?: boolean;
  /** Check this box to make this item available to partners with the Advanced Partner Center role for viewing.

These items are also available to partners with roles that are customized for the Advanced Partner Center and include view, create or edit access to item records. */
  availabletopartners?: boolean;
  /** This field displays the current average cost of the item across all locations. Using the weighted-average method, the average cost is calculated as the total units available during a period divided by the beginning inventory cost plus the cost of additions to inventory.
Note: The average cost calculated per location is listed for each location on the Locations subtab.
If you use Multiple Units of Measure, average cost is calculated using stock units. */
  averagecost?: number;
  /** Select the account to post to for variances in exchange rates associated with this item. These variances occur when there are exchange rate differences between the receipt and the bill for an item.

Note: After you select a variance account in this field, you can select another account at a later date if a change is necessary. Account changes are noted on the System Notes subtab of the History subtab of item records. */
  billexchratevarianceacct?: string;
  /** Choose the billing schedule you want to associate with this item.

When an item is associated with a billing schedule, the billing schedule appears by default when the item is added to an order.
 
Note: Forms must be customized to show schedules on lines. Read Applying Billing Schedules. 

Click New to enter a new billing schedule. */
  billingschedule?: string;
  /** Select the account to post to for variances in billing prices associated with this item. These variances occur when there is a difference in the price of an item showing on the purchase order and the price of an item showing on the bill.

Note: After you select a variance account in this field, you can select another account at a later date if a change is necessary. Account changes are noted on the System Notes subtab of the History subtab of item records. */
  billpricevarianceacct?: string;
  /** Select the account to post to for variances in billing quantities associated with this item. These variances occur when there is a difference in the quantity of an item showing on the receipt and the quantity of an item showing on the bill.

Note: After you select a variance account in this field, you can select another account at a later date if a change is necessary. Account changes are noted on the System Notes subtab of the History subtab of item records. */
  billqtyvarianceacct?: string;
  /** Checking this box instructs the work order to build sub-assemblies for this item by default.
Sub-assemblies are marked as Phantom on the Item Source, and the mark Sub-Assemblies Phantom box will be checked on the work order.

This default can be overridden by clearing the Mark Sub-Assemblies Phantom box or amending the item source . */
  buildentireassembly?: boolean;
  /** In the Work Order Lead Time field, enter the lead time (in days) to build one assembly in the base unit. */
  buildtime?: number;
  /**  */
  buyitnowprice?: number;
  /** Select a class to associate with this item.

Click New to enter a new class record.

Go to <_TABNAME=LIST_CLASS_> > <_TASKCATEGORY=LIST_CLASS_> > Classes for details about existing class records. */
  class?: string;
  /** Select the Cost of Goods Sold account that tracks the cost of this item. Click &#x2014;New&#x2014; to set up a new account.

Go to Lists > Accounts for details about existing accounts. */
  cogsaccount?: string;
  /**  */
  conditionenabled?: string;
  /**  */
  conditionhelpurl?: string;
  /**  */
  copydescription?: boolean;
  /** Enter the price you pay for this item.

If you do not enter a price, purchase orders for this item show the most recent purchase price by default.

If you select a preferred vendor for this item, the price is shown in the currency selected on the vendor's record. If no preferred vendor is selected, the price is shown in your base currency. */
  cost?: number;
  /** Select a cost category to associate with this item. View existing cost categories at <_TABNAME=LIST_ACCOUNTINGOTHERLIST_> > <_TASKCATEGORY= LIST_ACCOUNTINGOTHERLIST_> > Accounting Lists > Cost Category. For more details, click Help and read Creating Cost Categories. */
  costcategory: string;
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
  /** Select your inventory costing method.

The costing method you choose determines how Cost of Goods Sold (COGS) calculations are handled for costs associated with buying the same item at different purchase prices over a given period.

Costing methods include the following:

    * Average (weighted-average method) &#x2013; COGS are calculated as the total units available during a period divided by the beginning inventory cost plus the cost of additions to inventory. 
    * Group Average &#x2013; Group average costing enables you to track one average cost for an item across multiple locations within a defined group. For details, click Help and read Group Average Costing.
    * First-In, First-Out (FIFO) &#x2013; Using FIFO, the first goods purchased are assumed to be the first goods sold so that the ending inventory consists of the most recently purchased goods. This method is useful to track different shipments of similar products.
    * Last-In, First-Out (LIFO) &#x2013; Using LIFO, the last goods purchased are assumed to be the first goods sold so that the ending inventory consists of the first goods purchased. 
    * Standard &#x2013; Standard Costing enables you track standard costs for items and to track variances between these expected costs and actual costs.

In NetSuite, Average costing is the default costing method.

Note: Once the costing method is saved on the item record, it cannot later be changed. */
  costingmethod?: string;
  /** The costing method is displayed here.

A costing method determines how to handle costs associated with buying the same item at different purchase prices over a given period.

The costing method for serialized items is always Serialized. Serialized costing associates the purchase price of each item individually.

The costing method for lot numbered items is always Lot Numbered. Lot numbered costing associates the purchase price of the lot of items. */
  costingmethoddisplay?: string;
  /**  */
  costunits?: string;
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
  /**  */
  currency?: string;
  /** Select the form you want to use to enter this record.

You can select the standard form, a custom form you have already created, or select New to create a custom form. */
  customform?: string;
  /**  */
  custreturnvarianceaccount?: string;
  /** If a default revision has been identified, it is displayed in this field. */
  defaultrevision?: string;
  /** Select the deferred revenue account to associate with this item. If you use revenue recognition or advanced revenue management, the revenue from the sale of this item is deferred. */
  deferredrevenueaccount?: string;
  /** Check this box to delay recognizing revenue from the sale of this item. When this box is check, revenue recognition schedules or revenue plans are created with the status On Hold.

For more information, see the help topic Delaying Revenue Recognition for an Item. */
  deferrevrec?: boolean;
  /** Enter the default percentage of  Expected Demand Change to use for calculating item demand.

For example, if you know that new customers will increase sales of this item in the future, you can enter a 10% expected demand change to be added on to previous sales totals.

If no expected demand change percentage is entered, then the default value from the Set Up Inventory Management page is used. */
  demandmodifier?: number;
  /** Demand Time Fence defaults to the number entered in the Default Demand Time Fence field.
Verify the default or enter a number between zero and 365 to determine the demand time fence for this item. */
  demandtimefence?: number;
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
  /** Choose the appropriate category. Once a distribution category is defined on the item record, NetSuite can incorporate network transfers into demand planning for the item.

Note: The network and category you select must be associated with the subsidiary selected for the item in the Classifications section of the item record. For details about how categories are associated with subsidiaries, click Help and read Creating Distribution Categories. */
  distributioncategory?: string;
  /** Choose the appropriate network to determine the distribution categories available to you. If the distribution network field is blank, then distribution category must also be blank.

Note: The network and category you select must be associated with the subsidiary selected for the item in the Classifications section of the item record. For details about how networks are associated with subsidiaries, click Help and read Creating a Distribution Network. */
  distributionnetwork?: string;
  /** Check this box to hide the price of this item online.

This is useful for items you want to advertise but don't want to sell or for items that you track inventory for and want to display but are offered in combination with other items. */
  dontshowprice?: boolean;
  /** When the Automated Intercompany Drop Ship feature is enabled, this field defaults to the account specified in the Default Expense Account on Accounting Preference page, but you can override this account. The account you select must have the Eliminate Intercompany Transactions box checked. */
  dropshipexpenseaccount?: string;
  /**  */
  ebayhandlingtime?: string;
  /**  */
  ebayintlinsurancefee?: number;
  /**  */
  ebayintlpackagehandlingfee?: number;
  /**  */
  ebayintlshipinsurance?: string;
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
  /** In the Effective BOM Control field, choose one of the following:
    * Select Effective Date to manage dates manually on individual item records.
    * Select Revision Control to use revision records to manage effective and obsolete dates.

    Note: If you select Revision Control, you must always use revision control from

that point going forward for this item. */
  effectivebomcontrol: string;
  /**  */
  endauctionswhenoutofstock?: boolean;
  /** Check this box to apply the minimum quantity restriction on sales orders generated from NetSuite. When you clear this box, but enter a number in the Minimum Quantity field, the minimum quantity is only applied to web store orders. */
  enforceminqtyinternally?: boolean;
  /** Check this box to exclude a tab, category or item page from the site map. */
  excludefromsitemap?: boolean;
  /**  */
  externalid?: string;
  /**  */
  froogleproductfeed?: string;
  /** When the Use Item Cost as Transfer Cost preference is disabled, the transfer price on a transfer order is used as the item cost on the item receipt. Any difference between the actual cost and the transfer price posts to a Gain/Loss account when the item is shipped.

In this field, select the Gain/Loss account you prefer to use to post transfer cost discrepancies. The account you select must be different than the Asset or Cost of Goods Sold (COGS) account for the item.

You can choose an Income account, Other Income account, Expense account, or Other Expense account.
 
Note: If you have enabled the Expand Account Lists preference, you can choose any account in this field.
If you leave this field blank or select Use Income Account, then the income account for the item is used. */
  gainlossaccount?: string;
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
  handlingcostunits?: string;
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
  intercocogsaccount?: string;
  /**  */
  intercoincomeaccount?: string;
  /**  */
  internalid?: number;
  /**  */
  iscalculatedrate?: string;
  /** Check this box to set this item as variable-priced. This enables customers to enter their own prices for this item, such as for donations. */
  isdonationitem?: boolean;
  /** Check the Drop Ship Item box to have this item default as a drop ship item on sales orders.

When a sales transaction for a drop ship item is approved, a linked purchase order for the preferred vendor is automatically generated.

The vendor ships this item to your customer directly.

Note: an item can be a drop ship or a special order, but not both. */
  isdropshipitem?: boolean;
  /** Check this box to make the item available for purchase with Google Checkout. */
  isgcocompliant?: boolean;
  /** When you check this box, this item will no longer appear on a list unless you check the Show All box at the bottom of the list page. */
  isinactive?: boolean;
  /** Check this box to make this item available online in your Web site.

You cannot sell this item online unless you check this box. */
  isonline?: boolean;
  /** Check this box to mark the Item Source for this item on any bill of materials as Phantom by default.
The item source value will also be applied to any work order issued which uses this item.

The default value can be overridden on the item source field on the Bill of Materials or Work Order record. */
  isphantom?: boolean;
  /**  */
  isspecialorderitem?: boolean;
  /** If this box is checked, when this item is selected on a sales order, the box in the Create WO column is checked by default.

Clear this box to have the Create WO box default to cleared. */
  isspecialworkorderitem?: boolean;
  /** If this box is checked, indicates that at least one location allows store pickup of the item. If you clear the Allow Store Pickup box in the Locations sublist for all locations, this box is also cleared when you save the item record.

This field is read only. */
  isstorepickupallowed?: boolean;
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
  /** This field displays the most recent purchase price of the item.

This price is determined by the most recent transaction for the item that added positive inventory, such as a purchase receipt, inventory transfer or inventory adjustment. (This does not include item returns or assembly unbuilds.)

If two transactions are entered on the same day, the one entered later takes precedence and is used to calculate the last purchase price.

When you use the Multiple-Location Inventory feature, the following is true:
    * The last purchase price reflects the most recent transaction at any location. 
    * The Inventory subtab of inventory item records includes a link to the last positive-inventory transaction per location.
    * If multiple purchases are made on the same day with different prices and locations, then the highest price paid on that day becomes the last purchase price.

If you use Multiple Units of Measure, the last purchase price is calculated using purchase units. */
  lastpurchaseprice?: number;
  /** Lead time is the average number of days between ordering this item from the vendor and receiving it.
    * Auto-Calculating &#x2013; Check the Auto-Calculate box if you want NetSuite to calculate the lead time based on the most recent order history of this item. Lead time is calculated by taking the number of days between the order entry and receipt on the three most recent purchase orders, and dividing by three. If more than three purchase orders exist, all purchase orders within the period specified in the Order Analysis Interval field on the Inventory Management Preferences dialog will be used.
          o If there are multiple receipts for the item against the same purchase order, the calculation is made using the difference between the purchase order and the last receipt (the receipt that fully receives the order).
          o Lead time calculation is not weighted by number of units received.
          o More recent purchase orders without receipts are ignored.
    * Manually Calculating &#x2013; Clear the Auto-Calculate box to manually enter a lead time value in days. If the Auto-Calculate box is cleared and no value is entered, then the default value from the Set Up Inventory Management page is used. */
  leadtime?: number;
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
  /** Check the Match Bill to Receipt box if you want the Match Bill to Receipt box on transaction lines to be checked by default for this item. This enables you to generate variances based on vendor bill lines.  Then, on the Post Vendor Bill Variances page, you must select Bill in the Transaction Type field to generate the variance postings.

Purchase orders that include this item default to have this box checked and variances are generated based on vendor bill lines.

Clear this box if you want to generate variance postings based on purchase order lines rather than vendor bill lines and do not want the Match Bill to Receipt box to be checked by default on transaction lines for this item. Then, on the Post Vendor Bill Variances page, you must select Purchase Order in the Transaction Type field to generate the variance postings.

This preference defaults to be disabled. Even when enabled, this option can be changed on individual purchase order lines. */
  matchbilltoreceipt?: boolean;
  /** This field is used to control how the matrix item will be displayed in the Matrix Item Name/Number field.

Compose the order in which attributes and matrix options are displayed by selecting from the Insert Item Attribute and Insert Matrix Option dropdown lists.

Add custom separator characters to easier distinguish the various options. 

Example: Item Name: Fabric / Color / Waist / Length [Location] */
  matrixitemnametemplate?: string;
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
  minimumquantityunits?: string;
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
  /** Choose the location you want to associate with this item.
This location will automatically populate sales orders that display locations on a line-item basis.

This field is also used to calculate real-time shipping cost on web orders. If this item appears in your web site, select a Preferred Location.

When the Automatic Location Assignment feature is enabled, and the sales order location is automatically populated, the automatic location assignment engine is prevented from assigning locations. */
  preferredlocation?: string;
  /** The preferred stock level is the optimum quantity to maintain in stock of an item.

The quantity you enter here is used to determine your replenishment needs on the Order Items page. It is the quantity you want to have in stock after an order is placed.

    * Auto-Calculating &#x2013; Check the Auto-Calculate box if you want NetSuite to calculate the preferred stock level based on demand for the item.

      The preferred stock level is calculated as:
      (daily demand * number of days supply preferred).

      If no preferred stock level is identified, then the default preferred stock level is used from the Set Up Inventory Management page.

    * Manually Calculating &#x2013; Clear the Auto-Calculate box to manually enter the preferred stock quantity.

The preferred stock level you set is used to calculate the quantity of items to be ordered on the Order Items page. */
  preferredstockleveldays?: number;
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
  /** In the Production Price Variance Account field, choose the account to post a variance to when the assembly cost is higher or lower than expected due to the expense of items used in the assembly build.

For example, a variance is created if a build costs more because you use widgets that cost $30 each when you normally pay $20. */
  prodpricevarianceacct?: string;
  /** n the Production Quantity Variance Account field, choose the account to post a variance to when the assembly cost is higher or lower than expected due to the number of items used in the assembly build.

For example, a variance is created if a build costs more because you use 10 widgets when you normally use 8. */
  prodqtyvarianceacct?: string;
  /** Check this box if you produce this item for the purposes of the NAFTA Certificate of Origin. */
  producer?: boolean;
  /**  */
  productfeed?: string;
  /** Enter up to 999 characters of text for a description of this item to appear on vendor orders. Include the unit of measure in this description. */
  purchasedescription?: string;
  /** Enter the tolerance limit for the discrepancy between the amount on the vendor bill and purchase order. */
  purchaseorderamount?: string;
  /** Enter the tolerance limit for the discrepancy between the quantity on the vendor bill and purchase order. */
  purchaseorderquantity?: string;
  /** Enter the difference limit for the discrepancy between the quantity on the vendor bill and purchase order. */
  purchaseorderquantitydiff?: string;
  /** In the Purchase Price Variance Account field, choose the account to post a variance to when a purchase transaction calculates a cost variance. */
  purchasepricevarianceacct?: string;
  /** Select the unit you use to purchase this item from the vendor. */
  purchaseunit?: string;
  /** Select the pricing schedule you want to use to set prices for this item.

You can create new pricing schedules at <_TABNAME=EDIT_QUANTITYPRICINGSCHEDULE_> > <_TASKCATEGORY=EDIT_QUANTITYPRICINGSCHEDULE_> > Quantity Pricing Schedules > New.

Selecting a pricing schedule sets the Use Marginal Rates and Calculate Quantity Discounts fields. */
  quantitypricingschedule?: string;
  /**  */
  quantityreorderunits?: string;
  /** Enter the tolerance limit for the discrepancy between the amount on the vendor bill and item receipt. */
  receiptamount?: string;
  /** Enter the tolerance limit for the discrepancy between the quantity on the vendor bill and item receipt. */
  receiptquantity?: string;
  /** Enter the difference limit for the discrepancy between the quantity on the vendor bill and item receipt. */
  receiptquantitydiff?: string;
  /**  */
  refundgivenas?: string;
  /** Enter a description for the related items you show with this item in your Web site.

You can enter up to 999 characters of letters, numbers and basic HTML code.

You can also clear the View as HTML box below to enter and format text using the formatting options above.  This eliminates the need for HTML code. */
  relateditemsdescription?: string;
  /** Enter the quantity you prefer to order of this item each time. Then, the Order Items page suggests ordering a quantity of this item that is always multiple of the number you enter.

For example, if the vendor only accepts orders in multiples of one thousand, you would enter 1000 in this field. Then, the Order items page might suggest that you order 1000 or 2000, but not 1500.

Note: If you use the Multiple Units of Measure feature, the reorder multiple always functions in base units. */
  reordermultiple?: string;
  /** In the Reschedule In Days field, enter a number between one and 90 that is the maximum number of days that the order can be advanced from the current day. For example, if you enter 10 in this field, an order for this item can be moved up ten days earlier, but not eleven or more days. This field defaults to be blank.
Note: If this field is left blank, NetSuite does not make recommendations to reschedule orders for this item to a later date. */
  rescheduleindays?: number;
  /** In the Reschedule Out Days field, enter a number between one and 180 that is the maximum number of days that the order can be delayed from the current day. For example, if you enter 10 in this field, an order for this item can be moved to ten days later, but not eleven or more days. This field defaults to be blank.
Note: If this field is left blank, NetSuite does not make recommendations to reschedule orders for this item to a later date. */
  rescheduleoutdays?: number;
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
  /** Select a default revenue recognition template to associate with this item on sales transactions.

You must also select a Deferred Revenue Account in order to use revenue recognition. */
  revrecschedule?: string;
  /** Enter the amount of an item you prefer to keep in stock at all times. Safety stock can be a quantity or a number of days worth of stock.
 
This amount is used to auto-calculate the reorder point of an item.
    * To define safety stock as a quantity, enter a value.
    * To define safety stock as a number of days, enter a value in the field next to Days.

If no safety stock value is entered, then the default value from the Set Up Inventory Management page is used. */
  safetystocklevel?: number;
  /** Enter the amount of an item you prefer to keep in stock at all times. Safety stock can be a quantity or a number of days worth of stock.
 
This amount is used to auto-calculate the reorder point of an item.
    * To define safety stock as a quantity, enter a value.
    * To define safety stock as a number of days, enter a value in the field next to Days.

If no safety stock value is entered, then the default value from the Set Up Inventory Management page is used. */
  safetystockleveldays?: number;
  /**  */
  safetystocklevelunits?: string;
  /** Select the unit you use to sell this item to customers on sales transactions. */
  saleunit?: string;
  /** Select the unit of measure used to express the quantity entered in the Schedule B Quantity field. These two fields are used together to determine the amount represented by one of this item on the Schedule B form for Shipping Export Declarations.

For example, if you enter 5 in the Schedule B Quantity field, and you select kilogram in the Schedule B Code field, when you fulfill two of these items on an order, the Schedule B form presents the item's amount as 10 kilograms.

Schedule B is the form for Statistical Classification of Domestic and Foreign Commodities Exported from the U.S. See www.census.gov/foreign-trade for more information. */
  schedulebcode?: string;
  /** Enter the number for the Schedule B form for this item. */
  schedulebnumber?: string;
  /** Enter the numeric quantity in relation to the unit of measure entered in the Schedule B Code field. These two fields are used together to determine the amount represented by one of this item on the Schedule B form for Shipping Export Declarations.

For example, if you enter 5 in the Schedule B Quantity field, and you select kilogram in the Schedule B Code field, when you fulfill two of these items on an order, the Schedule B form presents the items&#x2019; amount as 10 kilograms. */
  schedulebquantity?: string;
  /** This is an expense account for scrapping that occurs during the work 
order completion. This account is required if WIP is checked for any 
locations. */
  scrapacct?: string;
  /** Enter alternative search keywords that customers might use to find this item using your Web store&#x2019;s internal search.

These can include synonyms, acronyms, alternate languages or misspellings.

These keywords are seen as equally important as the item name when searches are conducted. */
  searchkeywords?: string;
  /** Check the Seasonal Demand box to define how NetSuite analyzes customer demand for this item

.

Customer demand for an item is used to auto-calculate reorder points and preferred stock levels. An item&#x2019;s demand rate is calculated as the average sales quantity per day.

    * Historical Demand &#x2013; Clear the Seasonal Demand box to calculate the demand as average sales per day over a specific period.
      To set the number of months interval between analysis to evaluate sales orders and calculate item demand, go to Setup > Accounting > Set Up Inventory Management > Order Analysis Interval field.
    * Seasonal Demand &#x2013; Check the Seasonal Demand box to calculate the reorder quantity for this item based on inventory demand changes through the year.
      To set the number of months interval between analysis to evaluate sales orders and calculate item demand, go to Setup > Accounting > Set Up Inventory Management > Order Analysis Interval field. */
  seasonaldemand?: boolean;
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
  shippingcostunits?: string;
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
  /** Select the unit you use to stock this item in inventory. */
  stockunit?: string;
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
  /** Select one of the following Replenishment Methods to calculate item replenishment requirements:

    * Reorder Point &#x2013; To use Advanced Inventory Management settings for demand calculations instead of using Demand Planning.
      This is the default setting for new item records.
      Orders are created based on replenishment reminders generated from the Order Items page, Replenish Items, and Mass Create Work Orders.
    * Time Phased &#x2013; To create orders based on item demand plans instead of the Advanced Inventory Management settings.
      When you choose this setting, other fields on the record that are used by Advanced Inventory Management to calculate demand are no longer available. These unavailable fields are: Seasonal Demand, Build Point, Reorder Point, Preferred Stock Level, Safety Stock Days.
      The Auto calculate settings are cleared and cannot be changed for Demand Per Day, Reorder Point, Preferred Stock Level, Lead Time. */
  supplyreplenishmentmethod?: string;
  /** This field defaults to the number entered in the Default Planning Time Fence field. Verify the default or enter a number between zero and 365 to determine the planning time fence for this item. */
  supplytimefence?: number;
  /**  */
  taxable?: boolean;
  /** Select the tax schedule you want to apply to this item.

You can create new tax schedules at Setup > Accounting > Taxes > Tax Schedules > New. */
  taxschedule: string;
  /**  */
  templatesgroup?: string;
  /** Enter or accept the total value of this item. NetSuite generates this amount by multiplying your purchase price and your quantity on hand.

As you buy and sell additional inventory, NetSuite continues to calculate the total value. */
  totalvalue?: number;
  /** Check this box to track landed costs associated with this item.

Note: You must include an item that tracks landed costs on transactions you want to source for landed costs.

For example, on the Landed Costs subtab of item receipts, a vendor bill shows in the source transaction list only if the bill includes a landed cost item. */
  tracklandedcost?: boolean;
  /** Enter a transfer price on an item record to set the default value used as the transfer price on transfer orders. You can still override this default by entering a new transfer price for an item on the transfer order.

The use of the value in the Transfer Price field on a transfer order depends on your setting for the Use Item Cost as Transfer Cost preference.

When the Use Item Cost as Transfer Cost preference is enabled, the transfer price on a transfer order is not considered for posting cost accounting of line items. In the Transfer Price field, enter a declared value for the item to be used for shipping purposes only.

When the Use Item Cost as Transfer Cost preference is disabled, the transfer price on a transfer order is considered for posting cost accounting of line items. Items that do not have a transfer price set on a transfer order use a zero value for cost accounting calculations when the item is received.

Note: If the Transfer Price field is blank on the item record, a value of zero shows by default on the transfer order. Unless a transfer price value is entered on the transfer order, a value of zero is used for COGS calculations when the item is received. */
  transferprice?: number;
  /**  */
  transferpriceunits?: string;
  /** Select an account for posting variance amounts that result from unbuilding the assembly.

If no account is selected in this field, variance amounts for this item post to the Cost of Goods Sold (COGS) account. This field defaults to be blank.

When you unbuild an assembly item, sometimes there is a difference in the cost of the item at the time of assembly and the cost at the time of the unbuild. Any variance amount between the assembly cost and the unbuild cost posts to the account selected in this field. */
  unbuildvarianceaccount?: string;
  /** Select the type of units you use to purchase, stock and sell this item. */
  unitstype?: string;
  /** Enter a maximum of 999 characters in this field to identify an internal name or number to store the item's UPC Code. You can use the text you enter here when adding the item to transactions, searching, or viewing reports.
    * When you enter text in this field, the SKU/UPC field on item labels displays this UPC Code and prints in UPC bar code format.
    * When this field is clear, the SKU/UPC field on item labels displays the Item Name/Number and prints in Code-128 bar code format. */
  upccode?: string;
  /** Enter a short, descriptive name for this item to appear as part of its URL in the Web store.

Setting a name to show in the URL can result in better ranking from search engines.

If you leave this field blank, NetSuite terms and numbers are used as identifiers in the URL.

Note: Descriptive URL components are case sensitive. Descriptive URLs must match the case used in the URL Component field of an item record to point to the correct page. */
  urlcomponent?: string;
  /** Check this box to track bin locations for this item.

If you choose to use bins for this item, you must associate at least one bin with the item using the Bin Numbers subtab.

You can associate multiple items with one bin and multiple bins with one item. You can also designate one preferred bin per location. The preferred bin is listed by default on receipt and fulfillment transactions.

To create bin records that can be selected here, go to <_TABNAME=EDIT_BINNUMBERRECORD_> > <_TASKCATEGORY=EDIT_BINNUMBERRECORD_> > Bins > New. */
  usebins?: boolean;
  /** Check this box if you want the quantity discounts in the schedule to be applied to each pricing bracket separately.

For example, a schedule offers no discount for the first 100 items sold and a 5% discount if more than 100 are sold. If 150 items are sold, the first 100 are at normal price, and the other fifty items are sold at 5% discount.

Leave this box clear if you want the discount to apply to all of the items sold. */
  usemarginalrates?: boolean;
  /** If your vendor uses a name for this item that is different from the name you use, you can enter up to 60 characters as the vendor's name for this item here.

The vendor's name for this item prints in the Item column of purchase forms.

If you do not enter a vendor name, the item name prints in the Item column of purchase forms. If you have entered a display name, it will print on purchases instead of the item name. */
  vendorname?: string;
  /**  */
  vendreturnvarianceaccount?: string;
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
  weightunits?: string;
  /**  */
  willship?: string;
  /** This is an asset account used when a work order component issue is 
entered. This account is required if WIP is checked for any locations. */
  wipacct?: string;
  /** This is an expense account for any actual cost or average cost 
assemblies when the reconciliation amount cannot be returned to the 
asset account because the amount has been shipped. This account is 
required if WIP is checked for any locations. */
  wipvarianceacct?: string;
  /**  */
  yahooproductfeed?: string;
}





/** 
 * Build/Assembly Item Sublists Definition.
 * Record's Internal Id: assemblyitem. 
 * Supports Custom Fields: true 
 */
export interface assemblyitemSublists {
  
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

  /** billofmaterials: Bills of Materials */
  billofmaterials: {
    /** billofmaterials - Bill of Materials  */
    billofmaterials?: string;
    /** currentrevision - Current Revision  */
    currentrevision: string;
    /** defaultforlocation - Default for Location  */
    defaultforlocation: string;
    /** inactive - Inactive  */
    inactive: string;
    /** masterdefault - Master Default  */
    masterdefault: boolean;
    /** memo - Memo  */
    memo: string;
  }

  /** binnumber: Bin Numbers */
  binnumber: {
    /** binnumber - Bin Number  */
    binnumber?: string;
    /** location -   */
    location: string;
    /** locationactive - Location Active  */
    locationactive: string;
    /** onhand - On Hand  */
    onhand: number;
    /** onhandavail - Available  */
    onhandavail: number;
    /** preferredbin - Preferred (per Location)  */
    preferredbin: boolean;
  }

  /** itemvendor: Vendors */
  itemvendor: {
    /** itemvendorprice - Purchase Prices  */
    itemvendorprice: string;
    /** preferredvendor - Preferred  */
    preferredvendor: boolean;
    /** purchaseprice - Purchase Price  */
    purchaseprice: string;
    /** schedule - Schedule  */
    schedule: string;
    /** subsidiary - Subsidiary  */
    subsidiary: string;
    /** vendor - Vendor  */
    vendor?: string;
    /** vendorcode - Code  */
    vendorcode: string;
    /** vendorcurrencyname - Currency  */
    vendorcurrencyname: string;
  }

  /** locations: Locations */
  locations: {
    /** backwardconsumptiondays - Backward Consumption Days  */
    backwardconsumptiondays: number;
    /** defaultreturncost - Default Return Cost  */
    defaultreturncost: number;
    /** demandsource - Demand Source  */
    demandsource: string;
    /** demandtimefence - Demand Time Fence  */
    demandtimefence: number;
    /** fixedlotsize - Fixed Lot Size  */
    fixedlotsize: string;
    /** forwardconsumptiondays - Forward Consumption Days  */
    forwardconsumptiondays: number;
    /** iswip - WIP  */
    iswip: boolean;
    /** location -   */
    location: number;
    /** locationallowstorepickup - Allow Store Pickup  */
    locationallowstorepickup: boolean;
    /** periodiclotsizedays - Periods of Supply Increment  */
    periodiclotsizedays: number;
    /** periodiclotsizetype - Periods of Supply Type  */
    periodiclotsizetype: string;
    /** preferredstocklevel - Preferred Stock Level  */
    preferredstocklevel: number;
    /** reorderpoint - Build Point  */
    reorderpoint: number;
    /** rescheduleindays - Reschedule In Days  */
    rescheduleindays: number;
    /** rescheduleoutdays - Reschedule Out Days  */
    rescheduleoutdays: number;
    /** supplylotsizingmethod - Lot Sizing Method  */
    supplylotsizingmethod: string;
    /** supplytimefence - Planning Time Fence  */
    supplytimefence: number;
    /** supplytype - Supply Type  */
    supplytype: string;
  }

  /** member: Members */
  member: {
    /** effectivedate - Effective Date  */
    effectivedate: Date;
    /** effectiverevision - Effective Revision  */
    effectiverevision: string;
    /** item - Item  */
    item?: string;
    /** itemsource - Item Source  */
    itemsource: string;
    /** linenumber - Line Id  */
    linenumber: number;
    /** memberdescr - Description  */
    memberdescr: string;
    /** memberunit - Units  */
    memberunit: string;
    /** obsoletedate - Obsolete Date  */
    obsoletedate: Date;
    /** obsoleterevision - Obsolete Revision  */
    obsoleterevision: string;
    /** quantity - Quantity  */
    quantity?: string;
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





