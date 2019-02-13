import { ROUTE_APP_PARAM_PREFIX, SCRIPTLET_URL_PREFIX, ROUTE_PARAM } from './routeUrlConstants';

interface Params { [k: string]: any }
interface RenderLinkOptions {
  routeName: string;
  params: Params;
}

export function buildRouteUrl(config: RenderLinkOptions): string {
  const params: Params = {};
  Object.keys(config.params).map(p => { params[`${ROUTE_APP_PARAM_PREFIX}${p}`] = config.params[p]; });
  const url = buildUrl({ ...config, currentUrlSearchFragment: location.search, params });
  return url;
}

interface BuildUrlOptions extends RenderLinkOptions {
  /** the part of the current url with the search query with a routeParamName parameter present like `?script=293&deploy=1&compid=TSTDRV1844288&h=192074825c3ca8751438&routeParamName=mainPage&name=lau`. default value is location.search */
  currentUrlSearchFragment?: string;
}

function buildUrl(config: BuildUrlOptions) {
  const currentUrlSearchFragment = config.currentUrlSearchFragment || location.search
  const clean = `${SCRIPTLET_URL_PREFIX}${currentUrlSearchFragment.substring(0, currentUrlSearchFragment.indexOf(`&${ROUTE_PARAM}=`))}&${ROUTE_PARAM}=${config.routeName}`;
  return `${clean}&${Object.keys(config.params).map(p => `${p}=${getParamUrl(config.params[p])}`).join('&')}`;
}

function getParamUrl(v: any): string {
  if (typeof v === 'boolean' && !v) { return '' }
  return v
}

