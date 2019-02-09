import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Dispatch } from 'redux';
import { ApplicationState, ConnectedReduxProps } from '../../store';
import DataTable from '../layout/DataTable';

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
interface Filter extends FilterValue {
  // name: string
  value?: string
  operator?: string
}
interface Result { id: string, type: string, columns: string[] }
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
    return (
      <DataTable columns={['Id', ...columns.map(c => c.id + ' - ' + c.label)]}>
        {results.map(r =>
          <tr>
            <td><Link to={`/recordView/${r.type}/${r.id}`}># {r.id}</Link></td>
            {r.columns.map(c => <td>{c} </td>)}
          </tr>)}
      </DataTable>
    )
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

