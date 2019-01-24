import { SpecRunner } from "./runner";

export function expect<R>(real: R): Expect<R> {
  return new ExpectImpl<R>(real)
}

export interface Expect<R> {
  toBe(expected: R): void
  toContain<T extends ValueOf<R, 0>>(value: T): void
}

class ExpectImpl<R> implements Expect<R>{

  constructor(protected real: R) {

  }

  /** to be identical (===) */
  toBe(value: R) {

    const i = SpecRunner.getInstance()._currentIt
    if (!i) {
      throw new Error('expect() must be called inside it() : value was: ' + this.real)
    }
    const message = `Expected "${this.real}" to be "${value}"`
    let result: ExpectResult
    if (this.real !== value) {
      result = {
        message,
        type: 'fail'
      }
    } 
    else {
      result = {
        message,
        type: 'pass'
      }
    }
    i.results.push(result)
  }

  /** array or string to contain (.indexOf()) */
  toContain<J extends ValueOf<R, 0>>(value: J | string): void {
    const i = SpecRunner.getInstance()._currentIt
    if (!i) {
      throw new Error('expect() must be called inside it() : value was: ' + this.real)
    }
    if (!Array.isArray(this.real) && typeof this.real !== 'string') {
      throw new Error('toContain must be called with a array or string value and it was ' + (typeof this.real) + ' - ' + this.real)
    }
    const message = `Expected ${Array.isArray(this.real) ? `[${this.real.join(', ')}]` : `"${this.real}"`} to contain "${value}"`
    let result: ExpectResult
    if ((this.real as any).indexOf(value) === -1) {
      result = {
        message,
        type: 'fail'
      }
    }
    else {
      result = {
        message,
        type: 'pass'
      }
    }
    i.results.push(result)
  }
}

/** returns the type of the value with key K in the Mapped type T. Example: `type _string = ValueOf<A, 'a'>` . */
type ValueOf<T extends { [k: number]: any }, K extends number> = T[K];

export function fail(label?: string) {
  return {
    message: 'fail() called - ' + label,
    resultType: 'fail'
  }
}

export function skip(label?: string) {
  return {
    message: 'skip() called - ' + label,
    resultType: 'skip'
  }
}

export interface ExpectResult {
  type: SpecResultType
  message: string
  error?: Error
}

export type SpecResultType = 'fail' | 'pass' | 'skip'
