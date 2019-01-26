// This file is auto generated, do not edit it. 
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define(["require", "exports", "../typedRecord"], function (require, exports, typedRecord_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var cmscontentFieldsImpl = /** @class */ (function () {
        function cmscontentFieldsImpl(typedRecord) {
            this.typedRecord = typedRecord;
        }
        Object.defineProperty(cmscontentFieldsImpl.prototype, "areaname", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('areaname');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('areaname', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(cmscontentFieldsImpl.prototype, "changeurl", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('changeurl');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('changeurl', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(cmscontentFieldsImpl.prototype, "cmscontenttype", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('cmscontenttype');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('cmscontenttype', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(cmscontentFieldsImpl.prototype, "createdby", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('createdby');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('createdby', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(cmscontentFieldsImpl.prototype, "createddate", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('createddate');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('createddate', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(cmscontentFieldsImpl.prototype, "description", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('description');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('description', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(cmscontentFieldsImpl.prototype, "enddate", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('enddate');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('enddate', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(cmscontentFieldsImpl.prototype, "externalid", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('externalid');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('externalid', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(cmscontentFieldsImpl.prototype, "global", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('global');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('global', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(cmscontentFieldsImpl.prototype, "hidden", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('hidden');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('hidden', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(cmscontentFieldsImpl.prototype, "id", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('id');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('id', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(cmscontentFieldsImpl.prototype, "internalid", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('internalid');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('internalid', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(cmscontentFieldsImpl.prototype, "lastmodifiedby", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('lastmodifiedby');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('lastmodifiedby', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(cmscontentFieldsImpl.prototype, "lastmodifieddate", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('lastmodifieddate');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('lastmodifieddate', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(cmscontentFieldsImpl.prototype, "matchcount", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('matchcount');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('matchcount', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(cmscontentFieldsImpl.prototype, "matchtype", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('matchtype');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('matchtype', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(cmscontentFieldsImpl.prototype, "name", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('name');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('name', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(cmscontentFieldsImpl.prototype, "pagetype", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('pagetype');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('pagetype', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(cmscontentFieldsImpl.prototype, "path", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('path');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('path', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(cmscontentFieldsImpl.prototype, "sequencenumber", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('sequencenumber');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('sequencenumber', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(cmscontentFieldsImpl.prototype, "settings", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('settings');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('settings', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(cmscontentFieldsImpl.prototype, "site", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('site');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('site', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(cmscontentFieldsImpl.prototype, "startdate", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('startdate');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('startdate', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(cmscontentFieldsImpl.prototype, "template", {
            get: function () {
                return this.typedRecord.nsRecord.getValue('template');
            },
            set: function (value) {
                this.typedRecord.nsRecord.setValue('template', value);
            },
            enumerable: true,
            configurable: true
        });
        return cmscontentFieldsImpl;
    }());
    exports.cmscontentFieldsImpl = cmscontentFieldsImpl;
    var cmscontentRecordImpl = /** @class */ (function (_super) {
        __extends(cmscontentRecordImpl, _super);
        function cmscontentRecordImpl(nsRecord) {
            var _this = _super.call(this, nsRecord) || this;
            _this.nsRecord = nsRecord;
            _this._fields = new cmscontentFieldsImpl(_this);
            return _this;
            // this._sublists = cmscontentnew FieldsImpl(this)
        }
        return cmscontentRecordImpl;
    }(typedRecord_1.TypedRecordImpl));
    exports.cmscontentRecordImpl = cmscontentRecordImpl;
});
