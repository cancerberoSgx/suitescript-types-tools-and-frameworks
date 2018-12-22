var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
define(["require", "exports", "../log/responseLogger", "./copySublist"], function (require, exports, responseLogger_1, copySublist_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /** will copy all sublists from given one record to another */
    function copySublists(config) {
        var fromRecord = config.fromRecord, toRecord = config.toRecord, _a = config.ignoreSublists, ignoreSublists = _a === void 0 ? [] : _a, dontSave = config.dontSave, _b = config.customCloneSublistConfigs, customCloneSublistConfigs = _b === void 0 ? {} : _b;
        var sublists = fromRecord.getSublists().filter(function (f) { return ignoreSublists.slice().indexOf(f) === -1; });
        responseLogger_1.log("cloneSublists starts: sublists: " + sublists.join(',') + ", fromRecord: " + fromRecord.id + ", toRecord: " + toRecord.id + ", dontSave: " + dontSave + ", customCloneSublistConfigs: " + Object.keys(customCloneSublistConfigs).join(','));
        sublists.forEach(function (sublistId) {
            var defaultCloneSublistConfig = { sublistId: sublistId, fromRecord: fromRecord, toRecord: toRecord, dontSave: dontSave };
            var finalSublistConfig = __assign({}, defaultCloneSublistConfig, (customCloneSublistConfigs[sublistId] || {}), { dontSave: true // we don't want to save the record until all sublists are cloned
             });
            copySublist_1.copySublist(finalSublistConfig);
        });
        if (!dontSave) {
            toRecord.save();
        }
        responseLogger_1.log("cloneSublists ends: sublists: " + sublists.join(',') + ", fromRecord: " + fromRecord.id + ", toRecord: " + toRecord.id);
    }
    exports.copySublists = copySublists;
});
