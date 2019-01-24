import { findNonMatrixItem, findMatrixParent, findMatrixChild } from '../matrixItem';
import { skip } from '../../spec/index';

export interface ItemTestPreconditions {
    readonly oneMatrixParentId: string
    readonly oneMatrixChildId: string
    readonly oneNonMatrixId: string
    readonly nonExistentItemId: string
}
export function get(): ItemTestPreconditions {
    return instance
} 

class ItemTestPreconditionsForAwaLabsAccount implements ItemTestPreconditions {
    // TODO: search dont hard code
    // in case we query from netsuite we must call skip() from here with description because they call us from it() so the test is skipped. it's not an error if we can't find records to test against with
    get oneMatrixParentId(): string {
        const i = findMatrixParent()
        return i ? i.id : skip('cannot fine a matrix parent item')
        // return '493'
    }
    get oneMatrixChildId(): string {
        const i = findMatrixChild()
        return i ? i.id : skip('cannot fine a matrix child item')
        // return '598'
    }
    get oneNonMatrixId(): string {
        const i = findNonMatrixItem()
        return i ? i.id : skip('cannot fine a non matrix item')
        
        // return i && i
        // return '2267'
    }
    get nonExistentItemId(): string {
        return '678222' // TODO
    }
}
const instance = new ItemTestPreconditionsForAwaLabsAccount()