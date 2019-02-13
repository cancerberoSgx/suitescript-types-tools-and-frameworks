/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from 'react-emotion';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { withRouter } from 'react-router-dom';
import { Dispatch } from 'redux';
import { Loading } from '../../components/data/Loading';
import { Container } from '../../components/layout/Container';
import { Page } from '../../components/layout/Page';
import { Count, NoWrap } from '../../components/misc';
import { OptionsUrlComponent } from '../../components/optionsUrlComponent';
import { ErrorComponent } from '../../components/search/errorComponent';
import ToolBox from '../../components/toolBox';
import { ApplicationState, ConnectedReduxProps } from '../../store';
import { ErrorOptions } from '../../store/commonTypes';
import { getSearchRecordTypes } from '../../nstypes/search';
import { FetchRecordOptions } from '../../store/recordView';
import { FetchSearchOptions, fetchSearch } from '../../store/search';
import { typedSearchColumnValues } from '../../nstypes/TypedSearchColumnValues';
import { ColumnEditor, SearchEditor } from './searchEditor';
// import { ErrorOptions } from '../../store/recordView';
// import { fetchRecord, FetchRecordOptions, SearchViewSettings, SearchViewState } from '../../store/SearchView';
// import { RecordFields } from './recordFields';
// import { RecordSublists } from './recordSublists';
;

interface SearchViewStateProps {
  loading?: boolean
  error?: ErrorOptions
  type?: string
}

interface PropsFromDispatch {
  // fetchRecord: typeof fetchRecord
}

interface RouteParams {
  options?: string
}

export interface State {
  recordTypes: string[]
  selectedRecordType?: string
  columns?: Column[]
  selectedColumn?: string
  // findRecord?: boolean
}
interface Column {
  id: string, label: string, type: string
}
export type SearchViewAllProps = SearchViewStateProps & PropsFromDispatch & ConnectedReduxProps & RouteComponentProps<RouteParams>

class SearchViewIndexPage extends OptionsUrlComponent<SearchViewAllProps, State, State> {

  constructor(props: SearchViewAllProps, state: State) {
    super(props, state)
    this.state = {
      recordTypes: getSearchRecordTypes()
    }
  }

  async componentWillUpdate() {
    // this.updateOptionsWithState()
    this.syncStateAndOptions()
    await super.componentWillUpdate()
  }
  protected syncStateAndOptions() {
    // if ((this.props.match.params.type && this.props.match.params.type !== this.props.type) ||
    //   (this.props.match.params.id && this.props.match.params.id !== this.props.id)) {
    //   this.setRecord({
    //     id: this.props.match.params.id!,
    //     type: this.props.match.params.type!,
    //     ...this.getOptions()
    //   })
    // }
  }
  async componentWillMount() {
    this.syncStateAndOptions()
    await super.componentWillMount()
  }

  public render() {
    const { } = this.props
    return (
      <Page>
        <Container>
          {this.props.error ? <ErrorComponent {...this.props.error}></ErrorComponent> : ''}
          <Loading {...this.props}>
            {<div>
              <SearchViewToolBox>
                <ul>
                  <li>
                    <NoWrap><label><input type="checkbox"
                    // checked={this.state.seeValues}
                    //   onChange={e => this.setRecord({
                    //     id: record.id, type: record.type,
                    //     ...this.getOptions(), seeValues: e.currentTarget.checked
                    //   })}
                    ></input>See Values?</label>
                    </NoWrap>
                  </li>
                  <li>
                    <NoWrap>
                      <label><input type="checkbox"
                      // checked={!this.state.showAllFields}
                      //   onChange={e => {
                      //     this.setRecord({
                      //       id: record.id, type: record.type,
                      //       ...this.getOptions(), showAllFields: !e.currentTarget.checked
                      //     });
                      //   }}
                      ></input>Hide Internal Fields?</label>
                    </NoWrap></li>
                </ul>
              </SearchViewToolBox>


              <h1>Search</h1>

              <label>Type: <select onChange={e => {
                const selectedRecordType = e.currentTarget.selectedOptions[0].value
                if (selectedRecordType) {
                  this.setState({ ...this.state, columns: typedSearchColumnValues[selectedRecordType], selectedRecordType })
                  // typedSearchColumnValues[type].map(c =>)
                  // this.changeOptions({ type });
                  // this.props.history.push('/listRecordTypes/' + type)
                  // this.changeOptions({ type })
                }
              }}>

                <option selected={!this.state.selectedRecordType}>Select a Record Type</option>
                {this.state.recordTypes.map(r =>
                  <option selected={this.state.selectedRecordType === r} value={r}>{r}</option>
                )}
              </select>
              </label>

              {this.state.columns && <label>Columns: <select>
                <option selected={!this.state.selectedRecordType}>Select a Record Type</option>
                {this.state.columns.map(c => <option value={c.id}>{c.label}</option>)}
              </select></label>}

              {this.state.selectedRecordType && <SearchEditor {...this.props} type={this.state.selectedRecordType!}></SearchEditor>}
            </div>}

          </Loading>
        </Container>
      </Page>
    )
  }

  // protected setRecord(v: FetchRecordOptions & SearchViewSettings): void {
  //   const t = { ...this.state, ...v }
  //   this.setState(t)
  //   this.updateOptionsWithState(t)
  //   this.props.fetchRecord(v)
  // }

  public getRouteOptionNames() {
    return []//'showAllFields', 'showSublistLines', 'seeValues', 'inlineEdit', 'findRecord']
  }
}

const SearchViewToolBox = styled(ToolBox)`
  left: 0px;
  top: 0px;
  li {
    display: inline;
    padding-right: 1em;
  }
  ul {
    margin: 0
  }
`


const mapStateToProps = ({ search }: ApplicationState) => ({
  ...search
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchSearch: (c: FetchSearchOptions) => dispatch(fetchSearch(c))
})

export const SearchView = withRouter((connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchViewIndexPage)))


