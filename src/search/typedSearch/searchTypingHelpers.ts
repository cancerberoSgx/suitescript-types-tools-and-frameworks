import { StringKeyOf, ValueOfStringKey, NamedMemberNamesOf, NamedMemberValueOf, NamedMemberValuesOf, NamedMemberValueOf2 } from "../../misc/typesUtil";
import { TypedSearchJoinTypes, TypedSearchColumnNames, TypedSearchFilterNames, TypedSearchColumnTypes, TypedSearchFilterTypes, SearchTypesOperatorsSupport } from './generated';

// Helper types. Extract columns, filters, joins names and types and operator support types from generated types



export type SearchRecordType = NamedMemberNamesOf<TypedSearchColumnNames>


export type JoinName<RecordType extends SearchRecordType = SearchRecordType> = NamedMemberNamesOf<ValueOfStringKey<TypedSearchJoinTypes, RecordType>>;

type ColumnValue<RecordType extends SearchRecordType = SearchRecordType> = ValueOfStringKey<TypedSearchColumnNames, RecordType>;

export type ColumnName<RecordType extends SearchRecordType = SearchRecordType> = NamedMemberNamesOf<ColumnValue<RecordType>>;

export type ColumnType<RecordType extends SearchRecordType, Column extends ColumnName<RecordType>> = NamedMemberValueOf<NamedMemberValueOf<TypedSearchColumnTypes, RecordType>, Column>

export type ColumnType2<RecordType extends SearchRecordType, Column extends ColumnName<RecordType>> = ValueOfStringKey<ValueOfStringKey<TypedSearchColumnTypes, RecordType>, Column>


// type t = NamedMemberValueOf<NamedMemberValueOf<TypedSearchColumnTypes, 'inventoryitem'>, 'isavailable'>
// type t2 = ColumnType<'inventoryitem', 'isavailable'>


// type FilterValue<RecordType extends SearchRecordType = SearchRecordType> = NamedMemberValueOf<TypedSearchFilterNames, RecordType>;
// let columnValue: ColumnValue<'item'>

export type FilterName<RecordType extends SearchRecordType = SearchRecordType> = NamedMemberNamesOf<NamedMemberValueOf<TypedSearchFilterNames, RecordType>>;
// let columnName: ColumnName<'item'> // this is all column names of 'item'


export type FilterType<RecordType extends SearchRecordType, Filter extends FilterName<RecordType>> = NamedMemberValueOf<NamedMemberValueOf<TypedSearchFilterTypes, RecordType>, Filter> & string;

// type ColumnSupportedOperators<RecordType extends SearchRecordType, Column extends ColumnName<RecordType> = ColumnName<RecordType>, ColumnT extends ColumnType<RecordType, Column> = ColumnType<RecordType, Column>> = ValueOfStringKey<SearchTypesOperatorsSupport, ColumnT>

export type FilterSupportedOperators<
  RecordType extends SearchRecordType,
  Filter extends FilterName<RecordType>,
  FT extends FilterType<RecordType, Filter>=FilterType<RecordType, Filter>
  > =
  NamedMemberValueOf2<Required<SearchTypesOperatorsSupport>, FT>;
;

// export type FilterArray<R extends SearchRecordType,
//   F extends FilterName<R> = FilterName<R>,
//   // @ts-ignore  TODO: there's an error here but it works.
//   > = F extends infer FI ? TypedFilter<R, F> & { name: FI, operator: FilterSupportedOperators<R, FI> } : never

// type rt = 'item';
// type fn = FilterName<rt>
// type ft = FilterType<rt, fn>
// type so = NamedMemberValueOf<Required<SearchTypesOperatorsSupport>, ft>


// type ft = FilterSupportedOperators<'item', 'isavailable'>
// type ftttt = FilterType<'item', fn>
// type ttt = FilterSupportedOperators<'item', 'isavailable'>