import * as React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import moment from 'moment'

import styled from '../../utils/styled'
import Page from '../../components/layout/Page'
import Container from '../../components/layout/Container'
import DataTable from '../../components/layout/DataTable'
import LoadingOverlay from '../../components/data/LoadingOverlay'
import LoadingOverlayInner from '../../components/data/LoadingOverlayInner'
import LoadingSpinner from '../../components/data/LoadingSpinner'

import { ApplicationState, ConnectedReduxProps } from '../../store'
// import { Team } from '../../store/teams/types'
import { fetchRequest, fetchListRecord } from '../../store/listRecordTypes/actions'
import { Dispatch } from 'redux';
import { ListRecordTypeResult } from '../../store/listRecordTypes';
// import callApi from '../../utils/callApi';

// Separate state props + dispatch props to their own interfaces.
interface PropsFromState {
  loading: boolean
  // data: ListRecordTypeResult[]
  type?: string
  results?: ListRecordTypeResult[]
  errors?: string
  recordTypes: string[]
}

// We can use `typeof` here to map our dispatch types to the props, like so.
interface PropsFromDispatch {
  // fetchRequest: typeof fetchRequest
  listRecord: typeof fetchListRecord
}

// Combine both state + dispatch props - as well as any props we want to pass - in a union type.
type AllProps = PropsFromState & PropsFromDispatch & ConnectedReduxProps

interface RenderLinkOptions {
  routeName: string;
  params: { [k: string]: any };
}
declare function buildRouteUrl(config: RenderLinkOptions): string;
function getRoute(config: RenderLinkOptions) {
  const url = buildRouteUrl(config)

  return fetch(url)
    .then(function (response) {
      return response.json();
    })
}
class ListRecordTypesIndexPage extends React.Component<AllProps> {

  public render() {
    const { loading } = this.props

    // if (this.props.results) {
    //   console.log(this.props.results, typeof this.props.results);
    //   debugger
    // }

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

            Record Types:
            <select onChange={e => {
              this.props.listRecord(e.currentTarget.selectedOptions[0].value)
            }
            }>

              {this.props.recordTypes.map(r => <option value={r}>{r}</option>)}

            </select>

            {this.props.results ? <div>
              Results ({this.props.results.length}): <ul>
                {this.props.results.map(r => <li>{r.id}</li>)}
              </ul>

            </div> : <div></div>}

          </TableWrapper>
        </Container>
      </Page>
    )
  }

}

// It's usually good practice to only include one context at a time in a connected component.
// Although if necessary, you can always include multiple contexts. Just make sure to
// separate them from each other to prevent prop conflicts.
const mapStateToProps = ({ listRecordTypes }: ApplicationState) => ({
  // loading: listRecordTypes.results
  type: listRecordTypes.type,
  results: listRecordTypes.results,
  recordTypes: listRecordTypes.recordTypes
})

// mapDispatchToProps is especially useful for constraining our actions to the connected component.
// You can access these via `this.props`.
const mapDispatchToProps = (dispatch: Dispatch) => ({
  // fetchRequest: () => dispatch(fetchRequest())
  listRecord: (type: string) => dispatch(fetchListRecord(type))
  // listRecord: typeof fetchRequest
})

// Now let's connect our component!
// With redux v4's improved typings, we can finally omit generics here.
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListRecordTypesIndexPage)

const TableWrapper = styled('div')`
  position: relative;
  max-width: ${props => props.theme.widths.md};
  margin: 0 auto;
  min-height: 200px;
`

// const TeamDetail = styled('td')`
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   min-height: 66px;
// `

// const TeamLogo = styled('img')`
//   width: 50px;
//   height: 50px;
// `

// const TeamName = styled('div')`
//   flex: 1 1 auto;
//   height: 100%;
//   margin-left: 1rem;

//   a {
//     color: ${props => props.theme.colors.brand};
//   }
// `
