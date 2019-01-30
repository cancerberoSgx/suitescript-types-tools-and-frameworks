// This file is auto generated, do not edit it. 




/** 
 * Intercompany Allocation Schedule Fields Definition.
 * Record's Internal Id: intercompallocationschedule. 
 * Supports Custom Fields: true 
 */
export interface intercompallocationscheduleFields {
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
  sourceintercompanyaccount: string;
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
 * Intercompany Allocation Schedule Sublists Definition.
 * Record's Internal Id: intercompallocationschedule. 
 * Supports Custom Fields: true 
 */
export interface intercompallocationscheduleSublists {
  
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
    /** intercompanyaccount - Intercompany Account  */
    intercompanyaccount?: string;
    /** location - Location  */
    location: string;
    /** subsidiary - Subsidiary  */
    subsidiary?: string;
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





