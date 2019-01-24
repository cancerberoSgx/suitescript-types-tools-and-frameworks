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
            index_1.it('should find a matrix child by id', function () {
                var found = matrixItem_1.findMatrixChild(itemTestPreconditions_1.get().oneMatrixChildId);
                if (!found) {
                    return index_1.fail("get().oneMatrixChildId " + itemTestPreconditions_1.get().oneMatrixChildId + " not found");
                }
                index_1.expect(found.id).toBe(itemTestPreconditions_1.get().oneMatrixChildId);
            });
            index_1.it('should find a matrix child without id', function () {
                if (!itemTestPreconditions_1.get().oneMatrixChildId) {
                    return index_1.skip('there are no matrix child in the account');
                }
                var found = matrixItem_1.findMatrixChild();
                if (!found) {
                    return index_1.fail("get().oneMatrixChildId " + itemTestPreconditions_1.get().oneMatrixChildId + " not found");
                }
            });
            index_1.it('should not find non matrix child', function () {
                index_1.expect(matrixItem_1.findMatrixChild(itemTestPreconditions_1.get().oneNonMatrixId)).toBe(undefined);
            });
            index_1.it('should return false for non existent item', function () {
                index_1.expect(matrixItem_1.isMatrixChild(itemTestPreconditions_1.get().nonExistentItemId)).toBe(false);
            });
        });
        index_1.describe('catalog/matrixItem/findMatrixChildOrThrow', function () {
            index_1.it('should throw on non matrix child', function () {
                try {
                    matrixItem_1.findMatrixChildOrThrow(itemTestPreconditions_1.get().oneMatrixParentId);
                    index_1.expect('throw').toBe('false');
                }
                catch (e) {
                    index_1.expect('throw').toBe('throw');
                }
                try {
                    matrixItem_1.findMatrixChildOrThrow(itemTestPreconditions_1.get().oneMatrixChildId);
                    index_1.expect('not throw').toBe('not throw');
                }
                catch (e) {
                    index_1.expect('throw').toBe('false');
                }
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
        index_1.describe('catalog/matrixItem/findById', function () {
            index_1.it('should find an item by id', function () {
                index_1.expect(!!matrixItem_1.findById(itemTestPreconditions_1.get().oneMatrixParentId)).toBe(true);
                index_1.expect(!!matrixItem_1.findById(itemTestPreconditions_1.get().oneNonMatrixId)).toBe(true);
                index_1.expect(!!matrixItem_1.findById(itemTestPreconditions_1.get().oneMatrixChildId)).toBe(true);
            });
            index_1.it('should not find an non existing id', function () {
                index_1.expect(!!matrixItem_1.findById(itemTestPreconditions_1.get().nonExistentItemId)).toBe(false);
            });
            index_1.it('should return columns', function () {
                var r = matrixItem_1.findById(itemTestPreconditions_1.get().oneMatrixParentId, ['parent1']);
                if (!r) {
                    return index_1.fail("get().oneMatrixParentId " + itemTestPreconditions_1.get().oneMatrixParentId + " not found");
                }
                index_1.expect(!!r.getText('parent')).toBe(false);
                r = matrixItem_1.findById(itemTestPreconditions_1.get().oneMatrixChildId, ['parent']);
                if (!r) {
                    return index_1.fail("get().oneMatrixChildId " + itemTestPreconditions_1.get().oneMatrixChildId + " not found");
                }
                index_1.expect(!!r.getText('parent')).toBe(true);
                r = matrixItem_1.findById(itemTestPreconditions_1.get().oneNonMatrixId, ['parent']);
                if (!r) {
                    return index_1.fail("get().oneNonMatrixId " + itemTestPreconditions_1.get().oneNonMatrixId + " not found");
                }
                index_1.expect(!!r.getText('parent')).toBe(false);
            });
        });
    }
    exports.matrixItemTest = matrixItemTest;
});
