import { ResultSet, Result, Search } from 'N/search';

export function toArray(results: ResultSet): Result[] {
    const a: Result[] = []
    results.each(r => !!a.push(r))
    return a
}

export function map(this: any, results: ResultSet, 
    fn: (value: Result, index: number, array: Result[]) => Result, thisArg: any = this): Result[] {
    return toArray(results).map<Result>(fn, thisArg)
}

export function run(s: Search): Result[] {
    return toArray(s.run())
} 