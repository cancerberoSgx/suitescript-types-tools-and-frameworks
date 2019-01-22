define(["require", "exports", "./responseLogger"], function (require, exports, responseLogger_1) {
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Clones given record's sublist to given target record. returns the new sublist id.
     */
    function copySublist(config) {
        var fromRecord = config.fromRecord, toRecord = config.toRecord, sublistId = config.sublistId, dontSave = config.dontSave, _a = config.customSublistFieldValues, customSublistFieldValues = _a === void 0 ? {} : _a, _b = config.ignoreLines, ignoreLines = _b === void 0 ? [] : _b, _c = config.ignoreSublistFields, ignoreSublistFields = _c === void 0 ? [] : _c;
        var sublistFields = fromRecord.getSublistFields({ sublistId: sublistId }).filter(function (f) { return ignoreSublistFields.slice().indexOf(f) === -1; });
        responseLogger_1.log("cloneSublist starts: : " + sublistId + ", fromRecord: " + fromRecord.id + ", toRecord: " + toRecord.id + ", dontSave: " + dontSave + ", sublistFieldsToClone: " + sublistFields.join(', '));
        var lineCount = fromRecord.getLineCount({ sublistId: sublistId });
        var _loop_1 = function (line) {
            if (ignoreLines.indexOf(line) !== -1) {
                return "continue";
            }
            sublistFields.forEach(function (fieldId) {
                var value = (typeof customSublistFieldValues[fieldId] === 'undefined') ?
                    fromRecord.getSublistValue({ sublistId: sublistId, fieldId: fieldId, line: line }) :
                    customSublistFieldValues[fieldId];
                toRecord.setSublistValue({ sublistId: sublistId, fieldId: fieldId, line: line, value: value });
                responseLogger_1.log("setSublistValue: " + sublistId + ", field " + fieldId + ", line: " + line + " value: " + value);
            });
        };
        for (var line = 0; line < lineCount; line++) {
            _loop_1(line);
        }
        if (!dontSave) {
            toRecord.save();
        }
        responseLogger_1.log("cloneSublist ends: " + sublistId + ", fromRecord: " + fromRecord.id + ", toRecord: " + toRecord.id);
    }
    exports.copySublist = copySublist;
});
