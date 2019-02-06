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
define(["require", "exports", "../../jsx/createElement", "./fieldEditor", "./sublistLineEditor", "../../jsx/Style"], function (require, exports, createElement_1, fieldEditor_1, sublistLineEditor_1, Style_1) {
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
        var fieldTable = {
            selectorPostfix: ' td',
            border: '1px solid #aaaaaa',
            padding: '2px'
        };
        var sublistFieldTable = __assign({}, fieldTable, { fontSize: '0.95em', border: '1px solid #ededed' });
        var messageFromRedirect = {
            border: '2px solid green'
        };
        var _b = Style_1.Styles({ fieldTable: fieldTable, sublistFieldTable: sublistFieldTable, messageFromRedirect: messageFromRedirect }), styles = _b.styles, classes = _b.classes;
        return createElement_1.ReactLike.createElement("div", null,
            createElement_1.ReactLike.createElement(Style_1.Style, { classes: styles }),
            props.messageFromRedirect ? createElement_1.ReactLike.createElement("p", { className: classes.messageFromRedirect }, props.messageFromRedirect) : createElement_1.ReactLike.createElement("span", null),
            createElement_1.ReactLike.createElement("a", { href: props.renderLink({ routeName: 'mainPage', params: __assign({}, commonParams) }) }, "Go back to Main Page"),
            createElement_1.ReactLike.createElement("a", { href: props.renderLink({ routeName: 'recordView', params: __assign({}, commonParams) }) }, "As JSON"),
            createElement_1.ReactLike.createElement("h1", null,
                "Record ",
                name,
                ", id: ",
                id),
            createElement_1.ReactLike.createElement("a", { href: showValuesToggleLink }, props.seeValues ? 'Hide Field Values' : 'Show Field Values'),
            createElement_1.ReactLike.createElement("br", null),
            createElement_1.ReactLike.createElement("a", { href: showAllFieldsToggleLink }, props.showAllFields ? 'Hide Internal Fields' : 'Show All Fields '),
            createElement_1.ReactLike.createElement("br", null),
            createElement_1.ReactLike.createElement("a", { href: showSublistLinesToggleLink }, props.showSublistLines ? 'Hide Sublists lines' : 'Show Sublists lines'),
            createElement_1.ReactLike.createElement("div", null,
                createElement_1.ReactLike.createElement("h3", null, "Fields"),
                createElement_1.ReactLike.createElement("table", { className: classes.fieldTable },
                    createElement_1.ReactLike.createElement("thead", null,
                        createElement_1.ReactLike.createElement("tr", null,
                            createElement_1.ReactLike.createElement("th", null, "Id"),
                            createElement_1.ReactLike.createElement("th", null, "Label"),
                            createElement_1.ReactLike.createElement("th", null, "Type"),
                            createElement_1.ReactLike.createElement("th", null, "Modifiers"),
                            props.seeValues ? createElement_1.ReactLike.createElement("th", null, "Value Editor") : '',
                            props.seeValues ? createElement_1.ReactLike.createElement("th", null, "Value Text") : '')),
                    createElement_1.ReactLike.createElement("tbody", null, fields.map(function (f) { return createElement_1.ReactLike.createElement("tr", null,
                        createElement_1.ReactLike.createElement("td", null, f.id),
                        createElement_1.ReactLike.createElement("td", null, f.name),
                        createElement_1.ReactLike.createElement("td", null, f.type),
                        createElement_1.ReactLike.createElement("td", null,
                            f.isReadonly ? " readonly" : '',
                            f.isMandatory ? " mandatory" : ''),
                        props.seeValues ? createElement_1.ReactLike.createElement("td", null,
                            createElement_1.ReactLike.createElement(fieldEditor_1.FieldEditor, __assign({}, props, { field: f }))) : '',
                        props.seeValues ? createElement_1.ReactLike.createElement("td", null, f.text) : ''); })))),
            createElement_1.ReactLike.createElement("div", null,
                createElement_1.ReactLike.createElement("h3", null, "Sublists:"),
                createElement_1.ReactLike.createElement("ul", { className: classes.sublistFieldTable }, sublists.map(function (s) { return createElement_1.ReactLike.createElement("li", null,
                    createElement_1.ReactLike.createElement(exports.Sublist, __assign({ sublist: s }, props))); }))));
    };
    exports.Sublist = function (props) {
        return createElement_1.ReactLike.createElement("div", null,
            props.sublist.id,
            props.sublist.name ? ", name: " + props.sublist.name : '',
            ", lines: #",
            props.sublist.lineCount,
            props.showSublistLines ?
                createElement_1.ReactLike.createElement(sublistLineEditor_1.SublistLinesEditor, __assign({}, props)) :
                createElement_1.ReactLike.createElement("span", null));
    };
});
