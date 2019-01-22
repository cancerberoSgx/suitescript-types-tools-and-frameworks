var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
define(["require", "exports", "N/record", "./copyFields", "./copySublists"], function (require, exports, record, copyFields_1, copySublists_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Will move given category (and all its descendants to given target parent (targetId).
     *
     * Use targetId===null to move the category to the root (as primary category)
     *
     * Important: It will actually clone (just) the given category in the parent and then move its direct children to the clone
     *
     * @returns the new category record
     */
    function copyRecord(config) {
        var toRecord = copyFields_1.copyFields(__assign({}, config));
        copySublists_1.copySublists(__assign({}, config));
        record.detach;
        return toRecord;
    }
    exports.copyRecord = copyRecord;
});
