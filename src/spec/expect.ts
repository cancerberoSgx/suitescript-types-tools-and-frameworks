import { SpecRunner } from "./runner";
import { ValueOf } from "../misc/typesUtil";
import { SpecError } from './describe';

export function expect<R>(real: R): Expect<R> {
  return new ExpectImpl<R>(real)
}

export interface Expect<R> {
  toBe(expected: R): void
  toContain<T extends ValueOf<R, 0>>(value: T): void
  notToContain<T extends ValueOf<R, 0>>(value: T): void
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
  toContain<J extends ValueOf<R, 0>>(value: J | string, _not:boolean=false): void {

    if (!Array.isArray(this.real) && typeof this.real !== 'string') { 
      throw new Error('toContain must be called with a array or string value and it was ' + (typeof this.real) + ' - ' + this.real)
    }
    const message = `Expected ${Array.isArray(this.real) ? `[${this.real.join(', ')}]` : `"${this.real}"`} to contain "${value}"`
    let result: ExpectResult
    if ((this.real as any).indexOf(value) === -1) {
      result = {
        message,
        type: _not?'pass' : 'fail'
      }
    }
    else {
      result = {
        message, 
        type: _not ? 'fail':'pass' 
      }
    }
    addToCurrentIt(result)
  }
   /** array or string to contain (.indexOf()) */
   notToContain<J extends ValueOf<R, 0>>(value: J | string): void {
    this.toContain(value, true)
  }


}



export function fail(label?: string) {
  const e = new Error('fail '+label)
  const error = {...e,
    nativeException: e as any,
    isFail:true,
    failLabel: label 
  }
  addToCurrentIt({
    message: 'fail() called - ' + label,
    type: 'fail', 
    error
  })
  throw error
}

export function skip(label?: string): any {
  const e = new Error('fail '+label)
  const error = {...e,
    nativeException: e as any,
    isSkip:true,
    skipLabel: label 
  }
  addToCurrentIt({
    message: 'skip() called - ' + label,
    type: 'skip', 
    error
  })
  throw error
}

export interface ExpectResult {
  type: SpecResultType
  message: string
  error?: SpecError
}

export type SpecResultType = 'fail' | 'pass' | 'skip'

function addToCurrentIt(result: ExpectResult) {
  const i = SpecRunner.getInstance()._currentIt
  if (!i) {
    throw new Error('expect() must be called inside it() : label was: ' + result.message)
  }
  i.results.push(result)
}