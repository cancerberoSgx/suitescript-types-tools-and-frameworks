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
// /**
//  * Returns all but the first item's type in a tuple/array
//  */
// export type Tail<T extends any[]> =
// 	((...args: T) => any) extends ((head: any, ...tail: infer R) => any) ? R : never;
// /**
//  * Returns the given tuple/array with the item type prepended to it
//  */
// type Unshift<List extends any[], Item> =
// 	((first: Item, ...rest: List) => any) extends ((...list: infer R) => any) ? R : never;
// /**
//  * Tests if two types are equal
//  */
// type Equals<T, S> =
// 	[T] extends [S] ? (
// 		[S] extends [T] ? true : false
// 	) : false;
// type Range<N, T extends number[] = []> = {
// 	0: T,
// 	1: Range<N, Unshift<T, LengthOf<T>>>,
// }[Equals<LengthOf<Tail<T>>, N> extends true ? 0 : 1];
// /** Tests if N > M */
// type IsGreaterThan<N, M> = N extends Exclude<Range<N>, Range<M>> ? true : false;
// /** Tests if N <= M */
// // type IsLessThanOrEqual<N, M> = Not<IsGreaterThan<N, M>>;
// /** Tests if N < M */
// type IsLessThan<N, M> = M extends Exclude<Range<M>, Range<N>> ? true : false;
// /** Tests if N >= M */
// // type IsGreaterThanOrEqual<N, M> = Not<IsLessThan<N, M>>;
