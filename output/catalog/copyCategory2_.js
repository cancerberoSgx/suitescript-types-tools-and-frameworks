define(["require", "exports", "N/record", "../log/responseLogger", "../record/sublistUtil"], function (require, exports, record_1, responseLogger_1, sublistUtil_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /** trying to use copy() but it doesn't work or I don't understand the API */
    function copyCategory2_(config) {
        var categoryId = config.categoryId, newPrimaryParent = config.newPrimaryParent, dontSave = config.dontSave;
        var target = record_1.copy({ id: categoryId, type: 'commercecategory' });
        target.setValue({ fieldId: 'primaryparent', value: newPrimaryParent });
        responseLogger_1.log("copy(): " + target.save());
        responseLogger_1.log("target set primaryparent:  " + target.save());
        var targetId = 'not yet saved';
        if (!dontSave) {
            targetId = target.save();
        }
        // TODO: should we re-load it ?
        responseLogger_1.log("new category saved: !!" + target.id + " " + targetId);
        var source = record_1.load({ id: categoryId, type: 'commercecategory' });
        var removedChildren = sublistUtil_1.getLines({ record: source, sublistId: 'subcategories' })
            .map(function (line) { return source.removeSublistSubrecord({ sublistId: 'subcategories', line: line, fieldId: 'subcategory' }); });
        responseLogger_1.log("Removed children from parent " + source.id + ": " + removedChildren.map(function (r) { return "id: " + r.id + " primaryparent: " + r.getValue('primaryparent'); }).join(',') + " ");
        var newChildren = sublistUtil_1.getLines({ record: target, sublistId: 'subcategories' })
            .map(function (line) { return target.getSublistSubrecord({ sublistId: 'subcategories', line: line, fieldId: 'subcategory' }); });
        responseLogger_1.log("New children in parent " + target.id + ": " + newChildren.map(function (r) { return "{id: " + r.id + ", primaryparent: " + r.getValue('primaryparent') + "}"; }).join(', ') + " ");
        if (!dontSave) {
            target.save();
        }
        return target;
        // return result;
    }
    exports.copyCategory2_ = copyCategory2_;
});
