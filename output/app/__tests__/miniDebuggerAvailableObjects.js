define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.availableObjects = [
        {
            name: 'LOG',
            doc: 'prints given arguments pretty and push them into the log array so they are available in the results page',
            type: "function LOG(...args: any[]): void",
            example: "LOG('Use LOG()', ['function'], { to: 'print', anyKind: function ofValue() { } })"
        },
        {
            name: 'printValueForLog',
            doc: 'returns a pretty representation of given value, used by LOG()',
            type: "function printValueForLog(value: any): string",
            example: "\nrequire(['N/record'], function (record) {\n  LOG(printValueForLog(record.load))\n})"
        },
        {
            name: 'objectExplorer',
            doc: 'utilities to explore an unknown object, see all its properties, types and values',
            type: "\nconst objectExplorer = {\n  TypeOfValues: TypeOf[]\n  getObjectKeys(o: any): string[]\n  getType(o: any): Type\n  getObjectValueTypes(o: any): NamedTyped[]\n  printObjectValueTypes(o: any): string\n  getObjectKeysTypesAndValues(o: any): NamedTypedValued[]\n  printTyped(o: Typed): string\n  printNamedTyped(o: NamedTyped): string\n  printNamedTypedArray(arr: NamedTyped[]): string\n}\n",
            example: "\nrequire([], function () {\n  LOG('names in global scope: ', objectExplorer.getObjectKeys(this))\n  LOG('names and types in global scope: ', objectExplorer.printObjectValueTypes(this))\n})\n"
        },
        {
            name: 'recordMetadata',
            doc: 'Utilities to inspect record contents, fields, types, sublists, etc',
            type: "function printValueForLog(value: any): string",
            example: "\nrequire(['N/record'], function (record) {\n  var c = record.load({ id: '8', type: 'commercecategory', isDynamic: true })\n  LOG(recordMetadata.getRecordTypeMetadata({record: c, callGetSublistField: true}))\n})\n    "
        },
        {
            name: 'results',
            doc: 'Utilities to iterate, find, filter search results',
            type: "\ninterface results {\n  /** convert a result set to an arrays. Warning, it will convert all the result set to an array\n   * which can not optimal on large result sets  */\n  toArray(results: ResultSet): Result[];\n\n  /** array.map() like function for a resault set. Warning, it will convert all the result set to an\n   * array which can not optimal on large result sets  */\n  map(this: any, results: ResultSet, fn: (value: Result, index?: number, array?: Result[]) => Result, thisArg?: any): Result[];\n\n  /** runs the search and convert the results into an array. Warning, it will convert all the result\n   * set to an array which can not optimal on large result sets  */\n  run(s: Search): Result[];\n\n  /** array.find() like function. it won't convert the whole results into an array but iterate\n   * through the result set to be fast */\n  find(results: ResultSet, predicate: FindPredicate): Result | undefined;\n\n  /** array.filter() like function. it won't convert the whole results into an array but iterate\n   * throug the result set to be more performant */\n  filter(results: ResultSet, predicate: FindPredicate): Result[];\n}\ntype FindPredicate = (r: Result, index?: number) => boolean;\n    ",
            example: "\nrequire(['N/search'], function (search) {\n  var match = results.run(search.create({type: 'commercecategory', columns: ['name']}))\n    .filter(function(r){return r.getValue('name').indexOf('d')!==-1})\n    .map(function(r){return r.getValue('name')})\n  LOG(match)\n})\n    "
        },
    ];
});
