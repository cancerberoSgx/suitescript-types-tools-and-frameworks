// This file is auto generated, do not edit it. 




/** 
 * CMS Content Fields Definition.
 * Record's Internal Id: cmscontent. 
 * Supports Custom Fields: true 
 */
export interface cmscontentFields {
/** Specifies the name of the area on the page where this content is placed. This name is the value of the data-cms-area attribute from the page template file. */
  areaname: string;
  /** Specifies the URL used when the content was created or changed. This URL does not necessarily reflect the only URL where the content is displayed. For example, content with page type and global context, can display on many pages. The URL in this field reflects only the URL of the page where the content was added or last edited. */
  changeurl?: string;
  /** Specifies the type of the content. Core content types include:CMS_IMAGE,CMS_HTML,CMS_MERCHZONE,CMS_TEXT. Additional content types may also be available if you have created custom content types. */
  cmscontenttype: string;
  /**  */
  createdby?: string;
  /**  */
  createddate?: Date;
  /** The description for the record. */
  description?: string;
  /** This identifies the end date and time for the record. When this date is passed, the content is no longer be visible the site. If there is no end date, the content does not expire. This relates to Content Visibility topic in the Help. Enter the date and time in the same format as specified in your preferences. */
  enddate?: Date;
  /**  */
  externalid?: string;
  /** This corresponds with the SMT All Pages area type. When content is configured to display in all pages, this field contains the *. */
  global?: string;
  /**  */
  hidden?: boolean;
  /**  */
  id?: number;
  /** This is the system-assigned internal identifier for the record. */
  internalid?: number;
  /**  */
  lastmodifiedby?: string;
  /**  */
  lastmodifieddate?: Date;
  /**  */
  matchcount?: number;
  /** Determines when content is rendered. Values include the following:Exact — Renders the content when all parameters exactly match. For example an exact match for /brandname renders only for a given parameter of /brandname. Broad – Renders the content when the given parameters contains the parameter for the placement. For example, a broad match for /brandname also renders on /brandname/shoes. */
  matchtype: string;
  /** Enter the name for this record. */
  name?: string;
  /** This corresponds with the SMT This Page area scope and is used for content that you want to place on a specific type of page such as a product detail page or a facet browse page. Available options are: Product Details — denotes a product detail page. facet-browse — denotes a facet browse page or a category page.cms-landing-page — denotes a landing page. */
  pagetype?: string;
  /** The corresponds with the This Page area type and denotes the URL to the page. */
  path?: string;
  /** Enter a sequence number for ordering root level categories. */
  sequencenumber?: number;
  /** Identifies the ID for the custom record that stores the content. The ID links the custom record for the content instance to the corresponding CMS Content record. */
  settings?: number;
  /** Specify the site for the content type. */
  site: string;
  /** This identifies the start date and time for the record you are viewing. If this is a future date, the content does not display until that date. This related to the Content Visibility topic in the help. Enter the date and time in the same format as specified in your preferences. */
  startdate?: Date;
  /** Identifies the template used when rendering content. This should be set to default. */
  template: string;
}





/** 
 * CMS Content Sublists Definition.
 * Record's Internal Id: cmscontent. 
 * Supports Custom Fields: true 
 */
export interface cmscontentSublists {
  
}





