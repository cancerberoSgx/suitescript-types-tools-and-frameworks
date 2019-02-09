import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import LoadingOverlay from '../../components/data/LoadingOverlay';
import LoadingOverlayInner from '../../components/data/LoadingOverlayInner';
import LoadingSpinner from '../../components/data/LoadingSpinner';
import Container from '../../components/layout/Container';
import Page from '../../components/layout/Page';
import { ApplicationState, ConnectedReduxProps } from '../../store';
import styled from '../../utils/styled';
import { RouteComponentProps } from 'react-router';
import { withRouter } from 'react-router-dom'
import { fetchRecord, FetchRecord, Record } from '../../store/recordView';
import DataTable from '../../components/layout/DataTable';

interface PropsFromState {
  loading?: boolean
  type?: string
  id?: string
  errors?: string
  record?: Record
  showSublistLines?: boolean, seeValues?: boolean, showAllFields?: boolean
}




interface PropsFromDispatch {
  fetchRecord: typeof fetchRecord
}
interface RouteParams {
  type?: string
  id?: string
}

type AllProps = PropsFromState & PropsFromDispatch & ConnectedReduxProps & RouteComponentProps<RouteParams>

class RecordViewIndexPage extends React.Component<AllProps> {

  public render() {
    // debugger
    if ((this.props.match.params.type && this.props.match.params.type !== this.props.type) ||
      (this.props.match.params.id && this.props.match.params.id !== this.props.id)) {
      this.props.fetchRecord({
        id: this.props.match.params.id!, type: this.props.match.params.type!,
        showSublistLines: this.props.showSublistLines, seeValues: this.props.seeValues, showAllFields: this.props.showAllFields
      })
    }

    const { loading, type, record } = this.props

    return (
      <Page>
        <Container>
          <div>
          </div>
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
              {record.name && <h2>{record.name}</h2>}

              <h3>Fields</h3>
              <RecordFields record={record}></RecordFields>
            </div>}
          </TableWrapper>
        </Container>
      </Page>
    )
  }
}

class RecordFields extends React.Component<{ record: Record }> {
  render() {
    return <div>
      <DataTable columns={['fieldId', 'label', 'type', 'flags', 'help']}>
        {this.props.record.fields.map(f => <tr>
          <td>{f.id}</td><td>{f.name}</td><td>{f.type}</td><td>{f.isDisplay && 'display '}{f.isMandatory && 'mandatory '}{f.isReadonly && 'readonly '}{f.isVisible && 'visible'}</td><td>TODO</td>

        </tr>)}

      </DataTable>
    </div>
  }
}
const mapStateToProps = ({ recordView }: ApplicationState) => ({
  type: recordView.type,
  id: recordView.id,
  record: recordView.record,
  loading: recordView.loading,
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchRecord: (c: FetchRecord) => dispatch(fetchRecord(c))
})

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(RecordViewIndexPage))

const TableWrapper = styled('div')`
  position: relative;
  max-width: ${props => props.theme.widths.md};
  margin: 0 auto;
  min-height: 200px;
`
