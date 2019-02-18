/// <reference types="react" />

type RowFieldValue = string | number | Date | TODO;

type TODO = any;

interface Pagination extends TODO {
}

interface PaginationProps {
  page?: number;
  sizePerPage?: number;
  totalSize?: string;
  sizePerPageRenderer?: SizePerPageRenderer;
  handleNextPage?: (event: {page: number, onPageChange: ()=>void})=>void
  handlePrevPage?: (event: {page: number, onPageChange: ()=>void})=>void
  handleSizePerPage?: (event: {page: number, onSizePerPageChange: ()=>void}, newSizePerPage: number)=>void
}

type PaginationProvider = React.Component<{
  pagination: Pagination;
  children: React.Component<{
    paginationProps: PaginationProps;
    paginationTableProps: PaginationTableProps;
  }>;
}>;

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
  mode?: 'string' | TODO;
  beforeSaveCell?: (oldValue: TODO, newValue: TODO, row: TODO, column: TODO) => TODO
  afterSaveCell?: (oldValue: TODO, newValue: TODO, row: TODO, column: TODO) => TODO
  onStartEdit?: (row: TODO, column: TODO, rowIndex: TODO, columnIndex: TODO) => TODO
}

type onTableChange = (type: TableChangeType, event: TableChangeEvent) => TODO;

interface TableChangeEvent {
  page: number;
  sizePerPage: number;
  filters: Filter<any>[];
  sortField: string;
  sortOrder: SortOrder;
  cellEdit: CellEdit;
}

type TableChangeType = 'cellEdit' | TODO;

type SortOrder = 'asc' | 'desc' | TODO;

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
  getFilter?(filter: FilterFunction<Type>): TODO;
  defaultValue?: Type
}

interface TextFilterProps extends FilterProps<TODO/* a concreate type*/> {
  caseSensitive?: true;
}

interface DateFilterProps extends FilterProps<TODO/* a concreate type*/> {
}

type FilterFunction<Type extends TODO> = (val: Type) => TODO

type FilterVal = string | TODO;

type FilterType = 'TEXT' | TODO;

type PredefinedComparatorTypes = 'LIKE' | 'EQ' | TODO;

type PredefinedComparators = {
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

type Color = string;

type Overlay = TODO


declare module 'react-bootstrap-table-next' {

  export default class BootstrapTable<FieldIds extends string> extends React.Component<BootstrapTableProps<FieldIds>, TODO> {
  }
  export interface BootstrapTableProps<fieldIds extends string = string> extends PaginationTableProps, PaginationProps {
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

  export interface Column<FieldId extends string = string> {
    dataField: FieldId;
    text: string;
    sort?: boolean;
    formatter?: (cell: TODO) => string
    filter?: TODO;
  }

  export type Row<Type extends TODO = TODO, FieldId extends string=string> = {
    [fieldName in FieldId]: RowFieldValue;
  };
}

declare module "react-bootstrap-table2-filter" {
  export default function filterFactory<Type extends TODO>(options?: FilterOptions): FilterProps<Type>;
  function textFilter(props?: TextFilterProps): TODO;
  function dateFilter(props: DateFilterProps): TODO;
  var Comparator: PredefinedComparators;
}

declare module "react-bootstrap-table2-paginator" {
  export default function paginationFactory(options?: PaginationProps): Pagination;
}

declare module "react-bootstrap-table2-editor" {
  export default function editorFactory<todo extends TODO>(props?: CellEditProps): CellEdit;
}

declare module "react-bootstrap-table2-overlay" {
  export default function overlayFactory(props?: OverlayOptions): Overlay;
}
