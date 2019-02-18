/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { withRouter } from 'react-router-dom';
import { Dispatch } from 'redux';
import { Loading } from '../../components/data/Loading';
import { Container } from '../../components/layout/Container';
import { Page } from '../../components/layout/Page';
import { Count, NoWrap } from '../../components/misc';
import { OptionsUrlComponent } from '../../components/optionsUrlComponent';
import { ErrorComponent } from '../../components/data/errorComponent';
import ToolBox from '../../components/toolBox';
import { ApplicationState, ConnectedReduxProps } from '../../store';
import { ErrorOptions } from '../../store/commonTypes';
import { getSearchRecordTypes } from '../../nstypes/search';
import { FetchRecordOptions } from '../../store/recordView';
import { FetchSearchOptions, fetchSearch } from '../../store/search';
import { typedSearchColumnValues } from '../../nstypes/TypedSearchColumnValues';
import { ColumnEditor, SearchEditor } from './searchEditor';

interface SearchViewStateProps {
  loading?: boolean
  error?: ErrorOptions
  type?: string
}

interface PropsFromDispatch {
}

interface RouteParams {
  options?: string
}

export interface State {
  recordTypes: string[]
  selectedRecordType?: string
  columns?: SearchColumn[]
  selectedColumn?: string
}
export interface SearchColumn {
  id: string, label: string, type: string
}
export type SearchViewAllProps = SearchViewStateProps & PropsFromDispatch & ConnectedReduxProps & RouteComponentProps<RouteParams>


class SearchViewIndexPage extends OptionsUrlComponent<SearchViewAllProps, State, Partial<State>> {
  protected async executeActionForNewOptions(options: State): Promise<void> {
    throw new Error('Method not implemented.');
  }


  constructor(props: SearchViewAllProps, state: State) {
    super(props, state)
    this.state = {
      recordTypes: getSearchRecordTypes()
    }
  }

  public render() {
    const { } = this.props
    return (
      <Page>
        <Container className="search">
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

              <label>Type: <select defaultValue={this.state.selectedRecordType || ''} onChange={e => {
                const selectedRecordType = e.currentTarget.selectedOptions[0].value
                if (selectedRecordType) {
                  this.setState({ ...this.state, columns: typedSearchColumnValues[selectedRecordType], selectedRecordType })
                  // typedSearchColumnValues[type].map(c =>)
                  // this.changeOptions({ type });
                  // this.props.history.push('/listRecordTypes/' + type)
                  // this.changeOptions({ type })
                }
              }}>

                <option>Select a Record Type</option>
                {this.state.recordTypes.map(r =>
                  <option key={r}  value={r}>{r}</option>
                )}
              </select>
              </label>

              {this.state.columns && <label>Columns: <select defaultValue={this.state.selectedColumn}>
                <option>Select a Record Type</option>
                {this.state.columns.map(c =>
                   <option  key={c.id} value={c.id}>{c.label}</option>)}
              </select></label>}

              {this.state.selectedRecordType && this.state.columns && <SearchEditor {...this.props} type={this.state.selectedRecordType!} columns={this.state.columns} filters={[]} ></SearchEditor>}
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


