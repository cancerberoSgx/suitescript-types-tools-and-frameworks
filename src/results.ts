import {ResultSet, Result, Search} from 'N/search';

export function toArray(results: ResultSet): Result[] {
    const a: Result[] = []
    results.each(r => !!a.push(r))
    return a
}
export function map<T>(results: ResultSet, fn): T[] {
    return toArray(results).map(fn)
}
export function run(s: Search): Result[]{
    return toArray(s.run())
} 