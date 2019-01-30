// This file is auto generated, do not edit it. 




/** 
 * Paycheck Journal Fields Definition.
 * Record's Internal Id: paycheckjournal. 
 * Supports Custom Fields: true 
 */
export interface paycheckjournalFields {
/**  */
  account: string;
  /**  */
  class?: string;
  /**  */
  createddate?: Date;
  /**  */
  currency: string;
  /**  */
  customform?: string;
  /**  */
  department?: string;
  /**  */
  employee: string;
  /**  */
  exchangerate?: number;
  /**  */
  externalid?: string;
  /**  */
  lastmodifieddate?: Date;
  /**  */
  location?: string;
  /**  */
  postingperiod?: string;
  /**  */
  subsidiary: string;
  /**  */
  trandate: Date;
}





/** 
 * Paycheck Journal Sublists Definition.
 * Record's Internal Id: paycheckjournal. 
 * Supports Custom Fields: true 
 */
export interface paycheckjournalSublists {
  
  /** companycontribution: Company Contributions */
  companycontribution: {
    /** amount - Amount  */
    amount?: number;
    /** class - Class  */
    class: string;
    /** department - Department  */
    department: string;
    /** id - Line Id  */
    id: number;
    /** location - Location  */
    location: string;
    /** payrollitem - Payroll Item  */
    payrollitem?: string;
  }

  /** companytax: Company Taxes */
  companytax: {
    /** amount - Amount  */
    amount?: number;
    /** class - Class  */
    class: string;
    /** department - Department  */
    department: string;
    /** id - Line Id  */
    id: number;
    /** location - Location  */
    location: string;
    /** payrollitem - Payroll Item  */
    payrollitem?: string;
  }

  /** deduction: Deductions */
  deduction: {
    /** amount - Amount  */
    amount?: number;
    /** class - Class  */
    class: string;
    /** department - Department  */
    department: string;
    /** id - Line Id  */
    id: number;
    /** location - Location  */
    location: string;
    /** payrollitem - Payroll Item  */
    payrollitem?: string;
  }

  /** earning: Earnings */
  earning: {
    /** amount - Amount  */
    amount?: number;
    /** class - Class  */
    class: string;
    /** department - Department  */
    department: string;
    /** hours - Hours  */
    hours: number;
    /** id - Line Id  */
    id: number;
    /** location - Location  */
    location: string;
    /** payrollitem - Payroll Item  */
    payrollitem?: string;
  }

  /** employeetax: Employee Taxes */
  employeetax: {
    /** amount - Amount  */
    amount?: number;
    /** class - Class  */
    class: string;
    /** department - Department  */
    department: string;
    /** id - Line Id  */
    id: number;
    /** location - Location  */
    location: string;
    /** payrollitem - Payroll Item  */
    payrollitem?: string;
  }
}





