


//TODO: move this to a misc.ts file. Use it in sublistUtil.ts getLines()
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


export function find<T>(a: T[], predicate: (o: T, index?: number, arr?: T[])=>boolean):T|undefined {
  for (let i = 0; i < a.length; i++) {
    const v = a[i];
    if(predicate(v, i, a)){
      return v
    }  
  }
} 

/** returns the type of the value with key K in the Mapped type T. Example: `type _string = ValueOf<A, 'a'>` . */
export type ValueOf<T extends { [k: number]: any }, K extends number> = T[K];
export type ValueOfStringKey<T extends { [k: string]: any }, K extends string> = T[K];
export type ValueOfNumberKey<T extends { [k: number]: any }, K extends number> = T[K];
export type StringKeyOf<T extends any> = Extract<keyof T, string>;

export type TODO = any
// import { ModelAttributes, BackboneModel } from 'sc-types-frontend';

// export default class TypedBackboneModel<Attributes extends ModelAttributes = ModelAttributes> extends BackboneModel<Attributes> {
//   setAttributes(a: Attributes): this {
//     return super.set(a) as this
//   }
//   getAttributes(): Attributes {//ValueOf<Attributes, keyof keys>[] {
//     return this.attributes
//   }
//   setSomeAttributes(a: Partial<Attributes>) {
//     return this.setAttributes({...this.attributes, ...a})
//   }
//   // getSomeAttributes(names? :( keyof Attributes)[]) {
//     // return this.setAttributes({...this.attributes, ...a})
//   // }
//   getAttribute<T extends StringKeyOf<Attributes> = typeof name>(name: T) : ValueOf<Attributes, T> {
//     return this.attributes[name]
//   }
//   setAttribute<T extends StringKeyOf<Attributes> = typeof name>(name: T, value: ValueOf<Attributes, T>): void {
//     this.attributes[name]=value
//   }
// }

// /** returns the type of the value with key K in the Mapped type T. Example: `type _string = ValueOf<A, 'a'>` . */
// type ValueOf<T extends { [k: string]: any }, K extends string> = T[K];
// // type ValueOfMany<T extends { [k: string]: any }, K extends string[]> = ReturnType<(t: T, k: keyof T)=>ValueOf<T, >>;

// type StringKeyOf<T extends any> = Extract<keyof T, string>;


// getAttribute<T extends StringKeyOf<Attributes> = typeof name>(name: T) : ValueOf<Attributes, T> {
//   return this.attributes[name]
// }
// setAttribute<T extends StringKeyOf<Attributes> = typeof name>(name: T, value: ValueOf<Attributes, T>): void {
//   this.attributes[name]=value
// }