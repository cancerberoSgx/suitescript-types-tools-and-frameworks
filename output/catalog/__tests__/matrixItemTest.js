define(["require", "exports", "../../spec/index", "../matrixItem", "./itemTestPreconditions"], function (require, exports, index_1, matrixItem_1, itemTestPreconditions_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function matrixItemTest() {
        index_1.describe('catalog/matrixItem/isMatrixChild', function () {
            index_1.it('should return true for matrix child', function () {
                // log((new Error() as any).lineNumber()+'')
                index_1.expect(matrixItem_1.isMatrixChild(itemTestPreconditions_1.get().oneMatrixChildId)).toBe(true);
            });
            index_1.it('should return false for non matrix child', function () {
                index_1.expect(matrixItem_1.isMatrixChild(itemTestPreconditions_1.get().oneMatrixParentId)).toBe(false);
                index_1.expect(matrixItem_1.isMatrixChild(itemTestPreconditions_1.get().oneNonMatrixId)).toBe(false);
            });
            index_1.it('should return false for non existent item', function () {
                index_1.expect(matrixItem_1.isMatrixChild(itemTestPreconditions_1.get().nonExistentItemId)).toBe(false);
            });
        });
        index_1.describe('catalog/matrixItem/findMatrixChild', function () {
            index_1.it('should find a matrix child', function () {
                var found = matrixItem_1.findMatrixChild(itemTestPreconditions_1.get().oneMatrixChildId);
                index_1.expect(!!found).toBe(true);
                if (found) {
                    return index_1.fail("get().oneMatrixChildId " + itemTestPreconditions_1.get().oneMatrixChildId + " not found");
                }
                index_1.expect(found.id).toBe(itemTestPreconditions_1.get().oneMatrixChildId);
            });
            // it('should not find non matrix child', () => {
            // })  
            // it('should return false for non existent item', () => {
            //     expect(isMatrixChild(get().nonExistentItemId)).toBe(false)
            // })
        });
        index_1.describe('catalog/matrixItem/findMatrixChildOrThrow', function () {
            index_1.it('should throw on non matrix child', function () {
                try {
                    var found = matrixItem_1.findMatrixChildOrThrow(itemTestPreconditions_1.get().oneMatrixParentId);
                    index_1.expect('throw').toBe('false');
                }
                catch (e) {
                    index_1.expect('throw').toBe('throw');
                }
            });
            // it('should not find non matrix child', () => {
            //     expect(isMatrixChild(get().oneMatrixParentId)).toBe(false)
            //     expect(isMatrixChild(get().oneNonMatrixId)).toBe(false)
            // })  
            // it('should return false for non existent item', () => {
            //     expect(isMatrixChild(get().nonExistentItemId)).toBe(false)
            // })
        });
        index_1.describe('catalog/matrixItem/isMatrixParent', function () {
            index_1.it('should return true for matrix parent', function () {
                // expect(1).toBe(2)
                index_1.expect(matrixItem_1.isMatrixParent(itemTestPreconditions_1.get().oneMatrixParentId)).toBe(true);
            });
            index_1.it('should return false for matrix child and non matrix', function () {
                index_1.expect(matrixItem_1.isMatrixParent(itemTestPreconditions_1.get().oneMatrixChildId)).toBe(false);
                index_1.expect(matrixItem_1.isMatrixParent(itemTestPreconditions_1.get().oneNonMatrixId)).toBe(false);
            });
            index_1.it('should return false for non existent item', function () {
                index_1.expect(matrixItem_1.isMatrixParent(itemTestPreconditions_1.get().nonExistentItemId)).toBe(false);
            });
        });
    }
    exports.matrixItemTest = matrixItemTest;
});
