// This file is auto generated, do not edit it. 

import { TypedRecord, TypedRecordImpl } from '../typedRecord';
import { Record } from 'N/record';




/** 
 * Inventory Part Fields Definition.
 * Record's Internal Id: inventoryitem. 
 * Supports Custom Fields: true 
 */
export interface inventoryitemFields {
/** For demand planning purposes, choose another item if you want to examine the historical sales of an item other than the one on the current record. When this field is left blank, the source for historical data is the original item.

For example, if you are setting up Item A for demand planning, but Item A does not have an extensive sales history, you can choose Item B as an alternate source for historical data. Then, when demand calculations need to be made for Item A, NetSuite uses Item B&#x2019;s history for the calculations.

Note: You can select only an item that is of the same item type to be an alternate source. For example, if the original item is an inventory item, the alternate source item must also be an inventory item. */
  alternatedemandsourceitem: string | undefined;
  /** Select the asset account that tracks the value of the inventory on hand for this item. Click &#x2014;New&#x2014; to set up a new account.

Go to Lists > Accounts for details about existing accounts. */
  assetaccount: string | undefined;
  /**  */
  atpmethod: string;
  /**  */
  auctionquantity: string | undefined;
  /**  */
  auctiontype: string | undefined;
  /** Lead time is the average number of days between ordering this item from the vendor and receiving it.
    * Check the Auto-Calculate box if you want NetSuite to calculate the lead time based on the most recent order history of this item. This is calculated by taking the number of days between the order entry and receipt on the three most recent purchase orders, and dividing by three.
          o If there are multiple receipts for the item against the same purchase order, only the first receipt is used for the calculation.
          o Lead time calculation is not weighted by number of units received.
          o More recent purchase orders without receipts are ignored.
    * Clear the Auto-Calculate box to manually enter a lead time value in days. If the Auto-Calculate box is cleared and no value is entered, then the default value from the Set Up Inventory Management page is used. */
  autoleadtime: boolean | undefined;
  /** The preferred stock level is the optimum quantity to maintain in stock of an item.

The quantity you enter here is used to determine your replenishment needs on the Order Items page. It is the quantity you want to have in stock after an order is placed.

    * Auto-Calculating &#x2013; Check the Auto-Calculate box if you want NetSuite to calculate the preferred stock level based on demand for the item.

      The preferred stock level is calculated as:

      (daily demand * number of days supply preferred).

      If no preferred stock level is identified, then the default preferred stock level is used from the Set Up Inventory Management page.


    * Manually Calculating &#x2013; Clear the Auto-Calculate box to manually enter the preferred stock quantity.

The preferred stock level you set is used to calculate the quantity of items to be ordered on the Order Items page. */
  autopreferredstocklevel: boolean | undefined;
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
  autoreorderpoint: boolean | undefined;
  /** Check this box to make this item available to partners with the Advanced Partner Center role for viewing.

These items are also available to partners with roles that are customized for the Advanced Partner Center and include view, create or edit access to item records. */
  availabletopartners: boolean | undefined;
  /** This field displays the current average cost of the item across all locations. Using the weighted-average method, the average cost is calculated as the total units available during a period divided by the beginning inventory cost plus the cost of additions to inventory.
Note: The average cost calculated per location is listed for each location on the Locations subtab.
If you use Multiple Units of Measure, average cost is calculated using stock units. */
  averagecost: string | undefined;
  /** Select the account to post to for variances in exchange rates associated with this item. These variances occur when there are exchange rate differences between the receipt and the bill for an item.

Note: After you select a variance account in this field, you can select another account at a later date if a change is necessary. Account changes are noted on the System Notes subtab of the History subtab of item records. */
  billexchratevarianceacct: string | undefined;
  /** Choose the billing schedule you want to associate with this item.

When an item is associated with a billing schedule, the billing schedule appears by default when the item is added to an order.
 
Note: Forms must be customized to show schedules on lines. Read Applying Billing Schedules. 

Click New to enter a new billing schedule. */
  billingschedule: string | undefined;
  /** Select the account to post to for variances in billing prices associated with this item. These variances occur when there is a difference in the price of an item showing on the purchase order and the price of an item showing on the bill.

Note: After you select a variance account in this field, you can select another account at a later date if a change is necessary. Account changes are noted on the System Notes subtab of the History subtab of item records. */
  billpricevarianceacct: string | undefined;
  /** Select the account to post to for variances in billing quantities associated with this item. These variances occur when there is a difference in the quantity of an item showing on the receipt and the quantity of an item showing on the bill.

Note: After you select a variance account in this field, you can select another account at a later date if a change is necessary. Account changes are noted on the System Notes subtab of the History subtab of item records. */
  billqtyvarianceacct: string | undefined;
  /**  */
  buyitnowprice: string | undefined;
  /** Select a class to associate with this item.

Click New to enter a new class record.

Go to <_TABNAME=LIST_CLASS_> > <_TASKCATEGORY=LIST_CLASS_> > Classes for details about existing class records. */
  class: string | undefined;
  /** Select the Cost of Goods Sold account that tracks the cost of this item. Click &#x2014;New&#x2014; to set up a new account.

Go to Lists > Accounts for details about existing accounts. */
  cogsaccount: string | undefined;
  /**  */
  conditionenabled: string | undefined;
  /**  */
  conditionhelpurl: string | undefined;
  /** Check this box to indicate that the item is subject to contingent revenue handling. When checked, revenue allocation is affected. */
  contingentrevenuehandling: boolean | undefined;
  /** Check this box to copy the purchase description from the item description you enter on a sales order.

Clear this box to enter a purchase description in the field above. */
  copydescription: boolean | undefined;
  /** Enter the price you pay for this item.

If you do not enter a price, purchase orders for this item show the most recent purchase price by default.

If you select a preferred vendor for this item, the price is shown in the currency selected on the vendor's record. If no preferred vendor is selected, the price is shown in your base currency. */
  cost: string | undefined;
  /** Select a cost category to associate with this item. View existing cost categories at <_TABNAME=LIST_ACCOUNTINGOTHERLIST_> > <_TASKCATEGORY= LIST_ACCOUNTINGOTHERLIST_> > Accounting Lists > Cost Category. For more details, click Help and read Creating Cost Categories. */
  costcategory: string;
  /** Enter an Item Defined Cost amount. */
  costestimate: string | undefined;
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
  costestimatetype: string | undefined;
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
  costingmethod: string | undefined;
  /** The costing method is displayed here.

A costing method determines how to handle costs associated with buying the same item at different purchase prices over a given period.

The costing method for serialized items is always Serialized. Serialized costing associates the purchase price of each item individually.

The costing method for lot numbered items is always Lot Numbered. Lot numbered costing associates the purchase price of the lot of items. */
  costingmethoddisplay: string | undefined;
  /**  */
  costunits: string | undefined;
  /** Enter the name of the country where this item is manufactured.

This information is used for customs purposes when shipping. */
  countryofmanufacture: string | undefined;
  /**  */
  createddate: string | undefined;
  /** Select the event that triggers creation of revenue recognition plans. Match the event with the amount source of the item's revenue recognition rule.

    * Revenue Arrangement Creation - Revenue plans can be created when the revenue arrangement is created. Use this option with rules that have Event-Amount as the Amount Source.
    * Billing - Revenue plans can be created when the sales order is billed and from stand-alone cash sales, invoices, credit memos, and cash refunds. Use this option with rules that have Event-Percent based on amount as the Amount Source.
    * Fulfillment - This option is available only when Advanced Shipping is enabled. Revenue plans can be created upon fulfillment. Use this option with rules that have Event-Percent based on quantity as the Amount Source.
    * Project Progress - This option is available only when the Projects feature is enabled. Use this option with rules that have Event-Percent Complete as the Amount Source. */
  createrevenueplanson: string | undefined;
  /** The purchase price for this item is listed in this currency.

The currency selected on the preferred vendor record is shown in this field.

If there is no preferred vendor selected, your base currency is shown. */
  currency: string | undefined;
  /** Select the form you want to use to enter this record.

You can select the standard form, a custom form you have already created, or select New to create a custom form. */
  customform: string | undefined;
  /**  */
  custreturnvarianceaccount: string | undefined;
  /** Select the deferred revenue account to associate with this item. If you use revenue recognition or advanced revenue management, the revenue from the sale of this item is deferred. */
  deferredrevenueaccount: string | undefined;
  /** Check this box to delay recognizing revenue from the sale of this item. When this box is check, revenue recognition schedules or revenue plans are created with the status On Hold.

For more information, see the help topic Delaying Revenue Recognition for an Item. */
  deferrevrec: boolean | undefined;
  /** Enter the default percentage of  Expected Demand Change to use for calculating item demand.

For example, if you know that new customers will increase sales of this item in the future, you can enter a 10% expected demand change to be added on to previous sales totals.

If no expected demand change percentage is entered, then the default value from the Set Up Inventory Management page is used. */
  demandmodifier: string | undefined;
  /** Demand Time Fence defaults to the number entered in the Default Demand Time Fence field.
Verify the default or enter a number between zero and 365 to determine the demand time fence for this item. */
  demandtimefence: number | undefined;
  /** Choose a department to associate with this item.

Click New to enter a new department record.

Go to <_TABNAME=LIST_DEPARTMENT_> > <_TASKCATEGORY=LIST_DEPARTMENT_> > Departments for details about existing department records. */
  department: string | undefined;
  /** Check this box to disable advanced revenue management for this item. When checked, posting transactions that include this item post directly to the item revenue account. No revenue element or revenue arrangement is created. When you check this box, the Deferred Revenue Account on the Accounting subtab is disabled.

When you create sales transactions that include items that have this box checked, all the items in the transaction must have the box checked. You cannot mix items that post directly to revenue with items that post to deferred revenue in the same transaction. This restriction also applies to kit items. All items in a kit must post either to revenue or to deferred revenue.

You cannot check or clear the box after the item has been used in a transaction with advanced revenue management.

By default, this box is not checked. */
  directrevenueposting: boolean | undefined;
  /**  */
  displayinebaystore: boolean | undefined;
  /** You can enter an optional name for this item in addition to the Item Name. If you are integrating with a Yahoo! store, this field is imported from Yahoo!.

The display name prints in the Item column of sales forms. If this item is a member of a kit, this name appears in the Item column when the Print Items box is checked.

If you do not enter a display name, the item name appears on printed forms. */
  displayname: string | undefined;
  /** Choose the appropriate category. Once a distribution category is defined on the item record, NetSuite can incorporate network transfers into demand planning for the item.

Note: The network and category you select must be associated with the subsidiary selected for the item in the Classifications section of the item record. For details about how categories are associated with subsidiaries, click Help and read Creating Distribution Categories. */
  distributioncategory: string | undefined;
  /** Choose the appropriate network to determine the distribution categories available to you. If the distribution network field is blank, then distribution category must also be blank.

Note: The network and category you select must be associated with the subsidiary selected for the item in the Classifications section of the item record. For details about how networks are associated with subsidiaries, click Help and read Creating a Distribution Network. */
  distributionnetwork: string | undefined;
  /** Check this box to hide the price of this item online.

This is useful for items you want to advertise but don't want to sell or for items that you track inventory for and want to display but are offered in combination with other items. */
  dontshowprice: boolean | undefined;
  /** When the Automated Intercompany Drop Ship feature is enabled, this field defaults to the account specified in the Default Expense Account on Accounting Preference page, but you can override this account. The account you select must have the Eliminate Intercompany Transactions box checked. */
  dropshipexpenseaccount: string | undefined;
  /**  */
  ebayhandlingtime: string | undefined;
  /**  */
  ebayintlinsurancefee: string | undefined;
  /**  */
  ebayintlpackagehandlingfee: string | undefined;
  /**  */
  ebayintlshipinsurance: string | undefined;
  /**  */
  ebayintlshippingitem1: string | undefined;
  /**  */
  ebayintlshippingitem2: string | undefined;
  /**  */
  ebayintlshippingitem3: string | undefined;
  /**  */
  ebayisintlcalculatedrate: string | undefined;
  /**  */
  ebayisirregularpackage: boolean | undefined;
  /**  */
  ebayitemdescription: string | undefined;
  /**  */
  ebayitemlocdisplay: string | undefined;
  /**  */
  ebayitemloczipcode: string | undefined;
  /**  */
  ebayitemlots: number | undefined;
  /**  */
  ebayitemsubtitle: string | undefined;
  /**  */
  ebayitemtitle: string | undefined;
  /**  */
  ebayitemweightamt: string | undefined;
  /**  */
  ebaylayout: string | undefined;
  /**  */
  ebaypackagetype: string | undefined;
  /**  */
  ebaypagecounter: string | undefined;
  /**  */
  ebayrelistingoption: string | undefined;
  /**  */
  ebaytheme: string | undefined;
  /**  */
  ebaythemegroup: string | undefined;
  /**  */
  endauctionswhenoutofstock: boolean | undefined;
  /** Check this box to apply the minimum quantity restriction on sales orders generated from NetSuite. When you clear this box, but enter a number in the Minimum Quantity field, the minimum quantity is only applied to web store orders. */
  enforceminqtyinternally: boolean | undefined;
  /** Check this box to exclude a tab, category or item page from the site map. */
  excludefromsitemap: boolean | undefined;
  /**  */
  externalid: string | undefined;
  /** If this item is displayed on the home page of your Web site, enter a featured description for this item.

This description appears below the item's store display name on the Home page of your store or site.

You can enter up to 999 characters including basic HTML code.

Enter and format text using the formatting options, or click the HTML Source Code link to enter HTML. */
  featureddescription: string | undefined;
  /** Choose the fraud risk level for this item.

This setting is used by the CyberSource Decision Manager when determining which transactions might be fraudulent. */
  fraudrisk: string | undefined;
  /**  */
  froogleproductfeed: string | undefined;
  /** When the Use Item Cost as Transfer Cost preference is disabled, the transfer price on a transfer order is used as the item cost on the item receipt. Any difference between the actual cost and the transfer price posts to a Gain/Loss account when the item is shipped.

In this field, select the Gain/Loss account you prefer to use to post transfer cost discrepancies. The account you select must be different than the Asset or Cost of Goods Sold (COGS) account for the item.

You can choose an Income account, Other Income account, Expense account, or Other Expense account.
 
Note: If you have enabled the Expand Account Lists preference, you can choose any account in this field.
If you leave this field blank or select Use Income Account, then the income account for the item is used. */
  gainlossaccount: string | undefined;
  /**  */
  gallery: boolean | undefined;
  /**  */
  galleryfeatured: boolean | undefined;
  /**  */
  gifttypeexpressship: boolean | undefined;
  /**  */
  gifttypegiftwrap: boolean | undefined;
  /**  */
  gifttypeshiptorecipient: boolean | undefined;
  /** As an option, you may enter a handling cost for this item in dollars.

You must also create a shipping item for per-item shipping and handling costs at Lists > Shipping Items > New.

When this item is selected on sales orders, invoices or cash sales, the appropriate shipping and handling charges are automatically calculated. */
  handlingcost: string | undefined;
  /**  */
  handlingcostunits: string | undefined;
  /**  */
  handlinggroup: string | undefined;
  /**  */
  imagesgroup: string | undefined;
  /**  */
  imageslocation: string | undefined;
  /** Check the Include Children box to share the item with all the sub-subsidiaries associated with each subsidiary selected in the Subsidiary field.

Note: When sharing items across subsidiaries, all of the options selected on the item record must be compatible across subsidiaries.
 
For example, when entering an inventory item to be shared across subsidiaries, you should select Income and Asset accounts on the item record that are also shared across the same subsidiaries. */
  includechildren: boolean | undefined;
  /** Select the income account to associate with this item. When no income account is selected, the item does not show in the Item dropdown list for sales transactions. */
  incomeaccount: string | undefined;
  /**  */
  intercocogsaccount: string | undefined;
  /** Select the account to use for intercompany deferred revenue. This account is used to record transactions between subsidiaries in NetSuite OneWorld accounts. The options include only accounts with the Eliminate Intercompany Transactions box checked.

For more more information about intercompany transactions, see the help topic Understanding Automated Intercompany Management. */
  intercodefrevaccount: string | undefined;
  /**  */
  intercoincomeaccount: string | undefined;
  /**  */
  internalid: number | undefined;
  /**  */
  iscalculatedrate: string | undefined;
  /** Check this box to set this item as variable-priced. This enables customers to enter their own prices for this item, such as for donations. */
  isdonationitem: boolean | undefined;
  /** Check the Drop Ship Item box to have this item default as a drop ship item on sales orders.

When a sales transaction for a drop ship item is approved, a linked purchase order for the preferred vendor is automatically generated.

The vendor ships this item to your customer directly.

Note: an item can be a drop ship or a special order, but not both. */
  isdropshipitem: boolean | undefined;
  /** Check this box to make the item available for purchase with Google Checkout. */
  isgcocompliant: boolean | undefined;
  /** When you check this box, this item will no longer appear on a list unless you check the Show All box at the bottom of the list page. */
  isinactive: boolean | undefined;
  /** Check this box to make this item available online in your Web site.

You cannot sell this item online unless you check this box. */
  isonline: boolean | undefined;
  /** Check this box if you want this item to default as a special order on sales transactions.

When a sales transaction for a special order item is approved, a linked purchase order is automatically generated. Then, the order cannot be fulfilled until the linked purchase order is received.

Special order items can be used for custom orders or "just-in-time" inventory.

Important: You must identify a preferred vendor and a purchase price on an item record in order for that item to be selected as a special order.

Note: An item can be a drop ship or a special order, but not both. */
  isspecialorderitem: boolean | undefined;
  /** If this box is checked, indicates that at least one location allows store pickup of the item. If you clear the Allow Store Pickup box in the Locations sublist for all locations, this box is also cleared when you save the item record.

This field is read only. */
  isstorepickupallowed: boolean | undefined;
  /** Select the product this item is associated with.

Product records are tracked with versions and builds for issue management.

To create product records, go to <_TABNAME=ADMI_ISSUEPRODUCT_> > <_TASKCATEGORY=ADMI_ISSUEPRODUCT_> > Products > New. */
  issueproduct: string | undefined;
  /**  */
  itemcondition: string | undefined;
  /**  */
  itemhandlingfee: string | undefined;
  /** Type up to 60 characters for the name of this item. This name appears in lists on transactions.

If you have the option of entering a display name and do not, the item name prints in the Item column of sales forms.

If you have the option to enter a vendor name and do not, the item name prints in the Item column of purchase forms. If you have entered a display name, it will print on purchases instead of the item name. */
  itemid: string;
  /**  */
  iteminsurancefee: string | undefined;
  /**  */
  itemoptions: string | undefined;
  /** The item revenue category is a classification for items that have similar characteristics and revenue allocation requirements. It is used in the fair value price list. */
  itemrevenuecategory: string | undefined;
  /**  */
  itemshipinsurance: string | undefined;
  /**  */
  itemtype: string | undefined;
  /**  */
  lastmodifieddate: string | undefined;
  /** This field displays the most recent purchase price of the item.

This price is determined by the most recent transaction for the item that added positive inventory, such as a purchase receipt, inventory transfer or inventory adjustment. (This does not include item returns or assembly unbuilds.)

If two transactions are entered on the same day, the one entered later takes precedence and is used to calculate the last purchase price.

When you use the Multiple-Location Inventory feature, the following is true:
    * The last purchase price reflects the most recent transaction at any location. 
    * The Inventory subtab of inventory item records includes a link to the last positive-inventory transaction per location.
    * If multiple purchases are made on the same day with different prices and locations, then the highest price paid on that day becomes the last purchase price.

If you use Multiple Units of Measure, the last purchase price is calculated using purchase units. */
  lastpurchaseprice: string | undefined;
  /** Lead time is the average number of days between ordering this item from the vendor and receiving it.
    * Auto-Calculating &#x2013; Check the Auto-Calculate box if you want NetSuite to calculate the lead time based on the most recent order history of this item. Lead time is calculated by taking the number of days between the order entry and receipt on the three most recent purchase orders, and dividing by three. If more than three purchase orders exist, all purchase orders within the period specified in the Order Analysis Interval field on the Inventory Management Preferences dialog will be used.
          o If there are multiple receipts for the item against the same purchase order, the calculation is made using the difference between the purchase order and the last receipt (the receipt that fully receives the order).
          o Lead time calculation is not weighted by number of units received.
          o More recent purchase orders without receipts are ignored.
    * Manually Calculating &#x2013; Clear the Auto-Calculate box to manually enter a lead time value in days. If the Auto-Calculate box is cleared and no value is entered, then the default value from the Set Up Inventory Management page is used. */
  leadtime: number | undefined;
  /**  */
  listimmediate: string | undefined;
  /**  */
  listingduration: string | undefined;
  /**  */
  listingstartdate: Date | undefined;
  /**  */
  listingstarttime: string | undefined;
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
  location: string | undefined;
  /** Enter the name of the company that manufactures this item. */
  manufacturer: string | undefined;
  /** Enter the address of the manufacturer.

This is necessary to fill out international shipping forms when you sell and ship this item. */
  manufactureraddr1: string | undefined;
  /** Enter the city location of the manufacturer of this item.

This is necessary to automatically fill out international forms when you ship this item across borders. */
  manufacturercity: string | undefined;
  /** Enter the state where this item's manufacturer is located.

This is necessary to fill out international forms when you ship this item. */
  manufacturerstate: string | undefined;
  /** Enter the Harmonized System (HS) tariff code number or the Harmonized Tariff Schedule (HTS) code number.

This number should be six to ten characters. */
  manufacturertariff: string | undefined;
  /** Enter the Tax ID Number (TIN) for the manufacturer. */
  manufacturertaxid: string | undefined;
  /** Enter the postal code of the location of this manufacturer.

This is necessary to create international forms when you ship this item. */
  manufacturerzip: string | undefined;
  /** Check the Match Bill to Receipt box if you want the Match Bill to Receipt box on transaction lines to be checked by default for this item. This enables you to generate variances based on vendor bill lines.  Then, on the Post Vendor Bill Variances page, you must select Bill in the Transaction Type field to generate the variance postings.

Purchase orders that include this item default to have this box checked and variances are generated based on vendor bill lines.

Clear this box if you want to generate variance postings based on purchase order lines rather than vendor bill lines and do not want the Match Bill to Receipt box to be checked by default on transaction lines for this item. Then, on the Post Vendor Bill Variances page, you must select Purchase Order in the Transaction Type field to generate the variance postings.

This preference defaults to be disabled. Even when enabled, this option can be changed on individual purchase order lines. */
  matchbilltoreceipt: boolean | undefined;
  /** This field is used to control how the matrix item will be displayed in the Matrix Item Name/Number field.

Compose the order in which attributes and matrix options are displayed by selecting from the Insert Item Attribute and Insert Matrix Option dropdown lists.

Add custom separator characters to easier distinguish the various options. 

Example: Item Name: Fabric / Color / Waist / Length [Location] */
  matrixitemnametemplate: string | undefined;
  /**  */
  matrixtype: string | undefined;
  /** If you checked the Variable Amount box, enter the maximum amount that can be paid or donated for this item. */
  maxdonationamount: string | undefined;
  /**  */
  maximumquantity: string | undefined;
  /** Enter the Meta Tag HTML you want to appear in the < head > section of this item page.

Meta tags enable your Web site to be found by search engines. */
  metataghtml: string | undefined;
  /** Enter the lowest quantity that customers can purchase.  Web store customers receive a warning and cannot check out if they enter an item quantity below this minimum. 

 Leave this field empty to allow customers to check out with no minimum quantity restrictions.

You can edit this warning at Setup > Site Builder/SuiteCommerce Advanced > Customize Text. */
  minimumquantity: string | undefined;
  /**  */
  minimumquantityunits: string | undefined;
  /**  */
  mossapplies: boolean | undefined;
  /** MPN (Manufacturers Part Number) - Enter the part number used by the manufacturer to identify this item. */
  mpn: string | undefined;
  /** Check the Multiple Manufacture Addresses box if this manufacturer uses more than one address. */
  multmanufactureaddr: boolean | undefined;
  /** Enter the name of the NexTag category this item should be included in.

This category is included in the product feeds you can export at Setup > Web Site > Product Feeds.

Go to www.nextag.com for more information on the available categories.

This is an optional field only displayed for the following item records: Kit/Package, Non-inventory Item for Sale, Non-inventory Item for Resale, Assembly (lot and serialized), and Inventory (lot and serialized). */
  nextagcategory: string | undefined;
  /**  */
  nextagproductfeed: string | undefined;
  /** If you opted to not show a price online, enter the message that should show instead of the price.

For example, you might enter "Call for Price." */
  nopricemessage: string | undefined;
  /**  */
  numactivelistings: number | undefined;
  /**  */
  numcurrentlylisted: number | undefined;
  /** Check this box to offer support for this particular item.

By offering support for items, customers can select on case records which item they are having trouble with. */
  offersupport: boolean | undefined;
  /** Select a custom out of stock behavior for this item. It overwrites the overall site&#x2019;s out of stock behavior. Your choices are:

    * Default - Uses the behavior selected in the Web Store Out of Stock Items field at Setup > Web Site > Setup Tasks > Set Up Web Site > Shopping.
    * Disallow back orders but display out of stock messages
    * Allow back orders but display out of stock messages
    * Remove items when out of stock
    * Allow back orders with no out of stock message */
  outofstockbehavior: string | undefined;
  /** You can enter a custom out of stock message for this item. The message here replaces the default out of stock message. */
  outofstockmessage: string | undefined;
  /** Choose how to determine the quantity for the purpose of pricing:
    * By Line Quantity - pricing is applied according to the quantity included in the line item.
    * By Overall Item Quantity - pricing is applied for all line items for the same item on a transaction.
    * By Overall Parent Quantity - pricing is applied for all items with the same parent item on the transaction. This can be useful for applying quantity pricing to matrix items.
    * By Overall Schedule Quantity - pricing is applied to all items that use the same pricing schedule that are included in the transaction. */
  overallquantitypricingtype: string | undefined;
  /**  */
  packageheight: string | undefined;
  /**  */
  packagelength: string | undefined;
  /**  */
  packagewidth: string | undefined;
  /** Enter the text you want to appear as the page's title for this item. This text appears in the browser tab. Use a descriptive title for the item page, this can help achieve better results with search engine ranking. */
  pagetitle: string | undefined;
  /** If you want this item to be a subitem, select the parent item here. */
  parent: string | undefined;
  /** Set the NAFTA criterion for this item. */
  preferencecriterion: string | undefined;
  /** Choose the location you want to associate with this item.
This location will automatically populate sales orders that display locations on a line-item basis.

This field is also used to calculate real-time shipping cost on web orders. If this item appears in your web site, select a Preferred Location.

When the Automatic Location Assignment feature is enabled, and the sales order location is automatically populated, the automatic location assignment engine is prevented from assigning locations. */
  preferredlocation: string | undefined;
  /** The preferred stock level is the optimum quantity to maintain in stock of an item.

The quantity you enter here is used to determine your replenishment needs on the Order Items page. It is the quantity you want to have in stock after an order is placed.

    * Auto-Calculating &#x2013; Check the Auto-Calculate box if you want NetSuite to calculate the preferred stock level based on demand for the item.

      The preferred stock level is calculated as:
      (daily demand * number of days supply preferred).

      If no preferred stock level is identified, then the default preferred stock level is used from the Set Up Inventory Management page.

    * Manually Calculating &#x2013; Clear the Auto-Calculate box to manually enter the preferred stock quantity.

The preferred stock level you set is used to calculate the quantity of items to be ordered on the Order Items page. */
  preferredstockleveldays: number | undefined;
  /** Select the pricing group this item is a member of.

Using pricing groups allows you to assign customer-specific price levels for a group of items.

You can create new pricing groups at <_TABNAME=EDIT_OTHERLIST_> > <_TABNAME=EDIT_OTHERLIST_> > Accounting Lists > New > Pricing Group. */
  pricinggroup: string | undefined;
  /**  */
  primarycatdisplayname: string | undefined;
  /**  */
  primarycategory: number | undefined;
  /** Check this box if you produce this item for the purposes of the NAFTA Certificate of Origin. */
  producer: boolean | undefined;
  /**  */
  productfeed: string | undefined;
  /** Enter up to 999 characters of text for a description of this item to appear on vendor orders. Include the unit of measure in this description. */
  purchasedescription: string | undefined;
  /** Enter the tolerance limit for the discrepancy between the amount on the vendor bill and purchase order. */
  purchaseorderamount: string | undefined;
  /** Enter the tolerance limit for the discrepancy between the quantity on the vendor bill and purchase order. */
  purchaseorderquantity: string | undefined;
  /** Enter the difference limit for the discrepancy between the quantity on the vendor bill and purchase order. */
  purchaseorderquantitydiff: string | undefined;
  /** In the Purchase Price Variance Account field, choose the account to post a variance to when a purchase transaction calculates a cost variance. */
  purchasepricevarianceacct: string | undefined;
  /** Select the unit you use to purchase this item from the vendor. */
  purchaseunit: string | undefined;
  /** Select the pricing schedule you want to use to set prices for this item.

You can create new pricing schedules at <_TABNAME=EDIT_QUANTITYPRICINGSCHEDULE_> > <_TASKCATEGORY=EDIT_QUANTITYPRICINGSCHEDULE_> > Quantity Pricing Schedules > New.

Selecting a pricing schedule sets the Use Marginal Rates and Calculate Quantity Discounts fields. */
  quantitypricingschedule: string | undefined;
  /**  */
  quantityreorderunits: string | undefined;
  /** Enter the tolerance limit for the discrepancy between the amount on the vendor bill and item receipt. */
  receiptamount: string | undefined;
  /** Enter the tolerance limit for the discrepancy between the quantity on the vendor bill and item receipt. */
  receiptquantity: string | undefined;
  /** Enter the difference limit for the discrepancy between the quantity on the vendor bill and item receipt. */
  receiptquantitydiff: string | undefined;
  /**  */
  refundgivenas: string | undefined;
  /** Enter a description for the related items you show with this item in your Web site.

You can enter up to 999 characters of letters, numbers and basic HTML code.

You can also clear the View as HTML box below to enter and format text using the formatting options above.  This eliminates the need for HTML code. */
  relateditemsdescription: string | undefined;
  /** Enter the quantity you prefer to order of this item each time. Then, the Order Items page suggests ordering a quantity of this item that is always multiple of the number you enter.

For example, if the vendor only accepts orders in multiples of one thousand, you would enter 1000 in this field. Then, the Order items page might suggest that you order 1000 or 2000, but not 1500.

Note: If you use the Multiple Units of Measure feature, the reorder multiple always functions in base units. */
  reordermultiple: string | undefined;
  /** In the Reschedule In Days field, enter a number between one and 90 that is the maximum number of days that the order can be advanced from the current day. For example, if you enter 10 in this field, an order for this item can be moved up ten days earlier, but not eleven or more days. This field defaults to be blank.
Note: If this field is left blank, NetSuite does not make recommendations to reschedule orders for this item to a later date. */
  rescheduleindays: number | undefined;
  /** In the Reschedule Out Days field, enter a number between one and 180 that is the maximum number of days that the order can be delayed from the current day. For example, if you enter 10 in this field, an order for this item can be moved to ten days later, but not eleven or more days. This field defaults to be blank.
Note: If this field is left blank, NetSuite does not make recommendations to reschedule orders for this item to a later date. */
  rescheduleoutdays: number | undefined;
  /**  */
  reserveprice: string | undefined;
  /**  */
  returnpolicy: string | undefined;
  /**  */
  returnpolicydetails: string | undefined;
  /**  */
  returnshippingpaidby: string | undefined;
  /**  */
  returnswithin: string | undefined;
  /** Select a revenue allocation group to use in GroupSum functions in fair value formulas. The value you select here is the default. You can change it on the revenue element. */
  revenueallocationgroup: string | undefined;
  /** Select the revenue rule to use by default for this item in a revenue arrangement.

Be sure the rule you select has an Amount Source that is appropriate for the value you select in the Create Revenue Plans On field. For more information, see the field level help for Create Revenue Plans On. */
  revenuerecognitionrule: string | undefined;
  /** Select a revenue rule to use for forecast revenue recognition plans. The default is determined by the same accounting preference as the Revenue Recognition Rule.

You may select the same rule or a different rule for actual and forecast rules. Percent complete rules are not available as forecast rules. For information about forecast revenue plans for project progress, see Working with Percent-Complete Revenue Recognition Plans. */
  revrecforecastrule: string;
  /** Select the account to use for the foreign currency adjustment during reclassification.

You can select any account with an account type of income, other income, expense, or other expense, including the gain and loss accounts generated by the system after qualifying revaluation transactions. You can change the Foreign Currency Adjustment Account on the revenue element before revenue recognition plans are created. */
  revreclassfxaccount: string | undefined;
  /** Select a default revenue recognition template to associate with this item on sales transactions.

You must also select a Deferred Revenue Account in order to use revenue recognition. */
  revrecschedule: string | undefined;
  /** Enter the amount of an item you prefer to keep in stock at all times. Safety stock can be a quantity or a number of days worth of stock.
 
This amount is used to auto-calculate the reorder point of an item.
    * To define safety stock as a quantity, enter a value.
    * To define safety stock as a number of days, enter a value in the field next to Days.

If no safety stock value is entered, then the default value from the Set Up Inventory Management page is used. */
  safetystocklevel: number | undefined;
  /** Enter the amount of an item you prefer to keep in stock at all times. Safety stock can be a quantity or a number of days worth of stock.
 
This amount is used to auto-calculate the reorder point of an item.
    * To define safety stock as a quantity, enter a value.
    * To define safety stock as a number of days, enter a value in the field next to Days.

If no safety stock value is entered, then the default value from the Set Up Inventory Management page is used. */
  safetystockleveldays: number | undefined;
  /**  */
  safetystocklevelunits: string | undefined;
  /** Enter a sales description for this item.

You can enter letters and numbers. There is a 999 character limit.

The sales description displays on transactions such as sales orders, cash sales and invoices.

If you use the Web Store feature, the sales description displays immediately under the item's store display name on item list pages in your store or site, if you have not entered a store description for an item. Enter the store description on the Store subtab of the item record.

The sales description also displays by default when the item is in the Web store shopping cart. */
  salesdescription: string | undefined;
  /** Select the unit you use to sell this item to customers on sales transactions. */
  saleunit: string | undefined;
  /** Select the unit of measure used to express the quantity entered in the Schedule B Quantity field. These two fields are used together to determine the amount represented by one of this item on the Schedule B form for Shipping Export Declarations.

For example, if you enter 5 in the Schedule B Quantity field, and you select kilogram in the Schedule B Code field, when you fulfill two of these items on an order, the Schedule B form presents the item's amount as 10 kilograms.

Schedule B is the form for Statistical Classification of Domestic and Foreign Commodities Exported from the U.S. See www.census.gov/foreign-trade for more information. */
  schedulebcode: string | undefined;
  /** Enter the number for the Schedule B form for this item. */
  schedulebnumber: string | undefined;
  /** Enter the numeric quantity in relation to the unit of measure entered in the Schedule B Code field. These two fields are used together to determine the amount represented by one of this item on the Schedule B form for Shipping Export Declarations.

For example, if you enter 5 in the Schedule B Quantity field, and you select kilogram in the Schedule B Code field, when you fulfill two of these items on an order, the Schedule B form presents the items&#x2019; amount as 10 kilograms. */
  schedulebquantity: string | undefined;
  /** Enter alternative search keywords that customers might use to find this item using your Web store&#x2019;s internal search.

These can include synonyms, acronyms, alternate languages or misspellings.

These keywords are seen as equally important as the item name when searches are conducted. */
  searchkeywords: string | undefined;
  /** Check the Seasonal Demand box to define how NetSuite analyzes customer demand for this item

.

Customer demand for an item is used to auto-calculate reorder points and preferred stock levels. An item&#x2019;s demand rate is calculated as the average sales quantity per day.

    * Historical Demand &#x2013; Clear the Seasonal Demand box to calculate the demand as average sales per day over a specific period.
      To set the number of months interval between analysis to evaluate sales orders and calculate item demand, go to Setup > Accounting > Set Up Inventory Management > Order Analysis Interval field.
    * Seasonal Demand &#x2013; Check the Seasonal Demand box to calculate the reorder quantity for this item based on inventory demand changes through the year.
      To set the number of months interval between analysis to evaluate sales orders and calculate item demand, go to Setup > Accounting > Set Up Inventory Management > Order Analysis Interval field. */
  seasonaldemand: boolean | undefined;
  /**  */
  secondarycatdisplayname: string | undefined;
  /**  */
  secondarycategory: number | undefined;
  /**  */
  sellonebay: boolean | undefined;
  /**  */
  shipasia: boolean | undefined;
  /**  */
  shipaustralia: boolean | undefined;
  /**  */
  shipcanada: boolean | undefined;
  /**  */
  shipeurope: boolean | undefined;
  /**  */
  shipgermany: boolean | undefined;
  /** Check this box if this item always ships alone and with no other items in the same package.

This helps determine the number of packages needed and the shipping rate on order fulfillments. */
  shipindividually: boolean | undefined;
  /**  */
  shipjapan: boolean | undefined;
  /**  */
  shipmexico: boolean | undefined;
  /**  */
  shipnorthsouthamerica: boolean | undefined;
  /** Select the type of package this item normally ships in. The information for this package type automatically fills in on order fulfillments for this item.

Setting up and assigning package types helps determine the number of packages on an order and helps return accurate real-time shipping rates.

Create package types at Setup > Accounting > Shipping > Packages subtab. */
  shippackage: string | undefined;
  /** As an option, you may enter a shipping cost for this item in dollars.

You must also create a shipping item for per-item shipping costs at Lists > Shipping Items > New.

When this item is selected on sales orders, invoices or cash sales, the appropriate shipping charges are automatically calculated. */
  shippingcost: string | undefined;
  /**  */
  shippingcostunits: string | undefined;
  /**  */
  shippingdomesticmethodsgroup: string | undefined;
  /**  */
  shippingdomgroup: string | undefined;
  /**  */
  shippingintlgroup: string | undefined;
  /**  */
  shippingintlgroup1: string | undefined;
  /**  */
  shippingintlgroup2: string | undefined;
  /**  */
  shippingintlgroup3: string | undefined;
  /**  */
  shippingitem1: string | undefined;
  /**  */
  shippingitem2: string | undefined;
  /**  */
  shippingitem3: string | undefined;
  /**  */
  shippinglocationsgroup: string | undefined;
  /**  */
  shippingpackaginggroup: string | undefined;
  /**  */
  shippingrate1: string | undefined;
  /**  */
  shippingrate2: string | undefined;
  /**  */
  shippingrate3: string | undefined;
  /**  */
  shipuk: boolean | undefined;
  /**  */
  shipworldwide: boolean | undefined;
  /** Enter the name of the Shopping.com category that this item should go under.

This category is included in the product feeds that you can export from Setup > Web Site > Product Feeds.

Go to www.shopping.com for more information on the categories available.

This is an optional field only available for following item records: Kit/Package, Non-inventory Item for Sale, Non-inventory Item for Resale, Assembly (lot and serialized), and Inventory (lot and serialized). */
  shoppingdotcomcategory: string | undefined;
  /**  */
  shoppingproductfeed: string | undefined;
  /** Enter the name of the Shopzilla category this item should be included in.

This category is included in the product feeds you export at Setup > Web Site > Product Feeds.

Go to www.shopzilla.com for more information on the available categories.

This is an optional field only displayed for the following item records: Kit/Package, Non-inventory Item for Sale, Non-inventory Item for Resale, Assembly (lot and serialized), and Inventory (lot and serialized). */
  shopzillacategoryid: number | undefined;
  /**  */
  shopzillaproductfeed: string | undefined;
  /**  */
  showasgift: boolean | undefined;
  /** Check this box to suggest the item's online price for the item.

When customers navigate to a donation item, they first see the online price for the item and then can choose to enter any amount they like. */
  showdefaultdonationamount: boolean | undefined;
  /** Use the Sitemap Priority list to indicate the relative importance of your Web site URLs.

You can select a priority ranging from 0.0 to 1.0 on item, category, and tab records.

NetSuite assigns the default priority &#x201c;Auto&#x201d; to all new and existing tab, category and item records in your account. The priority is calculated based on the position of the item or category in the hierarchy of your Web site.

For example, your Web site tabs automatically generate a default priority value of 1.0 because they are top level pages. A category published to a tab gets a priority of 0.5. An item published to a category on a tab gets a priority of 0.3. */
  sitemappriority: string | undefined;
  /** In the Soft Descriptor list, select the name that will appear on the customer's credit card statement when this item is purchased.

Enter soft descriptors to select in this field at Setup > Accounting > Payment Processing > Credit Card Soft Descriptors. */
  softdescriptor: string | undefined;
  /**  */
  standardimages: string | undefined;
  /**  */
  startingprice: string | undefined;
  /** Enter up to 21 characters to specify information about this item, such as New, Refurbished or Ships 2-3 days. */
  stockdescription: string | undefined;
  /** Select the unit you use to stock this item in inventory. */
  stockunit: string | undefined;
  /**  */
  storecatdisplayname: string | undefined;
  /**  */
  storecatdisplayname2: string | undefined;
  /**  */
  storecategory: number | undefined;
  /**  */
  storecategory2: number | undefined;
  /** The store description appears under the item's store display name on item list pages in your store or site.

You can enter letters, numbers, and basic HTML code.

Note: To make the store description display when an item is in the Web store shopping cart, go to Setup > Web Site > Set Up Web Site. Click the Cart subtab, and check the box next to Store Description. */
  storedescription: string | undefined;
  /** Enter a detailed description for this item.

When your customers click an item's store display name for more information, they see this description.

You can enter letters, numbers or basic HTML code.

If you are using Internet Explorer, you can also clear the View Source box below to enter and format text using the formatting options above.  This eliminates the need for HTML code.

If you do not see the View Source box, make sure Rich Text Editing is enabled at Home > Set Preferences > Appearance. */
  storedetaileddescription: string | undefined;
  /** Select an image from your file cabinet to display with this item in your Web site.

Upload images at Lists > Web Site > Images.

You can automatically resize images less than 5 megapixels in size at Setup > Web Site > Image Resizing. */
  storedisplayimage: string | undefined;
  /** Enter the name of this item as you want it displayed in your Web site. */
  storedisplayname: string | undefined;
  /** Select an image from your file cabinet you want to use as the thumbnail image for this item.

This image shows with this item before a customer clicks the item for more information.

Upload images at Lists > Web Site > Images.

You can automatically resize images less than 5 megapixels in size at Setup > Web Site > Image Resizing. */
  storedisplaythumbnail: string | undefined;
  /** If you have created an item template to display this item in your Web site, select the template here.

Create item templates at Lists > Item Templates.

You can set an item template for all your items at Setup > Site Templates > Body. */
  storeitemtemplate: string | undefined;
  /**  */
  subsidiary: string | undefined;
  /**  */
  supersizeimages: boolean | undefined;
  /** Select one of the following Replenishment Methods to calculate item replenishment requirements:

    * Reorder Point &#x2013; To use Advanced Inventory Management settings for demand calculations instead of using Demand Planning.
      This is the default setting for new item records.
      Orders are created based on replenishment reminders generated from the Order Items page, Replenish Items, and Mass Create Work Orders.
    * Time Phased &#x2013; To create orders based on item demand plans instead of the Advanced Inventory Management settings.
      When you choose this setting, other fields on the record that are used by Advanced Inventory Management to calculate demand are no longer available. These unavailable fields are: Seasonal Demand, Build Point, Reorder Point, Preferred Stock Level, Safety Stock Days.
      The Auto calculate settings are cleared and cannot be changed for Demand Per Day, Reorder Point, Preferred Stock Level, Lead Time. */
  supplyreplenishmentmethod: string | undefined;
  /** This field defaults to the number entered in the Default Planning Time Fence field. Verify the default or enter a number between zero and 365 to determine the planning time fence for this item. */
  supplytimefence: number | undefined;
  /**  */
  taxable: boolean | undefined;
  /** Select the tax schedule you want to apply to this item.

You can create new tax schedules at Setup > Accounting > Taxes > Tax Schedules > New. */
  taxschedule: string;
  /**  */
  templatesgroup: string | undefined;
  /** Enter or accept the total value of this item. NetSuite generates this amount by multiplying your purchase price and your quantity on hand.

As you buy and sell additional inventory, NetSuite continues to calculate the total value. */
  totalvalue: string | undefined;
  /** Check this box to track landed costs associated with this item.

Note: You must include an item that tracks landed costs on transactions you want to source for landed costs.

For example, on the Landed Costs subtab of item receipts, a vendor bill shows in the source transaction list only if the bill includes a landed cost item. */
  tracklandedcost: boolean | undefined;
  /** Enter a transfer price on an item record to set the default value used as the transfer price on transfer orders. You can still override this default by entering a new transfer price for an item on the transfer order.

The use of the value in the Transfer Price field on a transfer order depends on your setting for the Use Item Cost as Transfer Cost preference.

When the Use Item Cost as Transfer Cost preference is enabled, the transfer price on a transfer order is not considered for posting cost accounting of line items. In the Transfer Price field, enter a declared value for the item to be used for shipping purposes only.

When the Use Item Cost as Transfer Cost preference is disabled, the transfer price on a transfer order is considered for posting cost accounting of line items. Items that do not have a transfer price set on a transfer order use a zero value for cost accounting calculations when the item is received.

Note: If the Transfer Price field is blank on the item record, a value of zero shows by default on the transfer order. Unless a transfer price value is entered on the transfer order, a value of zero is used for COGS calculations when the item is received. */
  transferprice: string | undefined;
  /**  */
  transferpriceunits: string | undefined;
  /** Select the type of units you use to purchase, stock and sell this item. */
  unitstype: string | undefined;
  /** Enter a maximum of 999 characters in this field to identify an internal name or number to store the item's UPC Code. You can use the text you enter here when adding the item to transactions, searching, or viewing reports.
    * When you enter text in this field, the SKU/UPC field on item labels displays this UPC Code and prints in UPC bar code format.
    * When this field is clear, the SKU/UPC field on item labels displays the Item Name/Number and prints in Code-128 bar code format. */
  upccode: string | undefined;
  /** Enter a short, descriptive name for this item to appear as part of its URL in the Web store.

Setting a name to show in the URL can result in better ranking from search engines.

If you leave this field blank, NetSuite terms and numbers are used as identifiers in the URL.

Note: Descriptive URL components are case sensitive. Descriptive URLs must match the case used in the URL Component field of an item record to point to the correct page. */
  urlcomponent: string | undefined;
  /** Check this box to track bin locations for this item.

If you choose to use bins for this item, you must associate at least one bin with the item using the Bin Numbers subtab.

You can associate multiple items with one bin and multiple bins with one item. You can also designate one preferred bin per location. The preferred bin is listed by default on receipt and fulfillment transactions.

To create bin records that can be selected here, go to <_TABNAME=EDIT_BINNUMBERRECORD_> > <_TASKCATEGORY=EDIT_BINNUMBERRECORD_> > Bins > New. */
  usebins: boolean | undefined;
  /** Check this box if you want the quantity discounts in the schedule to be applied to each pricing bracket separately.

For example, a schedule offers no discount for the first 100 items sold and a 5% discount if more than 100 are sold. If 150 items are sold, the first 100 are at normal price, and the other fifty items are sold at 5% discount.

Leave this box clear if you want the discount to apply to all of the items sold. */
  usemarginalrates: boolean | undefined;
  /** If your vendor uses a name for this item that is different from the name you use, you can enter up to 60 characters as the vendor's name for this item here.

The vendor's name for this item prints in the Item column of purchase forms.

If you do not enter a vendor name, the item name prints in the Item column of purchase forms. If you have entered a display name, it will print on purchases instead of the item name. */
  vendorname: string | undefined;
  /**  */
  vendreturnvarianceaccount: string | undefined;
  /** In the Deferral field, choose how to handle deferment when this item is sold as part of a bundle:

    * Defer Bundle Until Delivered &#x2013; Until this item is marked delivered, item revenue recognition in the bundle is deferred.

      A typical use for this option is to identify items whose revenue recognition depends on the delivery of the item in addition to the delivery of a separate service. For example, a specified upgrade would typically be marked Defer Bundle Until Delivered.

    * Defer Until Item Delivered &#x2013; Until this item is marked delivered, the item revenue recognition is deferred. This is the default field setting.

Note: The deferral setting you choose for each item in a bundle works with the deferral settings for other items in the bundle. */
  vsoedeferral: string | undefined;
  /** Check this box to automatically set this item to a Delivered status when this item is added to a transaction. Clear this box to leave the delivery status clear by default. */
  vsoedelivered: boolean | undefined;
  /** Choose from the following options to determine how discounts are handled for this item.
    * As Allowed - Allows a portion of an applicable discount to be applied against this item if its status is delivered when revenue allocation is performed.
    * Never - Prevents a discount from being applied against this item when revenue allocation is performed.

When you use advanced revenue management, items with VSOE values never permit discount if the residual method is used. */
  vsoepermitdiscount: string | undefined;
  /** Enter the VSOE Price for this item if it is known.

Note: If you need to use more than one VSOE price for an item, you can set the most common price here and then change the price on each order manually. */
  vsoeprice: string | undefined;
  /** Select an allocation type to associate with this item on sales transactions.

    * Normal - Revenue allocation follows EITF 08-01 rules when you use VSOE and the fair value price list with advanced revenue management.
    * Exclude - This item is excluded from revenue allocation. The item discounted sales amount is the revenue amount.
    * Software - The item is software. When you use VSOE with the EITF SuiteApp, both EITF 08-01 and SOP 97-2 rules apply for revenue allocation. When you use advanced revenue management, revenue allocation follows the fair value price list. Then if the fair value prices for any of the items in the allocation are estimates rather than VSOE, the allocation is recalculated using the residual method.

Note: Do not select the Software value unless you are using VSOE with the EITF SuiteApp or Advanced Revenue Management. */
  vsoesopgroup: string | undefined;
  /** Enter the weight of this item and select the units in the dropdown. */
  weight: number | undefined;
  /**  */
  weightunit: string | undefined;
  /**  */
  weightunits: string | undefined;
  /**  */
  willship: string | undefined;
  /**  */
  yahooproductfeed: string | undefined;
}

