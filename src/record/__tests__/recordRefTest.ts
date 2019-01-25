import { describe, expect, fail, it, skip } from "../../spec/index";
import { findById, findByIdOrThrow } from '../../catalog/matrixItem';
import { get } from '../../catalog/__tests__/itemTestPreconditions';
import { RecordRef, asRecordOrThrow } from '../recordRef';

export function matrixItemTest() {

  describe('record/RecordRef/asRecord', () => {
    it('should return a record when a RecordRef is given', () => {
        
    const result = findByIdOrThrow(get().oneMatrixParentId)
    const recordRef: RecordRef = {id: result.id, type: result.recordType+''}
    const record = asRecordOrThrow(recordRef)
        expect(record.id+'').toBe(result.id)
        expect(!!record.getCurrentSublistSubrecord).toBe(true)
    })
  })
  
}