define(["require", "exports", "../matrixItem", "../../spec/index"], function (require, exports, matrixItem_1, index_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function get() {
        return instance;
    }
    exports.get = get;
    var CategoryTestPreconditionsForAwaLabsAccount = /** @class */ (function () {
        function CategoryTestPreconditionsForAwaLabsAccount() {
        }
        Object.defineProperty(CategoryTestPreconditionsForAwaLabsAccount.prototype, "oneRootCategory", {
            get: function () {
                var i = matrixItem_1.findMatrixParent();
                return i ? i.id : index_1.skip('cannot fine a matrix parent item');
            },
            enumerable: true,
            configurable: true
        });
        return CategoryTestPreconditionsForAwaLabsAccount;
    }());
    var instance = new CategoryTestPreconditionsForAwaLabsAccount();
});
