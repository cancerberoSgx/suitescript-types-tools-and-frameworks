import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Dispatch } from 'redux';
import { ApplicationState, ConnectedReduxProps } from '../../store';
import { DataTable } from './DataTable';
import { I } from '../misc';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import filterFactory from 'react-bootstrap-table2-filter';

interface PropsFromState {
  type: string
  columns: Column[]
  // column?: string
  // filters: Filter[]
  // filter?: string
  // userColumns?: string[]
  // userFilters?: Filter[]
  results: Result[]
  // pageSize?: number
  // currentPage?: number
  // pageCount?: number

  // loading: boolean
  // errors?: string
}
interface Column extends ColumnValue {
  // name: string
}
// interface Filter extends FilterValue {
//   // name: string
//   value?: string
//   operator?: string
// }
type ResultColumn = {
  type?: string, value: string
} | string
interface Result { id: string, type: string, columns: ResultColumn[] }
interface ColumnValue { id: string, type: string, label: string }
interface FilterValue { id: string, type: string, label: string }

interface PropsFromDispatch {
}


type AllProps = PropsFromState & PropsFromDispatch & ConnectedReduxProps

class ListRecordTypesIndexPage extends React.Component<AllProps> {

  public render() {
    const { results, columns } = this.props

    if (!results) {
      return <div>No results</div>
    }
    // const columns = this.state.columns.map(c=>({
    //   dataField: c.id,
    //   text: `${c.id} (${c.label})}`
    // })) as Column[]
    // const data: Row[] = this.props.results || []
    // return <BootstrapTable
    //   keyField="id"
    //   data={data}
    //   pagination={paginationFactory(
    //     // {sizePerPage: this.state.pageSize, page: this.state.page}
    //     )}
    //   columns={columns}
    //   filter={filterFactory()}
    // />

    return (

      <DataTable columns={['Id', ...columns.map(c => c.id + ' - ' + c.label)]}>
        {results.map((r, i) =>
          <tr key={i}>
            <td><Link to={`/recordView/${r.type}/${r.id}/{}`}># {r.id}</Link></td >
            {r.columns.map(c => c + '').map((c, j) => <td key={j}><ColumnResult c={c}></ColumnResult></td>)}
          </tr>)}
      </DataTable>
    )
  }

}


class ColumnResult extends React.Component<{ c: ResultColumn }> {
  render() {
    const c = this.props.c
    return <I>{typeof c === 'string' ? c : c + ''}</I>
  }
}





const mapStateToProps = ({ }: ApplicationState) => ({
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListRecordTypesIndexPage)

