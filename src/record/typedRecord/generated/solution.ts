// This file is auto generated, do not edit it. 




/** 
 * Solution Fields Definition.
 * Record's Internal Id: solution. 
 * Supports Custom Fields: true 
 */
export interface solutionFields {
/** If you want to assign this solution to someone, select that person in this field. */
  assigned?: string;
  /**  */
  autoname?: boolean;
  /** The date this solution was created is shown here. */
  createddate?: Date;
  /** This field shows your default solution form.

If you select another form, this page will change to that form.

To create a custom solution form, select New. */
  customform?: string;
  /** Check this box if you want this solution available for published knowledge bases.

If you do not check this box, this solution will not display if you publish its topic in a knowledge base. */
  displayonline?: boolean;
  /**  */
  eventnumber?: string;
  /**  */
  externalid?: string;
  /** Check this box if you no longer want to use this record.

Inactivating records removes them from lists and references everywhere in your account, but they are still available by clicking the Show Inactives box on lists. */
  isinactive?: boolean;
  /** The date and time this solution was last modified is shown here. */
  lastmodifieddate?: Date;
  /** Enter the text of this solution or topic here.

You can use Javascript, HTML and CRMDSK tags in this description.

Click Preview to see how this solution will appear when published. */
  longdescription: string;
  /** Write an abstract or brief description about what this solution resolves. Enter text only, not HTML or other code.

This abstract shows on the Solutions list and on the Solutions subtab of case and topic records.

The abstract also shows with solution titles in published knowledge bases. */
  message: string;
  /** To avoid duplicate solution codes, NetSuite enters the next available solution code here.

You can accept this code or enter a new code for this solution. Codes can include letters and numbers. */
  solutioncode?: string;
  /** Select the status of this solution.

Unapproved solutions cannot be published. */
  status: string;
  /** Enter a title for this solution.

Because solution titles can be searched, this title should be relative to the solution subject.

This title shows on the Solutions subtab of the case and topic records that this solution is applied to and in published knowledge bases. */
  title: string;
}





/** 
 * Solution Sublists Definition.
 * Record's Internal Id: solution. 
 * Supports Custom Fields: true 
 */
export interface solutionSublists {
  
  /** solutions: Solutions */
  solutions: {
    /** id -   */
    id: number;
    /** message - Abstract  */
    message: string;
    /** solution - Code/Title  */
    solution?: string;
  }

  /** topics: Topics */
  topics: {
    /** topic - Topic  */
    topic?: string;
  }
}





