// This file is auto generated, do not edit it. 




/** 
 * Commerce Category Fields Definition.
 * Record's Internal Id: commercecategory. 
 * Supports Custom Fields: true 
 */
export interface commercecategoryFields {
/** The addition to head field lets you specify code such as HTML, CSS, or JavaScript to include between the <head></head> tags on this category page. */
  addtohead?: string;
  /** The catalog to which the category is assigned. */
  catalog: string;
  /**  */
  created?: Date;
  /** Specifies the description for the record. */
  description?: string;
  /** Specifies if the category is available to visitors on your site. */
  displayinsite?: string;
  /**  */
  externalid?: string;
  /** Mark a category as inactive when you want to prevent it from */
  isinactive?: boolean;
  /**  */
  lastmodified?: Date;
  /**  */
  lastmodifiedby?: string;
  /** The description you enter here is an important SEO consideration. */
  metadescription?: string;
  /** Meta keywords for the page. */
  metakeywords?: string;
  /** Specifies the name for this record. */
  name: string;
  /**  */
  origbinactive?: boolean;
  /** Image file in the file */
  pagebanner?: string;
  /** This heading displays at the top of the category page. The page template must be configured to display the heading. */
  pageheading?: string;
  /** Enter a title for the page. This value populates the <title> element for an category page. */
  pagetitle?: string;
  /** If you are creating a subcategory, select the primary parent */
  primaryparent?: string;
  /** This number controls the order of how categories are displayed in SMT. */
  sequencenumber?: number;
  /** The value you enter here populates the <priority></priority> element in an XML sitemap. Valid values for the priority are 0.0 to 1.0. If no priority is set in the sitemap then the default priority of 0.5 is used. These priorities let you rank the importance of the pages on your site as they relate to each other. Search results pages may consider this ranking when presenting multiple pages from your site and order the pages based on the priority. */
  sitemappriority?: string;
  /** File in the file cabinet to display as the thumbnail image for this category. */
  thumbnail?: string;
  /** The URL Fragment specifies the section of the URL used to navigate to the category page. The fragment does not include slashes. */
  urlfragment: string;
  /**  */
  version?: number;
}





/** 
 * Commerce Category Sublists Definition.
 * Record's Internal Id: commercecategory. 
 * Supports Custom Fields: true 
 */
export interface commercecategorySublists {
  
  /** items: Items */
  items: {
    /** item - Items  */
    item: string;
    /** primarycategory - Primary Category  */
    primarycategory: boolean;
    /** sequencenumber - Sequence Number  */
    sequencenumber: number;
  }

  /** subcategories: Subcategories */
  subcategories: {
    /** addtoheadoverride - Addition to &lt;head&gt; Override Addition to head override when used as a subcategory for the specified parent category. If this is blank the value from the category record is used. */
    addtoheadoverride: string;
    /** descriptionoverride - Description Override Category description when used as a subcategory for the specified parent. If this is blank the value from the category record is used. */
    descriptionoverride: string;
    /** displayinsiteoverride - Display in Web Site Override Display in site override value when used as a subcategory for the specified parent. If this is blank the value from the category record is used. */
    displayinsiteoverride: string;
    /** metadescriptionoverride - Meta Description Override Meta description override when used as a subcategory. If this is blank the value from the category record is used. */
    metadescriptionoverride: string;
    /** metakeywordsoverride - Meta Keywords Override Meta key word override when used as a subcategory for the specified parent category. If this is blank the value from the category record is used. */
    metakeywordsoverride: string;
    /** nameoverride - Name Override Category name override when used as a subcategory for the specified parent category. If this is blank the value from the category record is used. */
    nameoverride: string;
    /** pagebanneroverride - Page Banner Override Page banner image override when used as a subcategory for the specified parent category. If this is blank the value from the category record is used. */
    pagebanneroverride: string;
    /** pageheadingoverride - Heading Override Page heading override when used as a subcategory for the specified parent category. If this is blank the value from the category record is used. */
    pageheadingoverride: string;
    /** pagetitleoverride - Title Override Page title override value when used as a subcategory for the specified parent category. If this is blank the value from the category record is used. */
    pagetitleoverride: string;
    /** sequencenumber - Sequence Number Sequence number when used as a subcategory for a specified parent. */
    sequencenumber: number;
    /** sitemappriorityoverride - Sitemap Priority Override Site map priority override value when used as a subcategory for a specified parent. If this is blank the value from the category record is used. */
    sitemappriorityoverride: string;
    /** subcategory - Subcategory Name of category assigned as a subcategory. */
    subcategory?: string;
    /** thumbnailoverride - Thumbnail Image Override Override thumbnail image when used as a subcategory for the specified parent. If this is blank the value from the category record is used. */
    thumbnailoverride: string;
    /** urlfragmentoverride - URL Fragment Override URL fragment when used as a subcategory for the specified parent category. If this is blank the value from the category record is used. */
    urlfragmentoverride: string;
  }

  /** urls: URLs */
  urls: {
    /** fullurl - Full Url  */
    fullurl: string;
    /** id - Internal ID  */
    id: number;
    /** idpath - ID Path  */
    idpath: string;
    /** isprimary - Primary  */
    isprimary: boolean;
    /** nestlevel - Level  */
    nestlevel: number;
  }
}





