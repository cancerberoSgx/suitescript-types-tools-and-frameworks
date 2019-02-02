import { SearchRecordType } from './searchTypingHelpers';
import { find as resultFind, FindPredicate, toArray, filter as resultFilter } from '../results';
import { SearchCreateOptions, Result, create } from './typedSearch';


export function find<RecordType extends SearchRecordType>(options: SearchCreateOptions<RecordType>, predicate: FindPredicate): Result<RecordType> | undefined {
  return resultFind(create(options).run() as any, predicate) as any;
}

export function filter<RecordType extends SearchRecordType>(options: SearchCreateOptions<RecordType>, predicate: FindPredicate): Result<RecordType>[] {
  return resultFilter(create(options).run() as any, predicate) as any;
}

export function list<RecordType extends SearchRecordType>(options: SearchCreateOptions<RecordType>): Result<RecordType>[] {
  return toArray(create(options).run() as any) as Result<RecordType>[]
}
