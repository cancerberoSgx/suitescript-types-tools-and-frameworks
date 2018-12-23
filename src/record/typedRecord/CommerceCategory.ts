import { FieldTypes } from './fieldTypes';
import { Record, SublistTypes } from './typedRecord';

export interface CommerceCategory extends Record<CommerceCategoryFields> {
}
export interface CommerceCategoryFields extends FieldTypes {
  title: string;
  description: string;
  primaryparent: number;
}
export interface CommerceCategorySublistItem {
}
export interface CommerceCategorySublists extends SublistTypes {
  items: CommerceCategorySublistItem;
}
