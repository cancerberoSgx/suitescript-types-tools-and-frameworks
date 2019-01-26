import { StringKeyOf, EmptyObject, ValueOfStringKey } from '../../misc/misc';
import { SearchRecordType } from './searchTypes';
import * as nsSearch from 'N/search'
import { itemSearchJoin, itemSearchColumn, itemSearchFilter } from './generated/item';

interface itemSearchFilterTypes{
  account: 'select'
  }
interface itemSearchColumnTypes{
location: 'checkbox'
}
interface SearchTypesOperatorsSupport {
  // [k:string]:string
  checkbox: 'anyof'|'boo'|'asd'
  select: 'foo'|'bar'
}

// interface TypedSearchColumn
interface TypedSearchFilterTypes<>{
item: itemSearchFilterTypes
}

interface TypedSearchColumnNames{
item: Required< itemSearchColumn>
}
interface TypedSearchColumnTypes{
item: itemSearchColumnTypes
}

interface TypedSearchFilterNames{
  item: Required< itemSearchFilter>
  }
interface TypedSearchJoinTypes{
  item: itemSearchJoin, // ETC
}

interface TypedSearchJoinTypes{
  item: itemSearchJoin, // ETC
}

type JoinName<RecordType extends SearchRecordType = SearchRecordType> = StringKeyOf<ValueOfStringKey<TypedSearchJoinTypes, RecordType>>

type ColumnValue<RecordType extends SearchRecordType = SearchRecordType> = ValueOfStringKey<TypedSearchColumnNames, RecordType>
type FilterValue<RecordType extends SearchRecordType = SearchRecordType> = ValueOfStringKey<TypedSearchFilterNames, RecordType>
let columnValue: ColumnValue<'item'>

type ColumnName<RecordType extends SearchRecordType = SearchRecordType> = StringKeyOf<ColumnValue<RecordType>>
type FilterName<RecordType extends SearchRecordType = SearchRecordType> = StringKeyOf<FilterValue<RecordType>>
let columnName: ColumnName<'item'> // this is all column names of 'item'

// type ColumnType<RecordType extends SearchRecordType, Column extends ColumnName<RecordType>> = ValueOfStringKey<itemSearchColumnTypes, Column>
// let ct: ColumnType<'item', 'location'> // this is 'checkbox'

type ColumnType<RecordType extends SearchRecordType, Column extends ColumnName<RecordType>> = ValueOfStringKey<ValueOfStringKey<TypedSearchColumnTypes, RecordType>, Column>&string

type FilterType<RecordType extends SearchRecordType, Filter extends FilterName<RecordType>> = ValueOfStringKey<ValueOfStringKey<TypedSearchFilterTypes, RecordType>, Filter>&string

let ct: FilterType<'item', 'location'> // this is 'checkbox'

type ColumnSupportedOperators<RecordType extends SearchRecordType, Column extends ColumnName<RecordType> = ColumnName<RecordType>, ColumnT extends ColumnType<RecordType, Column> = ColumnType<RecordType, Column>> = ValueOfStringKey<SearchTypesOperatorsSupport, ColumnT>

type FilterSupportedOperators<RecordType extends SearchRecordType, Filter extends FilterName<RecordType> = FilterName<RecordType>, FilterT extends FilterType<RecordType, Filter> = FilterType<RecordType, Filter>> = ValueOfStringKey<SearchTypesOperatorsSupport, FilterT>
let  cSupport : ColumnSupportedOperators<'item', 'location'> = null as any as ColumnSupportedOperators<'item', 'location'>




/** Encapsulates a single search column in a search.Search. Use the methods and properties available to the Column object to get or set Column properties. */
interface TypedColumn<
RecordType extends SearchRecordType, 
Join extends JoinName<RecordType> = JoinName<RecordType>,
Column extends ColumnName<RecordType> = ColumnName<RecordType>> extends nsSearch.Column {

  /** Join ID for a search column as a string. */
  join?: Join

   /** Name of a search column as a string. */
  name: Column

 
}

// let c: TypedColumn<'item'> = null as any
// c.join = 'effectiverevision'


