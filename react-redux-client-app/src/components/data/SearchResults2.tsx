import * as React from 'react';
import BootstrapTable, { Column, Row } from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';
import filterFactory, { dateFilter, numberFilter, selectFilter, textFilter } from 'react-bootstrap-table2-filter';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { SearchColumn } from '../../pages/search/searchView';
import { ApplicationState, ConnectedReduxProps } from '../../store';

interface PropsFromState {
  type: string
  columns: SearchColumn[]
  results: Row[]
  userColumns?: string[]
}

interface PropsFromDispatch {
}

type AllProps = PropsFromState & PropsFromDispatch & ConnectedReduxProps
interface State {
  sizePerPage: number
  page: number
}
class ListRecordTypesIndexPage extends React.Component<AllProps, State> {

  constructor(p: AllProps, s: State) {
    super(p, s)
    this.state = { sizePerPage: 10, page: 1 }
  }
  public render() {


    const columns: Column[] = [
      ...(findColumn(this.props.columns, 'id') ? [] : [{
        dataField: 'id',
        text: 'id (Id)',
        sort: true,
        filter: textFilter()
      }]),
      ...(this.props.userColumns || [])
        .map(value => {
          const column = findColumn(this.props.columns, value)
          return {
            dataField: value,
            text: `${value} ${column.label || ''} ${column.type ? `(${column.type})` : ''}, jsType: ${getJsTypeNameFor(column)}`,
            sort: true,
            sortFunc: getSortFunctionFor(column),
            filter: getFilterFor(column),
            filterValue: (cell: Cell, row) => { const v = cell.value; return typeof v === undefined ? '' : v; },
            formatter: getFormatterFor(column),
            cellEdit: true
          } as Column
        }) as Column[]
    ]
    const data = normalizeData(this.props.results, this.props.columns)

    return <BootstrapTable
      keyField="id"
      data={data}
      pagination={paginationFactory({ sizePerPage: this.state.sizePerPage, page: this.state.page })}
      columns={columns}
      filter={filterFactory()}
      cellEdit={cellEditFactory({ mode: 'click' })}
      striped={true}
      loading={true}
    />
  }
}

/** TODO: cache */
function findColumn(columns: SearchColumn[], value: string, defaultVal: SearchColumn = { label: '', id: value + '', type: '' }): SearchColumn {
  return columns.find(c => c.id === value) || defaultVal
}

function normalizeData(data: RowT<any, string>[], columns: SearchColumn[]) {
  data.forEach(r => {
    columns.forEach(c => {
      if (r[c.id] && typeIsNumeric(c.type)) {
        r[c.id] = { label: r[c.id], value: parseFloat(r[c.id]) || r[c.id] }
      }
    })
  })
  return data
}

type CellValue = number | string | Date | boolean

type Cell<T extends CellValue = CellValue> = { label: string, value: T }

type sortFunction<T extends CellValue> = (a: Cell<T>, b: Cell<T>, order: "asc" | "desc", rowA?: RowT<any, string>, rowB?: RowT<any, string>) => number

function getSortFunctionFor(c: SearchColumn): sortFunction<CellValue> {
  if (typeIsNumeric(c.type)) {
    return numberSortFunction as any
  }
  else {
    return stringSortFunction as any
  }
}

const stringSortFunction: sortFunction<CellValue> = (a, b, order: "asc" | "desc") => (a.value + '').localeCompare(b.value + '')

const numberSortFunction: sortFunction<number> = (a, b, order: "asc" | "desc") => (order === 'asc') ?
  ((a.value < b.value) ? -1 : 1) : ((a.value < b.value) ? 1 : -1)

function getJsTypeNameFor(c: SearchColumn): string {
  if (typeIsNumeric(c.type)) {
    return 'number'
  }
  else if (typeIsDateLike(c.type)) {
    return 'Date'
  }
  //TODO: boolean, etc
  else return 'string'
}

function getFilterFor(c: SearchColumn): any {
  if (!c) { return undefined }
  if (['text', 'textarea'].includes(c.type)) {
    return textFilter()
  }
  else if (typeIsDateLike(c.type)) {
    return dateFilter()
  }
  else if (['checkbox'].includes(c.type)) {
    return selectFilter({ options: [{ value: 'true', label: 'true' }, { value: 'false', label: 'false' }], withoutEmptyOption: true })
  }
  else if (typeIsNumeric(c.type)) {
    return numberFilter()
  }
  else if (['multiselect'].includes(c.type)) {
    return textFilter()
  }
  else {
    console.warn('SEARCHRESULTS2 - unknwon column type: ' + c.type);
    return textFilter()
  }
}

type formatter<T extends CellValue=CellValue> = (cell: Cell<T>, row: any, rowIndex: number, formatExtraData: any) => string

const stringFormatter: formatter<string> = (cell, row, rowIndex, formatExtraData) => {
  return typeof cell === 'undefined' ? '' : typeof cell.label === 'undefined' ? typeof cell.value === 'undefined' ? `${cell}` : `${cell.value}` : `${cell.label}`;
}

function getFormatterFor(c: SearchColumn): formatter {
  return stringFormatter as any
}

function typeIsNumeric(t: string): boolean {
  return ['number', 'integer', 'float', 'select'].includes(t) || typeIsCurrency(t)
}

function typeIsCurrency(t: string): boolean {
  return ['currency', 'currency2'].includes(t)
}

function typeIsDateLike(t: string): boolean {
  return ['date', 'datetime'].includes(t)
}

const mapStateToProps = ({ }: ApplicationState) => ({
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListRecordTypesIndexPage)

