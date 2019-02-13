import { RouteRequest } from '../../utils/routeUrl/parseRouteUrl';
import { encodeOptions } from './urlOptions';

/** responsible of associage a route app request params to a local client url (if any) */
export function routeRequestToOptions(request: RouteRequest): string {
  if (request.name === 'listRecordTypesJson') {
    // http://localhost:1234/#/api/__app__routeParamName=listRecordTypesJson&&__app__type=inventoryitem
    // TODO: not type error
    return `/listRecordTypes/${request.params.type || ''}/{}`;
  }
  if (request.name === 'recordViewJson') {
    // http://localhost:1234/#/api/__app__routeParamName=recordViewJson&__app__id=465&__app__type=inventoryitem&__app__seeValues=true&__app__showSublistLines=true
    // TODO: validate id and type mandatory
    return `/recordView/${request.params.type || ''}/${request.params.id || ''}/${encodeOptions({ seeValues: !!request.params.seeValues, showSublistLines: !!request.params.showSublistLines, showAllFields: !!request.params.showAllFields })}`;
  }
  else {
    // TODO: make notfound path configurable
    return `/notFound/`;
  }
}
