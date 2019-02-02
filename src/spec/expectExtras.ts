import { expect } from './expect';

export function expectCodeEquals(a?: string, b?: string) {
  // console.log(a, b);
  if(!a||!b)return false
  expect(a.replace(/\s+/gm, ' ').trim()).toBe(b.replace(/\s+/gm, ' ').trim())
}

export function expectCodeToContain(a?: string, b?: string) {
  // console.log(a, b);
  if(!a||!b)return false
  expect(a.replace(/\s+/gm, ' ').trim()).toContain(b.replace(/\s+/gm, ' ').trim())
}

export function expectCodeNotToContain(a?: string, b?: string) {
  // console.log(a, b);
  if(!a||!b)return false
  expect(a.replace(/\s+/gm, ' ').trim()).notToContain(b.replace(/\s+/gm, ' ').trim())
}
