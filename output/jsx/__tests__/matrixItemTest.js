define(["require", "exports", "../../spec/index", "../createElement"], function (require, exports, index_1, createElement_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function jsxTests() {
        index_1.describe('ReactLike render', function () {
            index_1.it('support custom tags as functions', function () {
                var Apple = function (props) { return createElement_1.ReactLike.createElement("div", { className: "apple" },
                    "I'm a ",
                    props.apple.color,
                    " apple"); };
                var Main = function (props) { return createElement_1.ReactLike.createElement("div", null,
                    createElement_1.ReactLike.createElement("h1", null, "A list of apples"),
                    createElement_1.ReactLike.createElement("ul", null,
                        createElement_1.ReactLike.createElement("li", null, props.apples.map(function (a) { return createElement_1.ReactLike.createElement(Apple, { apple: a }); })))); };
                var apples = [{ color: 'red' }, { color: 'blue' }];
                var s = createElement_1.ReactLike.render(createElement_1.ReactLike.createElement(Main, { apples: apples }), { indent: true });
                index_1.expect(s).toContain('<div class="apple">');
                index_1.expect(s).toContain("I'm a red apple2");
                console.log(s);
            });
            // console.log(ReactLike.render(<Main apples={apples}></Main>, { indent: true }));
        });
    }
    exports.jsxTests = jsxTests;
});
