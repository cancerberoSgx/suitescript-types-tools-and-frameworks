import { SpecRunner } from "./runner";
import { It } from "./it";
import { NativeError } from '../nstypes';

export interface SpecBaseWithoutParent {
  parent?: Describe
  name: string
  type: SpecType
}

export type DescribeFn = () => void

export interface Describe extends SpecBaseWithoutParent {
  /** internal describes */
  describes?: Describe[]
  /** internal its */
  its: It[]
  error?: SpecError
  fn: DescribeFn
}

export interface SpecError {
  nativeException: NativeError
  isFail?: boolean
  isSkip?: boolean
  label?: string
}

export type SpecType = 'normal' | 'x' | 'f'

function createDescribe(name: string, fn: DescribeFn, type: SpecType) {
  const parent = SpecRunner.getInstance()._currentDescribe
  const d: Describe = { parent, its: [], fn, name, type, describes: [] }
  if (!parent) {
    SpecRunner.getInstance().describes.push(d)
  }
  else {
    (parent.describes || []).push(d)
  }
  SpecRunner.getInstance()._currentDescribe = d
  // try {
    d.fn()
  // } catch (err) {
    // log('Exception catch in describe fn() ' + d.name);
    // TODO: support break on first error
    // d.error = {
    //   nativeException: err,
    //   isFail: err.isFail,
    //   label: err.failLabel
    // }
  // }
  SpecRunner.getInstance()._currentDescribe = parent
}
export function describe(name: string, fn: DescribeFn) {
  return createDescribe(name, fn, 'normal')
}
export function fdescribe(name: string, fn: DescribeFn): void {
  createDescribe(name, fn, 'f')
}
export function xdescribe(name: string, fn: DescribeFn): void {
  createDescribe(name, fn, 'x')
}

// /** when a test suite runs one of this is created and will store all the descriptions of describes and its. */
// export class SpecHome {
//   describes: SpecDescribe[] = []

//   addDescribe(d: SpecDescribe): void{

//   }
// }