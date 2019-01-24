import { ResultSet, Result, Search } from 'N/search';

/** convert a result set to an arrays. Warning, it will convert all the result set to an array which can not optimal on large result sets  */
export function toArray(results: ResultSet): Result[] {
    const a: Result[] = []
    results.each(r => !!a.push(r))
    return a
}

/** array.map() like function for a resault set. Warning, it will convert all the result set to an array which can not optimal on large result sets  */
export function map(this: any, results: ResultSet,
    fn: (value: Result, index?: number, array?: Result[]) => Result, thisArg: any = this): Result[] {
    return toArray(results).map<Result>(fn, thisArg)
}

/** runs the search and convert the results into an array. Warning, it will convert all the result set to an array which can not optimal on large result sets  */
export function run(s: Search): Result[] {
    return toArray(s.run())
}

/** array.find() like function. it won't convert the whole results into an array but iterate throug the result set to be more performant */
export function find(results: ResultSet, predicate: (r: Result, index?: number) => boolean): Result|undefined {
    let found : Result|undefined
    let index = 0
    results.each(r => {
        if (predicate(r, index)) {
            found = r
            return false
        }
        index++
        return true
    })
    return found
}  

/** array.filter() like function. it won't convert the whole results into an array but iterate throug the result set to be more performant */
export function filter(results: ResultSet, predicate: (r: Result, index?: number) => boolean): Result[] {
    const found : Result[]= [] = []
    let index = 0
    results.each(r => {
        if (predicate(r, index)) {
            found .push(r)
            // return false
        }
        index++
        return true
    })
    return found
} 
