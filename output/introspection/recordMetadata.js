define(["require", "exports", "../record/recordRef", "../log/log"], function (require, exports, recordRef_1, log_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var RecordBuilder = /** @class */ (function () {
        function RecordBuilder() {
        }
        RecordBuilder.prototype.extractRecord = function (r) {
            var fields = this.extractFields(r);
            var sublists = this.extractSublists(r);
            return {
                id: r.id + '',
                name: r.type + '',
                fields: fields,
                sublists: sublists,
                type: r.type + ''
            };
        };
        RecordBuilder.prototype.extractFields = function (r) {
            var _this = this;
            return r.getFields()
                .map(function (fieldId) { return _this.extractField(r, fieldId); })
                .filter(function (f) { return !!f; });
        };
        RecordBuilder.prototype.extractField = function (r, fieldId) {
            if (fieldId.indexOf('sys_') === 0) {
                return {
                    id: fieldId, type: 'text', isReadonly: false, isMandatory: false,
                };
            }
            var field = r.getField({ fieldId: fieldId });
            if (field) {
                return { id: field.id + '', name: field.label + '', isReadonly: !!field.isReadOnly, isMandatory: !!field.isMandatory, type: field.type + '', };
            }
            else {
                this.log('Cannot get record field (getField) with id ' + fieldId);
            }
        };
        RecordBuilder.prototype.log = function (s) {
            log_1.log(s);
        };
        RecordBuilder.prototype.extractSublists = function (r) {
            var _this = this;
            return r.getSublists()
                .map(function (sublistId) { return _this.extractSublist(r, sublistId); })
                .filter(function (s) { return !!s; });
        };
        RecordBuilder.prototype.extractSublist = function (r, sublistId) {
            var name;
            try {
                var s = r.getSublist({ sublistId: sublistId });
                name = s && s.name;
            }
            catch (error) {
            }
            var fields = this.extractSublistFields(r, sublistId);
            return {
                id: sublistId, fields: fields, name: name
            };
        };
        RecordBuilder.prototype.extractSublistFields = function (r, sublistId) {
            var _this = this;
            var sublistFields = [];
            try {
                sublistFields = r.getSublistFields({ sublistId: sublistId });
            }
            catch (error) {
                this.log('Exception when r.getSublistFields({ sublistId }) for sublistId==' + sublistId);
            }
            return sublistFields
                .filter(function (f) { return f.indexOf('sys_') !== 0; })
                .map(function (fieldId) { return _this.extractSublistField(r, sublistId, fieldId); });
        };
        RecordBuilder.prototype.extractSublistField = function (r, sublistId, fieldId) {
            return {
                id: fieldId
            };
            // let name:string|undefined, type: string|undefined
            // try {
            //   const f = 
            // } catch (error) {
            // }
            // throw new Error('Method not implemented.');
        };
        return RecordBuilder;
    }());
    function getRecordTypeMetadata(rr) {
        // if (!r) { return }
        var builder = new RecordBuilder();
        var r = recordRef_1.asRecordOrThrow(rr);
        return builder.extractRecord(r);
    }
    exports.getRecordTypeMetadata = getRecordTypeMetadata;
});
