import { ReactLike } from "../../jsx/createElement";
import { RenderLinkOptions } from '../browserCode';
import { getSearchRecordTypes } from '../../search/getSearchRecordTypes';
import { App, Route } from '../app';
import { filter } from '../../search/typedSearch/typedSearchOperations';
import { Result } from '../../search/typedSearch/typedSearch';
import { RecordType } from '../../record/typedRecord/typedRecord';
import { BindInputValue } from '../../jsx/util/BindInputValue';
import { BindInputValueAndStoreData } from '../../jsx/util/Bind';

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
    Record type: {props.dynamicResultsRender}
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

    {props.dynamicResultsRender ? <div id="listRecordTypesDynamicResults"></div> : 
    <span>{props.results ? <div>
      Results:
    <ul>{props.results.map(r =>
        <li>
          <a href={props.renderLink({ routeName: 'recordView', params: { id: r.id, type: r.recordType } })}>{r.recordType}  {r.id}</a>
        </li>)}
      </ul>
    </div> : <span></span>}</span>
    }
  </div>
}



export function listRecordTypesRoute(app: App): Route {
  return {
    name: 'listRecordTypes',
    handler(o) {
      const { type} = o.params
      const pageSize = parseInt(o.params.pageSize||'20', 10)
      const dynamicResultsRender = !!o.params.dynamicResultsRender
      if (!type) {
        return ReactLike.render(<ListRecordTypes pageSize={pageSize} renderLink={app.renderLink.bind(app)}></ListRecordTypes>);
      }
      let counter = 0
      const results = filter({
        type: type as any,
        columns: []
      }, r => (((counter++) > pageSize) || !r) ? false : true)

      return ReactLike.render(<ListRecordTypes pageSize={pageSize} renderLink={app.renderLink.bind(app)} type={type} results={results} dynamicResultsRender={dynamicResultsRender}></ListRecordTypes>);
    }
  };
}
