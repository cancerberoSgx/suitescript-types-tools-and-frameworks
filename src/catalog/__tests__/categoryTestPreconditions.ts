import { findNonMatrixItem, findMatrixParent, findMatrixChild } from '../matrixItem';
import { skip } from '../../spec/index';
import { Record } from 'N/record';

export interface CategoryTestPreconditions {
    readonly oneRootCategory: Record
    // readonly oneChildCategory: Record
    // readonly oneCategoryWithSubcategories: Record
    // readonly oneCategoryWithoutSubcategories: Record
    // readonly oneCategoryWithItems: Record
    // readonly oneCategoryWithoutItems: Record
    // readonly oneCategoryWithItemsAndSubcategories: Record
}
export function get(): CategoryTestPreconditions {
    return instance
} 

class CategoryTestPreconditionsForAwaLabsAccount implements CategoryTestPreconditions {
    get oneRootCategory(): Record {
        const i = findMatrixParent()
        return i ? i.id : skip('cannot fine a matrix parent item')
    }
}
const instance = new CategoryTestPreconditionsForAwaLabsAccount()