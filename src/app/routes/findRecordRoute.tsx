import { ReactLike } from "../../jsx/createElement";
import { find } from '../../search/typedSearch/typedSearchOperations';
import { App, Route } from '../app';

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
        app.redirect({redirect: app.renderLink({routeName: 'recordView', params: {id, type: result.recordType}}), messageFromRedirect: `Record ${id} ${result.recordType} found`})
      }
      else {
        return <div>Record {id} {type} not found</div>;
      }
    }
  };
}
