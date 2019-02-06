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
define(["require", "exports", "../createElement", "../StatelessComponent", "./BindInputValue", "./StoreData"], function (require, exports, createElement_1, StatelessComponent_1, BindInputValue_1, StoreData_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Bind = /** @class */ (function (_super) {
        __extends(Bind, _super);
        function Bind() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Bind.prototype.render = function () {
            StoreData_1.StoreData.prototype.render.apply(this, []);
            BindInputValue_1.BindInputValue.prototype.render.apply(this, []);
            return createElement_1.ReactLike.createElement("span", null);
        };
        Bind.prototype.checkRegisteredCode = function () {
            if (!Bind.registered) {
                StoreData_1.StoreData.prototype.checkRegisteredCode.apply(this, []);
                BindInputValue_1.BindInputValue.prototype.checkRegisteredCode.apply(this, []);
                Bind.registered = true;
            }
        };
        Bind.registered = false;
        return Bind;
    }(StatelessComponent_1.StatelessComponent));
    exports.Bind = Bind;
});
