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
import { tryTo } from '../../utils/misc';

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
interface State extends RecordViewSettings {
}
type RecordViewAllProps = RecordViewStateProps & PropsFromDispatch & ConnectedReduxProps & RouteComponentProps<RouteParams>

class RecordViewIndexPage extends React.Component<RecordViewAllProps, State> {

  state: State = {}

  constructor(props: RecordViewAllProps, state: State) {
    super(props, state)
    this.state = { showAllFields: props.showAllFields, showSublistLines: props.showSublistLines, seeValues: props.seeValues }
  }

  componentWillMount() {
    this.updateStateWithOptions()
  }

  componentWillUpdate() {

  }

  public render() {


    this.updateOptionsWithState()

    if ((this.props.match.params.type && this.props.match.params.type !== this.props.type) ||
      (this.props.match.params.id && this.props.match.params.id !== this.props.id)) {
      this.setRecord({
        id: this.props.match.params.id!,
        type: this.props.match.params.type!,
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


  protected decodeOptions<T extends Partial<State> = {}>(op = this.props.match.params.options): T {
    if (op) {
      return tryTo(() => JSON.parse(decodeURIComponent(op || '{}'))) || {} as any
    }
    return {} as any
  }
  protected encodeOptions<T extends Partial<State> = {}>(options: T): string | {} {
    return tryTo(() => encodeURIComponent(JSON.stringify(options))) || {}
  }
  protected updateStateWithOptions<T extends Partial<State> = {}>(options: T = this.decodeOptions()) {
    const o: T = {} as any
    Object.keys(options).filter(k => options[k] != this.state[k]).forEach(k => { o[k] = options[k] })
    if (Object.keys(o).length) {
      this.setState({ ...this.state, ...o })
      Object.keys(o).forEach(k => this.state[k] = o[k])
    }
    // debugger
  }
  protected updateOptionsWithState<T extends Partial<State> = {}>(options: T = this.decodeOptions()) {
    debugger
    const newOptions: T = {} as any
    Object.keys(this.state).filter(k => options[k] != this.state[k] && this.getOptionNames().indexOf(k) !== -1).forEach(k => {
      newOptions[k] = this.state[k]
    })


    if (Object.keys(newOptions).length) {
      // console.log(Object.keys(this.state).length, Object.keys(newOptions).length);
      const level = Object.keys(this.props.match.params).length
      const index = getPosition(this.props.match.url, '/', level + 1)
      const prefix = this.props.match.url.substring(0, index)
      const newPath = prefix + '/' + this.encodeOptions({ ...options, ...newOptions })
      debugger
      this.props.history.push(newPath)
    }
  }
  protected getOptionNames() {
    return ['showAllFields', 'showSublistLines', 'seeValues']
  }

}
function getPosition(string: string, subString: string, index: number) {
  return string.split(subString, index).join(subString).length;
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


