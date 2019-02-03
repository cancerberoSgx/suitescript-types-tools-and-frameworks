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
define(["require", "exports", "../../introspection/recordMetadata", "../../jsx/createElement", "./fieldEditor"], function (require, exports, recordMetadata_1, createElement_1, fieldEditor_1) {
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
        var showSublistLinesToggleLink = props.showSublistLines ?
            props.renderLink({ routeName: 'recordView', params: __assign({}, commonParams, { showSublistLines: '' }) }) :
            props.renderLink({ routeName: 'recordView', params: __assign({}, commonParams, { showSublistLines: 'true' }) });
        return createElement_1.ReactLike.createElement("div", null,
            props.messageFromRedirect ? createElement_1.ReactLike.createElement("p", { style: { border: '2px solid green' } }, props.messageFromRedirect) : createElement_1.ReactLike.createElement("span", null),
            createElement_1.ReactLike.createElement("a", { href: props.renderLink({ routeName: 'mainPage', params: __assign({}, commonParams) }) }, "Go back to Main Page"),
            createElement_1.ReactLike.createElement("h1", null,
                "Record ",
                name,
                ", id: ",
                id),
            createElement_1.ReactLike.createElement("a", { href: showValuesToggleLink }, props.seeValues ? 'Hide Field Values' : 'Show Field Values'),
            createElement_1.ReactLike.createElement("br", null),
            createElement_1.ReactLike.createElement("a", { href: showAllFieldsToggleLink }, props.showAllFields ? 'Hide Internal Fields' : 'Show All Fields'),
            createElement_1.ReactLike.createElement("br", null),
            createElement_1.ReactLike.createElement("a", { href: showSublistLinesToggleLink }, props.showSublistLines ? 'Hide Sublists lines' : 'Show Sublists lines'),
            createElement_1.ReactLike.createElement("div", null,
                createElement_1.ReactLike.createElement("h3", null, "Fields:"),
                createElement_1.ReactLike.createElement("ul", null, fields.map(function (f) { return createElement_1.ReactLike.createElement("li", null,
                    createElement_1.ReactLike.createElement(Field, __assign({ field: f }, props))); }))),
            createElement_1.ReactLike.createElement("div", null,
                createElement_1.ReactLike.createElement("h3", null, "Sublists:"),
                createElement_1.ReactLike.createElement("ul", null, sublists.map(function (s) { return createElement_1.ReactLike.createElement("li", null,
                    createElement_1.ReactLike.createElement(Sublist, __assign({ sublist: s }, props))); }))));
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
                !props.field.isReadonly ?
                    createElement_1.ReactLike.createElement(fieldEditor_1.FieldEditor, __assign({}, props)) :
                    createElement_1.ReactLike.createElement("span", null,
                        "$",
                        props.field.value + '',
                        " (read only)")) :
                createElement_1.ReactLike.createElement("span", null));
    };
    var Sublist = function (props) {
        return createElement_1.ReactLike.createElement("span", null,
            props.sublist.id,
            " ",
            props.sublist.name ? ", name: " + props.sublist.name : '',
            ", lines: #",
            props.sublist.lineCount,
            props.sublist.fields.length ? createElement_1.ReactLike.createElement("span", null, props.showSublistLines ? createElement_1.ReactLike.createElement("span", null,
                createElement_1.ReactLike.createElement(SublistLinesEditor, __assign({}, props)),
                " ") :
                createElement_1.ReactLike.createElement("span", null,
                    "Line fields:",
                    createElement_1.ReactLike.createElement("ul", { style: { display: 'inline' } }, props.sublist.fields.map(function (f) { return createElement_1.ReactLike.createElement("li", null,
                        f.name,
                        " id: ",
                        f.id,
                        f.type ? ", type: " + f.type : '',
                        f.isMandatory ? ", Mandatory: " + f.isMandatory : '',
                        f.isReadonly ? ", Readonly: " + f.isReadonly : ''); }))))
                : createElement_1.ReactLike.createElement("blockquote", null, "No sublist fields found"));
    };
    var SublistLinesEditor = function (props) {
        return createElement_1.ReactLike.createElement("table", null,
            createElement_1.ReactLike.createElement("thead", null,
                createElement_1.ReactLike.createElement("tr", null, props.sublist.fields.map(function (f) { return createElement_1.ReactLike.createElement("th", null,
                    f.id,
                    f.type ? " (" + f.type + ")" : ''); }))),
            createElement_1.ReactLike.createElement("tbody", null, props.sublist.lines.map(function (line, index) { return createElement_1.ReactLike.createElement("tr", null, line.rows.map(function (row, i) {
                return createElement_1.ReactLike.createElement("td", null,
                    row.text,
                    " ",
                    row.value,
                    " ",
                    row.field.type === 'select' ?
                        createElement_1.ReactLike.createElement("a", { href: props.renderLink({ routeName: 'recordView', params: { id: '7', type: row.field.id } }) }) : '');
            })); })));
    };
    function buildRecordViewModel(r, seeValues, showAllFields) {
        var record = recordMetadata_1.getRecordTypeMetadata({
            record: r,
            fieldPredicate: showAllFields ? function (f) { return true; } : internalFilterPredicate,
            debug: false,
            callGetSublistField: true
        });
        if (!record) {
            throw 'record not found';
        }
        record.fields = record.fields
            .filter(function (f) { return f.id; })
            .map(function (f) {
            if (!seeValues) {
                return f;
            }
            var value, text;
            try {
                //@ts-i gnore     
                value = r.getValue(f.id);
                text = r.getText(f.id);
            }
            catch (error) {
                value = "ERROR " + f.id;
            }
            return __assign({}, f, { value: value, text: text });
        })
            .sort(function (a, b) { return a.id.localeCompare(b.id); });
        record.sublists = record.sublists
            .sort(function (a, b) { return a.id.localeCompare(b.id); })
            .map(function (s) {
            s.fields = s.fields.sort(function (a, b) { return a.id.localeCompare(b.id); });
            s.lineCount = r.getLineCount({ sublistId: s.id });
            s.lines = [];
            var _loop_1 = function (line) {
                s.lines[line] = { rows: [] };
                s.fields.forEach(function (f) {
                    var text = r.getSublistText({ sublistId: s.id, fieldId: f.id, line: line });
                    var value = r.getSublistValue({ sublistId: s.id, fieldId: f.id, line: line });
                    s.lines[line].rows.push({ text: text, value: value, field: f });
                });
            };
            for (var line = 0; line < s.lineCount; line++) {
                _loop_1(line);
            }
            return s;
        });
        return record;
    }
    exports.buildRecordViewModel = buildRecordViewModel;
    function internalFilterPredicate(f) {
        return f.indexOf('_') !== 0 && f.indexOf('sys_') !== 0 && f.indexOf('nsapi') !== 0;
    }
});
