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
import { fetchRecord } from '../../store/recordView';

interface PropsFromState {
  loading?: boolean
  type?: string
  id?: string
  errors?: string
  //   seeValues?: boolean;
  //   showAllFields?: boolean;
  //   showSublistLines?: boolean;
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
    if (this.props.match.params.type && this.props.match.params.type !== this.props.type) {
      this.props.fetchRecord(this.props.match.params.type)
    }

    const { loading, type } = this.props

    return (
      <Page>
        <Container>
          <div>controls
          </div>
          <TableWrapper>
            {loading && (
              <LoadingOverlay>
                <LoadingOverlayInner>
                  <LoadingSpinner />
                </LoadingOverlayInner>
              </LoadingOverlay>
            )}
            content
          </TableWrapper>
        </Container>
      </Page>
    )
  }
}

const mapStateToProps = ({ recordView }: ApplicationState) => ({
  type: recordView.type,
  id: recordView.id,
  record: recordView.record,
  loading: recordView.loading,
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchRecord: (type: string) => dispatch(fetchRecord(type))
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
