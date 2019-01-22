/**
 * @NApiVersion 2.x
 * @NScriptType Suitelet
 */
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
define(["require", "exports", "N/record", "./responseLogger"], function (require, exports, record, responseLogger_1) {
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.onRequest = function (context) {
        responseLogger_1.initialize({ response: context.response, enabled: true });
        var fromRecord = record.load({ type: 'commercecategory', id: 18 });
        var newRecordId = cloneRecord({
            fromRecord: fromRecord,
            type: 'commercecategory',
            customFieldValues: { primaryparent: null },
            ignoreFields: ['lastmodifiedby', 'created']
        });
        var toRecord = record.load({ type: 'commercecategory', id: newRecordId });
        cloneSublist({
            fromRecord: fromRecord,
            toRecord: toRecord,
            sublistId: 'subcategories'
        });
    };
    /**
     * Will move given category (and all its descendants to given target parent (targetId).
     *
     * Use targetId===null to move the category to the root (as primary category)
     *
     * Important: It will actually clone (just) the given category in the parent and then move its direct children to the clone
     */
    function moveCategory(config) {
        // cloneRecord({
        //     ...config,
        //     type: 'commercecategory',
        //     customFieldValues: { primaryparent: null },
        //     // ignoreFields: ['lastmodifiedby', 'created']
        // })
        // const cloneId = cloneRecord({ ...config, type: 'primaryparent' })
        return null;
    }
    exports.moveCategory = moveCategory;
    function cloneRecord(config) {
        // const fromRecord = record.load(config)
        var fromRecord = config.fromRecord, _a = config.ignoreFields, ignoreFields = _a === void 0 ? [] : _a, _b = config.customFieldValues, customFieldValues = _b === void 0 ? {} : _b;
        responseLogger_1.log("target id: " + (fromRecord && fromRecord.id));
        var newRecord = record.create({ type: fromRecord.type });
        responseLogger_1.log("newRecord: " + newRecord);
        var fields = fromRecord.getFields().filter(function (f) { return (ignoreFields || []).concat(['id']).indexOf(f) === -1; });
        responseLogger_1.log("cloned fields: " + fields.join(', '));
        customFieldValues = customFieldValues || {};
        fields.forEach(function (field) { return newRecord.setValue({ fieldId: field, value: (typeof customFieldValues[field] === 'undefined') ? fromRecord.getValue(field) : customFieldValues[field] }); });
        var id = newRecord.save();
        responseLogger_1.log("new record id : " + id);
        return id;
    }
    exports.cloneRecord = cloneRecord;
    /** will clone given record's sublist to given target record. returns the new sublist id.  */
    function cloneSublist(config) {
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
    exports.cloneSublist = cloneSublist;
    function cloneSublists(config) {
        var fromRecord = config.fromRecord, toRecord = config.toRecord, _a = config.ignoreSublists, ignoreSublists = _a === void 0 ? [] : _a, dontSave = config.dontSave, _b = config.customCloneSublistConfigs, customCloneSublistConfigs = _b === void 0 ? {} : _b;
        var sublists = fromRecord.getSublists().filter(function (f) { return ignoreSublists.slice().indexOf(f) === -1; });
        responseLogger_1.log("cloneSublists starts: sublists: " + sublists.join(',') + ", fromRecord: " + fromRecord.id + ", toRecord: " + toRecord.id + ", dontSave: " + dontSave + ", customCloneSublistConfigs: " + Object.keys(customCloneSublistConfigs).join(','));
        sublists.forEach(function (sublistId) {
            var defaultCloneSublistConfig = { sublistId: sublistId, fromRecord: fromRecord, toRecord: toRecord, dontSave: dontSave };
            var finalSublistConfig = __assign({}, defaultCloneSublistConfig, (customCloneSublistConfigs[sublistId] || {}), { dontSave: true // we don't want to save the record until all sublists are cloned
             });
            cloneSublist(finalSublistConfig);
        });
        if (!dontSave) {
            toRecord.save();
        }
        responseLogger_1.log("cloneSublists ends: sublists: " + sublists.join(',') + ", fromRecord: " + fromRecord.id + ", toRecord: " + toRecord.id);
        return null;
    }
    exports.cloneSublists = cloneSublists;
});
// Research:
// the following fails with `"COMMERCE_CATEGORY_CANNOT_UPDATE_PRIMARY_PARENT","message":"The Primary Parent was not updated. Other records depend on it."`
// const r = record.load({id: 18, type: 'commercecategory',})
// r.setValue({fieldId: 'primaryparent', value: null})
// const id = r.save()
// log(`new record id : ${id}`)
