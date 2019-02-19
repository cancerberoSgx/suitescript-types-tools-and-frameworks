/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { withRouter } from 'react-router-dom';
import { Dispatch } from 'redux';
import { ErrorComponent } from '../../components/data/errorComponent';
import { Loading } from '../../components/data/Loading';
import { SearchResults } from '../../components/data/searchResults/searchResults';
import SearchResultsOld from '../../components/data/SearchResultsOld';
import { Container } from '../../components/layout/Container';
import { Page } from '../../components/layout/Page';
import { If } from '../../components/misc';
import { OptionsUrlComponent } from '../../components/optionsUrlComponent';
import { typedSearchColumnValues } from '../../nstypes/TypedSearchColumnValues';
import { ApplicationState, ConnectedReduxProps } from '../../store';
import { ErrorOptions } from '../../store/commonTypes';
import { FetchListOptions, ListRecordTypeResult } from '../../store/listRecordTypes';
import { fetchListRecord } from '../../store/listRecordTypes/actions';
import { SearchColumn } from '../search/searchView';


interface PropsFromState {
  loading?: boolean
  type?: string
  results?: ListRecordTypeResult[]
  resultColumns?: string[]
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
  pageSize?: number
  page?: number
  userColumns?: string[]
  resultColumns?: string[]
}

interface Options extends Partial<S> {
}

type AllProps = PropsFromState & PropsFromDispatch & ConnectedReduxProps & RouteComponentProps<RouteParams>

class ListRecordTypesIndexPage extends OptionsUrlComponent<AllProps, S, Options> {

  constructor(p: AllProps, s: S) {
    super(p, s)
    this.state = {
      // HEADS UP: dont init the state so it gets updated with route options
      // pageSize: p.pageSize||11
      // resultColumns: p.res
    }
  }

  // private renderCounter = 0
  public render() {
    // this.renderCounter++
    const { type } = this.state
    const columns = !type? undefined: [
    ...typedSearchColumnValues[type]].sort((a, b) => a.id.localeCompare(b.id))
    return (
      <Page>
        <Container className="list-record-types">
          <div css={css`& h4 {display: inline; margin-left: 1em}`}>
            <h4>
              Record Types:
            </h4>
            <select value={!type ? '' : this.props.recordTypes.find(t => t === type)} onChange={async e => {
              const type = e.currentTarget.selectedOptions[0].value
              if (type) {
                this.setState({ type, userColumns: ['id'] })
              }
            }}>
              <option>Select a Record Type</option>
              {this.props.recordTypes.map(r =>
                <option value={r} key={r}>{r}</option>
              )}
            </select>
            </div>

            <If<SearchColumn[]> c={columns}>
              {columns => {
                return <div>
                  <h4>
                    Columns:
                </h4>
                  <select multiple={true}
                    defaultValue={this.state.userColumns}
                    onChange={e => {
                      const selected = e.currentTarget.selectedOptions.length ? Array.from(e.currentTarget.selectedOptions).map(o => o.value) : []
                      if (selected.length) {
                        this.setState({ userColumns: selected })
                      }
                    }}>
                    <option>Select a Column</option>
                    {columns.map(c =>
                      <option
                        value={c.id} key={c.id}>{c.id} ({c.label})</option>)
                    }
                  </select>
                </div>
              }}
            </If>

            <div>
              <h4>
                Page Size:
              </h4>
              <input type="number" defaultValue={this.state.pageSize + ''}
                onChange={async e => {
                  this.setState({ ...this.state, pageSize: e.currentTarget.valueAsNumber })
                }}>
              </input>
            </div>

          {!this.props.error &&
            <Loading {...this.props}><div>
              <If<ListRecordTypeResult[]> c={type && columns && this.props.results} p={this.props.results}>{results => {
                const formattedResults = results.map(r => {
                  const resultColumns = this.props.resultColumns || this.state.userColumns
                  if (!resultColumns || !this.state.userColumns) { return r }
                  r.columns
                    .forEach((s, i) => {
                      const name = resultColumns[i]
                      if (name) {
                        r[name] = s
                      }
                    })
                  return { ...r, columns: undefined }
                })
                return <div>
                  <SearchResults {...this.props} type={type!}
                  userColumns={this.state.userColumns!}
                  results={formattedResults}
                  columns={columns!}
                  ></SearchResults>
                  {/* <SearchResultsOld {...this.props} type={type!}
                    columns={[{ label: 'Record Type', id: 'recordType', type: 'select' }]}
                    results={results.map(r => ({ id: r.id, type: r.recordType, columns: [r.recordType] }))}>
                  </SearchResultsOld> */}
                </div>
              }
              }</If>
            </div>
            </Loading>}
          {this.props.error && <ErrorComponent {...this.props.error}></ErrorComponent>}
        </Container>
      </Page >
    )
  }

  protected async executeActionForNewOptions(newOptions: Options) {
    const type = newOptions.type || this.state.type
    if (type) {
      this.props.fetchListRecord({
        ...newOptions,
        type,
        pageSize: newOptions.pageSize || this.state.pageSize || 5,
        userColumns: (newOptions.userColumns || this.state.userColumns||[]) .filter(c => ['id', 'recordType'].indexOf(c) === -1)
      });
    }
  }

  getRouteOptionNames(): string[] {
    return ['type', 'pageSize', 'userColumns']
  }
}

const mapStateToProps = ({ listRecordTypes }: ApplicationState) => ({
  pageSize: listRecordTypes.pageSize,
  type: listRecordTypes.type,
  results: listRecordTypes.results,
  loading: listRecordTypes.loading,
  recordTypes: listRecordTypes.recordTypes,
  error: listRecordTypes.error,
  resultColumns: listRecordTypes.resultColumns
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchListRecord: (options: FetchListOptions) => dispatch(fetchListRecord(options))
})

export const ListRecordTypes = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ListRecordTypesIndexPage))
