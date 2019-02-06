import { RenderLinkOptions } from '../browserCode';
import { getSearchRecordTypes } from '../../search/getSearchRecordTypes';
import { Result } from '../../search/typedSearch/typedSearch';
import { RecordType } from '../../record/typedRecord/typedRecord';
import { ReactLike } from "../../jsx/createElement";
import { Bind } from '../../jsx/util/Bind';
import { RouteHandlerParams } from '../app';


interface Props extends RouteHandlerParams{
  type?: string
  pageSize?: number
  // renderLink(config: RenderLinkOptions): string
  results?: Result<RecordType>[]
  dynamicResultsRender?: boolean
}

const bindInputValueId = `data-list-record-types`

export const ListRecordTypes = (props: Props) => {
  return <div>
    Record type: {props.type} {props.results && props.results.length}
    <Bind name={bindInputValueId}>
      <select id="ListRecordTypesSelect">
        {getSearchRecordTypes().map(r =>
          <option selected={props.type == r} value={r}>{r}</option>
        )}
      </select>
    </Bind>

    <Bind name={bindInputValueId}  >
    {props.dynamicResultsRender ? 
      <button 
      onClick={e => {
        let type = getBindInputValue<string>(e.currentTarget);
        fetchAndRenderHtml({ routeName: 'listRecordTypes', params: { type }, selector: '#listRecordTypesDynamicResults' })
      }}>Search</button> : 
      <button 
      onClick={e => {
        let type = getBindInputValue<string>(e.currentTarget);
        window.location.href = buildRouteUrl({ routeName: 'listRecordTypes', params: { type } });
      }}
      >   Search</button>
    }
    </Bind>

    <span id="listRecordTypesDynamicResults"></span> 

    {props.results && <div>
      Results:
    <ul>{props.results.map(r =>
        <li>
          <a href={props.renderLink({ routeName: 'recordView', params: { id: r.id, type: r.recordType } })}>{r.recordType}  {r.id}</a>
        </li>)}
      </ul>
    </div> ||''}
  </div>
}




