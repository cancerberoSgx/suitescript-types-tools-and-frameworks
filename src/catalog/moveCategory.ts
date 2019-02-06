import { Record } from 'N/record';
import { copyCategory, CopyCategoryConfig } from './copyCategory';
import { removeCategory } from './removeCategory';

/**
 * Will call copyCategory() and then call removeCategory(). See documentation for copyCategory()
 * 
 * @returns the new category record
 */
export function moveCategory(config: CopyCategoryConfig): Record {
    const newCategory = copyCategory(config)
    removeCategory(config)
    return newCategory
}








