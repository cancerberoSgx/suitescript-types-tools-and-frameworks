"use strict";
// // This is just a research
// import { Record } from 'N/record';
// import { TypedRecord, TypedRecordImpl } from './typedRecord';
// import { CommonFields } from './fieldTypes';
// export interface CommercecategoryFields2 extends CommonFields{
//   addtohead: string | undefined // this property is optional
//   created: Date
// }
// export class CommercecategoryFields2Impl implements CommercecategoryFields2 {
//   constructor(protected typedRecord: TypedRecord) {
//   }
//   public get addtohead(): string | undefined {
//     return this.typedRecord.nsRecord.getValue('addtohead') as any
//   }
//   public set addtohead(value: string | undefined) {
//     this.typedRecord.nsRecord.setValue('addtohead', value as any)
//   }
//   public get created(): Date {
//     return this.typedRecord.nsRecord.getValue('created') as any
//   }
//   public set created(value: Date) {
//     this.typedRecord.nsRecord.setValue('created', value as any)
//   }
// }
// export interface CommercategoryRecord extends TypedRecord<CommercecategoryFields2> {
// }
// export class CommercategoryRecordImpl extends TypedRecordImpl<CommercecategoryFields2> {
//   constructor(public nsRecord: Record) {
//     super(nsRecord)
//   }
// }
// // let c: CommercategoryRecord = null as any
// // c.fields.addtohead = 'sdf'
// // c.fields.created = undefined
// // class CommercecategoryFields
// // export interface CommerceCategory extends TypedRecord<CommerceCategoryFields> {
// // }
// // export interface CommerceCategoryFields extends FieldTypes {
// //   title: string;
// //   // description: string;
// //   primaryparent: number;
// //   catalog: number
// //   displayinsite: NSBoolean
// //   iscurrentlyeffective: NSBoolean
// //   origbinactive: NSBoolean
// //   name: string
// //   platformtype: string // perhaps enum ?
// //   sitemappriority: number
// //   urlfragment: string
// //   version: 1
// //   // TODO: etc
// // }
// // // subcategories
// // export interface CommerceCategorySublistItem {
// // }
// // export interface CommerceCategorySublists extends SublistTypes {
// //   items: CommerceCategorySublistItem
// //   subcategories: CommerceCategorySubcategoriesSublist
// // }
// // export interface CommerceCategorySubcategoriesSublist {
// // //   <machine name="subcategories" type="edit" fields="subcategory,nameoverride,descriptionoverride,urlfragmentoverride,pagetitleoverride,pageheadingoverride,pagebanneroverride,thumbnailoverride,addtoheadoverride,metakeywordsoverride,metadescriptionoverride,sitemappriorityoverride,displayinsiteoverride,sequencenumber">
// // // <line>
// // // <descriptionoverride>descr, override</descriptionoverride>
// // // <sequencenumber>0</sequencenumber>
// // // <subcategory>19</subcategory>
// // // <subcategory_display>laptops</subcategory_display>
// // }
// // import { RecordWrapper } from '../recordWrapper';
// // Approach 1: Use TypedMap so user perform record.fields.get('foo') all typed. 
// // advantage: code generation is minimal, only for CommercecategoryFields1Types
// // interface Fields1<PropTypes extends EmptyObject> extends TypedMapAndUndefinedGetter<PropTypes> {
// //   get<T extends Extract<keyof PropTypes, string>>(name: T): PropTypes[T]
// //   set<T extends Extract<keyof PropTypes, string>>(name: T, value: PropTypes[T]): void
// // }
// // interface CommercecategoryFields1Types {
// //   addtohead: string
// //   created: Date
// //   //etc
// // }
// // interface CommercecategoryFields extends TypedMapAndUndefinedGetter<CommercecategoryFields1Types>{
// // }
// // class CommerceCategoryFields1Impl implements CommercecategoryFields {
// //   constructor(protected r: TypedRecord){  }
// //   get(name:string){
// //     return this.r.nsRecord.getValue(name) as any
// //   }  
// //   set(name: any, value: any): void {
// //     this.r.nsRecord.setValue(name, value as any)
// //   }
// // }
