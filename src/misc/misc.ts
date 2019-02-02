import { NativeError } from '../nstypes';
import { StringKeyOf, ValueOfStringKey } from './typesUtil';


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
export function find<T>(a: T[], predicate: FindPredicate<T>): T | undefined {
  for (let i = 0; i < a.length; i++) {
    const v = a[i];
    if (predicate(v, i, a)) {
      return v
    }
  }
}

// also we declare and implement Array.prototype.find that doesn't exists in es5
type FindPredicate<T> = (o: T, index?: number, arr?: T[]) => boolean
type ArrayPrototypeFind<T> = (this: T[], predicate: FindPredicate<T>)=> T | undefined
declare global {
  interface Array<T> {
      find: ArrayPrototypeFind<T>
  }
}
Array.prototype.find = typeof Array.prototype.find === 'undefined' ? function<T>(this: T[], predicate: FindPredicate<T>){return find(this, predicate)} : Array.prototype.find 



export function objectKeys<Field extends EmptyObject = EmptyObject>(o: Field):StringKeyOf<Field>[] {
  return Object.keys(o) as StringKeyOf<Field>[]
}


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



export function printNativeError(error: NativeError) {
  return `${error && error.type}, ${error && error.name}
Cause: ${error && error.message}
Stack Trace: 
${(error.stack && Array.isArray(error.stack)) ? error.stack.map(s => repeat(2, ' ') + s).join('\n') : error.stack}`
}


