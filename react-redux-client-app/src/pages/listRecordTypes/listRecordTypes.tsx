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
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter, dateFilter } from 'react-bootstrap-table2-filter';
import { array } from '../../utils/misc';
import paginationFactory from 'react-bootstrap-table2-paginator';

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
    console.log('render', this.state, this.props);
    return (
      <Page>
        <Container>
          <div>
            {/* <div>{this.renderBT()}</div> */}
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
          {!this.props.error &&
            <Loading {...this.props}>
              {this.props.results && type && <div>

                <div>
                  <SearchResults {...this.props} type={type}
                    columns={[{ label: 'Record Type', id: 'recordType', type: 'select' }]}
                    results={this.props.results.map(r => ({ id: r.id, type: r.recordType, columns: [r.recordType] }))}>
                  </SearchResults> : ''}

                </div>
                <If c={this.props.results && type}>{e => this.renderBT()}</If>
              </div>
              }
            </Loading>}
          {this.props.error && <ErrorComponent {...this.props.error}></ErrorComponent>}
        </Container>
      </Page >
    )
  }



  renderBT() {

    let type: any;
    let priceFilter: any;
    let stockDateFilter: any;

    const columns = [{
      dataField: 'id',
      text: 'Internal Id'
    },
    {
      dataField: 'type',
      text: 'Record Type',
      filter: textFilter({
        getFilter: (filter: Filter) => {
          type = filter;
        }
      })
    }, {
      dataField: 'price',
      text: 'Price',
      filter: textFilter({
        getFilter: (filter: any) => {
          priceFilter = filter;
        }
      })
    }, {
      dataField: 'inStockDate',
      text: 'InStock Date',
      formatter: (cell: any) => cell.toString(),
      filter: dateFilter({
        getFilter: (filter: any) => {
          stockDateFilter = filter;
        }
      })
    }];
    const handleClick = () => {
      type('');
      priceFilter('');
      stockDateFilter();
    };
    const products = array(200).map(i => ({ id: i, name: Math.random() + '', price: '$' + Math.random(), inStockDate: new Date(Math.random() * 1000000) }))
    return <div>
      <button className="btn btn-lg btn-primary" onClick={handleClick}> Clear all filters </button>
      <BootstrapTable
        keyField="id"
        data={products}
        pagination={paginationFactory()}
        columns={columns}
        filter={filterFactory()}
      />
    </div>



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
)(ListRecordTypesIndexPage as any) as any) //TODO
