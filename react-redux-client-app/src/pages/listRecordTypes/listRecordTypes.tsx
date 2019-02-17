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
  pageSize?: number
  page?: number
  columns?: string[]
}
interface Options extends Partial<S> {
}
type AllProps = PropsFromState & PropsFromDispatch & ConnectedReduxProps & RouteComponentProps<RouteParams>



class ListRecordTypesIndexPage extends OptionsUrlComponent<AllProps, S, Options> {

  constructor(p: AllProps, s: S) {
    super(p, s)
    this.state = {
      // type: p.type,
      //  pageSize: p.pageSize || 5, page: 1
      // , columns: []
    }
  }

  // private renderCounter = 0
  public render() {
    // this.renderCounter++
    const { type } = this.state
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
                this.setState({ type })
              }
            }}>
              <option>Select a Record Type</option>
              {this.props.recordTypes.map(r =>
                <option value={r} key={r}>{r}</option>
              )}
            </select>

            <If c={type}>
              {type => {
                const columns = [{ id: 'id', label: 'Id' }, { id: 'recordType', label: 'Record Type' },
                ...typedSearchColumnValues[type]].sort((a, b) => a.id.localeCompare(b.id))

                return <span>
                  <h4>
                    Columns:
                </h4>
                  <select multiple={true}
                    onChange={e => {
                      const selected = e.currentTarget.selectedOptions.length ? Array.from(e.currentTarget.selectedOptions).map(o => o.value) : []
                      debugger
                      if (selected.length) {
                        this.setState({ columns: selected })
                      }
                    }}>
                    {columns.map(c =>
                      <option
                        defaultChecked={(this.state.columns || []).includes(c.id)}
                        value={c.id} key={c.id}>{c.id} ({c.label})</option>)
                    }
                  </select>
                </span>
              }}
            </If>

            <span>
              <h4>
                Page Size:
              </h4>
              <input type="number" value={this.state.pageSize + ''}
                onChange={async e => {
                  this.setState({ ...this.state, pageSize: e.currentTarget.valueAsNumber })
                }}>
              </input>
            </span>
          </div>

          {!this.props.error &&
            <Loading {...this.props}><div>
              <If<ListRecordTypeResult[]> c={this.props.results}>{results => <div>
                {/* {this.renderBT()} */}
                <SearchResults2 {...this.props} type={type!} columns={this.state.columns!} results={results}></SearchResults2>
                <SearchResults {...this.props} type={type!}
                  columns={[{ label: 'Record Type', id: 'recordType', type: 'select' }]}
                  results={results.map(r => ({ id: r.id, type: r.recordType, columns: [r.recordType] }))}>
                </SearchResults>
              </div>}</If>
            </div>
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
      pageSize: newOptions.pageSize || this.state.pageSize || 5
    }
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
  // @ts-igno re
)(ListRecordTypesIndexPage)) //TODO
