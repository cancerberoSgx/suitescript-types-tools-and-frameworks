import { StringKeyOf, ValueOfStringKey } from '../../misc/misc';
import { SearchRecordType } from "../../sharedTypes";
import { TypedSearchJoinTypes, TypedSearchColumnNames, TypedSearchFilterNames, TypedSearchColumnTypes, TypedSearchFilterTypes, SearchTypesOperatorsSupport } from './generated';

// Helper types. Extract columns, filters, joins names and types and operator support types from generated types

export type JoinName<RecordType extends SearchRecordType = SearchRecordType> = StringKeyOf<ValueOfStringKey<TypedSearchJoinTypes, RecordType>>;

type ColumnValue<RecordType extends SearchRecordType = SearchRecordType> = ValueOfStringKey<TypedSearchColumnNames, RecordType>;

type FilterValue<RecordType extends SearchRecordType = SearchRecordType> = ValueOfStringKey<TypedSearchFilterNames, RecordType>;
// let columnValue: ColumnValue<'item'>

export type ColumnName<RecordType extends SearchRecordType = SearchRecordType> = StringKeyOf<ColumnValue<RecordType>>;

export type FilterName<RecordType extends SearchRecordType = SearchRecordType> = StringKeyOf<FilterValue<RecordType>>;
// let columnName: ColumnName<'item'> // this is all column names of 'item'

type ColumnType<RecordType extends SearchRecordType, Column extends ColumnName<RecordType>> = ValueOfStringKey<ValueOfStringKey<TypedSearchColumnTypes, RecordType>, Column> & string;

type FilterType<RecordType extends SearchRecordType, Filter extends FilterName<RecordType>> = ValueOfStringKey<ValueOfStringKey<TypedSearchFilterTypes, RecordType>, Filter> & string;

// type ColumnSupportedOperators<RecordType extends SearchRecordType, Column extends ColumnName<RecordType> = ColumnName<RecordType>, ColumnT extends ColumnType<RecordType, Column> = ColumnType<RecordType, Column>> = ValueOfStringKey<SearchTypesOperatorsSupport, ColumnT>

export type FilterSupportedOperators<RecordType extends SearchRecordType, Filter extends FilterName<RecordType> = FilterName<RecordType>, FilterT extends FilterType<RecordType, Filter> = FilterType<RecordType, Filter>> = ValueOfStringKey<SearchTypesOperatorsSupport, FilterT>;

