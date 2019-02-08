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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
define(["require", "exports", "../createElement", "../StatelessComponent", "./Bind"], function (require, exports, createElement_1, StatelessComponent_1, Bind_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Select = /** @class */ (function (_super) {
        __extends(Select, _super);
        function Select() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Select.prototype.render = function () {
            var _this = this;
            var options = (this.props.options.length && typeof this.props.options[0] === 'string') ? this.props.options.map(function (o) { return ({ id: o, name: o }); }) : this.props.options;
            var id = Select.counter++;
            return createElement_1.ReactLike.createElement("span", null,
                this.props.onChange ? createElement_1.ReactLike.createElement(Bind_1.Bind, { name: "Select-" + id, data: this.props.onChange }) : '',
                createElement_1.ReactLike.createElement("select", __assign({}, this.props['select-attrs'] || {}, { "data-select-id": id, onChange: function (e) {
                        var value = e.currentTarget.selectedOptions[0].value;
                        var id = e.currentTarget.getAttribute('data-select-id');
                        var f = getBindData("Select-" + id);
                        f && f(value);
                    } }),
                    this.props.firstOption ? createElement_1.ReactLike.createElement("option", null, this.props.firstOption) : '',
                    options.map(function (o) { return createElement_1.ReactLike.createElement("option", { selected: _this.props.selected == o.id, value: o.id }, o.name); })));
        };
        Select.counter = 0;
        return Select;
    }(StatelessComponent_1.StatelessComponent));
    exports.Select = Select;
});