export class inventoryitemFieldsImpl implements inventoryitemFields {
  constructor(protected typedRecord: TypedRecord){ 
  }
  public get alternatedemandsourceitem(): string | undefined {
    return this.typedRecord.nsRecord.getValue('alternatedemandsourceitem') as any;
  }
  public set alternatedemandsourceitem(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('alternatedemandsourceitem', value as any)
  }
  public get assetaccount(): string | undefined {
    return this.typedRecord.nsRecord.getValue('assetaccount') as any;
  }
  public set assetaccount(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('assetaccount', value as any)
  }
  public get atpmethod(): string {
    return this.typedRecord.nsRecord.getValue('atpmethod') as any;
  }
  public set atpmethod(value: string) {
    this.typedRecord.nsRecord.setValue('atpmethod', value as any)
  }
  public get auctionquantity(): string | undefined {
    return this.typedRecord.nsRecord.getValue('auctionquantity') as any;
  }
  public set auctionquantity(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('auctionquantity', value as any)
  }
  public get auctiontype(): string | undefined {
    return this.typedRecord.nsRecord.getValue('auctiontype') as any;
  }
  public set auctiontype(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('auctiontype', value as any)
  }
  public get autoleadtime(): boolean | undefined {
    return this.typedRecord.nsRecord.getValue('autoleadtime') as any;
  }
  public set autoleadtime(value: boolean | undefined) {
    this.typedRecord.nsRecord.setValue('autoleadtime', value as any)
  }
  public get autopreferredstocklevel(): boolean | undefined {
    return this.typedRecord.nsRecord.getValue('autopreferredstocklevel') as any;
  }
  public set autopreferredstocklevel(value: boolean | undefined) {
    this.typedRecord.nsRecord.setValue('autopreferredstocklevel', value as any)
  }
  public get autoreorderpoint(): boolean | undefined {
    return this.typedRecord.nsRecord.getValue('autoreorderpoint') as any;
  }
  public set autoreorderpoint(value: boolean | undefined) {
    this.typedRecord.nsRecord.setValue('autoreorderpoint', value as any)
  }
  public get availabletopartners(): boolean | undefined {
    return this.typedRecord.nsRecord.getValue('availabletopartners') as any;
  }
  public set availabletopartners(value: boolean | undefined) {
    this.typedRecord.nsRecord.setValue('availabletopartners', value as any)
  }
  public get averagecost(): string | undefined {
    return this.typedRecord.nsRecord.getValue('averagecost') as any;
  }
  public set averagecost(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('averagecost', value as any)
  }
  public get billexchratevarianceacct(): string | undefined {
    return this.typedRecord.nsRecord.getValue('billexchratevarianceacct') as any;
  }
  public set billexchratevarianceacct(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('billexchratevarianceacct', value as any)
  }
  public get billingschedule(): string | undefined {
    return this.typedRecord.nsRecord.getValue('billingschedule') as any;
  }
  public set billingschedule(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('billingschedule', value as any)
  }
  public get billpricevarianceacct(): string | undefined {
    return this.typedRecord.nsRecord.getValue('billpricevarianceacct') as any;
  }
  public set billpricevarianceacct(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('billpricevarianceacct', value as any)
  }
  public get billqtyvarianceacct(): string | undefined {
    return this.typedRecord.nsRecord.getValue('billqtyvarianceacct') as any;
  }
  public set billqtyvarianceacct(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('billqtyvarianceacct', value as any)
  }
  public get buyitnowprice(): string | undefined {
    return this.typedRecord.nsRecord.getValue('buyitnowprice') as any;
  }
  public set buyitnowprice(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('buyitnowprice', value as any)
  }
  public get class(): string | undefined {
    return this.typedRecord.nsRecord.getValue('class') as any;
  }
  public set class(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('class', value as any)
  }
  public get cogsaccount(): string | undefined {
    return this.typedRecord.nsRecord.getValue('cogsaccount') as any;
  }
  public set cogsaccount(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('cogsaccount', value as any)
  }
  public get conditionenabled(): string | undefined {
    return this.typedRecord.nsRecord.getValue('conditionenabled') as any;
  }
  public set conditionenabled(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('conditionenabled', value as any)
  }
  public get conditionhelpurl(): string | undefined {
    return this.typedRecord.nsRecord.getValue('conditionhelpurl') as any;
  }
  public set conditionhelpurl(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('conditionhelpurl', value as any)
  }
  public get contingentrevenuehandling(): boolean | undefined {
    return this.typedRecord.nsRecord.getValue('contingentrevenuehandling') as any;
  }
  public set contingentrevenuehandling(value: boolean | undefined) {
    this.typedRecord.nsRecord.setValue('contingentrevenuehandling', value as any)
  }
  public get copydescription(): boolean | undefined {
    return this.typedRecord.nsRecord.getValue('copydescription') as any;
  }
  public set copydescription(value: boolean | undefined) {
    this.typedRecord.nsRecord.setValue('copydescription', value as any)
  }
  public get cost(): string | undefined {
    return this.typedRecord.nsRecord.getValue('cost') as any;
  }
  public set cost(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('cost', value as any)
  }
  public get costcategory(): string {
    return this.typedRecord.nsRecord.getValue('costcategory') as any;
  }
  public set costcategory(value: string) {
    this.typedRecord.nsRecord.setValue('costcategory', value as any)
  }
  public get costestimate(): string | undefined {
    return this.typedRecord.nsRecord.getValue('costestimate') as any;
  }
  public set costestimate(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('costestimate', value as any)
  }
  public get costestimatetype(): string | undefined {
    return this.typedRecord.nsRecord.getValue('costestimatetype') as any;
  }
  public set costestimatetype(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('costestimatetype', value as any)
  }
  public get costingmethod(): string | undefined {
    return this.typedRecord.nsRecord.getValue('costingmethod') as any;
  }
  public set costingmethod(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('costingmethod', value as any)
  }
  public get costingmethoddisplay(): string | undefined {
    return this.typedRecord.nsRecord.getValue('costingmethoddisplay') as any;
  }
  public set costingmethoddisplay(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('costingmethoddisplay', value as any)
  }
  public get costunits(): string | undefined {
    return this.typedRecord.nsRecord.getValue('costunits') as any;
  }
  public set costunits(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('costunits', value as any)
  }
  public get countryofmanufacture(): string | undefined {
    return this.typedRecord.nsRecord.getValue('countryofmanufacture') as any;
  }
  public set countryofmanufacture(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('countryofmanufacture', value as any)
  }
  public get createddate(): string | undefined {
    return this.typedRecord.nsRecord.getValue('createddate') as any;
  }
  public set createddate(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('createddate', value as any)
  }
  public get createrevenueplanson(): string | undefined {
    return this.typedRecord.nsRecord.getValue('createrevenueplanson') as any;
  }
  public set createrevenueplanson(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('createrevenueplanson', value as any)
  }
  public get currency(): string | undefined {
    return this.typedRecord.nsRecord.getValue('currency') as any;
  }
  public set currency(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('currency', value as any)
  }
  public get customform(): string | undefined {
    return this.typedRecord.nsRecord.getValue('customform') as any;
  }
  public set customform(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('customform', value as any)
  }
  public get custreturnvarianceaccount(): string | undefined {
    return this.typedRecord.nsRecord.getValue('custreturnvarianceaccount') as any;
  }
  public set custreturnvarianceaccount(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('custreturnvarianceaccount', value as any)
  }
  public get deferredrevenueaccount(): string | undefined {
    return this.typedRecord.nsRecord.getValue('deferredrevenueaccount') as any;
  }
  public set deferredrevenueaccount(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('deferredrevenueaccount', value as any)
  }
  public get deferrevrec(): boolean | undefined {
    return this.typedRecord.nsRecord.getValue('deferrevrec') as any;
  }
  public set deferrevrec(value: boolean | undefined) {
    this.typedRecord.nsRecord.setValue('deferrevrec', value as any)
  }
  public get demandmodifier(): string | undefined {
    return this.typedRecord.nsRecord.getValue('demandmodifier') as any;
  }
  public set demandmodifier(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('demandmodifier', value as any)
  }
  public get demandtimefence(): number | undefined {
    return this.typedRecord.nsRecord.getValue('demandtimefence') as any;
  }
  public set demandtimefence(value: number | undefined) {
    this.typedRecord.nsRecord.setValue('demandtimefence', value as any)
  }
  public get department(): string | undefined {
    return this.typedRecord.nsRecord.getValue('department') as any;
  }
  public set department(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('department', value as any)
  }
  public get directrevenueposting(): boolean | undefined {
    return this.typedRecord.nsRecord.getValue('directrevenueposting') as any;
  }
  public set directrevenueposting(value: boolean | undefined) {
    this.typedRecord.nsRecord.setValue('directrevenueposting', value as any)
  }
  public get displayinebaystore(): boolean | undefined {
    return this.typedRecord.nsRecord.getValue('displayinebaystore') as any;
  }
  public set displayinebaystore(value: boolean | undefined) {
    this.typedRecord.nsRecord.setValue('displayinebaystore', value as any)
  }
  public get displayname(): string | undefined {
    return this.typedRecord.nsRecord.getValue('displayname') as any;
  }
  public set displayname(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('displayname', value as any)
  }
  public get distributioncategory(): string | undefined {
    return this.typedRecord.nsRecord.getValue('distributioncategory') as any;
  }
  public set distributioncategory(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('distributioncategory', value as any)
  }
  public get distributionnetwork(): string | undefined {
    return this.typedRecord.nsRecord.getValue('distributionnetwork') as any;
  }
  public set distributionnetwork(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('distributionnetwork', value as any)
  }
  public get dontshowprice(): boolean | undefined {
    return this.typedRecord.nsRecord.getValue('dontshowprice') as any;
  }
  public set dontshowprice(value: boolean | undefined) {
    this.typedRecord.nsRecord.setValue('dontshowprice', value as any)
  }
  public get dropshipexpenseaccount(): string | undefined {
    return this.typedRecord.nsRecord.getValue('dropshipexpenseaccount') as any;
  }
  public set dropshipexpenseaccount(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('dropshipexpenseaccount', value as any)
  }
  public get ebayhandlingtime(): string | undefined {
    return this.typedRecord.nsRecord.getValue('ebayhandlingtime') as any;
  }
  public set ebayhandlingtime(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('ebayhandlingtime', value as any)
  }
  public get ebayintlinsurancefee(): string | undefined {
    return this.typedRecord.nsRecord.getValue('ebayintlinsurancefee') as any;
  }
  public set ebayintlinsurancefee(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('ebayintlinsurancefee', value as any)
  }
  public get ebayintlpackagehandlingfee(): string | undefined {
    return this.typedRecord.nsRecord.getValue('ebayintlpackagehandlingfee') as any;
  }
  public set ebayintlpackagehandlingfee(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('ebayintlpackagehandlingfee', value as any)
  }
  public get ebayintlshipinsurance(): string | undefined {
    return this.typedRecord.nsRecord.getValue('ebayintlshipinsurance') as any;
  }
  public set ebayintlshipinsurance(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('ebayintlshipinsurance', value as any)
  }
  public get ebayintlshippingitem1(): string | undefined {
    return this.typedRecord.nsRecord.getValue('ebayintlshippingitem1') as any;
  }
  public set ebayintlshippingitem1(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('ebayintlshippingitem1', value as any)
  }
  public get ebayintlshippingitem2(): string | undefined {
    return this.typedRecord.nsRecord.getValue('ebayintlshippingitem2') as any;
  }
  public set ebayintlshippingitem2(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('ebayintlshippingitem2', value as any)
  }
  public get ebayintlshippingitem3(): string | undefined {
    return this.typedRecord.nsRecord.getValue('ebayintlshippingitem3') as any;
  }
  public set ebayintlshippingitem3(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('ebayintlshippingitem3', value as any)
  }
  public get ebayisintlcalculatedrate(): string | undefined {
    return this.typedRecord.nsRecord.getValue('ebayisintlcalculatedrate') as any;
  }
  public set ebayisintlcalculatedrate(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('ebayisintlcalculatedrate', value as any)
  }
  public get ebayisirregularpackage(): boolean | undefined {
    return this.typedRecord.nsRecord.getValue('ebayisirregularpackage') as any;
  }
  public set ebayisirregularpackage(value: boolean | undefined) {
    this.typedRecord.nsRecord.setValue('ebayisirregularpackage', value as any)
  }
  public get ebayitemdescription(): string | undefined {
    return this.typedRecord.nsRecord.getValue('ebayitemdescription') as any;
  }
  public set ebayitemdescription(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('ebayitemdescription', value as any)
  }
  public get ebayitemlocdisplay(): string | undefined {
    return this.typedRecord.nsRecord.getValue('ebayitemlocdisplay') as any;
  }
  public set ebayitemlocdisplay(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('ebayitemlocdisplay', value as any)
  }
  public get ebayitemloczipcode(): string | undefined {
    return this.typedRecord.nsRecord.getValue('ebayitemloczipcode') as any;
  }
  public set ebayitemloczipcode(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('ebayitemloczipcode', value as any)
  }
  public get ebayitemlots(): number | undefined {
    return this.typedRecord.nsRecord.getValue('ebayitemlots') as any;
  }
  public set ebayitemlots(value: number | undefined) {
    this.typedRecord.nsRecord.setValue('ebayitemlots', value as any)
  }
  public get ebayitemsubtitle(): string | undefined {
    return this.typedRecord.nsRecord.getValue('ebayitemsubtitle') as any;
  }
  public set ebayitemsubtitle(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('ebayitemsubtitle', value as any)
  }
  public get ebayitemtitle(): string | undefined {
    return this.typedRecord.nsRecord.getValue('ebayitemtitle') as any;
  }
  public set ebayitemtitle(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('ebayitemtitle', value as any)
  }
  public get ebayitemweightamt(): string | undefined {
    return this.typedRecord.nsRecord.getValue('ebayitemweightamt') as any;
  }
  public set ebayitemweightamt(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('ebayitemweightamt', value as any)
  }
  public get ebaylayout(): string | undefined {
    return this.typedRecord.nsRecord.getValue('ebaylayout') as any;
  }
  public set ebaylayout(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('ebaylayout', value as any)
  }
  public get ebaypackagetype(): string | undefined {
    return this.typedRecord.nsRecord.getValue('ebaypackagetype') as any;
  }
  public set ebaypackagetype(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('ebaypackagetype', value as any)
  }
  public get ebaypagecounter(): string | undefined {
    return this.typedRecord.nsRecord.getValue('ebaypagecounter') as any;
  }
  public set ebaypagecounter(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('ebaypagecounter', value as any)
  }
  public get ebayrelistingoption(): string | undefined {
    return this.typedRecord.nsRecord.getValue('ebayrelistingoption') as any;
  }
  public set ebayrelistingoption(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('ebayrelistingoption', value as any)
  }
  public get ebaytheme(): string | undefined {
    return this.typedRecord.nsRecord.getValue('ebaytheme') as any;
  }
  public set ebaytheme(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('ebaytheme', value as any)
  }
  public get ebaythemegroup(): string | undefined {
    return this.typedRecord.nsRecord.getValue('ebaythemegroup') as any;
  }
  public set ebaythemegroup(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('ebaythemegroup', value as any)
  }
  public get endauctionswhenoutofstock(): boolean | undefined {
    return this.typedRecord.nsRecord.getValue('endauctionswhenoutofstock') as any;
  }
  public set endauctionswhenoutofstock(value: boolean | undefined) {
    this.typedRecord.nsRecord.setValue('endauctionswhenoutofstock', value as any)
  }
  public get enforceminqtyinternally(): boolean | undefined {
    return this.typedRecord.nsRecord.getValue('enforceminqtyinternally') as any;
  }
  public set enforceminqtyinternally(value: boolean | undefined) {
    this.typedRecord.nsRecord.setValue('enforceminqtyinternally', value as any)
  }
  public get excludefromsitemap(): boolean | undefined {
    return this.typedRecord.nsRecord.getValue('excludefromsitemap') as any;
  }
  public set excludefromsitemap(value: boolean | undefined) {
    this.typedRecord.nsRecord.setValue('excludefromsitemap', value as any)
  }
  public get externalid(): string | undefined {
    return this.typedRecord.nsRecord.getValue('externalid') as any;
  }
  public set externalid(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('externalid', value as any)
  }
  public get featureddescription(): string | undefined {
    return this.typedRecord.nsRecord.getValue('featureddescription') as any;
  }
  public set featureddescription(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('featureddescription', value as any)
  }
  public get fraudrisk(): string | undefined {
    return this.typedRecord.nsRecord.getValue('fraudrisk') as any;
  }
  public set fraudrisk(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('fraudrisk', value as any)
  }
  public get froogleproductfeed(): string | undefined {
    return this.typedRecord.nsRecord.getValue('froogleproductfeed') as any;
  }
  public set froogleproductfeed(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('froogleproductfeed', value as any)
  }
  public get gainlossaccount(): string | undefined {
    return this.typedRecord.nsRecord.getValue('gainlossaccount') as any;
  }
  public set gainlossaccount(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('gainlossaccount', value as any)
  }
  public get gallery(): boolean | undefined {
    return this.typedRecord.nsRecord.getValue('gallery') as any;
  }
  public set gallery(value: boolean | undefined) {
    this.typedRecord.nsRecord.setValue('gallery', value as any)
  }
  public get galleryfeatured(): boolean | undefined {
    return this.typedRecord.nsRecord.getValue('galleryfeatured') as any;
  }
  public set galleryfeatured(value: boolean | undefined) {
    this.typedRecord.nsRecord.setValue('galleryfeatured', value as any)
  }
  public get gifttypeexpressship(): boolean | undefined {
    return this.typedRecord.nsRecord.getValue('gifttypeexpressship') as any;
  }
  public set gifttypeexpressship(value: boolean | undefined) {
    this.typedRecord.nsRecord.setValue('gifttypeexpressship', value as any)
  }
  public get gifttypegiftwrap(): boolean | undefined {
    return this.typedRecord.nsRecord.getValue('gifttypegiftwrap') as any;
  }
  public set gifttypegiftwrap(value: boolean | undefined) {
    this.typedRecord.nsRecord.setValue('gifttypegiftwrap', value as any)
  }
  public get gifttypeshiptorecipient(): boolean | undefined {
    return this.typedRecord.nsRecord.getValue('gifttypeshiptorecipient') as any;
  }
  public set gifttypeshiptorecipient(value: boolean | undefined) {
    this.typedRecord.nsRecord.setValue('gifttypeshiptorecipient', value as any)
  }
  public get handlingcost(): string | undefined {
    return this.typedRecord.nsRecord.getValue('handlingcost') as any;
  }
  public set handlingcost(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('handlingcost', value as any)
  }
  public get handlingcostunits(): string | undefined {
    return this.typedRecord.nsRecord.getValue('handlingcostunits') as any;
  }
  public set handlingcostunits(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('handlingcostunits', value as any)
  }
  public get handlinggroup(): string | undefined {
    return this.typedRecord.nsRecord.getValue('handlinggroup') as any;
  }
  public set handlinggroup(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('handlinggroup', value as any)
  }
  public get imagesgroup(): string | undefined {
    return this.typedRecord.nsRecord.getValue('imagesgroup') as any;
  }
  public set imagesgroup(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('imagesgroup', value as any)
  }
  public get imageslocation(): string | undefined {
    return this.typedRecord.nsRecord.getValue('imageslocation') as any;
  }
  public set imageslocation(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('imageslocation', value as any)
  }
  public get includechildren(): boolean | undefined {
    return this.typedRecord.nsRecord.getValue('includechildren') as any;
  }
  public set includechildren(value: boolean | undefined) {
    this.typedRecord.nsRecord.setValue('includechildren', value as any)
  }
  public get incomeaccount(): string | undefined {
    return this.typedRecord.nsRecord.getValue('incomeaccount') as any;
  }
  public set incomeaccount(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('incomeaccount', value as any)
  }
  public get intercocogsaccount(): string | undefined {
    return this.typedRecord.nsRecord.getValue('intercocogsaccount') as any;
  }
  public set intercocogsaccount(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('intercocogsaccount', value as any)
  }
  public get intercodefrevaccount(): string | undefined {
    return this.typedRecord.nsRecord.getValue('intercodefrevaccount') as any;
  }
  public set intercodefrevaccount(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('intercodefrevaccount', value as any)
  }
  public get intercoincomeaccount(): string | undefined {
    return this.typedRecord.nsRecord.getValue('intercoincomeaccount') as any;
  }
  public set intercoincomeaccount(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('intercoincomeaccount', value as any)
  }
  public get internalid(): number | undefined {
    return this.typedRecord.nsRecord.getValue('internalid') as any;
  }
  public set internalid(value: number | undefined) {
    this.typedRecord.nsRecord.setValue('internalid', value as any)
  }
  public get iscalculatedrate(): string | undefined {
    return this.typedRecord.nsRecord.getValue('iscalculatedrate') as any;
  }
  public set iscalculatedrate(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('iscalculatedrate', value as any)
  }
  public get isdonationitem(): boolean | undefined {
    return this.typedRecord.nsRecord.getValue('isdonationitem') as any;
  }
  public set isdonationitem(value: boolean | undefined) {
    this.typedRecord.nsRecord.setValue('isdonationitem', value as any)
  }
  public get isdropshipitem(): boolean | undefined {
    return this.typedRecord.nsRecord.getValue('isdropshipitem') as any;
  }
  public set isdropshipitem(value: boolean | undefined) {
    this.typedRecord.nsRecord.setValue('isdropshipitem', value as any)
  }
  public get isgcocompliant(): boolean | undefined {
    return this.typedRecord.nsRecord.getValue('isgcocompliant') as any;
  }
  public set isgcocompliant(value: boolean | undefined) {
    this.typedRecord.nsRecord.setValue('isgcocompliant', value as any)
  }
  public get isinactive(): boolean | undefined {
    return this.typedRecord.nsRecord.getValue('isinactive') as any;
  }
  public set isinactive(value: boolean | undefined) {
    this.typedRecord.nsRecord.setValue('isinactive', value as any)
  }
  public get isonline(): boolean | undefined {
    return this.typedRecord.nsRecord.getValue('isonline') as any;
  }
  public set isonline(value: boolean | undefined) {
    this.typedRecord.nsRecord.setValue('isonline', value as any)
  }
  public get isspecialorderitem(): boolean | undefined {
    return this.typedRecord.nsRecord.getValue('isspecialorderitem') as any;
  }
  public set isspecialorderitem(value: boolean | undefined) {
    this.typedRecord.nsRecord.setValue('isspecialorderitem', value as any)
  }
  public get isstorepickupallowed(): boolean | undefined {
    return this.typedRecord.nsRecord.getValue('isstorepickupallowed') as any;
  }
  public set isstorepickupallowed(value: boolean | undefined) {
    this.typedRecord.nsRecord.setValue('isstorepickupallowed', value as any)
  }
  public get issueproduct(): string | undefined {
    return this.typedRecord.nsRecord.getValue('issueproduct') as any;
  }
  public set issueproduct(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('issueproduct', value as any)
  }
  public get itemcondition(): string | undefined {
    return this.typedRecord.nsRecord.getValue('itemcondition') as any;
  }
  public set itemcondition(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('itemcondition', value as any)
  }
  public get itemhandlingfee(): string | undefined {
    return this.typedRecord.nsRecord.getValue('itemhandlingfee') as any;
  }
  public set itemhandlingfee(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('itemhandlingfee', value as any)
  }
  public get itemid(): string {
    return this.typedRecord.nsRecord.getValue('itemid') as any;
  }
  public set itemid(value: string) {
    this.typedRecord.nsRecord.setValue('itemid', value as any)
  }
  public get iteminsurancefee(): string | undefined {
    return this.typedRecord.nsRecord.getValue('iteminsurancefee') as any;
  }
  public set iteminsurancefee(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('iteminsurancefee', value as any)
  }
  public get itemoptions(): string | undefined {
    return this.typedRecord.nsRecord.getValue('itemoptions') as any;
  }
  public set itemoptions(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('itemoptions', value as any)
  }
  public get itemrevenuecategory(): string | undefined {
    return this.typedRecord.nsRecord.getValue('itemrevenuecategory') as any;
  }
  public set itemrevenuecategory(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('itemrevenuecategory', value as any)
  }
  public get itemshipinsurance(): string | undefined {
    return this.typedRecord.nsRecord.getValue('itemshipinsurance') as any;
  }
  public set itemshipinsurance(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('itemshipinsurance', value as any)
  }
  public get itemtype(): string | undefined {
    return this.typedRecord.nsRecord.getValue('itemtype') as any;
  }
  public set itemtype(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('itemtype', value as any)
  }
  public get lastmodifieddate(): string | undefined {
    return this.typedRecord.nsRecord.getValue('lastmodifieddate') as any;
  }
  public set lastmodifieddate(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('lastmodifieddate', value as any)
  }
  public get lastpurchaseprice(): string | undefined {
    return this.typedRecord.nsRecord.getValue('lastpurchaseprice') as any;
  }
  public set lastpurchaseprice(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('lastpurchaseprice', value as any)
  }
  public get leadtime(): number | undefined {
    return this.typedRecord.nsRecord.getValue('leadtime') as any;
  }
  public set leadtime(value: number | undefined) {
    this.typedRecord.nsRecord.setValue('leadtime', value as any)
  }
  public get listimmediate(): string | undefined {
    return this.typedRecord.nsRecord.getValue('listimmediate') as any;
  }
  public set listimmediate(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('listimmediate', value as any)
  }
  public get listingduration(): string | undefined {
    return this.typedRecord.nsRecord.getValue('listingduration') as any;
  }
  public set listingduration(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('listingduration', value as any)
  }
  public get listingstartdate(): Date | undefined {
    return this.typedRecord.nsRecord.getValue('listingstartdate') as any;
  }
  public set listingstartdate(value: Date | undefined) {
    this.typedRecord.nsRecord.setValue('listingstartdate', value as any)
  }
  public get listingstarttime(): string | undefined {
    return this.typedRecord.nsRecord.getValue('listingstarttime') as any;
  }
  public set listingstarttime(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('listingstarttime', value as any)
  }
  public get location(): string | undefined {
    return this.typedRecord.nsRecord.getValue('location') as any;
  }
  public set location(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('location', value as any)
  }
  public get manufacturer(): string | undefined {
    return this.typedRecord.nsRecord.getValue('manufacturer') as any;
  }
  public set manufacturer(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('manufacturer', value as any)
  }
  public get manufactureraddr1(): string | undefined {
    return this.typedRecord.nsRecord.getValue('manufactureraddr1') as any;
  }
  public set manufactureraddr1(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('manufactureraddr1', value as any)
  }
  public get manufacturercity(): string | undefined {
    return this.typedRecord.nsRecord.getValue('manufacturercity') as any;
  }
  public set manufacturercity(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('manufacturercity', value as any)
  }
  public get manufacturerstate(): string | undefined {
    return this.typedRecord.nsRecord.getValue('manufacturerstate') as any;
  }
  public set manufacturerstate(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('manufacturerstate', value as any)
  }
  public get manufacturertariff(): string | undefined {
    return this.typedRecord.nsRecord.getValue('manufacturertariff') as any;
  }
  public set manufacturertariff(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('manufacturertariff', value as any)
  }
  public get manufacturertaxid(): string | undefined {
    return this.typedRecord.nsRecord.getValue('manufacturertaxid') as any;
  }
  public set manufacturertaxid(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('manufacturertaxid', value as any)
  }
  public get manufacturerzip(): string | undefined {
    return this.typedRecord.nsRecord.getValue('manufacturerzip') as any;
  }
  public set manufacturerzip(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('manufacturerzip', value as any)
  }
  public get matchbilltoreceipt(): boolean | undefined {
    return this.typedRecord.nsRecord.getValue('matchbilltoreceipt') as any;
  }
  public set matchbilltoreceipt(value: boolean | undefined) {
    this.typedRecord.nsRecord.setValue('matchbilltoreceipt', value as any)
  }
  public get matrixitemnametemplate(): string | undefined {
    return this.typedRecord.nsRecord.getValue('matrixitemnametemplate') as any;
  }
  public set matrixitemnametemplate(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('matrixitemnametemplate', value as any)
  }
  public get matrixtype(): string | undefined {
    return this.typedRecord.nsRecord.getValue('matrixtype') as any;
  }
  public set matrixtype(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('matrixtype', value as any)
  }
  public get maxdonationamount(): string | undefined {
    return this.typedRecord.nsRecord.getValue('maxdonationamount') as any;
  }
  public set maxdonationamount(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('maxdonationamount', value as any)
  }
  public get maximumquantity(): string | undefined {
    return this.typedRecord.nsRecord.getValue('maximumquantity') as any;
  }
  public set maximumquantity(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('maximumquantity', value as any)
  }
  public get metataghtml(): string | undefined {
    return this.typedRecord.nsRecord.getValue('metataghtml') as any;
  }
  public set metataghtml(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('metataghtml', value as any)
  }
  public get minimumquantity(): string | undefined {
    return this.typedRecord.nsRecord.getValue('minimumquantity') as any;
  }
  public set minimumquantity(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('minimumquantity', value as any)
  }
  public get minimumquantityunits(): string | undefined {
    return this.typedRecord.nsRecord.getValue('minimumquantityunits') as any;
  }
  public set minimumquantityunits(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('minimumquantityunits', value as any)
  }
  public get mossapplies(): boolean | undefined {
    return this.typedRecord.nsRecord.getValue('mossapplies') as any;
  }
  public set mossapplies(value: boolean | undefined) {
    this.typedRecord.nsRecord.setValue('mossapplies', value as any)
  }
  public get mpn(): string | undefined {
    return this.typedRecord.nsRecord.getValue('mpn') as any;
  }
  public set mpn(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('mpn', value as any)
  }
  public get multmanufactureaddr(): boolean | undefined {
    return this.typedRecord.nsRecord.getValue('multmanufactureaddr') as any;
  }
  public set multmanufactureaddr(value: boolean | undefined) {
    this.typedRecord.nsRecord.setValue('multmanufactureaddr', value as any)
  }
  public get nextagcategory(): string | undefined {
    return this.typedRecord.nsRecord.getValue('nextagcategory') as any;
  }
  public set nextagcategory(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('nextagcategory', value as any)
  }
  public get nextagproductfeed(): string | undefined {
    return this.typedRecord.nsRecord.getValue('nextagproductfeed') as any;
  }
  public set nextagproductfeed(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('nextagproductfeed', value as any)
  }
  public get nopricemessage(): string | undefined {
    return this.typedRecord.nsRecord.getValue('nopricemessage') as any;
  }
  public set nopricemessage(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('nopricemessage', value as any)
  }
  public get numactivelistings(): number | undefined {
    return this.typedRecord.nsRecord.getValue('numactivelistings') as any;
  }
  public set numactivelistings(value: number | undefined) {
    this.typedRecord.nsRecord.setValue('numactivelistings', value as any)
  }
  public get numcurrentlylisted(): number | undefined {
    return this.typedRecord.nsRecord.getValue('numcurrentlylisted') as any;
  }
  public set numcurrentlylisted(value: number | undefined) {
    this.typedRecord.nsRecord.setValue('numcurrentlylisted', value as any)
  }
  public get offersupport(): boolean | undefined {
    return this.typedRecord.nsRecord.getValue('offersupport') as any;
  }
  public set offersupport(value: boolean | undefined) {
    this.typedRecord.nsRecord.setValue('offersupport', value as any)
  }
  public get outofstockbehavior(): string | undefined {
    return this.typedRecord.nsRecord.getValue('outofstockbehavior') as any;
  }
  public set outofstockbehavior(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('outofstockbehavior', value as any)
  }
  public get outofstockmessage(): string | undefined {
    return this.typedRecord.nsRecord.getValue('outofstockmessage') as any;
  }
  public set outofstockmessage(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('outofstockmessage', value as any)
  }
  public get overallquantitypricingtype(): string | undefined {
    return this.typedRecord.nsRecord.getValue('overallquantitypricingtype') as any;
  }
  public set overallquantitypricingtype(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('overallquantitypricingtype', value as any)
  }
  public get packageheight(): string | undefined {
    return this.typedRecord.nsRecord.getValue('packageheight') as any;
  }
  public set packageheight(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('packageheight', value as any)
  }
  public get packagelength(): string | undefined {
    return this.typedRecord.nsRecord.getValue('packagelength') as any;
  }
  public set packagelength(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('packagelength', value as any)
  }
  public get packagewidth(): string | undefined {
    return this.typedRecord.nsRecord.getValue('packagewidth') as any;
  }
  public set packagewidth(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('packagewidth', value as any)
  }
  public get pagetitle(): string | undefined {
    return this.typedRecord.nsRecord.getValue('pagetitle') as any;
  }
  public set pagetitle(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('pagetitle', value as any)
  }
  public get parent(): string | undefined {
    return this.typedRecord.nsRecord.getValue('parent') as any;
  }
  public set parent(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('parent', value as any)
  }
  public get preferencecriterion(): string | undefined {
    return this.typedRecord.nsRecord.getValue('preferencecriterion') as any;
  }
  public set preferencecriterion(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('preferencecriterion', value as any)
  }
  public get preferredlocation(): string | undefined {
    return this.typedRecord.nsRecord.getValue('preferredlocation') as any;
  }
  public set preferredlocation(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('preferredlocation', value as any)
  }
  public get preferredstockleveldays(): number | undefined {
    return this.typedRecord.nsRecord.getValue('preferredstockleveldays') as any;
  }
  public set preferredstockleveldays(value: number | undefined) {
    this.typedRecord.nsRecord.setValue('preferredstockleveldays', value as any)
  }
  public get pricinggroup(): string | undefined {
    return this.typedRecord.nsRecord.getValue('pricinggroup') as any;
  }
  public set pricinggroup(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('pricinggroup', value as any)
  }
  public get primarycatdisplayname(): string | undefined {
    return this.typedRecord.nsRecord.getValue('primarycatdisplayname') as any;
  }
  public set primarycatdisplayname(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('primarycatdisplayname', value as any)
  }
  public get primarycategory(): number | undefined {
    return this.typedRecord.nsRecord.getValue('primarycategory') as any;
  }
  public set primarycategory(value: number | undefined) {
    this.typedRecord.nsRecord.setValue('primarycategory', value as any)
  }
  public get producer(): boolean | undefined {
    return this.typedRecord.nsRecord.getValue('producer') as any;
  }
  public set producer(value: boolean | undefined) {
    this.typedRecord.nsRecord.setValue('producer', value as any)
  }
  public get productfeed(): string | undefined {
    return this.typedRecord.nsRecord.getValue('productfeed') as any;
  }
  public set productfeed(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('productfeed', value as any)
  }
  public get purchasedescription(): string | undefined {
    return this.typedRecord.nsRecord.getValue('purchasedescription') as any;
  }
  public set purchasedescription(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('purchasedescription', value as any)
  }
  public get purchaseorderamount(): string | undefined {
    return this.typedRecord.nsRecord.getValue('purchaseorderamount') as any;
  }
  public set purchaseorderamount(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('purchaseorderamount', value as any)
  }
  public get purchaseorderquantity(): string | undefined {
    return this.typedRecord.nsRecord.getValue('purchaseorderquantity') as any;
  }
  public set purchaseorderquantity(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('purchaseorderquantity', value as any)
  }
  public get purchaseorderquantitydiff(): string | undefined {
    return this.typedRecord.nsRecord.getValue('purchaseorderquantitydiff') as any;
  }
  public set purchaseorderquantitydiff(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('purchaseorderquantitydiff', value as any)
  }
  public get purchasepricevarianceacct(): string | undefined {
    return this.typedRecord.nsRecord.getValue('purchasepricevarianceacct') as any;
  }
  public set purchasepricevarianceacct(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('purchasepricevarianceacct', value as any)
  }
  public get purchaseunit(): string | undefined {
    return this.typedRecord.nsRecord.getValue('purchaseunit') as any;
  }
  public set purchaseunit(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('purchaseunit', value as any)
  }
  public get quantitypricingschedule(): string | undefined {
    return this.typedRecord.nsRecord.getValue('quantitypricingschedule') as any;
  }
  public set quantitypricingschedule(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('quantitypricingschedule', value as any)
  }
  public get quantityreorderunits(): string | undefined {
    return this.typedRecord.nsRecord.getValue('quantityreorderunits') as any;
  }
  public set quantityreorderunits(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('quantityreorderunits', value as any)
  }
  public get receiptamount(): string | undefined {
    return this.typedRecord.nsRecord.getValue('receiptamount') as any;
  }
  public set receiptamount(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('receiptamount', value as any)
  }
  public get receiptquantity(): string | undefined {
    return this.typedRecord.nsRecord.getValue('receiptquantity') as any;
  }
  public set receiptquantity(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('receiptquantity', value as any)
  }
  public get receiptquantitydiff(): string | undefined {
    return this.typedRecord.nsRecord.getValue('receiptquantitydiff') as any;
  }
  public set receiptquantitydiff(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('receiptquantitydiff', value as any)
  }
  public get refundgivenas(): string | undefined {
    return this.typedRecord.nsRecord.getValue('refundgivenas') as any;
  }
  public set refundgivenas(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('refundgivenas', value as any)
  }
  public get relateditemsdescription(): string | undefined {
    return this.typedRecord.nsRecord.getValue('relateditemsdescription') as any;
  }
  public set relateditemsdescription(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('relateditemsdescription', value as any)
  }
  public get reordermultiple(): string | undefined {
    return this.typedRecord.nsRecord.getValue('reordermultiple') as any;
  }
  public set reordermultiple(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('reordermultiple', value as any)
  }
  public get rescheduleindays(): number | undefined {
    return this.typedRecord.nsRecord.getValue('rescheduleindays') as any;
  }
  public set rescheduleindays(value: number | undefined) {
    this.typedRecord.nsRecord.setValue('rescheduleindays', value as any)
  }
  public get rescheduleoutdays(): number | undefined {
    return this.typedRecord.nsRecord.getValue('rescheduleoutdays') as any;
  }
  public set rescheduleoutdays(value: number | undefined) {
    this.typedRecord.nsRecord.setValue('rescheduleoutdays', value as any)
  }
  public get reserveprice(): string | undefined {
    return this.typedRecord.nsRecord.getValue('reserveprice') as any;
  }
  public set reserveprice(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('reserveprice', value as any)
  }
  public get returnpolicy(): string | undefined {
    return this.typedRecord.nsRecord.getValue('returnpolicy') as any;
  }
  public set returnpolicy(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('returnpolicy', value as any)
  }
  public get returnpolicydetails(): string | undefined {
    return this.typedRecord.nsRecord.getValue('returnpolicydetails') as any;
  }
  public set returnpolicydetails(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('returnpolicydetails', value as any)
  }
  public get returnshippingpaidby(): string | undefined {
    return this.typedRecord.nsRecord.getValue('returnshippingpaidby') as any;
  }
  public set returnshippingpaidby(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('returnshippingpaidby', value as any)
  }
  public get returnswithin(): string | undefined {
    return this.typedRecord.nsRecord.getValue('returnswithin') as any;
  }
  public set returnswithin(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('returnswithin', value as any)
  }
  public get revenueallocationgroup(): string | undefined {
    return this.typedRecord.nsRecord.getValue('revenueallocationgroup') as any;
  }
  public set revenueallocationgroup(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('revenueallocationgroup', value as any)
  }
  public get revenuerecognitionrule(): string | undefined {
    return this.typedRecord.nsRecord.getValue('revenuerecognitionrule') as any;
  }
  public set revenuerecognitionrule(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('revenuerecognitionrule', value as any)
  }
  public get revrecforecastrule(): string {
    return this.typedRecord.nsRecord.getValue('revrecforecastrule') as any;
  }
  public set revrecforecastrule(value: string) {
    this.typedRecord.nsRecord.setValue('revrecforecastrule', value as any)
  }
  public get revreclassfxaccount(): string | undefined {
    return this.typedRecord.nsRecord.getValue('revreclassfxaccount') as any;
  }
  public set revreclassfxaccount(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('revreclassfxaccount', value as any)
  }
  public get revrecschedule(): string | undefined {
    return this.typedRecord.nsRecord.getValue('revrecschedule') as any;
  }
  public set revrecschedule(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('revrecschedule', value as any)
  }
  public get safetystocklevel(): number | undefined {
    return this.typedRecord.nsRecord.getValue('safetystocklevel') as any;
  }
  public set safetystocklevel(value: number | undefined) {
    this.typedRecord.nsRecord.setValue('safetystocklevel', value as any)
  }
  public get safetystockleveldays(): number | undefined {
    return this.typedRecord.nsRecord.getValue('safetystockleveldays') as any;
  }
  public set safetystockleveldays(value: number | undefined) {
    this.typedRecord.nsRecord.setValue('safetystockleveldays', value as any)
  }
  public get safetystocklevelunits(): string | undefined {
    return this.typedRecord.nsRecord.getValue('safetystocklevelunits') as any;
  }
  public set safetystocklevelunits(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('safetystocklevelunits', value as any)
  }
  public get salesdescription(): string | undefined {
    return this.typedRecord.nsRecord.getValue('salesdescription') as any;
  }
  public set salesdescription(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('salesdescription', value as any)
  }
  public get saleunit(): string | undefined {
    return this.typedRecord.nsRecord.getValue('saleunit') as any;
  }
  public set saleunit(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('saleunit', value as any)
  }
  public get schedulebcode(): string | undefined {
    return this.typedRecord.nsRecord.getValue('schedulebcode') as any;
  }
  public set schedulebcode(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('schedulebcode', value as any)
  }
  public get schedulebnumber(): string | undefined {
    return this.typedRecord.nsRecord.getValue('schedulebnumber') as any;
  }
  public set schedulebnumber(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('schedulebnumber', value as any)
  }
  public get schedulebquantity(): string | undefined {
    return this.typedRecord.nsRecord.getValue('schedulebquantity') as any;
  }
  public set schedulebquantity(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('schedulebquantity', value as any)
  }
  public get searchkeywords(): string | undefined {
    return this.typedRecord.nsRecord.getValue('searchkeywords') as any;
  }
  public set searchkeywords(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('searchkeywords', value as any)
  }
  public get seasonaldemand(): boolean | undefined {
    return this.typedRecord.nsRecord.getValue('seasonaldemand') as any;
  }
  public set seasonaldemand(value: boolean | undefined) {
    this.typedRecord.nsRecord.setValue('seasonaldemand', value as any)
  }
  public get secondarycatdisplayname(): string | undefined {
    return this.typedRecord.nsRecord.getValue('secondarycatdisplayname') as any;
  }
  public set secondarycatdisplayname(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('secondarycatdisplayname', value as any)
  }
  public get secondarycategory(): number | undefined {
    return this.typedRecord.nsRecord.getValue('secondarycategory') as any;
  }
  public set secondarycategory(value: number | undefined) {
    this.typedRecord.nsRecord.setValue('secondarycategory', value as any)
  }
  public get sellonebay(): boolean | undefined {
    return this.typedRecord.nsRecord.getValue('sellonebay') as any;
  }
  public set sellonebay(value: boolean | undefined) {
    this.typedRecord.nsRecord.setValue('sellonebay', value as any)
  }
  public get shipasia(): boolean | undefined {
    return this.typedRecord.nsRecord.getValue('shipasia') as any;
  }
  public set shipasia(value: boolean | undefined) {
    this.typedRecord.nsRecord.setValue('shipasia', value as any)
  }
  public get shipaustralia(): boolean | undefined {
    return this.typedRecord.nsRecord.getValue('shipaustralia') as any;
  }
  public set shipaustralia(value: boolean | undefined) {
    this.typedRecord.nsRecord.setValue('shipaustralia', value as any)
  }
  public get shipcanada(): boolean | undefined {
    return this.typedRecord.nsRecord.getValue('shipcanada') as any;
  }
  public set shipcanada(value: boolean | undefined) {
    this.typedRecord.nsRecord.setValue('shipcanada', value as any)
  }
  public get shipeurope(): boolean | undefined {
    return this.typedRecord.nsRecord.getValue('shipeurope') as any;
  }
  public set shipeurope(value: boolean | undefined) {
    this.typedRecord.nsRecord.setValue('shipeurope', value as any)
  }
  public get shipgermany(): boolean | undefined {
    return this.typedRecord.nsRecord.getValue('shipgermany') as any;
  }
  public set shipgermany(value: boolean | undefined) {
    this.typedRecord.nsRecord.setValue('shipgermany', value as any)
  }
  public get shipindividually(): boolean | undefined {
    return this.typedRecord.nsRecord.getValue('shipindividually') as any;
  }
  public set shipindividually(value: boolean | undefined) {
    this.typedRecord.nsRecord.setValue('shipindividually', value as any)
  }
  public get shipjapan(): boolean | undefined {
    return this.typedRecord.nsRecord.getValue('shipjapan') as any;
  }
  public set shipjapan(value: boolean | undefined) {
    this.typedRecord.nsRecord.setValue('shipjapan', value as any)
  }
  public get shipmexico(): boolean | undefined {
    return this.typedRecord.nsRecord.getValue('shipmexico') as any;
  }
  public set shipmexico(value: boolean | undefined) {
    this.typedRecord.nsRecord.setValue('shipmexico', value as any)
  }
  public get shipnorthsouthamerica(): boolean | undefined {
    return this.typedRecord.nsRecord.getValue('shipnorthsouthamerica') as any;
  }
  public set shipnorthsouthamerica(value: boolean | undefined) {
    this.typedRecord.nsRecord.setValue('shipnorthsouthamerica', value as any)
  }
  public get shippackage(): string | undefined {
    return this.typedRecord.nsRecord.getValue('shippackage') as any;
  }
  public set shippackage(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('shippackage', value as any)
  }
  public get shippingcost(): string | undefined {
    return this.typedRecord.nsRecord.getValue('shippingcost') as any;
  }
  public set shippingcost(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('shippingcost', value as any)
  }
  public get shippingcostunits(): string | undefined {
    return this.typedRecord.nsRecord.getValue('shippingcostunits') as any;
  }
  public set shippingcostunits(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('shippingcostunits', value as any)
  }
  public get shippingdomesticmethodsgroup(): string | undefined {
    return this.typedRecord.nsRecord.getValue('shippingdomesticmethodsgroup') as any;
  }
  public set shippingdomesticmethodsgroup(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('shippingdomesticmethodsgroup', value as any)
  }
  public get shippingdomgroup(): string | undefined {
    return this.typedRecord.nsRecord.getValue('shippingdomgroup') as any;
  }
  public set shippingdomgroup(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('shippingdomgroup', value as any)
  }
  public get shippingintlgroup(): string | undefined {
    return this.typedRecord.nsRecord.getValue('shippingintlgroup') as any;
  }
  public set shippingintlgroup(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('shippingintlgroup', value as any)
  }
  public get shippingintlgroup1(): string | undefined {
    return this.typedRecord.nsRecord.getValue('shippingintlgroup1') as any;
  }
  public set shippingintlgroup1(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('shippingintlgroup1', value as any)
  }
  public get shippingintlgroup2(): string | undefined {
    return this.typedRecord.nsRecord.getValue('shippingintlgroup2') as any;
  }
  public set shippingintlgroup2(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('shippingintlgroup2', value as any)
  }
  public get shippingintlgroup3(): string | undefined {
    return this.typedRecord.nsRecord.getValue('shippingintlgroup3') as any;
  }
  public set shippingintlgroup3(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('shippingintlgroup3', value as any)
  }
  public get shippingitem1(): string | undefined {
    return this.typedRecord.nsRecord.getValue('shippingitem1') as any;
  }
  public set shippingitem1(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('shippingitem1', value as any)
  }
  public get shippingitem2(): string | undefined {
    return this.typedRecord.nsRecord.getValue('shippingitem2') as any;
  }
  public set shippingitem2(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('shippingitem2', value as any)
  }
  public get shippingitem3(): string | undefined {
    return this.typedRecord.nsRecord.getValue('shippingitem3') as any;
  }
  public set shippingitem3(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('shippingitem3', value as any)
  }
  public get shippinglocationsgroup(): string | undefined {
    return this.typedRecord.nsRecord.getValue('shippinglocationsgroup') as any;
  }
  public set shippinglocationsgroup(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('shippinglocationsgroup', value as any)
  }
  public get shippingpackaginggroup(): string | undefined {
    return this.typedRecord.nsRecord.getValue('shippingpackaginggroup') as any;
  }
  public set shippingpackaginggroup(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('shippingpackaginggroup', value as any)
  }
  public get shippingrate1(): string | undefined {
    return this.typedRecord.nsRecord.getValue('shippingrate1') as any;
  }
  public set shippingrate1(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('shippingrate1', value as any)
  }
  public get shippingrate2(): string | undefined {
    return this.typedRecord.nsRecord.getValue('shippingrate2') as any;
  }
  public set shippingrate2(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('shippingrate2', value as any)
  }
  public get shippingrate3(): string | undefined {
    return this.typedRecord.nsRecord.getValue('shippingrate3') as any;
  }
  public set shippingrate3(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('shippingrate3', value as any)
  }
  public get shipuk(): boolean | undefined {
    return this.typedRecord.nsRecord.getValue('shipuk') as any;
  }
  public set shipuk(value: boolean | undefined) {
    this.typedRecord.nsRecord.setValue('shipuk', value as any)
  }
  public get shipworldwide(): boolean | undefined {
    return this.typedRecord.nsRecord.getValue('shipworldwide') as any;
  }
  public set shipworldwide(value: boolean | undefined) {
    this.typedRecord.nsRecord.setValue('shipworldwide', value as any)
  }
  public get shoppingdotcomcategory(): string | undefined {
    return this.typedRecord.nsRecord.getValue('shoppingdotcomcategory') as any;
  }
  public set shoppingdotcomcategory(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('shoppingdotcomcategory', value as any)
  }
  public get shoppingproductfeed(): string | undefined {
    return this.typedRecord.nsRecord.getValue('shoppingproductfeed') as any;
  }
  public set shoppingproductfeed(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('shoppingproductfeed', value as any)
  }
  public get shopzillacategoryid(): number | undefined {
    return this.typedRecord.nsRecord.getValue('shopzillacategoryid') as any;
  }
  public set shopzillacategoryid(value: number | undefined) {
    this.typedRecord.nsRecord.setValue('shopzillacategoryid', value as any)
  }
  public get shopzillaproductfeed(): string | undefined {
    return this.typedRecord.nsRecord.getValue('shopzillaproductfeed') as any;
  }
  public set shopzillaproductfeed(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('shopzillaproductfeed', value as any)
  }
  public get showasgift(): boolean | undefined {
    return this.typedRecord.nsRecord.getValue('showasgift') as any;
  }
  public set showasgift(value: boolean | undefined) {
    this.typedRecord.nsRecord.setValue('showasgift', value as any)
  }
  public get showdefaultdonationamount(): boolean | undefined {
    return this.typedRecord.nsRecord.getValue('showdefaultdonationamount') as any;
  }
  public set showdefaultdonationamount(value: boolean | undefined) {
    this.typedRecord.nsRecord.setValue('showdefaultdonationamount', value as any)
  }
  public get sitemappriority(): string | undefined {
    return this.typedRecord.nsRecord.getValue('sitemappriority') as any;
  }
  public set sitemappriority(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('sitemappriority', value as any)
  }
  public get softdescriptor(): string | undefined {
    return this.typedRecord.nsRecord.getValue('softdescriptor') as any;
  }
  public set softdescriptor(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('softdescriptor', value as any)
  }
  public get standardimages(): string | undefined {
    return this.typedRecord.nsRecord.getValue('standardimages') as any;
  }
  public set standardimages(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('standardimages', value as any)
  }
  public get startingprice(): string | undefined {
    return this.typedRecord.nsRecord.getValue('startingprice') as any;
  }
  public set startingprice(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('startingprice', value as any)
  }
  public get stockdescription(): string | undefined {
    return this.typedRecord.nsRecord.getValue('stockdescription') as any;
  }
  public set stockdescription(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('stockdescription', value as any)
  }
  public get stockunit(): string | undefined {
    return this.typedRecord.nsRecord.getValue('stockunit') as any;
  }
  public set stockunit(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('stockunit', value as any)
  }
  public get storecatdisplayname(): string | undefined {
    return this.typedRecord.nsRecord.getValue('storecatdisplayname') as any;
  }
  public set storecatdisplayname(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('storecatdisplayname', value as any)
  }
  public get storecatdisplayname2(): string | undefined {
    return this.typedRecord.nsRecord.getValue('storecatdisplayname2') as any;
  }
  public set storecatdisplayname2(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('storecatdisplayname2', value as any)
  }
  public get storecategory(): number | undefined {
    return this.typedRecord.nsRecord.getValue('storecategory') as any;
  }
  public set storecategory(value: number | undefined) {
    this.typedRecord.nsRecord.setValue('storecategory', value as any)
  }
  public get storecategory2(): number | undefined {
    return this.typedRecord.nsRecord.getValue('storecategory2') as any;
  }
  public set storecategory2(value: number | undefined) {
    this.typedRecord.nsRecord.setValue('storecategory2', value as any)
  }
  public get storedescription(): string | undefined {
    return this.typedRecord.nsRecord.getValue('storedescription') as any;
  }
  public set storedescription(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('storedescription', value as any)
  }
  public get storedetaileddescription(): string | undefined {
    return this.typedRecord.nsRecord.getValue('storedetaileddescription') as any;
  }
  public set storedetaileddescription(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('storedetaileddescription', value as any)
  }
  public get storedisplayimage(): string | undefined {
    return this.typedRecord.nsRecord.getValue('storedisplayimage') as any;
  }
  public set storedisplayimage(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('storedisplayimage', value as any)
  }
  public get storedisplayname(): string | undefined {
    return this.typedRecord.nsRecord.getValue('storedisplayname') as any;
  }
  public set storedisplayname(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('storedisplayname', value as any)
  }
  public get storedisplaythumbnail(): string | undefined {
    return this.typedRecord.nsRecord.getValue('storedisplaythumbnail') as any;
  }
  public set storedisplaythumbnail(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('storedisplaythumbnail', value as any)
  }
  public get storeitemtemplate(): string | undefined {
    return this.typedRecord.nsRecord.getValue('storeitemtemplate') as any;
  }
  public set storeitemtemplate(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('storeitemtemplate', value as any)
  }
  public get subsidiary(): string | undefined {
    return this.typedRecord.nsRecord.getValue('subsidiary') as any;
  }
  public set subsidiary(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('subsidiary', value as any)
  }
  public get supersizeimages(): boolean | undefined {
    return this.typedRecord.nsRecord.getValue('supersizeimages') as any;
  }
  public set supersizeimages(value: boolean | undefined) {
    this.typedRecord.nsRecord.setValue('supersizeimages', value as any)
  }
  public get supplyreplenishmentmethod(): string | undefined {
    return this.typedRecord.nsRecord.getValue('supplyreplenishmentmethod') as any;
  }
  public set supplyreplenishmentmethod(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('supplyreplenishmentmethod', value as any)
  }
  public get supplytimefence(): number | undefined {
    return this.typedRecord.nsRecord.getValue('supplytimefence') as any;
  }
  public set supplytimefence(value: number | undefined) {
    this.typedRecord.nsRecord.setValue('supplytimefence', value as any)
  }
  public get taxable(): boolean | undefined {
    return this.typedRecord.nsRecord.getValue('taxable') as any;
  }
  public set taxable(value: boolean | undefined) {
    this.typedRecord.nsRecord.setValue('taxable', value as any)
  }
  public get taxschedule(): string {
    return this.typedRecord.nsRecord.getValue('taxschedule') as any;
  }
  public set taxschedule(value: string) {
    this.typedRecord.nsRecord.setValue('taxschedule', value as any)
  }
  public get templatesgroup(): string | undefined {
    return this.typedRecord.nsRecord.getValue('templatesgroup') as any;
  }
  public set templatesgroup(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('templatesgroup', value as any)
  }
  public get totalvalue(): string | undefined {
    return this.typedRecord.nsRecord.getValue('totalvalue') as any;
  }
  public set totalvalue(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('totalvalue', value as any)
  }
  public get tracklandedcost(): boolean | undefined {
    return this.typedRecord.nsRecord.getValue('tracklandedcost') as any;
  }
  public set tracklandedcost(value: boolean | undefined) {
    this.typedRecord.nsRecord.setValue('tracklandedcost', value as any)
  }
  public get transferprice(): string | undefined {
    return this.typedRecord.nsRecord.getValue('transferprice') as any;
  }
  public set transferprice(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('transferprice', value as any)
  }
  public get transferpriceunits(): string | undefined {
    return this.typedRecord.nsRecord.getValue('transferpriceunits') as any;
  }
  public set transferpriceunits(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('transferpriceunits', value as any)
  }
  public get unitstype(): string | undefined {
    return this.typedRecord.nsRecord.getValue('unitstype') as any;
  }
  public set unitstype(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('unitstype', value as any)
  }
  public get upccode(): string | undefined {
    return this.typedRecord.nsRecord.getValue('upccode') as any;
  }
  public set upccode(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('upccode', value as any)
  }
  public get urlcomponent(): string | undefined {
    return this.typedRecord.nsRecord.getValue('urlcomponent') as any;
  }
  public set urlcomponent(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('urlcomponent', value as any)
  }
  public get usebins(): boolean | undefined {
    return this.typedRecord.nsRecord.getValue('usebins') as any;
  }
  public set usebins(value: boolean | undefined) {
    this.typedRecord.nsRecord.setValue('usebins', value as any)
  }
  public get usemarginalrates(): boolean | undefined {
    return this.typedRecord.nsRecord.getValue('usemarginalrates') as any;
  }
  public set usemarginalrates(value: boolean | undefined) {
    this.typedRecord.nsRecord.setValue('usemarginalrates', value as any)
  }
  public get vendorname(): string | undefined {
    return this.typedRecord.nsRecord.getValue('vendorname') as any;
  }
  public set vendorname(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('vendorname', value as any)
  }
  public get vendreturnvarianceaccount(): string | undefined {
    return this.typedRecord.nsRecord.getValue('vendreturnvarianceaccount') as any;
  }
  public set vendreturnvarianceaccount(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('vendreturnvarianceaccount', value as any)
  }
  public get vsoedeferral(): string | undefined {
    return this.typedRecord.nsRecord.getValue('vsoedeferral') as any;
  }
  public set vsoedeferral(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('vsoedeferral', value as any)
  }
  public get vsoedelivered(): boolean | undefined {
    return this.typedRecord.nsRecord.getValue('vsoedelivered') as any;
  }
  public set vsoedelivered(value: boolean | undefined) {
    this.typedRecord.nsRecord.setValue('vsoedelivered', value as any)
  }
  public get vsoepermitdiscount(): string | undefined {
    return this.typedRecord.nsRecord.getValue('vsoepermitdiscount') as any;
  }
  public set vsoepermitdiscount(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('vsoepermitdiscount', value as any)
  }
  public get vsoeprice(): string | undefined {
    return this.typedRecord.nsRecord.getValue('vsoeprice') as any;
  }
  public set vsoeprice(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('vsoeprice', value as any)
  }
  public get vsoesopgroup(): string | undefined {
    return this.typedRecord.nsRecord.getValue('vsoesopgroup') as any;
  }
  public set vsoesopgroup(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('vsoesopgroup', value as any)
  }
  public get weight(): number | undefined {
    return this.typedRecord.nsRecord.getValue('weight') as any;
  }
  public set weight(value: number | undefined) {
    this.typedRecord.nsRecord.setValue('weight', value as any)
  }
  public get weightunit(): string | undefined {
    return this.typedRecord.nsRecord.getValue('weightunit') as any;
  }
  public set weightunit(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('weightunit', value as any)
  }
  public get weightunits(): string | undefined {
    return this.typedRecord.nsRecord.getValue('weightunits') as any;
  }
  public set weightunits(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('weightunits', value as any)
  }
  public get willship(): string | undefined {
    return this.typedRecord.nsRecord.getValue('willship') as any;
  }
  public set willship(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('willship', value as any)
  }
  public get yahooproductfeed(): string | undefined {
    return this.typedRecord.nsRecord.getValue('yahooproductfeed') as any;
  }
  public set yahooproductfeed(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('yahooproductfeed', value as any)
  }
}


/** 
 * Inventory Part Record Definition.
 * Record's Internal Id: inventoryitem. 
 * Supports Custom Fields: true 
 */
export interface inventoryitemRecord extends TypedRecord<inventoryitemFields> {

}

export class inventoryitemRecordImpl extends TypedRecordImpl<inventoryitemFields> implements inventoryitemRecord {
  constructor(public nsRecord: Record) {
    super(nsRecord)
    this._fields = new inventoryitemFieldsImpl(this);
    // this._sublists = inventoryitemnew FieldsImpl(this)
  }
}


