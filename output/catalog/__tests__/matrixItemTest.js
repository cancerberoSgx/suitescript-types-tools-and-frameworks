define(["require", "exports", "../../spec/index", "../matrixItem", "./itemTestPreconditions"], function (require, exports, index_1, matrixItem_1, itemTestPreconditions_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function matrixItemTest() {
        index_1.describe('catalog/matrixItem/isMatrixChild', function () {
            index_1.it('should return true for matrix child', function () {
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
                if (!found) {
                    return index_1.fail("get().oneMatrixChildId " + itemTestPreconditions_1.get().oneMatrixChildId + " not found");
                }
                // expect(!!found).toBe(true)
                index_1.expect(found.id).toBe(itemTestPreconditions_1.get().oneMatrixChildId);
            });
            index_1.it('should not find non matrix child', function () {
                index_1.expect(matrixItem_1.isMatrixChild(itemTestPreconditions_1.get().oneMatrixParentId)).toBe(false);
                index_1.expect(matrixItem_1.isMatrixChild(itemTestPreconditions_1.get().oneNonMatrixId)).toBe(false);
            });
            index_1.it('should return false for non existent item', function () {
                index_1.expect(matrixItem_1.isMatrixChild(itemTestPreconditions_1.get().nonExistentItemId)).toBe(false);
            });
        });
        index_1.describe('catalog/matrixItem/isMatrixParent', function () {
            index_1.it('should return true for matrix parent', function () {
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
