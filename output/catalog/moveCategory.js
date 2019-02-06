define(["require", "exports", "./copyCategory", "./removeCategory"], function (require, exports, copyCategory_1, removeCategory_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Will call copyCategory() and then call removeCategory(). See documentation for copyCategory()
     *
     * @returns the new category record
     */
    function moveCategory(config) {
        var newCategory = copyCategory_1.copyCategory(config);
        removeCategory_1.removeCategory(config);
        return newCategory;
    }
    exports.moveCategory = moveCategory;
});