/** Encapsulates a single search column in a search.Search. Use the methods and properties available to the Column object to get or set Column properties. */
interface TypedFilter<
RecordType extends SearchRecordType, 

Join extends StringKeyOf< (ValueOfStringKey<TypedSearchJoinTypes, RecordType>)> = StringKeyOf< (ValueOfStringKey<TypedSearchJoinTypes, RecordType>)>,

Filter extends StringKeyOf< (ValueOfStringKey<TypedSearchFilterTypes, RecordType>)> = StringKeyOf< (ValueOfStringKey<TypedSearchFilterTypes, RecordType>)>,

// Operator extends any = any
> {

  /** Join ID for a search column as a string. */
  join: Join

   /** Name of a search column as a string. */
  name: Filter
      /** Operator used for the search filter. See search.Operator. */

  operator: FilterSupportedOperators<RecordType, Filter>
      /** Summary type for the search filter. Use this property to get or set the value of the summary type. See search.Summary. */
      summary: nsSearch.Summary;
      /** Formula used by the search filter. Use this property to get or set the formula used by the search filter. */
      formula: string;
}
 interface SearchCreateOptions<RecordType extends SearchRecordType> {
  type: RecordType
  filters?: TypedFilter<RecordType>[] 
  columns?: TypedColumn<RecordType>[]
  title?: string;
  id?: string;
  isPublic?: boolean;
}

export interface Search<RecordType extends SearchRecordType>  {
  searchType: RecordType
  searchId: number;
  filters: TypedFilter<RecordType>[] 
  filterExpression: any[];
  columns: TypedColumn<RecordType>[]
  title: string;
  id: string;
  isPublic: boolean;
  save(): number;
  run(): ResultSet<RecordType>;
  runPaged: SearchRunPagedFunction
}
export interface Result<RecordType extends SearchRecordType> {
  getValue(column: TypedColumn<RecordType> | ColumnName<RecordType>): boolean | string | string[]; // TODO: typed return value
  getText(options: TypedColumn<RecordType> |  ColumnName<RecordType>): string;
  recordType: RecordType | string;
  id: string;
  columns: TypedColumn<RecordType>[];
}

interface SearchResultSetGetRangeOptions {
  start: number;
  end: number;
}

interface SearchResultSetGetRangeFunction<RecordType extends SearchRecordType> {
  promise(options: SearchResultSetGetRangeOptions): Promise<Result<RecordType>[]>;
  (options: SearchResultSetGetRangeOptions): Result<RecordType>[];
}

interface SearchResultSetEachFunction<RecordType extends SearchRecordType> {
  promise(callback: (result: Result<RecordType>, index: number) => boolean): Promise<boolean>;
  (callback: (result: Result<RecordType>, index: number) => boolean): void;
}

export interface ResultSet<RecordType extends SearchRecordType> {
  each: SearchResultSetEachFunction<RecordType>;
  getRange: SearchResultSetGetRangeFunction<RecordType>;
  columns: TypedColumn<RecordType>[];
}



export function search<RecordType extends SearchRecordType>(options: SearchCreateOptions<RecordType>): Search<RecordType> {
  throw 1
  // const r = record.create(options)
  // return recordConstructorsImpl[options.type](r) as any
}

const s = search({type: 'item'})
const r = s.run().each(f=>{
  f.getValue('location')
  return false
})
r.


interface SearchResultSetEachFunction<RecordType> {
  promise(callback: (result: Result<RecordType>, index: number) => boolean): Promise<boolean>;
  (callback: (result: Result<RecordType>, index: number) => boolean): void;
}
interface RunPagedOptions {
  /**
   * Maximum number of entries per page.
   * There is an upper limit, a lower limit, and a default setting:
   * - The maximum number allowed is 1000.
   * - The minimum number allowed is 5.
   * - By default, the page size is set to 50 entries per page.
   */
  pageSize?: number;
}



interface SearchRunPagedFunction {
  promise(options?: RunPagedOptions): Promise<nsSearch.PagedData>;
  (options?: RunPagedOptions): nsSearch.PagedData;
}








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