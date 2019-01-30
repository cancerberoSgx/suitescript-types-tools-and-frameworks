// This file is automatically generated - don't edit it. 
// Search Types for record Shopping Cart (shoppingcart)

// Search Columns

/** Shopping Cart (shoppingcart) Search Columns definition */
export interface shoppingcartSearchColumn {
  /** Cart ID (cartid: integer) */
      cartid?: number;
  /** Customer ID (customerid: integer) */
      customerid?: number;
  /** Date Created (datecreated: datetime) */
      datecreated?: Date;
  /** Date Last Item Added (datemodified: datetime) */
      datemodified?: Date;
  /** Days old (daysold: integer) */
      daysold?: number;
  /** Internal ID (internalid: select) */
      internalid?: string;
  /** Items in Cart (item: select) */
      item?: string;
  /** Item ID (itemid: select) */
      itemid?: string;
  /** Item Price (itemprice: currency) */
      itemprice?: number;
  /** Item Quantity (itemqty: integer) */
      itemqty?: number;
  /** Sub-Total Amount (subtotal: currency) */
      subtotal?: number;
  /** Website (website: select) */
      website?: string;
  /** Website ID (websiteid: integer) */
      websiteid?: number;
}


// Search Filters

/** Shopping Cart (shoppingcart) Search Filters definition */
export interface shoppingcartSearchFilter {
/** Cart ID (cartid: select) */
  cartid?: string;
  /** Cart ID (Number) (cartidnumber: integer) */
  cartidnumber?: number;
  /** Customer ID (customerid: select) */
  customerid?: string;
  /** Customer ID (Number) (customeridnumber: integer) */
  customeridnumber?: number;
  /** Date Created (datecreated: datetime) */
  datecreated?: Date;
  /** Date Last Item Added (datemodified: datetime) */
  datemodified?: Date;
  /** Internal ID (internalid: select) */
  internalid?: string;
  /** Internal ID (Number) (internalidnumber: integer) */
  internalidnumber?: number;
  /** Item (item: select) */
  item?: string;
  /** Item ID (itemid: select) */
  itemid?: string;
  /** Item ID (Number) (itemidnumber: integer) */
  itemidnumber?: number;
  /** Item Price (itemprice: currency) */
  itemprice?: number;
  /** SubTotal (subtotal: currency) */
  subtotal?: number;
  /** Website (website: select) */
  website?: string;
  /** Website ID (websiteid: select) */
  websiteid?: string;
}


// Search Joins

/** Shopping Cart (shoppingcart) Search Joins definitions. */
export interface shoppingcartSearchJoinTypes {
/** shoppingcart's item search filter. Item. Actual name: Item. */
  item: 'item';
  /** shoppingcart's shopper search filter. Shopper. Actual name: Customer. */
  shopper: 'shopper';
  /** shoppingcart's user search filter. User. Actual name: Employee. */
  user: 'user';
}


// Search Filter Types

/** Shopping Cart (shoppingcart) Search Filter Type definitions. */
export interface shoppingcartSearchFilterTypes {
cartid: 'select';
  cartidnumber: 'integer';
  customerid: 'select';
  customeridnumber: 'integer';
  datecreated: 'datetime';
  datemodified: 'datetime';
  internalid: 'select';
  internalidnumber: 'integer';
  item: 'select';
  itemid: 'select';
  itemidnumber: 'integer';
  itemprice: 'currency';
  subtotal: 'currency';
  website: 'select';
  websiteid: 'select';
}


// Search Column Types

/** Shopping Cart (shoppingcart) Search Column Type definitions. */
export interface shoppingcartSearchColumnTypes {
cartid: 'integer';
  customerid: 'integer';
  datecreated: 'datetime';
  datemodified: 'datetime';
  daysold: 'integer';
  internalid: 'select';
  item: 'select';
  itemid: 'select';
  itemprice: 'currency';
  itemqty: 'integer';
  subtotal: 'currency';
  website: 'select';
  websiteid: 'integer';
}