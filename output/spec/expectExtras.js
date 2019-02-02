define(["require", "exports", "./expect"], function (require, exports, expect_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function expectCodeEquals(a, b) {
        // console.log(a, b);
        if (!a || !b)
            return false;
        expect_1.expect(a.replace(/\s+/gm, ' ').trim()).toBe(b.replace(/\s+/gm, ' ').trim());
    }
    exports.expectCodeEquals = expectCodeEquals;
    function expectCodeToContain(a, b) {
        // console.log(a, b);
        if (!a || !b)
            return false;
        expect_1.expect(a.replace(/\s+/gm, ' ').trim()).toContain(b.replace(/\s+/gm, ' ').trim());
    }
    exports.expectCodeToContain = expectCodeToContain;
    function expectCodeNotToContain(a, b) {
        // console.log(a, b);
        if (!a || !b)
            return false;
        expect_1.expect(a.replace(/\s+/gm, ' ').trim()).notToContain(b.replace(/\s+/gm, ' ').trim());
    }
    exports.expectCodeNotToContain = expectCodeNotToContain;
});
