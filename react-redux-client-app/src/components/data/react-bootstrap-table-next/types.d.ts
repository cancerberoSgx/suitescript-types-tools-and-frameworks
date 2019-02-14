// // import * as React from 'react';

// declare type Row<FieldId extends string, Type extends any = any> = {
//     [fieldName in FieldId]: RowFieldValue;
// };
// declare type RowFieldValue = string | number | Date | TODO;
// interface Column<FieldId extends string> {
//     dataField: FieldId;
//     text: string;
//     sort?: boolean;
//     filter?: ColumnFilter;
// }
// interface ColumnFilter<Value = any> {
//     defaultValue: Value;
// }
// interface BootstrapTableProps<fieldIds extends string> extends PaginationTableProps {
//     remote?: boolean;
//     keyField: string;
//     loading?: boolean;
//     data: Row<fieldIds>[];
//     columns: Column<fieldIds>[];
//     defaultSorted?: Sorted[];
//     filter: TODO;
//     pagination: Pagination;
//     cellEdit?: CellEdit<CellEditProps>;
//     onTableChange?: onTableChange;
//     overlay?: Overlay;
//     noDataIndication?(): JSX.Element;
// }
// declare type TODO = any;
// interface Pagination extends TODO {
// }
// interface PaginationTableProps extends TODO {
// }
// interface CellEdit<Props extends CellEditProps = CellEditProps> {
// }
// interface CellEditProps {
//     mode: string;
// }
// declare type onTableChange = (type: TableChangeType, event: TableChangeEvent) => TODO;
// interface TableChangeEvent {
//     page: number;
//     sizePerPage: number;
//     filters: Filter[];
//     sortField: string;
//     sortOrder: SortOrder;
//     cellEdit: CellEdit;
// }
// declare type TableChangeType = 'cellEdit' | TODO;
// declare type SortOrder = 'asc' | TODO;
// interface Sorted {
//     defaultField: string;
//     order: string;
// }
// interface Filter<Type extends TODO = TODO> {
//     filterVal: FilterVal;
//     filterType: FilterType;
//     comparator: PredefinedComparatorTypes;
// }
// declare type FilterVal = string | TODO;
// declare type FilterType = 'TEXT' | TODO;
// declare type PredefinedComparatorTypes = 'LIKE' | 'EQ' | TODO;
// interface Overlay {
//     spinner: boolean;
//     background: Color;
// }
// declare type Color = string;
// declare module 'react-bootstrap-table-next' {
//     export default class BootstrapTable<FieldIds extends string> extends React.Component<BootstrapTableProps<FieldIds>, TODO>{}
// }
// // export {};
