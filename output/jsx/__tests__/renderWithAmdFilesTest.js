define(["require", "exports", "fs", "assert", "../renderWithAmdFiles", "./renderWithAmdFilesTest1"], function (require, exports, fs_1, assert_1, renderWithAmdFiles_1, renderWithAmdFilesTest1_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function renderWithAmdFilesTest() {
        var s2 = renderWithAmdFiles_1.renderWithAmdFiles(renderWithAmdFilesTest1_1.renderWithAmdFilesTest1(), {
            files: [
                { name: 'createElement', path: 'output/jsx/createElement.js' },
                { name: 'elementImpl', path: 'output/jsx/elementImpl.js' },
                // { name: 'renderWithAmdFilesTest1', path: 'output/__experiments__/renderWithAmdFilesTest1.js' }
                { name: 'Select', path: 'output/jsx/util/Select.js' },
                { name: 'StatelessComponent', path: 'output/jsx/StatelessComponent.js' },
                { name: 'Bind', path: 'output/jsx/util/Bind.js' },
                { name: 'formatDate', path: 'output/misc/formatDate.js' },
                { name: 'misc', path: 'output/misc/misc.js' },
                { name: 'renderInHtml', path: 'output/jsx/renderInHtml.js' }
            ]
        });
        fs_1.writeFileSync('src/jsx/__tests__/test.html', s2);
        var s = renderWithAmdFiles_1.fixDefine("define(['./sd/foo'], (foo)=>{})", ['foo', 'bar'], 'foo');
        assert_1.equal(s, "define(\"foo\", [\"foo\"], (foo)=>{})");
    }
    renderWithAmdFilesTest();
});
