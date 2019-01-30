// This file is auto generated, do not edit it. 




/** 
 * Project Template Fields Definition.
 * Record's Internal Id: projecttemplate. 
 * Supports Custom Fields: true 
 */
export interface projecttemplateFields {
/**  */
  allowallresourcesfortasks?: boolean;
  /**  */
  allowexpenses?: boolean;
  /**  */
  allowtasktimeforrsrcalloc?: boolean;
  /**  */
  allowtime?: boolean;
  /**  */
  applyprojectexpensetypetoall?: boolean;
  /**  */
  bbudgetshowcalculatedlines?: boolean;
  /**  */
  bbudgetusecalculatedvalues?: boolean;
  /**  */
  billingschedule?: string;
  /**  */
  cbudgetlaborbudgetfromalloc?: boolean;
  /**  */
  cbudgetshowcalculatedlines?: boolean;
  /**  */
  cbudgetusecalculatedvalues?: boolean;
  /**  */
  customform: string;
  /**  */
  entityid: string;
  /**  */
  estimatedcost?: number;
  /**  */
  estimatedgrossprofit?: number;
  /**  */
  estimatedgrossprofitpercent?: number;
  /**  */
  estimatedlaborcost?: number;
  /**  */
  estimatedlaborrevenue?: number;
  /**  */
  estimatedrevenue?: number;
  /**  */
  estimatedrevenuejc?: number;
  /**  */
  estimatedtimeoverride?: string;
  /**  */
  externalid?: string;
  /**  */
  includecrmtasksintotals?: boolean;
  /**  */
  isexempttime?: boolean;
  /**  */
  isinactive?: boolean;
  /**  */
  isproductivetime?: boolean;
  /**  */
  isutilizedtime?: boolean;
  /**  */
  jobbillingtype?: string;
  /**  */
  jobitem?: string;
  /**  */
  jobprice?: number;
  /**  */
  limittimetoassignees?: boolean;
  /**  */
  materializetime?: boolean;
  /**  */
  projectexpensetype: string;
  /**  */
  projectformtemplate: string;
  /**  */
  startdate?: Date;
  /**  */
  subsidiary: string;
  /**  */
  useallocatedtimeforforecast?: boolean;
}





/** 
 * Project Template Sublists Definition.
 * Record's Internal Id: projecttemplate. 
 * Supports Custom Fields: true 
 */
export interface projecttemplateSublists {
  
  /** bbudget: Billing Budget */
  bbudget: {
    /** selectline - Select  */
    selectline: boolean;
    /** totalamount - Project Total  */
    totalamount: number;
  }

  /** cbudget: Cost Budget */
  cbudget: {
    /** selectline - Select  */
    selectline: boolean;
    /** totalamount - Project Total  */
    totalamount: number;
  }

  /** jobresources: Resource Details */
  jobresources: {
    /** jobresource - Name  */
    jobresource?: string;
    /** overridencost - Cost Override  */
    overridencost: number;
    /** role - Role  */
    role?: string;
  }
}





