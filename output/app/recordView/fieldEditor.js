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
define(["require", "exports", "N/util", "../../jsx/createElement", "../../jsx/util/Bind", "../../jsx/util/BindInputValue", "../../misc/dateUtil"], function (require, exports, util_1, createElement_1, Bind_1, BindInputValue_1, dateUtil_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.FieldEditor = function (props) {
        var f = props.field;
        if ((f.type === 'text' || f.type === 'date') && typeof f.value !== 'boolean') {
            return createElement_1.ReactLike.createElement("span", null,
                createElement_1.ReactLike.createElement(BindInputValue_1.BindInputValue, { bindInputId: "data-field-id" + f.id }, (f.type === 'date' && util_1.isDate(f.value)) ?
                    createElement_1.ReactLike.createElement("input", { disabled: f.isReadonly, type: "date", value: dateUtil_1.formatDate(f.value, 'YYYY-MM-DD') }) :
                    createElement_1.ReactLike.createElement("input", { value: f.value + '' })),
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
                            var fieldValue = getBindInputValue(e.currentTarget, { dateAsString: true });
                            if (!data || fieldValue === undefined) {
                                return;
                            }
                            data.params = __assign({}, data.params, { fieldValue: fieldValue });
                            window.location.href = buildRouteUrl(data);
                        } }, "Change!")));
        }
        return createElement_1.ReactLike.createElement("span", null);
    };
});
