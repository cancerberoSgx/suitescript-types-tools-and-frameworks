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
define(["require", "exports", "../../jsx/util/Bind", "../../jsx/createElement"], function (require, exports, Bind_1, createElement_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SublistLinesEditor = function (props) {
        try {
            return createElement_1.ReactLike.createElement("div", null,
                createElement_1.ReactLike.createElement("table", null,
                    createElement_1.ReactLike.createElement("thead", null,
                        createElement_1.ReactLike.createElement("tr", null, props.sublist.fields.map(function (f) { return createElement_1.ReactLike.createElement("th", null,
                            f.id,
                            f.type ? " (" + f.type + ")" : ''); }))),
                    createElement_1.ReactLike.createElement("tbody", null, props.sublist.lines.map(function (line) { return createElement_1.ReactLike.createElement("tr", null, line.rows.map(function (row) {
                        var input = (createElement_1.ReactLike.createElement("span", null,
                            "            ",
                            row.text,
                            row.value == row.text ? " " + row.value : '',
                            createElement_1.ReactLike.createElement(Bind_1.Bind, { bindInputId: "data-sublist-field-" + props.sublist.id + "-" + line + "-" + row.field.id },
                                createElement_1.ReactLike.createElement("input", { value: row.value + '' })),
                            createElement_1.ReactLike.createElement(Bind_1.Bind, { bindListenerId: "data-sublist-field-" + props.sublist.id + "-" + line + "-" + row.field.id, data: {
                                    routeName: 'setSublistFieldValue',
                                    params: {
                                        recordId: props.record.id,
                                        recordType: props.record.type,
                                        fieldType: row.field.type,
                                        fieldId: row.field.id,
                                        sublistId: props.sublist.id,
                                        line: line,
                                        redirect: encodeURIComponent(props.currentUrl)
                                    }
                                } },
                                createElement_1.ReactLike.createElement("button", { onClick: function (e) {
                                        var data = getStoreData(e.currentTarget);
                                        var fieldValue = getBindInputValue(e.currentTarget, { asString: true });
                                        if (!data || typeof fieldValue === 'undefined') {
                                            return;
                                        }
                                        data.params = __assign({}, data.params, { fieldValue: fieldValue });
                                        window.location.href = buildRouteUrl(data);
                                    } }, "Change!"))));
                        return (createElement_1.ReactLike.createElement("td", null,
                            input,
                            row.field.type === 'select' ?
                                createElement_1.ReactLike.createElement("a", { href: props.renderLink({ routeName: 'findRecord', params: { id: row.value, type: row.field.id } }) }, "\u00A0(find)") : ''));
                    })); }))),
                createElement_1.ReactLike.createElement("span", null,
                    "Line fields:",
                    createElement_1.ReactLike.createElement("ul", { style: { display: 'inline' } },
                        props.sublist.fields.map(function (f) { return createElement_1.ReactLike.createElement("li", null,
                            f.name,
                            " id: ",
                            f.id,
                            f.type ? ", type: " + f.type : '',
                            f.isMandatory ? ", Mandatory: " + f.isMandatory : '',
                            f.isReadonly ? ", Readonly: " + f.isReadonly : ''); }),
                        " ")),
                "}");
        }
        catch (error) {
            console.log("$error " + error);
            return createElement_1.ReactLike.createElement("span", null,
                "error ",
                error);
        }
    };
});
