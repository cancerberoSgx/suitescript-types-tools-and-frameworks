// This file is auto generated, do not edit it. 




/** 
 * Allocation Schedule Fields Definition.
 * Record's Internal Id: allocationschedule. 
 * Supports Custom Fields: true 
 */
export interface allocationscheduleFields {
/**  */
  accountingbook?: string;
  /**  */
  accountsfromsource?: boolean;
  /**  */
  allocationmode?: string;
  /**  */
  creditaccount?: string;
  /**  */
  creditclass?: string;
  /**  */
  creditdepartment?: string;
  /**  */
  creditentity?: string;
  /**  */
  creditlocation?: string;
  /**  */
  datebasis?: string;
  /**  */
  externalid?: string;
  /**  */
  frequency?: string;
  /**  */
  inactive?: boolean;
  /**  */
  name: string;
  /**  */
  nextdate?: Date;
  /**  */
  remindforever?: string;
  /**  */
  subsequentdate?: Date;
  /**  */
  subsidiary: string;
  /**  */
  unitlabel?: string;
  /**  */
  unitstype?: string;
  /**  */
  weightsinpercentage?: boolean;
  /**  */
  weightsource?: string;
}





/** 
 * Allocation Schedule Sublists Definition.
 * Record's Internal Id: allocationschedule. 
 * Supports Custom Fields: true 
 */
export interface allocationscheduleSublists {
  
  /** allocationdestination: allocationweights */
  allocationdestination: {
    /** account - Account  */
    account?: string;
    /** balance - Balance  */
    balance: string;
    /** class - Class  */
    class: string;
    /** department - Department  */
    department: string;
    /** entity - Name  */
    entity: string;
    /** location - Location  */
    location: string;
    /** weight - Weight  */
    weight: number;
  }

  /** allocationsource: Source of the allocation amounts */
  allocationsource: {
    /** account - Account  */
    account: string;
    /** class - Class  */
    class: string;
    /** department - Department  */
    department: string;
    /** entity - Name  */
    entity: string;
    /** location - Location  */
    location: string;
  }
}





