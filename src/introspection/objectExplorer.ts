// the idea is to build tools to explore JS live objects

// basic object exploration utilities

var __c = typeof (1 as any)
/** something like "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function" */
export type TypeOf = typeof __c
export const TypeOfValues = ["string", "number", "bigint", "boolean", "symbol", "undefined", "object", "function"]

// simple tools
export function getObjectKeys(o: any): string[] {
  const a = []
  for (let k in o) {
    a.push(k)
  }
  return a
}
export function getType(o: any): Type {
  return typeof o
}
export function getObjectValueTypes(o: any): NamedTyped[] {
  return getObjectKeys(o).map(name => ({ name: name + '', type: getType(o[name]) }))
}
export function printObjectValueTypes(o: any): string {
  return printNamedTypedArray(getObjectValueTypes(o))
}
export function getObjectKeysTypesAndValues(o: any): NamedTypedValued[] {
  return getObjectKeys(o).map(name => ({ name: name + '', type: getType(o[name]), value: o[name] }))
}


export function printTyped(o: Typed) {
  return `${o.type}`
}
export function printNamedTyped(o: NamedTyped) {
  return ` * ${o.name}: ${printTyped(o)}`
}
export function printNamedTypedArray(arr: NamedTyped[]) {
  return arr.map(o => printNamedTyped(o)).join('\n')
}

// export function printNamedTypedValued(arr: NamedTypedValued[]){
//   return arr.map(o=>` * ${o.name}: ${o.type}  (${o.value})`).join('\n')
// }




//TODO: interface ClassLikeWithStatic extends ClassLike {staticAttributes}
//TODO: interface ClassLikeWithInheritance extends ClassLike {prototype ? or extends: } in jaascript new need to explorer instance.constructor or Construtor.prototype...


interface Typed<T extends Type = Type> {
  type: T
  otherValue?: string
  jsonStringify?: string
}
interface Named {
  name: string
}
interface NamedTyped extends Typed, Named {
  // name: string
}
interface NamedOptional {
  name?: string
}
interface Value extends Typed {

}

interface Valued {
  value: Value
}
interface NamedTypedValued extends NamedTyped, Valued {
  // name: string
}
interface Member extends Typed, NamedOptional {
  isReadOnly?: boolean
}

interface NamedMember extends NamedTyped {
}

interface Keyed extends NamedTyped {
  members: NamedOptional[]
}

interface Attribute extends NamedMember {

}

interface Function extends Typed, NamedOptional {
  parameters: NamedTyped[]
}

interface Method extends NamedMember, Function {
  name: string
}

interface ClassLike extends NamedTyped {
  attributes: Attribute[]
  methods: Method[]
  constructors: Constructor[]
}

interface Constructor extends Member, Function {
  name: never
  returnValue: ClassLike
}



type Type = TypeOf | 'other'
const TypeValues = TypeOfValues.concat('other')





