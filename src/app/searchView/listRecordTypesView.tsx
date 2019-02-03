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
}

const bindInputValueId = `data-list-record-types`

export const ListRecordTypes = (props: Props) => {
  return <div>
    Record type:
    <BindInputValue bindInputId={bindInputValueId}>
      <select id="ListRecordTypesSelect">
        {getSearchRecordTypes().map(r =>
          <option selected={props.type == r} value={r}>{r}</option>
        )}
      </select>
    </BindInputValue>

    <BindInputValue bindListenerId={bindInputValueId}    >
      <button onClick={e => {
        let type = getBindInputValue<string>(e.currentTarget);
        window.location.href = buildRouteUrl({ routeName: 'listRecordTypes', params: { type } });
      }}>
        Search</button>
    </BindInputValue>

    {props.results ? <div>
      Results:
    <ul>{props.results.map(r =>
        <li>
          <a href={props.renderLink({ routeName: 'recordView', params: { id: r.id, type: r.recordType } })}>{r.recordType}  {r.id}</a>
        </li>)}
      </ul>
    </div> : <span></span>}
  </div>
}



export function listRecordTypesRoute(app: App): Route {
  return {
    name: 'listRecordTypes',
    handler(o) {
      const { type, pageSizeS = '20' } = o.params
      const pageSize = parseInt(pageSizeS, 10)
      if (!type) {
        return ReactLike.render(<ListRecordTypes pageSize={pageSize} renderLink={app.renderLink.bind(app)}></ListRecordTypes>);
      }
      let counter = 0
      const results = filter({
        type: type as any,
        columns: []
      }, r => (((counter++) > pageSize) || !r) ? false : true)

      return ReactLike.render(<ListRecordTypes pageSize={pageSize} renderLink={app.renderLink.bind(app)} type={type} results={results}></ListRecordTypes>);
    }
  };
}
