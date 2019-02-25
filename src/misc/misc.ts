import { NativeError } from '../nstypes';
import { installArrayPrototypeFind } from './arrayPrototypeFind';

installArrayPrototypeFind()
// collections

import {repeat} from 'misc-utils-of-mine-generic'
import { EmptyObject, StringKeyOf, ValueOfStringKey } from 'misc-utils-of-mine-typescript';
export * from 'misc-utils-of-mine-generic'




export type MapStringKeySameTypeValues<T extends any = any> = { [key: string]: T }
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
${printNativeErrorStack(error)}
`}

export function printNativeErrorStack(error: NativeError) {
  return `${(error.stack && Array.isArray(error.stack)) ? error.stack.map(s => repeat(2, ' ') + s).join('\n') : error.stack}`
}
