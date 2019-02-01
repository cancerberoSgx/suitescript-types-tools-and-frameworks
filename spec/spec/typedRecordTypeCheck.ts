import { expectType } from 'tsd-check';
import { load, loadOrThrow } from "../../src/record/typedRecord/typedRecordOperations";
import { Record } from "../../src/record/typedRecord/typedRecord";
import { CannotBeUndefined, CanBeUndefined, NotExtends, Extends, Identical } from './typeCheckUtil';

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
