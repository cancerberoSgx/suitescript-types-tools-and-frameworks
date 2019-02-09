import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import LoadingOverlay from '../../components/data/LoadingOverlay';
import LoadingOverlayInner from '../../components/data/LoadingOverlayInner';
import LoadingSpinner from '../../components/data/LoadingSpinner';
import Container from '../../components/layout/Container';
import Page from '../../components/layout/Page';
import { ApplicationState, ConnectedReduxProps } from '../../store';
import { ListRecordTypeResult } from '../../store/listRecordTypes';
import { fetchListRecord } from '../../store/listRecordTypes/actions';
import styled from '../../utils/styled';
import { string } from 'prop-types';
import DataTable from '../layout/DataTable';
import { Link } from 'react-router-dom';

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

// We can use `typeof` here to map our dispatch types to the props, like so.
interface PropsFromDispatch {
  // fetchRequest: typeof fetchRequest
  // listRecord: typeof fetchListRecord
}


// Combine both state + dispatch props - as well as any props we want to pass - in a union type.
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
            <td><Link to={`/recordView/${r.type}/${r.id}`}>{r.id}</Link></td>
            {r.columns.map(c => <td>{c} </td>)}
          </tr>)}
      </DataTable>
    )
  }

}

// It's usually good practice to only include one context at a time in a connected component.
// Although if necessary, you can always include multiple contexts. Just make sure to
// separate them from each other to prevent prop conflicts.
const mapStateToProps = ({ }: ApplicationState) => ({
  //   type: listRecordTypes.type,
  //   results: listRecordTypes.results,
  //   recordTypes: listRecordTypes.recordTypes
})

// mapDispatchToProps is especially useful for constraining our actions to the connected component.
// You can access these via `this.props`.
const mapDispatchToProps = (dispatch: Dispatch) => ({
  // listRecord: (type: string) => dispatch(fetchListRecord(type))
})

// Now let's connect our component!
// With redux v4's improved typings, we can finally omit generics here.
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListRecordTypesIndexPage)

// const TableWrapper = styled('div')`
//   position: relative;
//   max-width: ${props => props.theme.widths.md};
//   margin: 0 auto;
//   min-height: 200px;
// `
