// This file is auto generated, do not edit it. 




/** 
 * Vendor Return Authorization Fields Definition.
 * Record's Internal Id: vendorreturnauthorization. 
 * Supports Custom Fields: true 
 */
export interface vendorreturnauthorizationFields {
/** In the Vendor Select field, choose a vendor.
Verify the billing address displayed in the Vendor field. */
  billaddresslist?: string;
  /**  */
  billingaddress?: string;
  /** Optionally select a class.

Click New to enter a new class.

Go to <_TABNAME=LIST_CLASS_> > <_TASKCATEGORY=LIST_CLASS_> > Classes for details about existing classes. */
  class?: string;
  /**  */
  createddate?: Date;
  /**  */
  createdfrom?: string;
  /** Select the vendor transaction currency you want to enter this return authorization in.

If you are creating this return authorization from a purchase order, the currency from the originating purchase order is used and cannot be changed. */
  currency: string;
  /** This read-only field displays the currency assigned to this vendor on the Vendor record. You can access vendor records at <_TABNAME=LIST_VENDOR_> > <_TASKCATEGORY=LIST_VENDOR_> > Vendors.

All transactions with this vendor occur in this currency. NetSuite converts transaction amounts from the vendor's currency to your base currency in registers and on reports.

If any user has saved a transaction for this vendor, then the vendor's currency cannot be changed. */
  currencyname?: string;
  /**  */
  currencysymbol?: string;
  /**  */
  customform: string;
  /** Optionally select a department.

Click New to enter a new department.

Go to <_TABNAME=LIST_DEPARTMENT_> > <_TASKCATEGORY=LIST_DEPARTMENT_> > Departments for details about existing departments. */
  department?: string;
  /** Select the vendor to whom you are returning items.

If you have NetSuite OneWorld and you have defined vendor records that are shared with multiple secondary subsidiaries, the Vendor field lists all of the vendors that are assigned the selected subsidiary.

For information on existing vendors, go to <_TABNAME=LIST_VENDOR_> > <_TASKCATEGORY=LIST_VENDOR_> > Vendors. */
  entity: string;
  /**  */
  entitynexus?: string;
  /**  */
  entitytaxregnum?: string;
  /** The currency's exchange rate is shown in this field.

You can edit the exchange rate for this transaction only, or you can update the currency record with the exchange rate you enter here. */
  exchangerate: number;
  /**  */
  externalid?: string;
  /** Intercompany Transaction Status can be:

    * Linked - intercompany order has been paired with an intercompany order in another subsidiary.
    * Pending - iintercompany order has not been paired with a corresponding order in another subsidiary.
    * Rejected - intercompany purchase order or vendor return authorization cannot be paired with a sales order or return authorization because it contains incorrect information, such as subsidiary, currency, amount, or other detail. */
  intercostatus?: string;
  /** Identifies the intercompany order in another subsidiary that this order is paired with.

Order pairs are Sales Order/Purchase Order and Vendor Return Authorization/Return Authorization. */
  intercotransaction?: string;
  /**  */
  isbasecurrency?: boolean;
  /**  */
  lastmodifieddate?: Date;
  /** Optionally select a location.

Click New to enter a new location.

Go to <_TABNAME=LIST_LOCATION_> > <_TASKCATEGORY=LIST_LOCATION_> > Location for details about existing locations. */
  location?: string;
  /** If you wish, enter a memo to describe this vendor return authorization. What you enter in this field will appear on reports. */
  memo?: string;
  /** This field shows the nexus of the transaction. NetSuite automatically populates this field based on the nexus lookup logic. 

You can override the transaction nexus and tax registration number that NetSuite automatically selects by checking the Nexus Override box. When you select a different nexus in the dropdown list, the corresponding tax registration number is automatically selected in the Subsidiary Tax Reg. Number field. */
  nexus?: string;
  /** If your company uses the approval process for vendor return authorizations, Pending Approval is your default status. If your company does not use the approval process, Pending Receipt is your default status.

The default status for return authorizations is set by an administrator. You can change the status for each vendor return authorization in this field, if needed. */
  orderstatus: string;
  /**  */
  status?: string;
  /**  */
  statusRef?: string;
  /** This field displays the subsidiary associated with this transaction.

This field shows only if you use NetSuite OneWorld. If you have defined vendor records that are shared with multiple secondary subsidiaries, you can change the subsidiary where the vendor return is authorized. */
  subsidiary?: string;
  /** This field shows the tax registration number of the transaction nexus. NetSuite automatically populates this field based on the nexus lookup logic. 

You can override the transaction nexus and tax registration number that NetSuite automatically selects by checking the Nexus Override box. When you select a different tax registration number in the dropdown list, the corresponding nexus is automatically selected in the Nexus field. */
  subsidiarytaxregnum?: string;
  /** Check this box to override the tax information on the Tax Details subtab of the transaction. Only roles with at least the Edit level of the Tax Details Tab permission can override the tax details. */
  taxdetailsoverride?: boolean;
  /** Check this box to override the values in the Nexus and Subsidiary Tax Reg. Number fields. Only roles with at least the Edit level of the Tax Details Tab permission can override the values that NetSuite automatically selects in these fields. */
  taxregoverride?: boolean;
  /**  */
  total?: number;
  /** Accept, enter, or select the date of this transaction. */
  trandate: Date;
  /** Optionally enter a number to refer to this return transaction. Typically, this is a number provided by the vendor once the return is approved.

You can enter a maximum of 45 characters in this field. */
  tranid?: string;
  /** The total currency amount of the line items you enter below shows in this field. */
  usertotal?: number;
}





