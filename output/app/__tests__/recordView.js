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
define(["require", "exports", "../../jsx/createElement", "../../introspection/recordMetadata", "../../jsx/util/BindInputValue", "../../jsx/util/Bind"], function (require, exports, createElement_1, recordMetadata_1, BindInputValue_1, Bind_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.RecordView = function (props) {
        var _a = props.record, fields = _a.fields, sublists = _a.sublists, id = _a.id, name = _a.name;
        return createElement_1.ReactLike.createElement("div", null,
            createElement_1.ReactLike.createElement("h1", null,
                name,
                " id: ",
                id),
            createElement_1.ReactLike.createElement("a", { href: props.seeValues ? props.renderLink({ routeName: 'recordView', params: { id: props.record.id, type: props.record.type, seeValues: '' } }) : props.renderLink({ routeName: 'recordView', params: { id: props.record.id, type: props.record.type, seeValues: 'true' } }) }, props.seeValues ? 'Hide Values' : 'See values'),
            createElement_1.ReactLike.createElement("div", null,
                createElement_1.ReactLike.createElement("h3", null, "Fields:"),
                createElement_1.ReactLike.createElement("ul", null, fields.map(function (f) { return createElement_1.ReactLike.createElement("li", null,
                    createElement_1.ReactLike.createElement(Field, __assign({ field: f }, props))); }))),
            createElement_1.ReactLike.createElement("div", null,
                createElement_1.ReactLike.createElement("h3", null, "Sublists:"),
                createElement_1.ReactLike.createElement("ul", null, sublists.map(function (s) { return createElement_1.ReactLike.createElement("li", null,
                    createElement_1.ReactLike.createElement(Sublist, { sublist: s })); }))));
    };
    var Field = function (props) {
        return createElement_1.ReactLike.createElement("div", null,
            createElement_1.ReactLike.createElement("strong", null, props.field.id),
            " ",
            props.field.type ? ", type: " + props.field.type : '',
            " ",
            props.field.name ? ", name: " + props.field.name : '',
            props.field.isReadonly ? ", Readonly" : '',
            props.field.isMandatory ? ", Mandatory" : '',
            props.seeValues ? createElement_1.ReactLike.createElement("blockquote", null,
                createElement_1.ReactLike.createElement("strong", null, "value"),
                !props.field.isReadonly ? createElement_1.ReactLike.createElement(FieldEditor, __assign({}, props)) : createElement_1.ReactLike.createElement("span", null,
                    "$",
                    props.field.value + '',
                    " (read only)")) : createElement_1.ReactLike.createElement("span", null));
    };
    var Sublist = function (props) {
        return createElement_1.ReactLike.createElement("div", null,
            props.sublist.id,
            " ",
            props.sublist.name ? ", name: " + props.sublist.name : '',
            props.sublist.fields.length ? createElement_1.ReactLike.createElement("div", null,
                "Sublist fields:",
                createElement_1.ReactLike.createElement("ul", null, props.sublist.fields.map(function (f) { return createElement_1.ReactLike.createElement("li", null,
                    f.name,
                    " id: ",
                    f.id,
                    f.type ? ", type: " + f.type : '',
                    f.isMandatory ? ", Mandatory: " + f.isMandatory : '',
                    f.isReadonly ? ", Readonly: " + f.isReadonly : ''); })))
                : createElement_1.ReactLike.createElement("blockquote", null, "No sublist fields found"));
    };
    var FieldEditor = function (props) {
        var f = props.field;
        if (f.type === 'text') {
            return createElement_1.ReactLike.createElement("div", null,
                createElement_1.ReactLike.createElement(BindInputValue_1.BindInputValue, { bindInputId: "data-field-id" + f.id },
                    createElement_1.ReactLike.createElement("input", { value: f.value })),
                createElement_1.ReactLike.createElement(Bind_1.BindInputValueAndStoreData, { bindListenerId: "data-field-id" + f.id, data: {
                        routeName: 'setFieldValue',
                        params: {
                            recordId: props.record.id,
                            recordType: props.record.type,
                            fieldId: f.id,
                            redirect: encodeURIComponent(props.currentUrl)
                        }
                    } },
                    createElement_1.ReactLike.createElement("button", { 
                        // data-field-id={f.id} data-partial-link={props.renderLink({
                        //   routeName: 'setFieldValue', params: {
                        //     recordId: props.record.id, recordType: props.record.type,
                        //     fieldId: f.id, redirect: encodeURIComponent(props.currentUrl)
                        //   }
                        // })}
                        onClick: function (e) {
                            var fieldValue = getBindInputValue(e.currentTarget);
                            var data = getStoreData(e.currentTarget);
                            if (!data || fieldValue === undefined) {
                                return;
                            }
                            data.params = __assign({}, data.params, { fieldValue: fieldValue });
                            var url = buildRouteUrl(data);
                            // alert(url)
                            // debugger
                            window.location.href = url;
                            // const fieldId = e.currentTarget.getAttribute('data-field-id')
                            // const input = document.querySelector<HTMLInputElement>('input[data-field-id="' + fieldId + '"]')
                            // const value = input!.value
                            // const partialLink = e.currentTarget.getAttribute('data-partial-link')
                            // const link = partialLink + '&fieldValue=' + value
                            // window.location.href = link
                        } }, "Edit2")),
                createElement_1.ReactLike.createElement("a", { href: props.renderLink({
                        routeName: 'setFieldValue', params: {
                            recordId: props.record.id, recordType: props.record.type,
                            fieldId: f.id,
                            fieldValue: f.value + '',
                            redirect: encodeURIComponent(props.currentUrl)
                        }
                    }) }, "Edit"));
        }
        return createElement_1.ReactLike.createElement("span", null);
    };
    function buildRecordViewModel(r, seeValues) {
        var record = recordMetadata_1.getRecordTypeMetadata(r);
        if (!record) {
            throw 'record not found';
        }
        record.fields = record.fields
            .filter(function (f) { return f.id; })
            .map(function (f) {
            var value = '';
            try {
                value = r.getText(f.id) + '';
            }
            catch (error) {
                value = "ERROR " + f.id;
            }
            return __assign({}, f, { value: seeValues ? value : '' });
        })
            .sort(function (a, b) { return a.id.localeCompare(b.id); });
        record.sublists = record.sublists.sort(function (a, b) { return a.id.localeCompare(b.id); });
        return record;
    }
    exports.buildRecordViewModel = buildRecordViewModel;
});
