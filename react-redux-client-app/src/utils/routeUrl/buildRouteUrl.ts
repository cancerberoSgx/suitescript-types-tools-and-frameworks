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




// function paramsToUrl(params: Params, filter: (p: string) => boolean = s => true): string {
//   return Object.keys(params).filter(filter).map(p => `${p}=${params[p]}`).join('&')
// }
// interface RenderFragmentOptions extends RenderLinkOptions {
//   selector: string;
// }
// /** this function is meant to be evaluated in the browser! */
// function fetchAndRenderHtmlFragment(config: RenderFragmentOptions) {
//   const url = buildRouteUrl(config);
//   const parent = document.querySelector(config.selector);
//   if (!parent) {
//     return // TODO: log?
//   }
//   parent.innerHTML = `<div>Loading new content...</div>`
//   fetch(url)
//     .then(function (response) {
//       return response.text();
//     })
//     .then(function (html) {
//       parent.innerHTML = html;
//     });
// }

// function buildParams(p: ParamsText): Params {
// var params : Params = {}
// Object.keys(p).forEach(k=>{params[k]= get})
// return params[]
// }
// export function renderBrowserCode() {
//   // @ts-ignore
//   const assign = __assign.toString()
//   const s = `
// var ROUTEPARAMNAME_ = "${ROUTEPARAMNAME_}";
// var ROUTEPARAMPREFIX_ = "${ROUTEPARAMPREFIX_}";
// var SCRIPTLETURLPREFIX_ = "${SCRIPTLETURLPREFIX_}";
// var __assign = ${assign}
// ${buildRouteUrl.toString()}
// ${buildUrl.toString()}
// ${fetchAndRenderHtmlFragment.toString()}
// function fetchAndRenderHtml(config){
//   return fetchAndRenderHtmlFragment(config)
// }
// function buildLink(config){
//   return buildRouteUrl(config)
// }
// `.trim()
//   return s
// }
