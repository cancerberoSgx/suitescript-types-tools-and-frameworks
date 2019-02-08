import { getSearchRecordTypes } from '../../search/getSearchRecordTypes';
import { Result } from '../../search/typedSearch/typedSearch';
import { RecordType } from '../../record/typedRecord/typedRecord';
import { ReactLike } from "../../jsx/createElement";
import { Bind } from '../../jsx/util/Bind';
import { RouteHandlerParams } from '../app';
import { StatelessComponent } from '../../jsx/StatelessComponent';

interface Props extends RouteHandlerParams {
  type?: string
  pageSize?: number
  results?: Result<RecordType>[]
  // dynamicResultsRender?: boolean
}

export const ListRecordTypes = (props: Props) => {

return <div>
    <p>
      <a href={props.renderLink({ routeName: 'mainPage', params: { ...props.currentParams } })}>Go back to Main Page</a>
    </p>
    Record type: {props.type} {props.results && props.results.length}
    <select id="ListRecordTypesSelect" onChange={e => {
      let type = e.currentTarget.value
      fetchAndRenderHtml({
        routeName: 'listRecordTypesResult',
        params: { type },
        selector: '#listRecordTypesDynamicResults'
      })
    }}>
      {getSearchRecordTypes().map(r =>
        <option selected={props.type == r} value={r}>{r}</option>
      )}
    </select>

    <span id="listRecordTypesDynamicResults">
      <ListRecordTypesResult {...props}></ListRecordTypesResult>
    </span>

  </div>
}


export class ListRecordTypesResult extends StatelessComponent<Props> {
  render() {
    if (!this.props.results) {
      return <span></span>
    }
    return <div>
      Results:
    <ul>{this.props.results.map(r =>
        <li>
          <a href={this.props.renderLink({ routeName: 'recordView', params: { id: r.id, type: r.recordType } })}>{r.recordType}  {r.id}</a>
        </li>)}
      </ul>
    </div>

  }
}




