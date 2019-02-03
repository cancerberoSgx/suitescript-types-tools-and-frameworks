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
define(["require", "exports", "../StatelessComponent", "../createElement"], function (require, exports, StatelessComponent_1, createElement_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var BindInputValue = /** @class */ (function (_super) {
        __extends(BindInputValue, _super);
        function BindInputValue() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        BindInputValue.prototype.render = function () {
            BindInputValue.checkRegisteredCode();
            var c = this.firstChildElement();
            if (c && this.props.bindInputId) {
                c.attrs['data-bind-value-id'] = this.props.bindInputId;
            }
            else if (c && this.props.bindListenerId) {
                c.attrs['data-bind-value-id'] = this.props.bindListenerId;
            }
            return createElement_1.ReactLike.createElement("span", null);
        };
        BindInputValue.checkRegisteredCode = function () {
            if (!BindInputValue.registered) {
                createElement_1.ReactLike.registerClientCode({
                    name: 'BindInputValue',
                    code: getBindInputValue.toString(),
                    description: "Gets the current input value declared with wrapper <BindInputValue><input..."
                });
                BindInputValue.registered = true;
            }
        };
        BindInputValue.registered = false;
        return BindInputValue;
    }(StatelessComponent_1.StatelessComponent));
    exports.BindInputValue = BindInputValue;
    function getBindInputValue(listenerEl) {
        var id = listenerEl.getAttribute('data-bind-value-id');
        var el = document.querySelector("[data-bind-value-id=\"" + id + "\"]");
        if (el) {
            return el.value;
        }
    }
});
