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
define(["require", "exports", "../createElement", "../StatelessComponent", "../../misc/misc"], function (require, exports, createElement_1, StatelessComponent_1, misc_1) {
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
    // functionAttributes()
    function moreOnCss() {
        var button = {
            border: '2px solid pink',
            padding: '5px'
        };
        // this class extends another:
        var primaryButton = __assign({}, button, { color: 'red', fontWeight: 'bolder' });
        var styles = {
            button: button,
            primaryButton: primaryButton
        };
        // this tag will force users to use discrete classNames only
        var Button = function (props) { return createElement_1.ReactLike.createElement("button", { className: props.className || '' }); };
        var main = createElement_1.ReactLike.createElement("div", null,
            createElement_1.ReactLike.createElement(Button, { className: "button" }, "click me"));
        // this will render the <style> tag with all classes and styles inside.
        var Styles = createElement_1.ReactLike.createElement("style", null, Object.keys(styles).map(function (c) {
            return misc_1.indent(1) + "." + c + ": {\n" + Object.keys(styles[c]).map(function (p) { return "" + misc_1.indent(2) + p + ": " + styles[c][p] + ";"; }).join("\n") + "\n" + misc_1.indent(1) + "}";
        }).join('\n'));
        var s = "\n" + createElement_1.ReactLike.render(Styles, { indent: true }) + "\n" + createElement_1.ReactLike.render(main, { indent: true }) + "\n";
        console.log(s);
    }
    exports.moreOnCss = moreOnCss;
    // moreOnCss()
    function customComponentAffectChild() {
        var Data = /** @class */ (function (_super) {
            __extends(Data, _super);
            function Data() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            Data.prototype.render = function () {
                var el = createElement_1.ReactLike.createElement("span", null);
                // if(!this.props.children){return el }
                this.addDataToChildren('addedfromparent', createElement_1.escapeHtmlAttribute(JSON.stringify(this.props.data)), this.props);
                return el;
            };
            Data.prototype.addDataToChildren = function (dataName, data, props) {
                this.childrenElementsAsArray().forEach(function (c) {
                    c.attrs["data-" + dataName] = data;
                });
            };
            return Data;
        }(StatelessComponent_1.StatelessComponent));
        var main = createElement_1.ReactLike.createElement(Data, { data: { g: 'asd' } },
            createElement_1.ReactLike.createElement("span", { className: "child1" }, "hello"));
        console.log(createElement_1.ReactLike.render(main, { indent: true }));
        var BindInputValue = /** @class */ (function (_super) {
            __extends(BindInputValue, _super);
            function BindInputValue() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            BindInputValue.prototype.render = function () {
                BindInputValue.checkRegisteredCode();
                var c = this.firstChildElement();
                if (c && c.tag === 'input') {
                    c.attrs['data-bind-value-id'] = 'bind-value-' + BindInputValue.counter++;
                }
                return createElement_1.ReactLike.createElement("span", null);
            };
            BindInputValue.checkRegisteredCode = function () {
                function getBindInputValue(id) {
                    var el = document.querySelector("[data-bind-value-id]=\"" + id + "\"");
                    if (el) {
                        return el.value;
                    }
                }
                if (!BindInputValue.registered) {
                    createElement_1.ReactLike.registerClientCode({
                        name: 'BindInputValue',
                        code: getBindInputValue.toString(),
                        description: "Gets the current input value declared with wrapper <BindInputValue><input..."
                    });
                    BindInputValue.registered = true;
                }
            };
            BindInputValue.counter = 0;
            BindInputValue.registered = false;
            return BindInputValue;
        }(StatelessComponent_1.StatelessComponent));
        var test = createElement_1.ReactLike.createElement(BindInputValue, { bindId: "id1" },
            createElement_1.ReactLike.createElement("input", null));
        var s = createElement_1.ReactLike.render(test, { indent: true });
        console.log(s, createElement_1.ReactLike.getClientCode().map(function (c) { return c.code; }).join('\n'));
    }
    exports.customComponentAffectChild = customComponentAffectChild;
    customComponentAffectChild();
});
