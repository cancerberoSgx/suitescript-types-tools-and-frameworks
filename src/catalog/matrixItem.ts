import { create, Operator, Result, Type } from 'N/search';
import { checkThrow } from '../misc';
import { find } from '../search/results';

export function findById(id?: string, columns: string[]=[]): Result | undefined {
    return find(create({
        type: Type.ITEM,
        filters: id ? [['internalid', Operator.ANYOF, id]] : [],
        columns
    }).run(), result => {
        return true
    })
}
export function findByIdOrThrow(id?: string): Result {
    return checkThrow(findById(id), 'cannot find item with id ' + id)
}
export function existsItemWithId(id: string): boolean {
    return !!findById(id)
}

 
export function findMatrixChild(id?: string): Result | undefined {
    const filter = ['matrixchild', Operator.IS, 'T']
    return find(create({
        type: Type.ITEM,
        filters: id ? [
            ['internalid', Operator.ANYOF, id],
            'AND', filter
        ] : filter
    }).run(), result => {
        return true
    })
}
export function findMatrixChildOrThrow(id?: string): Result {
    return checkThrow(findMatrixChild(id), 'cannot find matrix child item with id ' + id)
}
export function isMatrixChild(id: string): boolean {
    return !!findMatrixChild(id)
}


export function findMatrix(id?: string): Result | undefined {
    const filter = ['matrix', Operator.IS, 'T']
    return find(create({
        type: Type.ITEM,
        filters: id ? [['internalid', Operator.ANYOF, id], 'AND', filter] : filter
    }).run(), result => {
        return true
    })
}
export function findMatrixOrThrow(id: string): Result {
    return checkThrow(findMatrix(id), 'cannot find matrix item with id ' + id)
}
/** return true if item is matrix parent or child  */
export function isMatrix(id: string): boolean {
    return !!findMatrix(id)
}


export function findMatrixParent(id?: string): Result | undefined {
    const filter = [
        ['matrix', Operator.IS, 'T'],
        'AND',
        ['matrixchild', Operator.IS, 'F']
    ]
    return find(create({
        type: Type.ITEM,
        filters: id ? [
            ['internalid', Operator.ANYOF, id],
            'AND', filter] : filter
    }).run(), result => {
        return true
    })
}
export function findMatrixParentOrThrow(id: string): Result | undefined {
    return checkThrow(findMatrixParent(id), 'cannot find matrix parent item with id ' + id)
}
export function isMatrixParent(id: string): boolean {
    return !!findMatrixParent(id)
}


export function firstNonMatrixItem(): Result | undefined {
    return findNonMatrixItem()
}

export function findNonMatrixItem(id?: string): Result | undefined {
    let filter = [
        ['matrix', Operator.IS, 'F'],
        'AND',
        ['matrixchild', Operator.IS, 'F']
    ]
    return find(create({
        type: Type.ITEM,
        filters: id ? [
            ['internalid', Operator.ANYOF, id],
            'AND', filter
        ] : filter
    }).run(), result => {
        return true
    })
}


// TODO: find() and filter() items more generic like the following

// export interface FilterItemResult{
//   id?: string, 
//   matrixType?: 'matrix'|'matrixParent'|'matrixChild'|'nonMatrix'
//   // itemType?: strsing // TODO the item type - name listing I've made
// }
// export function filterItemResult(config: FilterItemResult): Result[] {
//   let filters = []
//   if (config.id) {
//     filters = [
//       ['internalid', Operator.ANYOF, id],
//       'AND',
//       [
//         ['matrix', Operator.IS, 'T'],
//         'AND',
//         ['matrixchild', Operator.IS, 'F']
//       ]
//     ]
//   }
//   else if(config.matrixType){
//     filters = [
//       ['matrix', Operator.IS, 'F'],
//       'AND',
//       ['matrixchild', Operator.IS, 'F']
//     ]
//   }
//   return filter(create({
//     type: Type.ITEM,
//     filters
//   }).run(), result => {
//     return false
//   })
// }
