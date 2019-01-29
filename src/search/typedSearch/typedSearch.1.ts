// // TODO: 
// //  * createFilter(), createColumn(), join()(), createCOndition()
// // * filters: ['foo',... ] is wrong because it only allow to use filter names as string
// // * if I set install columns ['a', 'b'] then whe I call getValue() it should only let me reference those column names


// import * as nsSearch from 'N/search';
// import { SearchRecordType } from "../../sharedTypes";
// import { ColumnName, FilterName, FilterSupportedOperators, JoinName } from './searchTypingHelpers';
// import { ValueOfNumberKey, ValueOfStringKey, NumberKeyOf } from '../../misc/misc';


// export function search<RecordType extends SearchRecordType, C extends TypedColumn<RecordType>[]>(options: SearchCreateOptions<RecordType, C>): Search<RecordType, C> {
//   return nsSearch.create(options as any) as any
// }

// export interface Search<RecordType extends SearchRecordType, C extends TypedColumn<RecordType>[]> {
//   searchType: RecordType
//   searchId: number;
//   filters: TypedFilter<RecordType>[]
//   filterExpression: any[];
//   columns: C
//   title: string;
//   id: string;
//   isPublic: boolean;
//   save(): number;
//   run(): ResultSet<RecordType, C>;
//   runPaged: SearchRunPagedFunction
// }

// interface SearchCreateOptions<RecordType extends SearchRecordType, C extends TypedColumn<RecordType>[]> {
//   type: RecordType
//   filters?: TypedFilter<RecordType>[] | FilterName<RecordType>[]
//   columns?: C
//   title?: string;
//   id?: string;
//   isPublic?: boolean;
// }

// /** Encapsulates a single search column in a search.Search. Use the methods and properties available to the Column object to get or set Column properties. */
// interface TypedColumn<
//   RecordType extends SearchRecordType,
//   Column extends ColumnName<RecordType> = ColumnName<RecordType>,
//   Join extends JoinName<RecordType> = JoinName<RecordType>,
//   > extends nsSearch.Column {

//   /** Join ID for a search column as a string. */
//   join?: Join
//   /** Name of a search column as a string. */
//   name: Column
// }


// /** Encapsulates a single search column in a search.Search. Use the methods and properties available to the Column object to get or set Column properties. */
// interface TypedFilter<
//   RecordType extends SearchRecordType,
//   Join extends JoinName<RecordType> = JoinName<RecordType>,
//   Filter extends FilterName<RecordType> = FilterName<RecordType>
//   > {

//   /** Join ID for a search column as a string. */
//   join: Join
//   /** Name of a search column as a string. */
//   name: Filter
//   /** Operator used for the search filter. See search.Operator. */
//   operator: FilterSupportedOperators<RecordType, Filter>
//   /** Summary type for the search filter. Use this property to get or set the value of the summary type. See search.Summary. */
//   summary: nsSearch.Summary;
//   /** Formula used by the search filter. Use this property to get or set the formula used by the search filter. */
//   formula: string;
// }

// // type InArray<A> = 

// type Unwrap<A extends any[]> = Partial<ValueOfNumberKey<A, NumberKeyOf<A>>>

// function j<A extends any[]>(a: A):Unwrap<A> {throw 1}
// let f = j([1,2,3])



// // export type ValueOfStringKey<T extends { [k: string]: any }, K extends string> = T[K] extends undefined ? never : T[K];|

// type ColumnNameUnion<RecordType extends SearchRecordType, C extends TypedColumn<RecordType>[], I extends keyof C = keyof C, N extends keyof C[I] = keyof C[I] > = C[I][N]


// export interface Result<RecordType extends SearchRecordType, C extends TypedColumn<RecordType>[]> {
//   getValue(column: TypedColumn<RecordType, ColumnNameUnion<RecordType, C> | ColumnName<RecordType>): boolean | string | string[]; // TODO: typed return value
//   getText(options: TypedColumn<RecordType> | ColumnName<RecordType>): string;
//   recordType: RecordType | string;
//   id: string;
//   columns: TypedColumn<RecordType>[];
// }

// // the rest I had to copy&past from ss2-typings and add generics:

// interface SearchResultSetGetRangeOptions {
//   start: number;
//   end: number;
// }

// interface SearchResultSetGetRangeFunction<RecordType extends SearchRecordType, C extends TypedColumn<RecordType>[]> {
//   promise(options: SearchResultSetGetRangeOptions): Promise<Result<RecordType, C>[]>;
//   (options: SearchResultSetGetRangeOptions): Result<RecordType, C>[];
// }

// interface SearchResultSetEachFunction<RecordType extends SearchRecordType, C extends TypedColumn<RecordType>[]> {
//   promise(callback: (result: Result<RecordType, C>, index: number) => boolean): Promise<boolean>;
//   (callback: (result: Result<RecordType, C>, index: number) => boolean): void;
// }

// export interface ResultSet<RecordType extends SearchRecordType, C extends TypedColumn<RecordType>[]> {
//   each: SearchResultSetEachFunction<RecordType, C>;
//   getRange: SearchResultSetGetRangeFunction<RecordType,C>;
//   columns: C;
// }

// interface RunPagedOptions {
//   /**
//    * Maximum number of entries per page.
//    * There is an upper limit, a lower limit, and a default setting:
//    * - The maximum number allowed is 1000.
//    * - The minimum number allowed is 5.
//    * - By default, the page size is set to 50 entries per page.
//    */
//   pageSize?: number;
// }

// interface SearchRunPagedFunction {
//   promise(options?: RunPagedOptions): Promise<nsSearch.PagedData>;
//   (options?: RunPagedOptions): nsSearch.PagedData;
// }




// // export interface Search2<RecordType extends SearchRecordType, Columns extends TypedColumn<RecordType>[]
// // // , ColumnNames extends ValueOfStringKey<Unarray<Columns>, 'name'>
// //  > {
// //   searchType: RecordType
// //   columns: Columns
  
// // }
// // // // unwrap up to one level
// type Unarray<T> = T extends Array<infer U> ? U : T;




// // // ColumnNames extends ValueOfStringKey<Unarray<Columns>, 'name'> 

// // export function search2<RecordType extends SearchRecordType
// // , Columns extends TypedColumn<RecordType>[]
// // // , ColumnNames extends ValueOfStringKey<Unarray<Columns>, 'name'>
// // >(options: SearchCreateOptions2<RecordType, Columns>): 
// // Search2<RecordType, Columns> {
// //   // return nsSearch.create(options as any) as any
// //   throw 1
// // }

// // interface SearchCreateOptions2<RecordType extends SearchRecordType
// // , Columns extends TypedColumn<RecordType>[]> {
// //   type: RecordType
// //   columns?: Columns
// // }

// // let ss = search2({type: 'item', columns:})

// // export function search2<RecordType extends SearchRecordType>(options: SearchCreateOptions<RecordType>): Search<RecordType> {
// //   return nsSearch.create(options as any) as any
// // }
// // var a = search2|