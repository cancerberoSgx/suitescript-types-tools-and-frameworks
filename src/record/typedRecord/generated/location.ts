// This file is auto generated, do not edit it. 




/** 
 * Location Fields Definition.
 * Record's Internal Id: location. 
 * Supports Custom Fields: true 
 */
export interface locationFields {
/**  */
  addrphone?: string;
  /**  */
  addrtext?: string;
  /** Check the Allow Store Pickup box to set the location as a valid store pickup location. This enables the location to be used in a store pickup fulfillment workflow.

In a sales order, when you set the Fulfillment Choice to Store Pickup, you can select this location as the fulfillment location for line items in the sales order, provided that the line items also have the Allow Store Pickup box checked. */
  allowstorepickup?: boolean;
  /**  */
  attention?: string;
  /** Choose how you want the automatic location assignment feature to work with the location. You can select one of the following:

    * Disallow - Disables automatic location assignment for the location. The location will not be assigned to any sales orders by the automatic location assignment engine.
    * Allow Worldwide - The location can be assigned to sales orders with shipping addresses anywhere in the world.
    * Allow Worldwide Except Excluded Regions - The location can be assigned to sales orders with shipping addresses anywhere in the world, except if the shipping address is in an excluded region.
    * Allow Specified Regions Only - The location can be assigned to sales orders, but only when the shipping address is in one of the included regions. */
  autoassignmentregionsetting?: string;
  /** In the Buffer Stock field, enter the minimum quantity of inventory to be maintained at the location.

NetSuite uses this buffer stock when the Automatic Location Assignment feature processes orders. The buffer stock prevents NetSuite from assigning a fulfillment location to a line on an order if doing this causes inventory at the location to drop below the buffer stock.

For example, the current item inventory at a location is 6 and the buffer stock for the location is 5. If an order is created with quantity 2, NetSuite will not assign the location to the line because doing this would cause inventory to drop below the buffer stock. */
  bufferstock?: number;
  /**  */
  city?: string;
  /**  */
  country?: string;
  /** Enter the maximum number of orders that can be shipped from a location in one day. Shipping capacity is based on the number of fulfillment requests created for the location in a one day interval. Automatic location assignment will not assign orders to the location if the daily shipping capacity has been reached.

This field is only available when the Fulfillment Request feature is enabled.

Note: The shipping capacity can be exceeded if the location is set manually on a sales order line. */
  dailyshippingcapacity?: number;
  /**  */
  externalid?: string;
  /** Choose the method by which automatic location assignment establishes the geographic position of the location:

    * Derive From Postal Code: Choose this option when you want automatic location assignment to use the postal code to calculate the geographic coordinates of the location. Because postal codes are irregular in shape, NetSuite uses the centroid (or geometrical center) of the postal code area. NetSuite uses third-party data to calculate these coordinates.

      This option is the default geolocation method for location records.

    * Use Latitude/Longitude Coordinates: Choose this option when you want automatic location assignment to use the latitude and longitude coordinates as specified in the Latitude and Longitude fields of the location record. */
  geolocationmethod?: string;
  /** Check this box to inactivate this location record. Inactive locations do not show in lists of locations on records and transactions. */
  isinactive?: boolean;
  /** Enter the latitude coordinate of the location in decimal format, for example, "37.5367".
Latitude is between -90 and 90.

Use at least four decimal places to achieve a precise location. The decimal symbol you use depends on the number format in your user preferences. */
  latitude?: number;
  /** Select the kind of location: Store, Warehouse, or Undefined. The location type is one of the criteria that the Automatic Location Assignment feature uses when determining the ideal fulfillment location. You can set the location to Undefined to represent locations that are neither a store nor a warehouse. */
  locationtype?: string;
  /** Select a logo to show for this location on printed and e-mailed transaction forms.

To upload a logo, go to Documents > Files > Images > New. Check the Available Without Login box.

Logos must be in JPG or GIF file format.

To print your logo on standard forms, the logo must be no more than 200 pixels wide and 60 pixels high. */
  logo?: string;
  /** Enter the longitude coordinate of the location in decimal format, for example, "-122.3285". Longitude is between -180 and 180.

Use at least four decimal places to achieve a precise location. The decimal symbol you use depends on the number format in your user preferences. */
  longitude?: number;
  /** Check this box to make on-hand inventory stored at the location available to orders.
Clear this box to exclude on-hand inventory stored at the location from the available count. */
  makeinventoryavailable?: boolean;
  /** Check this box to include on-hand inventory stored at the location in the total quantity available to display in the Web Store.
Clear this box to exclude the on-hand inventory stored at the location from the total quantity available to display in the Web Store. */
  makeinventoryavailablestore?: boolean;
  /** Enter a name for this location. The name you enter here is the name that shows in location lists on records and transactions.

The name can be alphanumeric. The maximum number of characters is 31. */
  name: string;
  /** The next cut-off time for same day pickup orders at the location. NetSuite determines this time based on the same day pickup cut-off times in the business hours. The next pickup cut-off time might not be on the current day if one of the following is true:

    * The current day does not have a same day pickup cut-off time defined.
    * The same day pickup cut-off time has already passed on the current day.

This field is read only. */
  nextpickupcutofftime?: Date;
  /**  */
  override?: boolean;
  /** Select the name of the parent location for this new location. */
  parent?: string;
  /**  */
  returnaddr?: string;
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
  state?: string;
  /** In the Store Pickup Buffer Stock field, enter the minimum inventory to be maintained at the location when creating store pickup orders.

NetSuite uses the store pickup buffer stock to calculate the quantity available for store pickup of an item. Visitors to the web store will only be able to create a pickup order if the quantity available for store pickup is greater than zero.

The store pickup buffer stock applies to all items at the location. */
  storepickupbufferstock?: number;
  /**  */
  subsidiary?: string;
  /** Select the time zone of the location. */
  timezone: string;
  /** The maximum number of shipping orders that can accumulate in the backlog of orders to be shipped from the location. Shipping orders are based on the number of open fulfillment requests.

The fulfillment workload distribution strategy in a rule uses this field to calculate current available work capacity at locations.

This field is only available when the Fulfillment Request feature is enabled. */
  totalshippingcapacity?: number;
  /** When you use auto-generated numbering with the Locations feature, you can make your transaction number sequences independent per location.

Enter up to 8 alphanumeric characters in this field to number transactions with a prefix to signify this location. Then, click Save.

To set up auto-generated numbering, go to Setup >  Setup Tasks > Auto-Generated Numbers. On the Document Numbers subtab, check the Use Location box next to each transaction this prefix should apply to. */
  tranprefix?: string;
  /** Check this box to use bins to track inventory at this location.
Clear this box to not use bins track inventory at this location. */
  usebins?: boolean;
  /**  */
  zip?: string;
}





