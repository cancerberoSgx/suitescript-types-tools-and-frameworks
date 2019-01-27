define(["require", "exports", "./typedSearch"], function (require, exports, typedSearch_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function typedSearchTest() {
        var s = typedSearch_1.search({ type: 'item' });
        var r = s.run().each(function (f) {
            f.getValue('location');
            return false;
        });
        //   const s2 = search({ type: 'commercecategory' });
        //   const i = s2.run().each(f => {
        //     console.log(`created: ${toString(f.getValue('in'))}`);
        //     f.getValue('location');
        //     return false;
        //   });
        // }
    }
    exports.typedSearchTest = typedSearchTest;
});
