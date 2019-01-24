import { describe, expect, fail, it, skip } from "../../spec/index";
import { findMatrixChild, findMatrixChildOrThrow, isMatrixChild, isMatrixParent } from "../matrixItem";
import { get } from './itemTestPreconditions';

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
      // expect(!!found).toBe(true)
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



}