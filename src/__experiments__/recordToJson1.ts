import { findByIdOrThrow } from '../catalog/matrixItem';
import { get } from '../catalog/__tests__/itemTestPreconditions';
import { RecordRef, asRecordOrThrow } from '../record/recordRef';
import { writeRecordJsonInResponse } from '../introspection/dumpRecordToJsonResponse';
import { ServerResponse } from 'N/http';

export function recordToJsonTest1(response: ServerResponse){

  const result = findByIdOrThrow(get().oneMatrixParentId)
  const recordRef: RecordRef = { id: result.id, type: result.recordType + '' }
  const record = asRecordOrThrow(recordRef)
  writeRecordJsonInResponse(record, response)
}