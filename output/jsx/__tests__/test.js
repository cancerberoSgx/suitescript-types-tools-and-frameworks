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
define(["require", "exports", "../createElement", "../StatelessComponent"], function (require, exports, createElement_1, StatelessComponent_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function cssTest1() {
        var Comp = function () { return createElement_1.ReactLike.createElement("div", { className: "apple", style: { border: '1 px solid pink', background: 'blue' } }, "i'm pink"); };
        var Main = function () { return createElement_1.ReactLike.createElement("div", null,
            createElement_1.ReactLike.createElement(Comp, null)); };
        var s = createElement_1.ReactLike.render(createElement_1.ReactLike.createElement(Main, null), { indent: true });
        console.log(s);
    }
    function reactLikeText() {
        var Apple = function (props) { return createElement_1.ReactLike.createElement("div", { className: "apple" },
            "I'm a ",
            props.apple.color,
            " apple"); };
        var List = function (props) { return createElement_1.ReactLike.createElement("ul", null); };
        var Main = function (props) { return createElement_1.ReactLike.createElement("div", null,
            createElement_1.ReactLike.createElement("h1", null, "A list of apples"),
            createElement_1.ReactLike.createElement(List, null, props.apples.map(function (a) { return createElement_1.ReactLike.createElement(Apple, { apple: a }); }))); };
        var apples = [{ color: 'red' }, { color: 'blue' }];
        console.log(createElement_1.ReactLike.render(createElement_1.ReactLike.createElement(Main, { apples: apples }), { indent: true }));
    }
    exports.reactLikeText = reactLikeText;
    function statelessComponentTest() {
        var Person = /** @class */ (function (_super) {
            __extends(Person, _super);
            function Person() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            Person.prototype.render = function () {
                return createElement_1.ReactLike.createElement("div", null,
                    createElement_1.ReactLike.createElement("div", null,
                        "Name: ",
                        this.props.name),
                    createElement_1.ReactLike.createElement("div", null,
                        "Friends:",
                        createElement_1.ReactLike.createElement("ul", null, this.props.friends.map(function (f) { return createElement_1.ReactLike.createElement(Person, { name: f.name, friends: f.friends }); }))));
            };
            return Person;
        }(StatelessComponent_1.StatelessComponent));
        var p0 = { name: 'flo', friends: [] };
        var p1 = { name: 'seba', friends: [p0] };
        var persons = [p0, p1];
        var main = createElement_1.ReactLike.createElement("div", null,
            createElement_1.ReactLike.createElement("p", null, "Some people:"),
            persons.map(function (p) { return createElement_1.ReactLike.createElement(Person, { name: p.name, friends: p.friends }); }));
        console.log(createElement_1.ReactLike.render(main, { indent: true }));
    }
    exports.statelessComponentTest = statelessComponentTest;
    function functionAttributes() {
        var main = createElement_1.ReactLike.createElement("div", null,
            createElement_1.ReactLike.createElement("button", { onClick: function (e) { alert('foo'); } }, "click me"),
            createElement_1.ReactLike.createElement("button", { onClick: function (e) { alert("foo\nhello"); } }, "click me22"));
        var s = createElement_1.ReactLike.render(main, { indent: true });
        console.log(s);
    }
    exports.functionAttributes = functionAttributes;
    functionAttributes();
});
// this test can be executed in node with 
// npx ts-node -P tsconfig-node.json src/experiments/reactLike/test.tsx
// and un comment the following line:
// reactLikeText()
