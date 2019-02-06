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
define(["require", "exports", "../../jsx/createElement", "../../jsx/util/Bind", "../../jsx/util/BindInputValue", "../../misc/dateUtil", "../../misc/misc"], function (require, exports, createElement_1, Bind_1, BindInputValue_1, dateUtil_1, misc_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.FieldEditor = function (props) {
        var f = props.field;
        var input;
        if (!f) {
            return createElement_1.ReactLike.createElement("span", null, "UNDEFINED FIELD ERROR ");
        }
        else if ((f.type === 'select') && f.selectOptions && f.selectOptions.length) {
            input = createElement_1.ReactLike.createElement("select", { disabled: f.isReadonly },
                (typeof f.value === 'undefined' || f.value === null) ? createElement_1.ReactLike.createElement("option", null, "Not Defined") : '',
                f.selectOptions.map(function (o) {
                    return createElement_1.ReactLike.createElement("option", { selected: Array.isArray(f.value) ? f.value.indexOf(o.value) !== -1 : f.value === o.value, value: o.value }, o.text || (o.value && misc_1.tryTo(function () { return o.value.toString(); })));
                }));
        }
        else if (f.type === 'multiselect' && f.selectOptions && f.selectOptions.length) {
            input = createElement_1.ReactLike.createElement("select", { multiple: true, disabled: f.isReadonly },
                (typeof f.value === 'undefined' || f.value === null) ? createElement_1.ReactLike.createElement("option", null, "Not Defined") : '',
                f.selectOptions.map(function (o) {
                    return createElement_1.ReactLike.createElement("option", { selected: f.value.indexOf(o.value) !== -1, value: o.value }, Array.isArray(o.text) ? o.text.join(', ') : o.text || (o.value && misc_1.tryTo(function () { return o.value.toString(); })));
                }));
        }
        else {
            var inputType = f.type === 'date' ? 'date' : f.type === 'datetime' ? 'datetime-local' : ['float', 'integer'].indexOf(f.type) !== -1 ? 'number' : f.type === 'checkbox' ? 'checkbox' : 'text';
            var inputValue = f.type === 'date' ? dateUtil_1.formatDate(f.value, 'YYYY-MM-DD') : (f.value + '');
            input = createElement_1.ReactLike.createElement("input", { multiple: false, disabled: f.isReadonly, type: inputType, value: inputValue, checked: f.type === 'checkbox' && !!f.value });
        }
        return createElement_1.ReactLike.createElement("span", null,
            createElement_1.ReactLike.createElement(BindInputValue_1.BindInputValue, { bindInputId: "data-field-id" + f.id }, input),
            createElement_1.ReactLike.createElement(Bind_1.BindInputValueAndStoreData, { bindListenerId: "data-field-id" + f.id, data: {
                    routeName: 'setFieldValue',
                    params: {
                        recordId: props.record.id,
                        recordType: props.record.type,
                        fieldType: f.type,
                        fieldId: f.id,
                        redirect: encodeURIComponent(props.currentUrl)
                    }
                } },
                createElement_1.ReactLike.createElement("button", { onClick: function (e) {
                        var data = getStoreData(e.currentTarget);
                        var fieldValue = getBindInputValue(e.currentTarget, { asString: true });
                        if (!data || typeof fieldValue === 'undefined') {
                            return;
                        }
                        // alert(`fieldValue ${fieldValue} ${JSON.stringify(fieldValue)}`);
                        data.params = __assign({}, data.params, { fieldValue: fieldValue });
                        window.location.href = buildRouteUrl(data);
                    } }, "Change!")));
    };
});
