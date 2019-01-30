// This file is auto generated, do not edit it. 




/** 
 * Paycheck Fields Definition.
 * Record's Internal Id: paycheck. 
 * Supports Custom Fields: true 
 */
export interface paycheckFields {
/** Select the bank account from which you want to issue pay checks. */
  account?: string;
  /** Accept or enter the address of the employee. */
  address?: string;
  /** NetSuite displays the balance in the bank account you selected. */
  balance?: number;
  /**  */
  chkamount?: number;
  /** The class shown on the employee's record autofills in this field, or you can select a class for this transaction. */
  class?: string;
  /**  */
  createddate?: Date;
  /** The department shown on the employee's record autofills in this field, or you can select a department for this transaction. */
  department?: string;
  /** Select the name of the employee. */
  entity: string;
  /**  */
  externalid?: string;
  /**  */
  lastmodifieddate?: Date;
  /** Enter a memo that prints on the check itself. */
  memo?: string;
  /** This is the last date in the payroll period. */
  periodending?: Date;
  /** Select the period you want to post this paycheck to.

If a period is closed, you cannot post to that period. */
  postingperiod?: string;
  /**  */
  startdate?: Date;
  /**  */
  status?: string;
  /**  */
  statusRef?: string;
  /**  */
  taxperiod?: string;
  /** NetSuite inserts today's date for the posting date of this paycheck. You can type or pick another date.

What you enter here determines the date range in which this transaction appears on the Bank Register.

You can select or enter custom date ranges on registers. */
  trandate: Date;
  /** If you have checked the To Be Printed box, you will choose starting numbers later, when you print those checks.

If you are immediately printing this check, NetSuite increases the largest check number by one. You can type another number here, but the next number will revert to the standard pattern. */
  tranid?: string;
  /** NetSuite will calculate the net pay amount as you add or edit individual items on the tabs below. */
  useramount: number;
  /** NetSuite populates the Workplace field for each employee based on the workplace on each employee record. */
  workplace?: string;
}





/** 
 * Paycheck Sublists Definition.
 * Record's Internal Id: paycheck. 
 * Supports Custom Fields: true 
 */
export interface paycheckSublists {
  
  /** paycontrib: Contributions */
  paycontrib: {
    /** amount - Amount  */
    amount?: number;
    /** manualentry - Manual Entry  */
    manualentry: boolean;
    /** payitem - Contributions  */
    payitem?: string;
    /** wagebase - Wage Base  */
    wagebase: number;
  }

  /** paydeduct: Deductions */
  paydeduct: {
    /** amount - Amount  */
    amount?: number;
    /** manualentry - Manual Entry  */
    manualentry: boolean;
    /** payitem - Deductions  */
    payitem?: string;
    /** wagebase - Wage Base  */
    wagebase: number;
  }

  /** payearn: Earnings */
  payearn: {
    /** count - Hours/Base  */
    count: number;
    /** grossamount - Amount  */
    grossamount?: number;
    /** manualentry - Manual Entry  */
    manualentry: boolean;
    /** payitem - Earnings  */
    payitem?: string;
    /** rate - Rate  */
    rate: string;
    /** serviceitem - Service Item  */
    serviceitem: string;
  }

  /** paytax: Taxes */
  paytax: {
    /** amount - Amount  */
    amount?: number;
    /** isexempt - Exempt  */
    isexempt: boolean;
    /** isresidenttax - Resident Status  */
    isresidenttax: boolean;
    /** paytax - Taxes  */
    paytax: string;
    /** reportablewagebase - Reportable Wage Base  */
    reportablewagebase: number;
    /** sequence - Sequence #  */
    sequence: number;
    /** taxablewagebase - Taxable Wage Base  */
    taxablewagebase: number;
    /** taxedwagebase - Taxed Wage Base  */
    taxedwagebase: number;
  }

  /** paytime: Time */
  paytime: {
    /** amount - Amount  */
    amount: number;
    /** apply - Pay  */
    apply: boolean;
    /** count - Hours  */
    count: number;
    /** custjob - Customer:Job  */
    custjob: string;
    /** ddate - Date  */
    ddate: Date;
    /** payitemname - Time Type  */
    payitemname: string;
    /** rate - Rate  */
    rate: number;
    /** serviceitem - Service Item  */
    serviceitem: string;
  }
}





