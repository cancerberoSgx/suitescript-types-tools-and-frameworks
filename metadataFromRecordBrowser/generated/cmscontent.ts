// This file is auto generated, do not edit it. 

import { TypedRecord, TypedRecordImpl } from '../typedRecord';
import { Record } from 'N/record';




/** 
 * CMS Content Fields Definition.
 * Record's Internal Id: cmscontent. 
 * Supports Custom Fields: true 
 */
export interface cmscontentFields {
/** Specifies the name of the area on the page where this content is placed. This name is the value of the data-cms-area attribute from the page template file. */
  areaname: string;
  /** Specifies the URL used when the content was created or changed. This URL does not necessarily reflect the only URL where the content is displayed. For example, content with page type and global context, can display on many pages. The URL in this field reflects only the URL of the page where the content was added or last edited. */
  changeurl: string | undefined;
  /** Specifies the type of the content. Core content types include:CMS_IMAGE,CMS_HTML,CMS_MERCHZONE,CMS_TEXT. Additional content types may also be available if you have created custom content types. */
  cmscontenttype: string;
  /**  */
  createdby: string | undefined;
  /**  */
  createddate: Date | undefined;
  /** The description for the record. */
  description: string | undefined;
  /** This identifies the end date and time for the record. When this date is passed, the content is no longer be visible the site. If there is no end date, the content does not expire. This relates to Content Visibility topic in the Help. Enter the date and time in the same format as specified in your preferences. */
  enddate: string | undefined;
  /**  */
  externalid: string | undefined;
  /** This corresponds with the SMT All Pages area type. When content is configured to display in all pages, this field contains the *. */
  global: string | undefined;
  /**  */
  hidden: boolean | undefined;
  /**  */
  id: number | undefined;
  /** This is the system-assigned internal identifier for the record. */
  internalid: number | undefined;
  /**  */
  lastmodifiedby: string | undefined;
  /**  */
  lastmodifieddate: Date | undefined;
  /**  */
  matchcount: number | undefined;
  /** Determines when content is rendered. Values include the following:Exact — Renders the content when all parameters exactly match. For example an exact match for /brandname renders only for a given parameter of /brandname. Broad – Renders the content when the given parameters contains the parameter for the placement. For example, a broad match for /brandname also renders on /brandname/shoes. */
  matchtype: string;
  /** Enter the name for this record. */
  name: string | undefined;
  /** This corresponds with the SMT This Page area scope and is used for content that you want to place on a specific type of page such as a product detail page or a facet browse page. Available options are: Product Details — denotes a product detail page. facet-browse — denotes a facet browse page or a category page.cms-landing-page — denotes a landing page. */
  pagetype: string | undefined;
  /** The corresponds with the This Page area type and denotes the URL to the page. */
  path: string | undefined;
  /** Enter a sequence number for ordering root level categories. */
  sequencenumber: number | undefined;
  /** Identifies the ID for the custom record that stores the content. The ID links the custom record for the content instance to the corresponding CMS Content record. */
  settings: number | undefined;
  /** Specify the site for the content type. */
  site: string;
  /** This identifies the start date and time for the record you are viewing. If this is a future date, the content does not display until that date. This related to the Content Visibility topic in the help. Enter the date and time in the same format as specified in your preferences. */
  startdate: string | undefined;
  /** Identifies the template used when rendering content. This should be set to default. */
  template: string;
}

