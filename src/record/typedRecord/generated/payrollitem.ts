// This file is auto generated, do not edit it. 




/** 
 * Payroll Item Fields Definition.
 * Record's Internal Id: payrollitem. 
 * Supports Custom Fields: true 
 */
export interface payrollitemFields {
/**  */
  allowbulkentry?: boolean;
  /**  */
  applylimit?: boolean;
  /**  */
  applyrate?: boolean;
  /**  */
  basedonquantity?: boolean;
  /**  */
  defaultrate?: string;
  /**  */
  employeepaid?: boolean;
  /**  */
  expenseaccount?: string;
  /**  */
  externalid?: string;
  /**  */
  inactive?: boolean;
  /**  */
  itemtype: string;
  /**  */
  liabilityaccount?: string;
  /**  */
  limit?: number;
  /**  */
  limitiswithholding?: string;
  /**  */
  limittype?: string;
  /**  */
  masterpaycode?: string;
  /**  */
  name: string;
  /**  */
  reportingsection?: string;
  /**  */
  showinemployeecenter?: boolean;
  /** This field shows the subsidiary or parent company that issues payroll. The selection must have a valid US address, based on its ZIP Code, and a unique US Employee Identification Number (EIN). */
  subsidiary: string;
  /**  */
  usedefaults?: boolean;
  /**  */
  vendor?: string;
}





/** 
 * Payroll Item Sublists Definition.
 * Record's Internal Id: payrollitem. 
 * Supports Custom Fields: true 
 */
export interface payrollitemSublists {
  
  /** employeepaycodelist: Employees */
  employeepaycodelist: {
    /** apply - Apply  */
    apply: boolean;
    /** employeeid - Name  */
    employeeid: number;
    /** empprevstate - State  */
    empprevstate: string;
    /** inactive - Inactive  */
    inactive: boolean;
  }
}





