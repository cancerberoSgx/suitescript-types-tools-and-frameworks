import { RouteRequest } from '../../utils/routeUrl/parseRouteUrl';
import { encodeOptions } from './urlOptions';
// export const apiRequest = (options: ApiRequestOptions) => {
// const request = parseRouteUrl(options.routeUrlParams)
// debugger
// if (request.name === 'recordViewJson') {
//   return action(ListRecordTypesActionTypes.FETCH_LIST, { type: request.params.type, pageSize: 5 })
// }
// if (request.name === 'recordView') {
//   return action(RecordViewActionTypes.FETCH, { type: request.params.type, id: request.params.id })
// }
// else {
//   return action<ApiActionTypes.API_ERROR, ErrorOptions>(ApiActionTypes.API_ERROR, { error: new Error(`Api operation name not supported or invalid: ${request.name}`), responseText: '' })
// }
// }
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
    // use custom error page and mssg /apiErrorAction and cutom apiState
    return `/notFound/`;
  }
}
