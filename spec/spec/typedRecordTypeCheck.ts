import { expectType } from 'tsd-check';
import { load, loadOrThrow } from "../../src/record/typedRecord/typedRecordOperations";
import { Record } from "../../src/record/typedRecord/typedRecord";
describe('first spec of ss2 test', () => {
  it('it should TODO', () => {

    const c2 = load({ id: 33, type: 'commercecategory' })
    if (!c2) return
    const v21 = c2.getValue({ fieldId: 'primaryparent' }) // / must be string | undefined
    const v22 = c2.getValue({ fieldId: 'created' }) // / must be Date | undefined

    const v23 = c2.getValue('primaryparent') // must be string | undefined
    const s2s = c2.getSublists() // is ("items" | "subcategories" | "urls")[] which is not exactly correct

  })
})

type CannotBeUndefined<T> = undefined extends T ? false : true
type CanBeUndefined<T> = undefined extends T ? true : false
type Identical<T1, T2> = NonNullable<T1> extends NonNullable<T2>  ? (NonNullable<T2>  extends NonNullable<T1>  ? true : false) : false
type NotIdentical<T1, T2> = T1 extends T2 ? (T2 extends T1 ? false : true) : true
type Extends<T1, T2> = NonNullable<T1> extends NonNullable<T2> ? true : false
type NotExtends<T1, T2> = T1 extends T2 ? false : true

// const expectIdentical:(typeof expectType) = ()

describe('typedRecord', () => {
  describe('operations', () => {
    it('loadOrThrow', () => {
      const r = loadOrThrow({ id: 33, type: 'commercecategory' })
      type t = typeof r
      expectType<CannotBeUndefined<t>>(true)
      expectType<Record<'commercecategory'>>(r)
      expectType<'commercecategory'>(r.type)
    })
    it('load', () => {
      const r = load({ id: 33, type: 'commercecategory' })
      type t = typeof r
      expectType<Record<'commercecategory'> | undefined>(r)
      expectType<CanBeUndefined<t>>(true)
      expectType<'commercecategory'>(r!.type)
    })
    xit('create', () => { })
  })

  describe('fields', () => {
    it('getFields', () => {
      const fields = loadOrThrow({ id: 33, type: 'commercecategory' }).getFields()
      type t = typeof fields
      expectType<CannotBeUndefined<t>>(true)
      expectType<NotExtends<string[], t>>(true)
      expectType<Extends<string[], t>>(false)
      expectType<Extends<["addtohead", "catalog", "created", "description", "displayinsite", "externalid", "isinactive", "lastmodified", "lastmodifiedby", "metadescription", "metakeywords", "version"], t>>(true)
      expectType<NotExtends<["strangeeee", "addtohead", "catalog", "created", "description", "displayinsite", "externalid", "isinactive", "lastmodified", "lastmodifiedby", "metadescription", "metakeywords", "version"], t>>(true)
    })

    it('getField', () => {
      const field = loadOrThrow({ id: 33, type: 'commercecategory' }).getField({fieldId: 'created'})
      type t = typeof field
      expectType<CanBeUndefined<t>>(true)
      if(!field){return}
      const fieldId = field.id
      type fieldT = typeof fieldId
      expectType<Identical<'created', fieldT>>(true)
      expectType<'created'>(fieldId)
      expectType<Extends<string, fieldT>>(false)


      expectType<Identical<Date, typeof field.type>>(true)

      // var fieldType = field.type

      // type fieldTypeT  = NonNullable<string>
// 
      // expectType<Extends<"string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function", typeof field.type>>(true)

      // expectType<Extends<string, typeof field.type>>(false)
    })
  })
})
