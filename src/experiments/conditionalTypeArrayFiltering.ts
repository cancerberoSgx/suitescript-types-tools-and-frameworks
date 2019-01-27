// import { StringKeyOf } from '../misc/misc';

// interface A<N extends Obj> {
//   run(c: Config<N>): B<N>
// }

// interface Obj {
//   foo: '1',
//   bar: '2'
// }
// interface Config<O extends Obj, N extends keyof Obj> {
//   name: N
// }


// interface B<N extends Obj >{
//   foo(name: N): void
// }

// let a: A<Obj>
// a.run({name: ['foo']})