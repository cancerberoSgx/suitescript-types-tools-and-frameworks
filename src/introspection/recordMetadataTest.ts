import { describe, expect, fail, it, skip } from "../spec/index";
import { getRecordTypeMetadata } from './recordMetadata';
import { asRecord, asRecordOrThrow } from '../record/recordRef';
import { findMatrixChildOrThrow } from '../catalog/matrixItem';
import { get } from '../catalog/__tests__/itemTestPreconditions';
import { log } from "../log/log";
import { load } from 'N/record';
import { printNamedTypedArray, getObjectValueTypes } from './objectExplorer';
 
export function recordMetadataTest() {

  describe('recordMetadataTest', () => {
    const r = asRecordOrThrow(findMatrixChildOrThrow(get().oneMatrixChildId))
    log(printNamedTypedArray(getObjectValueTypes(r)))
    // const metadata = getRecordTypeMetadata(load({id: r.id, type: r.type, isDynamic: true}))
    const metadata = getRecordTypeMetadata(r)
    log(JSON.stringify(metadata, null, 2))
  })

//  3
 
}