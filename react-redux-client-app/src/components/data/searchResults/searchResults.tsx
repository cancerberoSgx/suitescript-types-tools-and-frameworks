import * as React from 'react';
import BootstrapTable, { Column, Row } from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { SearchColumn } from '../../../pages/search/searchView';
import { ApplicationState, ConnectedReduxProps } from '../../../store';
import { getJsTypeNameFor, typeIsNumeric, typeIsDateLike } from './types';
import { getSortFunctionFor } from './sort';
import { getFormatterFor } from './formatter';
import { getFilterFor } from './filter';
import { formatDate, formatDateTime } from '../../../utils/formatDate';

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
          filterValue: (cell: Cell, row) => { const v = typeof cell==='undefined' ? '' :( typeof cell.value ==='undefined' ? cell : cell.value); return v},
          formatter: getFormatterFor(column),
          cellEdit: true
        } as Column
      }) as Column[]
    ]

    const data = normalizeData(this.props.results, this.props.columns)

    return <BootstrapTable
    keyField="id"
    data={data}
    columns={columns}
    pagination={paginationFactory({ sizePerPage: this.state.sizePerPage, page: this.state.page })}
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
        r[c.id] = { label: r[c.id]+'', value: parseFloat(r[c.id]) || r[c.id] }
      }
      if (r[c.id] && typeIsDateLike(c.type)) {
        r[c.id] = { label: r[c.id]+'', value: new Date(r[c.id]) }
      }
    })
  })
  return data
}

export type CellValue = number | string | Date | boolean

export type Cell<T extends CellValue = CellValue> = { label: string, value: T }

const mapStateToProps = ({ }: ApplicationState) => ({
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
})

export const SearchResults = connect(
  mapStateToProps,
  mapDispatchToProps
)(ListRecordTypesIndexPage)

