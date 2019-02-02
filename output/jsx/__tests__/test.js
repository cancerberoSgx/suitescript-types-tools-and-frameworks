define(["require", "exports", "../createElement"], function (require, exports, createElement_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function cssTest1() {
        var Comp = function () { return createElement_1.ReactLike.createElement("div", { className: "apple", style: { border: '1 px solid pink', background: 'blue' } }, "i'm pink"); };
        var Main = function () { return createElement_1.ReactLike.createElement("div", null,
            createElement_1.ReactLike.createElement(Comp, null)); };
        var s = createElement_1.ReactLike.render(createElement_1.ReactLike.createElement(Main, null), { indent: true });
        // expect(s).toContain('style="border: 1px solid pink"')
        // expect(s).toContain(`i'm pink`)
        console.log(s);
    }
    cssTest1();
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
});
// this test can be executed in node with 
// npx ts-node -P tsconfig-node.json src/experiments/reactLike/test.tsx
// and un comment the following line:
// reactLikeText()
