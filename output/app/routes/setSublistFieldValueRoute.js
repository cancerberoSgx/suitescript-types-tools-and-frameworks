define(["require", "exports", "../../misc/misc", "N/record"], function (require, exports, misc_1, record_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function setSublistFieldValueRoute(app) {
        return {
            name: 'setSublistFieldValue',
            handler: function (o) {
                var _a = o.params, recordId = _a.recordId, recordType = _a.recordType, fieldId = _a.fieldId, fieldType = _a.fieldType, line = _a.line, sublistId = _a.sublistId;
                var fieldValue = fieldType === 'checkbox' ? o.params.fieldValue === 'true' : fieldType === 'multiselect' ?
                    (misc_1.tryTo(function () { return JSON.parse("" + o.params.fieldValue); }) || o.params.fieldValue) : o.params.fieldValue;
                var redirect = decodeURIComponent(o.params.redirect);
                if (!recordId || !recordType || !fieldId || typeof fieldValue === 'undefined' || typeof line === 'undefined' || !sublistId) {
                    return 'Invalid call - id&& !type && fieldId && fieldValue && line && sublistId must apply ' + (recordId + ", " + recordType + ", " + fieldId + "," + fieldValue + "," + line + "," + sublistId);
                }
                var record = record_1.load({ id: recordId, type: recordType });
                if (!record) {
                    return 'Record id, type: ' + (recordId + ", " + recordType + " not found");
                }
                if (!misc_1.find(record.getFields(), function (f) { return f === fieldId; })) {
                    return 'Record id, type: ' + (recordId + ", " + recordType + " does not have fieldId " + fieldId);
                }
                try {
                    record.setSublistValue({ fieldId: fieldId, value: fieldValue, line: line, sublistId: sublistId });
                    record.save();
                    var messageFromRedirect = "record (" + recordType + ", " + recordId + ") field \"" + fieldId + "\" of sublist " + sublistId + " line " + line + " value changed to " + fieldValue + " (" + fieldType + " - " + typeof fieldType + ") successfully ";
                    if (redirect) {
                        return app.redirect({ redirect: redirect, messageFromRedirect: messageFromRedirect });
                    }
                    else {
                        return messageFromRedirect;
                    }
                }
                catch (error) {
                    return "<p><br/>\n        <a href=\"" + redirect + "\">Go to previous page</a></p>setSublistFieldValue: ERROR: while trying to set field on " + JSON.stringify({ recordId: recordId, recordType: recordType, fieldId: fieldId, fieldValue: fieldValue, fieldType: fieldType, line: line, sublistId: sublistId }) + " error: \n\n" + error + "\n\n  " + error.stack.join('\n  ');
                }
            }
        };
    }
    exports.setSublistFieldValueRoute = setSublistFieldValueRoute;
});
