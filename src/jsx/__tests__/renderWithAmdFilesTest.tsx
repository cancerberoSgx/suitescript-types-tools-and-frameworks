import { writeFileSync } from 'fs';
import { equal } from 'assert';
import { renderWithAmdFiles, fixDefine } from '../renderWithAmdFiles';
import { renderWithAmdFilesTest1 } from './renderWithAmdFilesTest1';


function renderWithAmdFilesTest() {
    const s2 = renderWithAmdFiles(renderWithAmdFilesTest1(), {
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
    writeFileSync('src/jsx/__tests__/test.html', s2);
    const s = fixDefine(`define(['./sd/foo'], (foo)=>{})`, ['foo', 'bar'], 'foo');
    equal(s, `define("foo", ["foo"], (foo)=>{})`);
}
renderWithAmdFilesTest();
