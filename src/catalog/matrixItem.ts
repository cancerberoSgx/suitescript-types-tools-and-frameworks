import { create, Operator, Type, Result } from 'N/search';
import { find } from '../search/results';
import { log } from '../log/responseLogger';


export function findMatrixChild(id: string):  Result|undefined {
  var isChild :  Result|undefined
  create({
    type: Type.ITEM,
    filters: [
      ['internalid', Operator.ANYOF, id],
      'AND',
      ['matrixchild', Operator.IS, 'T']
    ]
  }).run().each(item => {
    isChild = item;
    return false
  });
  return isChild
}

export function findMatrixChildOrThrow(id: string): Result|undefined  {
    const result =findMatrixChild(id)
    if(!result){throw 'cannot find matrix child'}
    return result
  }
  
export function isMatrixChild(id: string): boolean {
  return !!findMatrixChild(id)
}


export function findMatrix(id: string): Result|undefined {
  var found: Result|undefined
  create({
    type: Type.ITEM,
    filters: [
      ['internalid', Operator.ANYOF, id],
      'AND',
      ['matrix', Operator.IS, 'T']
    ]
  }).run().each(item => {
    found = item
    return false
  }); 
  return found
}

/** return true if item is matrix parent or child  */
export function isMatrix(id: string): boolean {
  return !!findMatrix(id)
}


export function findMatrixParent(id: string): Result | undefined {
  var found: Result|undefined // TODO use find()
  create({
    type: Type.ITEM,
    filters: [
      ['internalid', Operator.ANYOF, id],
      'AND',
      [
        ['matrix', Operator.IS, 'T'],
        'AND',
        ['matrixchild', Operator.IS, 'F']
      ]
    ]
  }).run().each(item => {
    found = item;
    return false
  });
  return found
}

export function isMatrixParent(id: string): boolean {
  return !!findMatrixParent(id)
} 


export function firstNonMatrixItem(): Result | undefined {
  return find(create({
    type: Type.ITEM,
    filters: [
      [
        ['matrix', Operator.IS, 'F'],
        'AND',
        ['matrixchild', Operator.IS, 'F']
      ]
    ]
  }).run(), result => {
    return false
  })
}
