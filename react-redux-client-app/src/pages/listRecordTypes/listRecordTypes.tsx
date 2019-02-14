import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Container } from '../../components/layout/Container';
import { Page } from '../../components/layout/Page';
import { ApplicationState, ConnectedReduxProps } from '../../store';
import { ListRecordTypeResult, FetchListOptions } from '../../store/listRecordTypes';
import { fetchListRecord } from '../../store/listRecordTypes/actions';
import SearchResults from '../../components/data/SearchResults';
import { RouteComponentProps } from 'react-router';
import { withRouter } from 'react-router-dom'
import { Loading } from '../../components/data/Loading';
import { OptionsUrlComponent } from '../../components/optionsUrlComponent';
import { ErrorComponent } from '../../components/data/errorComponent';
import { ErrorOptions } from '../../store/commonTypes';
import { If, F as Frag } from '../../components/misc';
import { typedSearchColumnValues } from '../../nstypes/TypedSearchColumnValues';

interface PropsFromState {
  loading?: boolean
  type?: string
  pageSize: number
  results?: ListRecordTypeResult[]
  recordTypes: string[]
  error?: ErrorOptions
}
interface PropsFromDispatch {
  fetchListRecord: typeof fetchListRecord
}
interface RouteParams {
  options?: string
}
interface S {
  type?: string
  pageSize: number
  columns?: string[]
}
interface Options extends Partial<S> {
}
type AllProps = PropsFromState & PropsFromDispatch & ConnectedReduxProps & RouteComponentProps<RouteParams>

class ListRecordTypesIndexPage extends OptionsUrlComponent<AllProps, S, Options> {

  constructor(p: AllProps, s: S) {
    super(p, s)
    this.state = {
      type: p.type, pageSize: p.pageSize || 5
      // , columns: []
    }
  }

  // private renderCounter = 0
  public render() {
    // this.renderCounter++
    const { type } = this.state
    // debugger
    console.log('render', this.state, this.props);
    return (
      <Page>
        <Container>


          <div>
            {/* renderCounter: {this.renderCounter}<br /> */}
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

            <If c={type}>
              {type => <Frag>
                Columns: <select multiple={true}
                  onChange={e => {
                    // this.setState({
                    //   ...this.state, columns: Array.from(e.currentTarget.selectedOptions).map(o => o.value)
                    // })
                  }}>
                  {typedSearchColumnValues[type].map(c =>
                    <option
                      selected={(this.state.columns || []).includes(c.id)}
                      value={c.id}>{c.id} ({c.label})</option>)
                  }
                </select>
              </Frag>}
            </If>

            Page Size: <input type="number" value={this.state.pageSize + ''}
              onChange={async e => {
                this.setState({ ...this.state, pageSize: e.currentTarget.valueAsNumber })
              }}>
            </input>
          </div>
          {!this.props.error && <Loading {...this.props}>
            {this.props.results && type ?
              <SearchResults {...this.props} type={type}
                columns={[{ label: 'Record Type', id: 'recordType', type: 'select' }]}
                results={this.props.results.map(r => ({ id: r.id, type: r.recordType, columns: [r.recordType] }))}>
              </SearchResults> : ''}
          </Loading>}
          {this.props.error && <ErrorComponent {...this.props.error}></ErrorComponent>}
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
    debugger
    // console.log('listRecordTypes executeActionForNewOptions', { newOptions, fetchListRecordOptions });
    this.props.fetchListRecord(fetchListRecordOptions);
  }

  getRouteOptionNames(): string[] {
    return ['type', 'pageSize', 'columns']
  }

}

const mapStateToProps = ({ listRecordTypes }: ApplicationState) => ({
  pageSize: listRecordTypes.pageSize,
  type: listRecordTypes.type,
  results: listRecordTypes.results,
  loading: listRecordTypes.loading,
  recordTypes: listRecordTypes.recordTypes,
  error: listRecordTypes.error,
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchListRecord: (options: FetchListOptions) => dispatch(fetchListRecord(options))
})

export const ListRecordTypes = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ListRecordTypesIndexPage))
