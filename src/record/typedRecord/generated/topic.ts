// This file is auto generated, do not edit it. 




/** 
 * Topic Fields Definition.
 * Record's Internal Id: topic. 
 * Supports Custom Fields: true 
 */
export interface topicFields {
/** Enter a description of this topic.

This description shows in the topic list and also where it is published. */
  description?: string;
  /**  */
  externalid?: string;
  /** Check this box if you no longer want to use this record.

Inactivating records removes them from lists and references everywhere in your account, but they are still available by clicking the Show Inactives box on lists. */
  isinactive?: boolean;
  /** Enter the text of this solution or topic here.

You can use Javascript, HTML and CRMDSK tags in this description.

Click Preview to see how this solution will appear when published. */
  longdescription?: string;
  /** If this topic is a subtopic, select the parent topic here.

If this is a top-level topic, leave this field blank. */
  parenttopic?: string;
  /** Enter a title for this solution.

Because solution titles can be searched, this title should be relative to the solution subject.

This title shows on the Solutions subtab of the case and topic records that this solution is applied to and in published knowledge bases. */
  title: string;
}





/** 
 * Topic Sublists Definition.
 * Record's Internal Id: topic. 
 * Supports Custom Fields: true 
 */
export interface topicSublists {
  
}





