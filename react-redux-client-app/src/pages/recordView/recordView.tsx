/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { ApplicationState, ConnectedReduxProps } from '../../store';
import { RouteComponentProps } from 'react-router';
import { withRouter } from 'react-router-dom'
import { fetchRecord, FetchRecordOptions, Record, RecordViewSettings, RecordViewState } from '../../store/recordView';
import { RecordFields } from './recordFields';
import DataTable from '../../components/layout/DataTable';
import ToolBox from '../../components/toolBox';
import { OptionsUrlComponent } from '../../components/optionsUrlComponent';
import { Loading } from '../../components/data/Loading';
import { Page } from '../../components/layout/Page';
import { Container } from '../../components/layout/Container';
import styled from 'react-emotion';
import { withTheme } from 'emotion-theming';;
import { RecordSublists } from './recordSublists';
import { Count, NoWrap } from '../../components/misc';
import { ErrorComponent } from '../../components/search/errorComponent';
import { decodeOptions } from '../../utils/urlUtil';
import { Settings } from 'http2';

interface RecordViewStateProps extends RecordViewState {
}
interface PropsFromDispatch {
  fetchRecord: typeof fetchRecord
}
interface RouteParams {
  type?: string
  id?: string
  options?: string
}
export interface State extends RecordViewSettings {
  findRecord?: boolean
}
export type RecordViewAllProps = RecordViewStateProps & PropsFromDispatch & ConnectedReduxProps & RouteComponentProps<RouteParams>

class RecordViewIndexPage extends OptionsUrlComponent<RecordViewAllProps, State, State> {

  state: State = {}

  constructor(props: RecordViewAllProps, state: State) {
    super(props, state)
    this.state = { showAllFields: props.showAllFields, showSublistLines: props.showSublistLines, seeValues: props.seeValues }
  }

  componentWillUpdate() {
    this.updateOptionsWithState()
  }

  componentWillMount() {
    // super.componentWillMount()
    if ((this.props.match.params.type && this.props.match.params.type !== this.props.type) ||
      (this.props.match.params.id && this.props.match.params.id !== this.props.id)) {
      this.setRecord({
        id: this.props.match.params.id!,
        type: this.props.match.params.type!,
        ...this.getOptions()
      })
      // this.updateStateWithOptions()
    }
    // else {
    // }
  }

  public render() {
    const { record } = this.props
    // debugger
    return (
      <Page>
        <Container>

          {this.props.error ? <ErrorComponent {...this.props.error}></ErrorComponent> : ''}

          <Loading {...this.props}>
            {record && <div>


              <RecordViewToolBox>
                <ul>
                  <li>
                    <NoWrap><label><input type="checkbox" checked={this.state.seeValues}
                      onChange={e => this.setRecord({
                        id: record.id, type: record.type,
                        ...this.getOptions(), seeValues: e.currentTarget.checked
                      })}></input>See Values?</label>
                    </NoWrap>
                  </li>
                  <li>
                    <NoWrap>
                      <label><input type="checkbox" checked={!this.state.showAllFields}
                        onChange={e => {
                          this.setRecord({
                            id: record.id, type: record.type,
                            ...this.getOptions(), showAllFields: !e.currentTarget.checked
                          });
                        }}></input>Hide Internal Fields?</label>
                    </NoWrap></li>
                  <li>
                    <NoWrap>
                      <label><input type="checkbox" checked={this.state.showSublistLines}
                        onChange={e => this.setRecord({
                          id: record.id, type: record.type,
                          ...this.getOptions(), showSublistLines: e.currentTarget.checked
                        })}></input>Show Sublists Lines?</label>
                    </NoWrap></li>
                  <li>
                    <NoWrap><label><input type="checkbox" checked={this.state.inlineEdit}
                      onChange={e => this.setRecord({ id: record.id, type: record.type, inlineEdit: e.currentTarget.checked })}></input>Edit Inline?</label>
                    </NoWrap></li>
                </ul>
              </RecordViewToolBox>


              <h1>{record.type} {record.id} </h1>

              <h2>Fields <Count>{record.fields.length}</Count></h2>
              <RecordFields {...{ record, ...this.state }}  ></RecordFields>

              <h2>Sublists <Count>{record.sublists.length}</Count></h2>
              <RecordSublists {...this.props} setRecord={this.setRecord.bind(this)}></RecordSublists>
            </div>}

          </Loading>
        </Container>
      </Page>
    )
  }



  protected setRecord(v: FetchRecordOptions & Settings): void {
    const t = { ...this.state, ...v }
    this.setState(t)
    this.updateOptionsWithState(t)
    // debugger
    this.props.fetchRecord(v)
  }


  public getRouteOptionNames() {
    return ['showAllFields', 'showSublistLines', 'seeValues', 'inlineEdit', 'findRecord']
  }
}

export function getPosition(string: string, subString: string, index: number) {
  return string.split(subString, index).join(subString).length;
}

const mapStateToProps = ({ recordView }: ApplicationState) => ({
  type: recordView.type,
  id: recordView.id,
  error: recordView.error,
  record: recordView.record,
  loading: recordView.loading,
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchRecord: (c: FetchRecordOptions) => dispatch(fetchRecord(c))
})

export const RecordView = withRouter((connect(
  mapStateToProps,
  mapDispatchToProps
)(RecordViewIndexPage)))



const RecordViewToolBox = styled(ToolBox)`
li {
  display: inline;
  padding-right: 1em;
}
ul {
  margin: 0
}
`
