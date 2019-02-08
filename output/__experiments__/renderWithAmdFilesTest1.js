define(["require", "exports", "../jsx/createElement"], function (require, exports, createElement_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function renderWithAmdFilesTest1() {
        return createElement_1.ReactLike.createElement("div", null,
            createElement_1.ReactLike.createElement("button", { onClick: function (e) {
                    var s = createElement_1.ReactLike.render(createElement_1.ReactLike.createElement("div", null, "hello"));
                    document.getElementById('id1').innerHTML = s;
                } }, "cick"),
            createElement_1.ReactLike.createElement("div", { id: "id1" }));
    }
    exports.renderWithAmdFilesTest1 = renderWithAmdFilesTest1;
});
