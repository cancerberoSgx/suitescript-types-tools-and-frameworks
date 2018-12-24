import { delete as deleteRecord, load, Record } from 'N/record';
import { log } from '../log/responseLogger';
import { getLines } from '../record/sublistUtil';
import { RecordId } from '../record/recordRef';


export interface CreateCategoryConfig {
    parent: RecordId|null
}

/**
 * 
 */
export function createCategory(config: CreateCategoryConfig): Record {
throw new Error('not implemented')
}








