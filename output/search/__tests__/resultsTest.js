define(["require", "exports", "../../spec/index", "N/search", "../results"], function (require, exports, index_1, search_1, results_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function resultsTest() {
        index_1.describe('search/results', function () {
            index_1.it('Array.isArray(run()) should be true', function () {
                index_1.expect(Array.isArray(results_1.run(search_1.create({ type: 'website' })))).toBe(true);
            });
            index_1.it('run() should return something that has .length, .map and .filter', function () {
                var a = results_1.run(search_1.create({ type: 'website' }));
                index_1.expect(typeof a.length !== 'undefined').toBe(true);
                index_1.expect(typeof a.map !== 'undefined').toBe(true);
                index_1.expect(typeof a.filter !== 'undefined').toBe(true);
            });
        });
    }
    exports.resultsTest = resultsTest;
});
