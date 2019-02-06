define(["require", "exports", "N/query"], function (require, exports, query) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function query1Test() {
        var s3 = query.create({ type: 'item' });
        // s3.join({fieldId: 'user'})
        s3.createColumn({ fieldId: 'onlineprice' });
        s3.createColumn({ fieldId: 'urlcomponent' });
        s3.run().results.forEach(function (r) {
            return console.log(r.values);
        });
    }
    exports.query1Test = query1Test;
});
// category: 'text';
// categorynohierarchy: 'text';
// categorypreferred: 'text';
// 
