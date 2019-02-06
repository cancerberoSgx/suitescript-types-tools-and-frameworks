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
define(["require", "exports", "../../jsx/createElement", "./fieldEditor", "./sublistLineEditor"], function (require, exports, createElement_1, fieldEditor_1, sublistLineEditor_1) {
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
            createElement_1.ReactLike.createElement("a", { href: showAllFieldsToggleLink }, props.showAllFields ? 'Hide Internal Fields' : 'Show All Fields '),
            createElement_1.ReactLike.createElement("br", null),
            createElement_1.ReactLike.createElement("a", { href: showSublistLinesToggleLink }, props.showSublistLines ? 'Hide Sublists lines' : 'Show Sublists lines'),
            createElement_1.ReactLike.createElement("div", null,
                createElement_1.ReactLike.createElement("h3", null, "Fields:"),
                createElement_1.ReactLike.createElement("ul", null, fields.map(function (f) { return createElement_1.ReactLike.createElement("li", null,
                    createElement_1.ReactLike.createElement(exports.Field, __assign({ field: f }, props))); }))),
            createElement_1.ReactLike.createElement("div", null,
                createElement_1.ReactLike.createElement("h3", null, "Sublists:"),
                createElement_1.ReactLike.createElement("ul", null, sublists.map(function (s) { return createElement_1.ReactLike.createElement("li", null,
                    createElement_1.ReactLike.createElement(exports.Sublist, __assign({ sublist: s }, props))); }))));
    };
    exports.Field = function (props) {
        return createElement_1.ReactLike.createElement("div", null,
            createElement_1.ReactLike.createElement("strong", null, props.field.name ? "" + props.field.name : ''),
            " - ",
            createElement_1.ReactLike.createElement("em", null, props.field.id),
            props.field.type ? "(" + props.field.type + ")" : '',
            props.field.isReadonly ? " - readonly" : '',
            props.field.isMandatory ? " - mandatory" : '',
            props.seeValues ? createElement_1.ReactLike.createElement(fieldEditor_1.FieldEditor, __assign({}, props)) : createElement_1.ReactLike.createElement("span", null));
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
