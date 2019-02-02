// TODO: 
// * filters: ['foo',... ] is wrong because it only allow to use filter names as string
// * if I set install columns ['a', 'b'] then whe I call getValue() it should only let me reference those column names


import * as nsSearch from 'N/search';
import { ColumnName, ColumnType, FilterName, FilterSupportedOperators, JoinName, SearchRecordType } from './searchTypingHelpers';


export function create<RecordType extends SearchRecordType>(options: SearchCreateOptions<RecordType>): Search<RecordType> {
  return nsSearch.create(options as any) as any
}

export interface Search<RecordType extends SearchRecordType> {
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

type FilterValue = string | number | Date | string[] | number[] | Date[]

/**
 * IMPORTANT: for some reason for this to work, IT MUST BE IN THIS FILE - IF MOVED TO ANOTHER FILE IT WON'T Auxiliary
 * type used to declare `filters` property so it validates that names exists for record type and also operator is
 * supported by the filter type. For example, if filter 'isfulfillable' of record 'item' is a boolean / checkbox then it
 * will validate that only the operators 'equalTo' and 'is' will be valid - other whise compile error 
 */
type TypedFilterOptions<R extends SearchRecordType,
  F extends FilterName<R> = FilterName<R>,
  // @ts-ignore  TODO: there's an error here but it works.
  > = F extends infer FI ? TypedFilter<R, F> & { name: FI, operator: FilterSupportedOperators<R, FI> } : never

interface SearchCreateOptions<RecordType extends SearchRecordType> {
  type: RecordType
  filters?: TypedFilterOptions<RecordType>[] | (FilterValue[]|FilterValue[][]|FilterValue[][][])
  columns?: TypedColumn<RecordType>[] | ColumnName<RecordType>[]
  title?: string;
  id?: string;
  isPublic?: boolean;
}

/** Encapsulates a single search column in a search.Search. Use the methods and properties available to the Column object to get or set Column properties. */
interface TypedColumn<
  RecordType extends SearchRecordType,
  Column extends ColumnName<RecordType> = ColumnName<RecordType>,
  Join extends JoinName<RecordType> = JoinName<RecordType>,
  > extends nsSearch.Column {

  /** Join ID for a search column as a string. */
  join?: Join
  /** Name of a search column as a string. */
  name: Column
}

// type InferOperator< 
// RecordType extends SearchRecordType,
// Filter extends FilterName<RecordType>,
// O extends FilterSupportedOperators<RecordType, Filter>> = Partial<FilterSupportedOperators<RecordType, Filter>> extends infer O ? O : never

/** Encapsulates a single search column in a search.Search. Use the methods and properties available to the Column object to get or set Column properties. */
export interface TypedFilter<
  RecordType extends SearchRecordType,
  Filter extends FilterName<RecordType> = FilterName<RecordType>,
  Join extends JoinName<RecordType> = JoinName<RecordType>,
  Operator extends FilterSupportedOperators<RecordType, Filter> = FilterSupportedOperators<RecordType, Filter> 
  > {

  /** Join ID for a search column as a string. */
  join?: Join
  /** Name of a search column as a string. */
  name: Filter
  /** Operator used for the search filter. See search.Operator. */
  operator: Operator // InferOperator<RecordType, Filter, Operator>
  /** Summary type for the search filter. Use this property to get or set the value of the summary type. See search.Summary. */
  summary?: nsSearch.Summary;
  /** Formula used by the search filter. Use this property to get or set the formula used by the search filter. */
  formula?: string;

  values?: FilterValue

}

// export interface TypedFilterCreateOptions<
//   RecordType extends SearchRecordType,
//   Filter extends FilterName<RecordType> = FilterName<RecordType>,
//   Join extends JoinName<RecordType> = JoinName<RecordType>,
//   Operator extends FilterSupportedOperators<RecordType, Filter> = FilterSupportedOperators<RecordType, Filter>
//   >
// // extends TypedFilter<RecordType, Filter,Join, Operator>
// {
  /** Join ID for a search column as a string. */
  // join?: Join
  // /** Name of a search column as a string. */
  // name: Filter
  // /** Operator used for the search filter. See search.Operator. */
  // operator: Operator
  // /** Summary type for the search filter. Use this property to get or set the value of the summary type. See search.Summary. */
  // summary?: nsSearch.Summary;
  // /** Formula used by the search filter. Use this property to get or set the formula used by the search filter. */
  // formula?: string;
  // values?: FilterValue
// }



// type ResultValue<RecordType extends SearchRecordType, Column extends ColumnName<RecordType>> = 
export interface Result<RecordType extends SearchRecordType> {
  getValue<C extends ColumnName<RecordType>>(column: TypedColumn<RecordType, C> | C): ColumnType<RecordType, C> // TODO: typed return value
  getText(options: TypedColumn<RecordType> | ColumnName<RecordType>): string;
  recordType: RecordType;
  id: string;
  columns: TypedColumn<RecordType>[];
}

// the rest I had to copy&past from ss2-typings and add generics:

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

interface SearchResultSetEachFunction<RecordType> {
  promise(callback: (result: Result<RecordType>, index: number) => boolean): Promise<boolean>;
  (callback: (result: Result<RecordType>, index: number) => boolean): Result<RecordType> | undefined;
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




// export interface Search2<RecordType extends SearchRecordType, Columns extends TypedColumn<RecordType>[]
// // , ColumnNames extends ValueOfStringKey<Unarray<Columns>, 'name'>
//  > {
//   searchType: RecordType
//   columns: Columns

// }
// // // unwrap up to one level
// type Unarray<T> = T extends Array<infer U> ? U : T;




// // ColumnNames extends ValueOfStringKey<Unarray<Columns>, 'name'> 

// export function search2<RecordType extends SearchRecordType
// , Columns extends TypedColumn<RecordType>[]
// // , ColumnNames extends ValueOfStringKey<Unarray<Columns>, 'name'>
// >(options: SearchCreateOptions2<RecordType, Columns>): 
// Search2<RecordType, Columns> {
//   // return nsSearch.create(options as any) as any
//   throw 1
// }

// interface SearchCreateOptions2<RecordType extends SearchRecordType
// , Columns extends TypedColumn<RecordType>[]> {
//   type: RecordType
//   columns?: Columns
// }

// let ss = search2({type: 'item', columns:})

// export function search2<RecordType extends SearchRecordType>(options: SearchCreateOptions<RecordType>): Search<RecordType> {
//   return nsSearch.create(options as any) as any
// }
// var a = search2|