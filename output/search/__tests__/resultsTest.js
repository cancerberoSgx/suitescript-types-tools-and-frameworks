define(["require", "exports", "../../spec", "N/search", "../results"], function (require, exports, spec_1, search_1, results_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function resultsTest() {
        spec_1.describe('search/results', function () {
            spec_1.it('Array.isArray(run()) should be true', function () {
                spec_1.expect(Array.isArray(results_1.run(search_1.create({ type: 'website' })))).toBe(true);
            });
            spec_1.it('run() should return something that has .length, .map and .filter', function () {
                var a = results_1.run(search_1.create({ type: 'website' }));
                spec_1.expect(typeof a.length !== 'undefined').toBe(true);
                spec_1.expect(typeof a.map !== 'undefined').toBe(true);
                spec_1.expect(typeof a.filter !== 'undefined').toBe(true);
            });
        });
    }
    exports.resultsTest = resultsTest;
});
