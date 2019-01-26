// This file is auto generated, do not edit it. 

import { TypedRecord, TypedRecordImpl } from '../typedRecord';
import { Record } from 'N/record';




/** 
 * Commerce Category Fields Definition.
 * Record's Internal Id: commercecategory. 
 * Supports Custom Fields: true 
 */
export interface commercecategoryFields {
/** The addition to head field lets you specify code such as HTML, CSS, or JavaScript to include between the <head></head> tags on this category page. */
  addtohead: string | undefined;
  /** The catalog to which the category is assigned. */
  catalog: string;
  /**  */
  created: Date | undefined;
  /** Specifies the description for the record. */
  description: string | undefined;
  /** Specifies if the category is available to visitors on your site. */
  displayinsite: string | undefined;
  /**  */
  externalid: string | undefined;
  /** Mark a category as inactive when you want to prevent it from */
  isinactive: boolean | undefined;
  /**  */
  lastmodified: Date | undefined;
  /**  */
  lastmodifiedby: string | undefined;
  /** The description you enter here is an important SEO consideration. */
  metadescription: string | undefined;
  /** Meta keywords for the page. */
  metakeywords: string | undefined;
  /** Specifies the name for this record. */
  name: string;
  /**  */
  origbinactive: boolean | undefined;
  /** Image file in the file */
  pagebanner: string | undefined;
  /** This heading displays at the top of the category page. The page template must be configured to display the heading. */
  pageheading: string | undefined;
  /** Enter a title for the page. This value populates the <title> element for an category page. */
  pagetitle: string | undefined;
  /** If you are creating a subcategory, select the primary parent */
  primaryparent: string | undefined;
  /** This number controls the order of how categories are displayed in SMT. */
  sequencenumber: number | undefined;
  /** The value you enter here populates the <priority></priority> element in an XML sitemap. Valid values for the priority are 0.0 to 1.0. If no priority is set in the sitemap then the default priority of 0.5 is used. These priorities let you rank the importance of the pages on your site as they relate to each other. Search results pages may consider this ranking when presenting multiple pages from your site and order the pages based on the priority. */
  sitemappriority: string | undefined;
  /** File in the file cabinet to display as the thumbnail image for this category. */
  thumbnail: string | undefined;
  /** The URL Fragment specifies the section of the URL used to navigate to the category page. The fragment does not include slashes. */
  urlfragment: string;
  /**  */
  version: number | undefined;
}

export class commercecategoryFieldsImpl implements commercecategoryFields {
  constructor(protected typedRecord: TypedRecord){ 
  }
  public get addtohead(): string | undefined {
    return this.typedRecord.nsRecord.getValue('addtohead') as any;
  }
  public set addtohead(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('addtohead', value as any)
  }
  public get catalog(): string {
    return this.typedRecord.nsRecord.getValue('catalog') as any;
  }
  public set catalog(value: string) {
    this.typedRecord.nsRecord.setValue('catalog', value as any)
  }
  public get created(): Date | undefined {
    return this.typedRecord.nsRecord.getValue('created') as any;
  }
  public set created(value: Date | undefined) {
    this.typedRecord.nsRecord.setValue('created', value as any)
  }
  public get description(): string | undefined {
    return this.typedRecord.nsRecord.getValue('description') as any;
  }
  public set description(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('description', value as any)
  }
  public get displayinsite(): string | undefined {
    return this.typedRecord.nsRecord.getValue('displayinsite') as any;
  }
  public set displayinsite(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('displayinsite', value as any)
  }
  public get externalid(): string | undefined {
    return this.typedRecord.nsRecord.getValue('externalid') as any;
  }
  public set externalid(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('externalid', value as any)
  }
  public get isinactive(): boolean | undefined {
    return this.typedRecord.nsRecord.getValue('isinactive') as any;
  }
  public set isinactive(value: boolean | undefined) {
    this.typedRecord.nsRecord.setValue('isinactive', value as any)
  }
  public get lastmodified(): Date | undefined {
    return this.typedRecord.nsRecord.getValue('lastmodified') as any;
  }
  public set lastmodified(value: Date | undefined) {
    this.typedRecord.nsRecord.setValue('lastmodified', value as any)
  }
  public get lastmodifiedby(): string | undefined {
    return this.typedRecord.nsRecord.getValue('lastmodifiedby') as any;
  }
  public set lastmodifiedby(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('lastmodifiedby', value as any)
  }
  public get metadescription(): string | undefined {
    return this.typedRecord.nsRecord.getValue('metadescription') as any;
  }
  public set metadescription(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('metadescription', value as any)
  }
  public get metakeywords(): string | undefined {
    return this.typedRecord.nsRecord.getValue('metakeywords') as any;
  }
  public set metakeywords(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('metakeywords', value as any)
  }
  public get name(): string {
    return this.typedRecord.nsRecord.getValue('name') as any;
  }
  public set name(value: string) {
    this.typedRecord.nsRecord.setValue('name', value as any)
  }
  public get origbinactive(): boolean | undefined {
    return this.typedRecord.nsRecord.getValue('origbinactive') as any;
  }
  public set origbinactive(value: boolean | undefined) {
    this.typedRecord.nsRecord.setValue('origbinactive', value as any)
  }
  public get pagebanner(): string | undefined {
    return this.typedRecord.nsRecord.getValue('pagebanner') as any;
  }
  public set pagebanner(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('pagebanner', value as any)
  }
  public get pageheading(): string | undefined {
    return this.typedRecord.nsRecord.getValue('pageheading') as any;
  }
  public set pageheading(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('pageheading', value as any)
  }
  public get pagetitle(): string | undefined {
    return this.typedRecord.nsRecord.getValue('pagetitle') as any;
  }
  public set pagetitle(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('pagetitle', value as any)
  }
  public get primaryparent(): string | undefined {
    return this.typedRecord.nsRecord.getValue('primaryparent') as any;
  }
  public set primaryparent(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('primaryparent', value as any)
  }
  public get sequencenumber(): number | undefined {
    return this.typedRecord.nsRecord.getValue('sequencenumber') as any;
  }
  public set sequencenumber(value: number | undefined) {
    this.typedRecord.nsRecord.setValue('sequencenumber', value as any)
  }
  public get sitemappriority(): string | undefined {
    return this.typedRecord.nsRecord.getValue('sitemappriority') as any;
  }
  public set sitemappriority(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('sitemappriority', value as any)
  }
  public get thumbnail(): string | undefined {
    return this.typedRecord.nsRecord.getValue('thumbnail') as any;
  }
  public set thumbnail(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('thumbnail', value as any)
  }
  public get urlfragment(): string {
    return this.typedRecord.nsRecord.getValue('urlfragment') as any;
  }
  public set urlfragment(value: string) {
    this.typedRecord.nsRecord.setValue('urlfragment', value as any)
  }
  public get version(): number | undefined {
    return this.typedRecord.nsRecord.getValue('version') as any;
  }
  public set version(value: number | undefined) {
    this.typedRecord.nsRecord.setValue('version', value as any)
  }
}


/** 
 * Commerce Category Record Definition.
 * Record's Internal Id: commercecategory. 
 * Supports Custom Fields: true 
 */
export interface commercecategoryRecord extends TypedRecord<commercecategoryFields> {

}

export class commercecategoryRecordImpl extends TypedRecordImpl<commercecategoryFields> implements commercecategoryRecord {
  constructor(public nsRecord: Record) {
    super(nsRecord)
    this._fields = new commercecategoryFieldsImpl(this);
    // this._sublists = commercecategorynew FieldsImpl(this)
  }
}


