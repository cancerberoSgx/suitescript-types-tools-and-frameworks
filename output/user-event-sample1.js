/**
 * @NAPIVersion 2.0
 * @NScriptType UserEventScript
 */
define(["require", "exports", "N/log"], function (require, exports, log) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.beforeSubmit = function (context) {
        var x = context.newRecord.getValue({ fieldId: 'companyname' });
        log.audit('value', "companyname is: " + x);
    };
});
