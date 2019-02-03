define(["require", "exports", "../../jsx/createElement", "../../introspection/recordMetadata"], function (require, exports, createElement_1, recordMetadata_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.RecordView = function (props) {
        var _a = props.record, fields = _a.fields, sublists = _a.sublists, id = _a.id, name = _a.name;
        return createElement_1.ReactLike.createElement("div", null,
            createElement_1.ReactLike.createElement("h1", null,
                "$",
                name,
                " id: $",
                id),
            createElement_1.ReactLike.createElement("div", null,
                createElement_1.ReactLike.createElement("h3", null, "Fields:"),
                createElement_1.ReactLike.createElement("ul", null, fields.map(function (f) { return createElement_1.ReactLike.createElement("li", null,
                    createElement_1.ReactLike.createElement(Field, { field: f })); }))),
            createElement_1.ReactLike.createElement("div", null,
                createElement_1.ReactLike.createElement("h3", null, "Sublists:"),
                createElement_1.ReactLike.createElement("ul", null, sublists.map(function (s) { return createElement_1.ReactLike.createElement("li", null,
                    createElement_1.ReactLike.createElement(Sublist, { sublist: s })); }))));
    };
    var Field = function (props) {
        return createElement_1.ReactLike.createElement("div", null,
            props.field.id,
            " ",
            props.field.type ? ", type: " + props.field.type : '',
            " ",
            props.field.name ? ", name: " + props.field.name : '');
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
                    ", type: ",
                    f.type); })))
                : createElement_1.ReactLike.createElement("div", null, "No sublist fields found"));
    };
    function buildRecordViewModel(r) {
        var record = recordMetadata_1.getRecordTypeMetadata(r);
        if (!record) {
            throw 'record not found';
        }
        record.fields = record.fields.sort(function (a, b) { return a.id.localeCompare(b.id); });
        record.sublists = record.sublists.sort(function (a, b) { return a.id.localeCompare(b.id); });
        return record;
    }
    exports.buildRecordViewModel = buildRecordViewModel;
});
