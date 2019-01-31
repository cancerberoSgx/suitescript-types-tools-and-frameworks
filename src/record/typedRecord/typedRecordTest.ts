import { loadOrThrow, load } from './typedRecordOperations';
import { StringKeyOf, ValueOfStringKey, objectKeys, ValueOf } from '../../misc/misc';
type Unpacked<T extends keyof any, O ={[k in T]: number}, j=keyof T, k = keyof T>  = j extends k ? [keyof T] : never

// type fefef = Unpacked<'s'|'4'>

// type foo = {[k in 's'|'f']:boolean}
// type ffffff = ()=>foo
// // type sdfsdf = InstanceType<ReturnType<ffffff>>


// function unproxify<T>(t: foo): number {
//   let result :boolean[] = []
//   for (const k in t) {
//       result.push(true)
//   }
//   return result.length;
// }
// type g = 1|2|3
// type jhd<h extends keyof g = , j extends keyof g = keyof g> = [...(1|2|3)[]]
// type hghhg = ((1|2)[])&{length:ValueOf<(1|2)[], 'length'>}
// let fdfiidf: jhd
// type f <t extends any[]>=[...(of t)[]]
// type ffff = typeof fdfiidf.length

// type yy = '1'|'2'|'3'
// type fff <T extends {[k in yy]:unknown}= {[k in yy]:unknown}> = StringKeyOf<T>[]
// let f : fff
// type sdfsd =ValueOf<fff, 'length'>
// .length
// type Record2<K extends keyof any> = K extends K ? [keyof K[]] : never


function tuple<T extends any[]>(...args: T): T {
  return args;
}

type ddd = (('s'| 'f')[]).length
let ss : ddd.lenth
type df = typeof ddd.length
// const numbers: number[] = getArrayOfNumbers();
// const t1 = tuple("foo", 1, true);  // [string, number, boolean]
// const t2 = tuple("bar", ...numbers);  // [string, ...number[]]


type t2 = ReturnType<()=>'1'|'2'[]>
// type f = {[k in t]: any}
// export type ff<o extends {[s in t]: any}= {[s in t]: any}>= [keyof Partial o] 

type ThreeStringProps = Record<'prop1' | 'prop2' | 'prop3', string>
let gg : ThreeStringProps = null as any as ThreeStringProps
let gggg = Object.keys(gg).length
// Record
let sfsa : fdf
type fdf = ff

export function typedRecordTest(){
  // const ref = {id: 33, type: 'commercecategory'}
  // const r = load({id: 33, type: 'commercecategory'})
  // const c = new commercecategoryRecordImpl(ref)
  // c.fields.addtohead = 'hi'
   
  // const c = loadOrThrow({id: 33, type: 'commercecategory'})
  // c.getValue('primaryparent')
  

  const c2 = load({id: 33, type: 'commercecategory'})
  if(!c2)return
  const v21 = c2.getValue({fieldId: 'primaryparent'}) // / must be string | undefined
  const v22 = c2.getValue({fieldId: 'created'}) // / must be Date | undefined

  const v23 = c2.getValue('primaryparent') // must be string | undefined
const s2s = c2.getSublists() // must be "items" | "subcategories" | "urls" but is ("items" | "subcategories" | "urls")[] which is not exactly correct

s2s[44]

// s2s.length
// const s2s1 = s2s[1]
  // c.getSublistValue({sublistId: ''})

  // console.log(`${c.fields.created}, ${c.fields.lastmodified}, ${c.fields.primaryparent}, ${c.fields.name}`);

//   c.fields.name = c.fields.name+'_changed'
//   c.save()

//   const c2 = loadOrThrow({id: 33, type: 'commercecategory'})

//   // const lins = c2.sublists.subcategories.line(1)
//   // c.nsRecord.sublist
//   console.log(`${c2.fields.name}`);

// // const s: string | undefined = c.sublists.items.line(0). 

// let c3  = loadOrThrow({id: 33, type: 'commercecategory'})
// const oo = c3.sublists.items.get('descriptionoverride', 0)
// console.log('1'+oo);
// c3.sublists.items.line(0).descriptionoverride = '00'
// c3.save()
// c3  = loadOrThrow({id: 33, type: 'commercecategory'})
// console.log('2'+oo);
// c3.sublists.items.lines[0].descriptionoverride = '123'
// c3.save()
// c3  = loadOrThrow({id: 33, type: 'commercecategory'})
// console.log('3'+oo);
// c3.sublists.items.lines.map((line, index) => {
//   console.log('map1'+line.descriptionoverride);
// })
// c3.sublists.items.lines = [
//   {descriptionoverride: 'sdf'}
// ]
// c3.save()
// c3  = loadOrThrow({id: 33, type: 'commercecategory'})
// c3.sublists.items.lines.map((line, index) => {
//   console.log('map'+line.descriptionoverride);
// })

}
  