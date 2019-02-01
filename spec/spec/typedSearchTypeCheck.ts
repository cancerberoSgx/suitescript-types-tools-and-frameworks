import { expectType } from 'tsd-check';
import { Result, search } from "../../src/search/typedSearch/typedSearch";
import { CanBeUndefined, Identical } from './typeCheckUtil';

describe('typedsearch', () => {
  describe('operations', () => {
    it('loadOrThrow', () => {
      const s3 = search({ type: 'inventoryitem', columns: ['currentstdcosteffectivedate'] });

      expectType<CanBeUndefined<typeof s3>>(false)
      expectType<Identical<'inventoryitem', typeof s3.searchType>>(true)

      const i2 = s3.run().each(f => {
        expectType<Date|undefined>(f.getValue('dateviewed'))
        expectType<number|undefined>(f.getValue('safetystocklevel'))
        expectType<boolean|undefined>(f.getValue('isavailable'))
        return false;
      });
      expectType<Result<'inventoryitem'>|undefined>(i2)
      expectType<Date|undefined>(i2!.getValue('dateviewed'))
      expectType<number|undefined>(i2!.getValue('safetystocklevel'))
      expectType<boolean|undefined>(i2!.getValue('isavailable'))
      
    })
  })

})
