// this rename/re-exports is neccesary since we are referencing this variables directly from js code eval in browser
const ROUTEPARAMNAME_NOPREFIX_ = 'routeParamName'
const ROUTEPARAMPREFIX_ = '__app__'
const ROUTEPARAMNAME_ = ROUTEPARAMPREFIX_ + ROUTEPARAMNAME_NOPREFIX_
const SCRIPTLETURLPREFIX_ = '/app/site/hosting/scriptlet.nl'
export const ROUTEPARAMNAME_NOPREFIX = ROUTEPARAMNAME_NOPREFIX_
export const ROUTEPARAMPREFIX = ROUTEPARAMPREFIX_
export const ROUTEPARAMNAME = ROUTEPARAMNAME_
export const SCRIPTLETURLPREFIX = SCRIPTLETURLPREFIX_

import { Params} from './app';

export interface RenderLinkOptions {
  routeName: string;
  params: Params;
}

export interface RenderFragmentOptions extends RenderLinkOptions {
  selector: string;
}

interface BuildUrlOptions extends RenderLinkOptions {
  /** the part of the current url with the search query with a routeParamName parameter present like `?script=293&deploy=1&compid=TSTDRV1844288&h=192074825c3ca8751438&routeParamName=mainPage&name=lau` */
  currentUrlSearchFragment: string;
}

/** this function is meant to be evaluated in the browser and also in the server! */
export function buildUrl(config: BuildUrlOptions) {
  const clean = `${SCRIPTLETURLPREFIX_}${config.currentUrlSearchFragment.substring(0, config.currentUrlSearchFragment.indexOf(`&${ROUTEPARAMNAME_}=`))}&${ROUTEPARAMNAME_}=${config.routeName}`;
  const newParams = `${clean}&${Object.keys(config.params).map(p => `${p}=${config.params[p]}`).join('&')}`;
  return newParams;
}

/** this function is meant to be evaluated in the browser! */
function fetchAndRenderHtmlFragment(config: RenderFragmentOptions) {
  const url = buildRouteUrl(config);
  fetch(url)
    .then(function (response) {
      return response.text();
    })
    .then(function (html) {
      const parent = document.querySelector(config.selector);
      if (parent) {
        parent.innerHTML = html;
      }
    });
}

function buildRouteUrl(config: RenderLinkOptions): string {
  const params: Params = {};
  Object.keys(config.params).map(p => { params[`${ROUTEPARAMPREFIX_}${p}`] = config.params[p]; });
  const url = buildUrl({ ...config, currentUrlSearchFragment: location.search, params });
  return url;
}

export function paramsToUrl(params: Params, filter: (p:string)=>boolean=s=>true):string{
  return Object.keys(params).filter(filter).map(p=>`${p}=${params[p]}`).join('&')
}


export function renderBrowserCode() {
  // @ts-ignore
  const assign = __assign.toString()
  const s = `
var ROUTEPARAMNAME_ = "${ROUTEPARAMNAME_}";
var ROUTEPARAMPREFIX_ = "${ROUTEPARAMPREFIX_}";
var SCRIPTLETURLPREFIX_ = "${SCRIPTLETURLPREFIX_}"; 
var __assign = ${assign}
${buildRouteUrl.toString()}
${buildUrl.toString()}
${fetchAndRenderHtmlFragment.toString()}
function fetchAndRenderHtml(config){
  return fetchAndRenderHtmlFragment(config)
}
function buildLink(config){
  return buildRouteUrl(config)
}
`.trim()
  return s
}
