
export interface ItemTestPreconditions {
    readonly oneMatrixParentId: string
    readonly oneMatrixChildId: string
    readonly oneNonMatrixId: string
    readonly nonExistentItemId: string
}
export function get(): ItemTestPreconditions {
    return instance
}
class ItemTestPreconditionsImpl implements ItemTestPreconditions {
    // TODO: search dont hard code
    // in case we query from netsuite we must call skip() from here with description because they call us from it() so the test is skipped. it's not an error if we can't find records to test against with
    get oneMatrixParentId(): string {
        return '493'
    }
    get oneMatrixChildId(): string {
        return '598'
    }
    get oneNonMatrixId(): string {
        // findNonMatrixItem()
        return '2267'
    }
    get nonExistentItemId(): string {
        return '678222' // TODO
    }
}
const instance = new ItemTestPreconditionsImpl()