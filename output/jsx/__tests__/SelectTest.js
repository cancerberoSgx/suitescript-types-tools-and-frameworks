var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define(["require", "exports", "fs", "../../jsx/createElement", "../../jsx/StatelessComponent", "../../jsx/util/Select", "../renderInHtml", "../../misc/arrayPrototypeFind"], function (require, exports, fs_1, createElement_1, StatelessComponent_1, Select_1, renderInHtml_1, arrayPrototypeFind_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    arrayPrototypeFind_1.installArrayPrototypeFind();
    var SelectTest = /** @class */ (function (_super) {
        __extends(SelectTest, _super);
        function SelectTest() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        SelectTest.prototype.render = function () {
            return createElement_1.ReactLike.createElement("div", null,
                createElement_1.ReactLike.createElement(Select_1.Select, { options: ['s', '2', 'd'], onChange: function (value) {
                        console.log('Select', value);
                    } }));
        };
        return SelectTest;
    }(StatelessComponent_1.StatelessComponent));
    fs_1.writeFileSync('src/jsx/__tests__/test.html', renderInHtml_1.renderInHTMLDocument(createElement_1.ReactLike.createElement(SelectTest, null)));
});
