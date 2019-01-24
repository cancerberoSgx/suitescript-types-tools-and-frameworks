define(["require", "exports", "N/search", "../search/results"], function (require, exports, search_1, results_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function findMatrixChild(id) {
        var isChild;
        search_1.create({
            type: search_1.Type.ITEM,
            filters: [
                ['internalid', search_1.Operator.ANYOF, id],
                'AND',
                ['matrixchild', search_1.Operator.IS, 'T']
            ]
        }).run().each(function (item) {
            isChild = item;
            return false;
        });
        return isChild;
    }
    exports.findMatrixChild = findMatrixChild;
    function isMatrixChild(id) {
        return !!findMatrixChild(id);
    }
    exports.isMatrixChild = isMatrixChild;
    function findMatrix(id) {
        var found;
        search_1.create({
            type: search_1.Type.ITEM,
            filters: [
                ['internalid', search_1.Operator.ANYOF, id],
                'AND',
                ['matrix', search_1.Operator.IS, 'T']
            ]
        }).run().each(function (item) {
            found = item;
            return false;
        });
        return found;
    }
    exports.findMatrix = findMatrix;
    /** return true if item is matrix parent or child  */
    function isMatrix(id) {
        return !!findMatrix(id);
    }
    exports.isMatrix = isMatrix;
    function findMatrixParent(id) {
        var found; // TODO use find()
        search_1.create({
            type: search_1.Type.ITEM,
            filters: [
                ['internalid', search_1.Operator.ANYOF, id],
                'AND',
                [
                    ['matrix', search_1.Operator.IS, 'T'],
                    'AND',
                    ['matrixchild', search_1.Operator.IS, 'F']
                ]
            ]
        }).run().each(function (item) {
            found = item;
            return false;
        });
        return found;
    }
    exports.findMatrixParent = findMatrixParent;
    function isMatrixParent(id) {
        return !!findMatrixParent(id);
    }
    exports.isMatrixParent = isMatrixParent;
    function firstNonMatrixItem() {
        var result = results_1.find(search_1.create({
            type: search_1.Type.ITEM,
            filters: [
                [
                    ['matrix', search_1.Operator.IS, 'F'],
                    'AND',
                    ['matrixchild', search_1.Operator.IS, 'F']
                ]
            ]
        }).run(), function (result) {
            // log(result.id)
            return false;
            // found = result
            // return false
        });
        return result || undefined;
    }
    exports.firstNonMatrixItem = firstNonMatrixItem;
});
