define(["require", "exports", "../../jsx/createElement", "../../search/getSearchRecordTypes", "../../search/typedSearch/typedSearchOperations", "../../jsx/util/BindInputValue"], function (require, exports, createElement_1, getSearchRecordTypes_1, typedSearchOperations_1, BindInputValue_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var bindInputValueId = "data-list-record-types";
    exports.ListRecordTypes = function (props) {
        return createElement_1.ReactLike.createElement("div", null,
            "Record type:",
            createElement_1.ReactLike.createElement(BindInputValue_1.BindInputValue, { bindInputId: bindInputValueId },
                createElement_1.ReactLike.createElement("select", { id: "ListRecordTypesSelect" }, getSearchRecordTypes_1.getSearchRecordTypes().map(function (r) {
                    return createElement_1.ReactLike.createElement("option", { selected: props.type == r, value: r }, r);
                }))),
            createElement_1.ReactLike.createElement(BindInputValue_1.BindInputValue, { bindListenerId: bindInputValueId },
                createElement_1.ReactLike.createElement("button", { onClick: function (e) {
                        var type = getBindInputValue(e.currentTarget);
                        window.location.href = buildRouteUrl({ routeName: 'listRecordTypes', params: { type: type } });
                    } }, "Search")),
            props.results ? createElement_1.ReactLike.createElement("div", null,
                "Results:",
                createElement_1.ReactLike.createElement("ul", null, props.results.map(function (r) {
                    return createElement_1.ReactLike.createElement("li", null,
                        createElement_1.ReactLike.createElement("a", { href: props.renderLink({ routeName: 'recordView', params: { id: r.id, type: r.recordType } }) },
                            r.recordType,
                            "  ",
                            r.id));
                }))) : createElement_1.ReactLike.createElement("span", null));
    };
    function listRecordTypesRoute(app) {
        return {
            name: 'listRecordTypes',
            handler: function (o) {
                var _a = o.params, type = _a.type, _b = _a.pageSizeS, pageSizeS = _b === void 0 ? '20' : _b;
                var pageSize = parseInt(pageSizeS, 10);
                if (!type) {
                    return createElement_1.ReactLike.render(createElement_1.ReactLike.createElement(exports.ListRecordTypes, { pageSize: pageSize, renderLink: app.renderLink.bind(app) }));
                }
                var counter = 0;
                var results = typedSearchOperations_1.filter({
                    type: type,
                    columns: []
                }, function (r) { return (((counter++) > pageSize) || !r) ? false : true; });
                return createElement_1.ReactLike.render(createElement_1.ReactLike.createElement(exports.ListRecordTypes, { pageSize: pageSize, renderLink: app.renderLink.bind(app), type: type, results: results }));
            }
        };
    }
    exports.listRecordTypesRoute = listRecordTypesRoute;
});
