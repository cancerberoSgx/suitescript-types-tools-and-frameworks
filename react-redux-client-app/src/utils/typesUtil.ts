let typesUtil;
// type Partial2<T> = { [P in keyof T]?: T[P] extends undefined ? never : T[P]}
// interface I{i: string}
// type  f = NamedMemberNamesOfPartial<I>
// type g = Partial2<'w'|'e'|>
// types
/** returns the type of the value with key K in the Mapped type T. Example: `type _string = ValueOf<A, 'a'>` . */
// export type ValueOf<T extends any, K extends Extract< keyof T, string|number>> = T[K];
export type ValueOf<T extends any, K extends string | number> = T[K];
export type ValueOfStringKey<T extends {
  [k: string]: any;
}, K extends string> = T[K];
// export type ValueOfStringKey<T extends { [k: string]: any }, K extends Extract< keyof T, string>> = T[K];
// export type ValueOfStringKeyPartial<T extends { [k: string]: any }, K extends Extract< keyof T, string>> = T[K];
export type ValueOfNumberKey<T extends {
  [k: number]: any;
}, K extends number> = T[K];
export type StringKeyOf<T extends any> = Extract<keyof T, string>;
export type NumberKeyOf<T extends any> = Extract<keyof T, number>;
// export type Value<T extends any> = Extract<keyof T, string>;
/** return T and all its super interfaces/classes ascendants */
export type Extended<T extends any, K extends any = any> = T extends K ? T : never;
export type NamedMemberNamesOf<T extends any, K extends Extended<T> = Extended<T>> = StringKeyOf<K>;
// export type NamedMemberNamesOfPartial <T extends any, K extends Extended<T> = Extended<T>> = Partial<StringKeyOf<K>>
export type NamedMemberValuesOf<T extends any, K extends Extended<T> = Extended<T>> = ValueOfStringKey<K, NamedMemberNamesOf<K>>;
export type NamedMemberValueOf<T extends any, K extends NamedMemberNamesOf<T>> = ValueOfStringKey<Extended<T>, K>;

export type NamedMemberValueOf2<T extends any, K extends string> = ValueOfStringKey<Extended<T>, K>;

// export type NamedMemberValueOfPartial <T extends any, K extends NamedMemberNamesOfPartial<T>> = ValueOfStringKeyPartial<Extended<T>, K>
// interface a{a:number} interface b{b:string} interface c extends a, b {c:Date}
// type n = NamedMemberValueOf<c, 'c'>
/** return an fixed length array with item type TItem */
// export type Tuple<TItem, TLength extends number> = [TItem, ...TItem[]] & { length: TLength };
export type TODO = any;
/** NameOfStringKeyInArray<[{f: 1}, {f: 2}], 'f'>  will be 1|2 */
export type ValueOfStringKeyInArray<a extends any[], k extends string> = ValueOfStringKey<UnionOf<a>, k>;
/** NameOfStringKeyInArray<[{f: 1}, {f: 2}], 'f'>  will be 1|2 */
export type StringKeyInArray<a extends any[]> = StringKeyOf<UnionOf<a>>;
// type t<a extends {f: 1|2|3|4}[]> = ValueOfStringKey<UnionOf<a>, 'f'>
// let g : ValueOfStringKeyInArray<[{f: 1}, {f: 2}], 'f'>
let g: StringKeyInArray<[{
  f: 1;
}, {
  g: 2;
}]>;
// type ns = not string
// type UnionToInterWorker<T> = not (T extends T ? not T : never);
// type UnionToInter<T> = [T] extends [never] ? never : UnionToInterWorker<T>;
// type tt<T extends string> = not T
// @ts-ignore
type arrayIndexUnion<T extends any[], K extends Exclude<keyof T, keyof []> = Exclude<keyof T, keyof []>> = T extends {
  [k in K]: any;
} ? K : never;
let t: arrayIndexUnion<[{
  a: 1;
}, {
  b: 2;
}]>;
type arrayItemKeyUnion<T extends any[]> = keyof T[arrayIndexUnion<T>];
let t2: arrayItemKeyUnion<[{
  a: 1;
}, {
  b: 2;
}]>;
// type intersec2union<I, a extends any = any> = a extends Partial<I> ? a : never
// let t3 : Partial<1&2&3> = 1
/** UnionToIntersection<1|2|3>  will be 1 & 2 & 3 */
export type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends ((k: infer I) => void) ? I : never;
// let r : UnionToIntersection<1&2>
let r: UnionToIntersection<1 | 2 | 3>;
/**
 * Creates a union from the types of an Array or tuple
 */
export type UnionOf<T extends any[]> = T[number];
// type gg = UnionOf<[{a: 1}, {b: 2}]>
// var a : keyof gg = undefined as any as keyof gg
// type as = ValueOf<{e: 5}, 'e'>
;
// interface I {[]:number}
// let i: I = null as any as I
// let g = i.a
/**
 * Returns the length of an array or tuple
 */
export type LengthOf<T extends any[]> = T["length"];



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



export type CannotBeUndefined<T> = undefined extends T ? false : true;
export type CanBeUndefined<T> = undefined extends T ? true : false;

export type Identical<T1, T2> = UnionToIntersection<T1> extends UnionToIntersection<T2> ? (UnionToIntersection<T2> extends UnionToIntersection<T1> ? true : false) : false;

export type Extends<T1, T2> = NonNullable<T1> extends NonNullable<T2> ? true : false;
export type NotExtends<T1, T2> = T1 extends T2 ? false : true;

export type IsAny<T> = undefined extends T ? (string extends T ? true : false) : false

export type ThereWasATypeError<T> = IsAny<T>
