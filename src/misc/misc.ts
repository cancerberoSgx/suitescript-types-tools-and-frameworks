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
export function indent(i: number = 1, tabSize = 2): string {
  return repeat(i * tabSize, ' ')
}


export function objectKeys<Field extends EmptyObject = EmptyObject>(o: Field): StringKeyOf<Field>[] {
  return Object.keys(o) as StringKeyOf<Field>[]
}





export function checkThrow<T>(r?: T, msg = 'Throwing on undefined value'): T {
  if (!r) { throw new Error(msg) }
  return r
}
export function tryTo<F extends (...args: any[]) => any>(f: F): ReturnType<F> | undefined {
  try {
    return f()
  } catch (error) {
  }
}


export type MapStringKeySameTypeValues<T extends any = any> = { [key: string]: T }
export type EmptyObject = {}
export interface TypedMap<PropTypes extends EmptyObject> {
  get<T extends StringKeyOf<PropTypes>>(name: T): ValueOfStringKey<PropTypes, T>
  set<T extends StringKeyOf<PropTypes>>(name: T, value: ValueOfStringKey<PropTypes, T>): void
}
export interface TypedMapAndUndefinedGetter<PropTypes extends EmptyObject> {
  get<T extends StringKeyOf<PropTypes>>(name: T): ValueOfStringKey<PropTypes, T> | undefined
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


// strings


export function escapeHtmlAttribute(code: string) {
  return code.replace(/\"/gmi, '&quot;');
}
export function unEscapeHtmlAttribute(code: string) {
  return code.replace(/\&quot\;/gmi, '"');
}


