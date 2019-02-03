define(["require", "exports", "../../misc/misc", "N/record"], function (require, exports, misc_1, record_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function setFieldValueRoute(app) {
        return {
            name: 'setFieldValue',
            handler: function (o) {
                var _a = o.params, recordId = _a.recordId, recordType = _a.recordType, fieldId = _a.fieldId, fieldValue = _a.fieldValue, fieldType = _a.fieldType;
                var redirect = decodeURIComponent(o.params.redirect);
                if (!recordId || !recordType || !fieldId || !fieldValue) {
                    return 'Invalid call - !id|| !type || !fieldId || ! fieldValue must apply ' + (recordId + ", " + recordType + ", " + fieldId + "," + fieldValue);
                }
                var record = record_1.load({ id: recordId, type: recordType });
                if (!record) {
                    return 'Record id, type: ' + (recordId + ", " + recordType + " not found");
                }
                if (!misc_1.find(record.getFields(), function (f) { return f === fieldId; })) {
                    return 'Record id, type: ' + (recordId + ", " + recordType + " does not have fieldId " + fieldId);
                }
                try {
                    record.setValue({ fieldId: fieldId, value: fieldValue });
                    record.save();
                    var messageFromRedirect = "record (" + recordType + ", " + recordId + ") field \"" + fieldId + "\" value changed to \"" + fieldValue + "\" (" + fieldType + ") successfully ";
                    if (redirect) {
                        return app.redirect({ redirect: redirect, messageFromRedirect: messageFromRedirect });
                    }
                    else {
                        return messageFromRedirect;
                    }
                }
                catch (error) {
                    return "<p><br/>\n        <a href=\"" + redirect + "\">Go to previous page</a></p>setFieldValue: ERROR: while trying to set field on " + JSON.stringify({ recordId: recordId, recordType: recordType, fieldId: fieldId, fieldValue: fieldValue, fieldType: fieldType }) + " error: \n" + error + " " + error.stack;
                }
            }
        };
    }
    exports.setFieldValueRoute = setFieldValueRoute;
});
