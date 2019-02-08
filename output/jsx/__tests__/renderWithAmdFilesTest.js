define(["require", "exports", "fs", "assert", "../renderWithAmdFiles", "./renderWithAmdFilesTest1", "../createElement", "../renderInHtml", "../../misc/misc"], function (require, exports, fs_1, assert_1, renderWithAmdFiles_1, renderWithAmdFilesTest1_1, createElement_1, renderInHtml_1, misc_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function renderWithAmdFilesTest() {
        var html = renderWithAmdFiles_1.renderWithAmdFiles(renderWithAmdFilesTest1_1.renderWithAmdFilesTest1(), {
            files: [
                { name: 'createElement', path: 'jsx/createElement.js' },
                { name: 'elementImpl', path: 'jsx/elementImpl.js' },
                { name: 'Select', path: 'jsx/util/Select.js' },
                { name: 'StatelessComponent', path: 'jsx/StatelessComponent.js' },
                { name: 'Bind', path: 'jsx/util/Bind.js' },
                { name: 'formatDate', path: 'misc/formatDate.js' },
                { name: 'misc', path: 'misc/misc.js' },
                { name: 'renderInHtml', path: 'jsx/renderInHtml.js' }
            ],
            asHtmlDocument: true,
            basePath: 'output',
        });
        fs_1.writeFileSync('src/jsx/__tests__/test.html', html);
    }
    function fixDefineTest() {
        var s = renderWithAmdFiles_1.fixDefine("define(['./sd/foo'], (foo)=>{})", ['foo', 'bar'], 'foo');
        assert_1.equal(s, "define(\"foo\", [\"foo\"], (foo)=>{})");
    }
    function Custom1(props) {
        return createElement_1.ReactLike.createElement("div", null,
            createElement_1.ReactLike.createElement("div", { id: "b" }),
            createElement_1.ReactLike.createElement("button", { onClick: function (e) {
                    renderInHtml_1.renderInDOM(createElement_1.ReactLike.createElement(Custom2, { options: misc_1.array(5).map(function (i) { return i * Math.random() + 1; }) }), '#a');
                } },
                "click me ",
                props.name),
            createElement_1.ReactLike.createElement("div", { id: "a" }));
    }
    function Custom2(props) {
        return createElement_1.ReactLike.createElement("select", { multiple: true, onChange: function (e) {
                renderInHtml_1.renderInDOM(createElement_1.ReactLike.createElement(Custom1, { name: e.currentTarget.selectedOptions[0].value + '' }), '#b');
            } }, props.options.map(function (o) { return createElement_1.ReactLike.createElement("option", { value: o }, o); }));
    }
    function renderWithAmdFilesTest2() {
        var html = renderWithAmdFiles_1.renderWithAmdFiles(createElement_1.ReactLike.createElement(Custom1, { name: "seba" }), {
            files: [
                { name: 'createElement', path: 'jsx/createElement.js' },
                { name: 'elementImpl', path: 'jsx/elementImpl.js' },
                { name: 'renderInHtml', path: 'jsx/renderInHtml.js' },
                { name: 'misc', path: 'misc/misc.js' },
            ],
            asHtmlDocument: true,
            basePath: 'output',
            extraCode: ["" + Custom2.toString(), "" + Custom1.toString()]
        });
        fs_1.writeFileSync('src/jsx/__tests__/test.html', html);
    }
    // renderWithAmdFilesTest2();
    function renderWithAmdFilesTest3() {
        var html = renderWithAmdFiles_1.renderWithAmdFiles(createElement_1.ReactLike.createElement(Custom1, { name: "seba" }), {
            files: [
                'jsx/createElement.js',
                'jsx/elementImpl.js',
                'jsx/renderInHtml.js',
                'misc/misc.js',
            ],
            asHtmlDocument: true,
            basePath: 'output',
            extraCode: [Custom2, Custom1]
        });
        fs_1.writeFileSync('src/jsx/__tests__/test.html', html);
    }
    renderWithAmdFilesTest3();
    function renderWithAmdFilesTest4() {
        var Comp1 = function (props) { return createElement_1.ReactLike.createElement("div", null,
            createElement_1.ReactLike.createElement("button", { onClick: function (e) {
                    renderInHtml_1.renderInDOM(createElement_1.ReactLike.createElement("select", { onChange: function (e) {
                            alert('changed');
                        } },
                        createElement_1.ReactLike.createElement("option", null, "change me"),
                        createElement_1.ReactLike.createElement("option", null, "please")), '#placeholder1');
                } }, props.foo),
            createElement_1.ReactLike.createElement("div", { id: "placeholder1" })); };
        var html = renderWithAmdFiles_1.renderWithAmdFiles(createElement_1.ReactLike.createElement(Comp1, { foo: "bar" }), {
            files: [
                'jsx/createElement.js',
                'jsx/elementImpl.js',
                'jsx/renderInHtml.js',
            ],
            asHtmlDocument: true,
            basePath: 'output',
        });
        fs_1.writeFileSync('src/jsx/__tests__/test.html', html);
    }
});
// renderWithAmdFilesTest4();
