// generates static html page usage example: 
// npx ts-node -P tsconfig-node.json src/app/__tests__/recordViewTest.tsx > spec/fixtures/itemMetadata1.html
define(["require", "exports", "../../jsx/createElement", "../recordView/recordView"], function (require, exports, createElement_1, recordView_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function recordViewTest1() {
        var model = require('../../../spec/fixtures/itemMetadata1.json');
        var s = createElement_1.ReactLike.render(createElement_1.ReactLike.createElement(recordView_1.RecordView, { record: model, seeValues: true, showAllFields: false, renderLink: function () { return ''; }, currentUrl: '', currentParams: {}, messageFromRedirect: '', showSublistLines: true }));
        console.log(s);
    }
    exports.recordViewTest1 = recordViewTest1;
    recordViewTest1();
});
