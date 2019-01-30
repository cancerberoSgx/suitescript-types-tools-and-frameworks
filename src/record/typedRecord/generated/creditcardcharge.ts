// This file is auto generated, do not edit it. 




/** 
 * Credit Card Charge Fields Definition.
 * Record's Internal Id: creditcardcharge. 
 * Supports Custom Fields: true 
 */
export interface creditcardchargeFields {
/**  */
  account?: string;
  /**  */
  balance?: number;
  /**  */
  class?: string;
  /**  */
  createddate?: Date;
  /**  */
  currency?: string;
  /**  */
  currencyname?: string;
  /**  */
  currencysymbol?: string;
  /**  */
  customform: string;
  /**  */
  department?: string;
  /**  */
  entity: string;
  /**  */
  entity_nexus_country?: string;
  /**  */
  entitynexus?: string;
  /**  */
  exchangerate: number;
  /**  */
  externalid?: string;
  /**  */
  isbasecurrency?: boolean;
  /**  */
  lastmodifieddate?: Date;
  /**  */
  location: string;
  /**  */
  memo?: string;
  /**  */
  nexus?: string;
  /**  */
  nexus_country?: string;
  /**  */
  postingperiod: string;
  /**  */
  subsidiary?: string;
  /**  */
  taxperiod?: string;
  /**  */
  total?: number;
  /**  */
  trandate: Date;
  /**  */
  tranid?: string;
  /**  */
  transactionnumber?: string;
  /**  */
  trantype?: string;
  /**  */
  updatecurrency?: string;
  /**  */
  usertotal?: number;
}





/** 
 * Credit Card Charge Sublists Definition.
 * Record's Internal Id: creditcardcharge. 
 * Supports Custom Fields: true 
 */
export interface creditcardchargeSublists {
  
  /** expense: Expenses */
  expense: {
    /** account - Account  */
    account?: string;
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
    /** expenseitem - Expense Item  */
    expenseitem: number;
    /** isbillable - Billable  */
    isbillable: boolean;
    /** line - Line  */
    line: number;
    /** location - Location  */
    location: string;
    /** memo - Memo  */
    memo: string;
    /** numrules - Expense-Based Rules  */
    numrules: number;
  }

  /** item: Items */
  item: {
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
    /** isbillable - Billable  */
    isbillable: boolean;
    /** isvsoebundle -   */
    isvsoebundle: string;
    /** item - Item  */
    item?: string;
    /** itemsubtype - Item subtype  */
    itemsubtype: string;
    /** itemtype - Item Type  */
    itemtype: string;
    /** line -   */
    line: string;
    /** linenumber - Line Number  */
    linenumber: number;
    /** linked - Linked  */
    linked: string;
    /** location - Location  */
    location?: string;
    /** matrixtype - Matrix Type  */
    matrixtype: string;
    /** options - Options  */
    options: string;
    /** printitems - Print Items  */
    printitems: string;
    /** quantity - Quantity  */
    quantity: number;
    /** rate - Rate  */
    rate: string;
    /** rateschedule -   */
    rateschedule: string;
    /** vendorname - Vendor Name  */
    vendorname: string;
  }

  /** reimbursements: Reimbursements */
  reimbursements: {
    /** id -   */
    id: string;
  }
}





