define(["require", "exports", "N/search", "../misc", "../search/results"], function (require, exports, search_1, misc_1, results_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function findById(id, columns) {
        if (columns === void 0) { columns = []; }
        return results_1.find(search_1.create({
            type: search_1.Type.ITEM,
            filters: id ? [['internalid', search_1.Operator.ANYOF, id]] : [],
            columns: columns
        }).run(), function (result) {
            return true;
        });
    }
    exports.findById = findById;
    function findByIdOrThrow(id) {
        return misc_1.checkThrow(findById(id), 'cannot find item with id ' + id);
    }
    exports.findByIdOrThrow = findByIdOrThrow;
    function existsItemWithId(id) {
        return !!findById(id);
    }
    exports.existsItemWithId = existsItemWithId;
    function findMatrixChild(id) {
        var filter = ['matrixchild', search_1.Operator.IS, 'T'];
        return results_1.find(search_1.create({
            type: search_1.Type.ITEM,
            filters: id ? [
                ['internalid', search_1.Operator.ANYOF, id],
                'AND', filter
            ] : filter
        }).run(), function (result) {
            return true;
        });
    }
    exports.findMatrixChild = findMatrixChild;
    function findMatrixChildOrThrow(id) {
        return misc_1.checkThrow(findMatrixChild(id), 'cannot find matrix child item with id ' + id);
    }
    exports.findMatrixChildOrThrow = findMatrixChildOrThrow;
    function isMatrixChild(id) {
        return !!findMatrixChild(id);
    }
    exports.isMatrixChild = isMatrixChild;
    function findMatrix(id) {
        var filter = ['matrix', search_1.Operator.IS, 'T'];
        return results_1.find(search_1.create({
            type: search_1.Type.ITEM,
            filters: id ? [['internalid', search_1.Operator.ANYOF, id], 'AND', filter] : filter
        }).run(), function (result) {
            return true;
        });
    }
    exports.findMatrix = findMatrix;
    function findMatrixOrThrow(id) {
        return misc_1.checkThrow(findMatrix(id), 'cannot find matrix item with id ' + id);
    }
    exports.findMatrixOrThrow = findMatrixOrThrow;
    /** return true if item is matrix parent or child  */
    function isMatrix(id) {
        return !!findMatrix(id);
    }
    exports.isMatrix = isMatrix;
    function findMatrixParent(id) {
        var filter = [
            ['matrix', search_1.Operator.IS, 'T'],
            'AND',
            ['matrixchild', search_1.Operator.IS, 'F']
        ];
        return results_1.find(search_1.create({
            type: search_1.Type.ITEM,
            filters: id ? [
                ['internalid', search_1.Operator.ANYOF, id],
                'AND', filter
            ] : filter
        }).run(), function (result) {
            return true;
        });
    }
    exports.findMatrixParent = findMatrixParent;
    function findMatrixParentOrThrow(id) {
        return misc_1.checkThrow(findMatrixParent(id), 'cannot find matrix parent item with id ' + id);
    }
    exports.findMatrixParentOrThrow = findMatrixParentOrThrow;
    function isMatrixParent(id) {
        return !!findMatrixParent(id);
    }
    exports.isMatrixParent = isMatrixParent;
    function firstNonMatrixItem() {
        return findNonMatrixItem();
    }
    exports.firstNonMatrixItem = firstNonMatrixItem;
    function findNonMatrixItem(id) {
        var filter = [
            ['matrix', search_1.Operator.IS, 'F'],
            'AND',
            ['matrixchild', search_1.Operator.IS, 'F']
        ];
        return results_1.find(search_1.create({
            type: search_1.Type.ITEM,
            filters: id ? [
                ['internalid', search_1.Operator.ANYOF, id],
                'AND', filter
            ] : filter
        }).run(), function (result) {
            return true;
        });
    }
    exports.findNonMatrixItem = findNonMatrixItem;
});
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
