import { describe, expect, fail, it, skip } from "../spec/index";
import { getRecordTypeMetadata } from './recordMetadata';
import { asRecord, asRecordOrThrow } from '../record/recordRef';
import { findMatrixChildOrThrow } from '../catalog/matrixItem';
import { get } from '../catalog/__tests__/itemTestPreconditions';
import { log } from '../log/responseLogger';
 
export function recordMetadataTest() {

  describe('recordMetadataTest', () => {
    // const res = 

    const metadata = getRecordTypeMetadata(asRecordOrThrow(findMatrixChildOrThrow(get().oneMatrixChildId)))
    log(JSON.stringify(metadata, null, 2))
  })


 
}