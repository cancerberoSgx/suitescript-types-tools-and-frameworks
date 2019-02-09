import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import LoadingOverlay from '../../components/data/LoadingOverlay';
import LoadingOverlayInner from '../../components/data/LoadingOverlayInner';
import LoadingSpinner from '../../components/data/LoadingSpinner';
import Container from '../../components/layout/Container';
import Page from '../../components/layout/Page';
import { ApplicationState, ConnectedReduxProps } from '../../store';
import { RouteComponentProps } from 'react-router';
import { withRouter } from 'react-router-dom'
import { fetchRecord, FetchRecordOptions, Record, RecordViewSettings, RecordViewState } from '../../store/recordView';
import { TableWrapper } from '../../components/data/LoadingWrapper';
import { RecordFields } from './recordFields';

interface RecordViewStateProps extends RecordViewState {
}

interface PropsFromDispatch {
  fetchRecord: typeof fetchRecord
}
interface RouteParams {
  type?: string
  id?: string
}
interface State extends RecordViewSettings {

}
type RecordViewAllProps = RecordViewStateProps & PropsFromDispatch & ConnectedReduxProps & RouteComponentProps<RouteParams>

class RecordViewIndexPage extends React.Component<RecordViewAllProps, State> {

  state: State = {}

  constructor(props: RecordViewAllProps, state: State) {
    super(props, state)
    this.state = { showAllFields: props.showAllFields, showSublistLines: props.showSublistLines, seeValues: props.seeValues }
  }

  public render() {
    if ((this.props.match.params.type && this.props.match.params.type !== this.props.type) ||
      (this.props.match.params.id && this.props.match.params.id !== this.props.id)) {
      this.setRecord({
        id: this.props.match.params.id!, type: this.props.match.params.type!,
      })
    }

    const { loading, record } = this.props

    return (
      <Page>
        <Container>
          <TableWrapper>
            {loading && (
              <LoadingOverlay>
                <LoadingOverlayInner>
                  <LoadingSpinner />
                </LoadingOverlayInner>
              </LoadingOverlay>
            )}
            {record && <div>
              <h1>Record {record.type} - {record.id} </h1>
              {record.name !== record.id && <h2>{record.name}</h2>}

              <div><ul>
                <li>
                  <label><input type="checkbox" checked={this.state.seeValues} onChange={e => this.setRecord({ id: record.id, type: record.type, seeValues: e.currentTarget.checked })}></input>See Values?</label>
                </li>
                <li>
                  <label><input type="checkbox" checked={!this.state.showAllFields} onChange={e => {
                    this.setRecord({ id: record.id, type: record.type, showAllFields: !e.currentTarget.checked })
                  }
                  }></input>Hide Internal Fields?</label>
                </li>
                <li>
                  <label><input type="checkbox" checked={this.state.showSublistLines} onChange={e => this.setRecord({ id: record.id, type: record.type, showSublistLines: e.currentTarget.checked })}></input>Show Sublists lines?</label>
                </li>
              </ul>
              </div>
              {/* <div>settings: {JSON.stringify({ seeValues: this.props.seeValues, showAllFields: this.props.showAllFields, showSublistLines: this.props.showSublistLines })}</div> */}

              <h3>Fields (#{record.fields.length})</h3>
              <RecordFields {...{ record, ...this.state }}  ></RecordFields>
            </div>}
          </TableWrapper>
        </Container>
      </Page>
    )
  }
  protected setRecord(v: FetchRecordOptions): void {
    this.setState({ ...this.state, ...v })
    this.props.fetchRecord(v)
  }
}
const mapStateToProps = ({ recordView }: ApplicationState) => ({
  type: recordView.type,
  id: recordView.id,
  record: recordView.record,
  loading: recordView.loading,
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchRecord: (c: FetchRecordOptions) => dispatch(fetchRecord(c))
})

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(RecordViewIndexPage))


