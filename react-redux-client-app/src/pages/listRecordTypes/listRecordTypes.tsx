/** @jsx jsx */
import { jsx, css } from '@emotion/core';

// / <reference types="react-router" />
// / <reference types="react-router-dom/node_modules/@types/react-router" />

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
import BootstrapTable, { Column, Row } from 'react-bootstrap-table-next';
import filterFactory, { textFilter, dateFilter } from 'react-bootstrap-table2-filter';
import { array } from '../../utils/misc';
import paginationFactory from 'react-bootstrap-table2-paginator';
import SearchResults2 from '../../components/data/SearchResults2';
import { SearchColumn } from '../search/searchView';

interface PropsFromState {
  loading?: boolean
  type?: string
  // pageSize: number
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
      // { id: 'id', label: 'Id' },
      // { id: 'recordType', label: 'Record Type' },
    ...typedSearchColumnValues[type]].sort((a, b) => a.id.localeCompare(b.id))
    // console.log('render', this.state, this.props);
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
                        // defaultChecked={(this.state.columns || []).includes(c.id)}
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
          {/* </div> */}

          {!this.props.error &&
            <Loading {...this.props}><div>
              <If<ListRecordTypeResult[]> c={type && columns && this.props.results} p={this.props.results}>{results => {
                const formattedResults = results.map(r => {
                  const resultColumns = this.props.resultColumns || this.state.userColumns
                  if (!resultColumns || !this.state.userColumns) { return r }
                  r.columns
                    // .filter(c=>this.state.userColumns!.includes(c))
                    .forEach((s, i) => {
                      const name = resultColumns[i]
                      if (name) {
                        r[name] = s
                      }
                    })
                  return { ...r, columns: undefined }
                })
                return <div>
                  <SearchResults2 {...this.props} type={type!}
                  userColumns={this.state.userColumns!}
                  results={formattedResults}
                  columns={columns!}
                  ></SearchResults2>
                  {/* <SearchResults {...this.props} type={type!}
                    columns={[{ label: 'Record Type', id: 'recordType', type: 'select' }]}
                    results={results.map(r => ({ id: r.id, type: r.recordType, columns: [r.recordType] }))}>
                  </SearchResults> */}
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
    // const type = newOptions.type || this.state.type
    // if (!type) {
    //   return
    // }
    // const fetchListRecordOptions: FetchListOptions = {
    //   type,
    //   pageSize: newOptions.pageSize || this.state.pageSize || 5
    // }
    const type = newOptions.type || this.state.type
    // let userColumns: string[] = ['id', 'recordType']
    // debugger
    // if( type == this.state.type && type==this.props.type){
      // let userColumns: string[] = newOptions.userColumns || this.state.userColumns ||  ['id', 'recordType']
    // }

    // this.state = {...this.state, userColumns, type, ...newOptions}
    // const userColumns =( type !== this.state.type || type!==this.props.type) ? ['id', 'recordType'] : //if type changed - reset the columns if not error!
      // (newOptions.userColumns || this.state.userColumns ||  ['id', 'recordType'])

    if (type) {
      // debugger
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
