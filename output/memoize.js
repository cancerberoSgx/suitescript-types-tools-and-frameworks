// // memoize a function result
define(["require", "exports", "./spec/index"], function (require, exports, index_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // type Fn<Args extends any[], Return extends any> = (...args: Args)=>Return
    // export function memoize<Args extends any[], Return extends any>(fn : Fn<Args, Return>): Fn<Args, Return> {
    //   let memo: Memo<Args, Return>
    //   if(!memo.find(m=>m.fn===fn)) {
    //     const memoFn = createMemo(fn)
    //     memo = {fn, memo}
    //   }
    // // return null
    // }
    // interface Memo<Args extends any[] = any[], Return extends any = any> {
    //   fn: Fn<Args, Return>, 
    //   memo: Fn<Args, Return>
    //   // result: Return
    //   // args: Args
    // }
    // const memo: Memo[] = []
    // A 32-bit checksum of a string.
    function checksum(s) {
        var checksum = 0, i, chr, len;
        if (s.length == 0) {
            return checksum;
        }
        for (i = 0, len = s.length; i < len; i++) {
            checksum = ((((checksum << 5) - checksum) + s.charCodeAt(i)) | 0);
        }
        return checksum;
    }
    ;
    function memoize(f) {
        // var memoize = function memoize(f:) {
        if (typeof (f) !== "function" || !(f instanceof Function)) {
            throw new TypeError("Provided argument is not a function.");
        }
        /*
            The cache object for the memoized function. Each function
            will hold its own cache object. The object will be indexed
            by 32-bit checksums of argument-lists.
        */
        var cache = {};
        // @ts-ignore
        return function MemoizedFunction() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            // Create a checksum of all the arguments, if any argument is available.
            var checksum_ = 0;
            if (arguments.length > 0) {
                // if you don't expect complex argument structure, this will suffice
                // checksum = Array.prototype.join.call(arguments, ",").checksum();
                // serialize the arguments object to a JSON string and create a 32-bits checksum.
                checksum_ = checksum(JSON.stringify(arguments));
            }
            // if the checksum is unknown in the cache, call the function and cache it.
            if (typeof (cache[checksum_]) === 'undefined') {
                cache[checksum_] = f.apply(f, args);
            }
            // return the cached value.
            return cache[checksum_];
        };
    }
    exports.memoize = memoize;
    ;
    function memoizeTests() {
        index_1.describe('search/results', function () {
            var counter = 0;
            function f(a, b) {
                counter++;
                return [new Date()];
            }
            var mf = memoize(f);
            index_1.it('should not call if same params', function () {
                mf(1, 'r');
                mf(1, 'r');
                index_1.expect(counter).toBe(1);
            });
            index_1.it('should call if different params', function () {
                mf(2, 'r');
                index_1.expect(counter).toBe(2);
                mf(1, 'r');
                index_1.expect(counter).toBe(2);
                mf(2, 'r');
                index_1.expect(counter).toBe(2);
                mf(2, 'f');
                index_1.expect(counter).toBe(3);
                mf(2, 'f');
                index_1.expect(counter).toBe(3);
                f(2, 'f');
                index_1.expect(counter).toBe(4);
                // expect(counter).toBe(1)
            });
        });
    }
    exports.memoizeTests = memoizeTests;
});
