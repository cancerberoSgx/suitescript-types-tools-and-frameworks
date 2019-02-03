define(["require", "exports", "../../jsx/createElement", "../../search/typedSearch/typedSearchOperations", "N/record", "../recordView/recordView", "../recordView/buildRecordViewModel"], function (require, exports, createElement_1, typedSearchOperations_1, record_1, recordView_1, buildRecordViewModel_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function findRecordRoute(app) {
        return {
            name: 'findRecord',
            handler: function (o) {
                var _a = o.params, type = _a.type, id = _a.id;
                if (!type || !id) {
                    return app.notFound(o, 'findRecord invalid call: "type" and "id" params are required');
                }
                var result = typedSearchOperations_1.find({
                    type: type,
                    columns: [],
                    filters: [{ name: 'internalid', values: id, operator: 'anyOf' }]
                }, function (r) { return true; });
                if (result) {
                    var record = record_1.load({ id: id, type: result.recordType });
                    return createElement_1.ReactLike.render(createElement_1.ReactLike.createElement(recordView_1.RecordView, { record: buildRecordViewModel_1.buildRecordViewModel(record), renderLink: app.renderLink.bind(app), currentUrl: app.getCurrentRealUrlSearchFragment(), messageFromRedirect: "Record " + id + " " + result.recordType + " found" }));
                }
                else {
                    return createElement_1.ReactLike.createElement("div", null,
                        "Record ",
                        id,
                        " ",
                        type,
                        " not found");
                }
            }
        };
    }
    exports.findRecordRoute = findRecordRoute;
});
