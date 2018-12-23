define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    //TODO: move this to a misc.ts file. Use it in sublistUtil.ts getLines()
    function array(n, sample) {
        var a = [];
        for (var i = 0; i < n; i++) {
            a.push(typeof sample === 'undefined' ? i : sample);
        }
        return a;
    }
    exports.array = array;
    function repeat(n, s) {
        return array(n, s).join('');
    }
    exports.repeat = repeat;
    function find(a, predicate) {
        for (var i = 0; i < a.length; i++) {
            var v = a[i];
            if (predicate(v, i, a)) {
                return v;
            }
        }
    }
    exports.find = find;
});
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
