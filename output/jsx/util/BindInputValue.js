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
define(["require", "exports", "../../misc/formatDate", "../../misc/misc", "../createElement", "../StatelessComponent"], function (require, exports, formatDate_1, misc_1, createElement_1, StatelessComponent_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var BindInputValue = /** @class */ (function (_super) {
        __extends(BindInputValue, _super);
        function BindInputValue() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        BindInputValue.prototype.render = function () {
            var c = this.firstChildElement();
            if (c && this.props.bindInputId) {
                c.attrs['data-bind-value-id'] = this.props.bindInputId;
            }
            else if (c && this.props.bindListenerId) {
                c.attrs['data-bind-value-id'] = this.props.bindListenerId;
            }
            return createElement_1.ReactLike.createElement("span", null);
        };
        BindInputValue.prototype.checkRegisteredCode = function () {
            if (!BindInputValue.registered) {
                createElement_1.ReactLike.registerClientCode({
                    name: 'getBindInputValue',
                    code: getBindInputValue.toString(),
                    description: "Gets the current input value declared with wrapper <BindInputValue><input..."
                });
                createElement_1.ReactLike.registerClientCode({
                    name: 'formatDate',
                    code: formatDate_1.formatDate.toString() + "; var dateUtil_1 = {formatDate: formatDate}; ",
                    description: "Gets the current input value declared with wrapper <BindInputValue><input..."
                });
                createElement_1.ReactLike.registerClientCode({
                    name: 'array',
                    code: misc_1.array.toString() + "; var misc_1 = {array: array}; ",
                    description: ""
                });
                BindInputValue.registered = true;
            }
        };
        BindInputValue.registered = false;
        return BindInputValue;
    }(StatelessComponent_1.StatelessComponent));
    exports.BindInputValue = BindInputValue;
    function getBindInputValue(listenerEl, config) {
        if (config === void 0) { config = {}; }
        var id = listenerEl.getAttribute('data-bind-value-id');
        var el = document.querySelector("[data-bind-value-id=\"" + id + "\"]");
        if (el) {
            if (el.type === 'date') {
                return config.asString ? formatDate_1.formatDate(el.valueAsDate, 'MM/DD/YYYY') : el.valueAsDate;
            }
            else if (el.type === 'number') {
                return config.asString ? (el.valueAsNumber + '') : el.valueAsNumber;
            }
            else if (el.type === 'checkbox') {
                return config.asString ? (el.checked ? 'T' : 'F') : !!el.checked;
            }
            else if (el.tagName.toLowerCase() === 'select') {
                var selectedOptions_1 = el.selectedOptions;
                if (selectedOptions_1 && !el.getAttribute('multiple')) {
                    return config.asString ? (selectedOptions_1.item(0).value + '') : selectedOptions_1.item(0).value;
                }
                else if ((selectedOptions_1 && el.getAttribute('multiple')) || !selectedOptions_1.length) {
                    var a = misc_1.array(selectedOptions_1.length).map(function (i) { return selectedOptions_1.item(i).value; });
                    return config.asString ? JSON.stringify(a) : a;
                }
            }
            return config.asString ? (el.value + '') : el.value;
        }
    }
});
