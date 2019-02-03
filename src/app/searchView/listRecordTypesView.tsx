import { RenderLinkOptions } from '../browserCode';
import { getSearchRecordTypes } from '../../search/getSearchRecordTypes';
import { Result } from '../../search/typedSearch/typedSearch';
import { RecordType } from '../../record/typedRecord/typedRecord';
import { BindInputValue } from '../../jsx/util/BindInputValue';
import { ReactLike } from "../../jsx/createElement";


interface Props {
  type?: string
  pageSize?: number
  renderLink(config: RenderLinkOptions): string
  results?: Result<RecordType>[]
  dynamicResultsRender?: boolean
}

const bindInputValueId = `data-list-record-types`

export const ListRecordTypes = (props: Props) => {
  return <div>
    Record type: {props.type} {props.results && props.results.length}
    <BindInputValue bindInputId={bindInputValueId}>
      <select id="ListRecordTypesSelect">
        {getSearchRecordTypes().map(r =>
          <option selected={props.type == r} value={r}>{r}</option>
        )}
      </select>
    </BindInputValue>

    <BindInputValue bindListenerId={bindInputValueId}    >
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
    </BindInputValue>

    <span id="listRecordTypesDynamicResults"></span> 

    <span>{props.results ? <div>
      Results:
    <ul>{props.results.map(r =>
        <li>
          <a href={props.renderLink({ routeName: 'recordView', params: { id: r.id, type: r.recordType } })}>{r.recordType}  {r.id}</a>
        </li>)}
      </ul>
    </div> : <span></span>}</span>

  </div>
}