/** 
 * Location Sublists Definition.
 * Record's Internal Id: location. 
 * Supports Custom Fields: true 
 */
export interface locationSublists {
  
  /** businesshours: Business Hours */
  businesshours: {
    /** endtime - End time  */
    endtime?: string;
    /** isfriday - Friday  */
    isfriday: boolean;
    /** ismonday - Monday  */
    ismonday: boolean;
    /** issaturday - Saturday  */
    issaturday: boolean;
    /** issunday - Sunday  */
    issunday: boolean;
    /** isthursday - Thursday  */
    isthursday: boolean;
    /** istuesday - Tuesday  */
    istuesday: boolean;
    /** iswednesday - Wednesday  */
    iswednesday: boolean;
    /** samedaypickupcutofftime - Same Day Pickup Cut-Off Time  */
    samedaypickupcutofftime: string;
    /** starttime - Start Time  */
    starttime?: string;
  }

  /** excludelocationregions: Exclude These Regions */
  excludelocationregions: {
    /** name - Region  */
    name: string;
    /** ranking - None  */
    ranking: number;
    /** region - Region  */
    region?: string;
  }

  /** includelocationregions: Include These Regions */
  includelocationregions: {
    /** name - Region  */
    name: string;
    /** ranking - None  */
    ranking: number;
    /** region - Region  */
    region?: string;
  }
}





