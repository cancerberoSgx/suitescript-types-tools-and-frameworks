import { describe, expect, fail, it, skip } from "../../spec/index";
import { findMatrixChild, findMatrixChildOrThrow, isMatrixChild, isMatrixParent, findById } from "../matrixItem";
import { get } from './itemTestPreconditions';
import { log } from '../../log/responseLogger';
import * as search from 'N/search'

export function matrixItemTest() {

  describe('catalog/matrixItem/isMatrixChild', () => {
    it('should return true for matrix child', () => {
      expect(isMatrixChild(get().oneMatrixChildId)).toBe(true)
    })
    it('should return false for non matrix child', () => {
      expect(isMatrixChild(get().oneMatrixParentId)).toBe(false)
      expect(isMatrixChild(get().oneNonMatrixId)).toBe(false)
    })
    it('should return false for non existent item', () => {
      expect(isMatrixChild(get().nonExistentItemId)).toBe(false)
    })
  })

  describe('catalog/matrixItem/findMatrixChild', () => {
    it('should find a matrix child by id', () => {
      const found = findMatrixChild(get().oneMatrixChildId)
      if (!found) {
        return fail(`get().oneMatrixChildId ${get().oneMatrixChildId} not found`)
      }
      expect(found.id).toBe(get().oneMatrixChildId)
    })
    it('should find a matrix child without id', () => {
      if (!get().oneMatrixChildId) {
        return skip('there are no matrix child in the account')
      }
      const found = findMatrixChild()
      if (!found) {
        return fail(`get().oneMatrixChildId ${get().oneMatrixChildId} not found`)
      }
    })
    it('should not find non matrix child', () => {
      expect(findMatrixChild(get().oneNonMatrixId)).toBe(undefined)
    })
    it('should return false for non existent item', () => {
      expect(isMatrixChild(get().nonExistentItemId)).toBe(false)
    })
  })

  describe('catalog/matrixItem/findMatrixChildOrThrow', () => {
    it('should throw on non matrix child', () => {
      try {
        findMatrixChildOrThrow(get().oneMatrixParentId)
        expect('throw').toBe('false')
      } catch (e) {
        expect('throw').toBe('throw')
      }
      try {
        findMatrixChildOrThrow(get().oneMatrixChildId)
        expect('not throw').toBe('not throw')
      } catch (e) {
        expect('throw').toBe('false')
      }
    })
  })

  describe('catalog/matrixItem/isMatrixParent', () => {
    it('should return true for matrix parent', () => {
      expect(isMatrixParent(get().oneMatrixParentId)).toBe(true)
    })
    it('should return false for matrix child and non matrix', () => {
      expect(isMatrixParent(get().oneMatrixChildId)).toBe(false)
      expect(isMatrixParent(get().oneNonMatrixId)).toBe(false)
    })
    it('should return false for non existent item', () => {
      expect(isMatrixParent(get().nonExistentItemId)).toBe(false)
    })
  })

  describe('catalog/matrixItem/findById', () => {  
    it('should find an item by id', () => {
      expect(!!findById(get().oneMatrixParentId)).toBe(true)
      expect(!!findById(get().oneNonMatrixId)).toBe(true)
      expect(!!findById(get().oneMatrixChildId)).toBe(true)
    }) 
    it('should not find an non existing id', () => {
        expect(!!findById(get().nonExistentItemId)).toBe(false)
    })
    it('should return columns', () => {
        let r = findById(get().oneMatrixParentId, ['parent1'])
        if(!r){
            return fail(`get().oneMatrixParentId ${get().oneMatrixParentId} not found`)
        }
        expect(!!r.getText('parent')).toBe(false)
        r = findById(get().oneMatrixChildId, ['parent'])
        if(!r){
            return fail(`get().oneMatrixChildId ${get().oneMatrixChildId} not found`)
        }
        expect(!!r.getText('parent')).toBe(true)
        r = findById(get().oneNonMatrixId, ['parent'])
        if(!r){
            return fail(`get().oneNonMatrixId ${get().oneNonMatrixId} not found`)
        }
        expect(!!r.getText('parent')).toBe(false)
    })
  })


}