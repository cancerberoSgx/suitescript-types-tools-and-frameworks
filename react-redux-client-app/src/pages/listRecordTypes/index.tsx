import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import LoadingOverlay from '../../components/data/LoadingOverlay';
import LoadingOverlayInner from '../../components/data/LoadingOverlayInner';
import LoadingSpinner from '../../components/data/LoadingSpinner';
import Container from '../../components/layout/Container';
import Page from '../../components/layout/Page';
import { ApplicationState, ConnectedReduxProps } from '../../store';
import { ListRecordTypeResult, FetchListOptions } from '../../store/listRecordTypes';
import { fetchListRecord } from '../../store/listRecordTypes/actions';
import styled from '../../styles/theme/definition';
import SearchResults from '../../components/search/SearchResults';
import { RouteComponentProps } from 'react-router';
import { withRouter } from 'react-router-dom'
import { TableWrapper } from '../../components/data/LoadingWrapper';

// Separate state props + dispatch props to their own interfaces.
interface PropsFromState {
  loading?: boolean
  type?: string
  pageSize: number
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
      this.props.fetchListRecord({ type: this.props.match.params.type, pageSize: this.props.pageSize })
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

const mapStateToProps = ({ listRecordTypes }: ApplicationState) => ({
  pageSize: listRecordTypes.pageSize,
  type: listRecordTypes.type,
  results: listRecordTypes.results,
  loading: listRecordTypes.loading,
  recordTypes: listRecordTypes.recordTypes
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchListRecord: (options: FetchListOptions) => dispatch(fetchListRecord(options))
})


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ListRecordTypesIndexPage))
