define(["require", "exports", "../../jsx/createElement", "N/record", "../recordView/recordView"], function (require, exports, createElement_1, record_1, recordView_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function recordViewRoute(app) {
        return {
            name: 'recordView',
            handler: function (o) {
                var _a = o.params, id = _a.id, type = _a.type, messageFromRedirect = _a.messageFromRedirect;
                var seeValues = !!o.params.seeValues;
                var showAllFields = !!o.params.showAllFields;
                var showSublistLines = !!o.params.showSublistLines;
                if (!id || !type) {
                    return 'Cannot open record view without an id or type, given id, type: ' + (id + ", " + type);
                }
                var record = record_1.load({ id: id, type: type });
                if (!record) {
                    return 'Record id, type: ' + (id + ", " + type + " not be found");
                }
                return createElement_1.ReactLike.render(createElement_1.ReactLike.createElement(recordView_1.RecordView, { record: recordView_1.buildRecordViewModel(record, seeValues, showAllFields), seeValues: seeValues, showAllFields: showAllFields, renderLink: app.renderLink.bind(app), currentUrl: app.getCurrentRealUrlSearchFragment(), messageFromRedirect: messageFromRedirect, showSublistLines: showSublistLines }));
            }
        };
    }
    exports.recordViewRoute = recordViewRoute;
});
