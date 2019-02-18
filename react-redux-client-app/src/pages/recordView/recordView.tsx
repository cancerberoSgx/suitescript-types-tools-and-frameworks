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
import { fetchRecord, FetchRecordOptions, RecordViewSettings, RecordViewState } from '../../store/recordView';
import { RecordFields } from './recordFields';
import { RecordSublists } from './recordSublists';
import { print } from '../../utils/test';

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

export interface State extends RecordViewState, RecordViewSettings {
}

export type RecordViewAllProps = RecordViewStateProps & PropsFromDispatch & ConnectedReduxProps & RouteComponentProps<RouteParams>

class RecordViewIndexPage extends OptionsUrlComponent<RecordViewAllProps, State, State> {

  constructor(props: RecordViewAllProps, state: State) {
    super(props, state)
    this.state = {
      // showAllFields: props.showAllFields,
      // showSublistLines: props.showSublistLines,
      // seeValues: props.seeValues,
      // HEADS UP: dont init the state so it gets updated with route options
    }
  }

  protected async getExtraUrlOptions(): Promise<Partial<State>> {
    var extra: Partial<State> = {} as any
    if (this.props.match.params.type && this.props.match.params.type !== this.state.type) {
      extra = { ...extra, type: this.props.match.params.type }
    }
    if (this.props.match.params.id && this.props.match.params.id !== this.state.id) {
      extra = { ...extra, id: this.props.match.params.id }
    }
    return extra
  }

  protected async executeActionForNewOptions(options: State): Promise<void> {
    // if (options.id && options.type) {
      const newOptions = {
        id: this.props.match.params.id!,
        type: this.props.match.params.type!,
        ...(await this.getOptions()), ...options
      }
      this.props.fetchRecord(newOptions)
    // }
  }

  public render() {
    const { record } = this.props
    return (
      <Page>
        <Container className="record-view">
          {this.props.error ? <ErrorComponent {...this.props.error}></ErrorComponent> : ''}
          <Loading {...this.props}>
            {record && <div>
              <RecordViewToolBox className="RecordViewToolBox">
                <ul>
                  <li>
                    <NoWrap><label className="seeValues"><input type="checkbox" defaultChecked={this.state.seeValues}
                      onChange={e => this.setState({ seeValues: e.currentTarget.checked })}>
                    </input>See Values?</label>
                    </NoWrap>
                  </li>
                  <li>
                    <NoWrap>
                      <label className="showAllFields"><input type="checkbox" defaultChecked={!this.state.showAllFields}
                        onChange={e => {this.setState({ showAllFields: !e.target.checked });
                        }}>
                      </input>Hide Internal Fields?</label>
                    </NoWrap></li>
                  <li>
                    <NoWrap>
                      <label className="showSublistLines" ><input type="checkbox" defaultChecked={this.state.showSublistLines}
                        onChange={e => this.setState({ showSublistLines: e.currentTarget.checked })}>
                      </input>Show Sublists Lines?</label>
                    </NoWrap></li>
                  <li>
                    <NoWrap><label className="inlineEdit" ><input type="checkbox" defaultChecked={this.state.inlineEdit}
                      onChange={e => this.setState({
                        inlineEdit: e.currentTarget.checked
                      })}>
                    </input>Edit Inline?</label>
                    </NoWrap></li>
                </ul>
              </RecordViewToolBox>

              <h1>{record.type} {record.id} </h1>

              <h2>Fields <Count>{record.fields.length}</Count></h2>
              <RecordFields {...{ record, ...this.state }}  ></RecordFields>

              <h2>Sublists <Count>{record.sublists.length}</Count></h2>
              <RecordSublists {...{ ...this.props, ...this.state }}
                setRecord={(...args) => {
                  throw 'Not implemented'
                }}></RecordSublists>
            </div>}

          </Loading>
        </Container>
      </Page>
    )
  }

  public getRouteOptionNames() {
    return ['showAllFields', 'showSublistLines', 'seeValues', 'inlineEdit', 'findRecord']
  }
}

const RecordViewToolBox = styled(ToolBox)`
  left: 0px;
  top: 0px;
  li {
    display: inline;
    padding-right: 1em;
  }
  ul {
    margin: 0;
  }
`

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