export class cmscontentFieldsImpl implements cmscontentFields {
  constructor(protected typedRecord: TypedRecord){ 
  }
  public get areaname(): string {
    return this.typedRecord.nsRecord.getValue('areaname') as any;
  }
  public set areaname(value: string) {
    this.typedRecord.nsRecord.setValue('areaname', value as any)
  }
  public get changeurl(): string | undefined {
    return this.typedRecord.nsRecord.getValue('changeurl') as any;
  }
  public set changeurl(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('changeurl', value as any)
  }
  public get cmscontenttype(): string {
    return this.typedRecord.nsRecord.getValue('cmscontenttype') as any;
  }
  public set cmscontenttype(value: string) {
    this.typedRecord.nsRecord.setValue('cmscontenttype', value as any)
  }
  public get createdby(): string | undefined {
    return this.typedRecord.nsRecord.getValue('createdby') as any;
  }
  public set createdby(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('createdby', value as any)
  }
  public get createddate(): Date | undefined {
    return this.typedRecord.nsRecord.getValue('createddate') as any;
  }
  public set createddate(value: Date | undefined) {
    this.typedRecord.nsRecord.setValue('createddate', value as any)
  }
  public get description(): string | undefined {
    return this.typedRecord.nsRecord.getValue('description') as any;
  }
  public set description(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('description', value as any)
  }
  public get enddate(): string | undefined {
    return this.typedRecord.nsRecord.getValue('enddate') as any;
  }
  public set enddate(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('enddate', value as any)
  }
  public get externalid(): string | undefined {
    return this.typedRecord.nsRecord.getValue('externalid') as any;
  }
  public set externalid(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('externalid', value as any)
  }
  public get global(): string | undefined {
    return this.typedRecord.nsRecord.getValue('global') as any;
  }
  public set global(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('global', value as any)
  }
  public get hidden(): boolean | undefined {
    return this.typedRecord.nsRecord.getValue('hidden') as any;
  }
  public set hidden(value: boolean | undefined) {
    this.typedRecord.nsRecord.setValue('hidden', value as any)
  }
  public get id(): number | undefined {
    return this.typedRecord.nsRecord.getValue('id') as any;
  }
  public set id(value: number | undefined) {
    this.typedRecord.nsRecord.setValue('id', value as any)
  }
  public get internalid(): number | undefined {
    return this.typedRecord.nsRecord.getValue('internalid') as any;
  }
  public set internalid(value: number | undefined) {
    this.typedRecord.nsRecord.setValue('internalid', value as any)
  }
  public get lastmodifiedby(): string | undefined {
    return this.typedRecord.nsRecord.getValue('lastmodifiedby') as any;
  }
  public set lastmodifiedby(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('lastmodifiedby', value as any)
  }
  public get lastmodifieddate(): Date | undefined {
    return this.typedRecord.nsRecord.getValue('lastmodifieddate') as any;
  }
  public set lastmodifieddate(value: Date | undefined) {
    this.typedRecord.nsRecord.setValue('lastmodifieddate', value as any)
  }
  public get matchcount(): number | undefined {
    return this.typedRecord.nsRecord.getValue('matchcount') as any;
  }
  public set matchcount(value: number | undefined) {
    this.typedRecord.nsRecord.setValue('matchcount', value as any)
  }
  public get matchtype(): string {
    return this.typedRecord.nsRecord.getValue('matchtype') as any;
  }
  public set matchtype(value: string) {
    this.typedRecord.nsRecord.setValue('matchtype', value as any)
  }
  public get name(): string | undefined {
    return this.typedRecord.nsRecord.getValue('name') as any;
  }
  public set name(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('name', value as any)
  }
  public get pagetype(): string | undefined {
    return this.typedRecord.nsRecord.getValue('pagetype') as any;
  }
  public set pagetype(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('pagetype', value as any)
  }
  public get path(): string | undefined {
    return this.typedRecord.nsRecord.getValue('path') as any;
  }
  public set path(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('path', value as any)
  }
  public get sequencenumber(): number | undefined {
    return this.typedRecord.nsRecord.getValue('sequencenumber') as any;
  }
  public set sequencenumber(value: number | undefined) {
    this.typedRecord.nsRecord.setValue('sequencenumber', value as any)
  }
  public get settings(): number | undefined {
    return this.typedRecord.nsRecord.getValue('settings') as any;
  }
  public set settings(value: number | undefined) {
    this.typedRecord.nsRecord.setValue('settings', value as any)
  }
  public get site(): string {
    return this.typedRecord.nsRecord.getValue('site') as any;
  }
  public set site(value: string) {
    this.typedRecord.nsRecord.setValue('site', value as any)
  }
  public get startdate(): string | undefined {
    return this.typedRecord.nsRecord.getValue('startdate') as any;
  }
  public set startdate(value: string | undefined) {
    this.typedRecord.nsRecord.setValue('startdate', value as any)
  }
  public get template(): string {
    return this.typedRecord.nsRecord.getValue('template') as any;
  }
  public set template(value: string) {
    this.typedRecord.nsRecord.setValue('template', value as any)
  }
}


/** 
 * CMS Content Record Definition.
 * Record's Internal Id: cmscontent. 
 * Supports Custom Fields: true 
 */
export interface cmscontentRecord extends TypedRecord<cmscontentFields> {

}

export class cmscontentRecordImpl extends TypedRecordImpl<cmscontentFields> implements cmscontentRecord {
  constructor(public nsRecord: Record) {
    super(nsRecord)
    this._fields = new cmscontentFieldsImpl(this);
    // this._sublists = cmscontentnew FieldsImpl(this)
  }
}


