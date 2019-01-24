define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function get() {
        return instance;
    }
    exports.get = get;
    var ItemTestPreconditionsImpl = /** @class */ (function () {
        function ItemTestPreconditionsImpl() {
        }
        Object.defineProperty(ItemTestPreconditionsImpl.prototype, "oneMatrixParentId", {
            // TODO: search dont hard code
            // in case we query from netsuite we must call skip() from here with description because they call us from it() so the test is skipped. it's not an error if we can't find records to test against with
            get: function () {
                return '493';
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ItemTestPreconditionsImpl.prototype, "oneMatrixChildId", {
            get: function () {
                return '598';
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ItemTestPreconditionsImpl.prototype, "oneNonMatrixId", {
            get: function () {
                // findNonMatrixItem()
                return '2267';
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ItemTestPreconditionsImpl.prototype, "nonExistentItemId", {
            get: function () {
                return '678222'; // TODO
            },
            enumerable: true,
            configurable: true
        });
        return ItemTestPreconditionsImpl;
    }());
    var instance = new ItemTestPreconditionsImpl();
});
