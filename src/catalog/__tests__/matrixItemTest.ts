import { describe, it, expect, fail } from "../../spec/index";
import { isMatrixChild, firstNonMatrixItem, isMatrixParent, findMatrixChild, findMatrixChildOrThrow } from "../matrixItem";
import { get } from './itemTestPreconditions';
import { log } from '../../log/responseLogger';

export function matrixItemTest() {
 
    describe('catalog/matrixItem/isMatrixChild', () => {
        it('should return true for matrix child', () => {
            // log((new Error() as any).lineNumber()+'')
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
        it('should find a matrix child', () => {
            const found = findMatrixChild(get().oneMatrixChildId)
            expect(!!found).toBe(true)
            if(found){
                return fail(`get().oneMatrixChildId ${get().oneMatrixChildId} not found`)
            }
            expect(found!.id).toBe(get().oneMatrixChildId) 
        })
        // it('should not find non matrix child', () => {
        // })  
        // it('should return false for non existent item', () => {
        //     expect(isMatrixChild(get().nonExistentItemId)).toBe(false)
        // })
    })
    describe('catalog/matrixItem/findMatrixChildOrThrow', () => {
        it('should throw on non matrix child', () => {
            try {
                const found = findMatrixChildOrThrow(get().oneMatrixParentId)
                expect('throw').toBe('false')
            } catch (e) {
                expect('throw').toBe('throw')
            }
        })
        // it('should not find non matrix child', () => {
        //     expect(isMatrixChild(get().oneMatrixParentId)).toBe(false)
        //     expect(isMatrixChild(get().oneNonMatrixId)).toBe(false)
        // })  
        // it('should return false for non existent item', () => {
        //     expect(isMatrixChild(get().nonExistentItemId)).toBe(false)
        // })
    })
 
    describe('catalog/matrixItem/isMatrixParent', () => {
        it('should return true for matrix parent', () => {
            // expect(1).toBe(2)
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

