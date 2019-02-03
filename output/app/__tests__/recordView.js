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
define(["require", "exports", "../../jsx/createElement", "../../introspection/recordMetadata", "../../jsx/util/BindInputValue", "../../jsx/util/Bind", "N/util", "../../misc/dateUtil"], function (require, exports, createElement_1, recordMetadata_1, BindInputValue_1, Bind_1, util_1, dateUtil_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.RecordView = function (props) {
        var _a = props.record, fields = _a.fields, sublists = _a.sublists, id = _a.id, name = _a.name;
        var commonParams = { id: props.record.id, type: props.record.type, };
        var showValuesToggleLink = props.seeValues ?
            props.renderLink({ routeName: 'recordView', params: __assign({}, commonParams, { seeValues: '' }) }) :
            props.renderLink({ routeName: 'recordView', params: __assign({}, commonParams, { seeValues: 'true' }) });
        var showAllFieldsToggleLink = props.showAllFields ?
            props.renderLink({ routeName: 'recordView', params: __assign({}, commonParams, { showAllFields: '' }) }) :
            props.renderLink({ routeName: 'recordView', params: __assign({}, commonParams, { showAllFields: 'true' }) });
        return createElement_1.ReactLike.createElement("div", null,
            props.messageFromRedirect ? createElement_1.ReactLike.createElement("p", { style: { border: '2px solid green' } }, props.messageFromRedirect) : createElement_1.ReactLike.createElement("span", null),
            createElement_1.ReactLike.createElement("a", { href: props.renderLink({ routeName: 'mainPage', params: __assign({}, commonParams) }) }, "Go back to Main Page"),
            createElement_1.ReactLike.createElement("h1", null,
                "Record ",
                name,
                ", id: ",
                id),
            createElement_1.ReactLike.createElement("a", { href: showValuesToggleLink }, props.seeValues ? 'Hide Values' : 'See Values'),
            createElement_1.ReactLike.createElement("br", null),
            createElement_1.ReactLike.createElement("a", { href: showAllFieldsToggleLink }, props.showAllFields ? 'Hide Internal Fields' : 'Show All Fields'),
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
        return createElement_1.ReactLike.createElement("span", null,
            createElement_1.ReactLike.createElement("strong", null, props.field.id),
            " ",
            props.field.type ? ", type: " + props.field.type : '',
            " ",
            props.field.name ? ", name: " + props.field.name : '',
            props.field.isReadonly ? ", Readonly" : '',
            props.field.isMandatory ? ", Mandatory" : '',
            props.seeValues ? createElement_1.ReactLike.createElement("span", null,
                ". Value (",
                typeof props.field.value,
                ") :",
                !props.field.isReadonly ? createElement_1.ReactLike.createElement(FieldEditor, __assign({}, props)) : createElement_1.ReactLike.createElement("span", null,
                    "$",
                    props.field.value + '',
                    " (read only)")) : createElement_1.ReactLike.createElement("span", null));
    };
    var Sublist = function (props) {
        return createElement_1.ReactLike.createElement("span", null,
            props.sublist.id,
            " ",
            props.sublist.name ? ", name: " + props.sublist.name : '',
            props.sublist.fields.length ? createElement_1.ReactLike.createElement("span", null,
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
    // declare function formatDate(date: Date, format: 'YYYY-MM-DD'|'MM/DD/YYYY'): string
    var FieldEditor = function (props) {
        var f = props.field;
        if ((f.type === 'text' || f.type === 'date') && typeof f.value !== 'boolean') {
            return createElement_1.ReactLike.createElement("span", null,
                createElement_1.ReactLike.createElement(BindInputValue_1.BindInputValue, { bindInputId: "data-field-id" + f.id }, (f.type === 'date' && util_1.isDate(f.value)) ? createElement_1.ReactLike.createElement("input", { type: "date", value: dateUtil_1.formatDate(f.value, 'YYYY-MM-DD') }) : createElement_1.ReactLike.createElement("input", { value: f.value + '' })),
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
                            // if(!data){
                            //   return
                            // }
                            var fieldValue = getBindInputValue(e.currentTarget, { dateAsString: true });
                            // if(data.params.fieldType==='date'){
                            //   const val = getBindInputValue<string>(e.currentTarget, {dateAsString: true})
                            //   // if(val){
                            //   //   fieldValue = dateToInputValue(val, 'MM/DD/YYYY')
                            //   // }
                            // }
                            // else {
                            //   fieldValue = getBindInputValue<string>(e.currentTarget)||''
                            // }
                            // new Intl.DateTimeFormat('en-US').format(d)
                            // const fieldValue = getBindInputValue(e.currentTarget)
                            if (!data || fieldValue === undefined) {
                                return;
                            }
                            data.params = __assign({}, data.params, { fieldValue: fieldValue });
                            var url = buildRouteUrl(data);
                            window.location.href = url;
                        } }, "Change!")));
        }
        return createElement_1.ReactLike.createElement("span", null);
    };
    function internalFilterPredicate(f) { return f.indexOf('_') !== 0 && f.indexOf('sys_') !== 0 && f.indexOf('nsapi') !== 0; }
    function buildRecordViewModel(r, seeValues, showAllFields) {
        var record = recordMetadata_1.getRecordTypeMetadata({
            record: r,
            fieldPredicate: showAllFields ? function (f) { return true; } : internalFilterPredicate,
            debug: false
        });
        if (!record) {
            throw 'record not found';
        }
        record.fields = record.fields
            .filter(function (f) { return f.id; })
            .map(function (f) {
            var value;
            try {
                //@ts-ignore     
                value = r.getValue(f.id);
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