"use strict";
// // TODO: 
// //  * createFilter(), createColumn(), join()(), createCOndition()
// // * filters: ['foo',... ] is wrong because it only allow to use filter names as string
// // * if I set install columns ['a', 'b'] then whe I call getValue() it should only let me reference those column names
// import * as nsSearch from 'N/search';
// // import { SearchRecordType } from "../../sharedTypes";
// import { ColumnName, FilterName, FilterSupportedOperators, JoinName, SearchRecordType, ColumnType } from './searchTypingHelpers';
// import { UnionOf } from '../../misc/misc';
// // import { StringKeyOf } from '../../misc/misc';
// // import { TypedSearchColumnNames } from './generated';
// // import { ValueOfNumberKey, ValueOfStringKey } from '../../misc/misc';
// export function search<RecordType extends SearchRecordType, Columns extends ColumnName<RecordType>[] = ColumnName<RecordType>[]>(options: SearchCreateOptions<RecordType>): Search<RecordType, Columns> {
//   return nsSearch.create(options as any) as any
// }
// export interface Search<RecordType extends SearchRecordType, Columns extends ColumnName<RecordType>[] = ColumnName<RecordType>[]> {
//   searchType: RecordType
//   searchId: number;
//   filters: TypedFilter<RecordType>[]
//   filterExpression: any[];
//   columns: TypedColumn<RecordType>[] // TODO: Columns 
//   title: string;
//   id: string;
//   isPublic: boolean;
//   save(): number;
//   run(): ResultSet<RecordType, Columns>;
//   runPaged: SearchRunPagedFunction
// }
// interface SearchCreateOptions<RecordType extends SearchRecordType, Columns extends ColumnName<RecordType>[] = ColumnName<RecordType>[]> {
//   type: RecordType
//   filters?: TypedFilter<RecordType>[] | FilterName<RecordType>[]
//   columns?: TypedColumn<RecordType>[] | Columns // TODO: union of Columns
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
// // type ResultValue<RecordType extends SearchRecordType, Column extends ColumnName<RecordType>> = 
// export interface Result<RecordType extends SearchRecordType, Columns extends ColumnName<RecordType>[] = ColumnName<RecordType>[]> {
//   getValue(column: TypedColumn<RecordType, UnionOf<Columns>> | UnionOf<Columns>): ColumnType<RecordType, UnionOf<Columns>> // TODO: typed return value
//   getText(options: TypedColumn<RecordType> | ColumnName<RecordType>): string;
//   recordType: RecordType;
//   id: string;
//   columns: TypedColumn<RecordType>[]; // TODO: UnionOf<Columns>
// }
// // the rest I had to copy&past from ss2-typings and add generics:
// interface SearchResultSetGetRangeOptions {
//   start: number;
//   end: number;
// }
// interface SearchResultSetGetRangeFunction<RecordType extends SearchRecordType> {
//   promise(options: SearchResultSetGetRangeOptions): Promise<Result<RecordType>[]>;
//   (options: SearchResultSetGetRangeOptions): Result<RecordType>[];
// }
// interface SearchResultSetEachFunction<RecordType extends SearchRecordType> {
//   promise(callback: (result: Result<RecordType>, index: number) => boolean): Promise<boolean>;
//   (callback: (result: Result<RecordType>, index: number) => boolean): void;
// }
// export interface ResultSet<RecordType extends SearchRecordType, Columns extends ColumnName<RecordType>[] = ColumnName<RecordType>[]> {
//   each: SearchResultSetEachFunction<RecordType, Columns>;
//   getRange: SearchResultSetGetRangeFunction<RecordType>;
//   columns: Columns
// }
// interface SearchResultSetEachFunction<RecordType, Columns extends ColumnName<RecordType>[] = ColumnName<RecordType>[]> {
//   promise(callback: (result: Result<RecordType>, index: number) => boolean): Promise<boolean>;
//   (callback: (result: Result<RecordType, Columns>, index: number) => boolean): Result<RecordType, Columns>|undefined;
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
// // type Unarray<T> = T extends Array<infer U> ? U : T;
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