/** 
 * Vendor Return Authorization Sublists Definition.
 * Record's Internal Id: vendorreturnauthorization. 
 * Supports Custom Fields: true 
 */
export interface vendorreturnauthorizationSublists {
  
  /** accountingbookdetail: Accounting Books */
  accountingbookdetail: {
    /** accountingbook - Secondary Book  */
    accountingbook: string;
    /** exchangerate - Exchange Rate  */
    exchangerate?: number;
  }

  /** expense: Expenses */
  expense: {
    /** account - Account  */
    account?: string;
    /** amortizationenddate - Amort. End  */
    amortizationenddate: Date;
    /** amortizationresidual - Residual  */
    amortizationresidual: string;
    /** amortizationsched - Amort. Schedule  */
    amortizationsched: string;
    /** amortizationtype -   */
    amortizationtype: string;
    /** amortizstartdate - Amort. Start  */
    amortizstartdate: Date;
    /** amount - Amount  */
    amount?: number;
    /** category -   */
    category: string;
    /** class - Class  */
    class: string;
    /** customer - Customer  */
    customer: string;
    /** department - Department  */
    department: string;
    /** isbillable - Billable  */
    isbillable: boolean;
    /** line -   */
    line: string;
    /** location - Location  */
    location: string;
    /** memo - Memo  */
    memo: string;
    /** scheduletype -   */
    scheduletype: string;
  }

  /** item: Items */
  item: {
    /** amortizationresidual - Residual  */
    amortizationresidual: string;
    /** amortizationsched - Amort. Schedule  */
    amortizationsched: string;
    /** amortizationtype -   */
    amortizationtype: string;
    /** amortizstartdate - Amort. Start  */
    amortizstartdate: Date;
    /** amount - Amount  */
    amount: number;
    /** billvariancestatus -   */
    billvariancestatus: string;
    /** catchupperiod -   */
    catchupperiod: string;
    /** class - Class  */
    class: string;
    /** customer - Customer  */
    customer: string;
    /** deferrevrec -   */
    deferrevrec: boolean;
    /** department - Department  */
    department: string;
    /** description - Description  */
    description: string;
    /** id -   */
    id: string;
    /** inventorydetail - Inventory Detail  */
    inventorydetail: string;
    /** isbillable - Billable  */
    isbillable: boolean;
    /** isclosed - Closed  */
    isclosed: boolean;
    /** isdropshipment - Drop Shipment  */
    isdropshipment: boolean;
    /** isvsoebundle -   */
    isvsoebundle: string;
    /** item - Item  */
    item?: string;
    /** itemsubtype -   */
    itemsubtype: string;
    /** itemtype -   */
    itemtype: string;
    /** line -   */
    line: string;
    /** linenumber -   */
    linenumber: number;
    /** location - Location  */
    location?: string;
    /** matrixtype -   */
    matrixtype: string;
    /** options - Options  */
    options: string;
    /** quantity - Quantity  */
    quantity: number;
    /** rate - Rate  */
    rate: string;
    /** rateschedule -   */
    rateschedule: string;
    /** scheduletype -   */
    scheduletype: string;
    /** units - Units  */
    units: string;
    /** vendorname - Vendor Name  */
    vendorname: string;
  }

  /** taxdetails: Tax Detail */
  taxdetails: {
    /** calcdetail - Details  */
    calcdetail: string;
    /** grossamount - Gross Amount  */
    grossamount: number;
    /** netamount - Net Amount  */
    netamount: number;
    /** taxamount - Tax Amount  */
    taxamount?: number;
    /** taxbasis - Tax Basis  */
    taxbasis?: number;
    /** taxcode - Tax Code  */
    taxcode?: string;
    /** taxdetailsreference - Tax Details Reference  */
    taxdetailsreference: string;
    /** taxrate - Tax Rate  */
    taxrate?: number;
    /** transaction - Transaction  */
    transaction: string;
  }
}





