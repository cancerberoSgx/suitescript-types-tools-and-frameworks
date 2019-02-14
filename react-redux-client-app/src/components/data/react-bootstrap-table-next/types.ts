
// class BootstrapTable<FieldIds extends string> extends React.Component<BootstrapTableProps<FieldIds>, TODO>{ }

// type Row<FieldId extends string, Type extends any=any> = { [fieldName in FieldId]: RowFieldValue }

// type RowFieldValue = string | number | Date | TODO


// interface Column<FieldId extends string> {
//   dataField: FieldId
//   text: string
//   sort?: boolean
//   filter?: ColumnFilter
// }
// interface ColumnFilter<Value=any> {
//   defaultValue: Value
// }

// interface BootstrapTableProps<fieldIds extends string> extends PaginationTableProps {
//   remote?: boolean
//   keyField: string
//   loading?: boolean
//   data: Row<fieldIds>[]
//   columns: Column<fieldIds>[]
//   defaultSorted?: Sorted[]
//   filter?: TODO
//   pagination?: Pagination
//   cellEdit?: CellEdit<CellEditProps>
//   onTableChange?: onTableChange
//   overlay?: Overlay
//   noDataIndication?(): JSX.Element
// }


// type TODO = any



// // PAGINATION


// interface Pagination extends TODO {

// }

// interface PaginationOptions {
//   page: number,
//   sizePerPage: number,
//   totalSize: string
//   sizePerPageRenderer: SizePerPageRenderer

// }
// type PaginationProvider = React.Component<{
//   pagination: Pagination, children: React.Component<
//     {
//       paginationProps: PaginationProps,
//       paginationTableProps: PaginationTableProps
//     }>
// }>

// interface PaginationProps extends TODO { }
// interface PaginationTableProps extends TODO { }

// interface SizePerPageRenderer {
//   options: TODO[]
//   currSizePerPage: number
//   onSizePerPageChange: TODO
// }


// // EDIT / REMOTE

// interface CellEdit<Props extends CellEditProps=CellEditProps> {

// }
// interface CellEditProps {
//   mode: string
// }

// type onTableChange = (type: TableChangeType, event: TableChangeEvent) => TODO
// interface TableChangeEvent {
//   page: number,
//   sizePerPage: number,
//   filters: Filter<any>[],
//   sortField: string,
//   sortOrder: SortOrder,
//   cellEdit: CellEdit
// }

// type TableChangeType = 'cellEdit' | TODO
// type SortOrder = 'asc' | TODO






// // SORT / FILTERING

// interface Sorted {
//   defaultField: string
//   order: string
// }

// interface FilterOptions {
//   page: number,
//   sizePerPage: number,
//   totalSize: string
//   sizePerPageRenderer: SizePerPageRenderer

// }

// interface Filter<Type extends TODO> {
//   filterVal: FilterVal,
//   filterType: FilterType,
//   comparator: PredefinedComparatorTypes //| (a: Type, b: Type): TODO
// }
// type FilterVal = string | TODO
// type FilterType = 'TEXT' | TODO
// type PredefinedComparatorTypes = 'LIKE' | 'EQ' | TODO
// type PredefinedComparators = { [type in PredefinedComparatorTypes]: TODO }



// // OTHER

// interface Overlay {
//   spinner: boolean, background: Color
// }
// type Color = string

// interface FilterProps<Type extends TODO> {
//   getFilter?(filter: Filter<Type>): TODO
// }
// interface TextFilterProps<Type> extends FilterProps<Type> {
//   caseSensitive?: true
// }

// declare module 'react-bootstrap-table-next' {
//   export default BootstrapTable
// }


// declare module "react-bootstrap-table2-filter" {
//   export default function filterFactory<Type extends TODO>(options?: FilterOptions): Filter<Type>
//   export function textFilter(props: TextFilterProps<TODO>): ColumnFilter
//   export function dateFilter(props: { getFilter(filter: Filter<FilterType | TODO>): TODO }): ColumnFilter
//   export var Comparator: PredefinedComparators
// }
// declare module "react-bootstrap-table2-paginator" {
//   export default function paginationFactory(options?: PaginationOptions): Pagination
// }
// declare module "react-bootstrap-table2-editor" {

// }
// declare module "react-bootstrap-table2-overlay"
// // declare module "jquery"
