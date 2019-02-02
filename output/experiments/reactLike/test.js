define(["require", "exports", "./createElement"], function (require, exports, createElement_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Apple = function (props) { return createElement_1.ReactLike.createElement("div", { className: "apple" },
        "I'm a ",
        props.apple.color,
        " apple"); };
    var List = function (props) { return createElement_1.ReactLike.createElement("ul", null); };
    var Main = function (props) { return createElement_1.ReactLike.createElement("div", null,
        createElement_1.ReactLike.createElement("h1", null, "A list of apples"),
        createElement_1.ReactLike.createElement(List, null, props.apples.map(function (a) { return createElement_1.ReactLike.createElement(Apple, { apple: a }); }))); };
    function reactLikeText() {
        var apples = [{ color: 'red' }, { color: 'blue' }];
        console.log(createElement_1.ReactLike.render(createElement_1.ReactLike.createElement(Main, { apples: apples })));
    }
    exports.reactLikeText = reactLikeText;
    // this test can be executed in node with 
    // npx ts-node -P tsconfig-node.json src/experiments/reactLike/test.tsx
    // and uncommenting the following line:
    reactLikeText();
});
