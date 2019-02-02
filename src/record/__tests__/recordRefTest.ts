import { describe, expect, fail, it, skip, xit } from "../../spec/index";
import { findById, findByIdOrThrow } from '../../catalog/matrixItem';
import { get } from '../../catalog/__tests__/itemTestPreconditions';
import { RecordRef, asRecordOrThrow, isRecord } from '../recordRef';
import { log } from "../../log/log";
import { printObjectValueTypes } from '../../introspection/objectExplorer';

export function recordRefTest() {

  describe('record/RecordRef asRecord isRecord', () => {

    it('should return a record when a RecordRef is given', () => {
      const result = findByIdOrThrow(get().oneMatrixParentId)
      const recordRef: RecordRef = { id: result.id, type: result.recordType + '' }
      const record = asRecordOrThrow(recordRef)
      expect(record.id + '').toBe(result.id)
      // log('seba'+record.setValue + ' '+(!!(record.setValue)))
      expect(!!record.setValue).toBe(true)
      // log(record.toString())
      // // throw 'hello hello'
      expect(isRecord(record)).toBe(true)
      // console.log(printObjectValueTypes(record));
      //@ts-ignore
      // console.log(JSON.stringify(record.toJSON(), null, 2));
      
      var a = 1
      // record.
    })

    it('should return a record when a Result is given', () => {
      const result = findByIdOrThrow(get().oneMatrixParentId)
      // const recordRef: RecordRef = { id: result.id, type: result.recordType + '' }
      const record = asRecordOrThrow(result)
      expect(record.id + '').toBe(result.id)
      expect(record.type + '').toBe(result.recordType+'')
      // expect(!!record.setValue).toBe(true)
      // expect(!!record.getFields&&!!record.getSublistFields).toBe(true)
      expect(isRecord(record)).toBe(true)
      expect(isRecord(result)).toBe(false)
    })
  })
  

}