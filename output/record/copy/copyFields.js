define(["require", "exports", "N/record", "../../log/log"], function (require, exports, record, log_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function copyFields(config) {
        var fromRecord = config.fromRecord, _a = config.toRecord, toRecord = _a === void 0 ? record.create({ type: config.fromRecord.type }) : _a, _b = config.ignoreFields, ignoreFields = _b === void 0 ? [] : _b, _c = config.customFieldValues, customFieldValues = _c === void 0 ? {} : _c;
        log_1.log("target id: " + (fromRecord && fromRecord.id));
        var fields = fromRecord.getFields().filter(function (f) { return (ignoreFields || []).concat(['id']).indexOf(f) === -1; });
        log_1.log("cloned fields: " + fields.join(', '));
        customFieldValues = customFieldValues || {};
        // @ts-ignore
        fields.forEach(function (field) { return toRecord.setValue({ fieldId: field, value: (typeof customFieldValues[field] === 'undefined') ? fromRecord.getValue(field) : customFieldValues[field] }); });
        if (!config.dontSave) {
            var id = toRecord.save();
            log_1.log("new record id : " + id);
        }
        return toRecord;
    }
    exports.copyFields = copyFields;
});
