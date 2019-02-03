import { ReactLike } from "../../jsx/createElement";
import { find } from '../../search/typedSearch/typedSearchOperations';
import { App, Route } from '../app';
import { load } from 'N/record';
import { RecordView } from '../recordView/recordView';
import { buildRecordViewModel } from '../recordView/buildRecordViewModel';

export function findRecordRoute(app: App): Route {
  return {
    name: 'findRecord',
    handler(o) {
      const { type, id } = o.params;
      if (!type || !id) {
        return app.notFound(o, 'findRecord invalid call: "type" and "id" params are required');
      }
      const result = find({
        type: type as any,
        columns: [],
        filters: [{ name: 'internalid', values: id, operator: 'anyOf' }]
      }, r => true);
      if (result) {
        const record = load({ id, type: result.recordType });
        return ReactLike.render(<RecordView record={buildRecordViewModel(record)} renderLink={app.renderLink.bind(app)} currentUrl={app.getCurrentRealUrlSearchFragment()} messageFromRedirect={`Record ${id} ${result.recordType} found`}></RecordView>);
      }
      else {
        return <div>Record {id} {type} not found</div>;
      }
    }
  };
}
