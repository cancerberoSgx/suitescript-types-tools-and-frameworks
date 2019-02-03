var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define(["require", "exports", "../StatelessComponent", "../createElement", "./BindInputValue", "./StoreData"], function (require, exports, StatelessComponent_1, createElement_1, BindInputValue_1, StoreData_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var BindInputValueAndStoreData = /** @class */ (function (_super) {
        __extends(BindInputValueAndStoreData, _super);
        function BindInputValueAndStoreData() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        BindInputValueAndStoreData.prototype.render = function () {
            StoreData_1.StoreData.prototype.render.apply(this, []);
            BindInputValue_1.BindInputValue.prototype.render.apply(this, []);
            return createElement_1.ReactLike.createElement("span", null);
        };
        BindInputValueAndStoreData.prototype.checkRegisteredCode = function () {
            if (!BindInputValueAndStoreData.registered) {
                StoreData_1.StoreData.prototype.checkRegisteredCode.apply(this, []);
                BindInputValue_1.BindInputValue.prototype.checkRegisteredCode.apply(this, []);
            }
        };
        BindInputValueAndStoreData.registered = false;
        return BindInputValueAndStoreData;
    }(StatelessComponent_1.StatelessComponent));
    exports.BindInputValueAndStoreData = BindInputValueAndStoreData;
});
