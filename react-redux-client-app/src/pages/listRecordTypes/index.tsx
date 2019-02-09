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
import SearchResults from '../../components/search/SearchResults';
import { RouteComponentProps } from 'react-router';

// Separate state props + dispatch props to their own interfaces.
interface PropsFromState {
  loading?: boolean
  type?: string
  results?: ListRecordTypeResult[]
  errors?: string
  recordTypes: string[]
}

// We can use `typeof` here to map our dispatch types to the props, like so.
interface PropsFromDispatch {
  // fetchRequest: typeof fetchRequest
  fetchListRecord: typeof fetchListRecord
}
interface RouteParams {
  type?: string
}

// Combine both state + dispatch props - as well as any props we want to pass - in a union type.
type AllProps = PropsFromState & PropsFromDispatch & ConnectedReduxProps & RouteComponentProps<RouteParams>

class ListRecordTypesIndexPage extends React.Component<AllProps> {

  public render() {

    // TODO: we need to do this to connect the router, probably we want a mapRouteProps and change the name since the state also has a 'type'
    if (this.props.match.params.type && this.props.match.params.type !== this.props.type) {
      this.props.fetchListRecord(this.props.match.params.type)
    }

    const { loading, type } = this.props

    return (
      <Page>
        <Container>
          <div>
            Record Types:
            <select onChange={e => {
              const type = e.currentTarget.selectedOptions[0].value
              if (type) {
                // this.props.fetchListRecord(type)
                this.props.history.push('/listRecordTypes/' + type)
              }
            }}>

              <option selected={!this.props.type}>Select a Record Type</option>
              {this.props.recordTypes.map(r =>
                <option selected={this.props.type === r} value={r}>{r}</option>
              )}
            </select>
          </div>
          <TableWrapper>
            {loading && (
              <LoadingOverlay>
                <LoadingOverlayInner>
                  <LoadingSpinner />
                </LoadingOverlayInner>
              </LoadingOverlay>
            )}
            {this.props.results && type && <SearchResults {...this.props} type={type}
              columns={[{ label: 'Record Type', id: 'recordType', type: 'select' }]}
              results={this.props.results.map(r => ({ id: r.id, type: r.recordType, columns: [r.recordType] }))}>
            </SearchResults>}
          </TableWrapper>
        </Container>
      </Page>
    )
  }

}

// It's usually good practice to only include one context at a time in a connected component.
// Although if necessary, you can always include multiple contexts. Just make sure to
// separate them from each other to prevent prop conflicts.
const mapStateToProps = ({ listRecordTypes }: ApplicationState) => ({
  type: listRecordTypes.type,
  results: listRecordTypes.results,
  loading: listRecordTypes.loading,
  recordTypes: listRecordTypes.recordTypes
})

// mapDispatchToProps is especially useful for constraining our actions to the connected component.
// You can access these via `this.props`.
const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchListRecord: (type: string) => dispatch(fetchListRecord(type))
})


import { withRouter } from 'react-router-dom'
export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ListRecordTypesIndexPage))

const TableWrapper = styled('div')`
  position: relative;
  max-width: ${props => props.theme.widths.md};
  margin: 0 auto;
  min-height: 200px;
`
