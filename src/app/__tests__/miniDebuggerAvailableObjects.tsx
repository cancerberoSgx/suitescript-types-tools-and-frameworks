export interface AvailableObject{name: string, doc: string, type: string, example?: string}
export const availableObjects: AvailableObject[] = [
  {
    name: 'LOG',
    doc: 'prints given arguments pretty and push them into the log array so they are available in the results page',
    type: `function LOG(...args: any[]): void`, 
    example: `LOG('Use LOG()', ['function'], { to: 'print', anyKind: function ofValue() { } })`
  },
  {
    name: 'printValueForLog',
    doc: 'returns a pretty representation of given value, used by LOG()',
    type: `function printValueForLog(value: any): string`, 
    example: `
require(['N/record'], function (record) {
  LOG(printValueForLog(record.load))
})`
  },
  {
    name: 'objectExplorer', 
    doc: 'utilities to explore an unknown object, see all its properties, types and values',
    type: `
const objectExplorer = {
  TypeOfValues: TypeOf[]
  getObjectKeys(o: any): string[]
  getType(o: any): Type
  getObjectValueTypes(o: any): NamedTyped[]
  printObjectValueTypes(o: any): string
  getObjectKeysTypesAndValues(o: any): NamedTypedValued[]
  printTyped(o: Typed): string
  printNamedTyped(o: NamedTyped): string
  printNamedTypedArray(arr: NamedTyped[]): string
}
`, 
example: `
require([], function () {
  LOG('names in global scope: ', objectExplorer.getObjectKeys(this))
  LOG('names and types in global scope: ', objectExplorer.printObjectValueTypes(this))
})
`
  },

  {
    name: 'recordMetadata',
    doc: 'Utilities to inspect record contents, fields, types, sublists, etc',
    type: `function printValueForLog(value: any): string`, 
    example: `
require(['N/record'], function (record) {
  var c = record.load({ id: '8', type: 'commercecategory', isDynamic: true })
  LOG(recordMetadata.getRecordTypeMetadata({record: c, callGetSublistField: true}))
})
    `
  },

  {
    name: 'results',
    doc: 'Utilities to iterate, find, filter search results',
    type: `
interface results {
  /** convert a result set to an arrays. Warning, it will convert all the result set to an array
   * which can not optimal on large result sets  */
  toArray(results: ResultSet): Result[];

  /** array.map() like function for a resault set. Warning, it will convert all the result set to an
   * array which can not optimal on large result sets  */
  map(this: any, results: ResultSet, fn: (value: Result, index?: number, array?: Result[]) => Result, thisArg?: any): Result[];

  /** runs the search and convert the results into an array. Warning, it will convert all the result
   * set to an array which can not optimal on large result sets  */
  run(s: Search): Result[];

  /** array.find() like function. it won't convert the whole results into an array but iterate
   * through the result set to be fast */
  find(results: ResultSet, predicate: FindPredicate): Result | undefined;

  /** array.filter() like function. it won't convert the whole results into an array but iterate
   * throug the result set to be more performant */
  filter(results: ResultSet, predicate: FindPredicate): Result[];
}
type FindPredicate = (r: Result, index?: number) => boolean;
    `, 
    example: `
require(['N/search'], function (search) {
  var match = results.run(search.create({type: 'commercecategory', columns: ['name']}))
    .filter(function(r){return r.getValue('name').indexOf('d')!==-1})
    .map(function(r){return r.getValue('name')})
  LOG(match)
})
    `
  },



] 
