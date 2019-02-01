import { NativeError } from '../nstypes';
import { nanoTime } from 'N/util';


// collections
 
export function array<T=number>(n: number, sample?: T): T[] {
  const a: (T | number)[] = []
  for (let i = 0; i < n; i++) {
    a.push(typeof sample === 'undefined' ? i : sample)
  }
  return a as T[]
}
export function repeat(n: number, s: string): string {
  return array(n, s).join('')
}
export function indent(i: number=1, tabSize=2): string {
  return repeat(i*tabSize, ' ')
}
export function find<T>(a: T[], predicate: (o: T, index?: number, arr?: T[]) => boolean): T | undefined {
  for (let i = 0; i < a.length; i++) {
    const v = a[i];
    if (predicate(v, i, a)) {
      return v
    }
  }
}
export function objectKeys<Field extends EmptyObject = EmptyObject>(o: Field):StringKeyOf<Field>[] {
  return Object.keys(o) as StringKeyOf<Field>[]
}


// types

/** returns the type of the value with key K in the Mapped type T. Example: `type _string = ValueOf<A, 'a'>` . */
export type ValueOf<T extends any, K extends string|number> = T[K];
export type ValueOfStringKey<T extends { [k: string]: any }, K extends string> = T[K];
export type ValueOfNumberKey<T extends { [k: number]: any }, K extends number> = T[K];
export type StringKeyOf<T extends any> = Extract<keyof T, string>;
export type NumberKeyOf<T extends any> = Extract<keyof T, number>;
// export type Value<T extends any> = Extract<keyof T, string>;

/** return T and all its super interfaces/classes ascendants */
export type Extended <T extends any, K extends any = any> = T extends K ? T : never
export type NamedMemberNamesOf <T extends any, K extends Extended<T> = Extended<T>> = StringKeyOf<K>
export type NamedMemberValuesOf <T extends any, K extends Extended<T> = Extended<T>> = ValueOfStringKey<K, NamedMemberNamesOf<K>>
export type NamedMemberValueOf <T extends any, K extends NamedMemberNamesOf<T>> = ValueOfStringKey<Extended<T>, K>
// interface a{a:number} interface b{b:string} interface c extends a, b {c:Date}
// type n = NamedMemberValueOf<c, 'c'>
/** return an fixed length array with item type TItem */
// export type Tuple<TItem, TLength extends number> = [TItem, ...TItem[]] & { length: TLength };


export type TODO = any
export function checkThrow<T>(r?: T, msg = 'Throwing on undefined value'): T {
  if (!r) { throw new Error(msg) }
  return r
}
export type MapStringKeySameTypeValues<T extends any = any> = { [key: string]: T }
export type EmptyObject = {}
export interface TypedMap<PropTypes extends EmptyObject> {
  get<T extends StringKeyOf<PropTypes>>(name: T): ValueOfStringKey<PropTypes, T>
  set<T extends StringKeyOf<PropTypes>>(name: T, value: ValueOfStringKey<PropTypes, T>): void
}
export interface TypedMapAndUndefinedGetter<PropTypes extends EmptyObject> {
  get<T extends StringKeyOf<PropTypes>>(name: T): ValueOfStringKey<PropTypes, T>|undefined
  set<T extends StringKeyOf<PropTypes>>(name: T, value: ValueOfStringKey<PropTypes, T>): void
}
export class TypedMapImpl<PropTypes extends EmptyObject> implements TypedMap<PropTypes> {
  public constructor(private props: PropTypes) { }
  get<T extends StringKeyOf<PropTypes>>(name: T): ValueOfStringKey<PropTypes, T> {
    return this.props[name]
  }
  set<T extends StringKeyOf<PropTypes>>(name: T, value: ValueOfStringKey<PropTypes, T>): void {
    this.props[name] = value
  }
}


// /**
//  * Creates a union from the types of an Array or tuple
//  */
// type UnionOf<T extends any[]> = T[number];

// /**
//  * Returns the length of an array or tuple
//  */
// type LengthOf<T extends any[]> = T["length"];

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




export function printNativeError(error: NativeError) {
  return `${error && error.type}, ${error && error.name}
Cause: ${error && error.message}
Stack Trace: 
${(error.stack && Array.isArray(error.stack)) ? error.stack.map(s => repeat(2, ' ') + s).join('\n') : error.stack}`
}



export function printMs(ms: number, config: { minutes?: boolean, seconds?: boolean, ms?: boolean } = { minutes: false, seconds: true, ms: true }) {
  config = { ...{ minutes: false, seconds: true, ms: true }, ...config }
  const seconds = config.seconds && Math.floor(ms / 1000)
  const minutes = config.minutes && seconds && Math.floor(seconds / 60)
  const milliseconds = config.ms && Math.floor(ms % 1000 || ms)
  return `${minutes ? `${minutes} minutes ` : ''}${seconds ? `${seconds} seconds ` : ''}${milliseconds ? `${milliseconds} milliseconds ` : ''}`
}
export function now(unit: 'milliseconds' | 'nanoseconds' = 'milliseconds') {
  return unit === 'milliseconds' ? nanosecondsToMilliseconds(nanoTime()) : nanoTime()
}
export function nanosecondsToMilliseconds(n: number) {
  return n / 1e+6
}