var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
define(["require", "exports", "../../jsx/createElement", "N/record", "./recordView", "./buildRecordViewModel"], function (require, exports, createElement_1, record_1, recordView_1, buildRecordViewModel_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function recordViewRoute(app) {
        return {
            name: 'recordView',
            // contentType: 'json',
            handler: function (o) {
                var _a = buildMetadata(o), record = _a.record, seeValues = _a.seeValues, error = _a.error, showAllFields = _a.showAllFields, messageFromRedirect = _a.messageFromRedirect, showSublistLines = _a.showSublistLines;
                if (error) {
                    return error;
                }
                // if (jsonMetadataOutput) {
                //   this.contentType = 'json'
                //   return metadata
                // }
                return createElement_1.ReactLike.render(createElement_1.ReactLike.createElement(recordView_1.RecordView, __assign({ record: record, seeValues: seeValues, showAllFields: showAllFields }, o.params, { 
                    // renderLink={app.renderLink.bind(app)}
                    // currentUrl={app.getCurrentRealUrlSearchFragment()}
                    messageFromRedirect: messageFromRedirect, showSublistLines: showSublistLines })));
            }
        };
    }
    exports.recordViewRoute = recordViewRoute;
    function buildMetadata(o) {
        var _a = o.params, id = _a.id, type = _a.type, messageFromRedirect = _a.messageFromRedirect, jsonMetadataOutput = _a.jsonMetadataOutput;
        var seeValues = !!o.params.seeValues;
        var showAllFields = !!o.params.showAllFields;
        var showSublistLines = !!o.params.showSublistLines;
        var error;
        if (!id || !type) {
            error = 'Cannot open record view without an id or type, given id, type: ' + (id + ", " + type);
        }
        var record = record_1.load({ id: id, type: type, isDynamic: true });
        if (!record) {
            error = 'Record id, type: ' + (id + ", " + type + " not be found");
        }
        return { record: buildRecordViewModel_1.buildRecordViewModel(record, seeValues, showAllFields), error: error, seeValues: seeValues, showAllFields: showAllFields, messageFromRedirect: messageFromRedirect, showSublistLines: showSublistLines, renderLink: undefined, currentUrl: undefined, currentParams: undefined };
    }
    function recordViewJsonRoute(app) {
        return {
            name: 'recordViewJson',
            contentType: 'json',
            handler: function (o) {
                var result = buildMetadata(o);
                return result;
            }
        };
    }
    exports.recordViewJsonRoute = recordViewJsonRoute;
});
