define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var typesUtil;
    // type t<a extends {f: 1|2|3|4}[]> = ValueOfStringKey<UnionOf<a>, 'f'>
    // let g : ValueOfStringKeyInArray<[{f: 1}, {f: 2}], 'f'>
    var g;
    var t;
    var t2;
    // let r : UnionToIntersection<1&2>
    var r;
    // type gg = UnionOf<[{a: 1}, {b: 2}]>
    // var a : keyof gg = undefined as any as keyof gg
    // type as = ValueOf<{e: 5}, 'e'>
    ;
});
