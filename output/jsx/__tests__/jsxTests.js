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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
define(["require", "exports", "../../spec/index", "../createElement", "../StatelessComponent", "../Style", "../../spec/expectExtras", "../elementImpl"], function (require, exports, index_1, createElement_1, StatelessComponent_1, Style_1, expectExtras_1, elementImpl_1) {
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
                index_1.expect(s).toContain("I'm a red apple");
                // console.log(s)
            });
            index_1.it('supports typed css properties', function () {
                var Comp = function () { return createElement_1.ReactLike.createElement("div", { className: "apple", style: { border: '1px solid pink', background: 'blue' } }, "i'm pink"); };
                var Main = function () { return createElement_1.ReactLike.createElement("div", null,
                    createElement_1.ReactLike.createElement(Comp, null)); };
                var s = createElement_1.ReactLike.render(createElement_1.ReactLike.createElement(Main, null), { indent: true });
                index_1.expect(s).toContain('style="border: 1px solid pink; background: blue"');
                index_1.expect(s).toContain("i'm pink");
                // console.log(s)
            });
            index_1.it('stateless component', function () {
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
                var s = createElement_1.ReactLike.render(main, { indent: true });
                index_1.expect(s).toContain('Name: flo');
                index_1.expect(s).toContain('Name: seba');
                // console.log(s);
            });
            index_1.it('function attributes', function () {
                var main = createElement_1.ReactLike.createElement("div", null,
                    createElement_1.ReactLike.createElement("button", { onClick: function (e) { alert("foo\nhello"); } }, "click me"));
                var s = createElement_1.ReactLike.render(main, { indent: true });
                // console.log(s); // to be tested in the browser
            });
            index_1.it('Style tag : typed styles', function () {
                var button = {
                    border: '2px solid pink',
                    padding: '5px'
                };
                // this class extends another:
                var primaryButton = __assign({}, button, { color: 'red', fontWeight: 'bolder' });
                var myStyles = {
                    button: button,
                    primaryButton: primaryButton
                };
                // this tag will force users to use discrete classNames only
                var Button = function (props) { return createElement_1.ReactLike.createElement("button", { className: props.className || '' }); };
                var main = createElement_1.ReactLike.createElement("div", null,
                    " hello",
                    createElement_1.ReactLike.createElement(Style_1.Style, { classes: myStyles }),
                    createElement_1.ReactLike.createElement("article", null,
                        createElement_1.ReactLike.createElement(Button, { className: "button" }, "click me")));
                var s = createElement_1.ReactLike.render(main, { indent: true });
                // console.log(s)
                index_1.expect(s).toContain('border: 2px solid pink;');
                expectExtras_1.expectCodeToContain(s, "\n      <div> hello<style> .button { border: 2px solid pink; padding: 5px; }; .primaryButton { border: 2px solid pink; padding: 5px; color: red; fontWeight: bolder; } </style><article> <button class=\"button\"> click me </button> </article> </div>\n  ");
            });
            index_1.it('custom el affecting children', function () {
                var Data = /** @class */ (function (_super) {
                    __extends(Data, _super);
                    function Data() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    Data.prototype.render = function () {
                        var _this = this;
                        if (!this.props.children) {
                            return createElement_1.ReactLike.createElement("span", null);
                        }
                        var children = (Array.isArray(this.props.children) ? this.props.children : [this.props.children]);
                        children.forEach(function (c) {
                            if (!elementImpl_1.isElementIke(c)) {
                                return;
                            }
                            c.attrs = __assign({}, (c.attrs || {}), { 'data-data': createElement_1.escapeHtmlAttribute(JSON.stringify(_this.props.data)) });
                        });
                        return createElement_1.ReactLike.createElement("span", null);
                    };
                    return Data;
                }(StatelessComponent_1.StatelessComponent));
                var s = createElement_1.ReactLike.render(createElement_1.ReactLike.createElement(Data, { data: { g: 'asd' } },
                    createElement_1.ReactLike.createElement("span", { className: "child1" }, "hello")), { indent: true });
                expectExtras_1.expectCodeToContain(s, "<span>\n      <span class=\"child1\" data-data=\"{&quot;g&quot;:&quot;asd&quot;}\">\n        hello\n      </span>\n    </span>\n    ");
            });
            // console.log(ReactLike.render(<Main apples={apples}></Main>, { indent: true }));
        });
    }
    exports.jsxTests = jsxTests;
});
