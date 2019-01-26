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