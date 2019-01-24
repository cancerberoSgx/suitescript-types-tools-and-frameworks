define(["require", "exports", "../matrixItem", "../../spec"], function (require, exports, matrixItem_1, spec_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function get() {
        return instance;
    }
    exports.get = get;
    var ItemTestPreconditionsForAwaLabsAccount = /** @class */ (function () {
        function ItemTestPreconditionsForAwaLabsAccount() {
        }
        Object.defineProperty(ItemTestPreconditionsForAwaLabsAccount.prototype, "oneMatrixParentId", {
            // TODO: search dont hard code
            // in case we query from netsuite we must call skip() from here with description because they call us from it() so the test is skipped. it's not an error if we can't find records to test against with
            get: function () {
                var i = matrixItem_1.findMatrixParent();
                return i ? i.id : spec_1.skip('cannot fine a matrix parent item');
                // return '493'
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ItemTestPreconditionsForAwaLabsAccount.prototype, "oneMatrixChildId", {
            get: function () {
                var i = matrixItem_1.findMatrixChild();
                return i ? i.id : spec_1.skip('cannot fine a matrix child item');
                // return '598'
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ItemTestPreconditionsForAwaLabsAccount.prototype, "oneNonMatrixId", {
            get: function () {
                var i = matrixItem_1.findNonMatrixItem();
                return i ? i.id : spec_1.skip('cannot fine a non matrix item');
                // return i && i
                // return '2267'
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ItemTestPreconditionsForAwaLabsAccount.prototype, "nonExistentItemId", {
            get: function () {
                return '678222'; // TODO
            },
            enumerable: true,
            configurable: true
        });
        return ItemTestPreconditionsForAwaLabsAccount;
    }());
    var instance = new ItemTestPreconditionsForAwaLabsAccount();
});
