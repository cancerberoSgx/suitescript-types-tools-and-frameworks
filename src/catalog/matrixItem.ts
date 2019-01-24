import * as record from 'N/record';
import { create, Operator, Result, Type } from 'N/search';
import { checkThrow } from '../misc';
import { asRecord } from '../record/recordRef';
import { find, filter } from '../search/results';


export function findMatrixChild(id?: string): Result | undefined {
  let isChild: Result | undefined
  const filter =   ['matrixchild', Operator.IS, 'T']
  create({
    type: Type.ITEM,
    filters: id ? [
      ['internalid', Operator.ANYOF, id],
      'AND',filter
    ] : filter
  }).run().each(item => {
    isChild = item;
    return false
  });
  return isChild
}
export function findMatrixChildOrThrow(id?: string): Result {
  return checkThrow(findMatrixChild(id), 'cannot find matrix child item with id ' + id)
}
export function isMatrixChild(id: string): boolean {
  return !!findMatrixChild(id)
}


export function findMatrix(id?: string): Result | undefined {
  var found: Result | undefined
  // [
  //   ['internalid', Operator.ANYOF, id],
  //   'AND',
  //   ['matrix', Operator.IS, 'T']
  // ]
  const filter = ['matrix', Operator.IS, 'T']
  create({
    type: Type.ITEM,
    filters: id ? [['internalid', Operator.ANYOF, id], 'AND',filter] : filter
  }).run().each(item => {
    found = item
    return false
  });
  return found
}
export function findMatrixOrThrow(id: string): Result {
  return checkThrow(findMatrix(id), 'cannot find matrix item with id ' + id)
}


/** return true if item is matrix parent or child  */
export function isMatrix(id: string): boolean {
  return !!findMatrix(id)
}
 

export function findMatrixParent(id?: string): Result | undefined {
  let found: Result | undefined // TODO use find()
  const filter =   [
    ['matrix', Operator.IS, 'T'],
    'AND',
    ['matrixchild', Operator.IS, 'F']
  ]
  create({
    type: Type.ITEM,
    filters: id ?  [
      ['internalid', Operator.ANYOF, id],
      'AND',filter    ] : filter
  }).run().each(item => {
    found = item;
    return false
  });
  return found
}
export function findMatrixParentOrThrow(id: string): Result | undefined {
  return checkThrow(findMatrixParent(id), 'cannot find matrix parent item with id ' + id)
}
export function isMatrixParent(id: string): boolean {
  return !!findMatrixParent(id)
}




// export function findNonMatrixItemRecord(id: string): record.Record|undefined {
//   const result = findNonMatrixItem(id)
//   return result ? asRecord(result) : undefined
// }

export function firstNonMatrixItem(): Result | undefined {
  return findNonMatrixItem()
}

export function findNonMatrixItem(id?: string): Result | undefined {
  let filter = [
    ['matrix', Operator.IS, 'F'],
    'AND',
    ['matrixchild', Operator.IS, 'F']
  ]
  // if (id) {
  //   filters = [
  //     ['internalid', Operator.ANYOF, id],
  //     'AND',
  //     [
  //       ['matrix', Operator.IS, 'T'],
  //       'AND',
  //       ['matrixchild', Operator.IS, 'F']
  //     ]
  //   ]
  // }
  // else {
  //   filters = 
  // }
  return find(create({
    type: Type.ITEM,
    filters: id? [
          ['internalid', Operator.ANYOF, id],
          'AND',filter
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
