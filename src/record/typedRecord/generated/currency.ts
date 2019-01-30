// This file is auto generated, do not edit it. 




/** 
 * Currency Fields Definition.
 * Record's Internal Id: currency. 
 * Supports Custom Fields: true 
 */
export interface currencyFields {
/**  */
  currencyformatsample?: string;
  /** Displays the precision of the currency, which designates the number of digits to the right of the decimal point used in currency transactions. Precision can be zero or two.

The level of decimal precision indicated is used for inventory costing calculations to maintains consistency between inventory costing and reporting. Values in report results are rounded to the base currency precision. This rounding applies to currency values and non-currency values, including formula column values.

To change this read-only field to a dropdown list through which you can change the precision from zero or two, contact NetSuite Technical Support. */
  currencyprecision?: string;
  /** Enter the currency symbol and text to use for this currency. Include spaces if you want to separate the symbol from the currency value.

For example, $ USD or $CAD. */
  displaysymbol?: string;
  /** Enter an exchange rate for this currency against the base currency of this company, or if you use OneWorld, for this currency against the base currency of the root parent subsidiary.

For example, if your company is located in Canada and you are defining the U.S. dollar, and the current exchange rate is 1.02 Canadian dollars to 1.00 U.S. dollar, the Default Exchange Rate for the U.S. dollar is 1.02/1.00, or 1.02.

This rate is the basis for rates in the Currency Exchange Rates table that are used in foreign currency transactions. If you use OneWorld, this rate also is the basis for rates in the Consolidated Exchange Rates table that are used in consolidated financials.For more information, see the help topic Setting Currency Exchange Rates. */
  exchangerate: number;
  /**  */
  externalid?: string;
  /**  */
  includeinfxrateupdates?: boolean;
  /** Indicates that this currency is the company's base currency or in OneWorld accounts, the base currency for a subsidiary.

Note: After you have entered transactions in foreign currencies, you cannot change a base currency. */
  isbasecurrency?: boolean;
  /** Check this box to make the currency record is inactive, or clear it to make the record active.

You cannot make a currency inactive if any open transactions exist in that currency. */
  isinactive?: boolean;
  /** Enter a unique name for the currency.

Because many countries use the same name for their currencies, you should use a combined name that includes the country name or abbreviation as well as the name of the currency. For example, pesos are the currency in the Philippines, Uruguay, and Mexico. In the Name field, you might enter &#x201c;Mexican peso.&#x201d;

This name appears in the Currency field on records and transactions. */
  name: string;
  /** Check this box to customize the currency format. */
  overridecurrencyformat?: boolean;
  /** Enter the three-letter International Standards Organization (ISO) code for this currency.

For example, you would use PHP for Philippines pesos, UYU for Uruguayan pesos, and MXN for Mexican pesos. */
  symbol: string;
  /** Select whether the symbol appears before or after the number.

Note: The symbol position you select in the Symbol Placement field appears only on transaction records. It does not appear on reports. */
  symbolplacement?: string;
}





/** 
 * Currency Sublists Definition.
 * Record's Internal Id: currency. 
 * Supports Custom Fields: true 
 */
export interface currencySublists {
  
}





