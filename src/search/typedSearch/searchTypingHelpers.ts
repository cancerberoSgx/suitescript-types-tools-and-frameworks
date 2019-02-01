import { StringKeyOf, ValueOfStringKey, NamedMemberNamesOf, NamedMemberValueOf, NamedMemberValuesOf } from "../../misc/typesUtil";
import { TypedSearchJoinTypes, TypedSearchColumnNames, TypedSearchFilterNames, TypedSearchColumnTypes, TypedSearchFilterTypes, SearchTypesOperatorsSupport } from './generated';

// Helper types. Extract columns, filters, joins names and types and operator support types from generated types



export type SearchRecordType = StringKeyOf<TypedSearchColumnNames>


export type JoinName<RecordType extends SearchRecordType = SearchRecordType> = NamedMemberNamesOf<ValueOfStringKey<TypedSearchJoinTypes, RecordType>>;

type ColumnValue<RecordType extends SearchRecordType = SearchRecordType> = ValueOfStringKey<TypedSearchColumnNames, RecordType>;

type FilterValue<RecordType extends SearchRecordType = SearchRecordType> = ValueOfStringKey<TypedSearchFilterNames, RecordType>;
// let columnValue: ColumnValue<'item'>

export type ColumnName<RecordType extends SearchRecordType = SearchRecordType> = NamedMemberNamesOf<ColumnValue<RecordType>>;

export type FilterName<RecordType extends SearchRecordType = SearchRecordType> = NamedMemberNamesOf<FilterValue<RecordType>>;
// let columnName: ColumnName<'item'> // this is all column names of 'item'

export type ColumnType<RecordType extends SearchRecordType, Column extends ColumnName<RecordType>> = NamedMemberValueOf<NamedMemberValueOf<TypedSearchColumnTypes, RecordType>, Column>

export type ColumnType2<RecordType extends SearchRecordType, Column extends ColumnName<RecordType>> = ValueOfStringKey<ValueOfStringKey<TypedSearchColumnTypes, RecordType>, Column>


type t = NamedMemberValueOf<NamedMemberValueOf<TypedSearchColumnTypes, 'inventoryitem'>, 'isavailable'>
type t2 = ColumnType<'inventoryitem', 'isavailable'>

type FilterType<RecordType extends SearchRecordType, Filter extends FilterName<RecordType>> = ValueOfStringKey<ValueOfStringKey<TypedSearchFilterTypes, RecordType>, Filter> & string;

// type ColumnSupportedOperators<RecordType extends SearchRecordType, Column extends ColumnName<RecordType> = ColumnName<RecordType>, ColumnT extends ColumnType<RecordType, Column> = ColumnType<RecordType, Column>> = ValueOfStringKey<SearchTypesOperatorsSupport, ColumnT>

export type FilterSupportedOperators<RecordType extends SearchRecordType, Filter extends FilterName<RecordType> = FilterName<RecordType>, FilterT extends FilterType<RecordType, Filter> = FilterType<RecordType, Filter>> = ValueOfStringKey<SearchTypesOperatorsSupport, FilterT>;

