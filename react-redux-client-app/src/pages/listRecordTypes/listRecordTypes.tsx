/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { withRouter } from 'react-router-dom';
import { Dispatch } from 'redux';
import { ErrorComponent } from '../../components/data/errorComponent';
import { Loading } from '../../components/data/Loading';
import { SearchResults } from '../../components/data/searchResults/searchResults';
import { Container } from '../../components/layout/Container';
import { Page } from '../../components/layout/Page';
import { If, NoWrap, Count } from '../../components/misc';
import { OptionsUrlComponent } from '../../components/optionsUrlComponent';
import { typedSearchColumnValues } from '../../nstypes/TypedSearchColumnValues';
import { ApplicationState, ConnectedReduxProps } from '../../store';
import { ErrorOptions } from '../../store/commonTypes';
import { FetchListOptions, ListRecordTypeResult } from '../../store/listRecordTypes';
import { fetchListRecord } from '../../store/listRecordTypes/actions';
import { SearchColumn } from '../search/searchView';
import { styled } from '../../styles/theme';
import { ToolBox } from '../../components/toolBox';

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

interface State {
  type?: string
  pageSize?: number
  page?: number
  userColumns?: string[]
  resultColumns?: string[]
  dontAutoApply?: boolean
}

type AllProps = PropsFromState & PropsFromDispatch & ConnectedReduxProps & RouteComponentProps<RouteParams>

class ListRecordTypesIndexPage extends OptionsUrlComponent<AllProps, State, State> {

  constructor(p: AllProps, s: State) {
    super(p, s)
    this.state = {
      // HEADS UP: dont init the state so it gets updated with route options
      pageSize: 5
    }
  }

  protected async executeActionForNewOptions(newOptions: State) {
    const type = newOptions.type || this.state.type
    if (type) {
      console.log('fetchListRecord');

      this.props.fetchListRecord({
        ...newOptions,
        type,
        pageSize: newOptions.pageSize || this.state.pageSize!,
        userColumns: (newOptions.userColumns || this.state.userColumns || []).filter(c => ['id', 'recordType'].indexOf(c) === -1)
      })
    }
  }

  getRouteOptionNames(): string[] {
    return ['type', 'pageSize', 'userColumns', 'dontAutoApply']
  }

  public render() {
    const { type } = this.state
    const columns = !type ? undefined :      [...typedSearchColumnValues[type]]        .sort((a, b) => a.id.localeCompare(b.id))

    console.log(type, columns&&columns.length, 'results', this.props.results && this.props.results.length)

    return <Page>
      <Container className="list-record-types">
        <ToolBox>
          <ul>
            <li>
              <NoWrap><label className="seeValues">
                <input type="checkbox" checked={!this.state.dontAutoApply}
                  onChange={e => this.setState({ dontAutoApply: !e.currentTarget.checked })}></input>
                Auto Apply?
                    </label>
              </NoWrap>
            </li>
          </ul>
        </ToolBox>

        <div css={css`& h4 {display: inline; margin-left: 1em}`}>
          <h4>Record Types <Count>{this.props.recordTypes.length}</Count>: </h4>
          <select className="select-type" value={type || ''}
            onChange={async e => {
              const type = e.currentTarget.selectedOptions[0].value
              if (type) {
                this.setState({ type,
                  userColumns: ['id']  // when type change we want to reset user columns since they wont be supported by new selected record type
                })
              }
            }}>
            <option value="">Select a Record Type</option>
            {this.props.recordTypes.map(r =>
              <option value={r} key={r}>{r}</option>
            )}
          </select>
        </div>

        <If<SearchColumn[]> c={this.state.type && columns}>{columns =>

          <div>
            <h4>Columns <Count>{columns.length}</Count>: </h4>
            <ColumnSelect id="columns-select" multiple={true} defaultValue={this.state.userColumns}
              onChange={e => {
                if (this.state.dontAutoApply) {
                  return
                }
                this.updateStateWithUI();
              }}>
              <option>Select a Column</option>
              {columns.map(c =>
                <option value={c.id} key={c.id}>{c.id} ({c.label})</option>)
              }
            </ColumnSelect>

            <div>
              <label>Page Size:
                    <input type="number" id="page-size-input" defaultValue={this.state.pageSize + ''}
                  onChange={async e => {
                    if (this.state.dontAutoApply) {
                      return
                    }
                    this.setState({ ...this.state, pageSize: e.currentTarget.valueAsNumber })
                  }}>
                </input>
              </label>
            </div>

            <If c={this.state.dontAutoApply}>{() =>
              <button onClick={e => {
                this.updateStateWithUI()
              }}>Apply</button>
            }</If>

          </div>}</If>

        <If c={!this.props.error}>{() =>
          <Loading {...this.props}>
            <If<ListRecordTypeResult[]> c={type && columns && this.props.results}>{results => {
              const formattedResults = results.map(r => {
                const resultColumns = this.props.resultColumns || this.state.userColumns
                if (!resultColumns || !this.state.userColumns) {
                  return r
                }
                r.columns.forEach((s, i) => {
                  const name = resultColumns[i]
                  if (name) {
                    r[name] = s
                  }
                })
                return { ...r, columns: undefined }
              })
              return <SearchResults {...this.props} type={type!}
                userColumns={this.state.userColumns!}
                results={formattedResults} columns={columns!} />
            }}</If>
          </Loading>
        }</If>
        <If<ErrorOptions> c={this.props.error}>{error =>
          <ErrorComponent {...error} />
        }</If>
      </Container>
    </Page >

  }

  private updateStateWithUI() {
    const select = document.querySelector<HTMLSelectElement>('#columns-select')!
    const selected = select.selectedOptions.length ? Array.from(select.selectedOptions).map(o => o.value) : [];
    let s: State = {}
    if (selected.length) {
      s.userColumns = selected
    }
    s.pageSize= document.querySelector<HTMLInputElement>('#page-size-input')!.valueAsNumber
    this.setState(s)
  }

}

const ColumnSelect = styled.select`
  resize: both;
`

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
