define(["require", "exports", "../../search/getSearchRecordTypes", "../../jsx/createElement", "../../jsx/util/Bind"], function (require, exports, getSearchRecordTypes_1, createElement_1, Bind_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // const bindInputValueId = `data-list-record-types`
    exports.ListRecordTypes = function (props) {
        return createElement_1.ReactLike.createElement("div", null,
            "Record type: ",
            props.type,
            " ",
            props.results && props.results.length,
            createElement_1.ReactLike.createElement(Bind_1.Bind, { name: "data-list-record-types" },
                createElement_1.ReactLike.createElement("select", { id: "ListRecordTypesSelect" }, getSearchRecordTypes_1.getSearchRecordTypes().map(function (r) {
                    return createElement_1.ReactLike.createElement("option", { selected: props.type == r, value: r }, r);
                }))),
            props.dynamicResultsRender ?
                createElement_1.ReactLike.createElement("button", { onClick: function (e) {
                        var type = getBindInputValue("data-list-record-types");
                        fetchAndRenderHtml({ routeName: 'listRecordTypes', params: { type: type }, selector: '#listRecordTypesDynamicResults' });
                    } }, "Search") :
                createElement_1.ReactLike.createElement("button", { onClick: function (e) {
                        var type = getBindInputValue("data-list-record-types");
                        window.location.href = buildRouteUrl({ routeName: 'listRecordTypes', params: { type: type } });
                    } }, "   Search"),
            createElement_1.ReactLike.createElement("span", { id: "listRecordTypesDynamicResults" }),
            props.results && createElement_1.ReactLike.createElement("div", null,
                "Results:",
                createElement_1.ReactLike.createElement("ul", null, props.results.map(function (r) {
                    return createElement_1.ReactLike.createElement("li", null,
                        createElement_1.ReactLike.createElement("a", { href: props.renderLink({ routeName: 'recordView', params: { id: r.id, type: r.recordType } }) },
                            r.recordType,
                            "  ",
                            r.id));
                }))) || '');
    };
});
