import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Dispatch } from 'redux';
import { ApplicationState, ConnectedReduxProps } from '../../store';
import { DataTable } from './DataTable';
import { I } from '../misc';
import BootstrapTable, { Row } from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import { typedSearchColumnValues } from '../../nstypes/TypedSearchColumnValues';
import cellEditFactory from 'react-bootstrap-table2-editor'
interface PropsFromState {
  type: string
  columns: string[]
  results: Row[]
}
// type ResultColumn = {
//   type?: string, value: string
// } | string
// interface Result { id: string, type: string, columns: ResultColumn[] }

interface PropsFromDispatch {
}

type AllProps = PropsFromState & PropsFromDispatch & ConnectedReduxProps
interface State {
  sizePerPage: number
  page: number
  // pageSize: number
}
class ListRecordTypesIndexPage extends React.Component<AllProps, State> {

  constructor(p: AllProps, s: State){
    super(p, s)
    this.state = {sizePerPage: 10, page: 1 }
  }
  public render() {
    const columns = [{ dataField: 'id', text: 'id (Id)', sort: true,
    filter: textFilter() }, { dataField: 'recordType', text: 'recordType (Record Type)' , sort: true,
    filter: textFilter()}, ...(this.props.columns||[]).map(c=>({dataField: c, text: c, sort: true}))]

    // const data: Row[] = this.props.results || []
    return <BootstrapTable
      keyField="id"
      data={this.props.results}
      pagination={paginationFactory({ sizePerPage: this.state.sizePerPage, page: this.state.page })}
      columns={columns}
      filter={filterFactory()}
      cellEdit={ cellEditFactory({ mode: 'click' }) }

    />
  }


  // getColumns(type: string) {
  //   return [{ id: 'id', label: 'Id' }, { id: 'recordType', label: 'Record Type' },
  //   ...typedSearchColumnValues[type]]
  // }
  // renderBT() {
  //   const columns = this.getColumns(this.props.type!).map(c => ({
  //     dataField: c.id,
  //     text: `${c.id} (${c.label})}`
  //   }))
  //   const data: Row[] = this.props.results || []
  //   return <BootstrapTable
  //     keyField="id"
  //     data={data}
  //     pagination={paginationFactory({ sizePerPage: this.state.sizePerPage, page: this.state.page })}
  //     columns={columns}
  //     filter={filterFactory()}
  //   />
  // }

}


// class ColumnResult extends React.Component<{ c: ResultColumn }> {
//   render() {
//     const c = this.props.c
//     return <I>{typeof c === 'string' ? c : c + ''}</I>
//   }
// }





const mapStateToProps = ({ }: ApplicationState) => ({
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListRecordTypesIndexPage)

