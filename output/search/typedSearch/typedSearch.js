define(["require", "exports", "N/search"], function (require, exports, nsSearch) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function search(options) {
        return nsSearch.create(options);
        // throw 1
        // const r = record.create(options)
        // return recordConstructorsImpl[options.type](r) as any
    }
    exports.search = search;
});
// type FilterSupportedOperators<RecordType extends SearchRecordType, Filter extends FilterName<RecordType> = FilterName<RecordType>, FilterT extends FilterType<RecordType, Filter> = FilterType<RecordType, Filter>> = ValueOfStringKey<SearchTypesOperatorsSupport, FilterT>
// console.log(cSupport);
// type RecordColumns<RecordType extends SearchRecordType = SearchRecordType, Column extends ColumnName<RecordType> = ColumnName<RecordType>> 
// = 
// ValueOfStringKey<ColumnValue<RecordType>, Column>
// let recordColumns: RecordColumns<'item', 'location'>
// let a: ValueOfStringKey<TypedSearchColumnTypes, 'item'>
// RecordColumns<'item', 'location'>
// ValueOfStringKey<ValueOfStringKey<TypedSearchColumnTypes, 'item'>, 'location'>
// =null as any
// console.log(a.accbookrevrecforecastrule);
// const c = typeof a
// type ColumnTypeName<
// RecordType extends SearchRecordType, 
// Column extends ColumnName<RecordType> = ColumnName<RecordType>,
// // RecordColumnType extends ValueOfStringKey<RecordColumns<RecordType, Column>, 'type'>
// > 
// = 
// ValueOfStringKey<TypedSearchColumnNames, RecordType>
// // StringKeyOf<ValueOfStringKey<TypedSearchColumnTypes, RecordType>>
// ;
// create({type: 'item'}).columns.push({name: 'locationasd'})
// /** Encapsulates a search filter used in a search. Use the properties for the Filter object to get and set the filter properties. */
// export interface Filter {
//   /** Name or internal ID of the search field as a string. */
//   name: string;
//   /** Join ID for the search filter as a string. */
//   join: string;
//   /** Operator used for the search filter. See search.Operator. */
//   operator: Operator;
//   /** Summary type for the search filter. Use this property to get or set the value of the summary type. See search.Summary. */
//   summary: Summary;
//   /** Formula used by the search filter. Use this property to get or set the formula used by the search filter. */
//   formula: string;
// }
// /** Encapsulates a single search column in a search.Search. Use the methods and properties available to the Column object to get or set Column properties. */
// export interface Column {
//   /** Returns the search column for which the minimal or maximal value should be found when returning the search.Column value. */
//   setWhenOrderedBy?(options: SearchColumnSetWhenOrderedByOptions): Column;
//   /** Name of a search column as a string. */
//   name: string;
//   /** Join ID for a search column as a string. */
//   join?: string;
//   /** Returns the summary type for a search column. */
//   summary?: Summary;
//   /** Formula used for a search column as a string. To set this value, you must use formulatext, formulanumeric, formuladatetime, formulapercent, or formulacurrency. */
//   formula?: string;
//   /** Label used for the search column. You can only get or set custom labels with this property. */
//   label?: string;
//   /** Special function applied to values in a search column. See Help for Supported Functions. */
//   function?: string
//   /** The sort order of the column. Use the search.Sort enum to set the value. */
//   sort?: Sort;
// }
// /** Encapsulates a search filter used in a search. Use the properties for the Filter object to get and set the filter properties. */
// interface FilterTypes {
//   /** Name or internal ID of the search field as a string. */
//   name: string;
//   /** Join ID for the search filter as a string. */
//   join: ValueOfStringKey<SearchJoinTypes>
//   /** Operator used for the search filter. See search.Operator. */
//   operator: Operator;
//   /** Summary type for the search filter. Use this property to get or set the value of the summary type. See search.Summary. */
//   summary: Summary;
//   /** Formula used by the search filter. Use this property to get or set the formula used by the search filter. */
//   formula: string;
// }
// search
// interface SearchFilter<Fields extends EmptyObject = EmptyObject> {
//   field: StringKeyOf<Fields>
// }
// interface SearchFilterTypeOperators {
// }
// interface FilterTypes{
// }
// interface SearchOptions<RecordType extends SearchRecordType, F extends ValueOfStringKey<FilterType, RecordType>>{
// type: RecordType
// filters: FilterTypes[]
// }
// search<T extends SearchRecordType>
// export function findMatrixParent(id?: string): Result | undefined {
//   const filter = [
//       ['matrix', Operator.IS, 'T'],
//       'AND',
//       ['matrixchild', Operator.IS, 'F']
//   ]
//   return find(create({
//       type: Type.ITEM,
//       filters: id ? [
//           ['internalid', Operator.ANYOF, id],
//           'AND', filter] : filter
//   }).run(), result => {
//       return true
//   })
// }
// var search = query.create({
//   type: query.Type.CUSTOMER
// }); 
// var salesrep = search.join({
//   fieldId: 'salesrep'
// });
// var cond1 = search.createCondition({
//   fieldId: 'id',
//   operator: query.Operator.EQUAL,
//   values: 107
// });
// var cond2 = search.createCondition({
//   fieldId: 'id',
//   operator: query.Operator.EQUAL,
//   values: 2647
// });
// var cond3 = salesrep.createCondition({
//   fieldId: 'email',
//   operator: query.Operator.START_WITH_NOT,
//   values: 'foo'
// });
// search.condition = search.and(
//   cond3, search.not(
//       search.or(cond1, cond2)
//   )
// );
// var resultSet = search.run();
