import { ROUTE_PARAM_NOPREFIX, ROUTE_APP_PARAM_PREFIX } from "./routeUrlConstants";

/**
 * @param urlSearchFragment a valid app route parameters search query string. example: `__app__routeParamName=recordViewJson&__app__id=2&__app__type=commercecategory&__app__seeValues=true.json`
 */
export function parseRouteUrl(urlSearchFragment: string): RouteRequest {
  const params = parseParamsText(urlSearchFragment);
  const name = params[ROUTE_PARAM_NOPREFIX] as KnownRouteNames
  delete params[ROUTE_PARAM_NOPREFIX];
  return { name, params };
}

export interface RouteRequest {
  name: KnownRouteNames;
  params: RouteParams;
}

export type RouteParams = {
  [p: string]: string;
}

export type KnownRouteNames = 'listRecordTypes' | 'recordView' | 'recordViewJson' | 'listRecordTypesJson'


function parseParamsText(s: string, exclude: string[] = []): RouteParams {
  const r = {};
  s.split('&')
    .map(pair => {
      const [name, value] = pair.split('=');
      return { name, value };
    })
    .filter(p => p.name.startsWith(ROUTE_APP_PARAM_PREFIX) && !exclude.includes(p.name))
    .forEach(p => {
      const noPrefixName = p.name.substring(ROUTE_APP_PARAM_PREFIX.length, p.name.length)
      r[noPrefixName] = p.value;
    });
  return r as RouteParams;
}
