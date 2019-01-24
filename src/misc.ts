


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
export function checkThrow<T>(r?:T, msg='Throwing on undefined value'):T{
  if(!r){throw new Error(msg)}
  return r
}
 
export type MapStringKeySameTypeValues< T extends any = any> = {[key: string]: T}
// export type TypedMapStringKey<T extends EmptyObject> = {[key: StringKeyOf<T>]: ValueOfStringKey<T, typeof key>}
export type EmptyObject = {}

 

export interface TypedMap<PropTypes extends EmptyObject>  {
  get<T extends StringKeyOf<PropTypes>>(name:T): ValueOfStringKey<PropTypes, T>
  set<T extends StringKeyOf<PropTypes>>(name:T, value: ValueOfStringKey<PropTypes, T>):void
}
export class TypedMapImpl<PropTypes extends EmptyObject> implements TypedMap<PropTypes> {
  public constructor(private props: PropTypes){}
  get<T extends StringKeyOf<PropTypes>>(name:T): ValueOfStringKey<PropTypes, T>{
    return this.props[name]
  } 
  set<T extends StringKeyOf<PropTypes>>(name:T, value: ValueOfStringKey<PropTypes, T>):void{
    this.props[ name]=value
  }
}


export function getObjectKeys(o : any): string[]{
  const a = []
  for(let k in o) {
    a.push(k)
  }
  return a
}
export type typeofType =  "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function"
export function getObjectValueTypes(o : any): {key: string, typeOfValue: typeofType}[]{
  return getObjectKeys(o).map(key=>({key: key+'', typeOfValue: typeof o[key]}))
}
