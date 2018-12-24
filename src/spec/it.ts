import { SpecRunner } from "./runner";
import { SpecBaseWithoutParent, SpecType, Describe, SpecError } from "./describe";
import { ExpectResult } from "./expect";

export interface It extends SpecBaseWithoutParent {
  fn: ItFn
  results: ExpectResult[]
  error?: SpecError
}

export type ItFn = () => void

function create(name: string, fn: ItFn, type: SpecType){
  const parent = SpecRunner.getInstance()._currentDescribe
  if(!parent){throw new Error('it() must be used inside describe(): '+name)}
  // if(parent.its)
  const i: It = {parent, fn, name, type ,results: []}
  parent.its.push(i)
}

export function it(name: string, fn: ItFn): void {
  create(name, fn, 'normal')
}

export function fit(name: string, fn: () => void): void {
  create(name, fn, 'f')
}
export function xit(name: string, fn: () => void): void {
  create(name, fn, 'x')
}
