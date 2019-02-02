import { expectType } from 'tsd-check';
import { NamedMemberValueOf } from '../../src/misc/typesUtil';
import { SearchTypesOperatorsSupport } from '../../src/search/typedSearch/generated';
import { FilterName, FilterSupportedOperators, FilterType, SearchRecordType } from '../../src/search/typedSearch/searchTypingHelpers';
import { create, Result, TypedFilter } from "../../src/search/typedSearch/typedSearch";
import { CanBeUndefined, Identical, ThereWasATypeError } from './typeCheckUtil';

describe('typedsearch', () => {

  describe('type helpers', () => {
    it('filter operator type', () => {
      type OP1 = FilterSupportedOperators<'commercecategory', 'isinactive'>
      expectType<Identical<OP1, 'anyOf' | 'noneOf'>>(false)
      expectType<Identical<OP1, "equalTo" | "is" | undefined>>(false)
      expectType<Identical<OP1, "equalTo" | "is">>(true)

      type R = 'item'
      type Filter = 'inventorylocation'
      type OP3 = NamedMemberValueOf<Required<SearchTypesOperatorsSupport>, FilterType<R, Filter>>;
      expectType<Identical<OP3, 'anyOf' | 'noneOf'>>(true)

      const a: TypedFilter<'item', 'isfulfillable'> = { name: 'isfulfillable', operator: 'is' }

      // type FF<R extends SearchRecordType , 
      // F extends FilterName<R> = FilterName<R>, 
      // OP extends FilterSupportedOperators<R, F> = FilterSupportedOperators<R, F>
      // > = 
      // {name: F extends infer FI ? FI : never, operator: OP extends infer OPI ? (OPI extends FilterSupportedOperators<R, F> ? OPI : never) : never} 


      // {name: F extends infer FI ? FI : never, operator: OP extends infer OPI ? (OPI extends FilterSupportedOperators<R, F> ? OPI : never) : never} 


      // type FF2<R extends SearchRecordType , 
      // F extends FilterName<R> = FilterName<R>, 
      // OP extends FilterSupportedOperators<R, F> = FilterSupportedOperators<R, F>
      // > = OP extends infer OPi ?  : never
      // // {name: F extends infer FI ? FI : never, operator: OP extends infer OPI ? (OPI extends FilterSupportedOperators<R, F> ? OPI : never) : never} 


      // <FilterSupportedOperators<R, N> : never



      type FilterArray<R extends SearchRecordType,
        F extends FilterName<R> = FilterName<R>,
        // @ts-ignore
        > = F extends infer FI ? TypedFilter<R, F> & { name: FI, operator: FilterSupportedOperators<R, FI> } : never

      const arr: FilterArray<'item'>[] = [
        // @ts-ignore error : no name
        { operator: 'before' },

        // @ts-ignore error no operator
        { name: 'isfulfillable' },

        // @ts-ignore error wron name
        { name: 'wrong' },

        { name: 'created', operator: 'before' },

        // should allow to declare other type filter props like join and values
        { name: 'isfulfillable', operator: 'equalTo', join: 'inventorydetail', values: 'hi' },

        // @ts-ignore   error - wrong operator for filter name
        { name: 'isfulfillable', operator: 'before' }
      ]

      interface iii<R extends SearchRecordType> {
        filters?: FilterArray<R>[]
      }
      const ii : iii<'item'> = {
        filters: [
          {name: 'createjob', operator: 'is'}, 
          // {name: 'createjob', operator: 'contains'}, 
      ]
      }

      function create2<R extends SearchRecordType> (o: iii<R>): void{

      }

      create2<'item'>({
        filters: [
          {name: 'createjob', operator: 'is'},
        // {name: 'createjob', operator: 'contains'},
      ]
      })

      const sss = create({
        type: 'item', 
        filters: [
          {name: 'createjob', operator: 'is'},
        // {name: 'createjob', operator: 'contains'},
      ]
      })
      // arr[0].operator

      // const fff = {name: 'isfulfillable'}
      // type t = TypedFilterInferOperator<typeof fff>
      // const ttt : TypedFilterInferName<'item'> = {name: 'isfulfillable', operator: ''}
      // type FilterArray<T extends SearchRecordType> = TypedFilterInferName<T>[]

      // type RT<T> = T extends (...args: any[]) => infer R ? R : any;
      // type ssfs = RT<()=>boolean>
    })
  })


  describe('create', () => {

    it('should allow ncolumns as strings', () => {
      const s3 = create({ type: 'commercecategory', columns: ['displayinsite'] });
      expectType<CanBeUndefined<typeof s3>>(false)
      expectType<Identical<'commercecategory', typeof s3.searchType>>(true)
    })

    it('should accept filters with values', () => {
      const s3 = create({
        type: 'commercecategory',
        columns: ['displayinsite'],
        filters: [
          { name: 'primaryparent', operator: 'noneOf', values: '' },
          { name: 'created', operator: 'notBefore', values: '' }
        ]
      });
      expectType<CanBeUndefined<typeof s3>>(false)
      expectType<Identical<'commercecategory', typeof s3.searchType>>(true)
      expectType<ThereWasATypeError<typeof s3>>(false) // means no type error happen error
    })

    it('should type error on non existing record', () => {
      //@ts-ignore
      const s3 = create({ type: 'non existent', columns: ['displayinsite'] });
      expectType<ThereWasATypeError<typeof s3>>(true) // means a type error happened // see previous @ts-ignore comments
    })

    it('should type error on non existing column', () => {
      //@ts-ignore
      const s3 = create({ type: 'non existent', columns: [] });
      expectType<ThereWasATypeError<typeof s3>>(true) // means a type error happened // see previous @ts-ignore comments

      const s4 = create({ type: 'item', columns: [] });
      expectType<ThereWasATypeError<typeof s4>>(false)
    })

    it('should type error on non existing column', () => {
      const s3 = create({
        type: 'item',
        //@ts-ignore
        columns: ['nonexisting']
      });
      expectType<ThereWasATypeError<typeof s3>>(true)
      const s4 = create({ type: 'item', columns: ['created'] });
      expectType<ThereWasATypeError<typeof s4>>(false)
    })

    it('should type error on non existing filter', () => {
      const s3 = create({
        type: 'item',
        columns: ['created'],
        // @ts-ignore
        filters: [{ name: 'non existing', values: 'T', operator: 'anyOf' }]
      });
      expectType<ThereWasATypeError<typeof s3>>(true)
      const s4 = create({
        type: 'item',
        columns: ['created'],
        filters: [{ name: 'department', values: 'T', operator: 'anyOf' }]
      });
      expectType<ThereWasATypeError<typeof s4>>(false)
    })
    it('should type error on non existing filter operator', () => {
      const s3 = create({
        type: 'item',
        columns: ['created'],
        // @ts-ignore
        filters: [{ name: 'isinactive', operator: 'nonexistent' }]
      });
      expectType<ThereWasATypeError<typeof s3>>(true)
      const s4 = create({
        type: 'item',
        columns: ['created'],
        filters: [{ name: 'isinactive', operator: 'is' }]
      });
      expectType<ThereWasATypeError<typeof s4>>(false)

    })

    it('should error when filter operator doesnt belong to filter type', () => {
      //@ts-ignore
      const f1: TypedFilter<'item', 'isinactive'> = { name: 'isinactive', operator: 'notBetween' } // error
      expectType<Identical<typeof f1.operator, 'is' | 'equalTo'>>(true) // because of error - should be 'notBetween
      const f2: TypedFilter<'item', 'isinactive'> = { name: 'isinactive', operator: 'equalTo' }
      expectType<Identical<typeof f2.operator, 'is' | 'equalTo'>>(true) // because of error - should be 'notBetween


      const s5 = create({
        type: 'item',
        columns: ['created'],
        // @ts-ignore
        filters: [
          { name: 'created', operator: 'equalTo' }, // error - equalTo operator doesn't apply to dates (created)
          { name: 'isinactive', operator: 'equalTo' } // it does apply to booleans
        ]
      });
      const t = s5.filters[0].name
      expectType<ThereWasATypeError<typeof s5>>(true)

      const s6 = create({
        type: 'item',
        columns: ['created'],
        filters: [
          { name: 'created', operator: 'notOnOrAfter' },
          { name: 'isinactive', operator: 'equalTo' },
        ]
      });
      expectType<ThereWasATypeError<typeof s6>>(false)
    })


  })
})


describe('run', () => {
  it('should cast values to given record type', () => {
    const s3 = create({ type: 'inventoryitem', columns: ['currentstdcosteffectivedate'] });
    expectType<CanBeUndefined<typeof s3>>(false)
    expectType<Identical<'inventoryitem', typeof s3.searchType>>(true)
    const i2 = s3.run().each(f => {
      expectType<Date | undefined>(f.getValue('dateviewed'))
      expectType<number | undefined>(f.getValue('safetystocklevel'))
      expectType<boolean | undefined>(f.getValue('isavailable'))
      return false;
    });
    expectType<Result<'inventoryitem'> | undefined>(i2)
    expectType<Date | undefined>(i2!.getValue('dateviewed'))
    expectType<number | undefined>(i2!.getValue('safetystocklevel'))
    expectType<boolean | undefined>(i2!.getValue('isavailable'))

  })

  it('filter operator', () => {
    const s = create({
      type: 'folder',
      columns: ['name'],
      // filters: [
      //   // { name: 'name', operator: '' },
      //   { name: 'isinactive', operator: 'equalTo', join: 'T' }

      // ]
    });
  })

})
