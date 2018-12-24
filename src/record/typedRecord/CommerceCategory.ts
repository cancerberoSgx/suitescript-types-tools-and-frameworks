import { NSBoolean } from '../../nstypes';
import { FieldTypes } from './fieldTypes';
import { Record, SublistTypes } from './typedRecord';

export interface CommerceCategory extends Record<CommerceCategoryFields> {
}
export interface CommerceCategoryFields extends FieldTypes {
  title: string;
  // description: string;
  primaryparent: number;
  catalog: number
  displayinsite: NSBoolean
  iscurrentlyeffective: NSBoolean
  origbinactive: NSBoolean
  name: string
  platformtype: string // perhaps enum ?
  sitemappriority: number
  urlfragment: string
  version: 1
  // TODO: etc
}

// subcategories
export interface CommerceCategorySublistItem {
}
export interface CommerceCategorySublists extends SublistTypes {
  items: CommerceCategorySublistItem
  subcategories: CommerceCategorySubcategoriesSublist
}
export interface CommerceCategorySubcategoriesSublist {
//   <machine name="subcategories" type="edit" fields="subcategory,nameoverride,descriptionoverride,urlfragmentoverride,pagetitleoverride,pageheadingoverride,pagebanneroverride,thumbnailoverride,addtoheadoverride,metakeywordsoverride,metadescriptionoverride,sitemappriorityoverride,displayinsiteoverride,sequencenumber">
// <line>
// <descriptionoverride>descr, override</descriptionoverride>
// <sequencenumber>0</sequencenumber>
// <subcategory>19</subcategory>
// <subcategory_display>laptops</subcategory_display>

}