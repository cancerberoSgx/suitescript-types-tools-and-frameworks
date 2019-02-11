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
  type?: string
  options?: string
}
interface S {
  type?: string
  pageSize?: number
}

type AllProps = PropsFromState & PropsFromDispatch & ConnectedReduxProps & RouteComponentProps<RouteParams>

// TODO: use OptionsUrlPage
class ListRecordTypesIndexPage extends OptionsUrlComponent<AllProps, S, S> {
  getRouteOptionNames(): string[] {
    return []//['pageSize']
  }

  componentWillUpdate() {

    if (this.props.match.params.type && this.props.match.params.type !== this.props.type) {
      // this.props.fetchListRecord({ type: this.props.match.params.type, pageSize: this.props.pageSize })
      // this.setState({ type: this.props.match.params.type, pageSize: this.props.pageSize })
      // debugger
      this.changeOptions({ type: this.props.match.params.type });
    }
    // super.componentWillMount()
  }

  // componentWillMount() {
  //   // TODO: we need to do this to connect the router, probably we want a mapRouteProps and change the name since the state also has a 'type'
  //   if (this.props.match.params.type && this.props.match.params.type !== this.props.type) {
  //     this.setState({ type: this.props.match.params.type, pageSize: this.props.pageSize })
  //     this.props.fetchListRecord({ type: this.props.match.params.type, pageSize: this.props.pageSize })
  //   }
  //   super.componentWillMount()
  // }
  constructor(p: AllProps, s: S) {
    super(p, s)
    this.state = { type: p.type, pageSize: p.pageSize }
  }

  public render() {
    const { type } = this.props

    return (
      <Page>
        <Container>
          <div>
            Record Types:
            <select onChange={e => {
              const type = e.currentTarget.selectedOptions[0].value
              if (type) {
                this.changeOptions({ type });
                // this.props.history.push('/listRecordTypes/' + type)
                // this.changeOptions({ type })
              }
            }}>

              <option selected={!this.props.type}>Select a Record Type</option>
              {this.props.recordTypes.map(r =>
                <option selected={this.props.type === r} value={r}>{r}</option>
              )}
            </select>
          </div>
          <Loading {...this.props}>
            {this.props.results && type &&
              <SearchResults {...this.props} type={type}
                columns={[{ label: 'Record Type', id: 'recordType', type: 'select' }]}
                results={this.props.results.map(r => ({ id: r.id, type: r.recordType, columns: [r.recordType] }))}>
              </SearchResults>}
          </Loading>
        </Container>
      </Page>
    )
  }


  private changeOptions(v: { type: string }) {
    // const v = { type: this.props.match.params.type, pageSize: this.props.pageSize };
    const t = { ...this.state, ...v };
    this.setState(t);
    this.updateOptionsWithState(t);
    this.props.fetchListRecord({ ...v, pageSize: this.state.pageSize || this.props.pageSize });
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
