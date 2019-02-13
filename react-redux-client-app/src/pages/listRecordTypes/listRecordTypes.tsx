import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Container } from '../../components/layout/Container';
import { Page } from '../../components/layout/Page';
import { ApplicationState, ConnectedReduxProps } from '../../store';
import { ListRecordTypeResult, FetchListOptions } from '../../store/listRecordTypes';
import { fetchListRecord } from '../../store/listRecordTypes/actions';
import SearchResults from '../../components/search/SearchResults';
import { RouteComponentProps } from 'react-router';
import { withRouter } from 'react-router-dom'
import { Loading } from '../../components/data/Loading';
import { OptionsUrlComponent } from '../../components/optionsUrlComponent';

interface PropsFromState {
  loading?: boolean
  type?: string
  pageSize: number
  results?: ListRecordTypeResult[]
  errors?: string
  recordTypes: string[]
}

interface PropsFromDispatch {
  fetchListRecord: typeof fetchListRecord
}
interface RouteParams {
  // type?: string
  options?: string
}
interface S {
  type?: string
  pageSize: number
}
interface Options extends S {

}
type AllProps = PropsFromState & PropsFromDispatch & ConnectedReduxProps & RouteComponentProps<RouteParams>

class ListRecordTypesIndexPage extends OptionsUrlComponent<AllProps, S, Options> {

  constructor(p: AllProps, s: S) {
    super(p, s)
    this.state = { type: p.type, pageSize: p.pageSize || 5 }
  }

  private renderCounter = 0
  public render() {
    this.renderCounter++
    const { type } = this.state
    // console.log('render', this.state);
    return (
      <Page>
        <Container>
          <div>
            renderCounter: {this.renderCounter}<br />
            Record Types:
            <select onChange={async e => {
              const type = e.currentTarget.selectedOptions[0].value
              if (type) {
                this.setState({ ...this.state, type })
              }
            }}>
              <option selected={!type}>Select a Record Type</option>
              {this.props.recordTypes.map(r =>
                <option selected={type === r} value={r}>{r}</option>
              )}
            </select>

            Page Size: <input type="number" value={this.state.pageSize + ''}
              onChange={async e => {
                this.setState({ ...this.state, pageSize: e.currentTarget.valueAsNumber })
              }}>
            </input>
          </div>
          <Loading {...this.props}>
            {this.props.results && type &&
              <SearchResults {...this.props} type={type}
                columns={[{ label: 'Record Type', id: 'recordType', type: 'select' }]}
                results={this.props.results.map(r => ({ id: r.id, type: r.recordType, columns: [r.recordType] }))}>
              </SearchResults>}
          </Loading>
        </Container>
      </Page >
    )
  }

  protected async executeActionForNewOptions(newOptions: Options) {
    const type = newOptions.type || this.state.type
    if (!type) {
      return
    }
    const fetchListRecordOptions: FetchListOptions = {
      type,
      pageSize: newOptions.pageSize || this.state.pageSize
    }
    // console.log('listRecordTypes executeActionForNewOptions', { newOptions, fetchListRecordOptions });
    this.props.fetchListRecord(fetchListRecordOptions);

  }

  getRouteOptionNames(): string[] {
    return ['type', 'pageSize']
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


export const ListRecordTypes = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ListRecordTypesIndexPage))
