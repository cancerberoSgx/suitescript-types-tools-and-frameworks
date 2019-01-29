"use strict";
// import { ValueOfStringKey, StringKeyOf } from '../misc/misc';
// import { TypeOfValues } from '../introspection/objectExplorer';
// // import { StringKeyOf } from '../misc/misc';
// // interface A<N extends Obj> {
// //   run(c: Config<N>): B<N>
// // }
// // interface Obj {
// //   foo: '1',
// //   bar: '2'
// // }
// // interface Config<O extends Obj, N extends keyof Obj> {
// //   name: N
// // }
// // interface B<N extends Obj >{
// //   foo(name: N): void
// // }
// // let a: A<Obj>
// // a.run({name: ['foo']})
// type Value  = 'foo'|'bar'|'sdfsd'
// // type Name = 'name'|'color'|'number'
// interface C {
//   name: Value
//   color: Value
//   number: Value
// }
// // let c = f(a)
// // // let t: Record<'name', MemberValue>
// // type FilterByMemberValue<Obj extends {M}<MemberName, MemberValue>, Arr extends Obj[], MemberName extends StringKeyOf<Obj>, MemberValue extends ValueOfStringKey<Obj, MemberName>> = Arr extends MemberValue ? {[k:MemberName]:MemberValue} : never
// type name = 'name'
// // type Filter<O extends {[N in keyof O]: Value},  N extends keyof O> = { [I in keyof (O[])]: { [K in keyof (O[])[I]]: (O[])[I][K] extends O[N] ? (O[])[I][K] : never} extends O ? O : never }
// // function f<O extends {[N in keyof O]: Value}, N extends keyof O>(a: O[], n: N): {[I in keyof O]: O[I] extends O[N] ? O[I] : never}[] {
// // throw 1
// // }
// // function f<A extends C[], N extends keyof A[0]>(a: A, n: N): {[I in keyof A[0]]: I extends N ? A[0] : never}[] {
// //   throw 1
// //   }
// // function f<A extends C[], N extends keyof Unarray<A>>(a: A, n: N): {[I in keyof A[0]]: I extends N ? A[0] : never}[] {
//   // throw 1
//   // }
//   // function f<A extends C[], N extends keyof A[0]>(a: A, n: N): {[I in keyof A[0]]: I extends N ? A[0] : never}[] {
//   //   throw 1
//   //   }
// // let ss = f([{name:'foo'}, {name: 'bar'}] as C[], 'name')
// // let g = [{name:'foo'}, {name: 'bar'}]
// // function f<D extends {[N in keyof D]: Value}, N extends keyof D>(a: D[], s: N): Filter<D, N> {throw 1}
// // let ss = f([{name:'foo'}, {name: 'bar'}], 'name')
// // let gggg = ss[0]
// // let b: Filter<FF, name>
// type Unarray<T> = T extends Array<infer U> ? U : T;
// const c = [{name:'foo'}, {name: 'bar'}]
// let g: Unarray<typeof c>
// type F<A extends {[I in keyof A]: V}[], V> = {[ I in keyof A]: {[N in keyof A[I]]: A[I][N] extends V  ? V : never} } 
// function f< A extends {[string?]:V}[], V>(a: A, v: V): F<A, V> {throw 1}
// // let sstt=f([{name:'foo'}, {name: 'bar'}], 'foo')
// // type FilterArr<A, T> = Extract<A, {name: 'foo'}>
// // , i extends keyof A& number = keyof A& number> = { [K in StringKeyOf]: A[K] extends T ? A[K] :never}[i]
// const a 3
// type t = 
// type s = 'asd'|'fgfg'|'hrhr'
// type T44 = Extract<t, {name:}>
