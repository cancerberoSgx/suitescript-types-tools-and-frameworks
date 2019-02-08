define(["require", "exports", "../createElement", "../renderInHtml", "../util/Bind", "../util/Select"], function (require, exports, createElement_1, renderInHtml_1, Bind_1, Select_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function renderWithAmdFilesTest1() {
        return createElement_1.ReactLike.createElement("div", null,
            createElement_1.ReactLike.createElement(Bind_1.Bind, { name: "needed", data: { n: 1 } }),
            createElement_1.ReactLike.createElement("button", { onClick: function (e) {
                    renderInHtml_1.renderInDOM(createElement_1.ReactLike.createElement("div", null, "hello"), '#id1');
                    renderInHtml_1.renderInDOM(createElement_1.ReactLike.createElement(Select_1.Select, { options: ['s', 'd'], onChange: function (e) {
                            renderInHtml_1.renderInDOM(createElement_1.ReactLike.createElement(Select_1.Select, { options: ['1s', 'd2', e] }), '#id1');
                        } }), '#id2');
                } }, "click"),
            createElement_1.ReactLike.createElement("div", { id: "id1" }),
            createElement_1.ReactLike.createElement("div", { id: "id2" }));
    }
    exports.renderWithAmdFilesTest1 = renderWithAmdFilesTest1;
});
