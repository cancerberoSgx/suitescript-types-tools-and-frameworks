/// <reference types="react" />
declare class BootstrapTable<FieldIds extends string> extends React.Component<BootstrapTableProps<FieldIds>, TODO> {
}
declare type Row<FieldId extends string, Type extends any = any> = {
  [fieldName in FieldId]: RowFieldValue;
};
declare type RowFieldValue = string | number | Date | TODO;
interface Column<FieldId extends string> {
  dataField: FieldId;
  text: string;
  sort?: boolean;
  filter?: ColumnFilter;
}
interface BootstrapTableProps<fieldIds extends string = string> extends PaginationTableProps, PaginationProps {
  remote?: boolean;
  keyField?: string;
  loading?: boolean;
  data: Row<fieldIds>[];
  columns?: Column<fieldIds>[];
  defaultSorted?: Sorted[];
  filter?: FilterProps<TODO>;
  pagination?: Pagination;
  cellEdit?: CellEdit<CellEditProps>;
  onTableChange?: onTableChange;
  overlay?: Overlay;
  noDataIndication?(): JSX.Element;
}
declare type TODO = any;
interface Pagination extends TODO {
}
interface PaginationProps {
  page?: number;
  sizePerPage?: number;
  totalSize?: string;
  sizePerPageRenderer?: SizePerPageRenderer;
}
declare type PaginationProvider = React.Component<{
  pagination: Pagination;
  children: React.Component<{
    paginationProps: PaginationProps;
    paginationTableProps: PaginationTableProps;
  }>;
}>;
interface PaginationProps extends TODO {
}
interface PaginationTableProps extends TODO {
}
interface SizePerPageRenderer {
  options: TODO[];
  currSizePerPage: number;
  onSizePerPageChange: TODO;
}
interface CellEdit<Props extends CellEditProps = CellEditProps> {
}
interface CellEditProps {
  mode: string;
}
declare type onTableChange = (type: TableChangeType, event: TableChangeEvent) => TODO;
interface TableChangeEvent {
  page: number;
  sizePerPage: number;
  filters: Filter<any>[];
  sortField: string;
  sortOrder: SortOrder;
  cellEdit: CellEdit;
}
declare type TableChangeType = 'cellEdit' | TODO;
declare type SortOrder = 'asc' | 'desc' | TODO;
interface Sorted {
  defaultField?: string;
  order?: string;
}



interface FilterOptions {
  page: number;
  sizePerPage: number;
  totalSize: string;
  sizePerPageRenderer: SizePerPageRenderer;
}
interface Filter<Type extends TODO=TODO> {
  filterVal: FilterVal;
  filterType: FilterType;
  comparator: PredefinedComparatorTypes;
}

interface FilterProps<Type extends TODO> { //TODO: is thihs the same as Filter?
  getFilter?(filter: FilterFunction): TODO;
  defaultValue?: Type
}

interface TextFilterProps extends FilterProps<TODO/* a concreate type*/> {
  caseSensitive?: true;
}
interface DateFilterProps extends FilterProps<TODO/* a concreate type*/> {
}

type FilterFunction<Type extends TODO> = (val: Type) => TODO

declare type FilterVal = string | TODO;
declare type FilterType = 'TEXT' | TODO;
declare type PredefinedComparatorTypes = 'LIKE' | 'EQ' | TODO;
declare type PredefinedComparators = {
  [type in PredefinedComparatorTypes]: TODO;
};


// EDITOR

interface EditorProps {

}


// OVERLAY
interface OverlayOptions {
  spinner: boolean;
  background: Color;
}
declare type Color = string;
type Overlay = TODO



declare module 'react-bootstrap-table-next' {
  export default BootstrapTable;
}
declare module "react-bootstrap-table2-filter" {
  export default function filterFactory<Type extends TODO>(options?: FilterOptions): FilterProps<Type>;
  function textFilter(props?: TextFilterProps<TODO>): ColumnFilter;
  function dateFilter(props: DateFilterProps): ColumnFilter;
  var Comparator: PredefinedComparators;
}
declare module "react-bootstrap-table2-paginator" {
  export default function paginationFactory(options?: PaginationProps): Pagination;
}
declare module "react-bootstrap-table2-editor" {
  export default function editorFactory<todo extends TODO>(props?: CellEditProps<todo>): CellEdit<todo>;
}
declare module "react-bootstrap-table2-overlay" {
  export default function overlayFactory<todo extends TODO>(props?: OverlayOptions<todo>): Overlay<todo>;

}
